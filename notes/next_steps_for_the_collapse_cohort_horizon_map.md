# Next Steps for the Collapse-Cohort Horizon Map

*Research handoff for deriving the remaining clock law without returning to the naive Schwarzschild–FLRW junction.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [GD I](gd1.html); [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet); [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map); [The Remaining Horizon Clock](note.html?src=remaining_horizon_clock_map).

**Status:** Research plan. The causal form and homogeneous shell map are already established conditionally; the clock law and its extension to a completed spacetime remain open. Tiered **[E]** established, **[C]** candidate CSBHI correspondence, **[O]** open.

---

## 1. Present state of the map

Repeating the GD I experiment at different parent epochs separates the proposed horizon map into three parts.

### Causal map

Let \(v_H\) label successive crossings of one generator of the parent black-hole event horizon. In child conformal coordinates, spherical symmetry and nullness give the candidate image

\[
(\eta,R)
=
\bigl(\Phi(v_H),\Phi(v_H)\bigr),
\qquad R=\eta.
\tag{1}
\]

The proposed child image is the particle-horizon history of one FLRW causal patch. It is not the Hubble radius, apparent horizon, cosmological event horizon, or CMB surface.

### Spatial shell map

For homogeneous spherical matter, enclosed mass fraction \(\mu\) labels both parent collapse shells and child comoving shells:

\[
s_*(\mu)=B_*\mu^{1/3},
\qquad
R(\mu)=R_b\mu^{1/3}.
\tag{2}
\]

One conformal factor therefore maps the complete finite shell family. Departures from the common profile measure density contrast and Weyl curvature.

### Evolution map

After cohort \(i\) crosses, GD I supplies

\[
\frac{a(\tau)}{a(\tau_i)}
=
\frac{1}{r_i(\Delta\tau_i)}.
\tag{3}
\]

Equation (3) evolves each cohort away from its crossing. It does not compare different crossings because \(r_i=1\) for every cohort at the horizon.

At the causal-diagram level, the sole unresolved radial parameterization is therefore

\[
\boxed{\Phi(v_H)}.
\tag{4}
\]

---

## 2. What \(\Phi\) means

The derivative \(\Phi'(v_H)\) converts progress along the parent horizon into child conformal time and comoving radius. It is the clock synchronization between collapse-day Alice and every later Alice.

Along the child null history,

\[
d\tau_H
=
a\bigl(\tau_H(v_H)\bigr)\Phi'(v_H)\,dv_H.
\tag{5}
\]

Thus \(\Phi\) answers the operational question:

> When a later Alice crosses the parent horizon, which child epoch and which child comoving shell correspond to that event?

The reciprocal ansatz fixes the evolution after that event. The shell map fixes spatial ordering. \(\Phi\) fixes the remaining synchronization.

---

## 3. Do not repeat the failed calculation

The next calculation must not glue exact vacuum Schwarzschild directly to exact FLRW across a zero-width surface and then interpret the resulting transverse mismatch as a property of CSBHI.

That surrogate omits three defining parts of the proposal:

1. the parent is locally Schwarzschild but globally matter-filled FLRW;
2. the child contains matter, radiation, and reciprocal vacuum geometry;
3. \(a=1/r\) governs evolution away from each crossing.

The sharp vacuum junction remains useful as a limiting calculation, but it cannot decide whether the matter-filled reciprocal construction is regular.

The immediate problem is narrower: map one parent null history to one child null history. Only after that map is explicit should we test its extension into the neighboring timelike and spacelike directions.

---

## 4. Two functions may appear before the map closes

The parent event horizon carries spherical sections with intrinsic angular metric

\[
q_{\rm BH}(v_H)
=
R_{\rm BH}(v_H)^2d\Omega^2.
\tag{6}
\]

The proposed child particle-horizon history carries

\[
q_p(v_H)
=
\left[
a\bigl(\tau_H(v_H)\bigr)\Phi(v_H)
\right]^2d\Omega^2.
\tag{7}
\]

An ordinary isometric identification would set \(q_p=q_{\rm BH}\). CSBHI instead proposes a conformal correspondence, so the general relation is

\[
\boxed{
a\bigl(\tau_H(v_H)\bigr)\Phi(v_H)
=
\Omega_\Sigma(v_H)R_{\rm BH}(v_H)
}.
\tag{8}
\]

Here \(\Omega_\Sigma\) is the conformal scale assigned to the candidate null correspondence. Equation (8) must not be replaced silently by equal physical areas.

The equation audit found that shell homogeneity fixes relative radii within a slice but remains invariant under a common time-dependent rescaling. It therefore does not fix \(\Omega_\Sigma\) by itself. The residual at the metric level is the coupled pair \((\Phi,\Omega_\Sigma)\); the next calculation must seek their normalization in the crossing dynamics, optical map, or completed scale geometry.

---

## 5. Calculation I — kinematic closure

### Step 1: Specify both null histories

Use a spherical dynamical parent geometry with a regular event-horizon generator and a parent time normalized to a physical clock. Use the child FLRW solution already derived in RI I, expressed in conformal time.

The first benchmark may be an analytically soluble collapse model, but it is a benchmark—not a claim that realistic supermassive black holes form from homogeneous dust. The final parent construction must allow a local black-hole region inside a larger FLRW universe.

### Step 2: Fix conventions and endpoint data

Choose

\[
\Phi(v_{\rm form})=0,
\qquad
\Phi'(v_H)>0.
\tag{9}
\]

Normalize \(v_H\) using the parent cosmological clock or Bob's asymptotic proper time. Do not use an arbitrary affine rescaling and later mistake it for a physical prediction.

### Step 3: Pull back the angular geometry

Evaluate Equations (6)–(8). Insert the homogeneous shell relation and the cohort normalization of Equation (3). Determine whether the crossing dynamics fix \(\Omega_\Sigma\), its derivative, or only its value at the formation anchor.

### Step 4: Derive the generator clock

Use the parent horizon evolution—area change, accretion flux, null expansion, and its normalization—to calculate \(d\eta/dv_H=\Phi'(v_H)\). The null Raychaudhuri equation may provide evolution, but it cannot supply an affine normalization by itself.

### Step 5: Cross-check with optics

The equation audit gives the exact relation \(\Phi'=J_H/(2V')\) on the proposed child null history, where \(J_H=dv_B/dv_H\) converts the physical parent clock into the advanced null coordinate used by the optical calculation. The horizon and optical clocks must obey it at every cross-section.

### Deliverable

Produce one explicit coupled system for \(\Phi\) and \(\Omega_\Sigma\), with every input classified as:

- parent collapse data;
- reciprocal ansatz;
- child Einstein–FLRW dynamics;
- boundary normalization;
- observational calibration.

This accounting will make circularity visible immediately.

---

## 6. Calculation II — dynamical extension

After the null map is fixed, extend it away from the horizon through the cohort family.

### Step 1: Map neighboring timelike worldlines

Verify that each Alice crosses without an impulse and then obeys Equation (3). A regular horizon cannot give the probe cloud an abrupt velocity kick.

### Step 2: Map neighboring spatial shells

Use \(\mu\) to preserve shell order. Check that the mapped congruence becomes globally comoving rather than merely sharing a local scale factor. Rule out shell crossings and incompatible peculiar velocities.

### Step 3: Restore realistic density structure

Track

\[
D=\bar\rho-\rho,
\qquad
\Psi_2=-\frac{4\pi G}{3}D.
\tag{10}
\]

The completed geometry must relax the parent density contrast into the homogeneous child background while conserving the appropriate quasi-local mass and flux. This is the Weyl-to-Ricci content of the shell map.

### Step 4: Test dimensional sufficiency

Calculate the effective stress required by the four-dimensional completion. If ordinary matter plus reciprocal scale supplies it, no additional dimension is required for the background map. If a residual transverse term remains, it becomes the explicit source required from the scale field, projected bulk geometry, or another completion.

The fifth dimension should answer a demonstrated residual, not serve as a decorative starting assumption.

---

## 7. Formation and late-time regimes must be separated

During black-hole formation and accretion, enclosed mass and horizon area evolve. A mass-fraction or area law may calibrate this portion of \(\Phi\).

After the parent horizon becomes approximately stationary, mass growth can no longer parameterize an indefinitely advancing child clock. The late-time map must instead use the normalized horizon generator, parent cosmological time, or optical transfer.

This rules out any proposed global law that makes \(\Phi\) advance only when the black hole gains mass.

---

## 8. Late-time asymptotic clue

The mapped child surface is the particle-horizon history, whose areal radius \(a\eta\) diverges in a de Sitter future. It must not be confused with the cosmological event-horizon radius \(B=a(\eta_\infty-\eta)\), which tends to \(R_\Lambda\).

The finite remaining conformal interval nevertheless decays exponentially:

\[
\eta_\infty-\eta(\tau)
\propto
e^{-H_\Lambda \tau}.
\tag{11}
\]

A stationary parent horizon relates its affine parameter to a stationary Killing normalization through the surface gravity \(\kappa_{\rm BH}\). If the cohort parameter \(v_H\) were shown to carry that normalization, this would motivate the test

\[
\eta_\infty-\Phi(v_H)
\propto
e^{-\kappa_{\rm BH}v_H},
\tag{12}
\]

and therefore

\[
H_\Lambda\frac{d\tau_H}{dv_H}
\longrightarrow
\kappa_{\rm BH}.
\tag{13}
\]

Equation (13) is a conditional clue, not an endpoint requirement or an area identification. The benchmark fixes \(v_H=t_P\), the parent dust proper time, which is neither an affine horizon parameter nor automatically the stationary Killing time. The shell clock instead gives \(H_{\Lambda,C}=-\lim d\ln(1-\mu_H)/dt_P\). The completed geometry may relate that exponent to \(\kappa_{\rm BH}\), but the two must not be identified before their clock conversion is derived. See [Asymptotic Consistency of the Collapse-Cohort Map](note.html?src=asymptotic_consistency_of_the_collapse_cohort_map).

---

## 9. Success and failure criteria

The direct collapse map succeeds if one matter-filled parent collapse produces:

1. a monotone \(\Phi(v_H)\) with a physical normalization;
2. a horizon scale \(\Omega_\Sigma(v_H)\) fixed by existing reciprocal geometry or by one explicit new field equation;
3. agreement between horizon, shell, and optical clocks;
4. GD I reciprocal evolution for every cohort;
5. preserved shell ordering and a homogeneous child background;
6. no horizon impulse, point singularity, or uncontrolled curvature;
7. the child age and particle-horizon history from the same map, without fitting them independently.

A candidate fails if it:

- identifies the event horizon with the Hubble radius;
- assumes equal horizon areas without deriving the conformal factor;
- uses mass growth as the only clock after accretion ends;
- derives \(\Phi\) by inserting the observed child age or particle horizon;
- neglects matter on either side and then interprets the resulting vacuum mismatch as physical;
- recovers only scalar FLRW expansion while leaving order-one shear;
- depends on a coordinate normalization with no operational clock.

Failure of one clock law does not reject the reciprocal ansatz, the causal wedge, or the shell identity. It identifies which proposed synchronization is wrong.

---

## 10. Fresh-context execution order

Resume the calculation in this order:

1. **Audit prior work — completed.** See [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit). It separates the two child null branches, derives \(\Phi'=J_H/(2V')\), and shows that shell homogeneity alone does not fix \(\Omega_\Sigma\).
2. **Select the benchmark — completed.** Use a broad compensated \(\Lambda\)LTB overdensity inside a flat dust–\(\Lambda\) FLRW parent, with \(v_H=t_P\). See [Selecting the Parent Collapse Benchmark](note.html?src=collapse_benchmark_selection).
3. **Write and close the two null embeddings — completed.** See [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system). The two embeddings reduce the apparent freedom to one cohort lapse; the same-clock identification gives \(\Phi(t_P)=\eta_C(t_P-t_{\rm form})\), optics supplies the same normalization, and \(\Omega_\Sigma=a\Phi/R_{\rm BH}\).
4. **Test the shell-clock constraint — completed for the selected benchmark; unit lapse rejected.** See [The Full-History Test](note.html?src=full_history_test_of_the_collapse_cohort_shell_clock). A horizon-adapted generator preserves the event/trapping distinction across the multiscale collapse. The formation and de Sitter endpoint powers agree, but the reconstructed intermediate equation of state violates the nonnegative dust–radiation–vacuum bound. This rejects the unit-lapse shell clock for this compensated profile, not the reciprocal ansatz.
5. **Compute the optical transfer — exact reduction completed; normalization requires revision.** See [Optical Transfer Through a Matter-Filled Parent Collapse](note.html?src=optical_transfer_through_compensated_ltb_collapse). The integrating factor obeys \(d\ln\beta/dt_P=-\dot Y'/Y'\) along ingoing rays, giving \(J_H=2\beta_H\). The earlier frequency-continuity argument selected \(N_H=1\); the full-history failure shows that this identification, its optical normalization, or the direct shell correspondence cannot all remain unchanged.
6. **Check the asymptotes — completed analytically; late coefficient fixed conditionally.** See [Asymptotic Consistency of the Collapse-Cohort Map](note.html?src=asymptotic_consistency_of_the_collapse_cohort_map). Formation is regular with \(\mu_H\propto\Delta t^3\), \(\Omega_\Sigma\to1\), and finite optical transfer. A general late tail \(1-\mu_H\propto e^{-\lambda t_P}\) reconstructs \(a_C\propto e^{\lambda\tau}\), so \(H_{\Lambda,C}=\lambda\). The stationary bounded-gap condition and verified shell dwell give \(\lambda=\sqrt3H_{\Lambda,P}\). A finite parent horizon remains compatible because \(\Omega_\Sigma\) carries the local-to-global growth. Surface gravity uses a different parent clock unless a conversion is derived.
7. **Solve for the missing cohort lapse.** Preserve the event-horizon history and homogeneous shell ordering, then determine whether the null geometry fixes an evolving \(N_H=d\tau/dt_P\) that restores a nonnegative child Friedmann history.
8. **Extend to the cohort neighborhood.** Only then calculate Weyl relaxation, effective stress, and dimensional sufficiency.

The first concrete question for the next step is now:

\[
\boxed{
\text{Does the null boundary determine a nontrivial }N_H(t_P)
\text{ that restores a nonnegative child Friedmann history?}
}
\tag{14}
\]

The selected \(\Lambda\)LTB geometry now supplies the parent clock, horizon generator, and swept mass history. The remaining task is no longer to guess the event horizon; it is to identify the clock conversion demanded by the geometry.

---

## Working sources

1. [GD I](gd1.html).
2. [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior).
3. [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet).
4. [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map).
5. [The Remaining Horizon Clock](note.html?src=remaining_horizon_clock_map).
6. [Null Optics of the Reciprocal Interior](note.html?src=null_optics_of_the_reciprocal_interior).
7. [A Spherical Weyl-Relaxation Profile](note.html?src=spherical_weyl_relaxation_profile).
8. [The Reciprocal Scale Field](note.html?src=reciprocal_scale_field).
9. [Geometric Duality II: Collapse Cohorts and the Horizon Map](note.html?src=gd2_collapse_cohort_horizon_map_outline).
