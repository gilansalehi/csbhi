# The Reciprocal Interior as a Conformal Crossover: A Comparison of Prior Geometries

*Literature comparison — the three-region causal decomposition and its precedents.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI), including refinement of the decomposition.

**Date:** 2026-08-04.

**Prerequisite:** [GD I](gd1.html); [Black-Hole Cosmology: Lineage, Mechanisms, and CSBHI](note.html?src=black_hole_cosmology_lineage) (the broad who-did-what survey; this note assumes it and does not repeat it).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

**Status:** The comparison is factual and cited. The CSBHI geometry it compares against is a *conceptual decomposition*, not a completed metric; the open problem it sharpens is stated in §7. Tiered **[E]** established, **[C]** CSBHI conjecture, **[O]** open.

---

## Abstract

A picture emerged from review of the modular note: the black-hole interior in CSBHI is not one region but **three**, and most of the difficulty in earlier drafts came from trying to identify regions that should be kept separate.

\[
\text{parent FLRW} \xrightarrow{\text{collapse}} \text{Schwarzschild-type exterior}
\xrightarrow[\;r_B=1\;]{\text{horizon}} \underbrace{\text{reciprocal interior patch}}_{\text{Alice falls forever, }r_B\to 0\text{ as }\tau\to\infty}
\xrightarrow[\;\text{conformal}\;]{\text{crossover}} \underbrace{\text{child Big Bang}}_{\text{low-Weyl}} \to \text{child FLRW}.
\]

The three regions are (1) the **event horizon** where Alice enters; (2) the **reciprocal interior patch** she falls through, whose endpoint \(r_B\to0\) is reached only as her proper time \(\tau\to\infty\); and (3) the **child universe**, whose Big Bang is the *conformal future boundary* of that patch, not an event on Alice's worldline. Alice never arrives at the child's Big Bang; she approaches a boundary forever, and after conformal rescaling that same boundary is the child's finite past.

Read this way, CSBHI is a **collage of established constructions**, each supplying one region:

- the **Schwarzschild interior as a distinct cosmological patch** (Kantowski–Sachs, \(r\) turned timelike) — region 2 is a known object, not the child universe [E];
- the **de Sitter endpoint** of regular-black-hole models (Bardeen, Hayward, Dymnikova) — region 2's future is vacuum-dominated rather than a Weyl-divergent crunch [E];
- **Penrose's conformal crossover** (CCC) and the **isotropic-singularity** formalism (Tod, Goode–Wainwright) — region 3 is seeded by a conformally smooth, low-Weyl boundary [E].

CSBHI's distinctive move is the reciprocal ansatz \(a=1/r\), which turns the interior endpoint into an **asymptotic conformal future boundary reached at infinite proper time**, rather than a finite-density **bounce** (Popławski, Gaztañaga, Frolov–Markov–Mukhanov) or a Weyl-dominated **curvature singularity** (generic Schwarzschild interior). This positions CSBHI as, in effect, a **CCC-style crossover localized at the end of a single black-hole interior** — a *branching* aeon structure keyed to black holes, where CCC has a single global succession.

The payoff is that the notorious horizon-matching problem is relocated: the horizon need only admit Alice smoothly into region 2; the cosmological birth happens at the far end, as a conformal continuation. The residual is correspondingly sharp (§7): *can the \(r_B\to0,\ a_A\to\infty\) de Sitter boundary of the reciprocal patch be conformally continued as the \(a_C\to0\) low-Weyl Big Bang of a child FLRW universe?*

---

## 1. The geometry to be compared, stated carefully

The decomposition above is worth stating precisely, because its value is exactly in the distinctions it refuses to collapse.

- **Region 1 — the horizon, \(r_B=1\).** The involution result fixes this as the self-dual point of \(a=1/r\); it is where Alice's infall parametrization crosses from exterior to interior. It is a null surface, crossed smoothly by an infaller.
- **Region 2 — the reciprocal interior patch, \(0\lt r_B\lt 1\).** A dynamical region in which Bob's radial label has become the evolution parameter. Under \(a=1/r\), Alice's scale \(a_A=1/r_B\) grows without bound as \(r_B\to0\), and GD1 finds \(r_B\to0\) is reached only as \(\tau\to\infty\), with *finite* limiting curvature (\(\mathcal R\to4\Lambda\)). This endpoint is therefore a **conformal future boundary**, not a point on Alice's worldline.
- **Region 3 — the child universe.** An FLRW cosmology whose initial (Big Bang) boundary is *identified*, after conformal rescaling, with region 2's future boundary. Its scale \(a_C\to0\) at that boundary; its history runs forward from there.

Two cautions inherited from the review thread, kept explicit so the note does not overclaim:

1. **\(r_B\to\infty\) is not literally the parent's Big Bang.** It is the exterior direction toward Bob / spatial infinity. Spatial infinity, the CMB surface on Bob's past light cone, and a spacelike Big-Bang boundary are three different geometric objects. Any relation between them is a *map to be constructed*, not an identity to be assumed. **[O]**
2. **The de Sitter future boundary is not a curvature singularity.** GD1's endpoint has finite asymptotic curvature reached after infinite proper time — a conformal future boundary in the de Sitter sense, the same kind of surface CCC rescales. Calling it a "singularity" (as the earlier modular draft did) is wrong. **[E/C]**

The rest of the note asks, region by region, *who has built this before*, and what CSBHI adds.

---

## 2. Region 2 is a known object: the Schwarzschild interior as an anisotropic cosmology

That the region between horizon and singularity is a *cosmology in its own right* — not the child universe, and not merely "inside" — is standard general relativity, and naming it dissolves much of the earlier confusion.

Inside a Schwarzschild black hole the radial and temporal roles invert: the exterior's timelike Killing field becomes spacelike, and the areal radius \(r\) becomes a **time** coordinate. The interior metric is a **Kantowski–Sachs** cosmology — homogeneous, anisotropic, with two scale factors (one longitudinal, one for the two-sphere) — evolving toward a spacelike singularity in its future [1,2]. **[E]**

This has three consequences for CSBHI.

- **It legitimizes the three-region split.** Region 2 is a genuine, independently-studied cosmological patch. Identifying it directly with either the exterior or the child universe was a category error; the literature already treats it as its own dynamical spacetime.
- **It names what \(a=1/r\) must change.** In the *standard* Schwarzschild interior the Weyl/tidal field sources the shear of the Kantowski–Sachs congruence and strengthens Raychaudhuri focusing onto a Weyl-dominated spacelike singularity [1] — the BKL endpoint. CSBHI's reciprocal interior is *isotropic* (shear-free, \(\sigma=0\)) by construction, and its endpoint is the de Sitter conformal boundary of §3, not the Kantowski–Sachs crunch. So the CSBHI claim is precisely that \(a=1/r\) replaces the anisotropic Weyl-dominated interior with an isotropic vacuum-dominated one. That replacement is the load-bearing conjecture, and §2 makes clear it is a *departure from* the generic Schwarzschild interior, not an automatic feature of it. **[C]**
- **It connects to the recursion-stability question** raised in the WCH thread: whether shear is driven to zero (isotropization) or amplified (BKL) across region 2 is exactly the Kantowski–Sachs shear dynamics, now the sharp technical form of "does the reciprocal map preserve homogeneity and isotropy."

---

## 3. Region 2's endpoint: three ways to avoid the crunch

Having a distinct interior patch, one must say what happens at its end. The literature offers three strategies; CSBHI is a fourth, closest to the first.

**(a) A de Sitter core (regular black holes).** Bardeen, Hayward, and Dymnikova replace the central singularity with a **de Sitter core**: a vacuum-like region with equation of state \(p=-\rho\) whose negative pressure repels infalling matter and caps the curvature [3,4,5]. Dymnikova's model becomes asymptotically de Sitter as \(r\to0\). **[E]** *Difference from CSBHI:* these cores sit at *finite* areal radius and are reached in *finite* proper time, and they require exotic core matter (nonlinear electrodynamics, energy-condition violation near the core). CSBHI's de Sitter is the *asymptotic future* (\(r_B\to0\), \(\tau\to\infty\)) of a standard matter–radiation–\(\Lambda\) interior, with no new core fluid and no separate transition layer.

**(b) A limiting-curvature / high-density transition.** Frolov–Markov–Mukhanov attach Schwarzschild to de Sitter across a short spacelike layer once a postulated curvature bound is hit [lineage §6]. **[E]** *Difference:* a new fundamental scale triggers the core; CSBHI introduces none.

**(c) A finite-density bounce.** Popławski (Einstein–Cartan torsion) [6,7], Gaztañaga (quantum-exclusion equation of state), and the bounce cosmologies reverse the collapse at a *minimum radius* and expand into the child directly [lineage §§12,14]. **[E]** *Difference:* a bounce has a minimum scale factor and a finite-time reversal; CSBHI has **no minimum and no reversal** — \(a_A\) grows monotonically to the conformal boundary. The child is reached by conformal *continuation*, not by bouncing through a throat.

**(d) CSBHI: an asymptotic conformal future boundary.** The reciprocal interior neither crunches (a) nor bounces (c); it *runs to a de Sitter conformal boundary at infinite proper time*, exactly the kind of surface Penrose rescales. This is the pivot that lets region 2 connect to region 3 by a **conformal crossover** rather than a junction or a bounce. **[C]**

---

## 4. Region 3 and the crossover: CCC and the isotropic singularity

The mechanism that turns a smooth future boundary into a next Big Bang already exists, in detail, and it is Penrose's.

**Conformal Cyclic Cosmology.** In CCC the future conformal infinity of one aeon joins smoothly, across a spacelike crossover 3-surface, to the conformally stretched Big Bang of the next; once rest mass has decayed and only conformally invariant physics survives, absolute scale loses meaning and the exponentially expanded future rescales into a dense beginning [8,9]. Meissner and Penrose's 2025 treatment makes the crossover occur naturally during a gravitational-wave-dominated epoch [8]. **[E]**

**The low-Weyl boundary made rigorous.** The condition that the new beginning be smooth is the **Weyl Curvature Hypothesis**, and its precise form is the **isotropic (conformal) singularity** of Goode–Wainwright and Tod: a singularity that is a *regular hypersurface modulo conformal rescaling*, with Weyl curvature bounded (or vanishing) there [10,11]. This is exactly the surface CSBHI needs at the child's birth, and it is exactly what a vacuum-dominated, matter-and-Weyl-diluted de Sitter future boundary provides. **[E]**

**CSBHI as a localized CCC crossover.** The structural claim is now clean. CSBHI's region-2-to-region-3 transition *is* a CCC crossover — future conformal boundary of one geometry conformally continued to the low-Weyl Big Bang of the next — with two differences of scope:

- **Locale.** CCC's crossover is *global*: the entire evaporated future of a whole aeon becomes the whole next aeon. CSBHI's is *local*: the conformal future of a *single black-hole interior patch* becomes *one* child universe. Every black hole with a reciprocal interior carries its own crossover. **[C]**
- **Topology of succession.** CCC is a single linear chain of aeons. CSBHI, by localizing the crossover to black holes, gives a **branching tree** of universes — the reproduction structure of Smolin and Popławski, but with CCC's conformal crossover as the birth mechanism instead of a bounce. **[C]**

That synthesis — CCC's crossover + black-hole-localized reproduction + a de Sitter regular endpoint + the Schwarzschild interior patch — is the "collage" the picture assembles.

---

## 5. Why the collage removes a real obstruction

The earlier CSBHI drafts kept failing to match a *Schwarzschild horizon* directly to an *FLRW Big Bang*, and the matter-content review compounded it. The three-region decomposition explains why that matching was the wrong demand:

- The horizon (region 1) only has to **admit Alice smoothly into region 2** — a null-crossing condition, not a cosmological-birth condition. This is unproblematic for an infaller.
- The **cosmological birth is at the other end**, as the conformal continuation of region 2's de Sitter boundary into region 3. It never had to happen at the horizon.

So the horizon map and the birth map are *different maps at different surfaces*, and conflating them created an impossible junction. This is the concrete conceptual gain, and it is independent of whether the modular story of the prior note survives. **[C]**

---

## 6. Comparison table

| Programme | Interior endpoint | Birth mechanism | Relation to the three-region picture |
|---|---|---|---|
| Oppenheimer–Snyder (1939) | Curvature singularity | None (collapse only) | Supplies region 2's FLRW-collapse precedent; no child |
| Schwarzschild interior / Kantowski–Sachs [E] | Weyl-dominated spacelike singularity | None | *Is* region 2, in its generic (anisotropic) form CSBHI must modify |
| Regular BH — Bardeen/Hayward/Dymnikova | de Sitter core at finite \(r\) | Regular center, exotic core matter | Region 2 endpoint, but finite-\(r\) and reached in finite time |
| Frolov–Markov–Mukhanov (1989) | de Sitter core via curvature bound | High-curvature transition layer | Region 2 endpoint via a postulated scale |
| Popławski EC (2010–2016) | Nonsingular torsion bounce | Finite-radius bounce into closed child | Alternative to §3(d): bounce, not conformal boundary |
| Gaztañaga (2022–2025) | Exclusion-driven bounce | Finite-radius bounce | Alternative to §3(d): bounce, not conformal boundary |
| Penrose CCC / Meissner–Penrose (2010–2025) | Conformal future infinity | Conformal rescaling across crossover 3-surface | *Is* the region-2→3 crossover, globally rather than per-black-hole |
| Goode–Wainwright / Tod isotropic singularity | Conformal (regular) singularity | Low-Weyl conformal boundary | Makes region 3's birth boundary rigorous |
| Smolin (1992) | Assumed bounce | Reproduction + selection | Supplies the branching-tree succession, without a metric |
| **CSBHI** | **Asymptotic de Sitter conformal boundary via \(a=1/r\)** | **Localized CCC-style conformal crossover** | **Assembles all four regions; \(a=1/r\) makes the endpoint a conformal boundary, not a bounce or crunch** |

---

## 7. The sharp open problem, and honest status

The decomposition is a **conceptual** advance, not a completed spacetime. What it buys is a much better-posed question than "match a horizon to a Big Bang." The GD2-level target is:

> **[O]** Construct the conformal continuation of region 2's future boundary into region 3. Concretely: exhibit a conformal factor \(\Omega\) and a bridging metric such that the \(r_B\to0,\ a_A\to\infty\), finite-curvature de Sitter boundary of the reciprocal interior is the \(a_C\to0\) low-Weyl (isotropic-singularity) Big Bang of a child FLRW universe — and verify that Weyl curvature is bounded across the crossover in Tod's sense, that the matter/radiation content dilutes as required, and that the crossover conserves the appropriate junction data.

Subsidiary open items, each now cleanly separated:

- **Region 1 (horizon admission):** confirm the null-crossing into region 2 is smooth for an infaller — expected, but not yet written as a map. **[O]**
- **Region 2 (isotropization):** show shear is driven to zero across the reciprocal interior rather than amplified (the Kantowski–Sachs vs. BKL question of §2), i.e. that homogeneity and isotropy are *attracting*. This is the recursion-stability problem from the WCH thread, in its sharp form. **[O]**
- **Parent-side identification:** state the map (if any) relating \(r_B\to\infty\), Bob's observed CMB surface, and any parent Big-Bang boundary. Not assumed here. **[O]**

**Honest status.** No metric has changed hands; this note reorganizes existing CSBHI claims against the literature and shows they compose into a recognizable — indeed, largely precedented — geometry. The value is diagnostic: it tells us CSBHI is not competing with CCC, regular black holes, or Einstein–Cartan cosmology so much as *recombining* them, with \(a=1/r\) as the specific ingredient that selects a conformal crossover over a bounce. Whether that recombination closes into a solution is exactly the calculation in the box above.

---

## References

1. *Cosmology from Schwarzschild black hole revisited*, Phys. Rev. D **110**, 044001 (2024), [arXiv:2407.14130](https://arxiv.org/abs/2407.14130); on the Schwarzschild interior as a Kantowski–Sachs cosmology with \(r\) timelike and a spacelike future singularity.
2. Two-oscillator Kantowski–Sachs model of the Schwarzschild interior, *Gen. Relativ. Gravit.* **48**, 102 (2016).
3. J. M. Bardeen, "Non-singular general-relativistic gravitational collapse," in *Proc. GR5* (Tbilisi, 1968); S. A. Hayward, "Formation and evaporation of non-singular black holes," *Phys. Rev. Lett.* **96**, 031103 (2006), [arXiv:gr-qc/0506126](https://arxiv.org/abs/gr-qc/0506126).
4. I. Dymnikova, "Vacuum nonsingular black hole," *Gen. Relativ. Gravit.* **24**, 235 (1992).
5. V. P. Frolov, "Notes on non-singular models of black holes," [arXiv:1609.01758](https://arxiv.org/abs/1609.01758).
6. N. J. Popławski, "The universe as a closed anisotropic universe born in a black hole," [arXiv:2007.11556](https://arxiv.org/abs/2007.11556).
7. N. J. Popławski, "Universe in a black hole in Einstein–Cartan gravity," *Astrophys. J.* **832**, 96 (2016), [arXiv:1410.3881](https://arxiv.org/abs/1410.3881).
8. K. A. Meissner and R. Penrose, "The Physics of Conformal Cyclic Cosmology," (2025), [arXiv:2503.24263](https://arxiv.org/abs/2503.24263).
9. R. Penrose, *Cycles of Time: An Extraordinary New View of the Universe* (Bodley Head, 2010); and the CCC crossover of lineage-note ref. 20.
10. S. W. Goode and J. Wainwright, "Isotropic singularities in cosmological models," *Class. Quantum Grav.* **2**, 99 (1985).
11. K. P. Tod, "Isotropic cosmological singularities" and "Conformal scalar fields, isotropic singularities and conformal cyclic cosmologies," [arXiv:1312.2059](https://arxiv.org/abs/1312.2059); see also Tod, *Class. Quantum Grav.* **20**, 521 (2003).
12. Claude (Anthropic) & Codex (OpenAI), [Black-Hole Cosmology: Lineage, Mechanisms, and CSBHI](note.html?src=black_hole_cosmology_lineage), this project — the broad survey this note refines.
