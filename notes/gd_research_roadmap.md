# Geometric Duality Research Roadmap

*The current publication path and the standard of evidence for the CSBHI programme.*

**Updated:** 2026-09-08.

## The programme

Geometric Duality develops one claim at a time:

\[
\text{reciprocal interior}
\longrightarrow
\text{collapse-to-child map}
\longrightarrow
\text{perturbations and galaxy dynamics}
\longrightarrow
\text{observational tests}.
\]

GD I is the source of truth for the programme's physical picture and notation. Supporting calculations may test approximations, limits, and rejected alternatives; they do not replace that construction.

---

## Canonical notation

The series reserves (r) for the horizon-normalized radial coordinate Bob assigns to Alice. It decreases from (r=1) toward (r=0).

Alice uses

\[
a(\tau)=\frac1{r(\tau)},
\qquad
R=\text{comoving radial label},
\qquad
\bar R=a(\tau)R=\text{areal radius}.
\]

The intrinsic FLRW identity (\bar R=aR) and the reciprocal ansatz (a=1/r) relate different quantities. They must not be collapsed into one equation. The project glossary defines the horizon and distance terms used throughout the series.

The reciprocal normalization \(a=1\) at the reference crossing is not the conventional choice \(a_0=1\) today. Present-normalized cosmological formulas use the ratio

\[
A\equiv\frac{a}{a_0},
\]

Only scale-factor ratios enter the standard Friedmann history.

---

## GD I: the reciprocal interior

[*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html) introduces (a=1/r) through the Alice–Bob thought experiment and follows its consequences inside Alice's proposed spatially flat geometry.

Its principal results are:

- (H_A=\dot a/a=F(r)/r);
- isotropic expansion of Alice's probe congruence;
- matter and radiation dilution with their standard powers;
- the matter–radiation–(\Lambda) Friedmann background;
- infinite Alice proper time and finite curvature as Bob's (r\to0); and
- an exact de Sitter endpoint.

[*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior) derives the Friedmann constraint, acceleration equation, and conservation laws from Alice's metric before translating them into Bob's radial variable.

[*The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution*](reciprocal-involution.html) fixes the reciprocal exponent within its stated class. The physical identification remains the programme's founding ansatz.

---

## GD II: collapse cohorts and the horizon map

[*Geometric Duality II: Collapse Cohorts and the Horizon Map*](note.html?src=gd2_collapse_cohort_horizon_map_outline) repeats the GD I experiment throughout the formation history of the parent black hole.

The current construction separates:

1. the causal history of successive horizon crossings;
2. a conserved Lagrangian label for the collapsing cohorts; and
3. the reciprocal evolution of every cohort after crossing.

[*Result IV — The Conformal Formation Map*](note.html?src=result_iv_conformal_formation_map) now supplies an exact analytic benchmark for the first two parts. In Oppenheimer–Snyder collapse, the standard conformal map from the closed-FLRW interior to a Minkowski patch sends the growing black-hole event horizon to an outgoing null cone,

\[
T_M=R_M=\frac12\tan q.
\]

Under the proposed GD identification and the canonical tangent-coordinate completion, this gives the normalized outgoing child birth-cone map

\[
\frac{\Phi(q)}{\Phi(q_0)}
=
\frac{\tan q}{\tan q_0}.
\]

Its weak-curvature limit agrees with the homogeneous mass-shell map. The result supplies a canonical relative causal map in the OS benchmark, but a residual vertex-preserving conformal family remains. The physical member, absolute normalization, and extension from the null generator to neighboring timelike cohorts are not yet fixed.

The map is conformal rather than isometric. Parent and child areal radii and Misner–Sharp masses are not equated, and the conformal-gradient terms prevent generic transfer of marginality from one frame to the other.

[*Pressure Robustness of the Conformal Formation Map*](note.html?src=pressure_robustness_of_the_conformal_formation_map) replaces OS dust with a homogeneous perfect fluid. The reciprocal cohort law, canonical null birth cone, and local Weyl relation all survive. The rate statement takes the lapse-aware form

\[
H_C=-\frac{\theta_P}{3N_C}.
\]

Pressure changes the collapse history and the energy ledger. The OS growth factor \(9/4\) becomes \(S_H(0)/S_H(q_0)\), while Misner–Sharp mass ceases to be a conserved shell label because compression work changes the enclosed gravitational energy. An exactly homogeneous fluid with nonzero pressure cannot also furnish a smooth finite-star boundary to vacuum, so the calculation passes the background pressure test and identifies radial pressure gradients as the next physical benchmark.

[*Perturbing the Conformal Formation Map*](note.html?src=perturbing_the_conformal_formation_map) extends this benchmark to first-order LTB dust. It derives the displacement of the selected outgoing generator and the independent optical delay accumulated by the incoming beam. Generic LTB Weyl curvature prevents a conformal map to exact FLRW, so the child target must be perturbed FLRW. The calculation exposes the next GD datum cleanly: GD1 fixes each cohort's relative evolution but not the absolute formation calibration \(K(q)\). Constant calibration is the minimal closure hypothesis, not yet a derived result.

### GD2 benchmark scoreboard

| Level | Model | What the model tests | Status |
|---|---|---|---|
| 0 | OS dust | Existence of the homogeneous formation map | **Passed** |
| 1 | Homogeneous perfect fluid | Whether pressure breaks the reciprocal, null, or conformal background structure | **Passed structurally** |
| 2 | First-order LTB dust | Density gradients, velocity modes, Weyl inheritance, and the perturbed horizon sweep | **Partially passed; calibration open** |
| 3 | General spherical perfect fluid | Pressure gradients, accelerated matter, a free-fall Alice congruence, and a physical stellar boundary | **Next** |
| 4 | Dissipative spherical collapse | Heat, neutrino, and radiative flux | **Planned** |
| 5 | Rotating collapse | Angular momentum and child anisotropy | **Planned** |

This is not a direct junction between independently selected vacuum Schwarzschild and FLRW metrics. The parent is locally black-hole-like and globally matter-filled; the child geometry must preserve GD I's reciprocal interior.

The collapse-to-child boundary equations reduce the remaining synchronization to one lapse. A compensated (\Lambda\)LTB benchmark establishes three useful facts:

- regular formation supplies the correct cubic shell scaling;
- the stationary de Sitter endpoint supplies the correct exponential form; and
- the simplest unit-lapse synchronization fails across the intermediate collapse.

That negative result and the OS conformal map sharpen GD II from opposite sides. The first-order LTB calculation now supplies the interior radial-null perturbation, but not the covariant absolute calibration or the complete child metric. The next calculation must determine \(K(q)\) from a birth or junction law, complete the exterior optical normalization, and evaluate the transformed Einstein tensor. The parent trapping horizon, child apparent horizon, and child future cosmological event horizon must remain separate unless a later calculation independently relates them. A fifth or scale dimension enters only if a residual remains after the four-dimensional matter-filled construction is explicit.

GD II succeeds when one collapse geometry produces the causal map, shell correspondence, reciprocal evolution, physical clock normalization, and a regular global causal diagram.

---

## GD III and Prediction I: galaxy dynamics

[*The Self-Dual Homogeneous Derivation of the Square-Root Law*](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law) shows that the stated symmetry and scaling assumptions select

\[
g_{\rm mix}=\kappa\sqrt{g_N A}.
\]

[*Geometric Duality III*](note.html?src=gd3_throat_curvature_and_galaxy_law_outline) must derive the covariant response law, determine (A), and recover lensing and relativistic dynamics.

The live empirical correspondence identifies (A) with the contemporaneous horizon acceleration. It predicts

\[
\frac{g_\dagger(z)}{g_\dagger(0)}
=
\frac{H(z)}{H_0}.
\]

[*The Evolving Galactic Acceleration-Scale Correspondence*](note.html?src=evolving_g_dagger_derivation) records that wager, while [the high-redshift test](note.html?src=evolving_acceleration_scale_high_z_test) states the observational discriminator. The correspondence is testable now; its dynamical derivation remains GD III's work.

The H-linked law has prior MOND precedent, including Milgrom's explicit study of \(a_0(t)\propto cH(t)\). GD III's target is therefore not priority for the formula, but a geometric derivation of the weak-field response, selection of the relevant horizon, and recovery of the absolute normalization, lensing, and relativistic dynamics.

---

## Weyl curvature and conformal succession

The Penrose branch asks whether homogeneous parent collapse supplies the low-Weyl beginning required by the Weyl Curvature Hypothesis, how perturbations cross, and how gravitational entropy is carried through the recursive geometry.

This branch supports GD II but is not the main publication spine. Its current papers are collected in the [Penrose review packet](penrose.html).

---

## Later work

After the background map is secure, the programme must address:

- scalar, vector, and tensor perturbations;
- CMB propagation and structure growth;
- realistic rotation, accretion, and mergers;
- the Newtonian-to-reciprocal interpolation and cluster dynamics;
- horizon entropy and information transfer; and
- independent observational signatures beyond the evolving galaxy scale.

---

## Standard of evidence

Every project claim belongs to one of five classes:

1. **Model result:** follows from a stated metric and physical inputs.
2. **Geometric result:** follows from an exact identity or proved construction.
3. **Empirical prediction:** states an observationally decidable consequence in advance.
4. **Candidate mechanism:** supplies a concrete explanation whose full dynamics remain open.
5. **Open problem:** names the missing calculation directly.

The programme advances when a candidate mechanism becomes an explicit construction or an empirical prediction survives measurement.
