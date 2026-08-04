# Null-Horizon Matching of the Reciprocal Interior

*Technical note*

**Author:** Codex (OpenAI).

> **Scope warning — this is not the GD I horizon geometry.** This note tests a deliberately simplified surrogate: an exact vacuum Schwarzschild metric and an independently specified de Sitter metric pasted across a zero-width null surface. It uses \(a=1/r\) only to check the expansion rate at one horizon-crossing event. It does not construct GD I's central geometric proposal, in which Bob's decreasing \(r\) and Alice's isotropically increasing scale describe one continuous, matter-filled history measured by Alice's probe cloud. The transverse-derivative mismatch below is therefore a negative result for this sharp piecewise model, not an obstruction to CSBHI and not evidence for a physical membrane or locally detectable horizon crossing.

## Abstract

This note tests the most direct four-dimensional null junction between Bob's stationary Schwarzschild horizon and Alice's spatially flat reciprocal interior. Continuity of the induced metric forces the shared areal radius to remain constant along the junction. The null condition on Alice's side then gives

\[
H_A=\frac{c}{R_S},
\qquad
R_A=\frac{c}{H_A}=R_S.
\]

Thus the Schwarzschild-radius/apparent-horizon-radius identity follows from the first null junction condition rather than being inserted. Requiring the direct junction to persist along Bob's stationary horizon also forces \(\dot H_A=0\). Under Einstein's equations, the matched reciprocal interior is therefore de Sitter, with \(P=-\rho c^2\) and \(\Lambda=3/R_S^2\).

The second null junction condition is more restrictive. Under the simplest static soldering, the Schwarzschild and de Sitter radial functions agree at the horizon but have unequal transverse derivatives. The associated jump in signed surface gravity produces a null surface stress in the Barrabès-Israel formalism. Consequently, the direct piecewise Schwarzschild/de Sitter construction is continuous but not stress-free. A complete CSBHI junction must supply a nontrivial null soldering, a finite conformal transition, or the parent cosmological geometry omitted by the isolated-Schwarzschild approximation.

---

## 1. Assumptions and scope

We test the minimal direct junction with the following inputs:

1. Bob's exterior is exactly Schwarzschild and nonrotating.
2. Alice's interior is spatially flat FLRW.
3. The two regions meet across an ordinary four-dimensional spherical null hypersurface \(\Sigma\).
4. The invariant area of every spherical cross-section agrees on the two sides.
5. Section 7 tests both the same-radial-orientation static soldering and the orientation reversal that maps Bob's
   future black-hole horizon to Alice's future cosmological horizon.

The calculation deliberately begins with the isolated Schwarzschild approximation. Section 8 identifies the additional data required when Bob's black hole is restored to its parent cosmological background.

Let

\[
R_S=\frac{2GM}{c^2}
\tag{1}
\]

be Bob's Schwarzschild radius.

## 2. Bob's null horizon

Use ingoing Eddington-Finkelstein coordinates on the Schwarzschild side:

\[
ds_+^2
=
-f_+(R)c^2dv^2
+2c\,dv\,dR
+R^2d\Omega^2,
\qquad
f_+(R)=1-\frac{R_S}{R}.
\tag{2}
\]

The future black-hole event horizon is

\[
\Sigma_+:\quad R=R_S.
\tag{3}
\]

With intrinsic coordinates \(y^a=(v,\theta,\phi)\), the pullback of Equation (2) to \(\Sigma_+\) is the degenerate metric

\[
q_+=R_S^2d\Omega^2.
\tag{4}
\]

In particular, the area \(4\pi R_S^2\) is constant along every horizon generator.

## 3. Alice's radial null hypersurface

Write Alice's interior in comoving coordinates:

\[
ds_-^2
=
-c^2d\tau^2
+a(\tau)^2
\left(d\chi^2+\chi^2d\Omega^2\right).
\tag{5}
\]

Let a radial hypersurface on Alice's side be embedded as \(\chi=\chi(\tau)\). Its radial tangent is null when

\[
-c^2+a^2\dot\chi^{,2}=0.
\tag{6}
\]

Choose the ingoing branch,

\[
\dot\chi=-\frac{c}{a}.
\tag{7}
\]

The invariant areal radius on this hypersurface is

\[
\mathcal R(\tau)=a(\tau)\chi(\tau).
\tag{8}
\]

Its induced metric is

\[
q_-=\mathcal R(\tau)^2d\Omega^2.
\tag{9}
\]

## 4. The first junction condition derives \(R_S=R_A\)

Continuity of the induced metric, \(q_-=q_+\), requires

\[
\mathcal R(\tau)=R_S
\tag{10}
\]

along the full null junction. Differentiate Equation (8) and use Equation (7):

\[
\dot{\mathcal R}
=
H_A\mathcal R+a\dot\chi
=
H_A\mathcal R-c.
\tag{11}
\]

Equation (10) makes \(\dot{\mathcal R}=0\). Therefore

\[
\boxed{
H_A=\frac{c}{R_S}
}
\tag{12}
\]

and Alice's apparent-horizon radius at the junction is

\[
\boxed{
R_A=\frac{c}{H_A}=R_S
}.
\tag{13}
\]

Equations (12)-(13) use only nullness and continuity of the spherical induced geometry. Neither the Friedmann equation nor an energy-density assumption has entered.

## 5. A stationary direct junction selects vacuum pressure

Bob's stationary horizon keeps \(R_S\) constant. Equation (12) must therefore hold with constant \(H_A\) along the direct junction:

\[
\dot H_A=0.
\tag{14}
\]

For the flat FLRW metric, Einstein's equations give

\[
H_A^2=\frac{8\pi G}{3}\rho,
\qquad
\dot H_A=-4\pi G\left(\rho+\frac{P}{c^2}\right).
\tag{15}
\]

Here \(\rho\) is mass-equivalent density and \(P\) is pressure. Equations (14)-(15) imply

\[
\boxed{P=-\rho c^2}.
\tag{16}
\]

The directly matched interior is therefore de Sitter. Its effective cosmological constant is

\[
\Lambda
=
\frac{8\pi G}{c^2}\rho
=
\frac{3H_A^2}{c^2}
=
\boxed{\frac{3}{R_S^2}}.
\tag{17}
\]

Combining Equations (1) and (17) gives

\[
\boxed{
\Lambda=\frac{3c^4}{4G^2M^2}
}.
\tag{18}
\]

The result is narrower than a complete dust-radiation-vacuum cosmology: an entire stationary null horizon can be directly identified with a constant-radius FLRW null hypersurface only in the constant-\(H_A\) limit. At a single spherical cross-section, Equation (12) holds instantaneously without forcing Equation (14).

## 6. Reciprocal kinematic cross-check

Normalize Bob's areal coordinate by

\[
r=\frac{R}{R_S}.
\tag{19}
\]

For the marginally bound radial geodesic used in GD1,

\[
\left.-\frac{dr}{d\tau}\right|_{r=1}
=
\frac{c}{R_S}.
\tag{20}
\]

The reciprocal ansatz \(a=1/r\) gives

\[
H_A
=
\frac{\dot a}{a}
=
-\frac{\dot r}{r}.
\tag{21}
\]

At \(r=1\), Equations (20)-(21) reproduce Equation (12). The induced-metric calculation and the worldline calculation therefore select the same horizon rate by independent routes.

## 7. The second null junction condition

To test transverse differentiability, write the constant-\(H_A\) interior in static de Sitter form and introduce a horizon-regular null coordinate on each side:

\[
ds_\pm^2
=
-f_\pm(R)dv^2
+2\epsilon_\pm\,dv\,dR
+R^2d\Omega^2
\tag{22}
\]

in units \(c=1\), where \(\epsilon_\pm=\pm1\) records the advanced or retarded Eddington-Finkelstein orientation, and

\[
f_+(R)=1-\frac{R_S}{R},
\qquad
f_-(R)=1-\frac{R^2}{R_S^2}.
\tag{23}
\]

Both functions vanish at the shared horizon:

\[
f_+(R_S)=f_-(R_S)=0.
\tag{24}
\]

Choose the generator \(k^\mu=(\partial_v)^\mu\) and a transverse null covector \(N_\mu dx^\mu=-dv\), normalized by \(N_\mu k^\mu=-1\). The Barrabès-Israel transverse curvature is

\[
\mathcal C_{ab}
=
-N_\mu e_a^{\ \nu}\nabla_\nu e_b^{\ \mu}.
\tag{25}
\]

Direct evaluation on \(R=R_S\) gives

\[
\mathcal C_{vv}=\frac{\epsilon}{2}f'(R_S),
\qquad
\mathcal C_{\theta\theta}=-\epsilon R_S,
\qquad
\mathcal C_{\phi\phi}=-\epsilon R_S\sin^2\theta.
\tag{26}
\]

The angular components match, but

\[
f_+'(R_S)=\frac{1}{R_S},
\qquad
f_-'(R_S)=-\frac{2}{R_S}.
\tag{27}
\]

### Same radial orientation

First set \(\epsilon_+=\epsilon_-=+1\). The angular transverse curvatures match, while the longitudinal component has

\[
\boxed{
[\mathcal C_{vv}]
=
\frac{3}{2R_S}
}.
\tag{28}
\]

Equivalently, restoring acceleration units, the signed surface gravities associated with this common static normalization are

\[
\kappa_+=\frac{c^2}{2R_S},
\qquad
\kappa_-=-\frac{c^2}{R_S},
\qquad
\boxed{[\kappa]=\frac{3c^2}{2R_S}}.
\tag{29}
\]

In the Barrabès-Israel formalism, the jump in \(\mathcal C_{vv}\) produces an isotropic null-surface pressure. Under this particular same-orientation static normalization,

\[
P_\Sigma
=
-\frac{c^4}{8\pi G}[\mathcal C_{vv}]
=
-\frac{3c^4}{16\pi G R_S}.
\tag{30}
\]

The sign depends on the chosen orientation; the nonzero jump does not.

### Future black-hole to future cosmological orientation

Bob's future black-hole event horizon is regular in the advanced orientation \(\epsilon_+=+1\). Alice's future de Sitter cosmological horizon is regular in the retarded orientation \(\epsilon_-=-1\). With this causal identification, Equation (26) instead gives

\[
\mathcal C_{vv}^+=\frac{1}{2R_S},
\qquad
\mathcal C_{vv}^-=\frac{1}{R_S},
\tag{31}
\]

\[
\mathcal C_{\theta\theta}^+=-R_S,
\qquad
\mathcal C_{\theta\theta}^-=+R_S.
\tag{32}
\]

Consequently,

\[
\boxed{
[\mathcal C_{vv}]=-\frac{1}{2R_S},
\qquad
[\mathcal C_{\theta\theta}]=-2R_S
}.
\tag{33}
\]

The orientation reversal moves part of the mismatch into the angular transverse curvature and therefore into the null surface density. It does not make the shell disappear. This is the null-junction expression of converting an ingoing exterior congruence into an outgoing interior congruence.

Rescaling the null generators changes the split among the null-shell variables, so Equations (28)-(33) belong to the explicit solderings defined here. A completed horizon map must fix that soldering rather than inherit it silently.

## 8. Why a smooth reciprocal scalar is not yet a smooth four-metric

The reciprocal function is regular at the horizon:

\[
a(1)=1,
\qquad
\left.\frac{da}{dr}\right|_{r=1}=-1.
\tag{34}
\]

Equations (21) and (31) supply the tangential worldline data needed for Equation (12). They do not determine the transverse curvature in Equation (25). This distinction is unavoidable: Schwarzschild has nonzero Weyl curvature, while FLRW is conformally flat, so a regular scalar conformal rescaling cannot identify their full four-dimensional neighborhoods.

Under standard Einstein gravity, the direct piecewise model also has a bulk stress jump: the Schwarzschild side is vacuum, while the de Sitter side has \(T_{\mu\nu}\propto-\Lambda g_{\mu\nu}\). Distributional conservation then requires a surface contribution or a resolved transition region.

The recursive CSBHI interpretation suggests that isolated Schwarzschild is not Bob's exact geometry. Bob's black hole is embedded in a parent cosmology with its own horizon scale. The next calculation must therefore replace Equation (2) by a cosmological black-hole exterior and test whether its additional transverse data account for Equation (28) without an independent material shell.

## 9. Result

The direct null calculation establishes

\[
\boxed{
q_+=q_-
\quad\Longrightarrow\quad
R_S=R_A
}
\tag{35}
\]

and, when the matching persists along a stationary horizon,

\[
\boxed{
\dot H_A=0,
\qquad
P=-\rho c^2,
\qquad
\Lambda=\frac{3}{R_S^2}
}.
\tag{36}
\]

The simplest static transverse matching leaves the nonzero jump in Equation (28). The first junction condition therefore succeeds exactly; the second identifies the precise data that a recursive parent geometry or finite conformal throat must supply.

---

## References

1. Barrabès, C., and Israel, W. "Thin Shells in General Relativity and Cosmology: The Lightlike Limit." *Physical Review D* 43, no. 4 (1991): 1129-1142. [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
2. Poisson, E. *A Relativist's Toolkit: The Mathematics of Black-Hole Mechanics*. Cambridge University Press, 2004.
3. Gibbons, G. W., and Hawking, S. W. "Cosmological Event Horizons, Thermodynamics, and Particle Creation." *Physical Review D* 15, no. 10 (1977): 2738-2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
4. Beltracchi, P., Gondolo, P., and Mottola, E. "Slowly Rotating Gravastars." *Physical Review D* 105 (2022): 024002. [doi:10.1103/PhysRevD.105.024002](https://doi.org/10.1103/PhysRevD.105.024002).
5. ["The Horizon Flow and Density Identity."](note.html?src=horizon_flow_density_identity) Technical note, this project.
