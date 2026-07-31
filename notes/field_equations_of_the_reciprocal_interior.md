# Field Equations of the Reciprocal Interior

*Reciprocal Interior I · Technical paper*

**Author:** Codex (OpenAI).

## Abstract

We derive the matter–radiation–\(\Lambda\) expansion law of the reciprocal interior proposed in *Geometric Duality: Conformal Scaling of Black Hole Interiors*. The independent inputs are the inverse-radius ansatz \(a(\tau)=1/r(\tau)\), isotropic scaling of Alice's spatial geometry, Einstein's field equations, and non-interacting perfect fluids representing matter, radiation, and vacuum energy. The Friedmann equations do not enter as dynamical assumptions.

The reciprocal scale defines Alice's metric with an initially unspecified function \(a(\tau)\). Its Einstein tensor gives the Friedmann energy and acceleration equations. Stress-energy conservation then fixes the matter and radiation powers. Only after deriving those results do we substitute \(a=1/r\) and \(F=-dr/d\tau\), obtaining the infall function used in the paper.

The result is conditional but exact: Einstein's equations force Friedmann evolution once the reciprocal interior metric and its matter content are specified. The calculation does not derive the reciprocal ansatz or the junction between Alice's interior and Bob's exterior.

---

## 1. Independent inputs

We work in units where \(c=1\), retain \(G\), and use metric signature \((-+++)\). Let

\[
r(\tau)>0
\]

be the radius that Bob assigns to Alice's trajectory, normalized to the parent black-hole horizon and parametrized by Alice's proper time. During infall, \(r\) decreases monotonically. Define

\[
a(\tau)=\frac{1}{r(\tau)},
\qquad
F(r)=-\frac{dr}{d\tau}>0.
\tag{1}
\]

The derivation uses four independent inputs:

1. the reciprocal ansatz in Equation (1);
2. isotropic application of \(a(\tau)\) to Alice's spatial intervals;
3. Einstein's field equations;
4. non-interacting matter, radiation, and vacuum-energy components with equations of state \(w_m=0\), \(w_r=1/3\), and \(w_\Lambda=-1\).

No expansion law for \(a(\tau)\) has been specified at this stage.

## 2. The reciprocal metric

Let \((R,\theta,\phi)\) label the probes surrounding Alice. These are Alice-centered spatial coordinates; Bob's \(r\) is not one of them. Applying the reciprocal factor equally in all spatial directions gives

\[
ds_A^2
=
-d\tau^2
+a(\tau)^2
\left(dR^2+R^2d\Omega^2\right).
\tag{2}
\]

Equation (2) fixes the symmetry and spatial scale of Alice's geometry, but it leaves the function \(a(\tau)\) undetermined. Its FLRW form is kinematic. Einstein's equations determine its dynamics [2–4, 6].

For the curvature calculation, use local Cartesian spatial coordinates \(x^i\), so

\[
g_{00}=-1,
\qquad
g_{ij}=a^2\delta_{ij},
\qquad
H_A\equiv\frac{\dot a}{a}.
\tag{3}
\]

## 3. Einstein tensor of Alice's geometry

The only nonzero Christoffel symbols in these coordinates are

\[
\Gamma^0{}_{ij}=H_A g_{ij},
\qquad
\Gamma^i{}_{0j}=\Gamma^i{}_{j0}=H_A\delta^i{}_j.
\tag{4}
\]

They give

\[
R_{00}=-3\left(\dot H_A+H_A^2\right),
\qquad
R_{ij}=\left(\dot H_A+3H_A^2\right)g_{ij},
\tag{5}
\]

and

\[
\mathcal R=6\left(\dot H_A+2H_A^2\right).
\tag{6}
\]

Therefore

\[
G_{00}=3H_A^2,
\qquad
G_{ij}=-\left(2\dot H_A+3H_A^2\right)g_{ij}.
\tag{7}
\]

This calculation uses the reciprocal metric, not a Friedmann equation.

## 4. Matter, radiation, and vacuum energy

For a comoving perfect fluid,

\[
T_{00}=\rho,
\qquad
T_{ij}=p\,g_{ij}.
\tag{8}
\]

Write

\[
\rho=\rho_m+\rho_r+\rho_\Lambda,
\qquad
p=\frac{1}{3}\rho_r-\rho_\Lambda.
\tag{9}
\]

Here vacuum energy is included as a fluid with \(p_\Lambda=-\rho_\Lambda\), equivalent to moving \(\Lambda g_{\mu\nu}\) to the matter side of Einstein's equations.

Substituting Equations (7)–(9) into Einstein's field equations [1],

\[
G_{\mu\nu}=8\pi G T_{\mu\nu}
\]

gives

\[
H_A^2=\frac{8\pi G}{3}\rho,
\qquad
2\dot H_A+3H_A^2=-8\pi Gp.
\tag{10}
\]

Combining the two components yields

\[
\dot H_A=-4\pi G(\rho+p),
\tag{11}
\]

and hence

\[
\frac{\ddot a}{a}
=
-\frac{4\pi G}{3}(\rho+3p)
=
-\frac{4\pi G}{3}
\left(\rho_m+2\rho_r-2\rho_\Lambda\right).
\tag{12}
\]

Equations (10) and (12) are the Friedmann energy and acceleration equations. They follow here from the Einstein tensor of Equation (2).

## 5. Conservation fixes the density powers

The contracted Bianchi identity forces \(\nabla_\mu T^{\mu\nu}=0\). For the metric in Equation (2), its time component is

\[
\dot\rho+3H_A(\rho+p)=0.
\tag{13}
\]

For non-interacting components with constant equations of state \(p_i=w_i\rho_i\), Equation (13) integrates to

\[
\rho_i(a)=\rho_{i0}a^{-3(1+w_i)}.
\tag{14}
\]

Here \(\rho_{i0}\) is the density of component \(i\) at the reference epoch \(a=1\).

Therefore

\[
\rho_m=\rho_{m0}a^{-3},
\qquad
\rho_r=\rho_{r0}a^{-4},
\qquad
\rho_\Lambda=\text{constant}.
\tag{15}
\]

Substituting Equation (15) into the first equation in (10) gives

\[
H_A^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}a^{-3}
+\rho_{r0}a^{-4}
+\rho_\Lambda
\right).
\tag{16}
\]

Thus the complete spatially flat matter–radiation–\(\Lambda\) Friedmann background follows from the reciprocal metric, Einstein's equations, and stress-energy conservation.

The acceleration equation is not an additional assumption. Differentiating Equation (16) and using Equation (13) reproduces Equation (11), as required by the Bianchi identity.

## 6. From the field equation to the infall function

Differentiate the reciprocal ansatz only after deriving Equation (16):

\[
H_A
=
\frac{\dot a}{a}
=
-\frac{\dot r}{r}
=
\frac{F(r)}{r}.
\tag{17}
\]

Equation (15) becomes

\[
\rho_m=\rho_{m0}r^3,
\qquad
\rho_r=\rho_{r0}r^4,
\qquad
\rho_\Lambda=\text{constant}.
\tag{18}
\]

Substitution of Equations (17) and (18) into the derived energy equation (16) gives

\[
\boxed{
F(r)
=
r\sqrt{
\frac{8\pi G}{3}
\left(
\rho_{m0}r^3
+\rho_{r0}r^4
+\rho_\Lambda
\right)
}
}.
\tag{19}
\]

We choose the positive root because \(F=-dr/d\tau\) measures positive inward speed. Equation (19) is the infall function used in the main paper.

The acceleration equation provides a direct check. From Equation (17),

\[
\frac{\ddot a}{a}
=
-\frac{F(r)F'(r)}{r}
+\frac{2F(r)^2}{r^2}.
\tag{20}
\]

Inserting Equation (19) into Equation (20) reproduces Equation (12), including the coefficients \(1\), \(2\), and \(-2\) for matter, radiation, and vacuum energy.

## 7. Spatial curvature

The flat metric in Equation (2) is the geometry used in the paper. For comparison, replace its spatial line element with

\[
a(\tau)^2
\left(
\frac{dR^2}{1-kR^2}+R^2d\Omega^2
\right).
\]

The time-time field equation becomes

\[
H_A^2+\frac{k}{a^2}=\frac{8\pi G}{3}\rho.
\tag{21}
\]

Under the reciprocal substitution,

\[
F(r)^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}r^5
+\rho_{r0}r^6
+\rho_\Lambda r^2
\right)
-kr^4.
\tag{22}
\]

The integration constant \(C\) in Appendix A of the paper is therefore \(C=-k\). Spatial flatness sets \(C=0\).

## 8. Independent ADM check

The same energy equation follows without computing the four-dimensional Ricci tensor component by component. On a constant-\(\tau\) slice of Equation (2), the spatial metric is

\[
h_{ij}=a^2\delta_{ij}.
\]

With unit lapse and zero shift, its extrinsic curvature is

\[
K_{ij}=-H_A h_{ij},
\qquad
K=-3H_A,
\qquad
K_{ij}K^{ij}=3H_A^2.
\tag{23}
\]

The spatial curvature is \({}^{(3)}\mathcal R=0\). The ADM Hamiltonian constraint is [5]

\[
{}^{(3)}\mathcal R+K^2-K_{ij}K^{ij}=16\pi G\rho.
\tag{24}
\]

Equations (23) and (24) give

\[
6H_A^2=16\pi G\rho,
\]

which is precisely the first equation in (10). For nonzero \(k\), \({}^{(3)}\mathcal R=6k/a^2\), reproducing Equation (21). The direct Einstein-tensor calculation and the independent initial-value constraint therefore agree.

## 9. Two radial flows

Bob's \(r\) in Equation (1) parametrizes Alice's trajectory. It is distinct from Alice's areal radius

\[
\bar R=a(\tau)R.
\tag{25}
\]

Using \(d\bar R=a\,dR+H_A\bar R\,d\tau\), the flat metric in Equation (2) becomes

\[
ds_A^2
=
-d\tau^2
+\left(d\bar R-H_A\bar R\,d\tau\right)^2
+\bar R^2d\Omega^2.
\tag{26}
\]

This is the Painlevé–Gullstrand form of flat FLRW [7], with spatial flow \(H_A\bar R\). The two flow functions share the same expansion rate,

\[
F(r)=H_A(r)r,
\qquad
F_{\mathrm{PG}}(\bar R,\tau)=H_A(\tau)\bar R,
\tag{27}
\]

but their radial arguments are different. Equation (27) does not identify Bob's \(r\) with Alice's \(\bar R\).

## 10. Result

The logical chain is now one-directional:

\[
a=1/r
\quad+\quad
\text{isotropic reciprocal metric}
\quad+\quad
G_{\mu\nu}=8\pi G T_{\mu\nu}
\]

\[
\Longrightarrow
\quad
\text{Friedmann evolution}
\quad
\Longrightarrow
\quad
F(r).
\]

The Friedmann equation is the time-time field equation of the proposed reciprocal interior; it is not inserted as the premise of this derivation. The CSBHI-specific input is the identification \(a=1/r\). The standard GR calculation determines the dynamics that follow from it.

The remaining geometric problem is separate: derive the reciprocal interior and its normalization from a common spacetime containing Bob's exterior and Alice's interior. That problem is recorded in [Constraints on the Horizon Map](note.html?src=constraints_on_the_horizon_map).

## References

1. Einstein, A. “Die Grundlage der allgemeinen Relativitätstheorie.” *Annalen der Physik* 49, no. 7 (1916): 769–822. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702).
2. Friedmann, A. “Über die Krümmung des Raumes.” *Zeitschrift für Physik* 10 (1922): 377–386. [doi:10.1007/BF01332580](https://doi.org/10.1007/BF01332580).
3. Robertson, H. P. “On the Foundations of Relativistic Cosmology.” *Proceedings of the National Academy of Sciences* 15, no. 11 (1929): 822–829. [doi:10.1073/pnas.15.11.822](https://doi.org/10.1073/pnas.15.11.822).
4. Walker, A. G. “On Milne's Theory of World-Structure.” *Proceedings of the London Mathematical Society* 42, no. 1 (1937): 90–127. [doi:10.1112/plms/s2-42.1.90](https://doi.org/10.1112/plms/s2-42.1.90).
5. Arnowitt, R., Deser, S., and Misner, C. W. “The Dynamics of General Relativity.” In *Gravitation: An Introduction to Current Research*, edited by L. Witten, 227–265. Wiley, 1962. [arXiv:gr-qc/0405109](https://arxiv.org/abs/gr-qc/0405109).
6. Ellis, G. F. R., and van Elst, H. “Cosmological Models.” In *Theoretical and Observational Cosmology*, 1–116. Kluwer, 1999. [arXiv:gr-qc/9812046](https://arxiv.org/abs/gr-qc/9812046).
7. Gaur, R., and Visser, M. “Cosmology in Painlevé–Gullstrand Coordinates.” *Journal of Cosmology and Astroparticle Physics* 2022, no. 09 (2022): 030. [doi:10.1088/1475-7516/2022/09/030](https://doi.org/10.1088/1475-7516/2022/09/030).
