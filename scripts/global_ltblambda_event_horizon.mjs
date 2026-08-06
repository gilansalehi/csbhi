#!/usr/bin/env node

// Reproducible late-time event-horizon calculation for the compensated
// Lambda-LTB benchmark. Units are c=1; lengths and times are Mpc.
//
// This script computes the exact common-bang-time mass correction, the
// Lambda-selected marginal shell, and the logarithmic dwell exponent. It does
// not substitute a trapping horizon for the unresolved intermediate global
// event horizon.

const C_KM_S = 299_792.458;
const H0 = 67.4 / C_KM_S;
const OMEGA_M = 0.315;
const OMEGA_L = 0.685;
const H_LAMBDA = H0 * Math.sqrt(OMEGA_L);
const Z_I = 300;
const A_I = 1 / (1 + Z_I);
const T_I =
  (2 / (3 * H0 * Math.sqrt(OMEGA_L))) *
  Math.asinh(Math.sqrt(OMEGA_L / OMEGA_M) * A_I ** 1.5);

const SIGMA = 0.005;
const AMP = 1.7e-11;
const ALPHA = 0.225;
const BETA = ALPHA / 2 - 1 / 8;
const X_STAR = Math.sqrt(
  (2 * (1 - 2 * ALPHA + Math.sqrt((1 - 2 * ALPHA) * (3 - 10 * ALPHA)))) /
    (1 - 4 * ALPHA),
);
const SOLAR_MASS_LENGTH_MPC = 1.4766250385 / 3.085677581491367e19;
const MPC_TO_SECONDS = 3.085677581491367e19 / C_KM_S;

const bisect = (fn, lo, hi, iterations = 90) => {
  let flo = fn(lo);
  let fhi = fn(hi);
  if (!(flo * fhi <= 0)) {
    throw new Error(`Unbracketed root on [${lo}, ${hi}]: ${flo}, ${fhi}`);
  }
  for (let i = 0; i < iterations; i += 1) {
    const mid = (lo + hi) / 2;
    const fm = fn(mid);
    if (flo * fm <= 0) {
      hi = mid;
      fhi = fm;
    } else {
      lo = mid;
      flo = fm;
    }
  }
  return (lo + hi) / 2;
};

const findFirstSignChange = (fn, lo, hi, count = 4_000) => {
  let x0 = lo;
  let f0 = fn(x0);
  for (let i = 1; i <= count; i += 1) {
    const x1 = lo + ((hi - lo) * i) / count;
    const f1 = fn(x1);
    if (f0 * f1 <= 0) return [x0, x1];
    x0 = x1;
    f0 = f1;
  }
  throw new Error(`No sign change on [${lo}, ${hi}]`);
};

const gaussLegendre = (n) => {
  const nodes = Array(n);
  const weights = Array(n);
  const half = Math.ceil(n / 2);
  for (let i = 0; i < half; i += 1) {
    let z = Math.cos((Math.PI * (i + 0.75)) / (n + 0.5));
    let previous;
    let derivative = 0;
    do {
      let p0 = 1;
      let p1 = z;
      for (let j = 2; j <= n; j += 1) {
        const p2 = ((2 * j - 1) * z * p1 - (j - 1) * p0) / j;
        p0 = p1;
        p1 = p2;
      }
      derivative = (n * (z * p1 - p0)) / (z * z - 1);
      previous = z;
      z -= p1 / derivative;
    } while (Math.abs(z - previous) > 2e-15);
    const weight = 2 / ((1 - z * z) * derivative * derivative);
    nodes[i] = -z;
    nodes[n - 1 - i] = z;
    weights[i] = weight;
    weights[n - 1 - i] = weight;
  }
  return { nodes, weights };
};

const GL = gaussLegendre(256);
const integrate = (fn, lo, hi) => {
  const midpoint = (lo + hi) / 2;
  const halfWidth = (hi - lo) / 2;
  let sum = 0;
  for (let i = 0; i < GL.nodes.length; i += 1) {
    sum += GL.weights[i] * fn(midpoint + halfWidth * GL.nodes[i]);
  }
  return halfWidth * sum;
};

const envelopePrime = (x) =>
  Math.exp(-(x * x) / 2) *
  x *
  ((2 * ALPHA - 1) + (4 * BETA - ALPHA) * x ** 2 - BETA * x ** 4);
const curvature = (x) => {
  const q = x < X_STAR ? -2 * AMP * x * envelopePrime(x) : 0;
  return q / (1 + q);
};

const initialEta = (x) => {
  const target =
    (T_I * Math.sqrt(curvature(x))) / (A_I * SIGMA * x);
  return bisect(
    (eta) => (eta - Math.sin(eta)) / (1 - Math.cos(eta)) - target,
    1e-7,
    Math.PI - 1e-10,
  );
};

const matterEraMass = (x) => {
  const k = curvature(x);
  return (A_I * SIGMA * x * k) / (1 - Math.cos(initialEta(x)));
};

const ageFromBang = (gm, k, y) =>
  integrate((s) => {
    const radius = y * s * s;
    const speed2 = 2 * gm / radius - k + H_LAMBDA ** 2 * radius ** 2;
    return (2 * y * s) / Math.sqrt(speed2);
  }, 1e-14, 1);

const massCache = new Map();
const massLength = (x) => {
  const key = x.toPrecision(15);
  if (massCache.has(key)) return massCache.get(key);
  const m0 = matterEraMass(x);
  const k = curvature(x);
  const yInitial = A_I * SIGMA * x;
  const residual = (gm) => ageFromBang(gm, k, yInitial) - T_I;
  let lo = m0 * (1 - 2e-5);
  let hi = m0 * (1 + 2e-6);
  while (residual(lo) <= 0) lo *= 0.999;
  while (residual(hi) >= 0) hi *= 1.001;
  const answer = bisect(residual, lo, hi, 55);
  massCache.set(key, answer);
  return answer;
};

const bindingDiscriminant = (x) =>
  curvature(x) - 3 * (massLength(x) * H_LAMBDA) ** (2 / 3);
const xBound = bisect(
  bindingDiscriminant,
  ...findFirstSignChange(bindingDiscriminant, 2, X_STAR - 1e-6),
  70,
);
const finalMass = massLength(xBound);

const shellCache = new Map();
const shellTimes = (x) => {
  const key = x.toPrecision(14);
  if (shellCache.has(key)) return shellCache.get(key);
  const gm = massLength(x);
  const k = curvature(x);
  const staticRadius = (gm / H_LAMBDA ** 2) ** (1 / 3);
  const polynomial = (y) => H_LAMBDA ** 2 * y ** 3 - k * y + 2 * gm;
  const turnRadius = bisect(
    polynomial,
    A_I * SIGMA * x,
    staticRadius,
    80,
  );
  const turnTime = integrate((theta) => {
    const sine = Math.sin(theta);
    const cosine = Math.cos(theta);
    const y = turnRadius * sine * sine;
    const speed2 = 2 * gm / y - k + H_LAMBDA ** 2 * y * y;
    return (2 * turnRadius * sine * cosine) / Math.sqrt(speed2);
  }, 1e-14, Math.PI / 2 - 1e-12);
  const answer = { turnTime, collapseTime: 2 * turnTime };
  shellCache.set(key, answer);
  return answer;
};

const omega = Math.sqrt(3) * H_LAMBDA;
const tailSamples = [1e-2, 3e-3, 1e-3, 3e-4, 1e-4].map(
  (gapFraction) => {
    const x1 = xBound * (1 - gapFraction);
    const x2 = xBound * (1 - gapFraction / 2);
    const first = shellTimes(x1);
    const second = shellTimes(x2);
    const turnRate = Math.log(2) / (second.turnTime - first.turnTime);
    const collapseRate =
      Math.log(2) / (second.collapseTime - first.collapseTime);
    return {
      gapFraction,
      turnRatePerMpc: turnRate,
      turnRateOverTwoOmega: turnRate / (2 * omega),
      collapseRatePerMpc: collapseRate,
      collapseRateOverOmega: collapseRate / omega,
    };
  },
);

const massCorrections = [0.1, 1, 2, xBound * 0.999].map((x) => ({
  x,
  fractionalCorrection: massLength(x) / matterEraMass(x) - 1,
}));

console.log(
  JSON.stringify(
    {
      inputs: {
        profileWidthMpc: SIGMA,
        profileAmplitude: AMP,
        initialRedshift: Z_I,
        parentHLambdaPerMpc: H_LAMBDA,
      },
      lambdaConsistentInitialData: { massCorrections },
      capturedFamily: {
        xBound,
        finalMassSolar: finalMass / SOLAR_MASS_LENGTH_MPC,
        finalBlackHoleRadiusKm: 2 * finalMass * 3.085677581491367e19,
      },
      marginalShell: {
        oneWayInstabilityRatePerMpc: omega,
        explanation:
          "Turnaround contains one logarithmic dwell; complete collapse contains the inbound and outbound dwell and therefore twice the time coefficient.",
        tailSamples,
      },
      eventHorizonTail: {
        limitingTrappingToSingularitySeconds:
          (4 * finalMass * MPC_TO_SECONDS) / 3,
        boundedGapImplication:
          "If the event-horizon crossing approaches the final stationary horizon, its crossing-to-collapse interval stays finite, so its swept-mass exponent equals the complete-collapse exponent.",
        inferredLambdaPerMpc: omega,
        conditionalChildLambdaRatio: 3,
      },
    },
    null,
    2,
  ),
);
