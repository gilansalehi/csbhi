# The 5D Embedding and the Throat as a Brane (Crunch 3)

*Working calculation note — the 4D slicing of the 5D embedding, and where it lands.*

**Author:** Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Working draft, pushing forward under review. The Gauss–Codazzi / Israel / SMS relations used are standard and rigorous; the explicit interpolating 5D metric is **not** constructed, so the throat-as-brane identification is a strongly-motivated inference, not a solved embedding. Tiered **[E]** established, **[C]** inference, **[O]** open.

**Prerequisite:** [Crunch 2: Throat Weyl](note.html?src=throat_weyl_across_the_scale_field); [junction/conformal-crossover notes](note.html?src=reciprocal_interior_conformal_crossover).

**Notation:** [Glossary](note.html?src=cosmological_glossary). $\sigma$ = scale = extra coordinate; $n^A$ = unit normal to the $\sigma$=const slice; $K_{\mu\nu}$ = extrinsic curvature; $c=1$.

---

## 1. The scale-dependent picture, made precise [C]

The framing to compute against: the *character* of the geometry — how curvature splits between Weyl (tidal/structure) and Ricci (volume/matter) — depends on **scale** and on **what you choose to resolve**.

- At the FLRW (coarse) scale the average is conformally flat and isotropic: Weyl $\to0$, Ricci set by mean density.
- Resolve a black hole and the split changes: Weyl $\neq0$ (concentrated mass), governed by *both* the scale $\sigma$ and the source you chose to look at. Crunch 2's exterior result is exactly this: $\Psi_2=-GM\,e^{3\sigma}$ — a function of **scale $\sigma$ and source $M$**, not scale alone. Resolve empty space instead and $M\to0$, $\Psi_2\to0$: Newtonian/weak-field.
- Zoom further, across the throat, and FLRW re-emerges deep inside.

This is the cosmological **averaging / backreaction** problem (Buchert) and an RG-like flow of geometric character with scale. The genuinely speculative addition is that the perturbations riding on the FLRW background are **scale-free** — which resonates with the observed near-scale-invariant primordial spectrum ($n_s\approx0.965$), but tying that to the reciprocal scale-freeness needs the throat perturbation theory (Q7), and is flagged as conjecture. [O]

**Crunch 2's lesson, kept:** $\sigma$ does *not* dissolve the throat. The throat is frame-independent — a real geometric object. The 5D question is not "does it vanish" but "*what is it*."

---

## 2. Gauss–Codazzi: the Weyl/Ricci split is an embedding choice [E]

Foliate the 5D geometry by $\sigma$=const slices in Gaussian-normal form
\[
ds_5^2=\varepsilon\,d\sigma^2+g_{\mu\nu}(x,\sigma)\,dx^\mu dx^\nu,\qquad K_{\mu\nu}=\tfrac12\partial_\sigma g_{\mu\nu}.
\]
The **Gauss equation** expresses the intrinsic 4D Riemann tensor as the projected 5D Riemann plus an extrinsic-curvature term:
\[
{}^{(4)}R_{\mu\nu\rho\sigma}={}^{(5)}R_{\mu\nu\rho\sigma}\big|_{\parallel}+\varepsilon\,(K_{\mu\rho}K_{\nu\sigma}-K_{\mu\sigma}K_{\nu\rho}).
\]
Contracting (Shiromizu–Maeda–Sasaki [1], Ricci-flat bulk $\,{}^{(5)}R_{AB}=0$):
\[
{}^{(4)}G_{\mu\nu}=K K_{\mu\nu}-K_{\mu}{}^{\alpha}K_{\alpha\nu}-\tfrac12 g_{\mu\nu}\!\left(K^2-K_{\alpha\beta}K^{\alpha\beta}\right)-E_{\mu\nu},\qquad E_{\mu\nu}\equiv {}^{(5)}C_{\mu A\nu B}\,n^A n^B .
\]

Two consequences that answer the throat question in principle:

- The **4D Ricci/matter** (${}^{(4)}G_{\mu\nu}$) is *induced* — built from the extrinsic curvature $K$ and the **projected bulk Weyl** $E_{\mu\nu}$. A Ricci-flat 5D bulk can present a slice with matter (this is induced-matter theory: 4D $T_{\mu\nu}$ from 5D geometry).
- The **4D Weyl** (from the Gauss equation's trace-free part) is the projected 5D Weyl *plus* $K$-quadratic terms. So whether a slice is Weyl-flat (FLRW) or Weyl-charged (Kottler) depends on the **embedding** $K_{\mu\nu}$, not on the bulk alone.

**So the Weyl/Ricci split is a slicing choice** — exactly your scale-dependent-character statement, now as an identity. The same smooth bulk can present as Weyl-dominated (exterior) or Ricci-dominated (interior) depending on how the slice sits.

---

## 3. The throat is a brane [C]

Crunch 2 found a **finite jump** in the 4D Weyl at $\sigma=0$: $\Psi_2:-GM\to0$. In the Gauss decomposition, a *smooth* bulk (${}^{(5)}C$ continuous) forces that 4D-Weyl jump to be carried by a **jump in the extrinsic curvature** $K_{\mu\nu}$ — because $E_{\mu\nu}$ is continuous and only the $K$-terms can absorb a finite discontinuity. A jump in $K_{\mu\nu}$ across a codimension-1 surface is, by the **Israel junction conditions**,
\[
[K_{\mu\nu}-K g_{\mu\nu}]=-8\pi G\, S_{\mu\nu},
\]
i.e. a **thin shell / brane** with surface stress-energy $S_{\mu\nu}$.

This snaps three separate findings into one:

| finding | in the 5D picture |
|---|---|
| Crunch 2: 4D Weyl jumps $-GM\to0$, $\sigma$ can't smooth it | $[K_{\mu\nu}]\neq0$ across $\sigma=0$ |
| junction notes: transverse-curvature jump = a work/surface density | that jump **is** the Israel $[K]$ = the brane's $S_{\mu\nu}$ |
| Crunch 2: the throat is real, frame-independent | it is a physical **brane** (codimension-1 shell), not an artifact |

**Result [C]:** the 5D embedding identifies the throat as a **brane** — a real shell at $\sigma=0$ separating the exterior (Kottler) and interior (FLRW-relaxing) bulk regions, whose surface stress is exactly the transverse-curvature/work term the junction notes already computed. $\sigma$ does not dissolve the throat *because the throat is a brane*, and the "work density" the junction notes found is its **tension**. The 4D Weyl jump is the brane's shadow.

---

## 4. Why this is the natural home, not a bolt-on [C]

- The **conformal-crossover** picture already has CSBHI as a braneworld-adjacent construction; the throat-brane at $\sigma=0$ (the horizon) is distinct from the child crossover at $\sigma\to\infty$ — two different surfaces, not to be conflated.
- **Campbell–Magaard** guarantees each side (Kottler, FLRW) embeds locally in a 5D Ricci-flat bulk, so the two bulk regions the brane separates are *guaranteed to exist*; the content is joining them across the brane.
- Induced-matter theory then reads the interior's matter as induced from 5D geometry — consistent with the WCH-thread idea that the child's Ricci/matter is sourced across the throat rather than pre-existing.

---

## 5. Honest status and the remaining construction

**Rigorous:** Gauss–Codazzi, the SMS decomposition, and Israel junction conditions are standard [1,2]. Given them, a finite 4D-Weyl jump with smooth bulk *requires* a $K$-jump = a brane; and the junction notes' nonzero work term *is* such a jump. So the throat-as-brane identification follows from established relations **plus** the two computed inputs (Crunch 2's jump, the junction work term).

**Not yet done [O]:**
1. **The explicit 5D metric.** Construct one 5D bulk (or two Ricci-flat bulks + brane) whose slices are Kottler for $\sigma<0$ and FLRW-relaxing for $\sigma>0$, and verify $[K_{\mu\nu}]$ equals the junction notes' surface term quantitatively. Campbell guarantees the local pieces; the join is the work.
2. **Smooth-bulk vs brane, decided numerically.** I have *argued* $K$ must jump (brane) because the bulk Weyl $E_{\mu\nu}$ is continuous and can't absorb a finite 4D-Weyl jump. Confirm there is no smoothing choice of foliation that trades the $K$-jump for continuous $K$ with a $\partial_\sigma K$ kink (a smoother brane, or a genuine bulk transition). This is the sharp check.
3. **Interior relaxation.** Feed in Crunch 2's region-2 requirement: the interior slice is FLRW only asymptotically, with $\Psi_2(\sigma)$ decaying from the brane value to $0$. That decaying profile is the induced $E_{\mu\nu}$ on the interior side.

**One-line summary:** the 5D slicing does not make the throat disappear — it *explains* the throat, as a brane whose tension is the junction work term, unifying Crunch 2 and the junction notes. Whether the brane can be replaced by a smooth 5D transition is the decisive open computation.

---

## References

1. T. Shiromizu, K. Maeda, M. Sasaki, "The Einstein equations on the 3-brane world," *Phys. Rev. D* **62**, 024012 (2000), [arXiv:gr-qc/9910076](https://arxiv.org/abs/gr-qc/9910076).
2. W. Israel, "Singular hypersurfaces and thin shells in general relativity," *Nuovo Cimento B* **44**, 1 (1966).
3. J. E. Campbell / L. Magaard; S. Rippl, C. Romero, R. Tavakol, [arXiv:gr-qc/9511016](https://arxiv.org/abs/gr-qc/9511016); P. S. Wesson, *Space–Time–Matter* (World Scientific, 1999).
4. T. Buchert, "On average properties of inhomogeneous cosmologies," *Gen. Rel. Grav.* **32**, 105 (2000), [arXiv:gr-qc/9906015](https://arxiv.org/abs/gr-qc/9906015).
5. Crunch 1 [scale-field](note.html?src=scale_field_of_the_reciprocal_interior); Crunch 2 [throat Weyl](note.html?src=throat_weyl_across_the_scale_field), this project.
