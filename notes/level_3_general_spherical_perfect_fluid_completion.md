# CSBHI Mini-Program — Level 3 Progress Note

## General spherical perfect-fluid collapse

**Working calculation — September 10, 2026. Source: upstream project derivation. Review and revisions: Codex (OpenAI).**

---

## Abstract

The current mini-program tests whether the proposed CSBHI conformal correspondence survives progressively more realistic models of black-hole formation. The working hypothesis is that black-hole infall corresponds to cosmic expansion under the CSBHI conformal map. The parent black hole's growing event horizon maps to an outgoing child birth cone, with the birth of the parent event horizon corresponding to the child patch's pointlike lower limit.

The immediate question is whether realistic stellar structure destroys the near-homogeneous, FLRW-like character required of the child universe. This note completes the analytic general-perfect-fluid rung. It writes the global event-horizon sweep in Misner–Sharp variables, derives the nonlinear transport equation for spherical Weyl curvature, and closes the previously outstanding calculation of a freely falling Alice's tilt relative to the accelerated stellar fluid.

At a regular spherical center,

\[
\Delta_\rho,\ \Pi_p,\ \mathcal W,\ \Sigma,
\ \rho_A-\rho,\ p_{r,A}-p_{\perp,A}
=O(R_E^2),
\]

while Alice's radial tilt and energy flux are (O(R_E)). The vector flux vanishes at the center and enters scalar observables only quadratically. Every scalar departure examined is therefore quadratically suppressed at the event-horizon birth vertex.

Level 3 passes structurally. The result does not show that perturbations remain small across the full stellar interior; the exact Weyl transport equation permits density gradients and shear to amplify them as the horizon grows. Numerical collapse simulations remain necessary for model-dependent amplitudes, but not for the structural conclusion.

---

## 1. Objective and status

The mini-program currently stands as follows:

| Level | Collapse model | Status |
|---:|---|---|
| 0 | Oppenheimer–Snyder dust | **Passed** |
| 1 | Homogeneous perfect fluid | **Passed structurally** |
| 2 | Perturbed LTB dust | **Partially passed; absolute calibration open** |
| 3 | General spherical perfect fluid | **Passed structurally** |
| 4 | Dissipative spherical collapse | **Next** |
| 5 | Rotating collapse | **Planned** |

The unresolved Level-2 datum remains the absolute conformal calibration (K(q)). The Level-3 question is different: whether pressure gradients and Alice–fluid relative motion destroy the regular FLRW-like birth limit. The calculation below shows that they do not.

Numerical collapse simulations are deferred until the theoretical ladder is complete. Their later role is to supply realistic coefficients and amplitudes, not to establish the local structural correspondence.

Throughout Sections 2–7, (G=c=1). The symbols \(\rho\) and \(p\) are therefore energy density and pressure in the same geometrized units. The radial Misner–Sharp derivative is written \(\Gamma_{\rm MS}\), reserving bare \(\Gamma\) for mature parent-to-child scale separation elsewhere in the GD2 sequence.

---

## 2. General pressured collapse

Use a general comoving spherically symmetric metric

\[
ds^2=-A^2dt^2+B^2dx^2+R^2d\Omega^2.
\tag{1}
\]

Here (t) is the fluid-comoving time coordinate, (x) labels spherical fluid shells, (R(t,x)) is areal radius, (A(t,x)) is the lapse, (B(t,x)) is the radial metric coefficient, and (m(t,x)) is the enclosed Misner–Sharp mass.

Define proper-time and proper-radial derivatives by

\[
D_t\equiv\frac1A\partial_t,
\qquad
D_\ell\equiv\frac1B\partial_x.
\tag{2}
\]

Define

\[
U\equiv D_tR,
\qquad
\Gamma_{\rm MS}\equiv D_\ell R.
\tag{3}
\]

The Misner–Sharp constraint is

\[
\boxed{
\Gamma_{\rm MS}^2=1+U^2-\frac{2m}{R}.
}
\tag{4}
\]

For a perfect fluid,

\[
T_{ab}=(\rho+p)u_au_b+pg_{ab},
\]

the mass equations are

\[
\boxed{
D_tm=-4\pi R^2Up,
}
\tag{5}
\]

and

\[
\boxed{
D_\ell m=4\pi R^2\Gamma_{\rm MS}\rho.
}
\tag{6}
\]

Equation (5) records compression work. During collapse (U<0), so positive pressure increases the Misner–Sharp mass enclosed by a comoving shell. This is why enclosed mass fraction ceases to be a conserved cohort label beyond dust.

---

## 3. Global event-horizon sweep

Let (u^a) denote the fluid four-velocity and (e^a) the outward radial unit spatial vector. The outgoing radial null direction is

\[
n_+^a=u^a+e^a.
\tag{7}
\]

Define

\[
D_+\equiv D_t+D_\ell.
\tag{8}
\]

The field equations determine the local null congruence, but selecting which outgoing generator is the event horizon requires the future causal structure. Once that generator has been selected, any scalar (X) sampled along it satisfies

\[
\boxed{
\frac1A\frac{dX_E}{dt}=(D_+X)_E,
}
\tag{9}
\]

where the subscript (E) denotes evaluation on the event horizon.

For areal radius,

\[
\boxed{
\frac1A\frac{dR_E}{dt}=U_E+\Gamma_{{\rm MS},E}.
}
\tag{10}
\]

Combining Equations (5), (6), and (9) gives

\[
\boxed{
\frac1A\frac{dm_E}{dt}
=4\pi R_E^2
\left(
\rho_E\Gamma_{{\rm MS},E}-p_EU_E
\right).
}
\tag{11}
\]

Equations (10) and (11) describe the event horizon sweeping outward through the collapsing fluid after the global horizon generator has been fixed. They do not replace that global selection with a local trapping-horizon condition.

---

## 4. Regular-center protection

At a regular spherical center, every smooth scalar has an even expansion in areal radius. In particular,

\[
\rho(R)=\rho_0+\rho_2R^2+O(R^4),
\tag{12}
\]

and

\[
p(R)=p_0+p_2R^2+O(R^4).
\tag{13}
\]

The raw gradients therefore satisfy

\[
D_\ell\rho=O(R),
\qquad
D_\ell p=O(R).
\tag{14}
\]

The physically relevant fractional variation across a region of radius (R) is quadratic. Define

\[
\Delta_\rho
\equiv
\frac{R D_\ell\rho}{\rho},
\tag{15}
\]

and

\[
\Pi_p
\equiv
\frac{R D_\ell p}{\rho+p}.
\tag{16}
\]

Then

\[
\boxed{
\Delta_\rho=O(R^2),
\qquad
\Pi_p=O(R^2).
}
\tag{17}
\]

The quadratic Tolman VII result is therefore an explicit coefficient within a general regular-center expansion, not a peculiarity of that density profile.

---

## 5. Weyl curvature

Define the spherical Weyl amplitude

\[
\mathcal W
\equiv
\frac{m}{R^3}-\frac{4\pi}{3}\rho.
\tag{18}
\]

With the mean enclosed density

\[
\bar\rho\equiv\frac{3m}{4\pi R^3},
\]

this is

\[
\mathcal W
=\frac{4\pi}{3}(\bar\rho-\rho).
\tag{19}
\]

Using Equation (12),

\[
m
=\frac{4\pi}{3}\rho_0R^3
+\frac{4\pi}{5}\rho_2R^5
+O(R^7),
\tag{20}
\]

and therefore

\[
\boxed{
\mathcal W
=-\frac{8\pi}{15}\rho_2R^2
+O(R^4).
}
\tag{21}
\]

Thus

\[
\boxed{\mathcal W=O(R^2).}
\tag{22}
\]

Exact homogeneous collapse has \(\rho_2=0\) and vanishing Weyl curvature. Generic smooth collapse has \(\rho_2\ne0\), producing a small nonzero Weyl amplitude that grows quadratically away from the birth vertex. The child is therefore almost, but not generically exactly, Weyl-free near birth.

---

## 6. Nonlinear Weyl transport

Define the radial and transverse fluid rates

\[
H_r\equiv\frac{D_\ell U}{\Gamma_{\rm MS}},
\qquad
H_\perp\equiv\frac{U}{R},
\tag{23}
\]

and their difference

\[
\Sigma\equiv H_r-H_\perp.
\tag{24}
\]

The quantity \(\Sigma\) measures departure from homologous collapse. Local energy conservation gives

\[
D_t\rho=-(\rho+p)(H_r+2H_\perp).
\tag{25}
\]

Differentiating Equation (18), then using Equations (5), (6), and (25), yields the exact outgoing-null transport equation

\[
\boxed{
D_+\mathcal W
=-\frac{3(U+\Gamma_{\rm MS})}{R}\mathcal W
-\frac{4\pi}{3}D_\ell\rho
+\frac{4\pi}{3}(\rho+p)\Sigma.
}
\tag{26}
\]

The three terms represent transport of existing Weyl curvature, sourcing by a radial density gradient, and sourcing by non-homologous collapse. For perfectly homogeneous homologous collapse,

\[
\mathcal W=0,
\qquad
D_\ell\rho=0,
\qquad
\Sigma=0,
\]

and hence

\[
D_+\mathcal W=0.
\tag{27}
\]

The exact FLRW/Oppenheimer–Snyder limit is therefore a protected zero-Weyl solution contained within the general equations.

Regularity also gives

\[
U(R)=H_0R+U_3R^3+O(R^5),
\tag{28}
\]

so

\[
\boxed{\Sigma=O(R^2).}
\tag{29}
\]

---

## 7. Alice–fluid tilt

Let (w^a) be Alice's freely falling four-velocity. Write her motion relative to the stellar fluid using a rapidity \(\eta\):

\[
w^a
=\cosh\eta\,u^a
+\sinh\eta\,e^a.
\tag{30}
\]

Her ordinary relative speed is

\[
v=\tanh\eta.
\]

Define the fluid's radial proper acceleration

\[
\mathcal A
\equiv
-\frac{D_\ell p}{\rho+p}.
\tag{31}
\]

Alice's radial geodesic equation becomes

\[
\boxed{
\frac{d\eta}{d\tau_A}
=-\mathcal A\cosh\eta
-H_r\sinh\eta,
}
\tag{32}
\]

where \(\tau_A\) is Alice's parent-side proper time.

Regularity implies

\[
\mathcal A=O(R),
\qquad
\eta=O(R),
\qquad
v=O(R).
\tag{33}
\]

The tilt is linear, but its scalar effects are quadratic. Alice measures

\[
\rho_A
=\rho+(\rho+p)\sinh^2\eta,
\tag{34}
\]

so

\[
\boxed{\rho_A-\rho=O(R^2).}
\tag{35}
\]

Likewise,

\[
p_{r,A}-p_{\perp,A}
=(\rho+p)\sinh^2\eta,
\tag{36}
\]

and therefore

\[
\boxed{p_{r,A}-p_{\perp,A}=O(R^2).}
\tag{37}
\]

Alice also measures a radial energy flux,

\[
q_A
=-(\rho+p)\sinh\eta\cosh\eta,
\tag{38}
\]

which satisfies

\[
\boxed{q_A=O(R).}
\tag{39}
\]

This is compatible with spherical regularity: a smooth radial vector field must itself vanish linearly at the center. The flux is the sole first-order quantity in the list, and its induced scalar density and pressure corrections begin only at second order.

---

## 8. Level-3 result

At the birth vertex of the parent event horizon,

\[
\boxed{
\begin{aligned}
\Delta_\rho&=O(R_E^2),\\
\Pi_p&=O(R_E^2),\\
\mathcal W&=O(R_E^2),\\
\Sigma&=O(R_E^2),\\
\eta&=O(R_E),\\
q_A&=O(R_E),\\
\rho_A-\rho&=O(R_E^2),\\
p_{r,A}-p_{\perp,A}&=O(R_E^2).
\end{aligned}
}
\tag{40}
\]

Every scalar departure examined from the homogeneous FLRW-like limit is quadratically suppressed. The only linear quantities are radial vectors—Alice's tilt and energy flux—which vanish at the center and produce quadratic scalar corrections.

The result is local. Equation (26) explicitly permits density gradients and shear encountered farther from the center to amplify the Weyl perturbation. Nothing here establishes that the complete stellar interior remains close to OS or that the child perturbation amplitude is observationally acceptable.

The structural verdict is nevertheless definite:

\[
\boxed{\textbf{LEVEL 3 — PASSED STRUCTURALLY}.}
\tag{41}
\]

Pressure gradients, accelerated stellar matter, and Alice–fluid tilt do not destroy the regular FLRW-like birth limit. They provide the first unavoidable sources of child perturbations as the event horizon expands away from its central vertex.

---

## 9. Remaining theoretical program

Three problems remain parallel to the collapse ladder:

1. derive or justify the global conformal calibration \(K(q)=K_0\);
2. calculate the transformed Einstein tensor and identify the physical child stress-energy;
3. join the formation-era conformal patch smoothly onto the mature GD1 reciprocal interior.

The numerical Level-3 follow-up is also well-defined: evolve a chosen stellar equation of state, locate the globally selected event horizon, and integrate Equation (26) and the Alice congruence across the full sweep. That calculation supplies model-dependent amplitudes; it no longer decides the local structural question.

---

## 10. Next rung: dissipative spherical collapse

Level 4 replaces the perfect-fluid stress tensor with a general spherical matter model containing genuine radial energy transport, including heat, neutrino, and radiative flux.

The next question is:

> Does regularity suppress genuine parent-side radial energy transport strongly enough at the event-horizon birth vertex to preserve the quadratic protection of the child's scalar geometry and the almost-but-not-exactly-zero Weyl limit?

Perfect-fluid tilt produces an observer-dependent flux that vanishes linearly at the center. Dissipative collapse adds a physical flux already present in the fluid frame. [*The Level 4 Progress Note*](note.html?src=level_4_dissipative_spherical_collapse) carries out that test: regular flux changes the homogeneous central history and the quadratic Weyl coefficient but introduces no lower-order scalar obstruction.

---

## Conclusion

The general spherical perfect-fluid rung closes analytically at the birth vertex.

The globally selected event horizon obeys

\[
\frac1A\frac{dR_E}{dt}=U_E+\Gamma_{{\rm MS},E},
\]

and samples the parent Weyl amplitude according to

\[
D_+\mathcal W
=-\frac{3(U+\Gamma_{\rm MS})}{R}\mathcal W
-\frac{4\pi}{3}D_\ell\rho
+\frac{4\pi}{3}(\rho+p)\Sigma.
\]

Smooth central data force all scalar departures from the homogeneous limit to begin at (O(R_E^2)). Alice's pressure-induced tilt and radial flux begin at (O(R_E)), as regular radial vectors must, while the density and pressure anisotropies they produce remain quadratic.

The event-horizon vertex is therefore protected by regular spherical geometry. The growing horizon then encounters the density gradients, pressure gradients, and non-homologous motion capable of generating child structure.

Level 3 has passed its structural test. Level 4 subsequently shows that the conclusion survives regular physical energy transport.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. G. F. R. Ellis and H. van Elst, “Cosmological Models,” in *Theoretical and Observational Cosmology*, NATO Science Series C **541**, 1–116 (1999), [arXiv:gr-qc/9812046](https://arxiv.org/abs/gr-qc/9812046).
3. H. van Elst and G. F. R. Ellis, “The Covariant Approach to LRS Perfect Fluid Spacetime Geometries,” *Classical and Quantum Gravity* **13**, 1099–1128 (1996), [arXiv:gr-qc/9510044](https://arxiv.org/abs/gr-qc/9510044).
4. P. N. Khambule, R. Goswami, and S. D. Maharaj, “Matching conditions in locally rotationally symmetric spacetimes and radiating stars,” *Classical and Quantum Gravity* **38**, 075006 (2021), [doi:10.1088/1361-6382/abe2dd](https://doi.org/10.1088/1361-6382/abe2dd), [arXiv:2011.00853](https://arxiv.org/abs/2011.00853).
5. [“Pressure Gradients and the Regular Birth Vertex”](note.html?src=pressure_gradients_and_the_regular_birth_vertex), CSBHI working calculation (2026).
6. [“The Tolman VII Birth-Vertex Amplitude Benchmark”](note.html?src=tolman_vii_birth_vertex_amplitude_benchmark), CSBHI working calculation (2026).
