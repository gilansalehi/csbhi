# The Horizon Flow and Density Identity

*Supplementary note to Geometric Duality*

**Observation by:** Gemini (AI collaborator).

**Reviewed and extended by:** Codex (OpenAI).

## Abstract

At the Schwarzschild horizon, the marginally bound geodesic released from rest at infinity has unit inward radial rate when \(c=G=2M=1\). The reciprocal relation \(a=1/r\) therefore gives \(H_A=1\) at the reference epoch \(a=r=1\). Alice's spatially flat Friedmann constraint then fixes her total density at that epoch to \(3/(8\pi)\).

The same number follows from the exterior compactness relation. A Schwarzschild mass \(M=1/2\) enclosed by a sphere of areal radius one has the areal-volume average \(M/(4\pi/3)=3/(8\pi)\). Restoring units shows that both expressions equal \(3c^2/(8\pi G R_S^2)\), where \(R_S=2GM/c^2\).

The identity is exact for the infall congruence used in the paper. It fixes the total density normalization at horizon crossing, not the separate matter, radiation, and vacuum fractions. It is a boundary consistency condition within the reciprocal construction, not a derivation of the unresolved horizon junction.

---

## 1. The selected Schwarzschild trajectory

Let \(R_S=2GM/c^2\) be the Schwarzschild radius. As in the paper, normalize the areal coordinate and proper time by

\[
r=\frac{R}{R_S},
\qquad
\hat\tau=\frac{c\tau}{R_S}.
\tag{1}
\]

For a radial timelike Schwarzschild geodesic with conserved energy per unit rest mass \(E\),

\[
\left(\frac{dr}{d\hat\tau}\right)^2
=
E^2-1+\frac{1}{r}.
\tag{2}
\]

Painlevé–Gullstrand time is adapted to the marginally bound congruence released from rest at infinity, for which \(E=1\) [1, 2]. Its ingoing branch is

\[
\frac{dr}{d\hat\tau}
=
-\sqrt{\frac{1}{r}}.
\tag{3}
\]

Define the positive inward flow

\[
F(r)=-\frac{dr}{d\hat\tau}.
\tag{4}
\]

At the horizon,

\[
\boxed{F(1)=1}.
\tag{5}
\]

Equation (5) is exact for the selected \(E=1\) congruence. It is not universal for every infalling geodesic: Equation (2) gives \(F(1)=E\) for a general ingoing trajectory.

## 2. The reciprocal boundary condition

The reciprocal ansatz defines

\[
a(\hat\tau)=\frac{1}{r(\hat\tau)},
\qquad
H_A
=
\frac{1}{a}\frac{da}{d\hat\tau}
=
\frac{F(r)}{r}.
\tag{6}
\]

At horizon crossing, \(r=a=1\). Equation (5) then gives

\[
\boxed{H_A(1)=1}.
\tag{7}
\]

The surface \(a=1\) is the horizon-crossing reference epoch of the reciprocal model. Calling it the universe's formation surface would require the global junction and collapse history, which have not yet been constructed.

## 3. The interior density

The field equation of Alice's spatially flat reciprocal metric is [3]

\[
H_A^2
=
\frac{8\pi}{3}\rho_{\rm total}
\tag{8}
\]

in units \(G=1\). Evaluating Equation (8) at \(a=1\) and using Equation (7) gives

\[
\boxed{
\rho_{\rm total}(a=1)
=
\frac{3}{8\pi}
}.
\tag{9}
\]

For matter, radiation, and vacuum energy,

\[
\boxed{
\rho_{m0}+\rho_{r0}+\rho_\Lambda
=
\frac{3}{8\pi}
}.
\tag{10}
\]

Equation (10) fixes one sum. It does not determine how the total divides among the three components.

## 4. The exterior compactness density

In the same normalized units, the horizon has areal radius \(r=1\) and the Schwarzschild relation \(2M=1\) gives \(M=1/2\). Define the areal-volume average

\[
\bar\rho_H
\equiv
\frac{M}{(4\pi/3)r^3}.
\tag{11}
\]

At the horizon,

\[
\boxed{
\bar\rho_H
=
\frac{1/2}{4\pi/3}
=
\frac{3}{8\pi}
}.
\tag{12}
\]

This is a compactness density constructed from the invariant horizon area, \(4\pi R_S^2\), and its associated Euclidean areal volume, \(4\pi R_S^3/3\). It is not a local material density inside the vacuum Schwarzschild solution. Nor is that Euclidean volume a slicing-independent proper volume: spatial volumes inside a black hole depend on the chosen foliation [2].

Equations (9) and (12) give the density identity

\[
\boxed{
\rho_{\rm total}(a=1)=\bar\rho_H
}.
\tag{13}
\]

## 5. Restoring physical units

The dimensionless rate in Equation (7) corresponds to

\[
H_H=\frac{c}{R_S}.
\tag{14}
\]

The mass-equivalent critical density associated with this rate is

\[
\rho_{c,H}
=
\frac{3H_H^2}{8\pi G}
=
\frac{3c^2}{8\pi G R_S^2}.
\tag{15}
\]

The exterior compactness density is

\[
\bar\rho_H
=
\frac{3M}{4\pi R_S^3}
=
\frac{3}{4\pi R_S^3}
\left(\frac{c^2R_S}{2G}\right)
=
\frac{3c^2}{8\pi G R_S^2}.
\tag{16}
\]

Therefore

\[
\boxed{
\rho_{c,H}=\bar\rho_H
}.
\tag{17}
\]

Equation (17) is the horizon-side form of the critical-mass identity in Section 7 and Appendix C of the paper. There, a Hubble sphere filled at critical density has a Schwarzschild radius equal to its Hubble radius. Here, a Schwarzschild horizon combined with the reciprocal \(E=1\) flow defines the corresponding critical Hubble rate.

## 6. Why the trajectory matters

For the general radial geodesic in Equation (2), horizon crossing gives \(F(1)=E\), so

\[
H_A(1)=E,
\qquad
\rho_{\rm total}(a=1)
=
E^2\frac{3}{8\pi}.
\tag{18}
\]

The exterior compactness density remains \(3/(8\pi)\). Hence

\[
\rho_{\rm total}(a=1)=\bar\rho_H
\quad\Longleftrightarrow\quad
E=1
\tag{19}
\]

for future-directed infall. The density identity therefore singles out the same marginally bound congruence that defines the standard Painlevé–Gullstrand rain frame. Within the paper's construction, the kinematic normalization, the PG frame, and the critical-density normalization are three statements of one boundary condition.

## 7. Result

The logical chain is

\[
R_S=\frac{2GM}{c^2},
\qquad
E=1,
\qquad
a=\frac{1}{r}
\]

\[
\Longrightarrow
\quad
H_H=\frac{c}{R_S}
\quad
\Longrightarrow
\quad
\rho_{\rm total}(a=1)
=
\frac{3c^2}{8\pi G R_S^2}
=
\frac{3M}{4\pi R_S^3}.
\tag{20}
\]

This exact identity fixes the total density scale at the horizon-crossing reference epoch. Its significance is consistency: the interior Friedmann normalization and the exterior Schwarzschild compactness normalization agree for the infall congruence used by the reciprocal construction. Deriving why the global horizon map selects that congruence remains a separate problem.

---

## References

1. Martel, K., and Poisson, E. “Regular Coordinate Systems for Schwarzschild and Other Spherical Spacetimes.” *American Journal of Physics* 69 (2001): 476–480. [doi:10.1119/1.1336836](https://doi.org/10.1119/1.1336836); [arXiv:gr-qc/0001069](https://arxiv.org/abs/gr-qc/0001069).
2. Finch, T. K. “Coordinate Families for the Schwarzschild Geometry Based on Radial Timelike Geodesics.” *General Relativity and Gravitation* 47 (2015): 56. [doi:10.1007/s10714-015-1891-7](https://doi.org/10.1007/s10714-015-1891-7); [arXiv:1211.4337](https://arxiv.org/abs/1211.4337).
3. [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior), Sections 2–6.
