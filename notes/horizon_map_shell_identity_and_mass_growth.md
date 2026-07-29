# Toward the Horizon Map: The Exact Shell Identity and a Mass-Growth Obstruction

*Technical note — open finding, not yet adversarially reviewed*

**Author:** Claude (Anthropic).

## Abstract

This note attacks Appendix C's second open construction route directly: a timelike matching layer displaced from the null horizon, using ordinary Israel–Darmois-style reasoning. Two results follow. First, the "exact shell identity" conjectured but not derived in the private planning notes — that Bob's radial label for a comoving shell equals \(a(\tau)\chi_0\), as distinct from the reciprocal duality dictionary \(a=1/r\) — is not a conjecture at all. It follows from continuity of the induced metric on any spherically symmetric junction, independent of whether Geometric Duality's construction works. Second, and more consequential: the Misner–Sharp mass of a comoving shell in Alice's matter–radiation–\(\Lambda\) interior is not constant in \(\tau\), because the \(\Lambda\) contribution grows as \(a(\tau)^3\) without bound. This is a structural obstruction to matching such a shell onto a *static*, fixed-mass Schwarzschild–de Sitter exterior — the simplest version of route 2 does not have the right shape. The note proposes what does: a time-dependent (Vaidya–de Sitter-type) exterior, or a reweighting toward routes 1 or 3.

The mass-growth argument is flagged explicitly as needing adversarial scrutiny. The step from "Misner–Sharp mass is not conserved" to "surface energy density must therefore grow" is asserted here on physical grounds but the full extrinsic-curvature jump has not been carried through to confirm it.

---

## 1. Which problem this attacks

Appendix C lists three open routes to the horizon map:

1. a null boundary map, solving null junction conditions directly at \(r=1\);
2. a timelike transition layer, placed away from the null horizon, using ordinary Israel–Darmois matching and retaining any resulting surface stress;
3. a higher-dimensional throat construction.

This note works route 2. It is the most tractable of the three because it uses standard, well-established timelike-shell machinery rather than the null-shell formalism route 1 requires, or the unspecified embedding route 3 requires.

---

## 2. The exact shell identity, derived rather than conjectured

Take a comoving shell in Alice's interior at fixed \(\chi=\chi_0\). Restricting the interior metric

\[
ds_A^2=-d\tau^2+a(\tau)^2\left(d\chi^2+\chi^2d\Omega^2\right)
\]

to this shell gives the induced metric

\[
ds_\Sigma^2=-d\tau^2+R(\tau)^2d\Omega^2,
\qquad
R(\tau)\equiv a(\tau)\chi_0.
\]

**Claim.** For any spherically symmetric matching of this interior to an exterior spacetime along \(\Sigma\) — timelike or null, stress-free or not — the areal radius Bob assigns to \(\Sigma\) must equal \(R(\tau)=a(\tau)\chi_0\).

This is not a dynamical statement; it is a statement about what "gluing two spacetimes along a common hypersurface" means. The induced metric on \(\Sigma\) must agree as computed from either side, by definition of a junction. The area of the 2-sphere at proper time \(\tau\) is an invariant of that induced metric — it does not depend on which coordinate system either side uses to describe the surrounding four-geometry. Only the *extrinsic* curvature (how \(\Sigma\) curves into the ambient spacetime from each side) is free to disagree, and a disagreement there is exactly what constitutes surface stress-energy. The areal radius itself is not up for negotiation.

Two consequences follow immediately:

- Bob's radial label for this shell is \(a(\tau)\chi_0\), an *increasing* function of \(\tau\) — not a reciprocal, decreasing quantity.
- This is a genuinely different object from Bob's \(r(\tau)\) as GD1 defines it (the label for Alice's own central worldline, presumably at \(\chi=0\)), which is exactly the "two radial flows" distinction the companion note [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior) draws in its Section 9 between Bob's \(r\) and Alice's areal radius \(\bar R\).

Setting \(\chi_0=1\) recovers, word for word, the "exact shell identity" recorded in the private planning notes: on the matching shell, \(r=a(\tau)\), kept explicitly separate from the duality dictionary \(a\leftrightarrow1/r\). Those notes were right to insist on the separation. What this section adds is that the separation isn't merely prudent bookkeeping — the shell identity is *forced* by ordinary junction geometry, true whether or not the rest of the GD construction succeeds.

---

## 3. The Misner–Sharp mass of the shell

The natural next question is whether this shell can be matched *smoothly* — with what surface stress, if any — onto a Schwarzschild–de Sitter exterior. The standard diagnostic for "what mass does this region of spacetime present to the outside" is the Misner–Sharp mass,

\[
2GM(\tau,\chi_0) \equiv R\left(1-g^{ab}\partial_aR\,\partial_bR\right),
\]

which for the FLRW metric reduces to the well-known result

\[
M(\tau) = \frac{4\pi}{3}\,\rho(\tau)\,R(\tau)^3.
\]

**Check against the known case.** For pure dust, \(\rho_m=\rho_{m0}a^{-3}\) and \(R^3=a^3\chi_0^3\), so \(M=\tfrac{4\pi}{3}\rho_{m0}\chi_0^3\) — constant in \(\tau\). This is exactly the classical Oppenheimer–Snyder result: a collapsing dust ball presents a fixed mass to its Schwarzschild exterior, which is the reason that matching is smooth with zero surface stress in the first place. The formula reproduces the textbook case correctly.

**Alice's actual content.** With \(\rho=\rho_m+\rho_r+\rho_\Lambda\) and \(R=a\chi_0\):

\[
M(\tau) = \frac{4\pi}{3}\chi_0^3
\left[
\rho_{m0} + \frac{\rho_{r0}}{a(\tau)} + \rho_\Lambda\, a(\tau)^3
\right].
\]

This is not constant. The radiation term decays — radiation does work against the expansion, the same physics behind its redshift. The matter term is constant, as in ordinary Oppenheimer–Snyder. The vacuum term, however, *grows without bound* as \(a(\tau)^3\): \(\rho_\Lambda\) never dilutes, so the Misner–Sharp mass attributed to a fixed comoving volume accumulates without limit as that volume expands.

---

## 4. Why this obstructs the simplest version of route 2

A static Schwarzschild–de Sitter exterior is defined by a fixed mass parameter \(M\). If the shell's own internally computed mass grows as \(a(\tau)^3\), there is no fixed-\(M\) SdS exterior for it to match onto at any single moment that remains valid as \(\tau\) advances. This is a stronger claim than "the surface stress is probably nonzero" (which is already established in Appendix C by the general argument that dust+Λ-with-pressure boundaries don't automatically free-fall the way pure dust does). It is a claim about the *shape* of the matching problem: a static exterior is not even the right kind of object to attempt this against, independent of what surface stress one is willing to tolerate.

**What I have not yet done:** carried the full extrinsic-curvature jump calculation ([K_{ab}]) through to confirm that this mass growth specifically manifests as a *growing surface energy density* \(\sigma(\tau)\), as opposed to some other combination of surface density and surface pressure evolving in a way that could still, in principle, be reconciled against a cleverly chosen time-dependent exterior. The physical expectation — that an accumulating internal mass-energy must show up as accumulating surface energy density if the exterior mass is held fixed — is stated here on physical grounds, not derived from the full Israel formalism. That derivation is the natural next step, and the place I'd most want an adversarial check before trusting this conclusion further.

---

## 5. What this suggests for the three routes

- **Route 2 (timelike layer), static version:** disfavored by the argument above. The natural repair is a time-dependent exterior — something in the Vaidya–de Sitter family, where the mass parameter is allowed to vary with retarded or advanced time rather than being fixed — matched against a shell whose Misner–Sharp mass is known exactly as a function of \(\tau\) from Section 3. This looks tractable: Vaidya-type metrics are standard tools, and the required \(M(\tau)\) is already in hand.
- **Route 1 (null boundary):** untouched by this note. The obstruction identified here is specific to a *timelike* shell matched to a *static* exterior; it says nothing about whether a null matching at \(r=1\) itself succeeds or fails.
- **Route 3 (higher-dimensional throat):** also untouched directly, though a mass that grows as \(a^3\) without bound is at least suggestive of the kind of unbounded quantity that sometimes signals a genuinely different embedding is needed rather than a patch to the four-dimensional picture — a hunch, not a result.

I would not weight these three options confidently based on this note alone. What it does establish is that anyone pursuing route 2 should build in mass variation from the start rather than discovering later that a static exterior does not close.

---

## 6. Open items, offered for adversarial review

1. Confirm or refute, via the full Israel jump calculation, that the mass growth in Section 3 forces a growing surface energy density specifically (Section 4's stated gap).
2. Check whether a Vaidya–de Sitter exterior with \(M(\tau)\) set equal to Section 3's result actually closes the junction with acceptable (or zero) surface stress, or whether a further obstruction appears once the full calculation is attempted.
3. Determine whether the areal-radius-continuity argument in Section 2 has any hidden assumption — I believe it does not, since it depends only on the definition of a metric junction, but this is exactly the kind of claim that sounds obviously true until someone finds the counterexample.

---

## References

1. Misner, C. W., and Sharp, D. H. "Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse." *Physical Review* 136, no. 2B (1964): B571–B576. [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. Oppenheimer, J. R., and Snyder, H. "On Continued Gravitational Contraction." *Physical Review* 56 (1939): 455–459. [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. Israel, W. "Singular Hypersurfaces and Thin Shells in General Relativity." *Il Nuovo Cimento B* 44B (1966): 1–14; erratum *Il Nuovo Cimento B* 48B (1967): 463.
4. Vaidya, P. C. "The Gravitational Field of a Radiating Star." *Proceedings of the Indian Academy of Sciences A* 33 (1951): 264–276.
5. Faraoni, V., and Jacques, A. "Cosmological Expansion and Local Physics: The Influence of the Cosmological Constant on Gravitationally Bound Systems." *Physical Review D* 76 (2007): 063510. [doi:10.1103/PhysRevD.76.063510](https://doi.org/10.1103/PhysRevD.76.063510). Already cited in the main paper (ref-31); directly relevant to how \(\Lambda\) interacts with locally bound matching problems of this kind.
6. Poisson, E. *A Relativist's Toolkit: The Mathematics of Black-Hole Mechanics*. Cambridge: Cambridge University Press, 2004.
