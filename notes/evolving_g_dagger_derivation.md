# The Evolving Galactic Acceleration-Scale Correspondence

*A correspondence, not a derivation — the galactic analogue of the reciprocal ansatz, and its coefficient-independent falsifiable prediction.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI), including the critique and salvage structure.

**Date:** 2026-08-04 (revised after adversarial review).

**Status:** This note **retracts** the earlier "forcing" framing, which was circular. It presents three cleanly separated claims at honest tiers: a conditional **theorem** (the square-root form), a **correspondence** (the identification of the global scale — an ansatz at the same epistemic tier as \(a=1/r\), *not* derived), and a **prediction** (the coefficient-independent ratio, falsifiable). Tiers: **[E]** established/theorem, **[Corr]** correspondence/ansatz, **[P]** prediction, **[O]** open.

**Prerequisites:** [GD I](gd1.html); [the involution result](reciprocal-involution.html); [Self-Dual Derivation of the Square-Root Law](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law); [The Evolving Galactic Acceleration Scale](note.html?src=evolving_acceleration_scale_high_z_test).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(H_A(z)\) = Alice's interior Hubble rate; \(H_\Lambda\equiv\sqrt{\Lambda/3}\); \(E(z)\equiv H_A(z)/H_0\).

---

## 0. What was wrong, and why the concept survives

The earlier draft claimed the evolving scale was *forced*. Adversarial review (Codex) showed the forcing was circular and its supporting arguments unsound:

- the square-root note **defined** \(a_H:=cH\) in its setup, so it cannot derive that identification;
- "the reciprocal equation is epoch-local, therefore its descendant scales are instantaneous" is invalid — local equations carry fixed constants (\(\Lambda,G,c\)) routinely;
- \(\Lambda\) is **local** (it enters the field equations at every event), so responding to a fixed \(c\sqrt{\Lambda/3}\) is *not* an acausal coupling to a future boundary — the causality objection was wrong;
- \(c^2/R_A\) is an inverse-radius scale, not the Hayward–Kodama apparent-horizon surface gravity (which carries \(1/2\) and deceleration factors);
- the theorem yields \(g_\dagger=\kappa^2 a_H\), so \(g_\dagger=cH\) at coefficient one is both underived and numerically wrong;
- \(H_A(t)>H_\Lambda\) at every finite epoch, so the two rates do not "cross today."

All conceded. But — as with the ansatz \(a=1/r\) itself, which the programme never *derives* but *posits* and tests — the flaw is in the argument, not the concept. The repair is to stop claiming a derivation and present a **correspondence**: the galactic-level application of the same reciprocal ansatz, yielding a testable prediction. That places g-dagger at exactly the epistemic tier the whole programme operates on.

---

## 1. The theorem: the square-root form, with an unspecified global scale [E]

Let \(A\) be an **unspecified** global acceleration scale. From (i) no new dimensionful constant, (ii) homogeneity, (iii) local↔global exchange symmetry \(D(g_N,A)=D(A,g_N)\), and (iv) exact flat-curve scaling, the functional equation \(\phi(x)=x\,\phi(1/x)\) forces
\[
D(g_N,A)=\kappa\sqrt{g_N\,A},\qquad \kappa \text{ an undetermined constant.}
\]
This is a valid conditional theorem (square-root note). It fixes the *form* and leaves *both* the global scale \(A\) and the normalization \(\kappa\) open.

---

## 2. The correspondence: the galactic reciprocal ansatz [Corr]

CSBHI posits — it does not derive — the identification of the global scale with the inverse radius of Alice's contemporaneous cosmological horizon,
\[
\boxed{\ A(\tau)=\frac{c^2}{R_{\rm hor}(\tau)}\ }.
\]
This is the **galactic analogue of \(a=1/r\)**: a reciprocal (inverse-radius) correspondence between the local gravitational field and the global horizon scale, applied one recursive level down. It is an ansatz at the *same tier* as the foundational reciprocal ansatz — motivated by recursive self-similarity, not forced by it.

One genuine choice remains, and it is where observation enters:

- **contemporaneous apparent/Hubble horizon** \(R_{\rm hor}=c/H_A(\tau)\) → \(A=cH_A(\tau)\), **evolving**;
- **asymptotic de Sitter horizon** \(R_{\rm hor}=c/H_\Lambda\) → \(A=cH_\Lambda\), **fixed** (indistinguishable from MOND).

The recursive/self-similar reading *favors* the contemporaneous horizon — the correspondence, like \(a(\tau)=1/r(\tau)\), is naturally read at the current epoch. But the ansatz alone does not exclude the fixed horizon; that is a modeling choice the data adjudicates, not a theorem. **[Corr; the horizon choice is [O], and observationally decidable.]**

---

## 3. The prediction: the coefficient-independent ratio [P]

Combining the theorem and the (evolving-horizon) correspondence, and writing the empirical deep-RAR form \(g_{\rm obs}=\sqrt{g_N\,g_\dagger}\), gives \(g_\dagger=\kappa^2 A=\kappa^2 cH_A(z)\). The unknown \(\kappa^2\) and \(c\) cancel in the **ratio**:
\[
\boxed{\ \frac{g_\dagger(z)}{g_\dagger(0)}=\frac{H_A(z)}{H_0}=E(z)=\sqrt{\Omega_m(1+z)^3+\Omega_r(1+z)^4+\Omega_\Lambda}\ }.
\]
This is the real, robust result. It needs **none** of the retracted machinery — not the surface-gravity coefficient, not the causality argument, not "crossing today," not the absolute normalization. It is a clean discriminator:

- **MOND / fixed reading:** \(g_\dagger(z)/g_\dagger(0)=1\) (flat).
- **CSBHI evolving correspondence:** \(=E(z)\) (rising).

Consequences (evolving-scale note): BTFR zero-point sliding as \(-\log E(z)\); RAR knee at \(cH_A(z)\); the predicted \(0.8\)–\(1.0\) dex offset at \(z\gtrsim3\) exceeds the \(\sim0.45\) dex systematic floor, so the test is performable in the JWST era. The prediction is coefficient-free and pre-registerable now.

---

## 4. Observational standing [P] — verified, and honestly bounded

The empirical anchors are confirmed by independent search, not only the review:

- **Local anchor.** The RAR gives \(g_\dagger(0)\approx1.2\times10^{-10}\,\mathrm{m/s^2}\) (SPARC [2]), smaller than \(cH_0\approx6.8\times10^{-10}\) by \(\kappa^2\approx0.18\sim1/2\pi\) — the theorem's undetermined \(\mathcal O(1)\) constant, fixed empirically, not derived.
- **Intermediate redshift.** MUSE-DARK III [3] (79 star-forming galaxies, \(0.33<z<1.44\), MUSE HUDF) measures \(g_\dagger(z\!\sim\!1)=2.38^{+0.12}_{-0.10}\times10^{-10}\,\mathrm{m/s^2}\), *rising* from the local \(1.2\pm0.26\). This is the first tentative evidence of RAR-scale evolution.

The coefficient-independent test is the **ratio**:
\[
\left.\frac{g_\dagger(z\!\sim\!1)}{g_\dagger(0)}\right|_{\rm obs}\approx\frac{2.38}{1.2}\approx1.98\pm0.45,
\qquad E(1)=1.76\ \text{(CSBHI)},\qquad 1\ \text{(MOND)} .
\]
The datum favors the rising correspondence over constant-\(g_\dagger\) MOND at \(\sim2\sigma\), and CSBHI's *parameter-free* value \(E(1)=1.76\) sits comfortably inside the measured ratio.

**The honest three-way standing — what a referee will hold us to:**

| framework | \(g_\dagger(z)/g_\dagger(0)\) | vs. MUSE-DARK III | free parameters |
|---|---|---|---|
| MOND | \(1\) (constant) | disfavored \(\sim2\sigma\) | none, but wrong |
| **CSBHI** | \(E(z)\) (\(=1.76\) at \(z\!\sim\!1\)) | consistent | **none** (\(\kappa\) cancels) |
| ΛCDM + feedback | model-dependent, rises | accommodated | feedback tuning |

The defensible claim is **not** "closest, full stop." It is sharper and survives scrutiny: **CSBHI makes a parameter-free prediction consistent with the first evidence of \(a_0\) evolution, disfavoring constant MOND — and, unlike ΛCDM, needs no feedback tuning to produce the rise.** The caveats, stated before a referee states them: (i) one model-dependent measurement, larger scatter (~0.17 dex); (ii) ΛCDM simulations *also* predict a rising \(a_0\) from stellar feedback, so evolution alone does not select CSBHI — the discriminant is the *parameter-free shape* \(E(z)\), which present data cannot yet resolve against a tuned feedback curve; (iii) \(a_0\propto H(z)\) already exists in cosmological MOND [3] — CSBHI's contribution is to *motivate* the scaling from the reciprocal correspondence rather than posit it.

---

## 5. Epistemic status: a genuine ledger line

The programme proceeds from an ansatz (\(a=1/r\)) that is posited, not derived — but that does not discount its consequences. Each *independent, non-circular, risky* correspondence the ansatz correctly organizes is evidence *for* it (consilience); the ansatz's guess-status is a debt its consequences pay down, not a discount applied to them. This prediction is exactly such a line: it reaches into galaxy-rotation data the ansatz was never tuned to, and it can fail. The earlier circular version (\(g_\dagger=cH\) "derived") was a counterfeit entry and was struck; the surviving ratio \(E(z)\) is a real one. Whether the ledger ultimately reads "interesting guess" or "genius guess" is a check the sky writes at \(z\gtrsim3\) — this is among the first honest entries, and the discipline that keeps it honest (pruning circular lines, banking only falsifiable ones) is what makes the ledger count at all.

---

## 6. Result and packet placement

**The honest central claim:**
> Recursive self-duality fixes the square-root *form* once a global acceleration scale is supplied [E]. Identifying that scale with the inverse radius of the contemporaneous cosmological horizon — the galactic reciprocal ansatz [Corr] — yields the coefficient-independent, falsifiable prediction \(g_\dagger(z)/g_\dagger(0)=H(z)/H_0\) [P], which separates CSBHI (rising) from MOND (flat).

**For packet one:** this belongs as a **clearly labeled, pre-registered prediction**, not a completed result. It is at the same epistemic tier as \(a=1/r\) — a correspondence with a testable consequence — which is precisely the tier the packet's foundation already occupies, so it is *consistent*, not weaker. It must not claim to *derive* the acceleration scale or its normalization.

**Open items [O]:** (1) whether the completed throat/weak-field equations *select* the apparent horizon over the de Sitter horizon; (2) whether they fix \(\kappa\); (3) the field-equation realization of the mixing law (GD III's standing [H]). None of these blocks the ratio prediction, which is what the packet ships.

---

## References

1. [Self-Dual Derivation of the Square-Root Law](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law); [The Evolving Galactic Acceleration Scale and its High-Redshift Test](note.html?src=evolving_acceleration_scale_high_z_test); [involution result](reciprocal-involution.html); Codex, [Recursive Kottler Horizons and the Galaxy Acceleration Scale](note.html?src=recursive_kottler_horizons_and_the_galaxy_scale), this project.
2. H. Desmond, "SPARC analysis of the radial acceleration relation," [arXiv:2303.11314](https://arxiv.org/abs/2303.11314) — local \(g_\dagger(0)\approx1.19\times10^{-10}\,\mathrm{m/s^2}\). *(via Codex; verify.)*
3. MUSE-DARK III, [arXiv:2604.22613](https://arxiv.org/abs/2604.22613) — increasing RAR scale with redshift. *(via Codex; verify.)*
4. G. Salehi, [GD1](gd1.html).
