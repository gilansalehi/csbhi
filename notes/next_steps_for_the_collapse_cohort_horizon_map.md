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
R_P(\mu)=B_*\mu^{1/3},
\qquad
R_C(\mu)=R_b\mu^{1/3}.
\tag{2}
\]

One conformal factor therefore maps the complete finite shell family. Departures from the common profile measure density contrast and Weyl curvature.

### Evolution map

After cohort \(i\) crosses, GD I supplies

\[
\frac{a(T)}{a(T_i)}
=
\frac{1}{r_i(\tau)}.
\tag{3}
\]

Equation (3) evolves each cohort away from its crossing. It does not compare different crossings because \(r_i=1\) for every cohort at the horizon.

The sole unresolved radial function is therefore

\[
\boxed{\Phi(v_H)}.
\tag{4}
\]

---

## 2. What \(\Phi\) means

The derivative \(\Phi'(v_H)\) converts progress along the parent horizon into child conformal time and comoving radius. It is the clock synchronization between collapse-day Alice and every later Alice.

Along the child null history,

\[
dT_H
=
a\bigl(\Phi(v_H)\bigr)\Phi'(v_H)\,dv_H.
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
q_P(v_H)
=
R_{\rm BH}(v_H)^2d\Omega^2.
\tag{6}
\]

The proposed child particle-horizon history carries

\[
q_C(v_H)
=
\left[
a\bigl(\Phi(v_H)\bigr)\Phi(v_H)
\right]^2d\Omega^2.
\tag{7}
\]

An ordinary isometric identification would set \(q_C=q_P\). CSBHI instead proposes a conformal correspondence, so the general relation is

\[
\boxed{
a\bigl(\Phi(v_H)\bigr)\Phi(v_H)
=
\Omega_H(v_H)R_{\rm BH}(v_H)
}.
\tag{8}
\]

Here \(\Omega_H\) is the conformal scale assigned to the horizon sections. Equation (8) must not be replaced silently by equal physical areas.

The first decisive test is whether the reciprocal shell construction fixes \(\Omega_H\). If it does, Equation (8) becomes an equation for \(\Phi\). If it does not, then the residual is a coupled pair \((\Phi,\Omega_H)\), and the scale-field or higher-dimensional geometry has a precisely defined job.

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

Evaluate Equations (6)–(8). Insert the homogeneous shell relation and the cohort normalization of Equation (3). Determine whether those data fix \(\Omega_H\), its derivative, or only its value at the formation anchor.

### Step 4: Derive the generator clock

Use the parent horizon evolution—area change, accretion flux, null expansion, and its normalization—to calculate \(d\eta/dv_H=\Phi'(v_H)\). The null Raychaudhuri equation may provide evolution, but it cannot supply an affine normalization by itself.

### Step 5: Cross-check with optics

The earlier event-map calculation retains a derivative of the form \(dV/dv_A\). Show explicitly that it is the inverse or equivalent representation of \(\Phi'(v_H)\). The clock derived from horizon geometry and the clock inferred from photon-frequency transfer must agree.

### Deliverable

Produce one explicit coupled system for \(\Phi\) and \(\Omega_H\), with every input classified as:

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

In a child de Sitter limit, the remaining conformal time decays exponentially:

\[
\eta_\infty-\eta(T)
\propto
e^{-H_\Lambda T}.
\tag{11}
\]

A stationary parent horizon written in a physically normalized external time commonly approaches its null asymptote with an exponential governed by surface gravity \(\kappa_{\rm BH}\). This motivates the test

\[
\eta_\infty-\Phi(v_H)
\propto
e^{-\kappa_{\rm BH}v_H},
\tag{12}
\]

and therefore

\[
H_\Lambda\frac{dT_H}{dv_H}
\longrightarrow
\kappa_{\rm BH}.
\tag{13}
\]

Equation (13) is a clue, not yet a derivation. Under the idealized radius identity \(R_S=R_\Lambda\), Schwarzschild and de Sitter surface gravities differ by a factor of two. The same factor appears in their horizon-temperature comparison. The completed clock calculation should determine whether this factor is physical, conventional, or removed by the conformal normalization.

---

## 9. Success and failure criteria

The direct collapse map succeeds if one matter-filled parent collapse produces:

1. a monotone \(\Phi(v_H)\) with a physical normalization;
2. a horizon scale \(\Omega_H(v_H)\) fixed by existing reciprocal geometry or by one explicit new field equation;
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

1. **Audit prior work.** Extract every existing equation involving \(\Phi\), \(dV/dv_A\), horizon area, shell mass, and reciprocal scale. Deduplicate notation before calculating.
2. **Select the benchmark.** Choose the simplest dynamical spherical collapse with a physically normalized parent time and state exactly which features are idealizations.
3. **Write the two null embeddings.** Parameterize the parent event horizon and child particle-horizon history without joining their surrounding metrics.
4. **Derive Equation (8).** Pull back their angular metrics and use the shell map to test whether \(\Omega_H\) is already fixed.
5. **Derive \(\Phi'\).** Use normalized horizon evolution and verify the result independently through optical frequency transfer.
6. **Check the asymptotes.** Test formation, stationary-horizon, and child de Sitter limits separately.
7. **Extend to the cohort neighborhood.** Only then calculate shell ordering, Weyl relaxation, effective stress, and dimensional sufficiency.
8. **Write the result as a calculation note.** Separate exact results, CSBHI identifications, and unresolved inputs. Do not promote a calibrated correspondence into a derivation.

The first concrete question for the next session is:

\[
\boxed{
\text{Does the reciprocal shell map determine }\Omega_H(v_H)
\text{ in Equation (8)?}
}
\tag{14}
\]

If yes, the horizon map has one unknown and \(\Phi\) can be attacked directly. If no, the calculation will have isolated the exact conformal degree of freedom that the scale-field programme must supply.

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
