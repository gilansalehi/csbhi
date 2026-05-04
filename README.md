# Geometric Duality of Black-Hole Interiors

**Core thesis:** *The Universe is a Black Hole* — and the geometry of that claim, taken seriously, may unify black-hole interior physics, cosmic acceleration, and galactic rotation-curve phenomenology.

## What this project is

This repository is a plain static site for the CSBHI / Geometric Duality research programme.

The public landing page is `index.html`. The current GD I paper is `gd1.html`, which presents a **geometric duality** between late-time cosmic acceleration and black-hole infall. By embedding a flat FLRW patch in a Schwarzschild–de Sitter exterior and expressing the interior in Painlevé–Gullstrand (PG) form, the paper argues:

- Cosmic inflation and inertial free-fall are related by a sign flip `τ → -τ`.
- Dark energy may emerge from interior horizon geometry rather than requiring an explicit negative-pressure fluid.
- A geometric estimate gives `Λ ≈ 1.6×10⁻⁵² m⁻²` — within 50% of the observed value.

Current public notes live in `notes/` and are rendered by `note.html?src=<note-basename>`. Older synthesis documents, section drafts, and research-roadmap material live in `old_notes/`; they are important context, but are not automatically current public content.

`gd1.html` is also the structural HTML5 paper template for the series: `main > article`, a compact metadata `header`, a document `h1`, a collapsible linked `nav` table of contents, semantic sections, appendices, references, figure captions, and raw HTML5 structure with light shared CSS. `src/css/index.css` is a cascade-layer import manifest; pages link that one stylesheet and let semantic HTML carry the document structure.

The expanded research program aims to elevate Geometric Duality (GD) from a clever coordinate matching into a **unifying geometric framework** for:

- black-hole / cosmology duality
- de Sitter embedding and horizon thermodynamics
- the MOND acceleration scale `a₀ ~ cH`
- the radial acceleration relation and the baryonic Tully–Fisher relation (BTFR)

---

## The two tracks

GD has a dual-track structure that must be kept clear. The detailed revision lens currently lives in `old_notes/gd_dual_track_synthesis_and_revision_lens.md`.

| Track | What it does | Key language |
|---|---|---|
| **Causal / interpretive** | Equivalence Principle, Alice/Bob horizon crossing, the "Leap of Faith" thought experiment | "Collapse may be re-read as cosmological history from the interior" |
| **Geometric / exact** | FLRW → areal radius → PG form → 5D de Sitter embedding | `F = Hr`, shell relation `r = a(τ)` |

The shell/horizon is the **privileged matching locus** where these two descriptions are compared by a duality map. The strongest current slogan:

> **Embedding is ontic. Scaling is intrinsic. Perspective is epistemic.**

---

## The triple identity

The project now points toward a single underlying structure appearing in three guises. The current public note is `notes/horizon_triple_identity.md`; an earlier strong-hypothesis version lives in `old_notes/gd_triple_identity_and_strong_hypothesis.md`.

```
L  ↔  H  ↔  Σ
```

- `L = √(3/Λ)` — the global de Sitter curvature radius
- `H` — the observer's causal horizon
- `Σ` — the timelike matching shell `r = a(τ)`

In pure de Sitter these scales coincide. The **strong GD hypothesis** is that this coincidence is not an accident — it is the signature of one underlying throat geometry, read through different foliations, matching structures, and causal standpoints.

---

## The square-root law

The throat geometry produces a natural MOND-like mixing law. Two curvature scales are present at the throat:

```
k_M ~ g_N / c²     (local baryonic source)
k_H ~ H / c        (global throat curvature)
```

The simplest mixed scalar is `c²√(k_M k_H) = √(g_N cH)`.

This is not merely a dimensional argument. A functional-equation proof shows it is the **unique** law consistent with the listed assumptions in `notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md`:

1. No new dimensionful scale
2. Homogeneity
3. Recursive self-duality under exchange of local and global sectors
4. Exact deep-regime scale invariance (no residual `ln r` modulation)

For a point-mass baryonic source, this gives:

```
g_eff(r) ~ √(GMcH) / r     →     v⁴ ~ GMcH
```

Flat rotation curves and the BTFR follow immediately. The exponent `1/2` is selected by symmetry, not fit to data.

---

## Research plan

### Phase 0 — Foundation (complete)
The original paper. Establishes the PG rewriting of flat FLRW, the shell relation, the infall function, the singularity-deferral mechanism, the 5D de Sitter embedding (Appendix D), and a numerical estimate of `Λ`.

**Key file:** `gd1.html`

---

### Phase 1 — Conceptual sharpening (complete)

| Task | Status | Note |
|---|---|---|
| Dual-track structure: causal vs geometric | Done | `old_notes/gd_dual_track_synthesis_and_revision_lens.md` |
| Triple identity `L ↔ H ↔ Σ` | Done | `notes/horizon_triple_identity.md`; archival strong version in `old_notes/gd_triple_identity_and_strong_hypothesis.md` |
| Geometric hierarchy clarification (5D Minkowski → 4D dS → FLRW/PG) | Done | `old_notes/gd_embedding_and_matching_shell_clarification.md`; public note in `notes/pg_flow_from_5d_desitter_embedding.md` |
| Heuristic throat-curvature mixing derivation | Done | `old_notes/gd_throat_curvature_mixing_note.md` |
| Self-duality selection of the square-root exponent | Done | `old_notes/gd_recursive_throat_self_duality_and_square_root_law.md` |
| Functional-equation proof of the square-root law | Done | `notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md` |

---

### Phase 2 — Paper revision (in progress)

Revise `gd1.html` to reflect the dual-track structure. Draft rewrites of all sections exist in `old_notes/`.

| Task | Status | Note |
|---|---|---|
| Section-by-section revision lens | Done | `old_notes/gd_dual_track_synthesis_and_revision_lens.md` (§ "Section-by-section revision") |
| Sections 1–4 draft rewrite | Done | `old_notes/GD_sections_1_4_draft.md` |
| Sections 5–8 draft rewrite | Done | `old_notes/GD_sections_5_8_draft.md` |
| Merge drafts into `gd1.html` | **TODO** | Apply edits, publish |

Key editorial priorities from the synthesis note:
- Add a dual-track subsection early in the paper
- Separate coordinate identity (`r = a` on shell) from duality map (`a ↔ 1/r`)
- Label each passage: causal interpretation / exact geometry / duality map / open conjecture
- Fence the perspective analogy as interpretive, not derivational

---

### Phase 3 — Tensorial realization (next frontier)

The square-root law is proved at the level of symmetry-constrained law selection. The missing step is identifying the **exact geometric object** whose dynamics realize it.

| Open problem | Description |
|---|---|
| **P1: Tensorial derivation** | Derive `g_eff ~ √(g_N cH)` from a genuine geometric invariant (extrinsic curvature of the 4D GD hypersurface in 5D, Gauss–Codazzi, shell invariants, or perturbative weak-field limit) |
| **P2: Interpolation law** | Derive the natural interpolation function between `g ≈ g_N` (high acceleration) and `g ≈ √(g_N a₀)` (deep-MOND). GD should select this, not just reproduce the asymptotic limit. |
| **P7: Off-shell extension** | The infall function is currently exact only on the matching shell. A full interior theory requires an off-shell extension, likely via LTB or a related inhomogeneous solution. |

---

### Phase 4 — Observational tests

| Open problem | Description |
|---|---|
| **P3: Lensing** | Derive the effective metric seen by null geodesics. Reproduce galaxy–galaxy lensing and, if possible, strong-lensing constraints. GD is geometric from the outset — this is a natural target. |
| **P4: Clusters** | Determine whether throat-curvature effects strengthen in cluster environments, or whether residual unseen matter is still required. |
| **P5: Cosmological perturbations** | Scalar perturbations, structure growth, matter power spectra, and CMB acoustic structure. Most natural route: perturbations as fluctuations of the embedded 4D hypersurface in the 5D ambient space. |
| **P6: Thermodynamic reconciliation** | Show that the throat geometry naturally acquires a thermodynamic / information-theoretic interpretation consistent with Verlinde and Padmanabhan. The throat should emerge as both a geometric matching locus and a causal boundary. |

A "skeptic's checklist" of what the broader community would need to be convinced is in `old_notes/todos.md`.

---

## The five decisive research questions

The entire program reduces to:

1. Can `g_eff ~ √(g_N cH)` be **derived tensorially** from throat geometry?
2. What is the **unique natural interpolation law** between Newtonian and deep-MOND regimes?
3. **What metric do photons see**, and does it reproduce observed lensing?
4. How do **local baryonic perturbations** modify the embedded hypersurface?
5. How do **thermodynamic horizon arguments** arise as the coarse-grained face of the same throat geometry?

---

## Prior art this program synthesizes

| Contributor | What they found | GD's take |
|---|---|---|
| **de Sitter** | 4D de Sitter as a hyperboloid in 5D Minkowski | The throat/waist of this hyperboloid is the privileged horizon |
| **Milgrom** | Empirical scale `a₀ ~ cH`; deep-MOND law | GD derives the scale from throat curvature rather than postulating it |
| **McGaugh** | Radial acceleration relation; BTFR | These are target observables the geometric derivation must recover |
| **Verlinde** | de Sitter horizon and entropy relevant to galaxy dynamics | GD agrees with the horizon insight; provides the geometric bridge explaining *why* |
| **Padmanabhan** | Gravity and cosmology emergent from holographic bookkeeping at causal boundaries | GD reinterprets the boundary as the concrete throat geometry |

---

## File index

| File | Description |
|---|---|
| `index.html` | Public landing page, publication roadmap, and open-problem scoreboard |
| `gd1.html` | Current public GD I paper and canonical HTML5 paper skeleton for the series |
| `note.html` | Client-side Markdown renderer for current public notes |
| `leap-of-faith.html` | Standalone interactive Alice/Bob descent presentation |
| `notes/pg_flow_from_5d_desitter_embedding.md` | Public note on PG flow from the 5D de Sitter embedding |
| `notes/horizon_triple_identity.md` | Public note on the horizon triple identity |
| `notes/gd2_horizon_triple_identity_outline.md` | GD II outline |
| `notes/gd3_throat_curvature_and_galaxy_law_outline.md` | GD III outline |
| `notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md` | Functional-equation proof (theorem-style) of the unique mixed law |
| `notes/gd_thermodynamic_reconciliation_outline.md` | Planned thermodynamic reconciliation outline |
| `old_notes/gd_unification_prospectus.md` | Archival research prospectus: mission, open problems, research questions |
| `old_notes/gd_dual_track_synthesis_and_revision_lens.md` | Archival dual-track structure and section-by-section paper revision notes |
| `old_notes/GD_sections_1_4_draft.md` | Proposed rewrite of GD I sections 1–4 |
| `old_notes/GD_sections_5_8_draft.md` | Proposed rewrite of GD I sections 5–8 |
| `old_notes/todos.md` | Skeptic's checklist: what the community would need to be convinced |
| `old_notes/gd_adjacent_research_tracks.md` | Adjacent research landscape: citations, competitors, and convergences across 11 tracks |
| `src/css/` | CSS import manifest and small semantic/module stylesheets |
| `src/js/` | Browser scripts for contact links, dark mode, and canvas slideshow |
| `images/` | Paper figures and banner images |
