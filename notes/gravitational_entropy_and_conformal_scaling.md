# Gravitational Entropy as the Thermodynamic Face of Conformal Scaling

*Draft proposal note — a candidate identification, with its scope, its self-dual-minimum consequence, and its falsifying test.*

**Author:** Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Draft for review and triage. A conjectural identification; not derived. The mathematics it rests on (conformal weight of area, de Sitter horizon entropy) is standard; the identification with CSBHI's reciprocal scaling is the conjecture. Tiered **[E]** established, **[P]** prior art, **[C]** CSBHI conjecture, **[O]** open.

**Prerequisite:** [GD I](gd1.html); [*The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution*](reciprocal-involution.html).

**Companions:** [*Modular Self-Duality and the Reciprocal Symmetry*](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [*The Reciprocal Interior as a Conformal Crossover*](note.html?src=reciprocal_interior_conformal_crossover).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

---

## Abstract

The proposal of this note is a single identification:

\[
\boxed{
\text{gravitational entropy is a conformally-covariant geometric quantity, and the reciprocal map } a=1/r \text{ is how it runs.}
}
\]

Stated this way, it is close to forced by Penrose's own commitments rather than a fresh postulate. Penrose already holds that gravitational entropy is measured by the **Weyl tensor**, and the Weyl tensor is by construction the *conformal* part of curvature — the part preserved by conformal rescaling. So "gravitational entropy is a conformal-curvature quantity" is the Weyl Curvature Hypothesis restated. This note adds only the dynamics: the CSBHI reciprocal scaling supplies the monotonic evolution of that conformal quantity.

The identification has one immediate, non-trivial consequence. In CSBHI the interior does not begin at \(a=0\); it begins at the **self-dual fixed point \(a=1\)**, the horizon, which is the *minimum* of the scale on the interior branch. If gravitational entropy tracks a conformally-covariant horizon area (weight \(\Omega^2\)), then it is **finite and minimal at the crossing** and grows toward the de Sitter future \(a\to\infty\). The thermodynamic arrow is the direction of increasing conformal scale, and there is **no zero-entropy past** — the past boundary is the finite self-dual surface, not a vanishing scale factor. This dovetails with the modular result that the same self-dual point is the surface of *maximal symmetry*: high symmetry and low entropy are the same statement.

The load-bearing scope condition, stated up front: this governs **gravitational** entropy (area/Weyl, conformally covariant), **not** matter coarse-grained entropy (a dimensionless microstate count, conformally invariant). That is a feature — the quantity that was anomalously *low* in the early universe was always the gravitational one; the matter was already near-thermal. The proposal is therefore aimed at exactly the entropy Penrose's problem concerns.

If it holds, it supplies a resolution of CCC's entropy-reset problem that needs no information destruction (§5), and it closes a loop with the modular note's Cardy observation (§6). What would confirm or kill it is explicit and numerical (§7): whether \(S = f(a)\), made precise, reproduces the known gravitational-entropy budget and the de Sitter horizon value.

---

## 1. The proposal, stated precisely

Let \(a(\tau)=1/r(\tau)\) be the reciprocal scale of Alice's interior. The claim has two parts.

- **[E] Gravitational entropy is conformally covariant.** Horizon entropy is area, \(S=A/(4\ell_p^2)\) (Bekenstein–Hawking) [1,2]. Under a conformal rescaling \(g\to\Omega^2 g\), area carries weight \(\Omega^2\). Gravitational entropy is therefore *not* a conformal invariant; it transforms. This is standard and is the entire mechanical basis of the proposal.
- **[C] The reciprocal scale is the rescaling that governs it.** CSBHI's \(a=1/r\) is a scale relation on one black-hole history. The conjecture is that the gravitational entropy relevant to Alice's interior scales as the conformally-covariant area does under \(a\):
\[
S_{\rm grav}(a) \ \propto\ a^{2}\quad\text{(covariance scaling)}, \qquad S_{\rm grav}\ \xrightarrow{a\to\infty}\ S_{\rm dS}=\frac{3\pi}{\Lambda\ell_p^2}\quad\text{(dynamical endpoint)}.
\tag{1}
\]

**Correction — relation (1) is withdrawn.** The covariance law \(S\propto a^2\) does **not** hold: the de Sitter cosmological horizon has a *fixed physical radius*, so its entropy *saturates* at \(S_{\rm dS}\) rather than growing as \(a^2\) (the \(\Omega^2\) area weight applies to a comoving surface, not to the horizon, whose comoving radius shrinks as \(a\) grows — see Review Observations at the end). The surviving, corrected statement is the **local↔global horizon-entropy identity**: the parent black-hole horizon entropy equals the child de Sitter horizon entropy,
\[
S_{\rm BH}=S_{\rm dS}=\frac{\pi R_S^2}{G}\quad\text{at}\quad \Lambda=\frac{3}{R_S^2},
\]
the reciprocal exchanging the two ends as a self-duality (entropy invariant, temperature not). Read the rest of this note through that correction: §§4–6, which lean on the \(a^2\) covariance, are superseded by the identity and by the [2D-dilaton note](note.html?src=reciprocal_interior_as_2d_dilaton_gravity) §5.

---

## 2. Why this is nearly forced, not freely chosen

The identification is not an arbitrary marriage of "entropy" to "geometry." It is what Penrose's own hypothesis becomes once one asks what carries it dynamically.

- **[P]** Penrose: gravitational entropy is measured by the Weyl tensor \(C_{\alpha\beta\gamma\delta}\); a low-Weyl state is low gravitational entropy [4].
- **[E]** The Weyl tensor is the trace-free, *conformally invariant* part of the Riemann tensor: \(C[\Omega^2 g]\) and \(C[g]\) describe the same conformal structure. Weyl content is conformal content.
- **[C]** Therefore gravitational entropy is a *conformal-structure* quantity, and a theory whose dynamics is a conformal scaling (\(a=1/r\)) is precisely a theory of how that entropy runs.

There is a nearby, respectable tradition making "geometry is thermodynamics" precise: Jacobson derives the Einstein equation as a horizon equation of state [5]; Verlinde treats gravity as an entropic force [6]; Clifton–Ellis–Tavakol build a Weyl/Bel–Robinson gravitational-entropy functional that vanishes iff the geometry is conformally flat [7]. The present proposal sits inside this tradition and specializes it to the reciprocal interior.

---

## 3. The scope condition: gravitational, not matter, entropy

This is the distinction the whole proposal turns on, and getting it right is what keeps it honest.

| | Transforms under \(g\to\Omega^2g\)? | The proposal governs it? |
|---|---|---|
| **Gravitational / horizon entropy** \(S=A/4\ell_p^2\) | Yes — weight \(\Omega^2\) (area) | **Yes** [C] |
| **Matter coarse-grained entropy** \(S=k\ln W\) | No — a pure number | **No** [E] |

Matter entropy is a dimensionless microstate count; a conformal rescaling does not change how many microstates a macrostate contains. So the reciprocal scaling says nothing about it directly.

This is not a weakness but a correct aim. The early universe's *matter* was already near-maximal entropy — hot, dense, thermal. The quantity that was extraordinarily *low*, and whose lowness Penrose's argument is entirely about, was the **gravitational** entropy (Weyl \(\approx 0\): a smooth, unclumped gravitational field). So "entropy was lower in the past" refers, correctly, to exactly the conformally-covariant gravitational entropy this note governs. The discipline required is only lexical: say *gravitational entropy*, never "entropy" unqualified.

---

## 4. The self-dual minimum and the arrow of time

The non-trivial payoff. On the interior branch the reciprocal scale runs

\[
a: \underbrace{1}_{\text{horizon, self-dual point}} \longrightarrow \underbrace{\infty}_{\text{de Sitter future}}, \qquad r=1/a: 1\to 0.
\]

Because \(a=1\) is the *unique fixed point* of \(a=1/r\) (the involution result) and the *minimum* of \(a\) on this branch, the covariance scaling (1) makes gravitational entropy **minimal at the crossing and monotonically increasing toward \(a\to\infty\)**. Three consequences [C]:

1. **No zero-entropy past.** Alice's cosmology does not start at \(a=0\). Its past boundary is the finite self-dual surface \(a=1\), where \(S_{\rm grav}\) is finite and minimal. The perennial demand for an initial state of *vanishing* entropy is dissolved: the minimum is a fixed point, not a singular limit.
2. **The arrow is the direction of increasing conformal scale.** The Second Law's monotonic gravitational component is the monotonic running of \(a\) away from the self-dual minimum. The arrow's origin is the crossing, and its cause is ultimately the parent's collapse (why \(r\) decreases), which grounds the arrow in a dynamical fact rather than a stipulated boundary condition.
3. **Low entropy = high symmetry, at one surface.** The modular note found \(a=1\) to be the point of *maximal (self-dual) symmetry*. That it is also the point of *minimal gravitational entropy* is not a second coincidence: symmetric configurations are the special, low-entropy ones. The two results are the same fact seen thermodynamically and group-theoretically.

---

## 5. The entropy-reset problem of CCC, without information destruction

Conformal Cyclic Cosmology must shed the enormous entropy of a spent aeon to begin the next one low; Penrose supplies this by *destroying information* at black-hole evaporation — its most disputed element, since it breaks unitarity as usually understood. The present identification offers a different resolution [C]:

Gravitational entropy is **conformally scale-relative**. Each universe measures it from its *own* self-dual minimum \(a=1\). The parent's large final gravitational entropy and the child's small initial one sit at *different conformal scales*, related by the crossover rescaling \(\Omega\) at \(\Sigma\); there is nothing to reconcile and nothing to reset. Each aeon's arrow runs from its own fixed point. Combined with fresh matter-genesis at the child's hot Big Bang (the reciprocal patch's matter dilutes to a clean de Sitter boundary; the child's matter is generated anew), the entropy ledger closes with **no global reset and no information loss**.

This is the candidate cure for the entropy-reset objection that the CCC-comparison note records as otherwise open.

---

## 6. A consistency check with the modular note: Cardy

The modular note observed that modular \(S\)-invariance *fixes* entropy through Cardy's formula, relating the entropies at the two cusps. If the reciprocal \(a\leftrightarrow1/a\) is that \(S\)-duality, then two statements this project arrived at independently —

- *modular note:* entropy is fixed by \(S\)-invariance (Cardy);
- *this note:* entropy is the thermodynamic face of the reciprocal (\(S\)) scaling —

are the **same statement**. That is an internal consistency check, not a coincidence: a self-dual gravitational entropy is exactly what a Cardy-type relation under \(a\leftrightarrow1/a\) would produce. Whether an explicit Cardy computation on a CSBHI horizon reproduces (1) is a concrete sub-target [O].

---

## 7. What would confirm or kill this

The identification is falsifiable by explicit computation, which is what makes it worth pursuing rather than merely asserting [O].

1. **Reproduce the budget.** Make \(S_{\rm grav}=f(a)\) precise (which horizon area, which normalization) and check that it reproduces the known gravitational-entropy figures: the Gibbons–Hawking value \(S_{\rm dS}=3\pi/\Lambda\ell_p^2\approx 3\times10^{122}\) at \(a\to\infty\), and the crossing-epoch and present-epoch horizon entropies estimated in the WCH thread. If the reciprocal scaling cannot interpolate these, the identification fails numerically.
2. **Respect the statistical Second Law.** The proposal must *govern the gravitational arrow without replacing statistical mechanics for matter.* If made to claim that all entropy is conformal scale, it trivializes the statistical content of the Second Law and should be rejected. The correct claim is the narrow one: conformal scaling sets the gravitational/cosmological entropy and its boundary condition; the matter Second Law is a compatible, separate story.
3. **Monotonicity and covariance consistency.** Verify that the covariance weight (\(\Omega^2\) for area) and the dynamical de Sitter endpoint are consistent — i.e. that (1)'s two relations are the same \(S\) evaluated two ways, not two different quantities silently identified.

---

## 8. Status and residual

**[C]** The identification is a proposal, aimed correctly (at gravitational, not matter, entropy), consistent with Penrose's Weyl-entropy hypothesis and the Jacobson–Verlinde tradition, and productive (a self-dual entropy minimum, an arrow without a zero-entropy past, a CCC entropy-reset cure, a Cardy consistency loop).

**[O]** It is not derived, and its central test is numerical (§7.1). Until \(S_{\rm grav}=f(a)\) is written explicitly and checked against the horizon-entropy numbers, this is a well-motivated conjecture, not a result. It should be refined together with the CCC-comparison note and the modular note, whose Cardy observation it may complete.

---

## References

1. J. D. Bekenstein, "Black Holes and Entropy," *Phys. Rev. D* **7**, 2333 (1973).
2. S. W. Hawking, "Particle Creation by Black Holes," *Commun. Math. Phys.* **43**, 199 (1975).
3. G. W. Gibbons and S. W. Hawking, "Cosmological Event Horizons, Thermodynamics, and Particle Creation," *Phys. Rev. D* **15**, 2738 (1977).
4. R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, ed. Hawking & Israel (Cambridge, 1979).
5. T. Jacobson, "Thermodynamics of Spacetime: The Einstein Equation of State," *Phys. Rev. Lett.* **75**, 1260 (1995), [arXiv:gr-qc/9504004](https://arxiv.org/abs/gr-qc/9504004).
6. E. Verlinde, "On the Origin of Gravity and the Laws of Newton," *JHEP* **04**, 029 (2011), [arXiv:1001.0785](https://arxiv.org/abs/1001.0785).
7. T. Clifton, G. F. R. Ellis, R. Tavakol, "A Gravitational Entropy Proposal," *Class. Quantum Grav.* **30**, 125009 (2013), [arXiv:1303.5612](https://arxiv.org/abs/1303.5612).
8. J. L. Cardy, "Operator Content of Two-Dimensional Conformally Invariant Theories," *Nucl. Phys. B* **270**, 186 (1986).
9. G. Salehi, [GD1](gd1.html); Claude (Anthropic), [involution note](reciprocal-involution.html), [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry), this project.

---

## Review Observations (pending refinement — unresolved, do not treat as settled)

Accumulated during review; not yet integrated. Eq (1) and §§1–2 are challenged below.

- **[Codex] Eq (1) is internally inconsistent.** \(S\propto a^2\) and \(S\to S_{\rm dS}\) cannot be the same quantity: the de Sitter cosmological horizon has a *fixed physical radius* \(r_H=\sqrt{3/\Lambda}\), so its entropy \(S_{\rm dS}=3\pi/\Lambda\ell_p^2\) **saturates** while \(a\to\infty\). The \(\Omega^2\) area weight applies to a *comoving* surface, not to the horizon (whose comoving radius \(\sim1/(aH)\) shrinks). The covariance law \(S\propto a^2\) is **withdrawn**. Correct horizon entropy: \(S=\pi/(H_A^2\ell_p^2)\), monotone increasing as \(H_A\) falls, saturating at \(S_{\rm dS}\).

- **[obs 1] Two distinct gravitational entropies were conflated** — and this is a *feature to use*, not only a bug. Horizon entropy (Gibbons–Hawking, maximal at the smooth de Sitter boundary) and Weyl/clumping entropy (Penrose/CET, *minimal* at that boundary) behave oppositely. The child inherits the **low Weyl** (smooth low-entropy beginning, WCH) while the **horizon** ledger balances separately (next point). Keep them as two complementary ledgers.

- **[obs 2, revised] The "background Weyl \(=0\), nothing to run" objection was too narrow.** It ignored the local\(\leftrightarrow\)global exchange that is the project's core. The entropy content is carried not by the interior background Weyl but by the reciprocal map's exchange of the **local** parent black-hole horizon with the **global** child de Sitter horizon.

- **[corrected spine — G. Salehi] The local\(\leftrightarrow\)global horizon-entropy identity replaces \(S\propto a^2\).** With the idealized matching \(\Lambda=3/R_S^2\), the child de Sitter horizon radius is \(\sqrt{3/\Lambda}=R_S\) — the *same size as the parent Schwarzschild horizon*. Hence
\[
S_{\rm BH}(\text{parent, local})=\frac{4\pi R_S^2}{4\ell_p^2}=\frac{\pi R_S^2}{\ell_p^2}=\frac{3\pi}{\Lambda\ell_p^2}=S_{\rm dS}(\text{child, global}).
\]
An **identity**, not a decrease and not a reset: the reciprocal map \(a=1/r\) exchanges the local BH horizon with the global cosmological horizon and their entropies coincide. This is the WCH-thread entropy identity, now read as the local/global exchange. **Conditional** on the idealized \(\Lambda=3/R_S^2\) matching (transverse-curvature jump unresolved). The *literal* Weyl-tensor transformation ("local Weyl \(\to\) global Weyl") remains uncomputed — the Q3 throat-Weyl problem; the clean result above is about horizon *areas*, with Weyl as the motivating intuition.

- **Knock-on:** the CCC entropy-reset "cure" (companion note §4) should be re-derived from this horizon-entropy identity, not from the withdrawn conformal-covariance argument.
