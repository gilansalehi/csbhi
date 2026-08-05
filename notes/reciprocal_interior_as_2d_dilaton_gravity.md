# The Reciprocal Interior as Two-Dimensional Dilaton Gravity

*Research-direction note — the spherical reduction that tests whether the reciprocal scale admits a dilaton or holographic formulation.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI), verification in progress.

**Date:** 2026-08-04.

**Status:** New direction. The spherical reduction (§2) is textbook. The relation between the reciprocal scale and the reduced dilaton is exact only branchwise (§3); whether the reciprocal map relates the two reduced theories is open. The holographic proposal (§5) is a research programme, not a result. Tiered **[E]**, **[C]**, **[O]**.

**Prerequisites:** [GD I](gd1.html); [The Reciprocal Scale Field and the Smooth-Throat Problem](note.html?src=reciprocal_scale_field); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry).

**Notation:** [Glossary](note.html?src=cosmological_glossary). $c=1$; $a,b\in\{0,1\}$ are 2D orbit-space indices; $\phi$ is the dimensionful areal radius and $x\equiv\phi/\phi_H$ its horizon-normalized value. On Bob's branch, $x_B=r$ and $\sigma=-\ln x_B$. On a fixed comoving shell in Alice's FLRW branch, $x_A=a$ and $\sigma=\ln x_A$. The reciprocal proposal is $x_Ax_B=1$ for corresponding shells.

---

## Abstract

In the exactly spherically symmetric sector, reducing 4D general relativity on the angular 2-sphere is standard and yields a **two-dimensional dilaton gravity**, with the areal radius as the dilaton $\phi$. This is a natural language for CSBHI, but it also exposes an important distinction. Bob's normalized areal radius obeys $\sigma=-\ln x_B$, whereas Alice's FLRW areal radius on a fixed comoving shell obeys $\sigma=\ln x_A$. The reciprocal proposal relates the two branch variables; it does not make one dimensionful dilaton satisfy $\sigma=-\ln\phi$ globally.

The reduction is valuable because 2D dilaton gravity has powerful exact tools and, in special cases such as nearly AdS$_2$ JT gravity, a controlled boundary description. It therefore supplies a concrete arena in which to test three conjectures: whether the reciprocal is a map between reduced solutions, whether the null horizon supports an appropriate boundary phase space, and whether any resulting boundary theory has modular structure. None follows from spherical reduction alone.

The first concrete deliverable is more basic than a partition function: write the two branch dilatons and matter terms explicitly, then test whether $x_A=1/x_B$ maps their reduced equations and conserved mass data. Only if that map produces a boundary symmetry does a modular/Cardy test become well posed.

---

## 1. Why 2D is the natural spherical arena

CSBHI's metrics — Kottler exterior, FLRW interior, the throat — are all spherically symmetric:
\[
ds_4^2=g_{ab}(x)\,dx^a dx^b+\phi(x)^2\,d\Omega_2^2,\qquad a,b\in\{0,1\},
\]
with $\phi$ the **areal radius**. Within exact spherical symmetry, the angular dependence is integrated out while the sphere's changing size remains dynamical through $\phi$. The reduced pair $(g_{ab},\phi)$ therefore preserves the classical spherical sector, but not rotation, nonspherical perturbations, or independent angular matter modes. **[E]**

The scale relation is branchwise. In the exterior, $\phi_B=R_Sr$ and $\sigma=-\ln(\phi_B/R_S)$. In spatially flat FLRW, $\phi_A=a(\tau)R$ for a comoving shell $R$, so $\sigma=\ln a=\ln(\phi_A/\phi_{A,H})$ when that shell is normalized to $a_H=1$. Establishing $x_A=1/x_B$ as a map between these reduced geometries is an open dynamical step, not a consequence of reduction. **[E/O]**

---

## 2. The spherical reduction [E]

Inserting the ansatz into the 4D Einstein–Hilbert action and integrating over the sphere gives a 2D dilaton-gravity action of the standard form
\[
S_2=\frac{1}{4G}\int d^2x\,\sqrt{-g_2}\left[\phi^2 R_2+2(\nabla\phi)^2+2-2\Lambda\phi^2\right]+S_m ,
\]
(coefficients in the conventions of the standard 4D$\to$2D reduction; the "$+2$" is the $S^2$ curvature, the $-2\Lambda\phi^2$ the cosmological term). This is a member of the general 2D dilaton-gravity family
\[
S_2=\int d^2x\sqrt{-g_2}\big[\Phi R_2 + U(\Phi)(\nabla\Phi)^2 + V(\Phi)\big],
\]
with dilaton $\Phi=\phi^2$ (areal-radius squared). Schwarzschild/Kottler and FLRW reduce to solutions of this theory with their respective matter content. In the vacuum sector, the black-hole mass $M$ is the conserved Casimir/integration constant; with matter, its evolution includes the corresponding flux and work terms. **[E]**

---

## 3. The scale field and the log-dilaton [E→C]

Two-dimensional dilaton theories can sometimes be placed in a Liouville-like form after solving constraints and fixing the 2D conformal gauge $g_{ab}=e^{2\rho}\hat g_{ab}$. Here $\rho$ is the metric's conformal mode; it is not automatically the reciprocal scale $\sigma$. Independently, the scale-field calculation evaluated the **4D** wave operator on Bob's Schwarzschild/Kottler branch:
\[
\Box_4\sigma=-\frac{e^{2\sigma}}{R_S^2}\quad(\text{Schwarzschild}),\qquad \Box_4\sigma=-\frac{e^{2\sigma}}{R_S^2}+\Lambda\quad(\text{Kottler}),
\]
i.e. a **Liouville-shaped exponential identity** on that fixed background. The equation is exact, and the 2D reduction explains why the areal radius participates. It is not yet the independent Liouville equation of motion of the reduced theory: that requires explicit gauge fixing and variation of the reduced action. **[E for the operator identity; C for a Liouville-sector interpretation.]**

The reciprocal proposal can be written as an inversion of the **dimensionless branch dilatons**
\[
x_A=\frac1{x_B}\quad\Longleftrightarrow\quad\sigma\to-\sigma,
\]
with $x_A=x_B=1$ at the horizon-normalized shell. Determining whether this is a symmetry, a canonical map between solutions, or only a CSBHI boundary condition is a concrete sub-task. **[O]**

---

## 4. The horizon as a candidate boundary [C/O]

In some 2D dilaton theories the dilaton serves as a radial coordinate and boundary data are imposed at a chosen dilaton value. CSBHI supplies a distinguished null surface, $x_A=x_B=1$ and $\sigma=0$. Treating that horizon as an **internal null boundary** is natural, but treating it as a *holographic* boundary requires a boundary action, boundary conditions, and a nontrivial asymptotic-symmetry algebra. Moreover, $\sigma=0$ alone is not an Einstein configuration: $\nabla\sigma$ remains nonzero there. An Einstein description would require a compensator to be gauge-fixed throughout a region, not merely evaluated at its horizon value. **[C/O]**

---

## 5. The holographic dual, and the falsifying test [C/O]

Two-dimensional dilaton gravity supplies several relevant precedents, but each has a narrower domain than the present conjecture:

- **JT gravity** has a Schwarzian description at the asymptotic boundary of nearly AdS$_2$ and reproduces near-extremal black-hole thermodynamics. A generic nonextremal CSBHI horizon has not been shown to lie in that regime.
- **CGHS** is an exactly solvable 2D dilaton model with conformal matter. It demonstrates tractability, but it is neither the spherical reduction above nor an already-identified CSBHI boundary dual.
- **Cardy.** Modular invariance fixes the high-energy density of states in a two-dimensional CFT. A spherically reduced 2D bulk ordinarily has a one-dimensional boundary, so applying Cardy requires an independently derived Virasoro or 2D-CFT structure.

The possible synthesis is therefore conditional **[C]**: if the reciprocal branch map induces a boundary symmetry with a genuine modular parameter and spectrum, then the modular and entropy threads acquire a common mechanism. Spherical reduction identifies where to look; it does not supply that mechanism by itself.

**The concrete test [O]** has an ordered sequence: first derive the reduced branch map and the null-boundary phase space; next determine whether its symmetry algebra contains a Virasoro structure and compute any central charge; only then compute a partition function and test modular covariance. If the first two steps fail, the Cardy/modular picture remains an analogy and no partition-function calculation is warranted.

---

## 6. What the reduction contributes

The scale-field arc produced a radial operator identity, a minimal-scalar no-go, and a quantitative Weyl-relaxation target. The 2D reduction places those results in a standard spherical action and makes the next question precise: does the reciprocal relation map the reduced exterior and interior dynamics? A positive answer could give the involution a dynamical role and the horizon a controlled boundary description. A negative answer would still identify the residual term required from the conformal or higher-dimensional sector.

This is tractable because spherical reduction and 2D dilaton gravity are mature. It complements, rather than replaces, the unbuilt throat metric: the reduced equations can determine which boundary and stress data that metric must reproduce.

---

## 7. Results of the reduction, carried through [E→C]

**(a) The reduction is confirmed [E].** With $R_4=R_2-\tfrac4\phi\Box_2\phi-\tfrac2{\phi^2}(\nabla\phi)^2+\tfrac2{\phi^2}$, integrating $S=\tfrac1{16\pi G}\int\sqrt{-g_4}(R_4-2\Lambda)$ over the sphere and one integration by parts gives exactly
\[
S_2=\frac1{4G}\int d^2x\sqrt{-g_2}\Big[\phi^2R_2+2(\nabla\phi)^2+2-2\Lambda\phi^2\Big],
\]
the areal radius $\phi$ as dilaton, with Kottler and FLRW as solutions. In vacuum, $M$ is the conserved 2D Casimir; with matter, the corresponding mass function obeys flux and work equations.

**(b) The exterior reciprocal scale is the negative log-dilaton, and its operator identity is exact [E].** On Bob's branch, $\sigma=-\ln(\phi_B/R_S)$. The clean scale-field result uses the *4D* d'Alembertian, which on a spherically symmetric field is $\Box_4\sigma=\Box_2\sigma+\tfrac2\phi\nabla^a\phi\,\nabla_a\sigma$. Verified on Schwarzschild: $\Box_2\sigma=1/\mathcal R^2-2R_S/\mathcal R^3$ and $\tfrac2\phi\nabla\phi\!\cdot\!\nabla\sigma=-2f/\mathcal R^2$ sum to $\Box_4\sigma=-1/\mathcal R^2=-e^{2\sigma}/R_S^2$. This is a reduction identity with Liouville form, not yet the independently varied equation of a Liouville conformal mode.

**(c) Direct inversion is not an off-shell symmetry of the reduced action [E→O].** After normalizing the dilaton, a direct inversion changes the dilaton–curvature coupling from $x^2R_2$ to $x^{-2}R_2$. The straightforward local Weyl transformations tested here do not restore the action. Thus the reciprocal is not an off-shell symmetry of the ordinary spherical reduction in these frames. Whether it is a canonical map between solutions, a boundary condition, or a transformation of an enlarged theory remains open.

Failure as a bulk symmetry does not by itself prove a boundary symmetry. It narrows the available realizations and makes the null-boundary phase-space calculation decisive.

**The obstruction survives the two natural local frames tested [E].** One might hope the *exponential* (string-frame) coupling rescues it. Set $\phi=R_Se^{-\sigma}$, so the dilaton frame is the scale-field frame; the action becomes
\[
S_2=\frac1{4G}\int\sqrt{-g_2}\Big[R_S^2e^{-2\sigma}R_2+2R_S^2e^{-2\sigma}(\nabla\sigma)^2+2-2\Lambda R_S^2e^{-2\sigma}\Big],
\]
with the familiar exponential dilaton coupling. But $\sigma\to-\sigma$ still fails here: it sends $e^{-2\sigma}R_2\to e^{+2\sigma}R_2$, and the direct 2D Weyl transformations considered do not restore the original action. Thus **$\sigma\to-\sigma$ is not a bulk symmetry in either of the two natural local frames tested.**

The reason is instructive: **T-duality does not simply invert the dilaton** — it inverts a compactification modulus while shifting the dilaton. Here the areal-radius dilaton is not such a modulus. The modular note's T-duality comparison therefore remains a structural resemblance, not a dynamical identity. The calculations exclude the direct inversion in the two natural local frames considered; they do not exclude nonlocal canonical maps, enlarged field content, or a higher-dimensional realization.

**(d) The horizon supplies candidate null-boundary data [C/O].** The normalized dilaton takes the distinguished value $x=1$ there, and the sharp surrogate already supplies null-junction data. A nonextremal near-horizon region is Rindler-like, but that alone does not produce a Cardy theory; JT/Schwarzian applies only after an appropriate nearly AdS$_2$, near-extremal limit is established. The entropy equality below is therefore a target for a future boundary theory, not evidence that one already exists.

---

## 8. The horizon entropy and the equal-radius reading of $S_{\rm BH}=S_{\rm dS}$ [E→C]

Recording the exact thermodynamic data that any proposed boundary theory would have to reproduce.

**Exact entropies and temperatures [E].** The reduction preserves horizon entropy, so each horizon carries $S=A/4G=\pi\phi_h^2/G$ with $\phi_h$ its areal radius. Compare the parent Schwarzschild horizon with the proposed child de Sitter horizon:

| end | horizon $\phi_h$ | entropy | temperature |
|---|---|---|---|
| parent exterior (Schwarzschild) | $R_S$ | $S_{\rm BH}=\pi R_S^2/G$ | $T_{\rm BH}=\dfrac{1}{4\pi R_S}$ |
| child interior (de Sitter) | $\sqrt{3/\Lambda}$ | $S_{\rm dS}=\dfrac{3\pi}{\Lambda G}$ | $T_{\rm dS}=\dfrac{1}{2\pi}\sqrt{\dfrac{\Lambda}{3}}$ |

At the equal-radius condition $\Lambda=3/R_S^2$ both horizons have radius $R_S$, so
\[
S_{\rm BH}=S_{\rm dS}=\frac{\pi R_S^2}{G},\qquad\text{while}\qquad \frac{T_{\rm dS}}{T_{\rm BH}}=2 .
\]

**The equal-radius reading [E→C].** $\Lambda=3/R_S^2$ is exactly the condition that the two horizon radii agree. Under that condition:

- **entropy agrees** because equal areas carry equal Bekenstein–Hawking entropy;
- **temperature does not agree** because Schwarzschild and de Sitter surface gravities differ by a factor of two at the same radius.

The entropy identity is therefore exact **conditional on the equal-radius relation**. The reciprocal ansatz alone has not yet derived $\Lambda=3/R_S^2$, and the temperature factor of two is a constraint that any proposed duality must explain rather than evidence that a modular transformation already exists. A boundary derivation would need to reproduce both facts from one state-counting framework.

---

## 9. What remains open [O]

*Settled within the stated scope: the direct inversion is not an off-shell symmetry in the two natural local frames tested, and the conditional entropy/temperature arithmetic is exact.*

1. **The branch map** — formulate Bob's and Alice's normalized dilatons separately and test whether $x_A=1/x_B$ maps their reduced field equations, matter terms, and Misner–Sharp/Casimir mass data.
2. **The null-boundary phase space** — derive the boundary action and allowed horizon variations; determine whether the symmetry algebra contains a Virasoro sector and, only then, whether a central charge and Cardy calculation exist.
3. **The equal-radius condition** — derive or falsify $\Lambda=3/R_S^2$ rather than inserting it, while retaining the observed factor-of-two temperature relation.
4. **Conformal-compensator consistency** — shared with the scale-field note §8; determine whether the exponential frame represents gauge redundancy, new dynamics, or only a reparameterization of the areal radius.

---

## References

1. Spherical reduction to 2D dilaton gravity: D. Grumiller, W. Kummer, D. V. Vassilevich, "Dilaton gravity in two dimensions," *Phys. Rept.* **369**, 327 (2002), [arXiv:hep-th/0204253](https://arxiv.org/abs/hep-th/0204253).
2. JT gravity and the Schwarzian: A. Almheiri, J. Polchinski, "Models of AdS$_2$ backreaction and holography," *JHEP* **11**, 014 (2015), [arXiv:1402.6334](https://arxiv.org/abs/1402.6334); J. Maldacena, D. Stanford, Z. Yang, [arXiv:1606.01857](https://arxiv.org/abs/1606.01857).
3. CGHS 2D dilaton black holes: C. Callan, S. Giddings, J. Harvey, A. Strominger, *Phys. Rev. D* **45**, R1005 (1992), [arXiv:hep-th/9111056](https://arxiv.org/abs/hep-th/9111056).
4. J. L. Cardy, *Nucl. Phys. B* **270**, 186 (1986); dS/CFT: A. Strominger, [arXiv:hep-th/0106113](https://arxiv.org/abs/hep-th/0106113).
5. G. Salehi, [GD1](gd1.html); [scale-field note](note.html?src=reciprocal_scale_field); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [gravitational-entropy note](note.html?src=gravitational_entropy_and_conformal_scaling), this project.
