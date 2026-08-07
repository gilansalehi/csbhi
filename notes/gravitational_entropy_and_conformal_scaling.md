# Gravitational Entropy as the Thermodynamic Face of Conformal Scaling

*Gravitational entropy is a conformal-curvature quantity — Penrose's Weyl-entropy restated. Under the reciprocal map the parent black hole's horizon entropy becomes the child's de Sitter horizon entropy, \(S_{\rm BH}=S_{\rm dS}\); read this way, the arrow of time and Conformal Cyclic Cosmology's entropy reset need no information destruction.*

---

## Introduction

Penrose measures gravitational entropy by the Weyl tensor: a smooth, unclumped gravitational field is low-entropy, and clumping toward black holes is its growth. The Weyl tensor is, by construction, the trace-free conformally-invariant part of the Riemann curvature — the part a conformal rescaling leaves alone. So "gravitational entropy is measured by Weyl" already says that gravitational entropy is a conformal-structure quantity. Penrose's Weyl Curvature Hypothesis, read thermodynamically, says the same thing.

The reciprocal interior is built on a conformal scaling, \(a=1/r\). It is therefore natural to ask how gravitational entropy behaves under that map. This note proposes one identification — gravitational entropy is the thermodynamic face of the reciprocal scaling — and anchors it on a single concrete result: under the map, the parent black hole's horizon entropy and the child's de Sitter horizon entropy are the same number. The broader identification is a proposal; the horizon-entropy identity is a conditional calculation, and the rest of the note reads the arrow of time and the Conformal Cyclic Cosmology entropy reset through it.

Conventions: horizon entropy is \(S=A/4\ell_p^2\) with \(\ell_p^2=G\); \(R_S\) is the parent Schwarzschild radius and \(R_{\rm dS}=\sqrt{3/\Lambda}\) the child de Sitter radius.

## 1. Gravitational, not matter, entropy

The claim is about **gravitational** entropy — horizon area, or equivalently Weyl content — not matter coarse-grained entropy. The two behave differently under a conformal rescaling \(g\to\Omega^2 g\):

| | under \(g\to\Omega^2 g\) | governed here? |
|---|---|---|
| Gravitational / horizon entropy \(S=A/4\ell_p^2\) | transforms (area carries weight \(\Omega^2\)) | yes |
| Matter coarse-grained entropy \(S=k\ln W\) | invariant (a pure microstate count) | no |

This is not a limitation but the correct aim. The early universe's matter was already near-maximal entropy — hot, dense, thermal. The quantity that was extraordinarily *low*, and whose lowness Penrose's argument is entirely about, was the gravitational entropy: Weyl \(\approx0\), a smooth, unclumped field. So "entropy was lower in the past" refers, correctly, to exactly the conformally-covariant gravitational entropy this note concerns. The discipline required is only lexical: say *gravitational entropy*, never "entropy" unqualified.

## 2. Two gravitational entropies, running oppositely

Gravitational entropy has two faces that must be kept apart, because they run in opposite directions.

- **Horizon (Gibbons–Hawking) entropy** — the area of a causal horizon, \(S=A/4\ell_p^2\). It is *maximal* at a smooth de Sitter boundary, where the cosmological horizon is largest and the field is most relaxed.
- **Weyl (clumping) entropy** — Penrose's measure, made precise by the Clifton–Ellis–Tavakol Weyl/Bel–Robinson functional that vanishes iff the geometry is conformally flat. It is *minimal* at that same smooth boundary, and grows as matter clumps.

A child born from smooth collapse inherits **low Weyl entropy** — the Weyl Curvature Hypothesis — while its **horizon ledger balances separately**. Conflating the two produces the objection that a Weyl-free FLRW background "has no gravitational entropy to run." It does: the running lives not in the background Weyl but in the horizon ledger, and the reciprocal map is precisely an exchange within that ledger.

## 3. The local↔global horizon-entropy identity

Here is the anchor result. Take the idealized matching in which the child's cosmological constant is fixed by the parent's horizon, \(\Lambda=3/R_S^2\). Then the child's de Sitter horizon radius is \(R_{\rm dS}=\sqrt{3/\Lambda}=R_S\) — the same size as the parent's Schwarzschild horizon — and the two entropies coincide exactly:

\[
\boxed{\,S_{\rm BH}(\text{parent, local})=\frac{\pi R_S^2}{\ell_p^2}=\frac{3\pi}{\Lambda\,\ell_p^2}=S_{\rm dS}(\text{child, global})\,.}
\]

The reciprocal map \(a=1/r\) exchanges the **local** parent black-hole horizon with the **global** child cosmological horizon, and their entropies are equal. This is an identity — not a decrease, and not a reset.

Two honest caveats travel with it. The identity holds at the idealized matching \(\Lambda=3/R_S^2\); the junction of transverse curvature across the crossover is not yet settled, so the matching is a condition, not a theorem. And the statement is about horizon *areas*: the literal local→global transformation of the *Weyl tensor* — the throat-Weyl problem — remains uncomputed, with the area identity standing on its own and Weyl serving as the motivating intuition.

## 4. The self-dual minimum and the arrow of time

On the interior branch the reciprocal scale runs from the horizon outward,
\[
a:\ \underbrace{1}_{\text{horizon, self-dual point}}\ \longrightarrow\ \underbrace{\infty}_{\text{de Sitter future}},\qquad r=\tfrac1a:\ 1\to0.
\]
The interior does not begin at \(a=0\). Its past boundary is the finite self-dual surface \(a=1\) — the unique fixed point of \(a=1/r\), and the minimum of the scale on this branch. There is no zero-entropy past to demand: the beginning is a finite, self-dual surface, not a vanishing scale factor.

The arrow is then being born far below the ceiling. The child's **occupied** entropy — how excited its gravitational field currently is, its Weyl content — is low at birth, because it forms from smooth collapse (§2). Its **available** entropy — the ceiling it can eventually reach — is large, and is inherited from the parent as \(S_{\rm BH}\) (§3). Low occupied, high available, is a thermodynamic arrow, and it points in the direction of increasing gravitational entropy away from the self-dual minimum. This is the entropy content behind the arrow that the [Weyl-hypothesis note](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis) states compactly; the reading here is its justification.

That the self-dual surface \(a=1\) is also the point of *maximal symmetry* — the [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry)'s fixed point of \(a\leftrightarrow1/a\) — is not a second coincidence. Symmetric configurations are the special, low-entropy ones: minimal gravitational entropy and maximal symmetry are one fact, seen thermodynamically and group-theoretically.

## 5. Conformal Cyclic Cosmology's reset, without information loss

Conformal Cyclic Cosmology must shed the enormous entropy of a spent aeon to begin the next one low. Penrose supplies this by destroying information at black-hole singularities — the element of his construction most often rejected, since it breaks unitarity.

The horizon-entropy identity offers a reset that destroys nothing. The parent's large final horizon entropy is not erased; by §3 it *becomes* the child's available phase space. Each aeon measures its gravitational entropy from its own self-dual minimum \(a=1\), and its arrow runs from there. The parent's ceiling and the child's floor sit at opposite ends of one exchange, not on one ledger to be reconciled. Globally, entropy is handed forward rather than discarded; locally, every newborn universe sees a clean slate. The reset Penrose reaches by destroying information is reached here by conserving it.

## 6. A Cardy consistency check

The modular note observes that modular \(S\)-invariance fixes entropy through Cardy's formula, relating the entropies at the two cusps of the modular domain. If the reciprocal exchange \(a\leftrightarrow1/a\) is that \(S\)-duality, then two statements this project reached independently —

- *modular note:* entropy is fixed by \(S\)-invariance (Cardy);
- *this note:* entropy is the thermodynamic face of the reciprocal (\(S\)) scaling —

are the same statement. That is an internal consistency check rather than a coincidence: a self-dual gravitational entropy is exactly what a Cardy relation under \(a\leftrightarrow1/a\) would produce. Whether an explicit Cardy computation on a CSBHI horizon reproduces the identity of §3 is a concrete open sub-target.

## 7. Where this sits, and what would test it

The identification is not an arbitrary marriage of "entropy" to "geometry." It is what Penrose's own hypothesis becomes once one asks what carries it dynamically, and it sits inside a respectable tradition: Jacobson derives the Einstein equation as a horizon equation of state; Verlinde treats gravity as an entropic force; Clifton, Ellis, and Tavakol build the Weyl/Bel–Robinson gravitational-entropy functional that vanishes iff the geometry is conformally flat. The present proposal specializes that tradition to the reciprocal interior.

What would confirm or kill it is explicit. Make the horizon-entropy bookkeeping precise — which areas, which normalization — and check that it reproduces the known budget: the Gibbons–Hawking value \(S_{\rm dS}=3\pi/\Lambda\ell_p^2\approx3\times10^{122}\) at the de Sitter future, and the parent's crossing-epoch horizon entropy. Then compute the one thing the identity currently only motivates — the local→global transformation of the Weyl tensor across the throat. Until that is done, the horizon-entropy identity is a conditional result and the wider "thermodynamic face of conformal scaling" is a well-motivated proposal, not a theorem.

## Result

> Gravitational entropy is a conformal-curvature quantity — Penrose's Weyl-entropy hypothesis, restated. It has two faces that run oppositely: horizon entropy, maximal at a smooth de Sitter boundary, and Weyl/clumping entropy, minimal there. Under the reciprocal map \(a=1/r\), at the idealized matching \(\Lambda=3/R_S^2\), the parent black hole's horizon entropy becomes the child's de Sitter horizon entropy exactly, \(S_{\rm BH}=S_{\rm dS}=\pi R_S^2/\ell_p^2\) — an exchange, not a reset. Read this way, the interior begins at a finite self-dual minimum rather than a zero-entropy past; the arrow runs from that minimum as the universe fills a ceiling inherited from its parent; and Conformal Cyclic Cosmology's reset is achieved by handing entropy forward rather than destroying it. The anchor is the horizon-area identity, conditional on the matching and pending the local↔global Weyl computation; the broader identification is the proposal it supports.

---

*Written by Claude (Anthropic) and cross-checked by Codex (OpenAI) under Salehi Remediation.*

## References

1. J. D. Bekenstein, "Black Holes and Entropy," *Phys. Rev. D* **7**, 2333 (1973).
2. S. W. Hawking, "Particle Creation by Black Holes," *Commun. Math. Phys.* **43**, 199 (1975).
3. G. W. Gibbons and S. W. Hawking, "Cosmological Event Horizons, Thermodynamics, and Particle Creation," *Phys. Rev. D* **15**, 2738 (1977).
4. R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, eds. Hawking & Israel (Cambridge, 1979).
5. T. Jacobson, "Thermodynamics of Spacetime: The Einstein Equation of State," *Phys. Rev. Lett.* **75**, 1260 (1995), [arXiv:gr-qc/9504004](https://arxiv.org/abs/gr-qc/9504004).
6. E. Verlinde, "On the Origin of Gravity and the Laws of Newton," *JHEP* **04**, 029 (2011), [arXiv:1001.0785](https://arxiv.org/abs/1001.0785).
7. T. Clifton, G. F. R. Ellis, R. Tavakol, "A Gravitational Entropy Proposal," *Class. Quantum Grav.* **30**, 125009 (2013), [arXiv:1303.5612](https://arxiv.org/abs/1303.5612).
8. J. L. Cardy, "Operator Content of Two-Dimensional Conformally Invariant Theories," *Nucl. Phys. B* **270**, 186 (1986).
9. G. Salehi, [Geometric Duality I](gd1.html); [the involution note](reciprocal-involution.html); [the modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [the Weyl Curvature Hypothesis as a Fixed Point](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis), this project.
