# Pressure Gradients and the Regular Birth Vertex

## A conditional perturbation theorem for the GD2 formation map

**Working calculation — September 2026. Source: upstream project derivation. Review and revisions: Codex (OpenAI).**

## Abstract

[*Pressure Robustness of the Conformal Formation Map*](note.html?src=pressure_robustness_of_the_conformal_formation_map) establishes that homogeneous pressure does not break the GD2 background construction. A realistic pressure-supported star, however, requires radial pressure gradients. Those gradients accelerate the fluid relative to the freely falling Alice congruence used by Geometric Duality.

This note determines what follows. For a spherical perfect fluid, let Alice move radially with four-velocity

\[
v^a=\gamma(u^a+Vn^a).
\]

The GD1 reciprocal rate measured in Alice's parent proper time is

\[
\boxed{
\mathscr H_{\rm GD}
=
-v^a\nabla_a\ln R
=
-\gamma\frac{U+V\mathcal G}{R}.
}
\]

For Alice's spherical congruence,

\[
\boxed{
\mathscr H_{\rm GD}
=
-\frac{\Theta_A-\Sigma_A}{3}.
}
\]

The minimal GD2 background criterion requires Alice's parent-frame congruence to be shear-free and spatially expansion-homogeneous. The standard momentum constraint then requires the energy flux measured by Alice to vanish. A tilted perfect fluid carries

\[
q_a^{(A)}=-(\rho+p)\gamma^2V s_a.
\]

For ordinary matter, zero flux forces \(V=0\). Alice must then follow the fluid; because Alice is geodesic, the Euler equation forces \(D_qp=0\). Therefore

\[
\boxed{
D_qp\not\equiv0\text{ on }\mathcal U
\quad\Longrightarrow\quad
\text{a geodesic Alice congruence cannot be both shear-free and uniformly expanding throughout }\mathcal U.
}
\]

Pressure gradients consequently appear as child perturbations in the minimal shell-independent completion rather than as a different homogeneous background.

Regularity controls their onset. At a smooth spherical center, pressure and density gradients vanish linearly, Alice's relative velocity is \(O(R)\), anisotropic stress and electric Weyl curvature are \(O(R^2)\), and the Alice shear is \(O(R^2)\). Hence

\[
\boxed{
\mathscr H_{\rm GD}(R)
=
-\frac{\Theta_0}{3}+O(R^2).
}
\]

The central birth vertex is therefore FLRW-like at leading order even when the finite collapsing body is not homogeneous. Alice-frame radial flux begins at \(O(R)\), while anisotropic stress, Weyl curvature, shear, and the reciprocal scalar-rate correction begin at \(O(R^2)\). The next test is quantitative: evolve a realistic equation of state and determine their amplitudes when the horizon reaches the stellar surface.

---

## 1. General spherical perfect-fluid collapse

Use the Misner–Sharp form

\[
ds_P^2
=
-N^2(t,q)dt^2
+L^2(t,q)dq^2
+R^2(t,q)d\Omega^2,
\tag{1}
\]

with

\[
T_{ab}=(\rho+p)u_au_b+pg_{ab},
\qquad
u^a=N^{-1}(\partial_t)^a.
\tag{2}
\]

The dynamical equations below use geometrized units \(G=c=1\). Define

\[
D_t=N^{-1}\partial_t,
\qquad
D_q=L^{-1}\partial_q,
\tag{3}
\]

and

\[
U=D_tR,
\qquad
\mathcal G=D_qR.
\tag{4}
\]

The Misner–Sharp relations are

\[
\boxed{
\mathcal G^2
=
1+U^2-\frac{2m}{R},
}
\tag{5}
\]

\[
\boxed{
D_tU
=
-\frac{\mathcal G}{\rho+p}D_qp
-\frac{m}{R^2}
-4\pi pR,
}
\tag{6}
\]

and

\[
\boxed{
D_qm=4\pi R^2\rho\,\mathcal G,
\qquad
D_tm=-4\pi pR^2U.
}
\tag{7}
\]

These equations extend the OS dust benchmark to relativistic matter with pressure and pressure gradients.

---

## 2. Alice is not the fluid

Let \(n^a\) be the outward radial unit vector in the fluid frame. A radial freely falling Alice has

\[
\boxed{
v^a=\gamma(u^a+Vn^a),
\qquad
\gamma=(1-V^2)^{-1/2},
}
\tag{8}
\]

and follows

\[
v^b\nabla_bv^a=0.
\tag{9}
\]

The fluid generally does not. Its Euler equation gives

\[
\boxed{
a_u^a
=
-\frac{D_qp}{\rho+p}n^a.
}
\tag{10}
\]

A pressure gradient therefore accelerates the stellar material relative to Alice. This relative motion is the physical ingredient absent from LTB dust.

---

## 3. The reciprocal rate along Alice

Along Alice's trajectory \(\gamma_A(\tau_A)\), define

\[
r_A(\tau_A)
=
\frac{R[\gamma_A(\tau_A)]}{R_H}.
\tag{11}
\]

The GD1 reciprocal rate in parent Alice proper time is

\[
\boxed{
\mathscr H_{\rm GD}
\equiv
\frac{d\ln(1/r_A)}{d\tau_A}
=
-v^a\nabla_a\ln R.
}
\tag{12}
\]

Because

\[
u(R)=U,
\qquad
n(R)=\mathcal G,
\]

Equation (8) gives

\[
\boxed{
\mathscr H_{\rm GD}
=
-\gamma\frac{U+V\mathcal G}{R}.
}
\tag{13}
\]

Pressure does not modify the reciprocal law. It changes \(R(\tau_A)\) by changing the geometry and Alice's motion through it.

Equation (12) uses parent proper time. If the formation patch is interpreted as a literal Weyl transformation \(g_C=\Gamma^2g_P\) along corresponding curves, then

\[
d\tau_C=\Gamma\,d\tau_P.
\]

The numerical child Hubble rate would then carry the corresponding \(1/\Gamma\) conversion. Parent and child proper times remain distinct until the physical interpretation of \(\Gamma\) and the event map is fixed.

---

## 4. Alice's deformation cloud

A smooth spherical Alice congruence has radial and tangential fractional separation rates

\[
H_\parallel,
\qquad
H_\perp=\frac{v(R)}{R}.
\]

Define

\[
\Theta_A=H_\parallel+2H_\perp,
\qquad
\Sigma_A=H_\parallel-H_\perp.
\tag{14}
\]

Then

\[
H_\perp=\frac{\Theta_A-\Sigma_A}{3},
\]

so the reciprocal rate is

\[
\boxed{
\mathscr H_{\rm GD}
=
-\frac{\Theta_A-\Sigma_A}{3}.
}
\tag{15}
\]

Homogeneous collapse has \(\Sigma_A=0\) and recovers

\[
\boxed{
\mathscr H_{\rm GD}=-\frac{\Theta_A}{3}.
}
\tag{16}
\]

The shear term is the precise entry point for departures from an isotropic child background. A scalar Weyl rescaling changes isotropic expansion but preserves whether the corresponding normalized congruence is shear-free; it cannot erase nonzero shear.

---

## 5. Pressure-gradient perturbation theorem

Let \(\mathcal U\) be an open region of a pressure-supported parent. Impose the minimal GD2 background criterion: its radial geodesic Alice congruence is shear-free and has spatially homogeneous expansion. With a shell-independent conformal calibration, these are the parent kinematics that feed an exact FLRW child background.

Exact FLRW kinematics require

\[
\sigma^{(A)}_{ab}=0,
\qquad
D_a\Theta_A=0.
\tag{17}
\]

A smooth radial spherical congruence is vorticity-free. The standard \(1+3\) momentum constraint in Alice's frame is then

\[
D^b\sigma^{(A)}_{ab}
-\frac23D_a\Theta_A
+\kappa q^{(A)}_a
=0,
\qquad
\kappa=8\pi G.
\tag{18}
\]

Equation (17) reduces the constraint to

\[
\boxed{q^{(A)}_a=0.}
\tag{19}
\]

A Lorentz boost of the parent perfect fluid into Alice's frame gives

\[
\rho_A=(\rho+p)\gamma^2-p,
\]

and

\[
\boxed{
q^{(A)}_a
=
-(\rho+p)\gamma^2V s_a,
}
\tag{20}
\]

where \(s^a\) is Alice's radial spatial direction. For ordinary matter with \(\rho+p\ne0\), Equation (19) forces

\[
\boxed{V=0.}
\tag{21}
\]

Alice must therefore follow the fluid. Alice is geodesic, so the fluid acceleration in Equation (10) must vanish:

\[
\boxed{D_qp=0.}
\tag{22}
\]

Because Equation (21) holds throughout \(\mathcal U\), Alice and the fluid define the same vector field there. Their accelerations must therefore agree, and the contrapositive is

\[
\boxed{
D_qp\not\equiv0\text{ on }\mathcal U
\quad\Longrightarrow\quad
\text{a geodesic Alice congruence cannot simultaneously satisfy throughout }\mathcal U
\quad
\sigma^{(A)}_{ab}=0,
\quad
D_a\Theta_A=0.
}
\tag{23}
\]

The theorem is conditional on a smooth radial geodesic Alice congruence, ordinary perfect-fluid matter with \(\rho+p\ne0\), and the minimal shell-independent background criterion. An arbitrary spatial conformal calibration could alter an expansion gradient, but introducing that freedom is precisely the unresolved \(K(q)\) problem; it cannot be used silently to manufacture homogeneity. Vanishing shear is preserved by a scalar conformal rescaling, and nonzero parent Weyl curvature cannot be rescaled into exact FLRW. Under the minimal completion, a genuine stellar pressure gradient must therefore enter the child as a metric or matter perturbation.

---

## 6. The perturbation sources

The perfect fluid is imperfect in Alice's tilted frame. Its radial and transverse pressures are

\[
p_{r,A}=p+(\rho+p)\gamma^2V^2,
\qquad
p_{\perp,A}=p.
\]

Alice therefore measures anisotropic stress

\[
\boxed{
\pi^{(A)}_{ab}
=
(\rho+p)\gamma^2V^2
\left(s_as_b-\frac13h_{ab}\right).
}
\tag{24}
\]

For a geodesic, irrotational congruence, the shear propagation equation is

\[
\boxed{
\dot\sigma^{(A)}_{\langle ab\rangle}
=
-\frac23\Theta_A\sigma^{(A)}_{ab}
-\sigma^{(A)}_{c\langle a}\sigma^{(A)c}{}_{b\rangle}
-E^{(A)}_{ab}
+\frac{\kappa}{2}\pi^{(A)}_{ab}.
}
\tag{25}
\]

Density inhomogeneity produces electric Weyl curvature \(E^{(A)}_{ab}\). A pressure gradient produces Alice–fluid tilt and the anisotropic stress in Equation (24). Both source Alice's shear unless the tensors happen to cancel:

\[
E^{(A)}_{ab}=\frac{\kappa}{2}\pi^{(A)}_{ab}.
\tag{26}
\]

The generic chain is therefore

\[
\boxed{
\text{parent density and pressure structure}
\longrightarrow
\text{tilt, Weyl curvature, and shear}
\longrightarrow
\text{child perturbations}.
}
\]

---

## 7. Regular-center expansion

At a regular spherical center, smooth scalar fields have even areal-radius expansions. Let \(D_R\) denote the regular radial derivative in a local areal-radius chart:

\[
\rho(t,R)=\rho_0(t)+\rho_2(t)R^2+O(R^4),
\]

\[
p(t,R)=p_0(t)+p_2(t)R^2+O(R^4).
\tag{27}
\]

Consequently,

\[
\boxed{
D_Rp\big|_{R=0}=0,
\qquad
D_R\rho\big|_{R=0}=0.
}
\tag{28}
\]

The fluid acceleration is

\[
a_u=-\frac{D_Rp}{\rho+p}=O(R).
\tag{29}
\]

A smooth radial Alice–fluid velocity field cannot select a direction at the center, so

\[
V=O(R).
\tag{30}
\]

Equations (20) and (24) then give

\[
\boxed{q_A=O(R),}
\qquad
\boxed{\pi_A=O(R^2).}
\tag{31}
\]

The Misner–Sharp mass has the regular expansion

\[
m(R)
=
4\pi\int_0^R\rho(\widetilde R)\widetilde R^2d\widetilde R
=
\frac{4\pi}{3}\rho_0R^3
+\frac{4\pi}{5}\rho_2R^5
+O(R^7).
\tag{32}
\]

In spherical symmetry, the electric Weyl scalar is proportional, up to convention-dependent matter terms and signs, to the difference between mean enclosed density and local density. Equation (32) therefore gives

\[
\boxed{\mathcal E=O(R^2).}
\tag{33}
\]

Regularity and Equation (25) then imply

\[
\boxed{\Sigma_A=O(R^2).}
\tag{34}
\]

The momentum constraint, with \(q_A=O(R)\) and the regular shear divergence, gives

\[
D_R\Theta_A=O(R),
\]

and hence

\[
\boxed{
\Theta_A(R)=\Theta_0+O(R^2).
}
\tag{35}
\]

Substitution into Equation (15) yields

\[
\boxed{
\mathscr H_{\rm GD}(R)
=
-\frac{\Theta_0}{3}+O(R^2).
}
\tag{36}
\]

---

## 8. Birth-vertex theorem

Equations (28)–(36) establish the regular-center result:

\[
\boxed{
\begin{aligned}
D_Rp&=O(R),\\
D_R\rho&=O(R),\\
V&=O(R),\\
q_A&=O(R),\\
\pi_A&=O(R^2),\\
\mathcal E&=O(R^2),\\
\Sigma_A&=O(R^2),\\
\Theta_A&=\Theta_0+O(R^2).
\end{aligned}
}
\tag{37}
\]

At the pointlike event-horizon vertex, the Alice congruence is isotropic and uniformly expanding to leading order. The local reciprocal image is therefore FLRW-like at zeroth order. This is a local statement about the regular birth neighborhood, not a claim that one point establishes a complete global FLRW spacetime.

As the event horizon grows outward, density and pressure gradients produce the first nonzero tilt, flux, Weyl curvature, anisotropic stress, and shear. The radial tilt and flux begin at \(O(R)\); the scalar reciprocal-rate correction, anisotropic stress, Weyl curvature, and shear begin at \(O(R^2)\).

The formation picture becomes

\[
\boxed{
R_E=0
\quad\Longrightarrow\quad
\text{isotropic homogeneous leading term},
}
\]

followed by

\[
\boxed{
R_E>0
\quad\Longrightarrow\quad
\text{pressure and density structure}
\longrightarrow
\text{child perturbations}.
}
\]

The homogeneous OS map is therefore the regular central term of a broader pressured-collapse expansion, not merely an exceptional dust solution.

---

## 9. Scoreboard verdict

The general spherical perfect-fluid rung earns

\[
\boxed{\textbf{PASS — WITH REQUIRED PERTURBATIONS}.}
\]

Pressure gradients do not alter \(a=1/r\), eliminate radial geodesic Alices, or remove the null event horizon. They do prevent one geodesic Alice congruence from remaining exactly shear-free and uniformly expanding across a finite pressured star.

That failure of exact symmetry is productive. The perturbations vanish at the regular birth vertex and grow as the horizon samples increasingly structured matter.

The remaining question is quantitative:

\[
\boxed{
\text{How large are the induced perturbations when the event horizon reaches the stellar surface?}
}
\]

---

## 10. The next benchmark

A realistic equation of state and relativistic collapse solution must supply

\[
\rho(t,R),
\qquad
p(t,R),
\qquad
U(t,R),
\qquad
m(t,R).
\]

Equations (13), (20), (25), and (36) then determine the reciprocal-rate perturbation, Alice-frame flux, anisotropic stress, Weyl source, and shear history. The calculation must also include the event-horizon surface anchor and the physical conformal completion identified in the preceding GD2 notes.

A successful model must produce a perturbation amplitude and spectrum compatible with the child cosmology without fitting the answer through the unresolved calibration \(K(q)\).

This is the point at which the GD2 programme passes from analytic structure to relativistic hydrodynamics.

---

## Conclusion

Homogeneous pressure preserves the GD2 background formation map. Pressure gradients determine its first unavoidable departure from exact FLRW.

For a geodesic Alice congruence and ordinary perfect-fluid matter,

\[
\boxed{
D_qp\not\equiv0\text{ on }\mathcal U
\quad\Longrightarrow\quad
\sigma^{(A)}_{ab}\not\equiv0
\quad\text{or}\quad
D_a\Theta_A\not\equiv0
\quad\text{on }\mathcal U.
}
\]

The departure is not present at leading order at a regular spherical center. There,

\[
\boxed{
\mathscr H_{\rm GD}(R)
=
-\frac{\Theta_0}{3}+O(R^2).
}
\]

The pointlike birth vertex therefore inherits an isotropic homogeneous leading term. Structure appears as the growing event horizon reaches the parent's radial density and pressure profile.

The analytic verdict is complete enough to advance the scoreboard. The next pass/fail result is the surface amplitude produced by a realistic pressured collapse.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. G. F. R. Ellis and H. van Elst, “Cosmological Models,” in *Theoretical and Observational Cosmology*, NATO Science Series C **541**, 1–116 (1999), [arXiv:gr-qc/9812046](https://arxiv.org/abs/gr-qc/9812046).
3. H. van Elst and G. F. R. Ellis, “The Covariant Approach to LRS Perfect Fluid Spacetime Geometries,” *Classical and Quantum Gravity* **13**, 1099–1128 (1996), [arXiv:gr-qc/9510044](https://arxiv.org/abs/gr-qc/9510044).
4. P. N. Khambule, R. Goswami, and S. D. Maharaj, “Matching conditions in locally rotationally symmetric spacetimes and radiating stars,” *Classical and Quantum Gravity* **38**, 075006 (2021), [doi:10.1088/1361-6382/abe2dd](https://doi.org/10.1088/1361-6382/abe2dd), [arXiv:2011.00853](https://arxiv.org/abs/2011.00853).
5. G. Salehi, [“Result IV — The Conformal Formation Map”](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
6. [“Pressure Robustness of the Conformal Formation Map”](note.html?src=pressure_robustness_of_the_conformal_formation_map), CSBHI working calculation (2026).
7. [“Perturbing the Conformal Formation Map”](note.html?src=perturbing_the_conformal_formation_map), CSBHI working calculation (2026).
