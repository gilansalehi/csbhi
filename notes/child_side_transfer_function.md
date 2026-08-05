# The Child-Side Transfer Function: \(T(k)=1\), and Its Three Corrections

*Working calculation — the junction-condition half of the Weyl-to-ζ transfer. For every currently observable scale the child inherits the parent's curvature perturbation unchanged; all CSBHI-specific physics lives in three identified corrections.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — cross-check requested; pairs with the parent-side substructure from the ΛLTB benchmark.

**Date:** 2026-08-05.

**Status:** The leading result \(T=1\) is a rigorous consequence of the standard super-horizon conservation theorem for \(\zeta\); it is not new physics, which is exactly why it is trustworthy. The three corrections are set up and identified, not evaluated. Tiered **[E]** established, **[C]** correspondence, **[O]** open, **[S]** speculative.

**Prerequisites:** [The Weyl-to-ζ Transfer Across the Collapse Surface](note.html?src=weyl_to_zeta_transfer_across_collapse); [The Shear-Free Weyl–Stress Identity](note.html?src=shear_free_interior_weyl_stress_identity).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), \(G\) retained. \(\zeta\) the comoving curvature perturbation; \(\psi\) the spatial-metric perturbation \(g_{ij}=a^2(1-2\psi)\delta_{ij}\); \(\delta p_{\rm nad}\) the non-adiabatic pressure perturbation; \(\Sigma_*\) the birth surface; \(k\) comoving wavenumber; \(R_S\) the child's horizon at birth.

---

## 1. What is being computed

The [transfer note](note.html?src=weyl_to_zeta_transfer_across_collapse) split the primordial amplitude into a parent-side substructure \(\delta_\Sigma(k)\) and a child-side transfer \(T(k)\), with \(\zeta(k)=T(k)\,\delta_\Sigma(k)\). This note computes \(T(k)\): given a perturbation on the birth surface, what curvature perturbation does the child carry away? It is the child-side half, and it needs no parent input to evaluate — only the child's birth equation of state and the matching at \(\Sigma_*\).

---

## 2. The leading result: \(T=1\) [E]

The comoving curvature perturbation on uniform-density slices is

\[
\zeta \equiv -\psi - H\,\frac{\delta\rho}{\dot\rho}
= -\psi + \frac{\delta\rho}{3(\rho+p)} ,
\]

using \(\dot\rho=-3H(\rho+p)\). Its exact evolution on super-horizon scales follows from local energy conservation alone — no assumption on the equation of state:

\[
\boxed{\ \dot\zeta = -\frac{H}{\rho+p}\,\delta p_{\rm nad}\ },\qquad
\delta p_{\rm nad}\equiv\delta p-\frac{\dot p}{\dot\rho}\,\delta\rho .
\]

This is the Wands–Malik–Lyth–Liddle result. Its content here is decisive: **whenever the perturbation is adiabatic (\(\delta p_{\rm nad}=0\)), \(\zeta\) is conserved through *any* change in the equation of state**, including the parent's dust collapse handing over to the child's matter. So across the birth surface,

\[
\zeta_{\rm child}=\zeta_{\rm parent}\qquad\Longrightarrow\qquad T=1 .
\]

The junction picture says the same thing microscopically. Darmois matching (continuity of induced 3-metric and extrinsic curvature, no surface layer) makes \(\psi\) and \(\delta\rho\) continuous across \(\Sigma_*\), so \(\zeta\) is continuous. A local Weyl scalar plays no role — confirming, from the correct calculation, that \(\zeta\) is not a dimensionally-rescaled \(\Psi_2\).

---

## 3. Every observable mode is super-horizon at birth [E→C]

The child is born with horizon scale \(R_S\). A mode is super-horizon at birth when \(k^{-1}\gtrsim R_S\). Because the child expands by an enormous factor after birth, every comoving scale we observe today — the entire CMB and large-scale-structure range — was far outside \(R_S\) at birth (this is the same statement that makes those modes "primordial" in standard cosmology: they were super-horizon in the early universe and re-entered later).

Therefore \(T(k)=1\) across the whole observable band: **the child inherits the parent's curvature-perturbation spectrum — amplitude *and* tilt — unchanged.** This is the rigorous form of "the amplitude is inherited": not a slogan, but the super-horizon conservation theorem applied to the birth. It fixes the sense in which low-Weyl birth and small \(\zeta\) are one fixed point, and it means the observable spectrum is set entirely by the parent's \(\delta_\Sigma(k)\), with the child-side passing it through.

Consistency with the baseline: a homogeneous collapse has \(\delta_\Sigma=0\), so \(\zeta=T\cdot0=0\) — the Oppenheimer–Snyder anchor, recovered.

---

## 4. The three corrections — where CSBHI physics enters

\(T=1\) is the leading term. Everything that could make recursive black-hole cosmology *differ* from trivial inheritance sits in the corrections, and they are exactly three.

**(a) Sub-horizon modes: \(T(k)\neq1\) for \(k^{-1}\lesssim R_S\). [O]** Modes inside the horizon at birth are not protected by super-horizon conservation; they oscillate and transfer non-trivially, with \(T(k)\) set by the child's birth equation of state. These are small scales (sub-\(R_S\)), below the observable CMB band but relevant to small-scale structure and to any discreteness signal. This is where a genuine \(k\)-dependence is generated.

**(b) A non-adiabatic kick from the reciprocal matter map: \(\Delta\zeta=-\int\frac{H}{\rho+p}\delta p_{\rm nad}\,dt\). [C — the interesting one]** The map \(a=1/r\) changes the matter content across the birth surface. If the child's matter is not a smooth continuation of the parent's — if the map excites a *relative* perturbation between components — then \(\delta p_{\rm nad}\neq0\) at the transition and \(\zeta\) receives a kick. This is the one channel that can shift the inherited amplitude or tilt, and it is CSBHI-specific: it is the reciprocal map's fingerprint on the primordial spectrum. Computing \(\delta p_{\rm nad}\) from the matter map is the sharpest next step, because a *non-zero* result would be a prediction that departs from pure inheritance.

**(c) A surface-layer kick from the throat: \(\Delta\zeta\sim\) perturbed shell stress. [C→S]** If the birth surface carries a thin shell rather than a smooth Darmois match, the extrinsic curvature jumps, \([K_{ab}]=-8\pi G(S_{ab}-\tfrac12 S h_{ab})\), and a *perturbed* shell sources a jump in \(\zeta\). The shell's anisotropic stress is exactly the throat tension of the [shear-free note](note.html?src=shear_free_interior_weyl_stress_identity) (\(\Pi=-\tfrac12 D\) in the thin limit). So a shell-supported throat would imprint its tension on the primordial spectrum. For a smooth (thick) throat, \(S_{ab}\to0\) and this vanishes; it is a genuine but limit-dependent channel.

---

## 5. What this settles, and what it hands back

**Settled [E]:** the child-side transfer is \(T(k)=1\) on all observable (super-horizon-at-birth) scales; the child inherits the parent's \(\zeta\) spectrum, amplitude and tilt, unchanged; the homogeneous baseline \(\zeta=0\) is recovered.

**Handed to the parent side [C→O]:** because \(T=1\), the observable amplitude and \(n_s\) are *entirely* the parent's \(\delta_\Sigma(k)\). The value of \(10^{-5}\) and the tilt \(0.965\) are now unambiguously the benchmark's job — the child-side does not generate them and cannot hide them. This is the cleanest possible division: if Codex's ΛLTB substructure comes out near-scale-invariant at \(10^{-5}\), the arc closes; if not, the child-side offers no rescue at these scales.

**The three open calculations [O]:** (a) \(T(k)\) for sub-horizon modes at birth; (b) \(\delta p_{\rm nad}\) from the \(a=1/r\) matter map — the potential departure from inheritance; (c) the shell-stress kick, if the throat is thin. Of these, (b) is the one that could turn inheritance into a distinctive prediction.

---

## 6. Result

> The junction conditions give the child-side transfer exactly at leading order: \(T(k)=1\) for every scale that is super-horizon at birth, which is the entire observable band. The child therefore inherits the parent's curvature-perturbation spectrum — amplitude and tilt — without alteration, and the homogeneous-collapse baseline \(\zeta=0\) is recovered. This hands the observable amplitude and tilt cleanly to the parent-side substructure (Codex's benchmark), and localizes every CSBHI-specific effect in three corrections: sub-horizon \(k\)-dependence, a non-adiabatic kick from the reciprocal matter map, and a thin-shell throat-tension kick. The second is the one worth computing next — it is where the reciprocal map could leave a fingerprint on the sky that pure inheritance would not.

---

## References

1. D. Wands, K. A. Malik, D. H. Lyth, A. R. Liddle, "A new approach to the evolution of cosmological perturbations on large scales," *Phys. Rev. D* **62**, 043527 (2000), [arXiv:astro-ph/0003278](https://arxiv.org/abs/astro-ph/0003278).
2. D. H. Lyth, K. A. Malik, M. Sasaki, "A general proof of the conservation of the curvature perturbation," *JCAP* **05**, 004 (2005), [arXiv:astro-ph/0411220](https://arxiv.org/abs/astro-ph/0411220).
3. N. Deruelle and V. F. Mukhanov, "Matching conditions for cosmological perturbations," *Phys. Rev. D* **52**, 5549 (1995), [arXiv:gr-qc/9503050](https://arxiv.org/abs/gr-qc/9503050).
4. W. Israel, "Singular hypersurfaces and thin shells in general relativity," *Nuovo Cimento B* **44**, 1 (1966).
5. [The Weyl-to-ζ Transfer Across the Collapse Surface](note.html?src=weyl_to_zeta_transfer_across_collapse); [The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover](note.html?src=shear_free_interior_weyl_stress_identity), this project.
6. G. Salehi, [GD I](gd1.html), this project.
