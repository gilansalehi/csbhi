# GD II — paper skeleton for Codex

Structural spec for `gd2.html`. Headings, section briefs, the equations each section carries, and the note-to-section mapping. No prose here — this is the shelf, not the books.

Build the skeleton first (headings + one-line briefs, nothing else). The note tiering in `NOTE_AUDIT.md` should be done *after* this exists, because each note's tier falls out of which section it feeds.

## On the arc

GD1's path is the scaffold: orient → motivate by a defect → dramatize → one move → the geometry it produces → the payoff → contact with data → honest accounting → machinery in appendices.

It is a scaffold, not a contract. GD2 genuinely diverges in two places and should not be forced back into parallel:

- **GD2 opens on a negative result.** GD1's §3 critiques someone else's model; GD2's §2 critiques our own earlier attempt. That is a stronger opening, not a weaker one, but it changes the register — it should read as a finding, not as a concession.
- **GD2 needs an evidence section GD1 didn't.** The benchmark ladder has no GD1 counterpart. §8 exists because the central claim is "this survives realistic collapse," and that has to be shown rather than asserted.

If the parallelism starts dictating content rather than ordering it, break it.

---

# Skeleton

**Working title:** *Geometric Duality II: Formation and the Finite Throat*
(Alternatives: *…: How a Child Universe Begins*; *…: Collapse Cohorts, the Throat, and Conformal Scale Transfer*.)

## Abstract

Two claims, in this order: birth is a finite dynamical region rather than a seam; and the parent–child scale hierarchy is accumulated by ordinary expansion rather than imposed at formation. Name the exact benchmark (OS), the scoreboard verdict, and the three functions still open.

## §1 You Are Here

Where GD1 stopped: `a = 1/r` posited, child assumed already to exist, `r:1→0 ⟺ a:1→∞`. The question GD2 asks. What is new: formation is a process with duration and internal structure, not an event. Short — three or four paragraphs.

## §2 Why the seam fails

GD2's motivating defect, and it is our own. Two independent failures:

- **Derivative counting.** A shell-free timelike Weyl match has its conformal factor and first derivative fixed by continuity; isotropy removes the remaining second-order scalar jump. Null matching leaves a null-directed stress, not an isotropic FLRW stress. A zero-thickness seam carries too few degrees of freedom to generate a child background.
- **The Vaidya argument.** With `dR_E/dv = ½(1 − R_T/R_E)`, imposing `R_E = R_T` gives `dR_E/dv = 0`. Zero width is the stationary limit. During accretion `dR_T/dv > 0`, so the two cannot coincide.

Then what this retires: equal radii, equal masses, and marginality transfer. The OS audit's explicit number belongs here — a marginal parent sphere maps to child compactness `cos⁴q₀`, not unity.

Close on the reading: this identifies a failed assumption, not a failed programme.

*Sources:* synthesis §3–4; `os_formation_conformal_map_audit` §6.

## §3 Repeat the descent

GD2's thought experiment, and the direct analogue of GD1's leap. Collapse-day Alice and present-day Alice. Both locally ordinary, both crossing with `r = 1`, both inhabiting one child. The cohort family `γ_{v_H}(τ)`. Separate the timelike Alice branch from the null generator tangent to the horizon.

The move that makes the problem tractable: the correspondence is between *histories of crossing events*, not between surfaces.

*Sources:* GD2 outline §2; `result_iv` §2–3, §14.

## §4 Formation becomes birth

The central mechanism. Subsections:

- **4.1 The null history.** Successive crossings trace an outgoing null history in the parent.
- **4.2 The exact benchmark.** The OS interior is closed FLRW, hence conformally flat. The standard conformal map sends the growing event horizon to `T_M = R_M = ½ tan q` — an outgoing light cone from the origin. This is exact, and it is the strongest single result in the paper.
- **4.3 What the map is.** `g_C = Γ²g_P`, `R_C = ΓR_P`. Conformal, not isometric. Quasi-local mass picks up conformal-gradient terms.
- **4.4 What it is not.** No equal radii, no equal masses, no marginality transfer. State plainly and move on — one paragraph.
- **4.5 The residual freedom.** A vertex-preserving conformal family survives; the null cone alone does not select its member. Flag `β` explicitly so nobody later reads `w → −2/3` as a prediction.

*Sources:* `result_iv` §4–9, §12; `os_formation_conformal_map_audit` §3–4, §6.

## §5 The finite throat

The geometry that replaces the seam.

- **5.1 Two different horizons.** Event horizon global and teleological; trapping horizon local and defined by null expansions. Distinct while the hole is evolving.
- **5.2 First contact.** Compactness `C = 2m/R` touches unity. Tangency `D_ℓC_b = 0` with `D_ℓC = (Γ_R/R)(8πR²ρ − C)` gives `8πR_b²ρ_b = 1`. Worth noting that this is where the compactness profile peaks, which is independently the condition `ρ̄ = 3ρ` — pressure-independent, and true of any profile.
- **5.3 The fold.** `Δℓ_± = ±√(2A/B)·√(t − t_b)`. The formally infinite branch velocity is a parameter artifact; `σ = √(t − t_b)` is smooth. Ordinary fold bifurcation, no curvature pathology.
- **5.4 Three structures, three jobs.** `R_E > R_+ > R_−`: global causal and clock information; outer marginal boundary; inward branch.
- **5.5 The inward branch.** `r ≡ R_−/R_b` has the right direction, normalization and starting point for GD1's reciprocal variable. Label CORR/TEST, not established. State the outstanding condition: GD1 needs `r → 0` at *infinite* child proper time, so `∫ (dτ_C/dt) dt` must diverge as the branch reaches the centre.

*Sources:* `trapping_horizon_pair_and_inward_reciprocal_branch`; Level 3 Misner–Sharp variables.

## §6 Hierarchy accumulated

The payoff section. Give it room — this is where GD1 puts Singularity Deferred, and it does the same job.

- **6.1 Two conformal factors.** `a = 1/r` is the child scale against the conformal seed. `Γ = a/r` is the parent-to-child scale transfer. They are different objects and have been conflated before.
- **6.2 The relation.** With `g_P = r²ḡ` and `g_C = a²ḡ`, `Γ = a/r = a² = r⁻²`.
- **6.3 Dynamics.** `Γ̇/Γ = 2H`, and `Γ̈/Γ = (8πG/3)(ρ − 3p/c²)`. Radiation is trace-free and so does not curve the Γ trajectory; it supplies the kinetic term.
- **6.4 The hierarchy is earned.** `ln Γ = 2 ln a`. A 10 M☉ parent needs `ln Γ ≈ 50`, i.e. ~25 e-folds of ordinary expansion. No formation-scale hierarchy is required. This is the sentence a reader should leave with.
- **6.5 Independent check.** Result IV's OS factor `Γ_H = K/(2S_H²cos q)` equals `a²/(2K cos q)`, so two independent routes agree up to `1/cos q` — unity at the vertex, 0.5% at `q₀ = 0.1`, 4.7% at `q₀ = 0.3`. Worth stating; it is the best corroboration in the paper.
- **6.6 The mature background as one equation.** `Γ̇²/(4H_Λ²) = Γ² + η_m√Γ + η_r`, with `Γ̈/H_Λ² = 4Γ + η_m/√Γ`. The three eras as Γ ∝ τ, τ^{4/3}, e^{2H_Λτ}.

*Sources:* `mature_gamma_dynamics_and_conditional_radiation_handoff`; `conformal_dictionary_and_pre_flrw_causal_interval`; `result_iv` §9.

## §7 What the child inherits

GD2's observables.

- **7.1 The ledger.** `P(r) = H²/H_Λ² = 1 + η_m r³ + η_r r⁴`. Radial powers are equations of state: `n = 3(1+w)`. Vacuum 0, curvature 2, dust 3, radiation 4.
- **7.2 The one invariant.** Individual coefficients carry weight under `r → λr`; only `𝒥 = η_r³/η_m⁴ ≈ 5.42×10⁻¹¹` is normalization-free, equivalently `N_m = −⅓ ln𝒥 ≈ 7.88` e-folds of matter domination. Say plainly that `η_m ≈ 0.46` is an epoch label, not a composition fact.
- **7.3 The handoff relation.** `M_P = M_equiv (T₀/T_b)²` with `M_equiv = c²L_C/2G = 5.61×10²² M☉`. Stellar parents put the handoff at 18–32 MeV.
- **7.4 The parent-mass bound.** Requiring `T_b ≳ 3 MeV` so nucleosynthesis is preserved gives `M_P ≲ 344 M☉`. Supermassive parents are excluded. This is the programme's first constraint on the *parent* and the strongest falsifiable statement in GD2 — give it its own subsection and do not bury it.
- **7.5 What geometry cannot see.** Background dynamics distinguishes EOS sectors, not species. `Ω_b`, `N_eff`, `Σm_ν`, dark-sector identity are inherited-content questions.

*Sources:* `csbhi_geometric_parameter_cascade`; `mature_gamma_dynamics…`.

## §8 Does it survive realistic collapse?

The evidence section. One framing paragraph, the scoreboard table (Levels 0–5 with model / what it tests / verdict), and at most one paragraph per verdict. Everything else goes to Appendix A.

The honest summary: no regular contribution through Level 4 forces an order-unity scalar departure at the spherical birth vertex; Level 5 earns a conditional local pass with the birth completion open.

*Sources:* `gd_research_roadmap` scoreboard; `level_5_rotation_and_campaign_summary` §13.

## §9 Discussion

- **9.1 What GD2 establishes.** Numbered, and scoped to the benchmarks actually computed.
- **9.2 What is conditional.** The marginal-sphere pairing; `r = R_−/R_b`; the birth-cone-as-particle-horizon reading; the constant-calibration hypothesis `K(q) = K₀`.
- **9.3 What is open.** `K(q)` / absolute Γ normalization; the cohort clock `N_H`; the null affine transfer `𝒯(v_H)`; non-spherical completion. **Plus the two live internal contradictions** — see the open-items section below. Both must appear here and in `open_questions.md`.
- **9.4 Withdrawn approaches.** Short, and pointing at the standing retraction document rather than re-litigating.

## §10 Conclusion

## Appendices

- **A — The benchmark ladder.** One subsection per rung, Levels 0–5. This is where the campaign's chronology lives.
- **B — Regular-center suppression and Weyl transport.** `𝒲 ≡ m/R³ − (4π/3)ρ`; the exact outgoing-null transport equation `D₊𝒲 = −3(U+𝒢)𝒲/R − (4π/3)D_ℓρ + (4π/3)(ρ+p)Σ`; the `O(R_E²)` results and the Level-4 dissipative coefficient.
- **C — Tolman VII amplitudes.** `|𝓔|/K_c = (2/5)x²`, the radial table, and the TOV integration at `𝒞 = 0.20` giving `p_c/ρ_c c² = 0.18746`.
- **D — Rotation, creases, and the nonspherical obstruction.** Level 5 setup and conditional result.
- **E — The conformal Misner–Sharp identity.** The transformation law, `M_C/(Γ_H M_P) = cos²q cos²y`, and the explicit failure of marginality transfer.
- **F — The low-Weyl fixed point.** Absorbed from the Penrose packet; see the refactor note below.

---

# Note → section mapping

| Note | Feeds | Tier |
|---|---|---|
| `result_iv_conformal_formation_map` | §4, App E | **spine** |
| `os_formation_conformal_map_audit` | §2, §4.3–4.5, App E | supporting |
| `trapping_horizon_pair_and_inward_reciprocal_branch` | §5 | **spine** |
| `mature_gamma_dynamics_and_conditional_radiation_handoff` | §6 | **spine** |
| `csbhi_geometric_parameter_cascade` | §7 | **spine** |
| `conformal_dictionary_and_pre_flrw_causal_interval` | §6.1, §9.3 | supporting |
| `conditional_trapping_pair_ledger_and_weyl_flat_handoff` | §5, §9.3 | supporting |
| `level_5_rotation_and_campaign_summary` | §8, App A, App D | supporting |
| `pressure_robustness_of_the_conformal_formation_map` | App A (L1) | log |
| `perturbing_the_conformal_formation_map` | App A (L2), §9.3 | log |
| `pressure_gradients_and_the_regular_birth_vertex` | App B | log |
| `tolman_vii_birth_vertex_amplitude_benchmark` | App C | log |
| `level_3_general_spherical_perfect_fluid_completion` | App A (L3), App B | log |
| `level_4_dissipative_spherical_collapse` | App A (L4), App B | log |
| `level_5_event_horizon_creases_and_rotation_test` | App D | log |
| `horizon_map_equation_and_notation_audit` | §2, §9.4 | guide |
| `gd2_collapse_cohort_horizon_map_outline` | superseded by the paper | retire |

Spine notes stay in the `publications` collection. Supporting notes move to a new archive group. Log notes move to "Formation campaign calculations, September 2026."

---

# Guardrails

The following have each re-entered drafts after being withdrawn. None may appear as established:

- `R_A^C = R_T^P` / `S_T^P ↔ S_A^C` — the marginal-sphere pairing. CORR/TEST only, and `os_formation_conformal_map_audit` §6 shows it fails by `cos⁴q₀` in OS.
- `N_H = R_T/(2R_E)` — the dual-horizon clock. Withdrawn with its branch.
- `R_b ≈ 1.52×10⁹ m`, `T_b ≈ 0.543 MeV` — conditional, and corresponds to `M_P ≈ 10⁴ M☉` under §7.3, which §7.4 marginally excludes.
- `𝒯 = constant` or `𝒯 = Γ²` — `𝒯(v_H) ≡ dλ_C/dλ_P` is a definition awaiting a derivation.
- `M_P ~ 10²² M☉` — that is `M_equiv`, the Schwarzschild-equivalent child scale. GD1's `M_H = 4.65×10²² M☉` is the critical-density Hubble-sphere mass and was never a parent-mass claim; do not "correct" a claim the paper didn't make.
- `w → −2/3` from the null map — a `β = 0` artifact, not a prediction.

Carry the synthesis note's status labels — **[GR] / [GD1] / [CORR] / [TEST] / [RESULT]** — on every nontrivial claim. That discipline is what stops the above recurring.

---

# Prose conventions

- State claims plainly. No "read X as Y, not Z" framing clauses, and no sentences about what the document is doing.
- Epistemic status lives in word choice and in the status labels, not in announcements.
- Numbers get error bars or a precision statement. Don't quote `b₄ = −6.716×10⁻⁵` to four digits when `Ω_k`'s uncertainty is twenty times larger, and don't quote agreement with `π/10` at all.
- Equations that are identities should say so. The conformal Misner–Sharp check and `ρ_C = ρ̄_P` are both identities, not tests, and the OS audit already gets this right — match its register.

---

# Open items that must be listed, not smoothed

Both are live contradictions inside the current material. They do not have to be resolved before publishing, but they must appear in §9.3 and in `open_questions.md`:

1. **The factor of 3 at the marginal sphere.** First contact requires `8πR²ρ = 1`; the Weyl-flat handoff requires `8πR²ρ = 3`. They cannot hold at the same sphere, and a Weyl-flat marginal sphere is transversal (`D_ℓC = 2Γ/R ≠ 0`), so it can never be a pair-creation event. First trapping and the FLRW handoff are therefore different events, and the throat's evolution between them is undescribed.

2. **The handoff is over-determined by 9.3×.** Normalizing `Γ_* = 1` with `R_A^C = R_P` and separately setting `Γ_now = L_C/R_P` both fix `T_b` from `M_P`, and they disagree — 122 MeV vs 17.6 MeV for a 10 M☉ parent. The mismatch is exactly `η_r^{−1/4} = 9.29 = 1 + z_{rΛ}`, which points at which era is being assumed between handoff and now.

Related: §19's `R_P` evolves (`Ṙ_P/R_P = ½(3w−1)H`, shrinking by `√Ω_r ≈ 10⁻²` since handoff), so it cannot be a black-hole radius, and `M_P` is epoch-ambiguous at the `10²` level until that is pinned.

---

# Repo moves this implies

Do these after the skeleton exists, not before.

- **Split `penrose.html`.** Its CSBHI↔CCC comparison belongs in `conformal-cyclic-cosmology.html`, which currently contains no CSBHI comparison at all. Its low-Weyl fixed-point material becomes Appendix F. That frees "Packet II" from the nav, which is the room GD2 needs.
- **Re-tier `project-catalog.js`.** The `publications` collection is currently 19 documents: 3 canonical papers, 2 outlines, 14 campaign notes. After GD2 it should be GD1, RI I, involution, GD2, GD3, plus the four spine notes.
- **Standing retraction document.** Promote the synthesis note's §25 into its own file. The four binned notes were deleted rather than marked withdrawn, and every one of their results returned in a later draft. Deletion removed the evidence that they were retired.
- **Listing gaps.** `result_iv_conformal_formation_map` is in neither `sitemap.xml` nor `llms.txt`, while its downstream notes are in both. Fix when GD2 lands.
- **Consider:** let the Research Atlas be canonical for "why look past ΛCDM" and have GD1 §3 and GD2 point to it rather than restating it.
