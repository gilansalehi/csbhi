# Vacuum-Energy Cancellation at an FLRW–Kottler Junction

*Technical note — exact result for a timelike comoving boundary*

**Author:** Codex (OpenAI).

## Abstract

We examine a timelike spherical boundary between an FLRW region containing matter, radiation, and a cosmological constant and a Kottler region with mass parameter \(M_K\). Continuity of the angular extrinsic curvature fixes \(M_K\). When the cosmological constant has the same value on both sides, its volume contribution cancels exactly: it appears in the Misner–Sharp mass of both regions and does not drive growth of the Kottler mass parameter.

The remaining condition is pressure. A smooth comoving match to a static Kottler region requires vanishing non-vacuum pressure when the two cosmological constants agree. Dust therefore supports a constant \(M_K\); radiation does not. For matter plus radiation, the required mass is

\[
M_K=M_m+M_r,
\qquad
M_m=\text{constant},
\qquad
M_r\propto a^{-1}.
\]

Thus radiation makes the required Kottler mass decrease as the boundary expands. Vacuum energy causes no mass-growth obstruction when it is common to both geometries. The calculation does not construct the horizon map or settle a null junction.

---

## 1. Scope

The calculation addresses one narrow question: can a comoving timelike sphere in the proposed FLRW interior match smoothly to a static Schwarzschild–de Sitter, or Kottler, region?

We impose the Darmois conditions: the induced metric and extrinsic curvature agree across the boundary, so the boundary carries no thin shell [2, 5]. Reversing which geometry is called the interior or exterior changes the orientation of the normal but not the matching relations derived below. A boundary with surface stress may evade these relations through a jump in extrinsic curvature; its dynamics require the full Israel equations.

We keep the cosmological constants on the two sides distinct until the final step:

\[
\Lambda_- \quad \text{in FLRW},
\qquad
\Lambda_+ \quad \text{in Kottler}.
\]

The symbols \(\rho\) and \(p\) denote non-vacuum density and pressure. Vacuum energy remains on the geometric side of Einstein's equations. This convention prevents the same \(\Lambda\) contribution from being counted as matter on one side and geometry on the other.

## 2. The two geometries

Write the FLRW metric as

\[
ds_-^2
=
-d\tau^2
+a(\tau)^2
\left[
\frac{d\chi^2}{1-k\chi^2}
+\chi^2d\Omega^2
\right].
\tag{1}
\]

Its field equations are

\[
H^2
=
\frac{8\pi G}{3}\rho
+\frac{\Lambda_-}{3}
-\frac{k}{a^2},
\tag{2}
\]

\[
\frac{\ddot a}{a}
=
-\frac{4\pi G}{3}(\rho+3p)
+\frac{\Lambda_-}{3}.
\tag{3}
\]

Take a comoving boundary \(\Sigma\) at \(\chi=\chi_0\). Its areal radius is

\[
R(\tau)=a(\tau)\chi_0,
\qquad
\dot R=H R.
\tag{4}
\]

The Kottler metric is [3]

\[
ds_+^2
=
-f(R)dT^2
+\frac{dR^2}{f(R)}
+R^2d\Omega^2,
\tag{5}
\]

with

\[
f(R)
=
1-\frac{2GM_K}{R}-\frac{\Lambda_+R^2}{3}.
\tag{6}
\]

The first junction condition identifies the same areal radius on both sides. Parametrizing the Kottler trajectory by the shell's proper time gives

\[
-f\dot T^2+\frac{\dot R^2}{f}=-1.
\tag{7}
\]

## 3. Angular matching fixes the Kottler mass

For a spherically symmetric timelike boundary,

\[
K_{\theta\theta}=R\,n^a\nabla_aR,
\tag{8}
\]

where \(n^a\) is the unit normal. On the FLRW side,

\[
n_-^a\nabla_aR
=
\sqrt{1-k\chi_0^2}.
\tag{9}
\]

On the Kottler side, Equation (7) gives

\[
n_+^a\nabla_aR
=
\sqrt{\dot R^2+f(R)}.
\tag{10}
\]

Continuity of \(K_{\theta\theta}\) therefore requires

\[
\dot R^2+f(R)=1-k\chi_0^2.
\tag{11}
\]

Using \(\dot R=HR\), Equations (2) and (6), and \(R=a\chi_0\), every curvature term cancels except the difference between the two cosmological constants. The result is

\[
\boxed{
M_K
=
\frac{4\pi}{3}\rho R^3
+\frac{\Lambda_- - \Lambda_+}{6G}R^3
}.
\tag{12}
\]

When the same cosmological constant appears on both sides,

\[
\boxed{
M_K=\frac{4\pi}{3}\rho R^3
}
\qquad
(\Lambda_-=\Lambda_+).
\tag{13}
\]

Vacuum energy is absent from Equation (13). This is not an approximation: its contribution has canceled exactly.

## 4. Misner–Sharp mass explains the cancellation

The geometric Misner–Sharp mass of a sphere of areal radius \(R\) is [1]

\[
m_{\rm MS}
=
\frac{R}{2G}
\left(
1-g^{ab}\nabla_aR\nabla_bR
\right).
\tag{14}
\]

For the FLRW geometry, Equation (2) gives

\[
m_{\rm MS}^-
=
\frac{4\pi}{3}\rho R^3
+\frac{\Lambda_-R^3}{6G}.
\tag{15}
\]

For Kottler, Equations (6) and (14) give

\[
m_{\rm MS}^+
=
M_K
+\frac{\Lambda_+R^3}{6G}.
\tag{16}
\]

Equating the two quasilocal masses reproduces Equation (12). The term proportional to \(\Lambda R^3\) grows with volume on both sides. Comparing \(m_{\rm MS}^-\) directly with \(M_K\) omits the identical Kottler contribution and produces a false vacuum-driven mass growth.

One may instead define a \(\Lambda\)-subtracted Misner–Sharp mass. That convention removes the vacuum term from both Equations (15) and (16) and again yields Equation (13). Either convention works if it is used consistently.

## 5. Temporal matching fixes the pressure

The comoving FLRW observers are geodesic because the pressure is homogeneous. Hence the temporal extrinsic-curvature component on the FLRW side vanishes:

\[
K_{\tau\tau}^-=0.
\tag{17}
\]

A smooth match requires \(K_{\tau\tau}^+=0\), so the shell follows a radial Kottler geodesic. Differentiating Equation (11) for constant \(M_K\) gives

\[
\ddot R
=
-\frac{GM_K}{R^2}
+\frac{\Lambda_+R}{3}.
\tag{18}
\]

The FLRW acceleration equation gives

\[
\ddot R
=
-\frac{4\pi G}{3}(\rho+3p)R
+\frac{\Lambda_-R}{3}.
\tag{19}
\]

Substituting Equation (12) into Equation (18) and equating the result with Equation (19) yields

\[
\boxed{
p
=
\frac{\Lambda_- - \Lambda_+}{8\pi G}
}.
\tag{20}
\]

For a common cosmological constant,

\[
\boxed{p=0}.
\tag{21}
\]

Equation (21) is the familiar pressure condition behind the Einstein–Straus and Oppenheimer–Snyder matchings: a comoving boundary joins smoothly to vacuum only when the non-vacuum pressure at that boundary vanishes [4, 5]. A homogeneous radiation component violates this condition everywhere.

## 6. The same condition from mass evolution

Stress-energy conservation gives

\[
\dot\rho=-3H(\rho+p).
\tag{22}
\]

Differentiate Equation (12), use \(\dot R=HR\), and hold \(\Lambda_\pm\) constant:

\[
\dot M_K
=
R^2\dot R
\left[
-4\pi p
+\frac{\Lambda_- - \Lambda_+}{2G}
\right].
\tag{23}
\]

A static Kottler geometry requires \(\dot M_K=0\). For an evolving boundary, Equation (23) then reproduces Equation (20). When \(\Lambda_-=\Lambda_+\),

\[
\boxed{
\dot M_K=-4\pi pR^2\dot R
}.
\tag{24}
\]

This is pressure work. Positive pressure reduces the energy inside an expanding comoving sphere. Vacuum pressure does not appear because the common cosmological constant has already been included geometrically on both sides.

## 7. Matter, radiation, and the reciprocal variable

For non-interacting matter and radiation,

\[
\rho_m=\rho_{m0}a^{-3},
\qquad
\rho_r=\rho_{r0}a^{-4},
\qquad
p=\frac{\rho_r}{3}.
\tag{25}
\]

With equal cosmological constants, Equation (13) becomes

\[
M_K
=
\frac{4\pi}{3}\chi_0^3
\left(
\rho_{m0}+\frac{\rho_{r0}}{a}
\right).
\tag{26}
\]

Define

\[
M_m
=
\frac{4\pi}{3}\rho_{m0}\chi_0^3,
\qquad
M_{r0}
=
\frac{4\pi}{3}\rho_{r0}\chi_0^3.
\tag{27}
\]

Then

\[
\boxed{
M_K(a)=M_m+\frac{M_{r0}}{a}
}.
\tag{28}
\]

The dust contribution is constant. The radiation contribution decreases as \(a^{-1}\), and

\[
\dot M_K=-H\frac{M_{r0}}{a}=-H M_r.
\tag{29}
\]

Under the reciprocal ansatz \(a=1/r\),

\[
\boxed{
M_K(r)=M_m+M_{r0}r
}.
\tag{30}
\]

As Bob's \(r\) approaches zero, the required Kottler mass approaches the constant dust mass. Radiation obstructs an exact static match at finite \(r\), but the obstruction decays rather than grows. The late-time geometry approaches the dust–\(\Lambda\) matching condition asymptotically.

If the cosmological constants differ, Equation (12) instead gives

\[
\boxed{
M_K(r)
=
M_m+M_{r0}r
+\frac{(\Lambda_- - \Lambda_+)\chi_0^3}{6G\,r^3}
}.
\tag{31}
\]

The divergent \(r^{-3}\) term therefore measures a mismatch between the two vacuum curvatures, not the absolute vacuum energy of Alice's interior. Equation (20) adds a second restriction: a constant difference \(\Lambda_- - \Lambda_+\) cannot balance radiation pressure throughout an expanding history because \(p_r\propto a^{-4}\). It can do so at no more than an isolated epoch unless radiation vanishes.

## 8. Consequences for the horizon-map programme

Three conclusions follow.

1. **The junction responds to the difference between the cosmological constants, not their common value.** A shared \(R^3\) contribution belongs to the Misner–Sharp mass on both sides and cancels from the Kottler mass parameter.
2. **Radiation is the surviving obstruction for a comoving static match.** Its pressure prevents smooth matching to a static Kottler region and makes the mass demanded by angular matching decrease as \(a^{-1}\).
3. **A time-dependent exterior is optional for dust plus \(\Lambda\), but relevant when radiation is retained.** A Vaidya-type exterior or a thin shell may carry the changing energy associated with radiation. Neither is required merely because \(\Lambda>0\).

This result reopens the static timelike route in the dust–\(\Lambda\) limit, where the standard Einstein–Straus construction already demonstrates that FLRW dust with a cosmological constant can coexist with a static Kottler region [5]. It does not establish the reciprocal ansatz, identify Alice's trajectory with the matching shell, extend the shell through a null horizon, or construct a global CSBHI spacetime. Those remain separate problems.

---

## References

1. Misner, C. W., and Sharp, D. H. “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse.” *Physical Review* 136, no. 2B (1964): B571–B576. [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. Israel, W. “Singular Hypersurfaces and Thin Shells in General Relativity.” *Il Nuovo Cimento B* 44, no. 1 (1966): 1–14; erratum 48, no. 2 (1967): 463. [doi:10.1007/BF02710419](https://doi.org/10.1007/BF02710419).
3. Kottler, F. “Über die physikalischen Grundlagen der Einsteinschen Gravitationstheorie.” *Annalen der Physik* 361, no. 14 (1918): 401–462. [doi:10.1002/andp.19183611402](https://doi.org/10.1002/andp.19183611402).
4. Einstein, A., and Straus, E. G. “The Influence of the Expansion of Space on the Gravitation Fields Surrounding the Individual Stars.” *Reviews of Modern Physics* 17 (1945): 120–124. [doi:10.1103/RevModPhys.17.120](https://doi.org/10.1103/RevModPhys.17.120).
5. Mars, M., Mena, F. C., and Vera, R. “Review on Exact and Perturbative Deformations of the Einstein–Straus Model: Uniqueness and Rigidity Results.” *General Relativity and Gravitation* 45 (2013): 2143–2173. [doi:10.1007/s10714-013-1574-1](https://doi.org/10.1007/s10714-013-1574-1); [arXiv:1307.4371](https://arxiv.org/abs/1307.4371).
