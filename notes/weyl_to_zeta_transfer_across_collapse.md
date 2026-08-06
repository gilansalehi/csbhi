# The Weyl-to-ζ Transfer: Background Hierarchy versus Inherited Substructure

*Setup note — separating the two things a collapsing overdensity hands to its child: the overall mass that fixes the child's background, and the substructure that becomes the child's perturbations. The horizon ratio belongs to the first; the CMB amplitude to the second.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — sanity-check requested; parent-side input needed from the ΛLTB benchmark.

**Date:** 2026-08-05.

**Status:** Framework and baseline, not a computed amplitude. The separation of background from perturbation and the homogeneous baseline are clean; the transfer function itself is set up but not evaluated (it needs the benchmark's substructure). The horizon ratio is a background quantity, not \(\zeta\). Tiered **[E]** established, **[C]** correspondence, **[O]** open.

**Prerequisites:** [The Weyl Curvature Hypothesis as a Fixed Point of Recursive Black-Hole Cosmology](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis); [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map); [Selecting the Parent Collapse Benchmark](note.html?src=collapse_benchmark_selection).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), \(G\) retained. \(\zeta\) is the gauge-invariant comoving curvature perturbation; \(\delta\) a density contrast; \(\Sigma_*\) the parent collapse surface on which the child is born; \(R_S,\,\Lambda_{n+1}=3/R_S^2\) the child's horizon and cosmological constant.

---

## 1. What this note fixes

The [WCH note](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis) reduces to one calculation: how the structure of a collapsing parent overdensity becomes the child universe's primordial perturbation \(\zeta\). This note sets that calculation up, and draws the distinction it turns on: the horizon ratio is a background quantity, not \(\zeta\) itself.

---

## 2. A collapsing cloud hands over two different things

Picture a lump of matter in the parent universe collapsing to a black hole. It carries two independent pieces of information, and they go to two different places in the child.

**(a) Its total mass → the child's *background*.** The lump's total mass \(M\) fixes the black-hole radius \(R_S=2GM\), and CSBHI's matching \(\Lambda_{n+1}=3/R_S^2\) turns that into the child's cosmological constant. This is the child's **background** FLRW — its size, its expansion rate, its \(\Lambda\). Nothing about lumpiness enters here; only the total.

**(b) Its internal lumpiness → the child's *perturbations*.** Whether the lump is perfectly smooth or slightly clumpy inside does not change its total mass, so it does not touch (a). It becomes something else entirely: the child's **perturbation spectrum** \(\zeta\). A smooth lump gives a smooth child; a clumpy lump gives a child with structure.

These are different orders of the same object. The overall collapse is the zeroth-order (background); the substructure is the first-order (perturbation). **The horizon ratio \(R_{n+1}/R_n\) of the amplitude note lives entirely in (a)** — it is a statement about total masses and background scales, i.e. the \(\Lambda_{n+1}/\Lambda_n\) hierarchy between generations. It is *not* the child's \(\zeta\), which lives in (b). That is the correction: the amplitude note computed a background ratio and called it a perturbation.

---

## 3. The sharp baseline: a smooth collapse makes a perturbation-free child [E]

The cleanest anchor is exact. Oppenheimer–Snyder collapse — a homogeneous ball of pressureless dust — has an interior that is *exactly* a closed FLRW dust solution. FLRW is homogeneous, so its Weyl tensor vanishes identically and it carries no perturbations:

\[
\text{homogeneous collapse}\ \Longrightarrow\ \Psi_2\equiv0\ \Longrightarrow\ \zeta=0 .
\]

Because the reciprocal map \(a=1/r\) preserves isotropy and homogeneity across the horizon, the child born from such a collapse is a perfectly smooth FLRW universe — no CMB ripples, no galaxies. This is not a defect; it is the control experiment. **No substructure in, no perturbation out.** It confirms that \(\zeta\) is sourced by (b) alone, and it is the exact point the transfer must perturb around.

---

## 4. The transfer, set up

Now let the collapse carry substructure. The child is born on the surface \(\Sigma_*\); it is a perturbed FLRW; its primordial \(\zeta\) is fixed by the perturbation of \(\Sigma_*\)'s geometry, which is the parent's substructure.

The bridge is the junction (Darmois–Israel) matching: across \(\Sigma_*\) the induced 3-metric and the extrinsic curvature are continuous. The parent side supplies them, carrying the deviations of the overdensity from its smooth profile; the child side reads them as initial perturbation data. On super-horizon scales \(\zeta\) is then conserved (for adiabatic perturbations), so the value set at birth is the value that reaches the child's later Hubble crossing.

Schematically the result is a **transfer function**,

\[
\boxed{\ \zeta(k)\ =\ T(k)\,\delta_\Sigma(k)\ },
\]

where \(\delta_\Sigma(k)\) is the parent substructure at comoving wavenumber \(k\) on \(\Sigma_*\), and \(T(k)\) is fixed by:

- the child's **equation of state** at birth (what \(\zeta\) means depends on whether the newborn is radiation-, matter-, or \(\Lambda\)-dominated);
- the **geometry of \(\Sigma_*\)** (the shape of the collapse surface — timelike, null, its extrinsic curvature);
- the **matching conditions** (which combination of induced metric and extrinsic-curvature perturbation carries across);
- the **scale** \(k\) relative to the horizon at birth.

A local Weyl scalar does **not** appear in this list, which is exactly why it cannot be identified with \(\zeta\) by dimensional normalization. The Weyl field is one diagnostic of \(\delta_\Sigma\); \(T(k)\) is the physics that turns it into a curvature perturbation.

**This is the object Codex's shell map already isolates.** There the parent shells follow a smooth \(\mu^{1/3}\) profile plus deviations. The smooth \(\mu^{1/3}\) part is exactly (a) — it maps to the child's background by one conformal factor. The **deviations** are exactly \(\delta_\Sigma\) — the substructure that this transfer carries into \(\zeta\). The two notes are computing opposite ends of the same matching.

---

## 5. Why the amplitude is inherited, not generated [C]

The parent's substructure at the scale that becomes the child's horizon is drawn from the parent's *own* perturbation field at small scales. If that field is near-scale-invariant, its amplitude there is the same as at the parent's horizon — the parent's own \(\zeta\). With \(T(k)=\mathcal O(1)\) (the junction preserves order of magnitude), the child inherits the parent's amplitude:

\[
\zeta_{\rm child}\ \sim\ \zeta_{\rm parent}.
\]

So the amplitude is a **fixed point**, propagated down the lineage — the same conclusion as before, but now correctly attached to the substructure \(\zeta\) rather than to the background horizon ratio. It explains why the amplitude is *stable* across generations; it does not by itself predict the *value* \(10^{-5}\). That still requires closing the loop: does the seeding map (parent perturbations → which overdensities collapse → what substructure they carry → child \(\zeta\)) reproduce its own input amplitude, and is the self-consistent value \(10^{-5}\)?

---

## 6. What is needed, and who supplies it

**Parent side — Codex's ΛLTB benchmark.** The substructure \(\delta_\Sigma(k)\): the amplitude and \(k\)-dependence of the deviations from the smooth compensated profile on the collapse surface. This is the "deviations from \(\mu^{1/3}\)" of the shell map, made explicit for the chosen profile.

**Child side — this track.** The transfer function \(T(k)\): built from the junction conditions on \(\Sigma_*\), anchored to the \(\zeta=0\) baseline of §3, for the child's birth equation of state. This is the next concrete calculation here, and it needs no new input to begin — the benchmark's \(\delta_\Sigma\) is required only to turn \(T(k)\) into a number.

Only when both are in hand does \(\zeta(k)=T(k)\,\delta_\Sigma(k)\) become an amplitude and a spectrum to compare with Planck's \(10^{-5}\) and \(n_s\simeq0.965\).

---

## 7. Status

**Established [E]:** the background/substructure separation; the horizon ratio as a background (\(\Lambda\)-hierarchy) quantity; the exact baseline \(\text{homogeneous collapse}\Rightarrow\zeta=0\) (Oppenheimer–Snyder + homogeneity-preserving \(a=1/r\)).

**Correspondence [C]:** \(\zeta(k)=T(k)\,\delta_\Sigma(k)\) as the transfer; the shell map's \(\mu^{1/3}\)-deviations as \(\delta_\Sigma\); amplitude inheritance as a fixed point.

**Open [O]:** compute \(T(k)\) from the junction conditions (child side, ready to start); obtain \(\delta_\Sigma(k)\) from the benchmark (parent side, Codex); close the fixed point and test the value against \(10^{-5}\) and the tilt. Only this decides whether the WCH/amplitude arc is a result.

---

## References

1. J. R. Oppenheimer and H. Snyder, "On Continued Gravitational Contraction," *Physical Review* **56**, 455 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
2. W. Israel, "Singular hypersurfaces and thin shells in general relativity," *Nuovo Cimento B* **44**, 1 (1966).
3. D. Baumann, "TASI Lectures on Inflation," [arXiv:0907.5424](https://arxiv.org/abs/0907.5424) — for the definition of \(\zeta\) and the transfer it requires.
4. [The Weyl Curvature Hypothesis as a Fixed Point](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis); [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map); [Selecting the Parent Collapse Benchmark](note.html?src=collapse_benchmark_selection), this project.
5. G. Salehi, [GD I](gd1.html), this project.
