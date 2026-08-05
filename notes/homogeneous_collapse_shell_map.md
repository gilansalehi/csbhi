# From Collapse Shells to a Child FLRW Patch

*Working note on the spatial half of the direct collapse map.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [GD I](gd1.html); [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet); [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

**Status:** Conditional result. The shell map is exact once homogeneous spherical parent and child profiles are identified. Singularity replacement by the reciprocal interior remains the CSBHI proposal. Tiered **[E]** established/derived, **[C]** candidate correspondence, **[O]** open.

---

## Abstract

The collapse-day comparison suggests mapping every spherical shell of the collapsing parent region to one comoving shell of a child FLRW causal patch. Label shells by enclosed mass fraction \(\mu\). In homogeneous spherical matter, both parent and child shell radii carry the same \(\mu^{1/3}\) dependence. Their ratio is independent of shell label, so one conformal factor maps the complete finite shell family.

This identifies the role of homogeneity. In the ideal limit, the spatial map is fixed up to normalization. In realistic collapse, deviations from the common \(\mu^{1/3}\) profile are density contrasts and therefore Weyl curvature. The spatial throat problem becomes the relaxation of those deviations while preserving shell order and quasi-local mass.

---

## 1. Replace the endpoint, not the coordinates

Exact vacuum Schwarzschild has a genuine curvature singularity at \(r=0\); coordinates cannot remove it. CSBHI instead proposes that vacuum Schwarzschild is Bob's local exterior approximation while the matter-filled future interior follows the reciprocal FLRW geometry. Extrapolating the vacuum solution to \(r=0\) then projects an extended interior future onto an endpoint absent from the completed metric. **[C]**

The reciprocal interior gives

\[
r\to0
\quad\Longleftrightarrow\quad
a=\frac1r\to\infty,
\tag{1}
\]

with infinite Alice proper time and finite de Sitter limiting curvature. The singularity is therefore not a coordinate artifact of exact Schwarzschild. It is an artifact of using that vacuum model for the proposed replacement geometry.

---

## 2. The formation surface

Let \(\Sigma_*\) denote a parent collapse hypersurface on which the shell map is posed. A completed model might select it through a trapped-surface condition, an apparent-horizon condition, or critical compactness. It should not be tied universally to neutron degeneracy pressure: massive black holes can form through stellar remnants, direct gas collapse, accretion, and mergers.

The black-hole event horizon is global and can begin before a curvature singularity forms. A local transition cannot therefore be triggered merely by crossing it. The completed solution must determine \(\Sigma_*\) from collapse data while preserving an uneventful horizon crossing. **[E/O]**

---

## 3. The invariant shell label

Define the enclosed mass fraction

\[
\mu
\equiv
\frac{m(\Sigma_*,R)}{M},
\qquad
0\le\mu\le1.
\tag{2}
\]

For homogeneous parent density \(\rho_*\),

\[
m(\Sigma_*,R)
=
\frac{4\pi}{3}\rho_*R^3.
\tag{3}
\]

If \(B_*\) is the areal radius of the outer shell, then

\[
\boxed{
s_*(\mu)=B_*\mu^{1/3}
}.
\tag{4}
\]

The mass fraction survives reparameterizations of the parent radial coordinate.

---

## 4. Child comoving shells

Let \(R_b\) be the comoving radius of the selected child causal patch. Identifying the same mass-fraction ordering in a homogeneous child gives

\[
\boxed{
R(\mu)=R_b\mu^{1/3}
}.
\tag{5}
\]

At child cosmic time \(\tau\), the areal radius is

\[
\bar R(\tau,\mu)
=
a(\tau)R_b\mu^{1/3}.
\tag{6}
\]

Equations (4) and (6) give

\[
\boxed{
\frac{\bar R(\tau,\mu)}{s_*(\mu)}
=
\frac{a(\tau)R_b}{B_*}
}.
\tag{7}
\]

The right-hand side contains no \(\mu\). One conformal factor maps every spherical shell simultaneously. **[E, conditional on the shell identification]**

Equation (7) makes precise the statement that every surface in the present causal patch has a corresponding surface in the parent collapse region. Extending it to a complete spatially infinite universe requires global data not supplied here.

---

## 5. Add reciprocal evolution

For cohort \(i\) entering at child epoch \(\tau_i\), with elapsed proper time \(\Delta\tau_i=\tau-\tau_i\), GD I gives

\[
\frac{a(\tau)}{a(\tau_i)}
=
\frac{1}{r_i(\Delta\tau_i)}.
\tag{8}
\]

Therefore

\[
\bar R(\tau,\mu)
=
\frac{a(\tau_i)R_b}{r_i(\Delta\tau_i)}
\mu^{1/3}.
\tag{9}
\]

The operations are distinct:

- \(\mu\mapsto R(\mu)\) is the collapse-to-child **spatial map**;
- \(r_i(\Delta\tau_i)\mapsto1/r_i(\Delta\tau_i)\) is the **evolution map**.

The shell label preserves spatial identity while the reciprocal factor expands the common geometry.

---

## 6. Realistic collapse and Weyl relaxation

For an inhomogeneous parent, write

\[
s_*(\mu)=B_*f_P(\mu),
\qquad
R(\mu)=R_bf_C(\mu).
\tag{10}
\]

A shell-independent conformal factor requires

\[
f_P(\mu)=f_C(\mu).
\tag{11}
\]

Their difference is density inhomogeneity. In spherical symmetry,

\[
\Psi_2
=
-\frac{4\pi G}{3}
\left(\bar\rho-\rho\right).
\tag{12}
\]

The Weyl-to-Ricci problem and the shell-map problem are therefore the same calculation viewed differently. A completed throat must drive \(f_P\to f_C\), or \(\bar\rho-\rho\to0\), while conserving the appropriate mass and flux data. Existing Weyl-relaxation work supplies candidate smooth profiles and the effective transverse-stress target; the shell construction gives those results an operational interpretation. **[E/C]**

---

## 7. The Big-Bang limit

An ideal Big Bang is a conformal boundary, not a regular hypersurface occupied by an astronaut. Define the map on regular surfaces \(\Sigma_*(\epsilon)\) and \(T=\epsilon\), then take \(\epsilon\to0^+\).

The comoving labels \(R(\mu)\) remain meaningful while all physical radii \(a(\tau)R(\mu)\) shrink. Collapse-day Alice is therefore a limiting construction. The argument does not require a physical observer to depart from a point singularity.

---

## 8. Result and residuals

Within homogeneous spherical symmetry:

1. enclosed mass fraction supplies an invariant shell label;
2. parent and child share the \(\mu^{1/3}\) profile;
3. one conformal factor maps the complete finite shell family;
4. \(a=1/r\) evolves that family isotropically;
5. the proposed completion does not require a point singularity.

The remaining tasks are to derive \(\Sigma_*\), calculate realistic Weyl relaxation, and synchronize the shell family with the child clock.

---

## References

1. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
2. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
3. L. Mayer and S. Bonoli, “The Route to Massive Black Hole Formation via Merger-Driven Direct Collapse,” *Reports on Progress in Physics* **82**, 016901 (2019), [arXiv:1803.06391](https://arxiv.org/abs/1803.06391).
4. Codex (OpenAI), [“A Spherical Weyl-Relaxation Profile”](note.html?src=spherical_weyl_relaxation_profile), this project.
5. Codex (OpenAI), [“Field Equations of the Reciprocal Interior”](note.html?src=field_equations_of_the_reciprocal_interior), this project.
