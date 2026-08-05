#!/usr/bin/env node

// Reproducible dimensionless benchmark for Step 4 of the collapse-cohort
// horizon-map calculation.  It reconstructs the spherical LTB member of the
// compensated peak family in Galoppo, Bruni & Harada (2026) and reports the
// shell-by-shell future-trapping-horizon proxy.  The source does not supply the
// global future completion needed to locate the black-hole event horizon; the
// accompanying note keeps that distinction explicit.

const C_KM_S = 299_792.458;
const H0 = 67.4 / C_KM_S; // Mpc^{-1}, with c=1
const OMEGA_M = 0.315;
const OMEGA_L = 0.685;
const Z_I = 300;
const A_I = 1 / (1 + Z_I);
const H_I = H0 * Math.sqrt(OMEGA_M / A_I ** 3 + OMEGA_L);
const T_I =
  (2 / (3 * H0 * Math.sqrt(OMEGA_L))) *
  Math.asinh(Math.sqrt(OMEGA_L / OMEGA_M) * A_I ** 1.5);

const SIGMA = 0.005; // 5 kpc in Mpc
const AMP = 1.7e-11;
const ALPHA = 0.225;
const BETA = ALPHA / 2 - 1 / 8;
const X_STAR = Math.sqrt(
  (2 * (1 - 2 * ALPHA + Math.sqrt((1 - 2 * ALPHA) * (3 - 10 * ALPHA)))) /
    (1 - 4 * ALPHA),
);

const bisect = (fn, lo, hi, iterations = 100) => {
  let flo = fn(lo);
  let fhi = fn(hi);
  if (flo === 0) return lo;
  if (fhi === 0) return hi;
  if (flo * fhi > 0) throw new Error(`Unbracketed root: ${flo}, ${fhi}`);
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

const profilePolynomial = (x) => 1 + ALPHA * x ** 2 + BETA * x ** 4;
const profileEnvelope = (x) => Math.exp(-(x ** 2) / 2) * profilePolynomial(x);
const profileEnvelopePrime = (x) =>
  Math.exp(-(x ** 2) / 2) *
  x *
  ((2 * ALPHA - 1) + (4 * BETA - ALPHA) * x ** 2 - BETA * x ** 4);

const curvaturePerturbation = (x) =>
  x < X_STAR
    ? -AMP * (profileEnvelope(x) - profileEnvelope(X_STAR))
    : 0;

const curvaturePerturbationPrimeX = (x) =>
  x < X_STAR ? -AMP * profileEnvelopePrime(x) : 0;

const curvature = (x) => {
  const twoRRcPrime = 2 * x * curvaturePerturbationPrimeX(x);
  return twoRRcPrime / (1 + twoRRcPrime);
};

const initialEta = (x) => {
  const r = SIGMA * x;
  const k = curvature(x);
  const target = (T_I * Math.sqrt(k)) / (A_I * r);
  return bisect(
    (eta) => (eta - Math.sin(eta)) / (1 - Math.cos(eta)) - target,
    1e-6,
    Math.PI - 1e-9,
  );
};

// Geometrized Misner-Sharp mass GM, in Mpc.
const massLength = (x) => {
  const r = SIGMA * x;
  const k = curvature(x);
  const eta = initialEta(x);
  return (A_I * r * k) / (1 - Math.cos(eta));
};

const derivative = (fn, x) => {
  const h = Math.max(2e-6, Math.abs(x) * 2e-5);
  return (fn(x + h) - fn(x - h)) / (2 * h);
};

const densityContrast = (x) => {
  const r = SIGMA * x;
  const dGMdx = derivative(massLength, x);
  const dGMbarDx = 1.5 * A_I ** 3 * H_I ** 2 * r ** 2 * SIGMA;
  return dGMdx / dGMbarDx - 1;
};

const collapseTime = (x) => {
  const gm = massLength(x);
  const k = curvature(x);
  return (2 * Math.PI * gm) / k ** 1.5;
};

const trappingTime = (x) => {
  const gm = massLength(x);
  const k = curvature(x);
  const delta = 2 * Math.asin(Math.sqrt(k));
  return collapseTime(x) - (gm / k ** 1.5) * deltaMinusSin(delta);
};

const deltaMinusSin = (delta) => {
  if (Math.abs(delta) < 0.02) {
    const d2 = delta * delta;
    return (
      delta * d2 *
      (1 / 6 - d2 / 120 + d2 ** 2 / 5040 - d2 ** 3 / 362880)
    );
  }
  return delta - Math.sin(delta);
};

const findFirstSignChange = (fn, lo, hi, count = 2_000) => {
  let x0 = lo;
  let f0 = fn(x0);
  for (let i = 1; i <= count; i += 1) {
    const x1 = lo + ((hi - lo) * i) / count;
    const f1 = fn(x1);
    if (f0 * f1 <= 0) return [x0, x1];
    x0 = x1;
    f0 = f1;
  }
  throw new Error(`No sign change on [${lo}, ${hi}]: ${fn(lo)}, ${fn(hi)}`);
};

if (process.env.DEBUG_BENCHMARK === "1") {
  for (const testX of [0.1, 0.5, 1, 2, 3, 4]) {
    console.log({
      testX,
      k: curvature(testX),
      etaI: initialEta(testX),
      gm: massLength(testX),
      delta: densityContrast(testX),
    });
  }
  process.exit(0);
}

const xODBracket = findFirstSignChange(densityContrast, 0.02, X_STAR - 0.02);
const xOD = bisect(densityContrast, ...xODBracket);
const H_LAMBDA = H0 * Math.sqrt(OMEGA_L);
const bindingDiscriminant = (x) =>
  curvature(x) - 3 * (massLength(x) * H_LAMBDA) ** (2 / 3);
const xBoundBracket = findFirstSignChange(
  bindingDiscriminant,
  xOD,
  X_STAR - 1e-5,
);
const xBound = bisect(bindingDiscriminant, ...xBoundBracket);
const finalMass = massLength(xOD);
const tEnd = trappingTime(xOD);
const xMin = 2e-3;
const tFormProxy = trappingTime(xMin);

const samples = [0.01, 0.1, 0.25, 0.5, 0.75, 0.9, 0.99].map((targetMu) => {
  const sampleX = bisect(
    (candidateX) => massLength(candidateX) / finalMass - targetMu,
    xMin,
    xOD,
  );
  const mu = massLength(sampleX) / finalMass;
  return {
    targetMu,
    mu,
    x: sampleX,
    trappingTimeFraction:
      (trappingTime(sampleX) - tFormProxy) / (tEnd - tFormProxy),
    conformalFractionRequired: Math.cbrt(mu),
  };
});

const solarMassLengthMpc = 1.4766250385 / 3.085677581491367e19;

console.log(
  JSON.stringify(
    {
      inputs: {
        alpha: ALPHA,
        beta: BETA,
        amplitude: AMP,
        sigmaMpc: SIGMA,
        initialRedshift: Z_I,
        xStar: X_STAR,
      },
      reconstructed: {
        xOD,
        rODOverSigma: xOD,
        xBound,
        rBoundOverSigma: xBound,
        asymptoticallyBoundMassSolar:
          massLength(xBound) / solarMassLengthMpc,
        coreMassSolar: finalMass / solarMassLengthMpc,
        centralTrappingTimeMpc: tFormProxy,
        outerCoreTrappingTimeMpc: tEnd,
        trappingDurationMpc: tEnd - tFormProxy,
        trappingDurationYears: (tEnd - tFormProxy) * 3.261563777e6,
        centralCollapseMpc: collapseTime(xMin),
      },
      samples,
    },
    null,
    2,
  ),
);
