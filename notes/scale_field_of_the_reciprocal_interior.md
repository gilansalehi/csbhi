# The Scale Field of the Reciprocal Interior (Crunch 1)

*Working calculation note — findings for review, not a finished result.*

**Author:** Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Working draft. The tensor computations in §§3–5 are explicit and checkable; the interpretation in §6 is preliminary and flagged. This is the "expose the hidden scale factor" calculation; it is meant to be firmed up before attempting the throat-Weyl computation (Crunch 2). Tiered **[E]** established/derived-here, **[C]** conjecture/interpretation, **[O]** open.

**Prerequisite:** [GD I](gd1.html); [RI I: *Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior); [involution note](reciprocal-involution.html).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary). Units $c=1$, signature $(-+++)$, $\Box\equiv\nabla^\mu\nabla_\mu$.

---

## Aim

Expose the scale factor $a$ of the reciprocal interior as a field $\sigma=\ln a$, write a candidate action, and ask the sharp question:

> Does the horizon *force* the profile $a=1/r$ (i.e. $\sigma=-\ln r$), or is $\sigma$ merely the log of the areal radius repackaged?

Crunch 1 answers this at the **probe (fixed-background) level** and identifies the potential that $\sigma=-\ln r$ satisfies. The result is clean and thematically suggestive, with three caveats that Crunch 2 must resolve.

---

## 1. The scale field and its reflection symmetry [E]

Write the RI I interior metric $ds^2=-d\tau^2+a^2(dR^2+R^2d\Omega^2)$ with

\[
\sigma \equiv \ln a = -\ln r, \qquad a^2=e^{2\sigma}.
\]

Then:

| | in $\sigma$ |
|---|---|
| horizon $r=1$, $a=1$ | $\sigma=0$ |
| de Sitter future $a\to\infty$ | $\sigma\to+\infty$ |
| Bob's spatial infinity $a\to0$ | $\sigma\to-\infty$ |
| reciprocal involution $a\leftrightarrow1/a$ | $\sigma\to-\sigma$ |
| self-dual / Einstein surface | $\sigma=0$ |

The horizon-fixing involution is a $\mathbb{Z}_2$ reflection $\sigma\to-\sigma$ fixing $\sigma=0$. This is also the modular note's imaginary-axis picture: $t\to1/t$ is $\ln t\to-\ln t$, self-dual at $\sigma=0$. The scale field is the log of the modular coordinate.

---

## 2. Candidate action and field equations [E]

\[
S=\int d^4x\sqrt{-g}\left[\frac{1}{2\kappa}R-\tfrac12(\partial\sigma)^2-V(\sigma)\right]+S_m .
\]

Field equations:
\[
\Box\sigma=V'(\sigma),\qquad
G_{\mu\nu}=\kappa\left(T^\sigma_{\mu\nu}+T^m_{\mu\nu}\right),\quad
T^\sigma_{\mu\nu}=\partial_\mu\sigma\,\partial_\nu\sigma-g_{\mu\nu}\!\left[\tfrac12(\partial\sigma)^2+V\right].
\]

---

## 3. The $\sigma=0$ surface is the Einstein surface — but only a surface [E]

At $\sigma=0$ with $\partial\sigma=0$, $T^\sigma_{\mu\nu}=-g_{\mu\nu}V(0)$, so
\[
G_{\mu\nu}=-\kappa V(0)\,g_{\mu\nu}+\kappa T^m_{\mu\nu},
\]
i.e. **4D Einstein with $\Lambda_{\rm eff}=\kappa V(0)$.** This is the precise sense in which Einstein gravity is the scale-frozen case.

**But** — anticipating §4 — the potential we will find has $V'(0)\ne0$, so $\sigma=0$ is *not* a bulk solution of $\Box\sigma=V'(\sigma)$; constant $\sigma$ does not solve the field equation. Einstein gravity is therefore recovered only on the **self-dual surface** $\sigma=0$ (the horizon), while the generic bulk has $\sigma$ varying. Pure fixed-scale 4D Einstein is non-generic; the varying-scale reciprocal interior is the generic solution. [C: interpretation]

---

## 4. Exterior crunch: $\sigma=-\ln r$ satisfies a Liouville equation [E]

For a static radial field in $ds^2=-f\,dt^2+f^{-1}dr^2+r^2d\Omega^2$ (so $\sqrt{-g}=r^2\sin\theta$, $g^{rr}=f$),
\[
\Box\sigma=\frac{1}{r^2}\big(r^2 f\,\sigma'\big)'.
\]
Insert $\sigma=-\ln r$, $\sigma'=-1/r$, so $r^2 f\sigma'=-rf$ and
\[
\boxed{\ \Box\sigma=-\frac{f+rf'}{r^2}\ }.
\]

**Schwarzschild** $f=1-2GM/r$: $f+rf'=1-\tfrac{2GM}{r}+\tfrac{2GM}{r}=1$, so
\[
\Box\sigma=-\frac{1}{r^2}=-e^{2\sigma}\ \Longrightarrow\ V'(\sigma)=-e^{2\sigma},\quad V(\sigma)=-\tfrac12 e^{2\sigma}.
\]
Notably, $f+rf'=1$ **exactly**, so $\Box(-\ln r)$ is the *same in Schwarzschild as in flat space* — the mass term drops out.

**Kottler** $f=1-2GM/r-\Lambda r^2/3$: $f+rf'=1-\Lambda r^2$, so
\[
\Box\sigma=-\frac{1}{r^2}+\Lambda=-e^{2\sigma}+\Lambda\ \Longrightarrow\ V(\sigma)=-\tfrac12 e^{2\sigma}+\Lambda\sigma.
\]

So $\sigma=-\ln r$ is an exact solution of the scalar equation for a **Liouville (exponential) potential**, plus a $\Lambda$-induced linear term in the Kottler case.

### Why the Liouville form is not an accident [C]

Scale-freeness (the involution note's requirement: no new dimensionful constant) means a rescaling $a\to e^c a$, i.e. $\sigma\to\sigma+c$, must act covariantly. The only potential transforming homogeneously under $\sigma\to\sigma+c$ is the exponential $V\propto e^{2\sigma}$ — the Liouville potential. So the potential the areal-radius calculation *produces* in §4 is exactly the potential scale-freeness *requires*, independently. It also ties the scale field to Liouville theory and 2D dilaton gravity, whose modular/conformal structure matches the modular note.

---

## 5. Interior crunch: the FLRW side [E]

For $\sigma=\sigma(\tau)=\ln a$ in $ds^2=-d\tau^2+e^{2\sigma}(dR^2+R^2d\Omega^2)$ ($\sqrt{-g}=e^{3\sigma}R^2\sin\theta$):
\[
\Box\sigma=-\big(\sigma''+3\sigma'^2\big)=-\big(\dot H_A+3H_A^2\big),\qquad H_A=\dot\sigma .
\]
In the de Sitter limit $\dot H_A=0$, $H_A^2=\Lambda/3$: $\Box\sigma\to-\Lambda$, consistent with $V'(\sigma)\to$ constant $=-\Lambda$ (the linear-in-$\sigma$ piece of the Kottler potential). The interior and exterior see effective potentials set by their respective matter content; reconciling them across the throat is Crunch 2.

---

## 6. What Crunch 1 shows — and the fork it leaves [C]

**The A-vs-B fork (from the setup discussion):**
- **(A) $\sigma$ is a new field** (scalar–tensor / Weyl / KK): Einstein is a scale-frozen slice of a bigger theory.
- **(B) $\sigma=\ln(\text{areal radius})$ repackaged:** promoting it merely *reveals* a hidden $a\leftrightarrow1/a$ symmetry of 4D GR, no new degree of freedom.

**At probe level the finding leans (B).** Because $\sigma\equiv-\ln r$ with $r$ the areal radius, $\Box\sigma$ is fixed by the geometry, and "$\sigma=-\ln r$ solves $\Box\sigma=V'(\sigma)$" is a *geometric identity* satisfied by the areal radius, not a new dynamical law. The Liouville potential is read off from the background, not imposed. Promoting $\sigma$ **exposes** the reciprocal structure — which is real and useful — but does not yet require a new field.

**It becomes (A) only if backreaction or throat-smoothing forces $\sigma$ off $-\ln(\text{areal radius}).$** That is exactly Crunch 2's job: if lifting the interior/exterior to one $\sigma$-extended geometry smooths the throat Weyl jump, $\sigma$ is doing genuine work and is a real degree of freedom; if not, it is bookkeeping.

**Three caveats to firm up before Crunch 2:**

1. **Backreaction.** $\sigma=-\ln r$ has $T^\sigma_{\mu\nu}\ne0$ (energy density $\sim(\partial\sigma)^2=f/r^2$), so it does **not** leave Schwarzschild/Kottler exactly invariant; the probe calculation is leading-order only. Self-consistently this is a scalar-hair / dilaton–black-hole problem [1,2], and Bekenstein-type no-hair theorems [3] must be checked — though they are evaded by non-convex potentials, and the Liouville potential here is non-convex.
2. **The Liouville potential is unbounded below** ($V=-\tfrac12 e^{2\sigma}\to-\infty$ as $\sigma\to+\infty$). Under interpretation (A) this is a genuine instability worry; under (B) it is an artifact of treating a geometric quantity as a fundamental scalar and carries no independent instability. Which caveat applies depends on the fork.
3. **The $\mathbb{Z}_2$ is not an internal even-$V$ symmetry.** The involution is $r\to1/r$ *together with* $\sigma\to-\sigma$ — a combined spacetime+field map relating exterior and interior descriptions — not a pure internal reflection. So $V$ need not be even, and indeed the found $V=-\tfrac12e^{2\sigma}$ is not. (This corrects the "even $V$" assumption from the setup discussion.)

---

## 7. Backreaction (Crunch 1b): the coupled system selects (B) [E]

Promoting $\sigma$ to a genuinely gravitating field and solving the coupled $(g,\sigma)$ system, rather than fixing the background, gives a decisive result.

**A nontrivial static $\sigma$ is incompatible with the Schwarzschild/Kottler exterior.** The physical black-hole exterior has the form $ds^2=-f\,dt^2+f^{-1}dr^2+r^2d\Omega^2$, for which $G^t{}_t=G^r{}_r$ identically, so Einstein's equations demand $T^t{}_t=T^r{}_r$. For a static scalar,
\[
T^t{}_t=-\big(\tfrac12 f\sigma'^2+V\big),\qquad T^r{}_r=\tfrac12 f\sigma'^2-V
\quad\Longrightarrow\quad
T^t{}_t=T^r{}_r \ \Rightarrow\ f\sigma'^2=0\ \Rightarrow\ \sigma'=0 .
\]
A gravitating scale field therefore **cannot preserve the Schwarzschild-form exterior**; it necessarily distorts the metric ($g_{tt}g_{rr}\neq-1$, or a non-areal radius). This is the standard reason scalar-hair solutions (Janis–Newman–Winicour; Liouville-potential black holes [3]) are not of Schwarzschild form.

**How far $\sigma$ is pushed.** For the scale-covariant power-law ansatz $\sigma=k\ln r$, $f\propto r^{p}$, the scalar equation $\Box\sigma=V'(\sigma)$ gives $k=(p-2)/2$. The probe value $k=-1$ ($\sigma=-\ln r$) is recovered **only** at $p=0$ (no metric backreaction); any backreaction $p\neq0$ shifts $k$ off $-1$.

**Interpretation — this confirms (B), and it is good news.** Keeping the *physical* black hole — a Schwarzschild/Kottler exterior sourced by mass and $\Lambda$ — *requires* $\sigma$ to be non-gravitating: $\sigma=-\ln(\text{areal radius})$ as a geometric variable, not an independent field. Promoting it to a real gravitating field (A) trades the black hole for a distorted, non-asymptotically-flat dilatonic geometry. Since we want the real black hole, **(B) is selected**, for a sharp reason: *a genuinely gravitating scale field would destroy the very geometry that defines the black hole.*

**Payoff for Crunch 2:** under (B), $\sigma=-\ln(\text{areal radius})$ is **exact** in the real Kottler/FLRW geometry, no dilatonic correction, so the throat-Weyl computation can use the exact metrics on both sides.

**Caveat — coupling.** This uses the *minimally* coupled action of §2. A scale field is more naturally *conformally* coupled ($\propto\sigma^2R$), whose stress tensor need not obey $T^t{}_t=T^r{}_r$ the same way and could support a static profile differently. Minimal coupling cleanly selects (B); the conformal-coupling version is a separate check. [O]

---

## 8. What Crunch 2 must settle [O]

1. **Backreacted profile — addressed (§7).** The minimally-coupled coupled system selects (B): $\sigma$ must be non-gravitating to preserve the black-hole exterior, so $\sigma=-\ln(\text{areal radius})$ is exact. Remaining: confirm the conformally-coupled version behaves the same.
2. **Throat Weyl.** Compute the Weyl tensor as a function of $\sigma$ across $\sigma=0$ for the joined interior ($\sigma>0$) and exterior ($\sigma<0$) branches; test whether the junction notes' transverse-curvature jump appears as smooth $\partial\sigma$ — the decisive (A)/(B) discriminator and the throat-problem test.
3. **Interior/exterior potential match.** Reconcile the exterior Liouville potential (§4) with the interior matter-driven $-(\dot H+3H^2)$ (§5) across the throat.

---

## References

1. G. W. Gibbons and K. Maeda, "Black Holes and Membranes in Higher-Dimensional Theories with Dilaton Fields," *Nucl. Phys. B* **298**, 741 (1988).
2. D. Garfinkle, G. T. Horowitz, A. Strominger, "Charged Black Holes in String Theory," *Phys. Rev. D* **43**, 3140 (1991).
3. J. D. Bekenstein, "Novel 'no-scalar-hair' theorem for black holes," *Phys. Rev. D* **51**, R6608 (1995); and Liouville-potential black holes, e.g. K. C. K. Chan, J. H. Horne, R. B. Mann, *Nucl. Phys. B* **447**, 441 (1995), [arXiv:gr-qc/9502042](https://arxiv.org/abs/gr-qc/9502042).
4. G. Salehi, [GD1](gd1.html); [RI I](note.html?src=field_equations_of_the_reciprocal_interior); [involution note](reciprocal-involution.html); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry), this project.
