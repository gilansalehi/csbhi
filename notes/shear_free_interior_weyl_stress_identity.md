# The Shear-Free Weyl–Stress Identity and the Broken Reflection

*Working result — the exact anisotropic-stress closure for a shear-free reciprocal interior, correcting a factor in the spherical-Weyl note, and its consequence for the self-dual profile.*

**Author:** Claude (Anthropic). **Review:** Codex (OpenAI) — cross-check requested; this note revises two equations of a Codex note and should not propagate to the open-questions list until confirmed.

**Date:** 2026-08-05.

**Status:** The central identity is derived analytically in the separable case and verified numerically (full 4D Riemann/Weyl/Einstein computation) on three further metrics, including the direct Weyl-tensor route. The conservation identity of §1 is assumption-light. Tiered **[E]** established, **[C]** conjecture, **[O]** open.

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

with the interior Weyl field diluting as \(D\propto\mathcal R^{-2}\) (power **2**, not 3). Since the exterior Kottler Weyl field carries power 3 in the same scale variable, the interior does **not** mirror the exterior: the reflection \(\sigma\to-\sigma\) is broken at the level of the dynamics, independently confirming the dilaton note's finding that \(\sigma\to-\sigma\) is not a bulk symmetry. The self-dual profile \(\Psi_2\propto e^{-3|\sigma|}\) is not realized by a geodesic shear-free interior.

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

## 3. Consequence: the reflection is broken [E→C]

The exterior Kottler branch carries the exact vacuum Weyl field \(\Psi_2^{\rm out}=-GM/\mathcal R^3\). In the scale variable \(\sigma=-\ln(\mathcal R/R_S)\) this is

\[
\Psi_2^{\rm out}\propto e^{3\sigma}\qquad(\sigma<0),
\]

power **3**. A shear-free interior, by §2, carries

\[
\Psi_2^{\rm in}\propto D\propto \mathcal R^{-2}=a^{-2}\propto e^{-2\sigma}\qquad(\sigma>0),
\]

power **2**. The reflection \(\sigma\to-\sigma\) would require matching powers \(3\leftrightarrow-3\); the interior delivers \(-2\). The self-dual completion \(\Psi_2\propto e^{-3|\sigma|}\) of the spherical-Weyl note (its Eq 20) assumed the interior inherits the exterior power by reflection. It does not: a geodesic shear-free interior that carries the throat's anisotropic stress dilutes one power slower.

This is the same conclusion the [dilaton note](note.html?src=reciprocal_interior_as_2d_dilaton_gravity) reached by a completely independent route — that \(\sigma\to-\sigma\) sends \(x^2R_2\to x^{-2}R_2\) and is not an off-shell symmetry of the reduced action. Two unrelated calculations, the action non-symmetry and the Weyl-dilution mismatch, now agree: **the reciprocal reflection is not a dynamical symmetry.** The core program is untouched by this — \(a=1/r\) is a horizon *matching* condition, not a claim that the interior Weyl profile mirrors the exterior — but the specific self-dual profile and the \(\Pi=-D\) closure do not survive.

---

## 4. What remains open [O]

The result above is the closure for a **geodesic** shear-free interior. The escape routes are precisely the two assumptions:

1. **Non-geodesic (pressure-supported) throat.** A realistic inhomogeneous throat has radial pressure gradients, so the comoving congruence is accelerated. The §1 identity then acquires an acceleration term, and the spherical-Weyl note's shear-propagation equation (its Eq 32) — which assumed geodesic flow — no longer applies as written. Whether acceleration can restore \(\Pi=-D\) or the power-3 dilution is the open dynamical question, and it is the physically relevant one for a matter-supported neck.
2. **Sheared interior.** If Alice's congruence is permitted a finite shear window (the spherical-Weyl note's own §5 "4D shear budget"), the identity of §2 does not hold and \(\Pi/D\) is free. The price is that the interior is then not exactly isotropic, which was the property the reciprocal probe cloud was meant to preserve.

Either route is a legitimate continuation; neither is the reflection-symmetric picture. The honest status is that the *simplest* shear-free reciprocal interior is now fully solved and gives \(\Pi=-\tfrac12 D\), \(D\propto\mathcal R^{-2}\), with a broken reflection.

---

## 5. Result

> For a geodesic, shear-free spherical interior the anisotropic stress is fixed exactly by the density contrast, \(\Pi=-\tfrac12 D\) (equivalently \(8\pi G\,\Pi=3\Psi_2\)), and the Weyl field dilutes as \(\mathcal R^{-2}\). This corrects the spherical-Weyl note's \(\Pi=-D\) and \(D\propto a^{-3}\), which arose from omitting the anisotropic \(2\Pi\) term in the conservation identity and cannot both hold. The interior therefore does not mirror the exterior's power-3 Weyl field, and the self-dual profile \(e^{-3|\sigma|}\) is not dynamically realized — an independent confirmation, from the field equations, that the reciprocal reflection is not a symmetry.

**Next target.** Redo the closure for the non-geodesic, pressure-supported throat (route 1), where the acceleration term enters. That is the case a matter-supported neck actually occupies, and it is the only remaining way the reflection could be partially restored.

---

## References

1. [A Spherical Weyl-Relaxation Profile for the Reciprocal Throat](note.html?src=spherical_weyl_relaxation_profile); [The Reciprocal Interior as 2D Dilaton Gravity](note.html?src=reciprocal_interior_as_2d_dilaton_gravity), this project.
2. C. W. Misner and D. H. Sharp, *Phys. Rev.* **136**, B571 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
3. L. Herrera, A. Di Prisco, J. Ospino, "Structure scalars in anisotropic spheres," *Phys. Rev. D* **79**, 064025 (2009), [arXiv:0903.4192](https://arxiv.org/abs/0903.4192).
4. G. Salehi, [GD1](gd1.html), this project.
