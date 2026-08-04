# Internal note audit

*Editorial catalog, 2026-08-03. This is not a publication or a statement of the theory.*

## Audit standard

The source of truth is `gd1.html`, especially its Alice/Bob construction:

- Bob's `r(tau)` labels Alice's progress along her worldline.
- Alice's `tau` is time.
- Alice's `(R, theta, phi)` label the probe cloud spatially.
- `a(tau) = 1 / r(tau)` scales the probe separations `a R` isotropically.
- The construction does **not** turn the horizon-crossing time of successive infallers into Alice's comoving radius.
- A standard junction calculation between two separately chosen metrics can test that surrogate, but it is not automatically a test of the reciprocal construction.

The catalog distinguishes three questions:

1. Is the calculation correct under its stated assumptions?
2. Do those assumptions model the construction in GD1?
3. Does the note advertise a conditional calculation as evidence for CSBHI?

## Immediate public-facing problems

### 1. `junctions.html` — remove from the RI sequence; retain only as archived surrogate analysis

The paper makes a pasted FLRW/Kottler or FLRW/Schwarzschild boundary the missing bridge in CSBHI, then promotes the failures of that pasted geometry into requirements for a finite throat. Its timelike and null junction calculations can be valid for the metrics selected, but those metrics do not implement the Alice/Bob reciprocal geometry. The central conclusion therefore answers a different problem.

The most misleading step is the jump from “a scalar conformal rescaling is not a coordinate transformation from Schwarzschild to FLRW” to “the horizon map must be a four-metric junction with transverse stress.” The first statement is true. The second does not follow. GD1 does not claim that its two observer descriptions are ordinary coordinate charts on vacuum Schwarzschild, nor that they are produced by gluing an independently selected FLRW metric to it across a zero-width shell.

**Disposition:** archive as *Junction tests for direct FLRW–Schwarzschild/Kottler surrogates*. Do not call it RI II, a completion criterion, or the project’s “boundary problem.” Remove its derived throat programme from the homepage, roadmap, glossary, and open-questions index.

### 2. `notes/constraints_on_the_horizon_map.md` — withdraw or completely rewrite

This note correctly says that vacuum Schwarzschild and FLRW have different Weyl curvature and that an ordinary scalar conformal transformation cannot turn one into the other. It then equates the horizon map with a junction between those independently specified four-geometries. That is the same category error as RI II.

**Disposition:** withdraw from the primary-author publication path. A short replacement could preserve the one useful warning: `a = 1/r` is not an ordinary coordinate transformation or a Weyl rescaling of vacuum Schwarzschild. It should not invent a junction prescription GD1 never made.

### 3. `notes/the_missing_null_coordinate_and_the_horizon_map.md` — remove

This note assumes that successive parent horizon-crossing times must become different child positions on one time slice. It therefore invents `R = Psi(v_H)` and a missing second null coordinate. GD1 already assigns the spatial labels: `(R, theta, phi)` label the probes, while `r(tau)` and `a(tau)` describe their common evolution. Crossing time is not the missing comoving radius.

**Disposition:** remove from the archive and all indexes. The premise, not merely the execution, is wrong.

### 4. `reciprocal-involution.html` — correct the theorem claim before presenting it as a result

The proof begins, “Write the map as a power law (scale-freeness).” Scale-freeness does not by itself imply a power law when both variables are dimensionless. The calculation proves a valid narrower lemma: among nontrivial **monomial** involutions `f(r) = C r^p` fixing `r = 1`, the reciprocal map is unique. It does not prove uniqueness among all scale-free maps, and it does not close the problem of selecting the ansatz.

The claim that the fixed point “does not have to be imposed” is also backwards: the proof explicitly imposes `f(1) = 1` to set `C = 1`.

**Disposition:** keep only after renaming and narrowing it to the monomial class. Reopen the homepage/open-questions claim that symmetry derived the ansatz.

### 5. `notes/two_routes_to_the_vacuum_surface_gravity_jump.md` — remove from featured results

The abstract calls the horizon-ratio and surface-gravity routes “independent conditions,” while the result concedes that both notes computed the same quantity “by construction.” Reversing the algebra and recovering `M = M_H` does not create an independent prediction when the equality being solved was assembled from the same horizon definitions and present density relations.

**Disposition:** archive as an algebraic identity, not evidence selecting the parent mass. It should not be AI XVI or one of the homepage’s principal results.

## Notes built on the unsupported finite-throat identification

The following chain contains useful standard cosmological calculations, but every CSBHI conclusion depends on identifying Alice's cosmological event-horizon history `B(tau)` with a parent throat or black-hole area history. GD1 does not make or derive that identification.

### `notes/dynamic_throat_kinematics_and_the_cosmological_clock.md`

`Bdot = H_A B - c` is the standard ingoing-null/event-horizon kinematic identity in flat FLRW. Reconstructing `B(tau)` from an observed FLRW history is legitimate. Calling that reconstruction a target parent throat history is an extra hypothesis, not a consequence of the reciprocal map.

**Disposition:** archive or retitle as *FLRW Event-Horizon Kinematics*. Remove from the featured technical series.

### `notes/finite_throat_transition_and_the_absolute_reciprocal_coordinate.md`

The exact integral is conditional on the previous `B(tau)` identification. The 4 MeV “thermal anchor,” the zero-or-one prethermal e-fold, and the resulting parent masses are chosen calibrations. They do not locate horizon crossing or black-hole formation.

**Disposition:** archive as a conditional parameter exercise. Do not describe it as fixing the absolute reciprocal coordinate.

### `notes/the_crossing_epoch_as_the_single_free_parameter.md`

This note elevates the same thermal calibration into a “one-parameter family,” derives a BBN upper bound, and concludes that Bob must accrete by a factor of roughly six billion. Those statements follow only after equating the reconstructed cosmological event horizon with Bob's evolving Schwarzschild radius. That identification was never established, so the claimed bound and “if and only if” condition are not constraints on CSBHI.

**Disposition:** remove rather than merely caveat. Its principal results disappear with its premise.

### `notes/nonequilibrium_event_horizon_and_the_cmb_clock.md`

The distinction between apparent and cosmological event horizons, the CMB temperature scaling, and the numerical horizon-temperature comparison are useful. Applying apparent-horizon thermodynamic objects to the event-horizon sphere and naming the residual a throat target is conditional bookkeeping.

**Disposition:** retain only as archived horizon-thermodynamics background after removing the claim that a completed CSBHI throat must reproduce the constructed residual.

### `notes/hyperbolic_cosmological_clock.md`

The de Sitter rapidity `H_Lambda tau` is a valid comparison coordinate. The density-ratio agreement is a check of the same dust-vacuum FLRW solution, not independent evidence, and the “finite-throat history” assigned to the remaining e-folds comes from the unsupported chain above.

**Disposition:** archive; salvage the pure de Sitter geometry for the 5D embedding work.

## Mixed notes requiring a clean split

### `notes/null_optics_of_the_reciprocal_interior.md`

Sections deriving interior redshift, wavelength, blackbody-temperature, and intensity scaling from the FLRW metric are useful conditional results. The later “horizon screen,” fixed-radius null-junction test, and continuous event-by-event exterior image are a separate toy model. The note currently presents that toy model as the remaining part of the GD1 horizon map.

**Disposition:** split. Keep the interior optical transfer law. Archive the screen/junction calculation with the direct-junction surrogates.

### `notes/gd_inverse_radius_probe_congruence.md`

The core probe-cloud calculation is the clearest technical expansion of GD1 and should remain. Sections 12–14 graft the surrogate-junction programme onto it and end by calling that programme the unresolved horizon map.

**Disposition:** keep the congruence, density, curvature, and singularity-deferral calculation; rewrite the status and open-problem sections.

### `notes/alices_curvature_ledger_and_the_weyl_hypothesis.md`

The exterior Schwarzschild Weyl values and the interior FLRW curvature formulas are individually useful. The note nevertheless has three serious problems:

1. It retains a distinction between “ordinary Alice” and “collapse-origin Alice” that GD1 does not require and that the project has rejected.
2. It places nonzero Schwarzschild Weyl immediately outside `r = 1` and zero FLRW Weyl immediately inside, then calls them opposite descriptions without supplying a mathematically valid relation between scalar invariants at the proposed shared event.
3. Isotropic expansion of the chosen probe congruence is not, by itself, a proof that the full Weyl tensor vanishes; zero Weyl follows from the FLRW metric input.

**Disposition:** do not publish in its current form. Preserve the operational explanation of Ricci versus Weyl and the separate exterior/interior ledgers, but rewrite the claimed Penrose result only after stating exactly what identifies the collapse surface with the child initial data.

### `notes/weyl_curvature_hypothesis_reciprocal_interior.md`

The audited version was an adversarial memo containing a public retraction, not a coherent project note. It treated the direct Schwarzschild-to-FLRW throat as the load-bearing problem, depended on the misleading constraints note, and presented the child's low Weyl solely as an assumption. Some cautions were correct—especially that a regular scalar conformal rescaling cannot erase nonzero Weyl—but that document could not stand beside the curvature ledger as a competing account.

**Disposition completed:** the audited version was removed. On 2026-08-03 it was replaced by a new B-tier note explaining the background resolution through the homogeneous matter-filled collapse geometry rather than a Weyl-erasing vacuum junction.

## Correct calculations whose significance is overstated or stale

### `notes/field_equations_of_the_reciprocal_interior.md` — keep

This is the strongest technical note. It clearly lists the reciprocal ansatz, isotropic metric, Einstein equations, and perfect-fluid content as independent inputs before deriving Friedmann dynamics. Its only stale material is the closing language that redirects the reader to the surrogate junction programme.

**Disposition:** keep as RI I; make only a surgical status/reference update.

### `notes/reciprocal_interior_independent_verification.md` — keep as an audit

The recomputation is useful and appropriately conditional. The statements that isotropy and the exterior junction “remain open” should be reconciled with GD1's intended status: isotropy is a defining geometric input, while a direct pasted junction is not the horizon map.

**Disposition:** retain in the archive after a small scope correction.

### `notes/horizon_flow_density_identity.md` — keep with narrower interpretation

The equality is exact for the selected marginally bound `E = 1` congruence, and the note commendably shows it fails for general `E`. It is a consistency identity assembled from the Schwarzschild compactness relation and the flat Friedmann constraint, not an independent derivation of the matter content or a reason that a “global horizon map selects” the congruence.

**Disposition:** retain in the archive; delete the invented map-selection problem in its conclusion.

### `notes/pg_flow_from_5d_desitter_embedding.md` — keep, then shorten

The coordinate derivation is standard and correct: flat-slicing de Sitter rewritten with areal radius has PG form `F = H Rbar`. It is background support, not a derivation of CSBHI or evidence for a 5D throat. At 672 lines it substantially overstates a short coordinate calculation.

**Disposition:** keep Note I, but condense and label it as a standard de Sitter identity applied by the project.

### `notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md`

The functional-equation calculation is correct under its four assumptions. Assumption 4 already demands exactly flat outer rotation curves; with `g_N` proportional to `1 / radius^2`, that requirement already fixes the square-root dependence in the deep regime. The note therefore selects the MOND form within a chosen phenomenological class; it does not independently derive galaxy dynamics from CSBHI.

**Disposition:** preserve as future-work scaffolding, not a theorem-level physical result. Adjust the title and homepage summary accordingly.

### `notes/evolving_acceleration_scale_high_z_test.md`

This note is unusually clear about its heuristic and interpretive premises. Its proposed evolution follows only if the unproved galaxy coupling uses instantaneous `c H(z)` rather than constant `c H_Lambda`.

**Disposition:** retain as a preregistered conditional test in the archive/future-work material, not as a current prediction.

## Direct-junction background calculations

These can remain in a clearly labeled archive because they answer legitimate standard-GR questions. They must not be cited as defects or necessary stresses in the reciprocal geometry:

- `notes/horizon_map_shell_identity_and_mass_growth.md`: valid timelike FLRW–Kottler shell algebra; misleading title and “horizon map” application.
- `notes/vacuum_energy_cancellation_at_a_kottler_junction.md`: valid narrow comoving timelike matching result; not a construction of the GD1 relation.
- `notes/null_horizon_matching_of_the_reciprocal_interior.md`: useful negative result for a sharp Schwarzschild–de Sitter surrogate; its present scope warning correctly limits it.
- `notes/thermodynamic_accounting_of_the_transverse_junction.md`: useful interpretation of the surrogate derivative jump; its present scope warning correctly says the jump is not a physical GD1 membrane.
- `notes/recursive_kottler_horizons_and_the_galaxy_scale.md`: conditional Kottler algebra and numerology; the mass choice and Killing-time normalization are not derived.

## Historical and reference material

### `notes/black_hole_cosmology_lineage.md`

The historical comparison remains useful. Its repeated description of CSBHI as awaiting a conventional junction/horizon map inherits the stale programme and should be rewritten. The historical claims and bibliography should otherwise remain separate from this conceptual cleanup.

### `notes/cosmological_glossary.md`

Most standard definitions are valuable. The “CSBHI usage” entries for horizon map, throat, `B(tau)`, junction conditions, and the “three-structure throat problem” encode the abandoned surrogate programme and currently give it the authority of project terminology.

**Disposition:** keep the glossary, remove or rewrite those project-specific entries after the theory's current geometric statement is fixed.

## Future-work scaffolding

The user-authored publication path should remain, but its premises need cleanup rather than deletion:

- `notes/gd_research_roadmap.md`: wrongly puts “horizon map” between reciprocal interior and dynamics, cites the constraints note as authoritative, and treats RI II as the next foundation.
- `notes/gd2_5d_de_sitter_throat_outline.md`: may remain a 5D research outline, but should stop inheriting the direct-junction derivative tests as mandatory acceptance conditions.
- `notes/gd3_throat_curvature_and_galaxy_law_outline.md`: useful scaffold; all galaxy-law statements remain conditional until a dynamical coupling is derived.
- `notes/gd_thermodynamic_reconciliation_outline.md`: useful speculative scaffold; it presently assumes the same throat vocabulary whose meaning is under revision.
- `notes/open_questions.md`: requires a full rewrite. Q3–Q5, the dependency graph, and the reading path are organized around the wrong horizon-map/junction problem. Q1 is also incorrectly marked closed by the overbroad involution theorem.

## Repository hygiene

### Empty note stubs

The following zero-byte files should be deleted once it is confirmed that git history is the intended archive:

- `notes/lcdm_dual_exterior.md`
- `notes/mcvittie_throat.md`
- `notes/reciprocal_ansatz_in_the_desitter_core.md`
- `notes/reciprocal_ansatz_unique_involution.md`
- `notes/shear_theorem_reciprocal_infall.md`
- `notes/weyl_ricci_conversion.md`

### `old_notes/`

The directory is already clearly labeled non-authoritative, so its speculative content is low risk. Its `README.md` is itself stale: it directs readers to `notes/horizon_triple_identity.md` and `notes/gd2_horizon_triple_identity_outline.md`, neither of which exists.

### Indexes that amplify the problems

After deciding the note dispositions, update these together:

- `index.html`: currently features RI II, the mixed null-optics note, the dynamic-throat reconstruction, and the surface-gravity identity as principal results; it also publishes the constraints note as Note II.
- `llms.txt`: repeats the same hierarchy to robot readers and still advertises the false “missing radial event map.”
- `sitemap.xml`: should list only documents intended for discovery.
- `notes/open_questions.md`, `notes/gd_research_roadmap.md`, and `notes/cosmological_glossary.md`: currently make the discarded junction programme look canonical.
- `old_notes/README.md`: contains dangling replacement links.

## Recommended clean public structure

1. **GD I** — the primary conceptual and mathematical paper.
2. **RI I** — field equations of the specified reciprocal interior.
3. **Independent verification** — an audit of RI I, archived but easy to find.
4. **Probe congruence** — a cleaned technical expansion of GD1's isotropic geometry.
5. **Horizon density identity** — a narrow consistency check for the selected `E = 1` congruence.
6. **de Sitter PG note** — standard asymptotic geometry supporting the future 5D work.
7. **Historical lineage and glossary** — reference material after stale programme language is removed.
8. **Future outlines** — explicitly speculative and separate from established results.
9. **Research archive** — direct-junction surrogates, conditional Kottler calculations, thermodynamic explorations, and observational trial balloons.

The main editorial rule should be simple: a correct equation belongs in the public research path only when the geometry feeding that equation is the geometry CSBHI actually proposes.
