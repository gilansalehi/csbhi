# The Weyl Curvature Hypothesis as a Fixed Point of Recursive Black-Hole Cosmology

*Working note — the CSBHI reading of Penrose's low-entropy Big Bang: not a fine-tuned initial condition, but a consequence of being born from the smooth collapse of a parent overdensity, inherited down the lineage.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — reviewed; this revision rebuilds the argument on the collapse geometry after Codex flagged that the earlier version wrongly identified the child's Big Bang with the parent's de Sitter future infinity.

**Date:** 2026-08-05.

**Status:** Structural argument, revised after review. The spine (low-Weyl birth from smooth collapse; the same condition as a small seed amplitude) is a correspondence resting on Oppenheimer–Snyder, Wald's Bianchi no-hair, and the reciprocal-interior conformal weight. No field equation is solved; the make-or-break Weyl-to-\(\zeta\) transfer (§7.2) is not performed. Tiered **[E]** established, **[C]** correspondence, **[O]** open, **[S]** speculative — with the entropy reading and the fixed-point convergence explicitly [S].

**Prerequisites:** [GD I](gd1.html); [The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover](note.html?src=shear_free_interior_weyl_stress_identity); [Gravitational Entropy and Conformal Scaling](note.html?src=gravitational_entropy_and_conformal_scaling); [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), \(G\) retained. \(\Psi_2\) the single spherical Weyl scalar; \(\hat\Psi_2\) its conformally rescaled value; \(R_S\) parent horizon radius; \(R_{\rm dS}=\sqrt{3/\Lambda}\).

---

## 1. The hypothesis, and the puzzle it names

Penrose's **Weyl Curvature Hypothesis** (WCH) is the observation that the Big Bang was gravitationally *special*: the Weyl tensor was near zero there, while the Ricci part was large. Matter was hot and dense, but the gravitational field was maximally un-excited — smooth, homogeneous, low gravitational entropy. The future is the reverse: matter clumps, Weyl grows without bound toward black-hole singularities. The **arrow of time is the growth of Weyl**, and the Big Bang's near-zero Weyl is the low-entropy past that makes the arrow exist at all.

The puzzle is the *specialness*. In the space of initial conditions, low-Weyl states are absurdly rare — Penrose's estimate is one part in \(10^{10^{123}}\). WCH states the condition; it does not explain why it holds. Inflation does not close the gap, on Penrose's own analysis, because inflationary smoothing *presupposes* a sufficiently smooth (low-Weyl) patch to begin with: it propagates the special condition rather than producing it.

This note proposes that recursive black-hole cosmology (CSBHI) supplies exactly the missing ingredient: a reason the low-Weyl condition is not fine-tuned but **generic** — a child is born from the smooth collapse of a broad parent overdensity, so its low-Weyl start is a property of *how it formed*, inherited down the lineage rather than selected at a first moment.

---

## 2. The claim

> A child universe is born at the **finite collapse epoch** of a parent overdensity — the moment its black-hole region forms — not at the parent's de Sitter future infinity. It is born low-Weyl because it forms from the collapse of a **smooth, broad overdensity**: homogeneous collapse has an exactly FLRW interior, \(\Psi_2\equiv0\) (Oppenheimer–Snyder). The Weyl Curvature Hypothesis is therefore not a selected initial state but a consequence of *how black holes form* in a universe whose perturbations are small — and, because small perturbations are themselves what a smoothly-born universe produces, low Weyl at birth is a fixed point of the recursion rather than a first-moment fine-tuning.

*Correction from review.* An earlier version of this note identified the child's Big Bang with the parent's **de Sitter future infinity**, importing the CCC aeon boundary. That is the wrong surface: the collapse-cohort construction births the child at the parent's finite collapse time, and \(\mathrm{parentCollapseTime}\neq\mathrm{parentFutureInfinity}\). The mechanism below is rebuilt on the collapse geometry itself.

---

## 3. The mechanism

**(a) Smooth collapse gives a low-Weyl child — the main mechanism. [E→C]** The Weyl tensor of a homogeneous dust interior vanishes identically: Oppenheimer–Snyder collapse has an exactly FLRW interior, \(\Psi_2\equiv0\). A broad, low-amplitude overdensity — precisely the compensated ΛLTB curvature peak of the collapse-benchmark note — collapses to an interior that is smooth on large scales, so the child inherits low Weyl at birth, with the overdensity's residual small-scale structure as its primordial seed. This is the WCH condition, produced by the collapse rather than imposed.

**(b) Cosmic no-hair, in a supporting role. [E]** Wald's theorem — proven for spatially **homogeneous Bianchi** models with \(\Lambda>0\) under the dominant and strong energy conditions, *not* for arbitrary inhomogeneous regions — ensures the expanding background between overdensities approaches de Sitter and dilutes away. Its role here is to **isolate** the collapsing region (the compensated ΛLTB / Einstein–Straus picture), so the child forms as a clean FLRW patch uncontaminated by the surrounding expansion. It is not itself the source of the child's low Weyl; that is the collapse smoothness of (a).

**(c) The child's own future stays conformally regular. [E]** So that the recursion can continue, the child's *own* de Sitter future must be a regular conformal surface when its black holes sit on it. The [crossover note](note.html?src=shear_free_interior_weyl_stress_identity) supplies this: the reciprocal interior's Weyl dilutes at conformal weight \(a^{-2}\), so the rescaled Weyl is finite there (verified numerically). This is a consistency condition on the child→grandchild step, not part of why the child itself is born low-Weyl.

**The fixed point.** Small perturbations ⟺ broad, shallow overdensities ⟺ low-Weyl collapse interiors ⟺ low-Weyl children carrying small perturbations. Low Weyl and small amplitude are the same fixed point of the recursion — which is why this note and the [amplitude note](note.html?src=primordial_amplitude_as_aeon_horizon_ratio) collapse into a single calculation: the Weyl-to-\(\zeta\) transfer across the collapse surface. That the fixed point *exists* (that the seeding map converges rather than relocating the tuning) is the deep open claim, tiered **[S]**.

---

## 4. The arrow and the entropy, without information loss

Penrose's arrow is the growth of Weyl; his hardest move is the **reset** — how the next aeon starts at low entropy despite the parent ending at enormous entropy. His answer is information destruction at black-hole singularities, removing entropy from the phase space. It is anti-unitary and widely rejected.

CSBHI offers a reset that destroys nothing, by separating two entropies. **This section is interpretive [S] — a proposed thermodynamic reading, not an established result.**

- **Occupied entropy** (how excited the gravitational field currently is, \(\sim\) Weyl) is low at each birth, because the child is born from smooth collapse — \(\Psi_2\simeq0\) (§3a).
- **Available entropy** (the maximum the universe can reach, its holographic horizon budget) is *large* and is set by the parent: it is the black hole's \(S_{\rm BH}\), which — **conditional on the matching \(\Lambda=3/R_S^2\)** — equals the child's de Sitter horizon entropy \(S_{\rm dS}\).

The child is born far below its ceiling — low occupied entropy, high available entropy — which *is* a thermodynamic arrow. The proposal is that no entropy is destroyed: the parent's black-hole entropy is not erased but **becomes the child's available phase space**, so globally entropy still increases while each newborn locally sees a clean slate. This dissolves Penrose's information-loss step *if* it holds, but "black-hole entropy becomes child phase space" is an interpretation to be justified, not a derived identity.

---

## 5. What this removes from Penrose's own construction

CCC and CSBHI agree that the low-Weyl Big Bang is inherited from a prior aeon's smooth future via a reciprocal conformal relation. CSBHI removes the two assumptions CCC is attacked for:

| CCC requires | CSBHI replaces it with |
|---|---|
| all black holes evaporate before \(I^+\) | black holes *are* the crossover cells; no evaporation needed |
| information destroyed at singularities (anti-unitary) | information passes into the child; entropy sequestered, not erased |
| rest mass decays to zero for conformal invariance at \(I^+\) | massive matter falls behind horizons (into children); no free mass on \(I^+\), no mass-decay posit **[C]** |
| reciprocal conformal factor \(\Omega\to1/\Omega\) posited at the boundary | \(a=1/r\) — CSBHI's founding ansatz (a correspondence, not derived), but a concrete geometric relation between physical scales rather than a boundary decree |

The last row is the structural gift, stated honestly: \(a=1/r\) is **not derived** — it is CSBHI's posited ansatz, at the same epistemic tier as Penrose's \(\Omega\to1/\Omega\). The difference is in *kind*: Penrose's inversion is imposed at an abstract conformal boundary, whereas \(a=1/r\) is a geometric relation between the infalling radius and the interior scale — a candidate *physical* origin for the same inversion, to be tested, not a theorem.

---

## 6. The observational reading

We are the interior of a collapse — descendants of the limiting formation cohort ("Precursor Alice"). Two facts of the night sky are then candidate inheritances:

- **Large-scale isotropy and homogeneity** (the smooth CMB, the cosmological principle): the smoothness of the broad parent overdensity we collapsed from, transmitted as our low-Weyl initial condition.
- **The CMB fluctuation spectrum** (\(\sim10^{-5}\)): the residual small-scale structure of that overdensity, transferred into our curvature perturbation.

This makes the framework answerable, but only through the calculation it has so far skipped: the [amplitude note](note.html?src=primordial_amplitude_as_aeon_horizon_ratio) gives a candidate *scaling* for the seed, while the actual amplitude and spectral shape require the Weyl-to-\(\zeta\) transfer across the collapse surface. Whether that reproduces the observed \(10^{-5}\) and \(n_s\simeq0.965\) is the sharp quantitative test — not yet passed.

---

## 7. Status and open problems

**Established [E]:** homogeneous dust collapse has \(\Psi_2\equiv0\) (Oppenheimer–Snyder); Wald's no-hair for homogeneous **Bianchi** models with \(\Lambda>0\); \(S_{\rm BH}=S_{\rm dS}\) *conditional* on \(\Lambda=3/R_S^2\); the conformal weight \(-2\) giving a finite rescaled seed at the child's own future.

**Correspondence [C]:** the recursive birth map (child Big Bang = parent **collapse epoch**, via \(a=1/r\)); "smooth collapse → low-Weyl child"; "collapsing regions = children" as the generation mechanism.

**Open [O]:**
1. **Inhomogeneous no-hair.** CSBHI needs the split "smooth-or-collapse," weaker than the full inhomogeneous no-hair conjecture, but still an assumption, not a theorem. (Clifton–Ferreira show discrete-matter cosmologies can approach FRW large-scale *dynamics* while keeping different optical behavior — they do **not** establish a parent future-infinity Kottler lattice, which this note no longer claims.)
2. **Weyl-to-\(\zeta\) transfer.** The make-or-break calculation: transfer the collapsing overdensity's residual Weyl into the child's curvature perturbation on the ΛLTB benchmark, and test \(10^{-5}\) and \(n_s\simeq0.965\). A local Weyl scalar is *not* \(\zeta\) by dimensional normalization.
3. **Entropy accounting [S].** The occupied/available split of §4 is a heuristic; it needs a rigorous phase-space statement, and "BH entropy becomes child phase space" is interpretation.
4. **The mass argument [C→S].** "Free mass ends behind horizons" needs to be made precise before it replaces mass-decay.

**Speculative [S]:** that the recursion has a genuine fixed point — that the parent-to-child seeding map *converges* on the low-Weyl / small-amplitude condition rather than merely relocating the tuning — is the deep claim, and it is not proven.

---

## 8. Result

> Read through recursive black-hole cosmology, the Weyl Curvature Hypothesis is a consequence of *how black holes form*: a child is born at its parent's finite collapse epoch, from a broad smooth overdensity whose interior is low-Weyl (homogeneous collapse gives \(\Psi_2\equiv0\)), so its Big Bang is smooth without fine-tuning. Because small perturbations are exactly what a smoothly-born universe produces, low Weyl at birth and the small seed amplitude are one condition — plausibly a fixed point of the recursion, though its convergence is unproven. The framework removes CCC's contested assumptions (no mandatory evaporation, a unitary entropy reading, no imposed mass-decay) and offers \(a=1/r\) as a candidate physical origin for the reciprocal crossover. What it does **not** yet have is the number: the low-Weyl claim and the amplitude both reduce to one unperformed calculation — the Weyl-to-\(\zeta\) transfer across the collapse surface — and that, not the narrative, is what will decide whether this is a result.

---

## References

1. R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, eds. Hawking & Israel (Cambridge, 1979); R. Penrose, *Cycles of Time* (Bodley Head, 2010).
2. R. M. Wald, "Asymptotic behavior of homogeneous cosmological models in the presence of a positive cosmological constant," *Phys. Rev. D* **28**, 2118 (1983).
3. R. W. Lindquist and J. A. Wheeler, *Rev. Mod. Phys.* **29**, 432 (1957); T. Clifton and P. G. Ferreira, "Archipelagian Cosmology," *Phys. Rev. D* **80**, 103503 (2009), [arXiv:0907.4109](https://arxiv.org/abs/0907.4109).
4. [The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover](note.html?src=shear_free_interior_weyl_stress_identity); [Gravitational Entropy and Conformal Scaling](note.html?src=gravitational_entropy_and_conformal_scaling); [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet), this project.
5. G. Salehi, [GD I](gd1.html), this project.
