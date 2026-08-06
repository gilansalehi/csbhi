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
const PLANCK_TIME_SECONDS = 5.391247e-44;

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

// --- Horizon-adapted central integration ---------------------------------
//
// Let delta=t_col-t_H be the remaining shell proper time when the event
// horizon crosses it. Near shell focusing,
//
//   Y=(9Gm/2)^(1/3) delta^(2/3).
//
// Write delta=(4Gm/3)e^u. Then u=0 is the local trapping surface Y=2Gm,
// while the event horizon has u>0. Evolving u preserves offsets far below the
// relative precision available in Y or delta themselves.

const numericalDerivative = (fn, x, minimumStep = 1e-3) => {
  const gap = xBound - x;
  const h = Math.min(Math.max(minimumStep, x * 2e-4), gap * 0.03);
  if (x <= h) return (fn(x + h) - fn(x)) / h;
  return (fn(x + h) - fn(x - h)) / (2 * h);
};

const massPrime = (x) => numericalDerivative(massLength, x, 2e-5);
const collapseTime = (x) => shellTimes(x).collapseTime;
const collapseTimePrime = (x) => numericalDerivative(collapseTime, x, 1e-3);

const centralFitXs = [0.006, 0.01, 0.014, 0.018, 0.022];
const centralM3 =
  centralFitXs.reduce((sum, x) => sum + massLength(x) / x ** 3, 0) /
  centralFitXs.length;
const centralRows = centralFitXs.map((x) => ({ x4: x ** 4, t: collapseTime(x) }));
const meanX4 = centralRows.reduce((sum, row) => sum + row.x4, 0) / centralRows.length;
const meanT = centralRows.reduce((sum, row) => sum + row.t, 0) / centralRows.length;
const centralT4 =
  centralRows.reduce(
    (sum, row) => sum + (row.x4 - meanX4) * (row.t - meanT),
    0,
  ) /
  centralRows.reduce((sum, row) => sum + (row.x4 - meanX4) ** 2, 0);
const centralT0 = meanT - centralT4 * meanX4;
const centralK2 = curvature(0.01) / 0.01 ** 2;

const fitCentralT4 = (xs) => {
  const rows = xs.map((x) => ({ x4: x ** 4, t: collapseTime(x) }));
  const xMean = rows.reduce((sum, row) => sum + row.x4, 0) / rows.length;
  const tMean = rows.reduce((sum, row) => sum + row.t, 0) / rows.length;
  return rows.reduce(
    (sum, row) => sum + (row.x4 - xMean) * (row.t - tMean),
    0,
  ) / rows.reduce((sum, row) => sum + (row.x4 - xMean) ** 2, 0);
};

const centralProfileFits = [
  [0.006, 0.01, 0.014, 0.018, 0.022],
  [0.008, 0.012, 0.016, 0.02, 0.024],
  [0.01, 0.015, 0.02, 0.025, 0.03],
].map((xs) => ({ xs, t4Mpc: fitCentralT4(xs) }));

const centralHorizonRhs = (x, u, withDerivative = false) => {
  const gm = centralM3 * x ** 3;
  const gmPrimeOverGm = 3 / x;
  const k = centralK2 * x ** 2;
  const tPrime = 4 * centralT4 * x ** 3;
  const delta = (4 * gm * Math.exp(u)) / 3;
  const expMinusTwoThirds = Math.exp((-2 * u) / 3);
  const lambdaTerm = 4 * H_LAMBDA ** 2 * gm ** 2 * Math.exp((4 * u) / 3);
  const speed2 = expMinusTwoThirds - k + lambdaTerm;
  const sqrtF = Math.sqrt(speed2);
  const sqrtK = Math.sqrt(1 - k);
  const localKottler = -Math.expm1((-2 * u) / 3) - lambdaTerm;
  const denominator = sqrtK * (sqrtK + sqrtF);
  const cancellation = localKottler / denominator;
  const rhs =
    (tPrime * cancellation) / delta -
    gmPrimeOverGm *
      (1 + Math.exp(-u / 3) / (2 * sqrtK));
  const rhsLogX = -x * rhs;
  if (!withDerivative) return rhsLogX;

  const fPrime =
    (2 / 3) * expMinusTwoThirds - (4 / 3) * lambdaTerm;
  const speedPrime = -fPrime;
  const denominatorPrime = (sqrtK * speedPrime) / (2 * sqrtF);
  const cancellationPrime =
    fPrime / denominator -
    (localKottler * denominatorPrime) / denominator ** 2;
  const rhsPrime =
    (tPrime / delta) * (cancellationPrime - cancellation) +
    (gmPrimeOverGm * Math.exp(-u / 3)) / (6 * sqrtK);
  return { rhs: rhsLogX, rhsPrime: -x * rhsPrime, delta };
};

const integrateCentralEventHorizon = ({ xStart = 0.01, xEnd = 1e-30, step = 0.005 }) => {
  let logDepth = 0;
  const finalLogDepth = Math.log(xStart / xEnd);
  const initialMassPrime = 3 * centralM3 * xStart ** 2;
  const initialCollapsePrime = 4 * centralT4 * xStart ** 3;
  let u = (6 * initialMassPrime) / initialCollapsePrime;
  const samples = [];
  while (logDepth < finalLogDepth - 1e-14) {
    const ds = Math.min(step, finalLogDepth - logDepth);
    const nextDepth = logDepth + ds;
    const x = xStart * Math.exp(-nextDepth);
    const oldU = u;
    for (let iteration = 0; iteration < 30; iteration += 1) {
      const { rhs, rhsPrime } = centralHorizonRhs(x, u, true);
      const residual = u - oldU - ds * rhs;
      const slope = 1 - ds * rhsPrime;
      const correction = residual / slope;
      u -= correction;
      if (Math.abs(correction) < Math.max(1e-14, Math.abs(u) * 1e-13)) break;
      if (iteration === 29) {
        throw new Error(`Central event-horizon step failed at x=${x}`);
      }
    }
    logDepth = nextDepth;
    if (
      samples.length === 0 ||
      logDepth - samples.at(-1).logDepth > 5 ||
      logDepth >= finalLogDepth - 1e-12
    ) {
      const gm = centralM3 * x ** 3;
      const delta = (4 * gm * Math.exp(u)) / 3;
      samples.push({ logDepth, x, u, delta });
    }
  }
  const x = xStart * Math.exp(-logDepth);
  const gm = centralM3 * x ** 3;
  const deltaCenter = (4 * gm * Math.exp(u)) / 3;
  const formationTangent =
    (9 / 2) ** (1 / 3) *
    centralM3 ** (1 / 3) *
    deltaCenter ** (2 / 3);
  const conformalInterval =
    formationTangent * (finalMass / centralM3) ** (1 / 3);
  return { x, u, deltaCenter, formationTangent, conformalInterval, samples };
};

const centralEventHorizon = integrateCentralEventHorizon({ step: 0.00125 });
const centralConvergence = [
  { xStart: 0.008, step: 0.01 },
  { xStart: 0.01, step: 0.01 },
  { xStart: 0.01, step: 0.005 },
  { xStart: 0.01, step: 0.0025 },
  { xStart: 0.01, step: 0.00125 },
  { xStart: 0.012, step: 0.005 },
].map((settings) => {
  const result = integrateCentralEventHorizon({ ...settings, xEnd: 1e-26 });
  return {
    ...settings,
    centerLeadMpc: result.deltaCenter,
    ratioToSelected: result.deltaCenter / centralEventHorizon.deltaCenter,
  };
});

const outerHorizonState = (x) => {
  const gm = massLength(x);
  const gmPrime = massPrime(x);
  const tPrime = collapseTimePrime(x);
  const u = (6 * gmPrime) / tPrime;
  const delta = (4 * gm * Math.exp(u)) / 3;
  // Corrections to d(delta)/dx are below the precision relevant to the
  // kiloparsec-scale shell history; retain the leading trapping-layer term.
  const horizonTimePrime = tPrime - (4 * gmPrime) / 3;
  const mu = gm / finalMass;
  const muPrime = gmPrime / finalMass;
  const requiredScaleFactor =
    (3 * mu ** (2 / 3) * horizonTimePrime) /
    (centralEventHorizon.conformalInterval * muPrime);
  const timeSinceFormation =
    collapseTime(x) - centralT0 + centralEventHorizon.deltaCenter - delta;
  return {
    x,
    gm,
    mu,
    u,
    delta,
    horizonTimePrime,
    muPrime,
    requiredScaleFactor,
    timeSinceFormation,
  };
};

const requiredHubbleRate = (x, derivativeScale = 1) => {
  const h =
    Math.min(Math.max(1e-3, x * 5e-4), (xBound - x) * 0.05) *
    derivativeScale;
  const left = outerHorizonState(x - h);
  const right = outerHorizonState(x + h);
  const dLogAdx =
    (Math.log(right.requiredScaleFactor) -
      Math.log(left.requiredScaleFactor)) /
    (2 * h);
  return dLogAdx / outerHorizonState(x).horizonTimePrime;
};

const effectiveEquationOfState = (x, derivativeScale = 1) => {
  const h =
    Math.min(Math.max(2e-3, x * 8e-4), (xBound - x) * 0.04) *
    derivativeScale;
  const hLeft = requiredHubbleRate(x - h, derivativeScale);
  const hRight = requiredHubbleRate(x + h, derivativeScale);
  const dHdx = (hRight - hLeft) / (2 * h);
  const state = outerHorizonState(x);
  const hReq = requiredHubbleRate(x, derivativeScale);
  const hDot = dHdx / state.horizonTimePrime;
  return -1 - (2 * hDot) / (3 * hReq ** 2);
};

const historyMassFractions = [1e-6, 1e-4, 1e-2, 0.1, 0.25, 0.5, 0.75, 0.9, 0.99];
const shellClockHistory = historyMassFractions.map((targetMu) => {
  const x = bisect(
    (candidate) => massLength(candidate) / finalMass - targetMu,
    0.012,
    xBound * (1 - 1e-7),
    80,
  );
  const state = outerHorizonState(x);
  const hReq = requiredHubbleRate(x);
  const wEffective = effectiveEquationOfState(x);
  const nonnegativeFluidLowerBound = -((omega / hReq) ** 2);
  return {
    targetMu,
    x,
    parentYearsSinceFormation:
      (state.timeSinceFormation * MPC_TO_SECONDS) / (365.25 * 86400),
    requiredConformalFraction: Math.cbrt(state.mu),
    requiredScaleFactor: state.requiredScaleFactor,
    requiredHubblePerMpc: hReq,
    requiredHubbleOverLateLimit: hReq / omega,
    effectiveEquationOfState: wEffective,
    nonnegativeDustRadiationVacuumLowerBound: nonnegativeFluidLowerBound,
    violatesNonnegativeFluidBound:
      wEffective < nonnegativeFluidLowerBound - 0.01,
  };
});

const shapeConvergence = [0.5, 1, 2].map((derivativeScale) => ({
  derivativeScale,
  samples: [0.1, 0.5, 0.75].map((targetMu) => {
    const x = bisect(
      (candidate) => massLength(candidate) / finalMass - targetMu,
      0.012,
      xBound * (1 - 1e-7),
      80,
    );
    return {
      targetMu,
      requiredHubbleOverLateLimit:
        requiredHubbleRate(x, derivativeScale) / omega,
      effectiveEquationOfState:
        effectiveEquationOfState(x, derivativeScale),
    };
  }),
}));

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
      eventHorizonFormation: {
        centralCollapseTimeMpc: centralT0,
        centralProfileFits,
        centerLeadMpc: centralEventHorizon.deltaCenter,
        centerLeadSeconds: centralEventHorizon.deltaCenter * MPC_TO_SECONDS,
        centerLeadInPlanckTimes:
          (centralEventHorizon.deltaCenter * MPC_TO_SECONDS) /
          PLANCK_TIME_SECONDS,
        formationTimeMpc: centralT0 - centralEventHorizon.deltaCenter,
        formationTangentMpcPerX: centralEventHorizon.formationTangent,
        shellClockConformalIntervalMpc: centralEventHorizon.conformalInterval,
        shellClockConformalIntervalYears:
          centralEventHorizon.conformalInterval * MPC_TO_SECONDS /
          (365.25 * 86400),
        numericalConvergence: centralConvergence,
        convergenceSamples: centralEventHorizon.samples,
      },
      shellClockHistory,
      shapeConvergence,
    },
    null,
    2,
  ),
);
