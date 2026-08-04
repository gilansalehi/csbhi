# From the Reciprocal Ansatz to the Throat Brane: A Synthesis

*Review document — the scale-field arc in one place, with an honest ledger of what is established, inferred, and open.*

**Author:** Claude (Anthropic), developed with G. Salehi; verification in progress by Codex (OpenAI).

**Date:** 2026-08-04.

**Status:** Synthesis of four working notes. **Nothing here is more established than those notes**; this document collects the through-line and grades each claim so the arc can be reviewed as a whole. No note in this arc is yet registered in the public index — all are drafts pending verification.

**Component notes:**
- [Modular Self-Duality and the Reciprocal Symmetry](note.html?src=modular_self_duality_and_the_reciprocal_symmetry)
- [Crunch 1 — The Scale Field of the Reciprocal Interior](note.html?src=scale_field_of_the_reciprocal_interior)
- [Crunch 2 — The Throat Weyl Transition](note.html?src=throat_weyl_across_the_scale_field)
- [Crunch 3 — The 5D Embedding and the Throat as a Brane](note.html?src=throat_as_brane_5d_embedding)

**Notation:** [Glossary](note.html?src=cosmological_glossary). $\sigma=\ln a=-\ln(\text{areal radius})$; $c=1$.

---

## Abstract

Starting from the reciprocal ansatz $a=1/r$, one change of variable exposes a scale field $\sigma=\ln a$, whose reflection $\sigma\to-\sigma$ is the horizon-fixing involution and whose fixed point $\sigma=0$ is the 4D Einstein surface. Three calculations follow:

1. **Crunch 1:** $\sigma=-\ln r$ satisfies a Liouville (exponential) scalar equation — the unique scale-free potential — and self-consistent backreaction shows $\sigma$ cannot be a *gravitating* field without destroying the black hole. So $\sigma$ is **geometric**: $\sigma=-\ln(\text{areal radius})$, exact in the real Kottler/FLRW geometry.
2. **Crunch 2:** across the throat the Weyl tensor jumps ($\Psi_2:-GM\to0$) and the scale variable does **not** smooth it. The throat is a real, frame-independent **Weyl-to-Ricci conversion**.
3. **Crunch 3:** in the 5D embedding the Weyl/Ricci split is an embedding choice (Gauss–Codazzi), and a *finite* 4D-Weyl jump above a smooth bulk forces a jump in extrinsic curvature — an Israel **brane**. The throat is a brane, and the transverse-curvature/work term computed independently in the junction notes **is its tension**.

The headline is a unification: **the throat is a codimension-1 brane at $\sigma=0$**, and three previously separate facts — the Weyl jump, the junction work term, and the throat's frame-independence — are one object seen three ways. The load-bearing open question is whether that brane is *forced* or can be replaced by a smooth 5D transition; that is the decisive next computation.

---

## 1. Setup: the scale field

The reciprocal interior metric $ds^2=-d\tau^2+a^2(dR^2+R^2d\Omega^2)$ with $a=1/r$ carries a scale factor already present as an undetermined function in RI I. Naming it,
\[
\sigma\equiv\ln a=-\ln(\text{areal radius}),
\]
gives a clean dictionary: horizon $\leftrightarrow\sigma=0$; de Sitter future $\leftrightarrow\sigma\to+\infty$; Bob's infinity $\leftrightarrow\sigma\to-\infty$; the reciprocal involution $a\leftrightarrow1/a\leftrightarrow$ the reflection $\sigma\to-\sigma$; and **4D Einstein gravity is the $\sigma=0$ (self-dual) surface**. This is the same self-dual point the modular note identifies, and $\sigma$ is the log of that note's imaginary-axis modular coordinate. **[E]**

---

## 2. Crunch 1 — the scale field is geometric (a Liouville field), not a gravitating d.o.f.

**Computed [E]:** for a static radial $\sigma$, $\Box\sigma=-(f+rf')/r^2$. In Schwarzschild $f+rf'=1$ exactly, so $\Box(-\ln r)=-1/r^2=-e^{2\sigma}$ — a **Liouville potential** $V=-\tfrac12e^{2\sigma}$ (Kottler adds $\Lambda\sigma$). The exponential form is not chosen: it is the unique potential covariant under the scale shift $\sigma\to\sigma+c$, i.e. the unique **scale-free** potential — matching the involution note's scale-freeness independently.

**Computed [E]:** self-consistent backreaction. A static scalar has $T^t{}_t\neq T^r{}_r$ unless $\sigma'=0$, but the Schwarzschild/Kottler form requires $T^t{}_t=T^r{}_r$. Therefore a *gravitating* $\sigma$ cannot preserve the black-hole exterior; the power-law solution recovers $\sigma=-\ln r$ **only** in the zero-backreaction limit.

**Inference [C]:** keeping the physical black hole *forces* $\sigma$ to be non-gravitating — $\sigma=-\ln(\text{areal radius})$ as a geometric variable (interpretation B), exact in the real geometry. *A gravitating scale field would destroy the very geometry that defines the black hole.*

**Open [O]:** the *conformally*-coupled ($\propto\sigma^2R$) version — the physically natural scale field — is not checked and could differ.

---

## 3. Crunch 2 — the throat Weyl jump is real

**Computed [E]:** exterior Kottler is Petrov D with $\Psi_2=-GM/r^3=-GM\,e^{3\sigma}$ ($\Lambda$ is pure Ricci, contributes no Weyl); $C^2=48G^2M^2e^{6\sigma}$. Interior FLRW is conformally flat, $\Psi_2=0$. At the throat $\sigma=0$: $-GM$ (out) vs $0$ (in) — a **finite jump the scale variable does not remove**.

**Inference [C]:** the throat is a genuine **Weyl-to-Ricci conversion** (concentrated mass $\to$ smooth mass), i.e. the open Q3 — confirmed real, not a coordinate effect. Consistency with the three-region picture requires the interior to reach exact FLRW ($\Psi_2=0$) only *asymptotically*; near the throat it carries decaying Weyl.

**Open [O]:** the interior profile $\Psi_2(\sigma)$, $\sigma>0$, decaying from the throat value to $0$ — the unbuilt region-2 metric.

---

## 4. Crunch 3 — the throat is a brane

**Standard relations [E]:** Gauss–Codazzi and the Shiromizu–Maeda–Sasaki decomposition give, for a Ricci-flat 5D bulk foliated by $\sigma$=const,
\[
{}^{(4)}G_{\mu\nu}=KK_{\mu\nu}-K_\mu{}^\alpha K_{\alpha\nu}-\tfrac12 g_{\mu\nu}(K^2-K_{\alpha\beta}K^{\alpha\beta})-E_{\mu\nu},\quad E_{\mu\nu}={}^{(5)}C_{\mu A\nu B}n^An^B .
\]
So the 4D Weyl/Ricci split is set by the extrinsic curvature $K_{\mu\nu}$ (the embedding), not the bulk alone: the same smooth bulk can present a Weyl-slice (Kottler) or a Ricci-slice (FLRW). This is the rigorous form of "geometric character depends on scale and on what you resolve."

**Inference [C]:** a *finite* 4D-Weyl jump (Crunch 2) above a *smooth* bulk (continuous $E_{\mu\nu}$) can only be carried by a **jump in $K_{\mu\nu}$**, which by Israel's conditions is a **thin shell / brane** with surface stress $S_{\mu\nu}$. The junction notes' independently-computed transverse-curvature/work term **is** that Israel jump — the brane's **tension**.

**Unification [C]:** three separate findings are one object.

| finding | 5D meaning |
|---|---|
| Crunch 2 Weyl jump $\sigma$ can't smooth | $[K_{\mu\nu}]\neq0$ at $\sigma=0$ |
| junction notes' transverse-curvature work term | $=$ Israel $[K]=$ brane tension $S_{\mu\nu}$ |
| throat is real, frame-independent | it is a physical brane |

**Open [O] — the decisive check:** is the $K$-jump *forced*, or can a different foliation trade it for continuous $K$ with a $\partial_\sigma K$ kink (a smooth bulk transition rather than a brane)? And: build the explicit interpolating 5D metric and verify $[K]$ equals the junction work term quantitatively. Campbell–Magaard guarantees the local bulk pieces exist; the join is the remaining work.

---

## 5. The unified picture

Reading the four notes together:

- The reciprocal ansatz is a **scale reflection** with the horizon as its self-dual fixed point; 4D Einstein sits at that fixed point, and the interior/exterior are the two branches of the reflection.
- The scale field is **geometric**, not a new force — promoting it to a field would erase the black hole. So the "5D theory with varying scale" is a *reformulation* of 4D GR that makes the reciprocal symmetry manifest (interpretation B), not new dynamics.
- The **throat is a real object** — a Weyl-to-Ricci conversion surface — that the scale relabeling cannot dissolve, and the 5D embedding identifies it as a **brane** whose tension is the already-known junction work term.
- This is consistent with, and sharpens, the conformal-crossover picture: the throat-brane sits at $\sigma=0$ (the horizon), distinct from the child crossover at $\sigma\to\infty$; the interior's matter is induced across the brane from 5D geometry, matching the WCH-thread idea that the child's Ricci content is sourced at the transition rather than pre-existing.

**What the arc does *not* claim:** it does not exhibit a completed parent–child metric; it does not prove the brane is forced (vs a smooth 5D transition); it does not settle the conformally-coupled case; and it does not derive the interior region-2 Weyl profile. These are the open items below.

---

## 6. Honest ledger

| Claim | Grade | Basis |
|---|---|---|
| $\sigma=\ln a$, involution $=\sigma\to-\sigma$, Einstein at $\sigma=0$ | **[E]** | change of variable |
| $\Box(-\ln r)=-e^{2\sigma}$ in Schwarzschild; Liouville $=$ scale-free potential | **[E]** | direct computation |
| gravitating $\sigma$ incompatible with Schwarzschild form ($\Rightarrow$ B) | **[E]**→**[C]** | $T^t{}_t=T^r{}_r$ forces $\sigma'=0$; inference to "keep the BH ⇒ B" |
| exterior $\Psi_2=-GM e^{3\sigma}$, interior $\Psi_2=0$, finite throat jump | **[E]** | textbook Weyl scalars |
| throat $=$ Weyl-to-Ricci conversion, frame-independent | **[C]** | interpretation of the jump |
| Weyl/Ricci split is embedding-dependent (Gauss–Codazzi/SMS) | **[E]** | standard |
| throat $=$ brane; junction work term $=$ brane tension | **[C]** | inference from finite jump + smooth bulk + Israel |
| conformal-coupling case; forced-brane vs smooth transition; region-2 profile; explicit 5D metric | **[O]** | not done |

---

## 7. Open computations (Crunch 4 and beyond)

1. **Forced-brane test [O, decisive].** Determine whether the $K$-jump at $\sigma=0$ is unavoidable or removable by a smooth foliation. This decides brane vs smooth 5D transition.
2. **Explicit 5D metric [O].** Construct the interpolating Ricci-flat bulk(s) with Kottler ($\sigma<0$) and FLRW-relaxing ($\sigma>0$) slices; verify $[K]=$ junction work term quantitatively.
3. **Conformal coupling [O].** Redo Crunch 1's backreaction for a conformally-coupled $\sigma$; confirm it still selects B.
4. **Region-2 Weyl profile [O].** Build $\Psi_2(\sigma)$, $\sigma>0$, decaying throat$\to0$ — the induced $E_{\mu\nu}$ on the interior side.

---

## 8. For the reviewer

The load-bearing checks, in order: (i) Crunch 1's stress-tensor algebra $T^t{}_t\neq T^r{}_r$ and the $f+rf'=1$ identity; (ii) Crunch 2's Weyl scalars; (iii) Crunch 3's "$K$ must jump" argument and the identification of $[K]$ with the junction work term. If (iii) survives, the throat-brane result stands as an inference from established relations plus two computed inputs. If a smooth foliation can absorb the Weyl jump (open item 1), the result weakens from "the throat is a brane" to "the throat is a real 5D transition surface" — still frame-independent, but not necessarily a thin shell.

**References:** see the four component notes; key external anchors are Shiromizu–Maeda–Sasaki (gr-qc/9910076), Israel (1966), Campbell–Magaard (gr-qc/9511016), and the standard Petrov-D Weyl scalars.
