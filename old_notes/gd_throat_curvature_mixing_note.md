# Throat Curvature Mixing and the MOND Law in Geometric Duality

## Abstract

Geometric Duality (GD) naturally supplies a cosmological acceleration scale of order
\[
a_0 \sim cH \sim \frac{c^2}{L},
\]
where \(H\) is the Hubble parameter and \(L=\sqrt{3/\Lambda}\) is the de Sitter curvature radius of the 5D hyperboloid appearing in the GD appendix and follow-up embedding work. Separately, the deep galactic regime is empirically described by the MOND scaling law
\[
g_{\rm obs} \sim \sqrt{g_N a_0},
\]
which for a point-mass baryonic source implies \(g_{\rm obs}\propto 1/r\) and therefore flat rotation curves and the baryonic Tully–Fisher relation. In this note I sketch a geometric derivation of that law from the GD throat interpretation. The key observation is that a local baryonic system embedded at the de Sitter throat is governed by two inverse-length scales: the local source curvature \(k_M\sim g_N/c^2\) and the global throat curvature \(k_H\sim 1/L\sim H/c\). The simplest mixed scalar built from these is \(\sqrt{k_M k_H}\), and multiplying by \(c^2\) yields
\[
g_{\rm eff} \sim c^2\sqrt{k_Mk_H} \sim \sqrt{g_N cH}.
\]
This immediately reproduces the deep-MOND \(1/r\) law and the scaling \(v^4\sim GMcH\). The argument is heuristic rather than fully tensorial, but it isolates the missing bridge between the GD throat geometry and galactic rotation-curve phenomenology.

## 1. Introduction

The GD program already contains several ingredients that are individually suggestive but, taken together, appear to point toward a concrete explanation of the MOND acceleration scale.

First, the original GD paper recast the spatially flat FLRW metric in Painlevé–Gullstrand (PG) form and identified the late-time de Sitter sector as the natural asymptotic geometry. The follow-up embedding drafts then sharpened this observation by showing that de Sitter appears as the standard 4-dimensional hyperboloid in 5-dimensional Minkowski space,
\[
- X_0^2 + X_1^2 + X_2^2 + X_3^2 + X_4^2 = L^2,
\qquad
L=\sqrt{\frac{3}{\Lambda}}.
\]
Moreover, the GD appendix interpretation places the observable universe at the waist or throat of this hyperboloid.

Second, this throat geometry supplies a natural cosmological acceleration scale. Since de Sitter obeys
\[
H^2 = \frac{\Lambda}{3},
\]
one has
\[
L \sim \frac{c}{H},
\qquad
a_0 \sim \frac{c^2}{L} \sim cH.
\]
This is exactly the empirical acceleration scale that appears in MOND.

Third, galaxy rotation curves in the deep regime satisfy the approximate MOND law
\[
g_{\rm obs} \sim \sqrt{g_N a_0},
\]
where \(g_N\) is the Newtonian acceleration from baryons alone. For a point-mass baryonic source,
\[
g_N = \frac{GM}{r^2},
\]
so the MOND law becomes
\[
g_{\rm obs}(r) \sim \frac{\sqrt{GM a_0}}{r},
\]
which immediately yields flat rotation curves and the baryonic Tully–Fisher relation
\[
v^4 \sim GM a_0.
\]

The open question is therefore sharply focused: can the GD throat geometry explain why the deep galactic regime should involve the geometric mean \(\sqrt{g_N a_0}\)? This note argues that the answer is plausibly yes.

## 2. Forward pass: from GD throat geometry to the MOND law

### 2.1. Two curvature scales at the throat

Consider a local baryonic mass \(M\) embedded in the GD throat geometry. There are naturally two geometric inverse-length scales available.

The first is the local source scale. The Newtonian baryonic acceleration is
\[
g_N(r)=\frac{GM}{r^2}.
\]
Dividing by \(c^2\) converts this to an inverse-length curvature scale,
\[
k_M \sim \frac{g_N}{c^2}.
\]

The second is the global throat scale. The de Sitter hyperboloid has curvature radius \(L\), so the corresponding inverse-length scale is
\[
k_H \sim \frac{1}{L} \sim \frac{H}{c}.
\]

Thus, at the throat, the geometry presents a local system with exactly two fundamental inverse-length scales,
\[
k_M \sim \frac{g_N}{c^2},
\qquad
k_H \sim \frac{H}{c}.
\]

### 2.2. The mixed scalar

If the deep galactic regime is neither purely local nor purely cosmological, then its effective law should depend on both \(k_M\) and \(k_H\). The three simplest acceleration scales one can form are
\[
g \sim c^2 k_M = g_N,
\]
\[
g \sim c^2 k_H = cH,
\]
and
\[
g \sim c^2\sqrt{k_M k_H}.
\]
The first reproduces Newtonian gravity, and the second reproduces the background cosmological threshold. The third is the unique simple mixed scalar acceleration built from both geometric inputs:
\[
g_{\rm mix} \sim c^2\sqrt{\frac{g_N}{c^2}\frac{H}{c}} = \sqrt{g_N cH}.
\]
Therefore the natural throat-mixing law is
\[
\boxed{g_{\rm eff} \sim \sqrt{g_N cH}.}
\]

### 2.3. Recovery of the rotation-curve law

Now specialize to a point-mass baryonic source:
\[
g_N = \frac{GM}{r^2}.
\]
Then
\[
g_{\rm eff}(r) \sim \sqrt{\frac{GM}{r^2}cH} = \frac{\sqrt{GMcH}}{r}.
\]
Thus the effective acceleration scales as
\[
\boxed{g_{\rm eff}(r) \propto \frac{1}{r}.}
\]
This is exactly the scaling required for flat rotation curves.

The orbital speed follows from \(v^2/r=g_{\rm eff}\):
\[
v^2 = r g_{\rm eff} = \sqrt{GMcH},
\]
so
\[
\boxed{v^4 \sim GMcH.}
\]
This is the baryonic Tully–Fisher relation with
\[
a_0 \sim cH.
\]

## 3. Backward pass: from the MOND law back to the GD throat

The same argument can be run in reverse.

### 3.1. Flat curves imply a square-root law

Observationally, flat rotation curves imply
\[
g_{\rm obs}(r) \propto \frac{1}{r}.
\]
For a point-mass baryonic source,
\[
g_N(r)=\frac{GM}{r^2} \propto r^{-2}.
\]
The only simple algebraic way to convert \(r^{-2}\) into \(r^{-1}\) is to take the square root:
\[
g_{\rm obs} \propto \sqrt{g_N}.
\]
But this has the wrong units. To restore units of acceleration, one needs a second acceleration scale \(a_0\):
\[
g_{\rm obs} \sim \sqrt{g_N a_0}.
\]

### 3.2. GD supplies the missing scale

In GD, the throat of the de Sitter hyperboloid supplies the natural acceleration scale,
\[
a_0 \sim \frac{c^2}{L} \sim cH.
\]
Substituting this into the phenomenological law gives
\[
g_{\rm obs} \sim \sqrt{g_N cH}.
\]
Thus the observationally required square-root law and the geometrically supplied GD scale match one another exactly.

## 4. Scale-freeness and the throat regime

The geometric mean is especially suggestive because it converts the local Kepler law into a scale-free outer law.

For a point mass,
\[
g_N \propto r^{-2}.
\]
Taking the square root gives
\[
\sqrt{g_N} \propto r^{-1}.
\]
The deep-MOND regime therefore loses the preferred length scale of the Newtonian potential and becomes self-similar in radius, which is precisely what flat rotation curves imply. This is consistent with the intuition that the throat is a mixed local/global regime: the local baryonic system is still present, but the global hyperboloid curvature injects the cosmological scale \(a_0\) into the law.

## 5. Interpretation

The derivation may be summarized in one sentence:

> At the de Sitter throat of the GD embedding, a local baryonic source is governed by a local curvature scale \(k_M\sim g_N/c^2\) and a global throat curvature scale \(k_H\sim 1/L\sim H/c\). The simplest mixed scalar acceleration built from these is \(c^2\sqrt{k_Mk_H}\), which yields the MOND law \(g_{\rm eff}\sim\sqrt{g_N cH}\).

This has several appealing features.

First, it explains why the MOND acceleration scale is cosmological rather than local. The scale enters through the throat curvature, not through the galaxy by itself.

Second, it explains why the deep law should be a geometric mean rather than an arbitrary function. The geometric mean is the simplest mixed scalar that can be formed from the two available curvature scales.

Third, it automatically reproduces the observed \(1/r\) acceleration law and the baryonic Tully–Fisher scaling.

## 6. Limitations

This note is not a full derivation from an exact 4D or 5D field equation. Several gaps remain.

1. The argument is scalar and dimensional rather than tensorial. It does not yet derive the law from an explicit geodesic equation on a perturbed embedded hypersurface.
2. The interpolation from Newtonian gravity to the deep-MOND regime is not derived here.
3. The role of inhomogeneous structure, shell matching, and localized perturbations of the embedded hypersurface remains to be worked out explicitly.

Thus the present result should be read as a geometric derivation sketch rather than a completed proof.

## 7. Conclusion

GD already supplies the cosmic acceleration scale \(a_0\sim cH\) through the de Sitter throat of its 5D embedding. Galaxy rotation curves, meanwhile, require the deep-law scaling \(g_{\rm obs}\sim\sqrt{g_N a_0}\). By identifying the two geometric inverse-length scales present at the throat — the local source scale \(k_M\sim g_N/c^2\) and the global hyperboloid scale \(k_H\sim H/c\) — one finds that the simplest mixed scalar acceleration is
\[
g_{\rm eff}\sim c^2\sqrt{k_Mk_H}\sim \sqrt{g_N cH}.
\]
For a point-mass baryonic source this becomes
\[
g_{\rm eff}(r)\sim \frac{\sqrt{GMcH}}{r},
\]
which reproduces flat rotation curves and implies
\[
v^4\sim GMcH.
\]

If this sketch is borne out by a more explicit perturbative or geodesic derivation, then the GD throat geometry may provide a direct geometric foundation for the MOND law and the baryonic Tully–Fisher relation.

