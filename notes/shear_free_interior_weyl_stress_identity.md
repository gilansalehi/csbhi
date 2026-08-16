# A Black Hole on the Aeon Boundary

*In a shear-free reciprocal interior the residual Weyl field dilutes at the conformal weight of the Weyl scalar. Under de Sitter compactification the rescaled curvature remains finite while the physical curvature vanishes, giving the already-born child a regular, seed-carrying conformal future.*

---

## Introduction

Conformal Cyclic Cosmology asks the aeon boundary to be a regular conformal surface. A black hole is the obvious threat to that: its Weyl field grows without bound toward the central singularity, and were that field to survive to the boundary the rescaled geometry would diverge there. Penrose removes the threat by requiring every black hole to have evaporated before the crossover, so that none is present when the aeon ends.

CSBHI separates birth from conformal future. A child universe is born at a finite collapse event in its parent cosmological generation. The reciprocal map then carries the already-born child from its horizon-anchored beginning toward its own de Sitter future. This note concerns that second endpoint. The interior's residual Weyl field dilutes at exactly the conformal weight for which the rescaled curvature stays finite while the physical curvature vanishes. The parent black hole need not evaporate before the child can possess a regular conformal future.

Conventions: \(c=1\), \(G\) retained. Areal radius \(\mathcal R\); Misner–Sharp material mass \(m\); mean density \(\bar\rho\equiv 3m/4\pi\mathcal R^3\); density contrast \(D\equiv\bar\rho-\rho\); anisotropic stress \(\Pi\equiv p_r-p_t\). A flow is shear-free when its transverse and longitudinal expansion rates coincide, \(H_\parallel=H_\perp\equiv H\). \(\Psi_2\) is the single spherical Weyl scalar, \(\hat\Psi_2\) its conformally rescaled value.

## 1. The conservation law of a shear-free interior

Take a comoving congruence in a spherically symmetric interior with anisotropic stress, \(T^\mu{}_\nu=\mathrm{diag}(-\rho,p_r,p_t,p_t)\). Two exact relations hold with no further assumption. Energy conservation along the flow reads

\[
D_\tau\rho=-(\rho+p_r)H_\parallel-2(\rho+p_t)H_\perp,
\]

and the Misner–Sharp work equation — radial pressure does the radial work — gives

\[
D_\tau m=-4\pi p_r\,\mathcal R^2\,D_\tau\mathcal R
\quad\Longrightarrow\quad
D_\tau\bar\rho=-3H_\perp(\bar\rho+p_r).
\]

Subtracting, and setting \(H_\parallel=H_\perp=H\) for a shear-free flow,

\[
\boxed{\,D_\tau D=-H\,(3D+2\Pi)\,}.
\]

This is the assumption-light backbone, and it already carries the moral. It is tempting to track the density contrast with a single isotropic pressure, which yields \(D\propto a^{-3}\); but an interior that carries a Weyl field is not isotropic, and holding the pressure in the conservation law consistent with the anisotropy it sources restores the \(2\Pi\) term. The closure fixes the dilution:

| closure | dilution |
|---|---|
| \(\Pi=0\) (isotropic) | \(D\propto a^{-3}\) |
| \(\Pi=-\tfrac12 D\) | \(D\propto a^{-2}\) |
| \(\Pi=-D\) | \(D\propto a^{-1}\) |

The isotropic power \(a^{-3}\) requires *zero* anisotropic stress — the opposite of what a Weyl-carrying throat has. So the physical question is which closure a shear-free interior actually realizes.

## 2. The closure, computed directly

The most general geodesic, comoving, shear-free spherical metric is, up to a radial coordinate choice,

\[
ds^2=-d\tau^2+\phi(\tau,l)^2\left[s(l)^2\,dl^2+d\Omega^2\right],
\]

because geodesic-comoving fixes synchronous gauge and shear-free forces the spatial metric to be conformal to a fixed shape, \(h_{ij}=\phi^2\hat h_{ij}\). In the separable representative \(\phi=a(\tau)\Sigma(l)\), the orthonormal Einstein tensor is elementary,

\[
8\pi G\rho=3H^2+\tfrac{1}{2a^2}\,{}^{(3)}\!R_h,\qquad
8\pi G\,p_r=\tfrac{1}{a^2}\,{}^{(3)}G^h_{ll}-\Big(2\tfrac{\ddot a}{a}+H^2\Big),\qquad
8\pi G\,p_t=\tfrac{1}{a^2}\,{}^{(3)}G^h_{\theta\theta}-\Big(2\tfrac{\ddot a}{a}+H^2\Big),
\]

with the fixed 3-shape contributing \({}^{(3)}G^h_{ll}=-(1-\Sigma'^2)/\Sigma^2\) and \({}^{(3)}G^h_{\theta\theta}=\Sigma''/\Sigma\). The isotropic terms cancel in the difference, leaving

\[
8\pi G\,\Pi=\tfrac{1}{a^2}\left[{}^{(3)}G^h_{ll}-{}^{(3)}G^h_{\theta\theta}\right]
=-\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right].
\]

The Misner–Sharp mass \(Gm=\tfrac{\mathcal R}{2}\big(1-(\nabla\mathcal R)^2\big)\) with \(\mathcal R=a\Sigma\), through \(\Psi_2=-Gm/\mathcal R^3+\tfrac{4\pi G}{3}\rho\), gives

\[
\Psi_2=-\tfrac13\,\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right]=\tfrac13\,(8\pi G\,\Pi),
\qquad
4\pi G\,D=\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right].
\]

Hence, exactly,

\[
\boxed{\,8\pi G\,\Pi=6\,\Psi_2=-4\pi G\,D\,}\qquad\Longrightarrow\qquad \Pi=-\tfrac12 D,
\]

and, fed back into the identity of §1, \(D_\tau D=-2HD\): the Weyl field dilutes as \(D\propto\mathcal R^{-2}\), power **2**.

A word on convention, since the factor matters below. The physical result \(\Pi=-\tfrac12 D\) is convention-free. The Weyl relations are written in the Newman–Penrose normalization \(\Psi_2\); in terms of the radial electric-Weyl (tidal) eigenvalue \(C_{\hat0\hat r\hat0\hat r}=2\Psi_2\), the same identity reads \(8\pi G\,\Pi=3\,C_{\hat0\hat r\hat0\hat r}\). Once anisotropic pressure is present the density relation generalizes to \(\Psi_2=-\tfrac{4\pi G}{3}(D+\Pi)\), which with \(\Pi=-\tfrac12 D\) returns \(8\pi G\,\Pi=6\Psi_2\) consistently; the perfect-fluid form \(\Psi_2=-\tfrac{4\pi G}{3}D\) holds only in the isotropic sector.

The separable computation is confirmed numerically. A full finite-difference Riemann → Weyl → Einstein evaluation returns \(\Pi/D=-\tfrac12\) to eight significant figures, and reproduces \(8\pi G\,\Pi=3\,C_{\hat0\hat r\hat0\hat r}\) with \(\Psi_2\) read directly off the Weyl tensor — so the ratio does not lean on the mass identity. Introducing shear, \(H_\parallel\neq H_\perp\), breaks the ratio away from \(-\tfrac12\): the identity is specifically the shear-free closure.

## 3. The dilution power is a conformal weight

Power 2 is not a number the throat happens to land on. It is the conformal weight of the Weyl scalar, and that is what makes the crossover regular.

Under a conformal rescaling \(\hat g=\Omega^2 g\) the physical, orthonormal Weyl scalar transforms as

\[
\hat\Psi_2=\Omega^{-2}\,\Psi_2,
\]

because the conformal tensor \(C^a{}_{bcd}\) is invariant while the unit frame rescales by \(\Omega^{-1}\). The de Sitter future is conformally compactified by \(\Omega\propto 1/a\), so that \(\hat g\) stays regular as \(a\to\infty\). Therefore

\[
\hat\Psi_2\ \propto\ a^{2}\cdot\Psi_2^{\rm in}\ \propto\ a^{2}\cdot a^{-2}\ =\ \text{finite, nonzero}.
\]

The two facts required at the child's conformal future hold together. The **physical** Weyl vanishes there, while the **rescaled** Weyl stays finite. Weight \(-2\) is the only exponent that delivers both: a faster \(a^{-3}\) would rescale to \(a^{-1}\to0\) and carry no finite seed, while a slower \(a^{-1}\) would rescale to \(a\to\infty\) and leave the boundary singular. The shear-free interior realizes the regular value on its own dynamics, with no condition imposed at the boundary. For a genuine de Sitter interior \(a=e^{H\tau}\) this is exact numerically: \(\Psi_2\,a^2\) is constant to machine precision along the flow, and \(\hat\Psi_2\) with \(\Omega=1/a\) is constant to the boundary. Whether that finite rescaled seed fixes the initial data of a later collapse-born child is a separate transfer problem; the calculation here establishes regularity, not the birth mechanism.

It is worth being precise about what is *not* symmetric here, because it looks at first like a broken reflection. The exterior Kottler field carries the vacuum Weyl \(\Psi_2^{\rm out}=-GM/\mathcal R^3\), power 3 in the areal radius — but that is a *spatial* profile, the tidal field of a point mass on a fixed slice. The interior power 2 is a *temporal* dilution rate. Comparing the exponents as though the two should match is a category error. The exponent mismatch \(3\neq2\) records the change made by the scale inversion \(a=1/r\): the parent-side radial endpoint \(r\to0\) becomes the already-born child's temporal limit \(a\to\infty\), where the rescaled \(\Psi_2\) is finite. The collapse that births the child occurs earlier and remains a distinct part of the generational map.

## 4. What remains open

The closure above is exact for a *geodesic* shear-free interior. Its two idealizations are exactly the two directions of further work.

A realistic inhomogeneous throat is pressure-supported, so its comoving congruence is accelerated rather than geodesic. The conservation identity of §1 then acquires an acceleration term, and whether the accelerated case preserves the conformal weight 2 or shifts it is the open dynamical question — only the weight-2 value keeps the boundary regular, so this is the test of whether a matter-supported neck remains compatible with a clean crossover. And if the interior is allowed a finite shear window, the closure of §2 no longer holds and \(\Pi/D\) is free; the price is that the interior is then not exactly isotropic, which was the property the reciprocal construction was meant to preserve. Both are honest continuations. What is settled is the simplest case: the shear-free reciprocal interior is fully solved, and its dilution power is the conformal weight that keeps the aeon crossover regular.

## 5. Result

> For a geodesic, shear-free spherical interior the anisotropic stress is fixed exactly by the density contrast, \(\Pi=-\tfrac12 D\) — equivalently \(8\pi G\,\Pi=6\Psi_2\) in Newman–Penrose normalization — and the Weyl field dilutes as \(\mathcal R^{-2}\). That exponent is the conformal weight of the Weyl scalar: the unique dilution for which the child's conformal future is both regular (physical Weyl \(\to0\)) and information-carrying (rescaled Weyl finite). The regularity Conformal Cyclic Cosmology secures by evaporation is secured here by the geometry of the reciprocal interior. The result governs the future of a child born earlier at collapse; it does not move the child's birth to conformal infinity.

The natural next step is to derive the transfer law between this finite future seed and the initial data of later collapse-born children. Reproducing the same weight-2 behavior in every generation would make the branching lineage conformally self-similar rather than merely regular in one child.

---

*Derived by Claude (Anthropic) and independently cross-checked by Codex (OpenAI) under Salehi Remediation. The numerical results are reproducible with the dependency-free scripts `shear_free_Pi_equals_minus_half_D.py` and `conformal_weight_of_weyl_at_boundary.py` in the project's `scripts/` directory.*

## References

1. R. Penrose, *Cycles of Time* (Bodley Head, 2010); R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, eds. Hawking & Israel (Cambridge, 1979).
2. C. W. Misner and D. H. Sharp, *Phys. Rev.* **136**, B571 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
3. L. Herrera, J. Ospino, A. Di Prisco, E. Fuenmayor, O. Troconis, "Structure and evolution of self-gravitating objects and the orthogonal splitting of the Riemann tensor," *Phys. Rev. D* **79**, 064025 (2009), [arXiv:0903.3532](https://arxiv.org/abs/0903.3532).
4. G. Salehi, [Geometric Duality I](https://www.gilansalehi.com/csbhi/gd1.html), this project.
