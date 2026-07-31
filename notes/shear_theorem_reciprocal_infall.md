# The Shear Theorem: Reciprocal Infall is Isotropic Only When Vacuum-Dominated

*Technical note*

**Author:** Claude (Anthropic).

**Date:** 2026-07-31.

## Abstract

The ΛCDM-dual exterior reproduces the reciprocal interior's expansion history exactly but was flagged as possibly inhomogeneous. This note settles the geometry of the marginally bound infall congruence directly, by computing its shear. The result is a theorem and a strong constraint.

**Theorem.** For a static, spherically symmetric exterior \(f(R)\), the marginally bound (\(E=1\)) radial infall congruence is shear-free if and only if

\[
\boxed{f(R)=1+cR^2},
\]

i.e. if and only if the geometry is de Sitter (or anti-de Sitter). No other exterior yields isotropic reciprocal expansion.

**Consequence.** Each cosmological component sources the infall shear in proportion to \(3(1+w)\) — the very combination that sets its dilution. Vacuum energy (\(w=-1\)) is the unique shear-free content. Matter and radiation source shear with weights \(3\) and \(4\). In the matter era the anisotropy is not small:

\[
\frac{\sigma}{\Theta}\Big|_{\rm matter}=\frac{1}{3\sqrt3}\approx0.19,
\qquad
\frac{\sigma}{\Theta}\Big|_{\rm radiation}=\frac{2}{5\sqrt3}\approx0.23,
\]

order unity, constant across each era. The observed universe has \(\sigma/\Theta\lesssim10^{-9}\). The naive reciprocal-infall interior therefore reproduces the ΛCDM *scalar* expansion history while carrying an order-one anisotropy that is observationally excluded by eight orders of magnitude. Exact isotropic FLRW is the vacuum-dominated (de Sitter) limit only; the matter and radiation eras are irreducibly anisotropic in this construction. This resolves the earlier homogeneity question — the interior is homogeneous but anisotropic, a Bianchi/Kantowski–Sachs-type cosmology, not FLRW — and it sets the true bar for any throat completion: order-one isotropization, not a transverse-curvature correction.

---

## 1. Setup

Take the static exterior

\[
ds^2=-f(R)\,dt^2+\frac{dR^2}{f(R)}+R^2 d\Omega^2,
\tag{1}
\]

and the marginally bound radial geodesic \(E=1\), for which \(\dot R=-\sqrt{1-f}\) and

\[
u^\mu=\left(\frac1f,\,-\sqrt{1-f},\,0,\,0\right).
\tag{2}
\]

Because \(\sqrt{-g}=R^2\sin\theta\) (the \(f\) factors cancel), the expansion is

\[
\Theta=\frac{1}{R^2}\partial_R\!\left(-R^2\sqrt{1-f}\right)
=-\frac{2\sqrt{1-f}}{R}+\frac{f'}{2\sqrt{1-f}}.
\tag{3}
\]

Decompose into one radial and two identical angular rates. The angular rate is the log-derivative of the areal radius,

\[
\theta_\perp=\frac{\dot R}{R}=-\frac{\sqrt{1-f}}{R},
\tag{4}
\]

and the radial rate is the remainder,

\[
\theta_\parallel=\Theta-2\theta_\perp=\frac{f'}{2\sqrt{1-f}}.
\tag{5}
\]

## 2. The shear-free theorem

The congruence is shear-free when the radial and angular rates coincide, \(\theta_\parallel=\theta_\perp\):

\[
\frac{f'}{2\sqrt{1-f}}=-\frac{\sqrt{1-f}}{R}
\quad\Longleftrightarrow\quad
Rf'-2f=-2.
\tag{6}
\]

Equation (6) is a linear first-order ODE with the one-parameter solution

\[
\boxed{f(R)=1+cR^2}.
\tag{7}
\]

For \(c<0\) this is de Sitter, \(f=1-R^2/L^2\), with \(L^2=-1/c\); for \(c>0\), anti-de Sitter. No other static exterior has shear-free marginally bound infall. Isotropic reciprocal expansion is therefore possible only in a maximally symmetric (constant-curvature) exterior.

As a check, de Sitter gives \(\theta_\parallel=\theta_\perp=-1/L\) and \(\Theta=-3/L\), the correct \(-3H\) for the contracting areal description; the physical expanding view is the time reverse, \(+3H\).

## 3. What sources the shear

For a general component with equation of state \(w\), the Friedmann rate contributes \(1-f=R^2H^2\propto R^2\rho\propto R^{\,2+3(1+w)}\), since \(\rho\propto a^{-3(1+w)}=R^{3(1+w)}\) under \(a=R_S/R\). Writing \(1-f=\sum_i \Omega_i\,r^{\,n_i}\) with \(r=R/R_S\) and \(n_i=2+3(1+w_i)\), the shear amplitude is

\[
\Delta\equiv\theta_\parallel-\theta_\perp=\frac{Rf'+2(1-f)}{2R\sqrt{1-f}}
=\frac{\sum_i (n_i-2)\,\Omega_i\,r^{\,n_i}}{2r\sqrt{1-f}}
=\frac{\sum_i 3(1+w_i)\,\Omega_i\,r^{\,n_i}}{2r\sqrt{1-f}}.
\tag{8}
\]

The shear weight of each component is exactly

\[
\boxed{3(1+w_i)},
\tag{9}
\]

the same combination that governs its dilution. Three consequences:

- **Vacuum energy** (\(w=-1\)) has weight \(0\): it sources no shear. This is why Equation (7) is de Sitter — the vacuum term \(r^2\) drops out of Equation (8) identically.
- **Matter** (\(w=0\)) has weight \(3\); **radiation** (\(w=1/3\)) has weight \(4\).

Explicitly, for \(f=1-\Omega_\Lambda r^2-\Omega_m r^5-\Omega_r r^6\),

\[
\Delta=-\frac{3\Omega_m r^4+4\Omega_r r^5}{2\sqrt{1-f}},
\tag{10}
\]

with \(\Omega_\Lambda\) absent. The shear scalar is \(\sigma=\Delta/\sqrt3\).

## 4. The anisotropy is order unity

In a matter-dominated stretch, \(1-f\simeq\Omega_m r^5\), so from Equations (4), (5), (10):

\[
\theta_\parallel=-\tfrac52\sqrt{\Omega_m}\,r^{3/2},
\quad
\theta_\perp=-\sqrt{\Omega_m}\,r^{3/2},
\quad
\Theta=-\tfrac92\sqrt{\Omega_m}\,r^{3/2},
\quad
\sigma=-\tfrac{\sqrt3}{2}\sqrt{\Omega_m}\,r^{3/2}.
\tag{11}
\]

The ratio is a pure number, independent of \(r\):

\[
\frac{\sigma}{\Theta}\Big|_{\rm matter}=\frac{1}{3\sqrt3}\approx0.19,
\qquad
\frac{\sigma}{\Theta}\Big|_{\rm radiation}=\frac{2}{5\sqrt3}\approx0.23.
\tag{12}
\]

The radial direction expands \(2.5\times\) faster than the angular directions in the matter era. The observed universe is isotropic to \(\sigma/\Theta\lesssim10^{-9}\) at last scattering. The naive reciprocal-infall interior is thus excluded by roughly eight orders of magnitude — not as a fine-tuning issue but as an order-one geometric fact. Only as \(\Lambda\) comes to dominate, where the shear-weight-zero vacuum term takes over and the \(r^5,r^6\) terms switch off, does \(\sigma/\Theta\to0\) and the interior approach exact de Sitter FLRW.

## 5. Consequences for the programme

**The homogeneity question is answered — and it is worse than LTB.** Under proper-time-since-crossing slicing, the stationary horizon's time-translation symmetry makes all cohorts identical, so the interior is homogeneous. But Equation (12) shows it is anisotropic at order one. The interior is therefore a homogeneous anisotropic cosmology of Bianchi/Kantowski–Sachs type, not FLRW and not LTB. The cohort construction's step "same \(a(\tau)\) for every cohort, therefore FLRW" omits the shear, which is exactly what fails to vanish.

**The throat's real task is order-one isotropization.** The transverse-curvature/work term identified in the junction papers is a subleading concern. The dominant obstruction is that matter and radiation force \(\sigma/\Theta\sim0.2\), and no static four-dimensional exterior removes it — Equation (7) permits only de Sitter. A completion must therefore supply genuinely dynamical (or higher-dimensional) isotropization strong enough to erase an order-one shear, or abandon the direct reciprocal-infall identification. A smooth interpolation profile between a Schwarzschild face and an FLRW face cannot contain this: the FLRW face it targets does not exist as a static reciprocal-infall geometry away from de Sitter.

**The honest CSBHI claim.** The reciprocal interior is exact isotropic FLRW only when vacuum-dominated. Through the matter and radiation eras it is a homogeneous anisotropic cosmology that isotropizes toward de Sitter as \(\Lambda\) takes over — the shear-weight-\(0\) component outlasting the shear-weight-\(3\) and \(4\) components. This is a definite, falsifiable structure: a decaying primordial anisotropy with a preferred axis, distinct from exact-FLRW ΛCDM. Whether its early amplitude can be reconciled with the tight observed isotropy is the decisive open question, and it must be faced before any throat metric is worth solving.

## 6. Result hierarchy

| Statement | Status |
|---|---|
| Shear-free reciprocal infall \(\iff f=1+cR^2\) (de Sitter) | **Theorem**, §2 |
| Shear weight of a component is \(3(1+w)\) | Exact, §3 |
| Vacuum is the unique shear-free component | Exact, §3 |
| \(\sigma/\Theta\approx0.19\) (matter), \(0.23\) (radiation) | Exact, §4 |
| Naive reciprocal interior excluded by observed isotropy | Follows, §4 |
| Interior is homogeneous but anisotropic (Bianchi/KS), not FLRW | Established, §5 |
| Throat must supply order-one isotropization | Follows, §5 |
| Early anisotropy reconcilable with data | **Open**, decisive |

The negative content is sharp: the simplest completion of the reciprocal interior is geometrically anisotropic at order one and observationally dead as it stands. The positive content is equally sharp: the anisotropy is sourced by exactly \(3(1+w)\), vacuum alone escapes it, and the interior is a specific homogeneous anisotropic cosmology with a de Sitter attractor — a well-posed object to test against the isotropy data rather than a vague hope of FLRW.

---

## References

1. Claude (Anthropic), ["The ΛCDM-Dual Exterior: A Reciprocal Bridge Through the Matter Era."](note.html?src=lcdm_dual_exterior) Technical note, this project.
2. Claude (Anthropic), ["The Reciprocal Ansatz is Exact in the de Sitter Core."](note.html?src=reciprocal_ansatz_in_the_desitter_core) Technical note, this project.
3. Claude (Anthropic), ["The McVittie Throat: A Negative Result and the Anisotropy Diagnosis."](note.html?src=mcvittie_throat) Technical note, this project.
4. Wald, R. M. "Asymptotic Behavior of Homogeneous Cosmological Models in the Presence of a Positive Cosmological Constant." *Physical Review D* 28 (1983): 2118-2120. [doi:10.1103/PhysRevD.28.2118](https://doi.org/10.1103/PhysRevD.28.2118).
5. Ashtekar, A., and Krishnan, B. "Dynamical Horizons and Their Properties." *Physical Review D* 68 (2003): 104030. [arXiv:gr-qc/0308033](https://arxiv.org/abs/gr-qc/0308033).
