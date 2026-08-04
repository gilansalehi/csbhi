# The Throat Weyl Transition Across the Scale Field (Crunch 2)

*Working calculation note — the decisive throat test, with an unexpected but signal-rich result.*

**Author:** Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Working draft. The Weyl computations (§§2–3) are standard and checkable; the resolution in §§5–6 is a redirection, not a completed result. Tiered **[E]** established, **[C]** conjecture/interpretation, **[O]** open.

**Prerequisite:** [The Scale Field of the Reciprocal Interior (Crunch 1)](note.html?src=scale_field_of_the_reciprocal_interior); [RI I](note.html?src=field_equations_of_the_reciprocal_interior).

**Notation:** [Glossary](note.html?src=cosmological_glossary). $\sigma=\ln a=-\ln(\text{areal radius})$; $c=1$.

---

## 1. The test

Crunch 1 established (interpretation B) that $\sigma=-\ln(\text{areal radius})$ is exact in the real Kottler exterior and FLRW interior. The hypothesis to test:

> Is the throat Weyl discontinuity a **slicing artifact** — does it appear as *smooth $\partial\sigma$* in the scale-extended description, dissolving when read in $\sigma$?

The honest answer below is **no, not by relabeling** — but the calculation redirects the throat problem productively rather than closing it.

---

## 2. Exterior Weyl in the scale variable [E]

The Kottler exterior ($f=1-2GM/r-\Lambda r^2/3$) is Petrov type D with a single independent Weyl scalar
\[
\Psi_2=-\frac{GM}{r^3}.
\]
The cosmological constant enters only the Ricci sector ($R_{\mu\nu}=\Lambda g_{\mu\nu}$, pure trace) and contributes **nothing** to the trace-free Weyl tensor — so Kottler and Schwarzschild have identical Weyl. In the scale variable $r=e^{-\sigma}$,
\[
\boxed{\ \Psi_2=-GM\,e^{3\sigma},\qquad C_{\alpha\beta\gamma\delta}C^{\alpha\beta\gamma\delta}=\frac{48\,G^2M^2}{r^6}=48\,G^2M^2\,e^{6\sigma}\ }.
\]
This is clean and monotone: as $\sigma\to-\infty$ (spatial infinity, $a\to0$) the Weyl vanishes; approaching the horizon $\sigma\to0^-$ it grows to $-GM$. The concentrated exterior mass registers as a Weyl field scaling as $e^{3\sigma}=a^3$.

---

## 3. Interior Weyl, and the jump [E]

The RI I interior is spatially-flat FLRW, which is conformally flat, so
\[
\Psi_2=0,\qquad C_{\alpha\beta\gamma\delta}=0 \quad(\sigma>0).
\]
At the throat $\sigma=0$ the two sides give
\[
\Psi_2\big|_{\sigma\to0^-}=-GM\ \ (\text{Kottler}),\qquad \Psi_2\big|_{\sigma\to0^+}=0\ \ (\text{FLRW}).
\]
A finite **jump** $-GM\to0$. Writing it in $\sigma$ does **not** smooth it: $-GM\,e^{3\sigma}$ is a perfectly smooth function of $\sigma$ on the exterior, but it does not continue into the interior, where Weyl is identically zero. The naive slicing-artifact hypothesis **fails**.

---

## 4. What the jump actually is [E/C]

The discontinuity is a **Weyl-to-Ricci conversion**, not a coordinate artifact:

- Exterior: the mass is *concentrated* (a point source), registering as **Weyl** (tidal, trace-free), $\Psi_2=-GM/r^3$, with $R_{\mu\nu}$ only from $\Lambda$.
- Interior: the mass is *smoothly distributed* (FLRW fluid), registering as **Ricci** (volume, matter), $R_{\mu\nu}\sim T_{\mu\nu}$, with $C=0$.

So the throat is where "concentrated $\to$ smooth" happens — exactly the open Q3 (*construct the Weyl-to-Ricci transition across the throat*). Crunch 2 confirms this is a genuine physical transition; $\sigma$ alone does not perform it.

---

## 5. The resolution the calculation actually points to [C]

The jump is real **only under the assumption that the interior is exact FLRW immediately behind the horizon** — and that assumption is the region-conflation we already retired in the three-region picture. The correct structure is:

- the exterior's concentrated Weyl ($\Psi_2=-GM\,e^{3\sigma}$, peaking at the throat) does **not** vanish instantly at $\sigma=0$;
- it **relaxes to smooth Ricci across the reciprocal interior patch (region 2)**, reaching $C=0$ (exact FLRW / de Sitter) only *asymptotically* as $\sigma\to+\infty$;
- RI I's exact-FLRW interior is the **deep-interior (region 3) limit**, not the near-throat geometry.

This is precisely the "Alice approaches FLRW asymptotically, not instantly" correction. Under it the throat is **continuous**: $\Psi_2(\sigma)$ rises as $e^{3\sigma}$ on the exterior to $-GM$ at $\sigma=0$, then **turns over and decays** to $0$ across region 2. There is no jump; there is a peak at the throat and a relaxation inward.

**What is not yet done:** constructing the interior profile $\Psi_2(\sigma)$ for $\sigma>0$ that smoothly connects $-GM$ (throat) to $0$ (de Sitter). That is region 2's metric — the unbuilt GD II throat — now sharpened to a definite target: *find the near-throat interior Weyl that decays $-GM\to0$ as the mass converts from concentrated to smooth.* [O]

---

## 6. The genuine 5D test — not relabeling, but embedding [C/O]

The scale-extension idea survives, but in a stronger form than "relabel with $\sigma$." The relevant machinery is **induced-matter / Campbell–Magaard**:

- **Campbell–Magaard theorem** [1]: every 4D (pseudo-)Riemannian spacetime embeds *locally* in a 5D **Ricci-flat** manifold. So both the Kottler exterior and the FLRW interior individually embed in 5D vacuum.
- **Induced-matter (Space–Time–Matter) theory** [2]: 4D Ricci/matter arises as a *projection* of 5D vacuum geometry through the extra (scale) dimension. In this framework the Weyl-to-Ricci conversion of §4 is exactly the kind of thing that can be **smooth in 5D** while its 4D slices jump — the concentrated 4D Weyl and the smooth 4D Ricci being two projections of one 5D curvature.

So the real Crunch 2/3 is: **embed the joined exterior+interior in a single 5D Ricci-flat geometry with $\sigma$ as the extra coordinate, and test whether the 5D Weyl (or Riemann) is continuous across $\sigma=0$ even though the 4D $\Psi_2$ jumps.** Campbell guarantees the pieces embed; the question is whether one embedding covers both and smooths the throat. This is a genuine calculation, not a relabeling, and it is the honest continuation. [O]

---

## 7. Status: unexpected but signal-rich

**The naive hypothesis is false** — $\sigma$-relabeling does not dissolve the throat Weyl jump. Reported straight, no gloss.

**What the calculation bought instead:**
1. A clean exterior scaling $\Psi_2=-GM\,e^{3\sigma}$ ($C^2=48G^2M^2e^{6\sigma}$) — the concentrated mass as a Weyl field $\propto a^3$.
2. A precise identification of the throat as a **Weyl-to-Ricci conversion** (Q3), confirmed to be genuine, not a coordinate effect.
3. Two concrete resolution paths, both sharper than the throat problem was before: (a) the **region-2 Weyl-relaxation profile** $\Psi_2(\sigma):-GM\to0$, and (b) the **5D induced-matter embedding** (Campbell–Magaard), where the 4D jump can be a smooth-5D projection.

The signal — the exterior Weyl's clean $e^{3\sigma}$ scaling and the exact match of the throat to the Weyl$\to$Ricci problem — is strong enough to justify building the region-2 profile and testing the 5D embedding, which is where Crunch 3 goes.

---

## References

1. J. E. Campbell, *A Course of Differential Geometry* (Clarendon, 1926); L. Magaard, doctoral thesis (Kiel, 1963); modern statement in S. Rippl, C. Romero, R. Tavakol, "D-dimensional gravity from (D+1) dimensions," *Class. Quantum Grav.* **12**, 2411 (1995), [arXiv:gr-qc/9511016](https://arxiv.org/abs/gr-qc/9511016).
2. P. S. Wesson and J. Ponce de Leon, "Kaluza–Klein equations, Einstein's equations, and an effective energy-momentum tensor," *J. Math. Phys.* **33**, 3883 (1992); P. S. Wesson, *Space–Time–Matter* (World Scientific, 1999).
3. Petrov type-D Weyl scalar $\Psi_2=-GM/r^3$ for Schwarzschild/Kottler: standard; see e.g. Chandrasekhar, *The Mathematical Theory of Black Holes* (Oxford, 1983).
4. G. Salehi, [GD1](gd1.html); Crunch 1 [scale-field note](note.html?src=scale_field_of_the_reciprocal_interior); [conformal-crossover note](note.html?src=reciprocal_interior_conformal_crossover), this project.
