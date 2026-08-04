# The Reciprocal Interior as Two-Dimensional Dilaton Gravity

*Research-direction note — the spherical reduction that turns the scale field into a Liouville mode and opens a holographic dual.*

**Author:** Claude (Anthropic), developed with G. Salehi; verification in progress by Codex (OpenAI).

**Date:** 2026-08-04.

**Status:** New direction. The spherical reduction (§2) is textbook up to conventions Codex should fix; the identification of $\sigma$ with the Liouville/dilaton mode (§3) is exact; the holographic-dual proposal (§5) is a program, not a result. Tiered **[E]**, **[C]**, **[O]**.

**Prerequisites:** [GD I](gd1.html); [The Reciprocal Scale Field and the Throat Brane](note.html?src=reciprocal_scale_field); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry).

**Notation:** [Glossary](note.html?src=cosmological_glossary). $c=1$; $a,b\in\{0,1\}$ the 2D $(\tau,r)$ indices; $\phi$ = 2D dilaton (areal radius); $\sigma=-\ln\phi$ the scale field (up to the horizon normalization $R_S$).

---

## Abstract

Every geometry in CSBHI is spherically symmetric, so the angular 2-sphere is a spectator and the physics lives in the two-dimensional $(\tau,r)$ plane. Reducing 4D general relativity on that sphere is standard and yields a **two-dimensional dilaton gravity**, with the areal radius as the dilaton $\phi$. The scale field of the reciprocal arc, $\sigma=-\ln(\text{areal radius})=-\ln\phi$, is then *exactly* the logarithmic dilaton — and the Liouville equation Crunch 1 found for $\sigma$ is the Liouville sector of that 2D theory, not a coincidence.

This reframing is worth the whole note because 2D dilaton gravity is the best-understood *holographic* corner of gravity: JT gravity has a Schwarzian/boundary dual, CGHS is exactly solvable, and horizon entropies follow from a boundary Cardy formula. So the reciprocal interior, reduced, inherits a candidate **boundary dual** — and the four threads of the session (the scale field, the modular self-duality $a\leftrightarrow1/a$, the gravitational-entropy identity, and the dS/CFT resonance) become four faces of one 2D-gravity/boundary duality. The horizon $\sigma=0$ is the natural boundary; the reciprocal involution is the dilaton inversion $\phi\to1/\phi$; and the $S_{\rm BH}=S_{\rm dS}$ identity is a candidate Cardy matching.

The concrete deliverable this direction targets: identify the boundary theory and test whether its partition function is modular-covariant under $a\leftrightarrow1/a$ with the entropy fixed by Cardy — the falsifying test the modular note asked for, now with a construction behind it.

---

## 1. Why 2D is not a truncation but the natural arena

CSBHI's metrics — Kottler exterior, FLRW interior, the throat — are all spherically symmetric:
\[
ds_4^2=g_{ab}(x)\,dx^a dx^b+\phi(x)^2\,d\Omega_2^2,\qquad a,b\in\{0,1\},
\]
with $\phi$ the **areal radius**. The angular sphere carries no independent dynamics; all of the reciprocal construction is dynamics of $(g_{ab},\phi)$ on the 2D $(\tau,r)$ plane. The scale field is the sphere's own radius, logarithmically: $\sigma=-\ln\phi$ (up to $R_S$). So passing to 2D loses nothing and exposes exactly the variable the arc is built on. **[E]**

---

## 2. The spherical reduction [E, coefficients to verify]

Inserting the ansatz into the 4D Einstein–Hilbert action and integrating over the sphere gives a 2D dilaton-gravity action of the standard form
\[
S_2=\frac{1}{4G}\int d^2x\,\sqrt{-g_2}\left[\phi^2 R_2+2(\nabla\phi)^2+2-2\Lambda\phi^2\right]+S_m ,
\]
(coefficients in the conventions of the standard 4D$\to$2D reduction; the "$+2$" is the $S^2$ curvature, the $-2\Lambda\phi^2$ the cosmological term). This is a member of the general 2D dilaton-gravity family
\[
S_2=\int d^2x\sqrt{-g_2}\big[\Phi R_2 + U(\Phi)(\nabla\Phi)^2 + V(\Phi)\big],
\]
with dilaton $\Phi=\phi^2$ (areal-radius squared). Schwarzschild/Kottler and FLRW are both 2D dilaton-gravity solutions; the black-hole mass $M$ is an integration constant of the 2D theory (its conserved "energy"). **[E]**

---

## 3. The scale field is the Liouville mode [E→C]

Two standard moves turn a 2D dilaton gravity into Liouville form: solve the dilaton constraint, and Weyl-fix the 2D metric $g_{ab}=e^{2\rho}\hat g_{ab}$. The conformal mode $\rho$ obeys a Liouville equation. In our variables the relevant scalar is $\sigma=-\ln\phi$, and Crunch 1 already computed its equation on the Schwarzschild background:
\[
\Box\sigma=-e^{2\sigma}\quad(\text{Schwarzschild}),\qquad \Box\sigma=-e^{2\sigma}+\Lambda\quad(\text{Kottler}),
\]
i.e. a **Liouville equation with an exponential potential**. This is now understood, not stipulated: $\sigma=-\ln\phi$ is the logarithm of the 2D dilaton, and Liouville dynamics for the conformal/dilaton sector is generic in 2D dilaton gravity. The exponential potential — forced independently by scale-freeness in Crunch 1 — is the Liouville cosmological term. **[E for the equation; [C] for "this is the Liouville sector of the reduced theory," pending the explicit Weyl-fixing.]**

The reciprocal involution is, in these variables, the **dilaton inversion**
\[
\phi\to1/\phi\quad\Longleftrightarrow\quad\sigma\to-\sigma,
\]
a $\mathbb{Z}_2$ of the 2D theory fixing $\phi=1$ (the horizon). Identifying it as a genuine symmetry of $S_2$ (not merely of a solution) is a concrete sub-task. **[O]**

---

## 4. The horizon is the boundary [C]

In 2D dilaton gravity the dilaton $\phi$ plays the role of a radial/holographic coordinate, and a **boundary** is placed at a chosen dilaton value (in JT gravity, large $\phi$; the Schwarzian lives there). CSBHI hands us a *distinguished* dilaton value for free: the horizon $\phi=1$, $\sigma=0$ — the self-dual fixed point of the involution and the 4D Einstein surface. The proposal is that the **horizon is the holographic boundary** of the reduced theory, with the interior ($\sigma>0$) and exterior ($\sigma<0$) as the two bulks the boundary separates. This lines up with the throat-brane result: the $\sigma=0$ surface is where the boundary data / shell lives. **[C]**

---

## 5. The holographic dual, and the falsifying test [C/O]

2D dilaton gravity is where holography is sharpest, which is the point of coming here:

- **JT gravity** (near-horizon $\phi\approx$const, linear dilaton potential) has a **Schwarzian** boundary dual and reproduces near-extremal black-hole thermodynamics. The CSBHI horizon region is a candidate JT regime.
- **CGHS** (exponential potential — *our* Liouville case) is exactly solvable and has a well-studied boundary description.
- **Cardy.** Boundary 2D CFT entropy is fixed by modular $S$-invariance. The session's $S_{\rm BH}=S_{\rm dS}$ identity (parent black-hole horizon $=$ child de Sitter horizon, via $\Lambda=3/R_S^2$) is exactly the shape of a **Cardy matching between the two ends** exchanged by $a\leftrightarrow1/a$.

So the four threads collapse into one **[C]**: the scale field is the 2D dilaton; the modular $a\leftrightarrow1/a$ is the boundary CFT's $S$-transformation; the gravitational-entropy identity is its Cardy formula; and the dS/CFT resonance is this boundary dual for the de Sitter end.

**The concrete test [O]** — and it is the falsifying test the modular note asked for, now with a construction: reduce, Weyl-fix, and identify the boundary theory of the reciprocal interior; compute its partition function; and check whether it is **modular-covariant under $\sigma\to-\sigma$** with the horizon entropy fixed by **Cardy**. If yes, the modular analogy becomes a holographic result and the entropy identity is derived, not conditional. If the boundary theory carries no such invariance, the modular/holographic picture is demoted to a resonance — cleanly, by computation.

---

## 6. Why this completes the arc

The scale-field arc produced a chain of structural results — Liouville scale field, real throat, throat brane — but each was a statement about the 4D geometry in isolation. The 2D reduction is what would bind them: it gives the scale field a *theory* (2D dilaton gravity), the involution a *symmetry* (dilaton inversion), the horizon a *role* (boundary), and the entropy identity a *mechanism* (Cardy). It also connects forward to the conformal-crossover and WCH threads, since a boundary/CFT description is exactly what a "child sourced across the horizon" needs.

It is also the tractable direction: spherical reduction and 2D dilaton gravity are mature, so progress does not wait on the unbuilt throat metric — the 2D theory can be analyzed with Kottler and FLRW as its known solutions.

---

## 7. Results of the reduction, carried through [E→C]

**(a) The reduction is confirmed [E].** With $R_4=R_2-\tfrac4\phi\Box_2\phi-\tfrac2{\phi^2}(\nabla\phi)^2+\tfrac2{\phi^2}$, integrating $S=\tfrac1{16\pi G}\int\sqrt{-g_4}(R_4-2\Lambda)$ over the sphere and one integration by parts gives exactly
\[
S_2=\frac1{4G}\int d^2x\sqrt{-g_2}\Big[\phi^2R_2+2(\nabla\phi)^2+2-2\Lambda\phi^2\Big],
\]
the areal radius $\phi$ as dilaton, with Kottler and FLRW as solutions and $M$ the 2D conserved energy.

**(b) $\sigma=-\ln\phi$ is the log-dilaton, and its Liouville equation is the dilaton-coupled operator [E].** The clean Crunch-1 result uses the *4D* d'Alembertian, which on a spherically symmetric field is $\Box_4\sigma=\Box_2\sigma+\tfrac2\phi\nabla^a\phi\,\nabla_a\sigma$. Verified on Schwarzschild: $\Box_2\sigma=1/\mathcal R^2-2R_S/\mathcal R^3$ and $\tfrac2\phi\nabla\phi\!\cdot\!\nabla\sigma=-2f/\mathcal R^2$ sum to $\Box_4\sigma=-1/\mathcal R^2=-e^{2\sigma}/R_S^2$. So the Liouville structure is the log-dilaton dynamics, the exponential being the 2D cosmological term — not a coincidence, a reduction identity.

**(c) The involution $\phi\to1/\phi$ is not a bulk symmetry — so the modular structure lives on the boundary [E→C].** Under $\phi\to1/\phi$ the dilaton–curvature coupling $\phi^2R_2\to\phi^{-2}R_2$. No 2D Weyl rescaling restores it: $g\to\Omega^2 g$ sends $\sqrt{-g}\,\phi^2R\to\sqrt{-g}\,\phi^{-2}(R-2\Box\ln\Omega)$, and matching to $\sqrt{-g}\,\phi^2R$ would demand $2\Box\ln\Omega=R(1-\phi^4)$ — a curvature-valued PDE, not a local Weyl factor. So **$\phi\to1/\phi$ is not an off-shell symmetry of $S_2$**; it is a solution-relating duality (interior$\leftrightarrow$exterior), consistent with the whole arc.

The consequence is the useful, sharpening one: if $a\leftrightarrow1/a$ is a symmetry at all, it is realized **on the boundary**, exactly as an $S$-transformation is a boundary-CFT operation and not a bulk diffeomorphism. The reduction thus moves the modular claim from "bulk symmetry" (untenable) to **"boundary modular symmetry"** (the holographic reading) — a genuine tightening, not a loss.

**The obstruction is frame-independent [E] — the exponential-frame route, tested, fails.** One might hope the *exponential* (string-frame) coupling rescues it. Set $\phi^2=e^{-2\sigma}$, so the dilaton frame *is* the scale-field frame; the action becomes
\[
S_2=\frac1{4G}\int\sqrt{-g_2}\Big[e^{-2\sigma}R_2+2e^{-2\sigma}(\nabla\sigma)^2+2-2\Lambda e^{-2\sigma}\Big],
\]
now carrying the string-frame coupling $e^{-2\sigma}R_2$ that makes T-duality a bulk symmetry in string theory. But $\sigma\to-\sigma$ still fails here: it sends $e^{-2\sigma}R_2\to e^{+2\sigma}R_2$, and no 2D Weyl transform flips that exponent (Weyl shifts $R_2$ *additively* by $-2\Box\ln\Omega$; it cannot rescale the multiplicative dilaton prefactor). So **$\sigma\to-\sigma$ is not a bulk symmetry in *any* frame.**

The reason is instructive and worth stating: **T-duality does not invert the dilaton** — it inverts a compactification *modulus* and *shifts* the dilaton (Buscher). Here $\phi$ is a dynamical dilaton, not a modulus, and $a\leftrightarrow1/a$ inverts *it*. So the modular note's "T-duality-shaped" reading is a genuine **resonance but not a dynamical identity**. The definitive conclusion: the reciprocal involution is a **boundary / solution-relating duality, not a bulk gauge symmetry** — precisely where a holographic $S$-transformation is supposed to live. The two negative results (Einstein frame §7c, string frame here) close the "bulk symmetry" question for good and hand the modular structure to the boundary.

**(d) The boundary sits at the horizon; the entropy is Cardy-type [C].** The dilaton is the holographic coordinate and $\phi=R_S$ ($\sigma=0$) is the distinguished boundary locus — the self-dual surface where the throat null shell already lives. The near-horizon 2D geometry of a non-extremal crossing is Rindler-like, with a thermal (Cardy-type) boundary entropy; the near-extremal case specializes to JT/Schwarzian. The $S_{\rm BH}=S_{\rm dS}$ identity is then a **two-end Cardy matching** between the $\sigma\to\pm\infty$ ends the reflection exchanges.

---

## 8. The boundary entropy and the self-dual reading of $S_{\rm BH}=S_{\rm dS}$ [E→C]

Executing the boundary/Cardy step as far as it goes without yet constructing the boundary CFT.

**Exact entropies and temperatures [E].** The reduction preserves black-hole entropy, so each end carries $S=A/4G=\pi\phi_h^2/G$ with $\phi_h$ the horizon areal radius. The two ends the reflection $\sigma\to-\sigma$ exchanges are:

| end | horizon $\phi_h$ | entropy | temperature |
|---|---|---|---|
| parent exterior (Schwarzschild) | $R_S$ | $S_{\rm BH}=\pi R_S^2/G$ | $T_{\rm BH}=\dfrac{1}{4\pi R_S}$ |
| child interior (de Sitter) | $\sqrt{3/\Lambda}$ | $S_{\rm dS}=\dfrac{3\pi}{\Lambda G}$ | $T_{\rm dS}=\dfrac{1}{2\pi}\sqrt{\dfrac{\Lambda}{3}}$ |

At the self-dual condition $\Lambda=3/R_S^2$ both horizons have radius $R_S$, so
\[
S_{\rm BH}=S_{\rm dS}=\frac{\pi R_S^2}{G},\qquad\text{while}\qquad \frac{T_{\rm dS}}{T_{\rm BH}}=2 .
\]

**The self-dual reading [C].** $\Lambda=3/R_S^2$ is *exactly* the condition for $\sigma\to-\sigma$ to exchange the two ends **as a symmetry** (equal horizon radii). Under that symmetry:

- **entropy is invariant** — $S\propto\phi_h^2$ is equal at the swapped ends, so $S_{\rm BH}=S_{\rm dS}$ is a *consequence of the self-duality*, holding exactly when the reciprocal is a symmetry — not a coincidence, and not merely a matched number;
- **temperature is not** — $T_{\rm dS}/T_{\rm BH}=2$, so $T$ is a *covariant* quantity that transforms under the reflection, as a modular/temperature parameter should; the fixed point $\sigma=0$ (the horizon) is where the two would coincide.

That combination — a state-counting entropy invariant under the $S$-type reflection while the temperature transforms — is the **boundary-CFT signature**. It reframes $S_{\rm BH}=S_{\rm dS}$ from a conditional identity into *the self-duality condition itself*, and the Cardy formula would be its CFT realization. This is the concrete payoff of the reduction: the entropy identity that the WCH/entropy thread found by hand is here a structural consequence of the reciprocal symmetry realized on the horizon boundary.

---

## 9. What remains open [O]

*Settled: the bulk-symmetry question (§7 — no, in either frame) and the entropy/temperature structure (§8).*

1. **The explicit boundary theory** — a horizon-boundary CFT with computed central charge $c$ and modular parameter, from which the Cardy formula *derives* $S=\pi\phi_h^2/G$ rather than matching it. Constraints it must satisfy: a modular-invariant $S$, and $T_{\rm dS}/T_{\rm BH}=2$ (does that factor match a specific modular image?).
2. **Conformal-compensator consistency** — shared with the scale-field note §8; the $\phi^2=e^{-2\sigma}$ frame here *is* the compensator frame, so the two calculations are one object.

---

## References

1. Spherical reduction to 2D dilaton gravity: D. Grumiller, W. Kummer, D. V. Vassilevich, "Dilaton gravity in two dimensions," *Phys. Rept.* **369**, 327 (2002), [arXiv:hep-th/0204253](https://arxiv.org/abs/hep-th/0204253).
2. JT gravity and the Schwarzian: A. Almheiri, J. Polchinski, "Models of AdS$_2$ backreaction and holography," *JHEP* **11**, 014 (2015), [arXiv:1402.6334](https://arxiv.org/abs/1402.6334); J. Maldacena, D. Stanford, Z. Yang, [arXiv:1606.01857](https://arxiv.org/abs/1606.01857).
3. CGHS 2D dilaton black holes: C. Callan, S. Giddings, J. Harvey, A. Strominger, *Phys. Rev. D* **45**, R1005 (1992), [arXiv:hep-th/9111056](https://arxiv.org/abs/hep-th/9111056).
4. J. L. Cardy, *Nucl. Phys. B* **270**, 186 (1986); dS/CFT: A. Strominger, [arXiv:hep-th/0106113](https://arxiv.org/abs/hep-th/0106113).
5. G. Salehi, [GD1](gd1.html); [scale-field note](note.html?src=reciprocal_scale_field); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [gravitational-entropy note](note.html?src=gravitational_entropy_and_conformal_scaling), this project.
