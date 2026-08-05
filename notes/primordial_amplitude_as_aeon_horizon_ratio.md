# The Primordial Amplitude as a Ratio of Aeon Horizons

*Working note — a candidate scaling for the primordial seed: the child's inherited tidal amplitude tracks the ratio of parent-to-child horizon scales. This is a dimensionless tidal measure, not yet the curvature perturbation; the Weyl-to-\(\zeta\) transfer that would make it an amplitude is the open calculation.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — reviewed; this revision incorporates the corrections (§6 lists the open calculation).

**Date:** 2026-08-05.

**Status:** Candidate correspondence, demoted after review. The exact Kottler Weyl and the horizon-ratio *scaling* are sound; the claim that this equals the curvature perturbation \(\zeta\) is **not** established — it requires a transfer calculation not performed here — and an earlier "second derivation" from the conformal weight was withdrawn as algebraically wrong. Tiered **[E]** established, **[C]** candidate correspondence, **[O]** open.

**Prerequisites:** [The Weyl Curvature Hypothesis as a Fixed Point of Recursive Black-Hole Cosmology](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis); [The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover](note.html?src=shear_free_interior_weyl_stress_identity); [Gravitational Entropy and Conformal Scaling](note.html?src=gravitational_entropy_and_conformal_scaling).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), \(G\) retained. Generation \(n\) has cosmological constant \(\Lambda_n\) and de Sitter horizon \(R_n=\sqrt{3/\Lambda_n}\). A black hole of radius \(R_S\) in generation \(n\) births generation \(n{+}1\) with \(\Lambda_{n+1}=3/R_S^2\), so \(R_{n+1}=R_S\). \(\zeta\) is the gauge-invariant curvature perturbation.

---

## 1. The obligation

The [WCH note](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis) argues (in its corrected form) that the child is born low-Weyl from the smooth collapse of a parent overdensity, the residual structure of that overdensity acting as the primordial seed. It leaves one make-or-break number: that seed must reproduce the observed CMB amplitude, \(\zeta\sim10^{-5}\). Anything much larger and the child is born too lumpy to match the sky; much smaller and structure never forms. This note estimates the seed *scaling*; converting it to the amplitude is the open transfer calculation.

---

## 2. The seed, from exact Kottler [E]

A cell of the parent's fragmented future is a Kottler (Schwarzschild–de Sitter) patch: a black hole of mass \(M\) inside a cosmological horizon \(R_n=\sqrt{3/\Lambda_n}\). Its Weyl scalar is exact and carries no \(\Lambda\) — the cosmological constant is pure Ricci —

\[
\Psi_2=-\frac{GM}{r^3}.
\]

Form the dimensionless *tidal-curvature measure* — the cell Weyl against the background de Sitter curvature \(\sim R_n^{-2}\), evaluated at the cell scale \(r\sim R_n\):

\[
\epsilon_W\ \equiv\ \Psi_2\,R_n^{2}\Big|_{r\sim R_n}\ \sim\ \frac{GM}{R_n}\ =\ \frac{R_{n+1}}{2R_n},
\]

using \(R_S=R_{n+1}\). Up to the \(\tfrac12\) and \(\mathcal O(1)\) factors this is the ratio of successive horizon scales:

\[
\boxed{\ \epsilon_W\ \sim\ \frac{R_{n+1}}{R_n}\ =\ \sqrt{\frac{\Lambda_n}{\Lambda_{n+1}}}\ }\qquad\text{(candidate scaling for the seed).}
\]

**Two cautions, both from review.** (i) \(\epsilon_W\) is a *local tidal-curvature strength*, **not** the gauge-invariant curvature perturbation \(\zeta\). Converting one to the other is a transfer calculation across the collapse surface — \(\zeta(k)=T(k)\,\epsilon_W(k)\), depending on the child equation of state, the perturbation mode, and the metric/extrinsic-curvature matching — and it is not done here (§6). (ii) The measure is evaluated at the far-field cell scale \(r\sim R_n\), not at the horizon-local scale \(R_S\); a separate justification is owed for why the child inherits the weak far-field tide rather than the horizon-local curvature. (An earlier "second derivation" from the rescaled conformal-weight seed was withdrawn: \(\hat\Psi_2 R_n^2\cdot(R_S^2/R_n^2)=GM/R_S=\tfrac12\), an order-one horizon-local number, not \(R_{n+1}/R_n\) — it measured a different surface and did not confirm the scaling.) Also \(\sqrt{3/\Lambda}\) is the pure de Sitter radius, not the exact Kottler cosmological-horizon root when \(M\neq0\).

---

## 3. Why it is small — with no tuning [E→C]

Because the seeding black hole is smaller than the cosmological horizon that contains it, \(R_{n+1}<R_n\) and \(\zeta<1\) automatically. The smallness of primordial perturbations is not a fine-tuned input; it is the statement that **children are smaller than their parents.** A dilute lattice — black holes far smaller than their spacing — gives a small seed for the same reason a distant mass makes a shallow potential.

This is the amplitude analogue of the WCH result — and, with the corrected temporal identification (the child is born at the parent's *collapse epoch*, not its de Sitter future), the two are the same statement. A small tidal measure means shallow, broad overdensities, which is exactly a low-Weyl collapse interior. WCH (low Weyl at birth) and a small seed amplitude are one fact viewed twice, and both reduce to the same Weyl-to-\(\zeta\) transfer across the collapse surface.

---

## 4. The observed value as a fixed point [C]

Self-similarity closes the amplitude. If the recursion reproduces itself — each universe seeding children the way it was seeded — the ratio is constant across generations,

\[
\frac{R_{n+1}}{R_n}=A_\star\quad\text{for all }n,
\]

and \(A_\star\) is the self-reproducing amplitude. Identifying it with observation,

\[
A_\star\simeq10^{-5}\quad\Longrightarrow\quad \frac{\Lambda_{n+1}}{\Lambda_n}\simeq10^{10},
\]

i.e. each universe's cosmological constant is about ten orders larger than its parent's, and its horizon about \(10^{-5}\) of the parent's. The seeding black holes are horizon-fraction \(\sim10^{-5}\) objects — cluster-to-small-galaxy mass scales relative to the parent's Hubble radius.

The content of this move: **the observed \(10^{-5}\) stops being a free parameter and becomes a consistency condition on the inter-generational \(\Lambda\) ratio.** It is not yet a prediction of \(10^{-5}\) from first principles — that requires computing \(A_\star\) as the actual fixed point of the seeding map (§6). But it converts one tuned number into one structural relation, which is the same trade the WCH note made for the arrow of time.

A qualitative corollary [S]: \(\Lambda\) *grows* down the lineage. Our small \(\Lambda\) places us relatively high in the tree; far ancestors approach flat space, far descendants approach Planckian curvature.

---

## 5. The spectrum — speculative, and not yet a discriminator [O→S]

Amplitude is not shape, and I overstated both pieces on the first pass:

- **Large scales.** One might hope near-scale-invariance is simply propagated by the recursion. But the transfer that carries parent Weyl to child \(\zeta\) can alter amplitude, tilt, phase, and correlations, so scale-invariance is **not** automatically preserved — and Planck's \(n_s\simeq0.965\) is itself a measured departure that any real derivation must reproduce, not a target to wave at.
- **Small scales.** A discrete black-hole population does add Poisson power toward small scales. But this is **not** a clean signature of the framework: inflationary models with primordial black holes acquire discreteness/isocurvature power too. So the small-scale excess is a *calculable feature*, not a distinguishing prediction, until its shape is worked out and contrasted with the PBH case.

Both bullets are demoted to open questions that the transfer calculation of §6 must settle before any spectral claim is made.

---

## 6. Status and the remaining computation

**Established [E]:** the exact Kottler Weyl \(\Psi_2=-GM/r^3\) is independent of \(\Lambda\); the horizon ratio \(R_{n+1}/R_n\) is a well-defined dimensionless tidal *scaling*; the conditional arithmetic \(A_\star\simeq10^{-5}\Rightarrow\Lambda_{n+1}/\Lambda_n\simeq10^{10}\) is correct.

**Candidate correspondence [C]:** that the child's inherited seed amplitude tracks \(R_{n+1}/R_n\); that self-similarity would make it a constant \(A_\star\).

**Open [O] — in order of who decides the note:**
1. **The Weyl-to-\(\zeta\) transfer.** Compute \(\zeta(k)=T(k)\,\epsilon_W(k)\) across the collapse surface — the child equation of state, the scalar mode, the matching conditions — on the ΛLTB benchmark. Until this is done the horizon ratio is a candidate scaling, not the primordial amplitude. **This is the calculation that decides whether the note is a result.**
2. **The far-field-vs-horizon justification.** Show why the child inherits the weak far-field tide at \(r\sim R_n\) rather than the horizon-local curvature at \(R_S\).
3. **The fixed-point value.** Only after (1): compute \(A_\star\) from the seeding map and test whether the self-reproducing value is \(10^{-5}\). Absent this, §4 relocates the tuning into an inter-generational ratio; it does not remove it.

---

## 7. Result

> The exact Kottler Weyl of the parent's collapsed structure gives a well-defined dimensionless tidal scaling for the seed, \(\epsilon_W\sim R_{n+1}/R_n=\sqrt{\Lambda_n/\Lambda_{n+1}}\), naturally small because children are smaller than parents. This is a *candidate scaling*, not the curvature perturbation: identifying it with \(\zeta\) requires the Weyl-to-\(\zeta\) transfer across the collapse surface, which is not performed here. Under self-similarity the ratio would be a fixed point, converting the observed \(10^{-5}\) into a condition on the inter-generational \(\Lambda\) ratio (\(\sim10^{10}\)) — a target, not yet a prediction.

**What survives review:** the direction, and a sharp next calculation. The horizon ratio is a plausible seed scaling; whether it *is* the primordial amplitude is decided by the transfer of §6.1, computed on Codex's ΛLTB benchmark — the same object where this note and the collapse track meet. Not "the strong path's final step": its actual first honest one.

---

## References

1. R. Penrose, *Cycles of Time* (Bodley Head, 2010).
2. F. Kottler, "Über die physikalischen Grundlagen der Einsteinschen Gravitationstheorie," *Annalen der Physik* **361**, 401 (1918).
3. T. Clifton and P. G. Ferreira, "Archipelagian Cosmology," *Phys. Rev. D* **80**, 103503 (2009), [arXiv:0907.4109](https://arxiv.org/abs/0907.4109).
4. [The Weyl Curvature Hypothesis as a Fixed Point of Recursive Black-Hole Cosmology](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis); [The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover](note.html?src=shear_free_interior_weyl_stress_identity), this project.
5. G. Salehi, [GD I](gd1.html), this project.
