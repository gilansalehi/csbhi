# The Remaining Horizon Clock

*Working note isolating the final radial freedom in the direct collapse map.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [GD I](gd1.html); [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet); [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map).

**Status:** Problem reduction. The form and boundary conditions of the missing function are derived; the function is not. Tiered **[E]** established, **[C]** candidate correspondence, **[O]** open.

---

## Abstract

Let \(v_H\) parameterize a generator of the parent black-hole event horizon and \((\eta,R)\) be child conformal coordinates. Nullness and spherical symmetry give

\[
R=\eta=\Phi(v_H).
\tag{1}
\]

The reciprocal ansatz determines how each Alice evolves away from her crossing, and homogeneous collapse fixes the shell correspondence. Neither fixes \(\Phi\), because \(r=1\) at every crossing and the horizon's intrinsic metric is degenerate along its generator. The remaining radial task is a clock problem: derive the normalization converting parent horizon progress into child conformal time.

---

## 1. Known parts

For cohort \(i\), GD I gives

\[
\frac{a(\tau)}{a(\tau_i)}
=
\frac1{r_i(\Delta\tau_i)}.
\tag{2}
\]

The homogeneous shell map gives

\[
R_i=R_b\mu_i^{1/3}.
\tag{3}
\]

The null cohort boundary gives

\[
R_i=\eta_i=\Phi(v_i).
\tag{4}
\]

Once \(\Phi\) is known, these relations organize the radial map as

\[
(v_i,\mu_i,\Delta\tau_i)
\longmapsto
\left(
\tau_i(v_i)+\Delta\tau_i,
R(\mu_i,v_i)
\right).
\tag{5}
\]

In the ideal cohort construction, the crossing shell satisfies \(R_i=\Phi(v_i)\), after which the Alice is comoving at fixed \(R_i\).

---

## 2. Why the reciprocal cannot fix it

At every parent horizon crossing,

\[
r(v_H)=1,
\qquad
\frac1{r(v_H)}=1.
\tag{6}
\]

The reciprocal relation therefore supplies no measure of progress between crossing cohorts. It determines evolution transverse to the null crossing history—along Alice's timelike branch—not evolution along the horizon generator.

Intrinsically, a spherical null horizon measures angular area but has no ordinary proper length along its degenerate direction. It cannot normalize \(dv_H\) against \(d\eta\). **[E]**

The missing datum is

\[
\boxed{\Phi'(v_H)}.
\tag{7}
\]

This is the null-soldering or cohort-clock law.

---

## 3. Boundary conditions

The direct map requires

\[
\Phi(v_{\mathrm{form}})=0,
\qquad
\Phi'(v_H)>0.
\tag{8}
\]

If a selected present crossing is assigned to the present particle-horizon shell,

\[
\Phi(v_0)=\eta_0,
\qquad
a_0\eta_0=R_p.
\tag{9}
\]

Equation (9) is an observational calibration, not a derivation.

Along the null history,

\[
d\tau_H
=
a(\eta)d\eta
=
a\bigl(\tau_H(v_H)\bigr)
\Phi'(v_H)dv_H.
\tag{10}
\]

Therefore

\[
\boxed{
\frac{d\tau_H}{dv_H}
=
a\bigl(\tau_H(v_H)\bigr)\Phi'(v_H)
}.
\tag{11}
\]

Equation (11) states precisely whether parent elapsed time equals child elapsed time or differs by a conformal lapse.

---

## 4. Possible determining data

A derivation of \(\Phi\) may use:

1. **Parent collapse geometry.** A dynamical solution fixes an advanced coordinate once normalized to Bob's proper time or the parent FLRW clock.
2. **Horizon flux and area.** Raychaudhuri evolution supplies physical data, although stationary area alone does not fix affine normalization.
3. **Optical transfer.** Frequency continuity constrains a local derivative of the exterior-to-interior event map.
4. **Scale or higher-dimensional geometry.** A regular compensator or bulk could supply the conformal lapse.
5. **Recursive parent FLRW time.** Bob's local Schwarzschild region belongs to a parent cosmology whose comoving clock may provide the missing normalization.

No clock should be selected merely because it reproduces \(R_p\) or the observed age. The geometry must identify it.

---

## 5. The optical form of the same freedom

The null-optics calculation writes the radial event map as

\[
v_B=V(v_A).
\tag{12}
\]

The frequency transfer retains

\[
\frac{dV}{dv_A}.
\tag{13}
\]

The reciprocal factor \(1/a=r\) is fixed, while Equation (13) remains free. Equations (7) and (13) are inverse descriptions of the same normalization. The cohort construction gives that optical freedom a causal interpretation.

---

## 6. Deduping the two architectures

### Direct reciprocal child

\[
\text{collapse formation}
\longrightarrow
\text{reciprocal FLRW causal patch}
\longrightarrow
\text{de Sitter future}.
\tag{14}
\]

Alice's GD I interior is the child cosmology. The parent event horizon maps to the child particle-horizon history, and \(\Phi\) synchronizes cohorts. The completed metric contains no point singularity. This is the architecture developed by this note series. **[C]**

### Later conformal child

\[
\text{parent horizon}
\longrightarrow
\text{reciprocal patch}
\longrightarrow
\text{future conformal boundary}
\longrightarrow
\text{another child Big Bang}.
\tag{15}
\]

Here the GD I interior is an intermediate cosmology and a CCC-like continuation creates a later child. It remains logically possible, but it adds a second birth map and is no longer the most direct reading of the collapse-day experiment.

The architectures should not be blended. GD II can test Equation (14) first. Equation (15) remains a fallback if no regular clock and shell completion exist.

---

## 7. Closure test

The radial map closes when one parent collapse solution yields \(\Phi\) such that:

1. \(\Phi(v_{\mathrm{form}})=0\) and \(\Phi'>0\);
2. Equation (11) gives a regular future-directed child clock;
3. Equation (2) reproduces GD I for every cohort;
4. the shell ordering remains homogeneous;
5. null frequencies and angles satisfy the optical transfer;
6. the child age and particle horizon follow from the same normalization;
7. no point singularity, shell crossing, or horizon impulse appears.

Failure of one candidate \(\Phi\) rejects that clock law, not the causal wedge or shell identity.

The narrowed open problem is

\[
\boxed{
\text{derive }\Phi(v_H)
\text{ from parent collapse and reciprocal geometry.}
}
\tag{16}
\]

---

## References

1. C. Barrabès and W. Israel, “Thin Shells in General Relativity and Cosmology: The Lightlike Limit,” *Physical Review D* **43**, 1129–1142 (1991), [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
2. E. Poisson, “A Reformulation of the Barrabès–Israel Null-Shell Formalism,” [arXiv:gr-qc/0207101](https://arxiv.org/abs/gr-qc/0207101).
3. Codex (OpenAI), [“Null Optics of the Reciprocal Interior”](note.html?src=null_optics_of_the_reciprocal_interior), this project.
4. Codex (OpenAI), [“Null-Horizon Matching of the Reciprocal Interior”](note.html?src=null_horizon_matching_of_the_reciprocal_interior), this project; a diagnostic zero-width surrogate.
5. G. Salehi, [GD I](gd1.html), this project.
