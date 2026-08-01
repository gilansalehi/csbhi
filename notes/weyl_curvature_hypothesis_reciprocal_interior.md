# The Weyl Curvature Hypothesis as a Structural Feature of the Reciprocal Interior

*Technical note — draft for review*

**Author:** Claude (Anthropic), from discussion with G. Salehi.

**Date:** 2026-08-01.

> **Framing and honesty note.** This is a claim of *realization*, not *solution*. The idea that black holes supply the low-entropy initial conditions of new cosmological regions is Penrose's own (Conformal Cyclic Cosmology) and Smolin's (cosmological natural selection), and explicit black-hole-cosmology models of the Weyl Curvature Hypothesis already exist. What CSBHI contributes is a *specific geometric mechanism* — the reciprocal map \(a=1/r\), now derived as the unique scale-free horizon-fixing involution — that makes a black-hole interior conformally flat, so that the smooth beginning is structural rather than posited. Everything below is tagged by tier: **[E]** exact/textbook, **[G]** consequence of GD's established structure, **[I]** interpretive (shared with CCC/CNS), **[O]** open.

## 1. The hypothesis

Penrose's Weyl Curvature Hypothesis (1979) addresses the deepest form of the arrow-of-time problem. The matter content of the early universe was in near-thermal equilibrium — *high* matter entropy — yet the universe as a whole was in an extraordinarily *low* total-entropy state, because the **gravitational** degrees of freedom were unexcited. Penrose identified the measure of gravitational entropy with the **Weyl tensor** \(C_{abcd}\): the initial singularity had vanishing Weyl (the geometry was smooth, conformally flat), while final singularities inside black holes have diverging Weyl. The low initial gravitational entropy is what makes the second law possible; its origin is unexplained, and the required fine-tuning is famously severe (Penrose's phase-space estimate of \(1\) part in \(10^{10^{123}}\)).

Concretely **[E]**: gravitational entropy is naturally built from the Bel–Robinson tensor, quadratic in the Weyl tensor; when \(C_{abcd}=0\) the spacetime is conformally flat and the gravitational field carries no entropy. The hypothesis is therefore, at the initial state,

\[
C_{abcd}\longrightarrow 0 \qquad\text{(conformal flatness at the beginning).}
\]

## 2. The reciprocal interior is conformally flat

The single most robust structural fact about Alice's interior is that it is spatially flat FLRW, and **every FLRW geometry is conformally flat** **[E]**:

\[
C_{abcd}=0 \quad\text{throughout the homogeneous reciprocal interior.}
\]

In GD this is not an added assumption but a consequence of the reciprocal-conformal structure **[G]**. The interior line element (GD1 §5) is a global conformal rescaling,

\[
ds^2=\frac{1}{r^2}\!\left[-\frac{dr^2}{H_A(r)^2}+dR^2+R^2d\Omega^2\right],
\]

with conformal factor \(a^2=1/r^2\); the probe congruence expands isotropically with **zero shear** (GD1 §4). Isotropic, shear-free, spatially flat expansion is conformally flat expansion. The exterior it is joined to is the opposite: Schwarzschild/Kottler is Petrov type D with

\[
\Psi_2=-\frac{GM}{R^3}\neq 0 \qquad\text{(parent Weyl non-zero)} \quad\textbf{[E]}.
\]

So across the horizon the Weyl tensor runs from **non-zero (parent)** to **exactly zero (child)**.

## 3. Why this is the WCH initial condition, structurally

Penrose's condition is not "no matter" — it is "hot matter, smooth geometry": large Ricci (thermal stress-energy) with vanishing Weyl. The reciprocal interior delivers exactly this **[G]**. Alice's interior is an FLRW state whose Ricci curvature is sourced by ordinary matter and radiation (arbitrarily hot and dense near the beginning of her history) while its Weyl curvature is identically zero. That is precisely a **low gravitational-entropy, high matter-entropy** initial state — the Weyl Curvature Hypothesis, satisfied not by tuning initial data but because *a black-hole interior related to its exterior by the reciprocal conformal map is conformally flat.*

The fine-tuning Penrose highlights is thereby relocated, not waved away. In CSBHI the improbable smoothness of the beginning is the *generic* appearance of a reciprocal interior; what must then be explained is the map itself — why parent/child exchange acts as the scale-free horizon-fixing involution that forces \(a=1/r\). That is a sharply posed geometric question (open-questions Q15), and it is a far smaller target than "why was the initial state one special point in \(10^{10^{123}}\)."

## 4. The arrow of time and the recursion

The Weyl tensor supplies the temporal asymmetry directly **[I]**:

- **Birth (Weyl \(=0\)).** The child begins conformally flat — zero gravitational entropy.
- **Growth (Weyl \(\uparrow\)).** As perturbations grow and structure forms, \(C_{abcd}\) becomes non-zero and the Bel–Robinson gravitational entropy increases monotonically — the thermodynamic arrow, pointing with cosmic expansion.
- **Reset.** Structure collapses into black holes (diverging Weyl), each of which is the crossing surface of a *new* reciprocal interior, born again conformally flat.

This is the same mechanism Penrose invokes in Conformal Cyclic Cosmology — black holes "suppress degrees of freedom, disconnecting them from the later global stages" — and the same recursion Smolin proposed. CSBHI's distinctive element is that the reset is a *conformal rescaling* (\(a=1/r\)) with the horizon as its unique fixed point (see the involution proof): the crossing is literally a conformal boundary, and \(r=0\) is Alice's future conformal boundary at infinite proper time and finite curvature (GD1 §6) — a structure that rhymes strongly with CCC's conformal infinity, though CSBHI's aeons are *nested* (a black-hole interior) rather than *sequential*.

## 5. What is solid, what is inherited, what is open

- **Solid [E,G]:** the reciprocal interior is conformally flat (Weyl \(=0\)); the exterior is not; the interior therefore instantiates a hot, geometrically smooth, low-gravitational-entropy beginning — the geometric content of the WCH — as a structural consequence of \(a=1/r\).
- **Inherited [I]:** the black-hole-as-entropy-reset picture and the recursive arrow of time are shared with Penrose's CCC and Smolin's cosmological natural selection. CSBHI is a particular geometric realization, not the first proposal of the idea.
- **Open [O]:**
  1. *Perturbations.* The Weyl \(=0\) statement is for the homogeneous background. The full low-entropy claim requires that the initial *perturbation* Weyl also be small — the near-scale-invariant, unexcited tensor sector (open-questions Q7). CSBHI has not yet derived the perturbation spectrum.
  2. *The reset dynamics.* How the parent's non-zero Weyl is shed at the crossing to yield an exactly conformally flat child is the throat/junction problem (open-questions Q3). Quantitatively, this is a Bel–Robinson bookkeeping question across the throat, not yet computed.
  3. *The map itself.* Why the exchange is a scale-free horizon-fixing involution (Q15) is the residual under everything here.

## 6. The concrete next step

To upgrade this from a structural observation to a calculation, compute the Bel–Robinson-based gravitational entropy (e.g. the Clifton–Ellis–Tavakol proposal) on both sides of the crossing and through Alice's subsequent evolution, and show:

\[
S_{\rm grav}^{\rm child}(\text{birth})=0,
\qquad
\frac{dS_{\rm grav}^{\rm child}}{d\tau}\ge 0,
\]

with the reset \(S_{\rm grav}^{\rm parent}\to 0\) effected by the conformal crossing. The monotone increase inside the child is essentially automatic once perturbations grow from a smooth start; the load-bearing and genuinely novel piece is the *reset across the throat*, which ties this program directly to the open junction geometry (Q3). If the reset can be exhibited, CSBHI would provide not merely a spacetime that *satisfies* the WCH but a mechanism that *enforces* it at every generation.

## 7. Statement suitable for external review

> The reciprocal ansatz \(a=1/r\) makes a black-hole interior conformally flat. A universe so constructed begins with vanishing Weyl curvature — a hot, geometrically smooth, low-gravitational-entropy state — as a structural property rather than a fine-tuned initial condition. This realizes the geometric content of Penrose's Weyl Curvature Hypothesis within an explicit, recursive black-hole cosmology, and identifies the low-entropy reset with a conformal crossing whose unique fixed point is the horizon. It does not yet derive the perturbation sector or the reset dynamics; those are the stated open problems.

---

## References

1. Penrose, R. "Singularities and Time-Asymmetry." In *General Relativity: An Einstein Centenary Survey*, ed. Hawking & Israel. Cambridge University Press, 1979.
2. Penrose, R. *Cycles of Time: An Extraordinary New View of the Universe.* Bodley Head, 2010. (Conformal Cyclic Cosmology.)
3. Tod, K. P. "Isotropic Cosmological Singularities: Other Matter Models." *Classical and Quantum Gravity* 20 (2003): 521. (Conformal-flatness formulation of the WCH.)
4. Clifton, T., Ellis, G. F. R., Tavakol, R. "A Gravitational Entropy Proposal." *Classical and Quantum Gravity* 30 (2013): 125009. [arXiv:1303.5612](https://arxiv.org/abs/1303.5612).
5. Smolin, L. *The Life of the Cosmos.* Oxford University Press, 1997. (Cosmological natural selection.)
6. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html). GD1.
7. [*The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution*](reciprocal-involution.html). This project.
