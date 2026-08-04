# Modular Self-Duality and the Reciprocal Symmetry

*Background research note — one conjectural result, with its supporting mathematics and prior art.*

**Author:** Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Draft for review and triage. The central mathematics is established and cited; the identification with CSBHI is a structural conjecture, flagged as such throughout.

**Prerequisite:** [GD I: *Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html); [*The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution*](reciprocal-involution.html).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

**Tier legend.** Claims are marked: **[E]** established mathematics (standard, cited); **[P]** prior art in physics (existing literature, not ours); **[C]** conjecture or structural analogy specific to CSBHI (not established); **[O]** open task.

---

## Abstract

The reciprocal ansatz \(a=1/r\) is an inversion. The [involution note](reciprocal-involution.html) showed it is the *unique* scale-free horizon-fixing involution — the reciprocal **map** is forced by a symmetry. This note asks what that symmetry implies for physical quantities defined on it, and finds one clean, testable-in-principle statement.

An inversion \(t\to 1/t\) is the modular \(S\)-transformation, and the objects that transform covariantly under it are theta functions and modular forms. Reading the reciprocal symmetry through that lens fixes the meaning of its three distinguished radii:

\[
\boxed{
\underbrace{r\to\infty\ (a\to 0)}_{\text{Big Bang cusp}}
\;\xleftrightarrow{\;a\,\leftrightarrow\,1/a\;}\;
\underbrace{r\to 0\ (a\to\infty)}_{\text{de Sitter-future cusp}},
\qquad
\underbrace{r=1}_{\text{horizon}} = \text{self-dual fixed point}.
}
\]

The **result** is a correction with content. In the modular/T-duality framework, the self-dual point is not a singularity but a surface of **maximal symmetry** — the point where the two dual descriptions of one geometry contribute on equal footing (in string theory, the self-dual radius is where gauge symmetry is *enhanced*). The two singular ends are instead the *cusps*, and the reciprocal map makes them **dual to each other**: the Big Bang and the de Sitter future are one exchange pair, with the horizon the self-dual waist between them.

This upgrades the horizon from a normalization convention (\(r=a=1\) chosen as the crossing) to a mathematically distinguished surface, derived from the same symmetry that forced \(a=1/r\). It also disciplines the appealing but incorrect guess that the self-dual point *is* the initial singularity: the fixed point of an inversion is its most symmetric locus, never its most singular one.

Everything below the result is scaffolding: the standard theta mathematics that makes the statement precise, the answer to whether we must complexify (twistors) or can work on a real slice, the physics prior art so CSBHI claims only what is genuinely new, and the single calculation that would convert the analogy into a result.

---

## 1. The reciprocal symmetry as an inversion

CSBHI's [involution result](reciprocal-involution.html) establishes **[E]** that under three minimal requirements — scale-freeness (a power law, no new dimensionful constant), self-dual involution \(f(f(r))=r\), and horizon-fixing \(f(1)=1\) — the parent/child map is forced to

\[
a=f(r)=\frac{1}{r}.
\tag{1}
\]

Its only fixed point on \(r>0\) is the crossing \(r=1\); it exchanges the two ends \(r\to0\leftrightarrow a\to\infty\) and \(r\to\infty\leftrightarrow a\to0\). Those two facts — a single fixed point and an exchange of the ends — are exactly the structure of the modular \(S\)-transformation, and that is the observation this note develops.

---

## 2. Theta functions and the self-dual identity

Write \(r\leftrightarrow t\) and consider a function summed over a spectrum of modes. The Jacobi theta function on the positive imaginary axis \(\tau=it\) is **[E]**

\[
\theta(t)=\sum_{n\in\mathbb{Z}} e^{-\pi n^{2} t},
\qquad t>0,
\tag{2}
\]

and Poisson summation gives its defining transformation law,

\[
\theta\!\left(\tfrac{1}{t}\right)=\sqrt{t}\;\theta(t),
\qquad\text{equivalently}\qquad
\sum_n e^{-\pi n^2 t}=\frac{1}{\sqrt t}\sum_n e^{-\pi n^2/t}.
\tag{3}
\]

Equation (3) is the statement that a sum over modes at "scale" \(t\) equals a sum over modes at the reciprocal scale \(1/t\) — the resummation exchanges the two regimes. Its **fixed point is \(t=1\)** (there \(\theta(1/t)=\theta(t)\) reduces to the identity, up to the weight factor \(\sqrt t\to 1\)). More generally, a lattice \(\Gamma\) is *self-dual* precisely when its theta series is invariant under \(t\to 1/t\) up to the volume/weight factor; theta functions are the canonical self-reciprocal objects under Fourier duality [1,2,3].

Two features of (3) matter for what follows.

- **The weight factor \(\sqrt t\).** \(\theta\) is not invariant but *covariant*: a modular form of weight \(1/2\). Strict invariance under \(t\to1/t\) is carried instead by the combination \(t^{1/4}\theta(t)\), whose value at \(t=1\) is the self-dual normalization. The weight is the imprint of the measure; it is not optional, and it is where a physical version of this story would have to account for the Jacobian of \(a=1/r\).
- **The two cusps.** The limits \(t\to\infty\) and \(t\to0\) are the *cusps* of the modular domain. At \(t\to\infty\) the \(n=0\) term dominates and \(\theta\to1\); the \(S\)-transformation maps this to the \(t\to0\) behavior, where Poisson resummation is what makes the sum legible. The cusps are the degenerate limits; the self-dual point sits between them.

---

## 3. The dictionary

Identify CSBHI's horizon-normalized radius with the theta variable, \(r\leftrightarrow t\). Then **[C]**:

| Reciprocal interior | Modular / theta structure |
|---|---|
| \(a=1/r\) | \(S:\ t\to 1/t\) |
| horizon \(r=1\) | self-dual fixed point \(t=1\) (\(\tau=i\)) |
| Big Bang, \(r\to\infty\) (\(a\to 0\)) | cusp \(t\to\infty\) |
| de Sitter future, \(r\to 0\) (\(a\to\infty\)) | cusp \(t\to 0\) |
| infall \(\leftrightarrow\) expansion | \(S\)-exchange of the two cusps |

The dictionary reproduces, with no extra input, the two corollaries the involution note obtained geometrically: the fixed point lands on the crossing, and the two ends are exchanged. What it *adds* is the claim that the Big Bang and the de Sitter future are not two unrelated singular limits but a single **exchange pair** under the reciprocal — the same claim CSBHI already makes about infall and expansion, now stated at the level of the boundary structure of the geometry.

This is the point at which the earlier hypothesis "the self-dual point is the initial singularity" must be corrected. In the dictionary the initial singularity is a *cusp* (\(t\to\infty\)), dual to the *other* cusp (the de Sitter future). The self-dual point is the horizon, which sits at neither end. The next section says what it is instead.

---

## 4. The result: the self-dual point is maximal symmetry, not singularity

The physically loaded fact about self-dual points comes from T-duality **[P]**. In string theory a compactification at radius \(R\) and at \(\alpha'/R\) describe the same physics; the identity that proves it is exactly the theta transformation (3) via Poisson resummation of momentum and winding modes [4]. At the **self-dual radius** \(R=\sqrt{\alpha'}\) — the fixed point of \(R\to\alpha'/R\) — additional states become massless and the gauge symmetry is *enhanced* (the \(U(1)\to SU(2)\) point). The self-dual radius is the locus of **maximal**, not minimal, symmetry.

Carried across the dictionary **[C]**: the crossing surface \(r=1\) is where the infall description and the expansion description of the one geometry contribute on *equal footing* — neither "large \(r\)" (Bob's exterior language) nor "small \(r\)" (Alice's interior language) is preferred. It is the self-dual point of the local/global exchange, and by the T-duality analogy it is the surface where the reciprocal symmetry is realized most symmetrically, rather than a place where anything diverges. This is the honest inversion of the original guess:

\[
\boxed{
\text{self-dual point }r=1
\;=\;
\text{surface of maximal (enhanced) symmetry, not a singularity.}
}
\]

Three consequences worth stating plainly.

1. **The horizon is derived-special, not chosen-special.** GD1 normalizes the crossing to \(r=a=1\) by convention. The modular reading says any quantity respecting the reciprocal symmetry must treat \(r=1\) as its self-dual point — the convention is promoted to a structural distinction, using the same symmetry that forced \(a=1/r\).
2. **Singularity deferral is the cusp exchange.** That \(a=1/r\) sends the would-be singularity to Alice's infinite future (an involution corollary) is, in this language, the statement that the two singular cusps are an \(S\)-pair. The Big Bang and the de Sitter horizon are dual boundaries of one modular domain.
3. **The prediction to chase.** If the reciprocal is a genuine modular duality of some CSBHI spectral quantity, the crossing should carry *enhanced symmetry* — extra structure appearing precisely at \(r=1\). Finding or excluding that is the empirical edge of the whole construction (§7).

The caveat, up front and non-negotiable: enhanced symmetry at the self-dual radius is a fact about the *string spectrum*. It transfers to CSBHI only if CSBHI supplies a spectral sum with the right form. We have not built one. Section 4 is therefore **[C]**, an interpretation the framework *would* license, not a demonstrated interior property.

---

## 5. Do we need twistors, or does the complex part vanish?

A natural worry: theta functions live on the complex upper half-plane \(\mathrm{Im}\,\tau>0\), whereas CSBHI's \(r\) is real and positive. Must we complexify — import Penrose's twistor machinery — or can the imaginary part be set to zero?

The answer is intermediate, and favorable **[E]**. The entire self-dual structure of §§2–4 lives on the **imaginary axis** \(\tau=it\), parametrized by a *single real* \(t>0\). On that axis \(\theta(t)\) is real-valued, (3) is a real identity, and the self-dual point \(t=1\) is real. For the \(S\)-duality alone — which is all the involution establishes — one works entirely with real \(t\leftrightarrow r\). The "complex part" reduces to the bookkeeping identification \(\tau=it\); it is a real slice of a complex function, not an independent complex degree of freedom. So the lucky outcome the project hoped for is partly real: **the reciprocal duality is tractable on a real slice.**

Complex structure becomes *mandatory* only in two cases, both beyond the present claim:

- **The full modular group.** Adjoining a translation \(T:\tau\to\tau+1\) to the inversion \(S\) generates \(SL(2,\mathbb{Z})\), whose fundamental domain and automorphic forms require the two-dimensional upper half-plane. CSBHI currently has \(S\) (the reciprocal) but no identified \(T\). If a second, translation-like symmetry is ever found, the real slice no longer suffices.
- **Holomorphic/spectral depth.** Any attempt to *derive* the enhanced symmetry of §4 from a genuine partition function — rather than assert it by analogy — puts one in the holomorphic setting where twistor methods, which encode conformal and self-dual Weyl structure holomorphically, are the natural language. This is the same convergence noted in the complex-Weyl discussion: "is there a complex analogue of the Weyl tensor" and "are theta functions relevant" are two hats on one question — whether the reciprocal symmetry lifts to a holomorphic structure.

Practical reading: build on the real slice first; reach for twistors only if a \(T\) appears or a real partition function demands the holomorphic completion.

---

## 6. Prior art: what is already known, so CSBHI claims only what is new

Modular/theta structure in gravity and cosmology is a developed subject. The note must not reinvent it.

- **Cardy formula and black-hole entropy [P].** Modular \(S\)-invariance of a 2D CFT partition function relates the \(\tau\to0\) regime (the black hole) to the \(\tau\to i\infty\) regime (thermal AdS) and *fixes* the entropy — Cardy's formula, and via it the BTZ/Strominger microstate counting [5,6]. This is the mature version of "the two cusps are \(S\)-dual and their thermodynamics is related," and it is the natural target for the CSBHI entropy thread: if the reciprocal is modular, a Cardy-type relation should tie the entropies at the two cusps.
- **Modular quantum cosmology [P].** The wave function of the universe has been written in terms of explicitly \(S\)-invariant modular forms [7]. "Modular cosmology" therefore already exists; CSBHI does **not** get to claim the general idea. Its only candidate novelty is the *specific* identification of the reciprocal ansatz \(a=1/r\) with \(S\), and of the horizon with the self-dual point.
- **dS/CFT [P].** The de Sitter analogue of holography assigns a boundary description to the cosmological horizon [8,9] — the natural home for the de Sitter cusp of §3 and for any holographic reading of the reciprocal duality.
- **Theta functions in string theory [P].** Modular invariance of the string partition function and target-space (T-)duality are the original settings for (3) and for the enhanced-symmetry fact of §4 [4,10].

Positioned against this, CSBHI's contribution — *if* it survives the test in §7 — is narrow and specific: that the black-hole-interior/cosmology reciprocal is a modular \(S\)-duality, with the horizon as its self-dual point and the Big Bang / de Sitter future as its exchange pair.

---

## 7. The calculation that would make this a result

Everything above the result is either standard [E] or borrowed [P]; the result itself (§4) is conjecture [C]. To promote it, one calculation is needed **[O]**:

> Exhibit a CSBHI quantity — a partition function, a mode sum over the reciprocal interior, a horizon-entropy functional, or a spectral determinant — that is (i) a sum over a genuine spectrum and (ii) invariant, up to a computable weight, under \(a\leftrightarrow 1/a\). Show that its self-dual point coincides with \(r=1\), and read off whether the crossing carries enhanced structure.

Success would mean the reciprocal symmetry is a modular invariance of the physics, not merely of the coordinate map — and the theta function enforcing (ii) would be the function-theoretic completion of the involution result, exactly as the enhanced-symmetry reading predicts. Failure — no CSBHI quantity carries the invariance — would confine the entire modular picture to an analogy about the shape of the map, and this note should then be demoted to a curiosity. The two outcomes are distinguishable by explicit computation, which is the property that makes the exercise worth doing.

Candidate starting points, in rough order of tractability: the horizon-entropy accounting already under way in the thermodynamic notes (test for a Cardy-type cusp relation); a scalar-field mode sum on the de Sitter-asymptotic interior (test for theta resummation under \(a\leftrightarrow1/a\)); and, only if a translation symmetry surfaces, the full \(SL(2,\mathbb{Z})\) completion on the complex \(\tau\).

---

## References

1. B. Depouilly, *Theta series and modular forms* (lecture notes, ETH Zürich, 2022). [Standard derivation of (3) via Poisson summation.]
2. *Jacobi Theta Functions*, Wolfram MathWorld; D. Mumford, *Tata Lectures on Theta I* (Birkhäuser, 1983).
3. A. Dixit et al., *Self-reciprocal functions, powers of the Riemann zeta function and modular-type transformations*, arXiv:1312.1232.
4. A. Giveon, M. Porrati, E. Rabinovici, *Target space duality in string theory*, Phys. Rept. **244** (1994) 77, arXiv:hep-th/9401139. [Self-dual radius and enhanced symmetry.]
5. J. L. Cardy, *Operator content of two-dimensional conformally invariant theories*, Nucl. Phys. B **270** (1986) 186.
6. A. Strominger, *Black hole entropy from near-horizon microstates*, JHEP **02** (1998) 009, arXiv:hep-th/9712251; see also *Black holes and modular forms in string theory*, arXiv:2305.11732.
7. *Modular Quantum Cosmology*, arXiv:gr-qc/9810013. [\(S\)-invariant modular wave function of the universe — prior art for "modular cosmology."]
8. A. Strominger, *The dS/CFT Correspondence*, JHEP **10** (2001) 034, arXiv:hep-th/0106113.
9. *de Sitter Entanglement and Conformal Description of the Cosmological Horizon*, arXiv:1911.06627.
10. J. Polchinski, *String Theory, Vol. I* (Cambridge, 1998), ch. 8; *Theta functions, modular invariance, and strings*, Commun. Math. Phys. **106** (1986) 1.
11. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html). GD1.
12. Claude (Anthropic), [*The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution*](reciprocal-involution.html), this project.
