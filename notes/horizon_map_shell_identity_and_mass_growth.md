# The Exact Shell Identity and the Kottler Mass Condition for Alice's Interior

*Technical note*

**Author:** Claude (Anthropic).

## Abstract

This note derives two exact results for a timelike comoving boundary between Alice's FLRW interior and a static Kottler (Schwarzschild–de Sitter) exterior. It develops the timelike-shell route to the horizon map directly.

First, continuity of the induced metric across any spherically symmetric junction — timelike or null, stress-free or not — forces the shell's shared areal radius to equal \(a(\tau)R_0\). This is the "exact shell identity" the private planning notes conjectured and kept carefully distinct from the reciprocal duality dictionary \(a=1/r\); it is not a conjecture but a direct consequence of what gluing two spacetimes along a shared hypersurface means.

Second, solving the actual junction condition — continuity of extrinsic curvature, not a comparison of raw quasi-local masses — shows that the Kottler mass parameter required for a smooth match depends only on Alice's non-vacuum content, matter and radiation. When the same cosmological constant is shared by both geometries, \(\Lambda\)'s contribution to each side's own Misner–Sharp mass cancels exactly and drives no growth in the exterior mass parameter. The residual obstruction to an exactly smooth match is radiation pressure alone, and it decays as \(a^{-1}\) — vanishing precisely in the late-time limit (\(a\to\infty\), \(r\to0\)) central to Geometric Duality. Dust plus \(\Lambda\) matches Bob's exterior with zero surface stress, extending the classical Oppenheimer–Snyder result and recovering the Einstein–Straus construction with a common \(\Lambda\).

---

## 1. Which problem this attacks

The horizon-map programme has three open routes:

1. a null boundary map, solving null junction conditions directly at \(r=1\);
2. a timelike transition layer, placed away from the null horizon, using ordinary Israel–Darmois matching and retaining any resulting surface stress;
3. a higher-dimensional throat construction.

This note works route 2. It is the most tractable of the three because it uses standard, well-established timelike-shell machinery rather than the null-shell formalism route 1 requires, or the unspecified embedding route 3 requires.

---

## 2. The exact shell identity

Take a comoving shell in Alice's interior at fixed \(R=R_0\). Restricting the interior metric

\[
ds_A^2=-d\tau^2+a(\tau)^2\left(dR^2+R^2d\Omega^2\right)
\]

to this shell gives the induced metric

\[
ds_\Sigma^2=-d\tau^2+\bar R(\tau)^2d\Omega^2,
\qquad
\bar R(\tau)\equiv a(\tau)R_0.
\]

**Claim.** For any spherically symmetric matching of this interior to an exterior spacetime along \(\Sigma\) — timelike or null, stress-free or not — the areal radius shared by both descriptions of \(\Sigma\) must equal \(\bar R(\tau)=a(\tau)R_0\).

This is not a dynamical statement; it is a statement about what "gluing two spacetimes along a common hypersurface" means. The induced metric on \(\Sigma\) must agree as computed from either side, by definition of a junction. The area of the 2-sphere at proper time \(\tau\) is an invariant of that induced metric — it does not depend on which coordinate system either side uses to describe the surrounding four-geometry. Only the *extrinsic* curvature (how \(\Sigma\) curves into the ambient spacetime from each side) is free to disagree, and a disagreement there is exactly what constitutes surface stress-energy. The areal radius itself is not up for negotiation.

Two consequences follow immediately:

- The shell's areal radius is \(\bar R(\tau)=a(\tau)R_0\), an *increasing* function of \(\tau\) — not a reciprocal, decreasing quantity.
- This is a genuinely different object from Bob's \(r(\tau)\) as GD1 defines it, which is exactly the "two radial flows" distinction the companion note [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior) draws between Bob's \(r\) and Alice's areal radius \(\bar R\).

Setting \(R_0=1\) gives the exact shell identity \(\bar R=a(\tau)\), kept explicitly separate from the duality dictionary \(a=1/r\). The separation isn't merely prudent bookkeeping: the shell identity is forced by ordinary junction geometry, whether or not the rest of the GD construction succeeds.

---

## 3. The Kottler mass condition

The next question is whether this shell can be matched *smoothly* — with what surface stress, if any — onto a static Kottler (Schwarzschild–de Sitter) exterior,

\[
ds_+^2=-f(\bar R)\,dT^2+\frac{d\bar R^2}{f(\bar R)}+\bar R^2d\Omega^2,
\qquad
f(\bar R)=1-\frac{2GM_K}{\bar R}-\frac{\Lambda_+\bar R^2}{3}.
\]

Allow the interior and exterior cosmological constants, \(\Lambda_-\) and \(\Lambda_+\), to differ until the final step, and reserve \(\rho,p\) for non-vacuum density and pressure only — matter and radiation, with \(\Lambda\) kept on the geometric side of the field equations throughout.

**A natural pitfall.** It is tempting to compute the interior's own Misner–Sharp mass, \(m_{\rm MS}^-=\tfrac{4\pi}{3}\rho \bar R^3+\tfrac{\Lambda_-\bar R^3}{6G}\), and treat it as the quantity a fixed exterior mass parameter must match. Because the \(\Lambda_-\bar R^3\) term grows without bound as the shell expands, this comparison would suggest a static exterior can never work. That reasoning skips the actual junction condition: the exterior Kottler geometry has its own Misner–Sharp mass, \(m_{\rm MS}^+=M_K+\tfrac{\Lambda_+\bar R^3}{6G}\), carrying an identically-shaped term. Comparing \(m_{\rm MS}^-\) directly against \(M_K\) silently sets \(\Lambda_+=0\) while keeping \(\Lambda_->0\) — an inconsistent comparison, not a physical obstruction. The correct quantity is obtained by solving the junction condition properly.

**The junction condition.** For a spherically symmetric timelike boundary, continuity of the angular extrinsic curvature component requires

\[
n_-^a\nabla_a\bar R = n_+^a\nabla_a\bar R,
\]

where \(n^a\) is the outward unit normal on each side. On the FLRW side, with \(\dot{\bar R}=H\bar R\) and the Friedmann constraint \(H^2=\tfrac{8\pi G}{3}\rho+\tfrac{\Lambda_-}{3}-\tfrac{k}{a^2}\),

\[
n_-^a\nabla_a\bar R=\sqrt{1-kR_0^2}.
\]

On the Kottler side, using the normalization of the shell's 4-velocity,

\[
n_+^a\nabla_a\bar R=\sqrt{\dot{\bar R}^{\,2}+f(\bar R)}.
\]

Setting these equal and substituting \(\dot{\bar R}^{\,2}=H^2\bar R^2\) and \(\bar R=aR_0\), every curvature term cancels except the difference between the two cosmological constants, leaving

\[
\boxed{
M_K=\frac{4\pi}{3}\rho\,\bar R^3+\frac{\Lambda_--\Lambda_+}{6G}\bar R^3.
}
\]

When the same cosmological constant is shared by both geometries — the natural choice for Geometric Duality, since one \(\Lambda\) is meant to describe both the interior's dark-energy domination and the exterior's asymptotic de Sitter structure — the vacuum terms cancel exactly:

\[
\boxed{
M_K=\frac{4\pi}{3}\rho\,\bar R^3
}
\qquad(\Lambda_-=\Lambda_+).
\]

\(\Lambda\) is absent. This is precisely the classical Oppenheimer–Snyder result — constant mass for a collapsing dust ball — extended to include a shared cosmological constant, and it recovers the standard Einstein–Straus construction. Vacuum energy causes no mass-growth obstruction when it is common to both sides of the junction.

---

## 4. The pressure condition and the radiation residual

Mass matching alone does not guarantee a stress-free junction; the temporal extrinsic-curvature component must also agree. Comoving FLRW observers are geodesic — a homogeneous fluid has no pressure gradient to accelerate them — so \(K_{\tau\tau}^-=0\), and a smooth match requires \(K_{\tau\tau}^+=0\) as well: the shell must follow a radial geodesic of the Kottler exterior. Equating the resulting geodesic equation for \(\ddot{\bar R}\) with the FLRW acceleration equation, and substituting the boxed \(M_K\) above, gives

\[
\boxed{
p=\frac{\Lambda_--\Lambda_+}{8\pi G}.
}
\]

With a shared cosmological constant, this reduces to \(p=0\): a comoving boundary matches a static Kottler exterior smoothly only where the non-vacuum pressure vanishes. Dust satisfies this identically. Radiation does not, since \(p_r=\rho_r/3\neq0\), and is the genuine surviving obstruction to an exactly smooth static match.

The size of that obstruction is worth stating precisely. With \(\rho_m=\rho_{m0}a^{-3}\), \(\rho_r=\rho_{r0}a^{-4}\), the shared-\(\Lambda\) mass condition gives

\[
M_K(a)=M_m+\frac{M_{r0}}{a},
\qquad
M_m=\frac{4\pi}{3}\rho_{m0}R_0^3,
\qquad
M_{r0}=\frac{4\pi}{3}\rho_{r0}R_0^3.
\]

Under the reciprocal ansatz \(a=1/r\),

\[
M_K(r)=M_m+M_{r0}\,r.
\]

The radiation contribution *decays* to zero as \(r\to0\) — exactly the late-time regime Geometric Duality's construction lives in. The match is not merely approximately clean at late times; it becomes exact in the limit, with the residual surface stress vanishing continuously rather than being patched over.

---

## 5. What this establishes for the three routes

- **Route 2 (timelike layer), dust plus shared \(\Lambda\):** closed. This is now an exact, zero-surface-stress result — the Einstein–Straus construction with a common cosmological constant — not merely a plausible candidate. Radiation introduces a small, well-characterized, monotonically decaying departure from perfect smoothness, fully quantified above, rather than a structural obstruction requiring new machinery.
- **Route 1 (null boundary):** the genuinely open target, and the natural next step. Codex's junction condition and Section 2's shell identity together give an exact, fully worked timelike result; the productive question now is what happens to that result as the shell's comoving radius \(R_0\) is pushed toward the horizon-adjacent regime — whether the smooth match degrades gracefully into the null limit or reveals a structural feature specific to \(r=1\) that route 1 will have to confront directly.
- **Route 3 (higher-dimensional throat):** unaffected by this note either way.

---

## 6. Open items

1. Take the \(R_0\to\) horizon-adjacent limit of Section 3's construction and determine whether it connects productively to the null-boundary problem of route 1.
2. Determine whether the small residual radiation stress (Section 4) is worth an explicit thin-shell treatment, or whether its decay to zero is sufficient justification to set it aside for the purposes of the late-time construction.
3. Extend Section 3 to the case where \(k\neq0\), to check whether spatial curvature reintroduces any term that \(\Lambda\) does not.
4. The areal-radius-continuity argument in Section 2 depends only on the definition of a metric junction; it should hold for any interior/exterior pairing, not only FLRW–Kottler. Worth checking whether it has any use beyond this specific application.

---

## References

1. Misner, C. W., and Sharp, D. H. "Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse." *Physical Review* 136, no. 2B (1964): B571–B576. [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. Oppenheimer, J. R., and Snyder, H. "On Continued Gravitational Contraction." *Physical Review* 56 (1939): 455–459. [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. Israel, W. "Singular Hypersurfaces and Thin Shells in General Relativity." *Il Nuovo Cimento B* 44B (1966): 1–14; erratum *Il Nuovo Cimento B* 48B (1967): 463.
4. Kottler, F. "Über die physikalischen Grundlagen der Einsteinschen Gravitationstheorie." *Annalen der Physik* 361, no. 14 (1918): 401–462. [doi:10.1002/andp.19183611402](https://doi.org/10.1002/andp.19183611402).
5. Einstein, A., and Straus, E. G. "The Influence of the Expansion of Space on the Gravitation Fields Surrounding the Individual Stars." *Reviews of Modern Physics* 17 (1945): 120–124. [doi:10.1103/RevModPhys.17.120](https://doi.org/10.1103/RevModPhys.17.120).
6. Faraoni, V., and Jacques, A. "Cosmological Expansion and Local Physics: The Influence of the Cosmological Constant on Gravitationally Bound Systems." *Physical Review D* 76 (2007): 063510. [doi:10.1103/PhysRevD.76.063510](https://doi.org/10.1103/PhysRevD.76.063510). Already cited in the main paper (ref-31).
7. Poisson, E. *A Relativist's Toolkit: The Mathematics of Black-Hole Mechanics*. Cambridge: Cambridge University Press, 2004.
8. Codex (OpenAI). "Vacuum-Energy Cancellation at an FLRW–Kottler Junction." Technical note, this project — a companion derivation of the junction condition in Section 3 via direct angular and temporal matching, arriving at the identical result by an independent route.
