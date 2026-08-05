# The Shear-Free Weyl–Stress Identity and the Conformal Weight of the Crossover

*Working result — the exact anisotropic-stress closure for a shear-free reciprocal interior, correcting a factor in the spherical-Weyl note, and showing the interior's Weyl-dilution power is the conformal weight demanded by a regular aeon boundary.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — cross-check requested; this note revises two equations of a Codex note and should not propagate to the open-questions list until confirmed.

**Date:** 2026-08-05.

**Status:** The central identity is derived analytically in the separable case and verified numerically (full 4D Riemann/Weyl/Einstein computation) on three further metrics, including the direct Weyl-tensor route. The conservation identity of §1 is assumption-light. Tiered **[E]** established, **[C]** conjecture, **[O]** open.

**Verification:** the numerical checks below are reproducible with the dependency-free scripts `shear_free_Pi_equals_minus_half_D.py` and `conformal_weight_of_weyl_at_boundary.py` in the repository's `scripts/` directory.

**Prerequisites:** [GD I](gd1.html); [A Spherical Weyl-Relaxation Profile for the Reciprocal Throat](note.html?src=spherical_weyl_relaxation_profile); [The Reciprocal Interior as 2D Dilaton Gravity](note.html?src=reciprocal_interior_as_2d_dilaton_gravity).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), \(G\) retained. Areal radius \(\mathcal R\); Misner–Sharp material mass \(m\); \(\bar\rho\equiv 3m/4\pi\mathcal R^3\); density contrast \(D\equiv\bar\rho-\rho\); anisotropic stress \(\Pi\equiv p_r-p_t\). \(H_\perp\equiv D_\tau\ln\mathcal R\), \(H_\parallel\equiv D_\tau\ln\ell_\parallel\); shear-free means \(H_\parallel=H_\perp\equiv H\).

---

## Summary

The spherical-Weyl note isolated the target that a smooth shear-free reciprocal throat must hit: an effective transverse stress carrying the relaxing Weyl field. It reported two results that this note revises.

1. **Eq (16):** a shear-free interior dilutes its Weyl field as \(D\propto a^{-3}\).
2. **Eq (34):** keeping the interior shear-free requires \(\Pi=-D\).

These cannot both hold. The exact conservation identity for a shear-free spherical interior is

\[
\boxed{\,D_\tau D=-H\,(3D+2\Pi)\,},
\]

which shows \(D\propto a^{-3}\iff\Pi=0\) and \(\Pi=-D\iff D\propto a^{-1}\). The two reported equations therefore correspond to *different* physical situations, not one.

The correct closure, computed directly from the metric, is

\[
\boxed{\,\Pi=-\tfrac12 D\,}\qquad\Longleftrightarrow\qquad 8\pi G\,\Pi=3\Psi_2,
\]

with the interior Weyl field diluting as \(D\propto\mathcal R^{-2}\) (power **2**, not 3).

The exterior Kottler field carries power 3 in the same scale variable, so the two sides are not reflection-symmetric. But this is not a broken symmetry — it is a **category error corrected**. The exterior power 3 is a *spatial* profile (the tidal field of a point mass at fixed time); the interior power 2 is a *temporal* dilution rate. The quantity that crosses the aeon boundary is the temporal one, and its power is exactly the **conformal weight of the Weyl scalar**: \(\hat\Psi_2=\Omega^{-2}\Psi_2\) with the de Sitter compactification factor \(\Omega\propto 1/a\). Power 2 is the unique dilution for which the rescaled Weyl is finite and nonzero at the boundary — the physical Weyl vanishes (clean big bang, Weyl-curvature hypothesis satisfied) while a finite Weyl seed is carried to the next aeon. The spherical-Weyl note's \(a^{-3}\) would rescale to \(a^{-1}\to0\), erasing that seed. The relevant symmetry of a recursive lineage is conformal (a rescaling between generations), not bilateral (a reflection about one horizon); the shear-free interior realizes the conformal weight automatically.

---

## 1. The exact shear-free conservation identity [E]

Take a comoving congruence in a spherically symmetric interior with anisotropic stress, \(T^\mu{}_\nu=\mathrm{diag}(-\rho,p_r,p_t,p_t)\). Two exact relations hold with no further assumption:

- **Energy conservation** along \(u\):
\[
D_\tau\rho=-(\rho+p_r)H_\parallel-2(\rho+p_t)H_\perp.
\]
- **Misner–Sharp work equation** (radial pressure does the radial work):
\[
D_\tau m=-4\pi p_r\,\mathcal R^2\,D_\tau\mathcal R
\quad\Longrightarrow\quad
D_\tau\bar\rho=-3H_\perp(\bar\rho+p_r).
\]

Subtracting, and setting \(H_\parallel=H_\perp=H\) for a shear-free flow,

\[
D_\tau D=D_\tau\bar\rho-D_\tau\rho
=-3H(\bar\rho+p_r)+H\left[3\rho+p_r+2p_t\right]
=-H\left(3D+2\Pi\right).
\]

This is the assumption-light backbone. **The spherical-Weyl note's Eq (14) dropped the \(2\Pi\) term** because it used a single isotropic pressure \(p\) in both the energy-conservation and work equations while separately solving for a nonzero anisotropic stress. Restoring consistency between the pressure that appears in conservation and the anisotropy being solved for produces the \(2\Pi\) term — and it is exactly that term which reconciles the two revised equations.

Immediate corollaries:

| closure | dilution |
|---|---|
| \(\Pi=0\) (isotropic) | \(D\propto a^{-3}\) |
| \(\Pi=-\tfrac12 D\) (correct, §2) | \(D\propto a^{-2}\) |
| \(\Pi=-D\) (Eq 34 as written) | \(D\propto a^{-1}\) |

The reflection-symmetric power \(a^{-3}\) requires *zero* anisotropic stress — the opposite of what a throat needs.

---

## 2. The closure, computed directly [E]

The most general geodesic, comoving, shear-free spherical metric is (up to a radial coordinate choice)

\[
ds^2=-d\tau^2+\phi(\tau,l)^2\left[s(l)^2\,dl^2+d\Omega^2\right],
\]

because geodesic-comoving fixes synchronous gauge and shear-free forces the spatial metric to be conformal to a fixed shape, \(h_{ij}=\phi^2\hat h_{ij}\). In the **separable** representative \(\phi=a(\tau)\Sigma(l)\), the orthonormal Einstein tensor is elementary:

\[
8\pi G\rho=3H^2+\tfrac{1}{2a^2}\,{}^{(3)}\!R_h,\qquad
8\pi G\,p_r=\tfrac{1}{a^2}\,{}^{(3)}G^h_{ll}-(2\tfrac{\ddot a}{a}+H^2),\qquad
8\pi G\,p_t=\tfrac{1}{a^2}\,{}^{(3)}G^h_{\theta\theta}-(2\tfrac{\ddot a}{a}+H^2),
\]

with the fixed 3-shape contributing \({}^{(3)}G^h_{ll}=-(1-\Sigma'^2)/\Sigma^2\), \({}^{(3)}G^h_{\theta\theta}=\Sigma''/\Sigma\). The isotropic terms cancel in the difference, leaving

\[
8\pi G\,\Pi=\tfrac{1}{a^2}\left[{}^{(3)}G^h_{ll}-{}^{(3)}G^h_{\theta\theta}\right]
=-\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right].
\]

The Misner–Sharp mass \(Gm=\tfrac{\mathcal R}{2}(1-(\nabla\mathcal R)^2)\) with \(\mathcal R=a\Sigma\) gives, through \(\Psi_2=-Gm/\mathcal R^3+\tfrac{4\pi G}{3}\rho\),

\[
\Psi_2=-\tfrac13\,\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right]
=\tfrac13\,(8\pi G\,\Pi),
\qquad
4\pi G\,D=\tfrac{1}{a^2}\left[\tfrac{1-\Sigma'^2}{\Sigma^2}+\tfrac{\Sigma''}{\Sigma}\right].
\]

Hence, exactly,

\[
8\pi G\,\Pi=3\Psi_2=-4\pi G\,D\qquad\Longrightarrow\qquad \Pi=-\tfrac12 D.
\]

**Numerical verification.** A full finite-difference Riemann → Weyl → Einstein computation confirms \(\Pi/D=-\tfrac12\) to 8 significant figures on three unrelated metrics: the separable case above, a non-separable shear-free interior \(\phi(\tau,l)\) with \(s(l)\neq\mathrm{const}\), and a third with nonzero energy flux \(G_{\hat 0\hat l}\neq0\). Computing \(\Psi_2\) directly from the Weyl tensor (radial tidal component \(C_{\hat0\hat l\hat0\hat l}\)) rather than from the mass identity reproduces \(8\pi G\,\Pi=3\,C_{\hat0\hat l\hat0\hat l}\), so the result does not rely on the spherical-Weyl note's convention. Introducing shear (\(H_\parallel\neq H_\perp\)) breaks the ratio away from \(-\tfrac12\): the identity is specifically the **shear-free** closure.

The revised pair is now internally consistent: \(\Pi=-\tfrac12 D\) fed into the §1 identity gives \(D_\tau D=-2HD\), i.e. \(D\propto\mathcal R^{-2}\).

---

## 3. The dilution power is a conformal weight [E→C]

The exterior Kottler branch carries the exact vacuum Weyl field \(\Psi_2^{\rm out}=-GM/\mathcal R^3\propto e^{3\sigma}\) in the scale variable \(\sigma=-\ln(\mathcal R/R_S)\) — a **spatial** profile, the tidal field of a point mass on a fixed slice. The shear-free interior carries \(\Psi_2^{\rm in}\propto D\propto \mathcal R^{-2}=a^{-2}\propto e^{-2\sigma}\) — a **temporal** dilution rate. Comparing the two exponents as though \(\sigma\to-\sigma\) should exchange them (the self-dual completion \(e^{-3|\sigma|}\) of the spherical-Weyl note, its Eq 20) compares a spatial law to a temporal one. The self-dual profile is not realized; but the reason is instructive, and it is the point of this note.

The quantity that actually crosses an aeon boundary is the temporal one, and its exponent is fixed not by reflection but by the **conformal weight of the Weyl scalar**. Under \(\hat g=\Omega^2 g\) the physical (orthonormal) Weyl scalar transforms as

\[
\hat\Psi_2=\Omega^{-2}\,\Psi_2 ,
\]

because \(C^a{}_{bcd}\) is conformally invariant while the unit frame rescales as \(\Omega^{-1}\). The de Sitter future is conformally compactified by \(\Omega\propto 1/a\) (so that \(\hat g\) is regular as \(a\to\infty\)). Therefore

\[
\hat\Psi_2\ \propto\ a^{2}\cdot\Psi_2^{\rm in}\ \propto\ a^{2}\cdot a^{-2}\ =\ \text{finite, nonzero}.
\]

**Numerical confirmation.** For a genuine de Sitter interior \(a=e^{H\tau}\) with a fixed Weyl-carrying shape, a direct Weyl-tensor computation gives \(\Psi_2\cdot a^2=\text{const}\) to machine precision across the expansion, and the rescaled scalar \(\hat\Psi_2\) with \(\Omega=1/a\) is exactly constant along the flow to the boundary. This is the CCC crossover condition realized by the dynamics rather than imposed: the **physical** Weyl vanishes at the boundary (a clean, low-Weyl big bang for the next aeon — the Weyl-curvature hypothesis), while the **rescaled** Weyl stays finite (a gravitational seed carried across). Power 2 is precisely the exponent that delivers both.

Two neighboring exponents fail this test. The spherical-Weyl note's \(a^{-3}\) rescales to \(a^{-1}\to0\): the seed vanishes and no gravitational memory reaches the next aeon. A hypothetical \(a^{-1}\) rescales to \(a\to\infty\): the boundary is singular. Only weight \(-2\) is regular and information-carrying, and it is what the corrected shear-free closure produces.

This reframes the earlier "the reflection is broken." The relevant symmetry of a recursive lineage was never a \(\mathbb Z_2\) reflection about one horizon; it is a **conformal rescaling between generations**. The exponent mismatch \(3\neq2\) is the signature of the scale inversion \(a=1/r\) — the operation that turns the parent's central singularity (\(r\to0\), where \(\Psi_2\propto r^{-3}\) diverges) into the child's smooth conformal future (\(a\to\infty\), where the rescaled \(\Psi_2\) is finite). The dilaton note reached the same place from the action side (\(\sigma\to-\sigma\) sends \(x^2R_2\to x^{-2}R_2\) and is not an off-shell symmetry). Both say the same thing: the reciprocal is not a reflection, it is a conformal map, and the interior's dilution power is the conformal weight that makes the map regular.

---

## 4. What remains open [O]

The result above is the closure for a **geodesic** shear-free interior. The escape routes are precisely the two assumptions:

1. **Non-geodesic (pressure-supported) throat.** A realistic inhomogeneous throat has radial pressure gradients, so the comoving congruence is accelerated. The §1 identity then acquires an acceleration term, and the spherical-Weyl note's shear-propagation equation (its Eq 32) — which assumed geodesic flow — no longer applies as written. The open dynamical question is whether the accelerated case preserves the conformal-weight-\(2\) dilution or shifts it; only the weight-\(2\) value keeps the aeon boundary regular, so this is the test of whether a matter-supported neck remains compatible with a clean crossover.
2. **Sheared interior.** If Alice's congruence is permitted a finite shear window (the spherical-Weyl note's own §5 "4D shear budget"), the identity of §2 does not hold and \(\Pi/D\) is free. The price is that the interior is then not exactly isotropic, which was the property the reciprocal probe cloud was meant to preserve.

Both are legitimate continuations. The honest status is that the *simplest* shear-free reciprocal interior is now fully solved: \(\Pi=-\tfrac12 D\), \(D\propto\mathcal R^{-2}\), with the dilution power identified as the conformal weight that keeps the aeon crossover regular.

---

## 5. Result

> For a geodesic, shear-free spherical interior the anisotropic stress is fixed exactly by the density contrast, \(\Pi=-\tfrac12 D\) (equivalently \(8\pi G\,\Pi=3\Psi_2\)), and the Weyl field dilutes as \(\mathcal R^{-2}\). This corrects the spherical-Weyl note's \(\Pi=-D\) and \(D\propto a^{-3}\), which omitted the anisotropic \(2\Pi\) term in the conservation identity and cannot both hold. The corrected exponent is not a defect: \(a^{-2}\) is the conformal weight of the Weyl scalar, the unique dilution for which the aeon boundary is both regular (physical Weyl \(\to0\), a clean big bang) and information-carrying (rescaled Weyl finite). The reciprocal map is thus a conformal rescaling between generations, not a reflection about one horizon — the exponent mismatch with the exterior is the fingerprint of the scale inversion, verified numerically.

**Next targets.** (1) The non-geodesic, pressure-supported throat, where an acceleration term enters the conservation identity — the case a matter-supported neck actually occupies. (2) Carry the finite rescaled seed \(\hat\Psi_2\) into the next aeon's initial data and check whether that aeon, on approach to *its* de Sitter future, reproduces the same weight-\(2\) crossover — which would make the lineage conformally self-similar rather than merely regular at a single boundary.

---

## References

1. [A Spherical Weyl-Relaxation Profile for the Reciprocal Throat](note.html?src=spherical_weyl_relaxation_profile); [The Reciprocal Interior as 2D Dilaton Gravity](note.html?src=reciprocal_interior_as_2d_dilaton_gravity), this project.
2. C. W. Misner and D. H. Sharp, *Phys. Rev.* **136**, B571 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
3. L. Herrera, A. Di Prisco, J. Ospino, "Structure scalars in anisotropic spheres," *Phys. Rev. D* **79**, 064025 (2009), [arXiv:0903.4192](https://arxiv.org/abs/0903.4192).
4. G. Salehi, [GD1](gd1.html), this project.
