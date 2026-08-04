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

## 7. Immediate next steps

1. **Fix the reduction [E, mechanical].** Carry out the 4D$\to$2D reduction with explicit conventions; write $S_2$ and confirm Kottler/FLRW as solutions with $M$, $\Lambda$ as the expected 2D data. (Codex verification target.)
2. **Weyl-fix to Liouville [E→C].** Reduce to the conformal mode and confirm $\sigma=-\ln\phi$ satisfies the Liouville equation of §3 as the 2D conformal-sector equation.
3. **Is $\phi\to1/\phi$ a symmetry of $S_2$? [O]** Test the dilaton inversion at the action level, not just on solutions — the 2D home of the involution.
4. **Boundary theory at $\sigma=0$ [O].** Identify the boundary dynamics (Schwarzian / Liouville-CFT) at the horizon and test the Cardy match to $S_{\rm BH}=S_{\rm dS}$.

---

## References

1. Spherical reduction to 2D dilaton gravity: D. Grumiller, W. Kummer, D. V. Vassilevich, "Dilaton gravity in two dimensions," *Phys. Rept.* **369**, 327 (2002), [arXiv:hep-th/0204253](https://arxiv.org/abs/hep-th/0204253).
2. JT gravity and the Schwarzian: A. Almheiri, J. Polchinski, "Models of AdS$_2$ backreaction and holography," *JHEP* **11**, 014 (2015), [arXiv:1402.6334](https://arxiv.org/abs/1402.6334); J. Maldacena, D. Stanford, Z. Yang, [arXiv:1606.01857](https://arxiv.org/abs/1606.01857).
3. CGHS 2D dilaton black holes: C. Callan, S. Giddings, J. Harvey, A. Strominger, *Phys. Rev. D* **45**, R1005 (1992), [arXiv:hep-th/9111056](https://arxiv.org/abs/hep-th/9111056).
4. J. L. Cardy, *Nucl. Phys. B* **270**, 186 (1986); dS/CFT: A. Strominger, [arXiv:hep-th/0106113](https://arxiv.org/abs/hep-th/0106113).
5. G. Salehi, [GD1](gd1.html); [scale-field note](note.html?src=reciprocal_scale_field); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [gravitational-entropy note](note.html?src=gravitational_entropy_and_conformal_scaling), this project.
