# A Spherical Weyl-Relaxation Profile for the Reciprocal Throat

*Working calculation note — the exact density/Weyl relation, an explicit smooth profile, and the remaining dynamical equation.*

**Author:** Codex (OpenAI), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Working result, not yet part of the public technical series. The spherical curvature identity and the constructed profile are exact under the stated perfect-fluid assumptions. The profile is kinematic: its pressure, flux, causal character, and compatibility with the reciprocal trajectory remain to be solved.

**Prerequisites:** [GD I](gd1.html); [RI I — Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior); [The Reciprocal Scale Field and the Smooth-Throat Problem](note.html?src=reciprocal_scale_field).

**Notation:** [Glossary](note.html?src=cosmological_glossary). We use (c=1), retain (G), and denote physical areal radius by (mathcal R). The cosmological constant is common to both descriptions and is omitted from the material mass below because its homogeneous contribution cancels from the Weyl tensor.

---

## 1. The exact spherical identity

Let (m(	au,mathcal R)) be the material part of the Misner–Sharp mass inside a sphere of areal radius (mathcal R). On a regular spherical slice without shell crossing,

\[
\frac{\partial m}{\partial\mathcal R}=4\pi\rho\,\mathcal R^2.
\tag{1}
\]

Define the average enclosed density

\[
\bar\rho(\tau,\mathcal R)
\equiv
\frac{3m(\tau,\mathcal R)}{4\pi\mathcal R^3}.
\tag{2}
\]

For an isotropic perfect fluid, the single independent Newman–Penrose Weyl scalar is

\[
\boxed{
\Psi_2
=
-\frac{Gm}{\mathcal R^3}
+\frac{4\pi G}{3}\rho
=
-\frac{4\pi G}{3}\left(\bar\rho-\rho\right).
}
\tag{3}
\]

Equation (3) states the conversion target in one line:

- in vacuum, (ho=0) and (m=M), so (Psi_2=-GM/mathcal R^3), the Schwarzschild/Kottler value;
- in a homogeneous region, (m=4pihomathcal R^3/3), so (arho=ho) and (Psi_2=0), the FLRW value;
- between them, Weyl curvature measures density contrast rather than an additional source.

For anisotropic matter, pressure anisotropy contributes an additional term. Equation (3) therefore supplies the clean perfect-fluid target; any proposed throat with anisotropic stress must carry that correction explicitly.

---

## 2. An explicit finite transition

Choose two radii (mathcal R_1<mathcal R_2) on one spherical slice and define

\[
u\equiv\frac{\mathcal R-\mathcal R_1}{\Delta},
\qquad
\Delta\equiv\mathcal R_2-\mathcal R_1.
\tag{4}
\]

Let

\[
q(u)=1-10u^3+15u^4-6u^5,
\tag{5}
\]

the quintic smooth-step function satisfying

\[
q(0)=1,
\quad q(1)=0,
\quad q'(0)=q'(1)=q''(0)=q''(1)=0.
\tag{6}
\]

A finite homogeneous-to-vacuum profile is

\[
\rho(\mathcal R)=
\begin{cases}
\rho_c, & \mathcal R\leq\mathcal R_1,\\[3pt]
\rho_c q(u), & \mathcal R_1<\mathcal R<\mathcal R_2,\\[3pt]
0, & \mathcal R\geq\mathcal R_2.
\end{cases}
\tag{7}
\]

Integrating Equation (1) gives, inside the transition,

\[
m(\mathcal R)
=4\pi\rho_c
\left[
\frac{\mathcal R_1^3}{3}
+\Delta\int_0^u q(v)\left(\mathcal R_1+\Delta v\right)^2dv
\right].
\tag{8}
\]

Equations (3), (7), and (8) determine the complete Weyl profile without an independent interpolation ansatz.

At the homogeneous endpoint,

\[
m(\mathcal R_1)=\frac{4\pi}{3}\rho_c\mathcal R_1^3,
\qquad
\Psi_2(\mathcal R_1)=0.
\tag{9}
\]

At the vacuum endpoint, writing (M=m(mathcal R_2)),

\[
\rho(\mathcal R_2)=0,
\qquad
\Psi_2(\mathcal R_2)=-\frac{GM}{\mathcal R_2^3}.
\tag{10}
\]

The transition is continuous in both density and Weyl curvature. To see why, let (D\equiv\bar\rho-\rho). Equations (1) and (2) imply

\[
\frac{\partial\bar\rho}{\partial\mathcal R}
=-\frac{3D}{\mathcal R},
\qquad
\frac{\partial D}{\partial\mathcal R}
=-\frac{3D}{\mathcal R}
-\frac{\partial\rho}{\partial\mathcal R}.
\tag{11}
\]

At (mathcal R_1), both (D) and (partial_{mathcal R}ho) vanish, so the Weyl field begins smoothly at zero. At (mathcal R_2), (partial_{mathcal R}ho=0), and Equation (11) becomes the vacuum falloff (D'=-3D/mathcal R). The profile therefore joins the exterior Schwarzschild/Kottler Weyl field with the correct first derivative.

This is an existence proof for a smooth **curvature ledger**: concentrated exterior mass and homogeneous interior density can be connected without a discontinuous Weyl scalar.

---

## 3. What the profile does not yet prove

Specifying (ho(mathcal R)) on one slice does not construct a spacetime. The remaining Einstein and conservation equations must determine the pressure, radial motion, and any energy flux.

For a comoving perfect fluid, the Misner–Sharp work equation is

\[
D_\tau m
=
-4\pi p\,\mathcal R^2D_\tau\mathcal R.
\tag{12}
\]

Equation (12) identifies the next calculation. Dust has (p=0), so material Misner–Sharp mass is conserved and the classical Oppenheimer–Snyder/Einstein–Straus match can be stress-free. Radiation has (p=\rho_r/3), so a dynamical transition must carry pressure work. This is the same radiation residual isolated independently by the FLRW–Kottler junction and throat-thermodynamic notes.

The smooth density profile therefore resolves the **kinematic** Weyl jump but does not yet solve the **dynamical** throat. A completed solution must:

1. evolve Equations (1) and (12) together with the radial Euler equation;
2. impose the reciprocal boundary history (a=1/r);
3. determine whether the transition is timelike, null, or changes causal character;
4. verify continuity of the induced metric and transverse/extrinsic curvature;
5. recover the known Barrabès–Israel surface stress when (Delta\to0) in the appropriate null limit.

---

## 4. Result and next target

The first result is constructive:

> In spherical perfect-fluid geometry, Weyl-to-Ricci conversion is density homogenization. Once the local density profile is specified, the Weyl profile is fixed by the Misner–Sharp mass and can relax continuously from Kottler to FLRW without a compulsory curvature jump.

The next target is correspondingly narrow: solve the time-dependent Misner–Sharp fluid equations for a finite layer containing dust, radiation, and the common vacuum term, with the reciprocal history fixing its interior boundary data. That calculation—not the comparison of endpoint Weyl scalars—decides whether the physical throat is smooth.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. A. Einstein and E. G. Straus, “The Influence of the Expansion of Space on the Gravitation Fields Surrounding the Individual Stars,” *Reviews of Modern Physics* **17**, 120–124 (1945), [doi:10.1103/RevModPhys.17.120](https://doi.org/10.1103/RevModPhys.17.120).
4. L. Herrera, A. Di Prisco, J. Ospino, and E. Fuenmayor, “Conformally flat anisotropic spheres in general relativity,” *Journal of Mathematical Physics* **42**, 2129–2143 (2001), [doi:10.1063/1.1364503](https://doi.org/10.1063/1.1364503).
5. [The Exact Shell Identity and the Kottler Mass Condition for Alice's Interior](note.html?src=horizon_map_shell_identity_and_mass_growth); [Thermodynamic Accounting of the Transverse Junction](note.html?src=thermodynamic_accounting_of_the_transverse_junction), this project.
