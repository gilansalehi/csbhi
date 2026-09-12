# Geometric Duality Research Roadmap

*The current publication path and the standard of evidence for the CSBHI programme.*

**Updated:** 2026-09-11.

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

[*Pressure Gradients and the Regular Birth Vertex*](note.html?src=pressure_gradients_and_the_regular_birth_vertex) supplies the analytic general-perfect-fluid result. A genuine radial pressure gradient accelerates the material fluid relative to a geodesic Alice. The Alice-frame momentum constraint then proves that, under the minimal shell-independent completion, the congruence cannot remain both shear-free and uniformly expanding across the finite star. Exact FLRW must give way to perturbations. At a regular spherical center, however, pressure and density gradients vanish linearly while anisotropic stress, electric Weyl curvature, and Alice shear begin at \(O(R^2)\). The birth vertex is therefore FLRW-like at leading order, with structure appearing as the horizon grows into the parent's radial profile.

[*The Tolman VII Birth-Vertex Amplitude Benchmark*](note.html?src=tolman_vii_birth_vertex_amplitude_benchmark) measures the first spatial coefficient using an analytic neutron-star profile. Its normalized tidal departure is

\[
\frac{|\mathcal E|}{K_c}=\frac25\left(\frac{R}{R_*}\right)^2.
\]

The departure is \(4\times10^{-5}\) at one percent of the stellar radius, \(0.10\) at half radius, and \(0.40\) at the surface. A separate TOV integration at compactness \(\mathcal C=0.20\) gives \(p_c/(\rho_cc^2)=0.18746\) and confirms the \(O(R^2)\) onset of Alice-frame anisotropic stress. The static benchmark passes near the birth vertex while demonstrating that the full pressured star cannot be treated as a linear perturbation of OS.

The [*Level 3 Progress Note*](note.html?src=level_3_general_spherical_perfect_fluid_completion) completes the analytic rung. Once the globally selected event-horizon generator is supplied, its radius and Misner–Sharp mass obey exact outgoing-null transport equations through the pressured fluid. The same calculation derives the nonlinear transport of spherical Weyl curvature and closes the Alice–fluid rapidity equation. Smooth central data force fractional density and pressure variations, Weyl curvature, non-homologous shear, and Alice's scalar density and pressure corrections to begin at \(O(R_E^2)\). Alice's radial tilt and flux begin at \(O(R_E)\), vanish at the center, and affect the scalar sector quadratically. Level 3 therefore passes structurally; simulations are retained as a later amplitude calculation rather than a condition for advancing the analytic ladder.

The [*Level 4 Progress Note*](note.html?src=level_4_dissipative_spherical_collapse) adds genuine fluid-frame energy transport and pressure anisotropy. Regularity requires \(q=O(R_E)\) and \(\Delta=O(R_E^2)\). Heat transport changes the homogeneous central evolution through a finite flux divergence, while the dissipative Misner–Sharp and outgoing-null Weyl equations show that density curvature, energy transport, and anisotropic stress alter only the coefficient of the quadratic Weyl residue. The potentially constant heat-flux source cancels exactly. Level 4 passes for a smooth total stress tensor; nonsmooth structure at the vertex is the explicit failure condition.

[*The Trapping-Horizon Pair and the Inward Reciprocal Branch*](note.html?src=trapping_horizon_pair_and_inward_reciprocal_branch) refines the spherical formation geometry without restoring an isometric horizon match. At a smooth nondegenerate interior first trapping, compactness tangency gives \(8\pi R_b^2\rho_b=1\), \(\bar\rho_b=3\rho_b\), and a pair of marginal branches opening as \(\sqrt{t-t_b}\). The inward branch begins at \(R_-/R_b=1\) and decreases, making it the strongest current candidate for the parent radial structure underlying GD1. This is not yet the child map: the event horizon still supplies causal ordering and the optical clock, a non-isometric scale transfer must be derived, and a timelike transport rule must connect Alice to the marginal branch.

[*The Conditional Trapping-Pair Ledger and Weyl-Flat Handoff*](note.html?src=conditional_trapping_pair_ledger_and_weyl_flat_handoff) identifies how the pair could carry the homogeneous matter ledger without reverting to parent–child radius equality. The physical curve is a dimensionless, scale-dressed outer radius; its third and fourth future derivatives encode \(\eta_m\) and \(\eta_r\), and their scale-invariant combination defines a numerical collapse target. Independently, a Weyl-flat perfect-fluid marginal sphere reproduces the FLRW functional forms of density, Hayward surface gravity, and causal signature. This is a strong handoff criterion, not a completed map: the dressing, marginality transfer, and child stress-energy must still be derived from the throat.

[*The Conformal Dictionary and the Pre-FLRW Causal Interval*](note.html?src=conformal_dictionary_and_pre_flrw_causal_interval) makes that derivative condition canonical. Under a genuine local Weyl map, \(R_C=\Omega_{\rm W}R_P\), \(d\tau_C=\Omega_{\rm W}d\tau_P\), and \(d\lambda_C=C_\lambda\Omega_{{\rm W},H}^2d\lambda_P\); the child marginality condition is \(\theta_P+2k_P(\ln\Omega_{\rm W})=0\). These are local four-metric statements, not a derivation of the mature scale mode. The note also formulates a possible pre-FLRW causal contribution to the CMB horizon problem and explicitly leaves it as a global pass/fail calculation.

[*Mature Gamma Dynamics and the Conditional Radiation Handoff*](note.html?src=mature_gamma_dynamics_and_conditional_radiation_handoff) closes the scale mode after a successful reciprocal handoff. The ruler ratio is \(\Gamma_{\rm GD}=a/r=a^2=r^{-2}\), with \(\dot\Gamma_{\rm GD}/\Gamma_{\rm GD}=2H\); the flat matter–radiation–\(\Lambda\) background becomes one first integral for \(\Gamma_{\rm GD}\), and radiation appears as the trace-free constant kinetic term. The same note translates the handoff two-jet into initial data for \(\Gamma_{\rm GD}\) and proves a conditional stationary-parent \(\Rightarrow w=1/3\) statement. The throat still has to establish its ruler and time-map premises and relate \(\Gamma_{\rm GD}\) to \(\Omega_{\rm W}\) and the null affine transfer.

The [*Level 5 Setup*](note.html?src=level_5_event_horizon_creases_and_rotation_test) identifies the first obstruction created by abandoning spherical symmetry. Generic horizon formation replaces the single spherical vertex with an endpoint set containing spacelike crease surfaces, corners, and caustics. These are structures of the null event horizon, not matter overdensities and not multiple cosmological births. A smooth positive conformal map transports a crease rather than removing it. Level 5 therefore divides into a slow-rotation transfer calculation and a local conformal-completion test for the generic two-sheet crease.

The [*Level 5 Conditional Result and Campaign Summary*](note.html?src=level_5_rotation_and_campaign_summary) carries both calculations to the present theory boundary. Slow rotation produces an axial first-order sector but no first-order scalar correction; a finite electric-Weyl quadrupole is allowed at \(O(\chi^2)\). Near a nondegenerate crease-nucleation perestroika, the transverse opening is \(O(\sqrt{\tau})\) while the intrinsic metric correction on each smooth horizon sheet is \(O(\tau)\). A regular conformal map nevertheless preserves the crease. Expansion-normalized Weyl, shear, and vorticity vanish only if the local Weyl completion makes \(|\mathcal H_P+D_P\ln\Omega_{\rm W}|\) diverge. Level 5 therefore earns a conditional local pass, not a completed global pass.

### GD2 benchmark scoreboard

| Level | Model | What the model tests | Status |
|---|---|---|---|
| 0 | OS dust | Existence of the homogeneous formation map | **Passed** |
| 1 | Homogeneous perfect fluid | Whether pressure breaks the reciprocal, null, or conformal background structure | **Passed structurally** |
| 2 | First-order LTB dust | Density gradients, velocity modes, Weyl inheritance, and the perturbed horizon sweep | **Partially passed; calibration open** |
| 3 | General spherical perfect fluid | Pressure gradients, accelerated matter, a free-fall Alice congruence, and regular event-horizon transport | **Passed structurally; amplitudes deferred** |
| 4 | Dissipative spherical collapse | Heat, neutrino, radiative flux, and pressure anisotropy | **Passed structurally; regular stress required** |
| 4A | Interior trapping-pair birth | Local density/pressure data, finite throat opening, and a candidate inward reciprocal branch | **Parent fold passed; GD identification open** |
| 4B | Conditional trapping-pair ledger | Future horizon jets and a Weyl-flat handoff criterion | **Carrier identified; conformal closure open** |
| 4C | Local Weyl-transfer audit | Scale, clock, affine transport, marginality, and pre-FLRW causal reach | **\(\Omega_{\rm W}\) dictionary fixed; throat projection open** |
| 4D | Mature dual-scale dynamics | Reciprocal ruler scale, Friedmann first integral, handoff two-jet, and radiation selection | **Mature evolution closed; launch conditions open** |
| 5 | Rotating collapse | Angular momentum, horizon creases, and child anisotropy | **Conditional local pass; birth completion open** |

Two analytic threads now meet at the same theory boundary. The nonspherical thread must derive the birth-limit local Weyl behavior and apply that actual GD completion to the stable two-sheet \((A_1,A_1)\) crease. The spherical thread must derive how \(\Omega_{\rm W}\), \(\Gamma_{\rm GD}\), the cohort lapse, and the null affine transfer arise as projections of one throat geometry; solve child marginality; and test whether the local and future-jet determinations of \(\mathcal J\) agree—without setting \(R_b^P=R_A^C\). A realistic equation of state and numerical event-horizon sweep remain later amplitude tests.

### Parameter dependency ledger

[*CSBHI Geometric Parameter Cascade*](note.html?src=csbhi_geometric_parameter_cascade) records what the current programme does and does not compress. The child asymptotic de Sitter scale \(L\) fixes the standard vacuum and horizon sector; adding \(\eta_m\) and \(\eta_r\) supplies an equivalent parameter basis for the flat matter–radiation–\(\Lambda\) background. This becomes a physical parameter reduction only if the formation theory derives those inputs.

The revised ledger explicitly rejects the former isometric shortcut \(L=2GM_P/c^2\). A stellar parent can produce a cosmological child scale only through the still-open throat transfer. The mature ruler scale \(\Gamma_{\rm GD}=a^2\) is no longer functionally free after handoff, but that does not fix its launch, the cohort lapse, or the null affine transfer. The remaining formation data are the relation among \(\Gamma_{\rm GD}\), \(\Omega_{\rm W}\), the older \(K(q)\), and the complete child metric. The galaxy sector separately retains two testable horizon choices: a fixed \(cH_\Lambda\) scale or an evolving \(cH(z)\) scale.

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
