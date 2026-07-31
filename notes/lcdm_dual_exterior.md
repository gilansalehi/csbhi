# The ΛCDM-Dual Exterior: A Reciprocal Bridge Through the Matter Era

*Technical note*

**Author:** Claude (Anthropic).

**Date:** 2026-07-31.

## Abstract

The de Sitter-core note derived \(a=1/r\) exactly in the asymptotic core and left the matter–radiation era as an open bridge. This note constructs the bridge explicitly. Demanding that the marginally bound (\(E=1\)) radial infall in a static, spherically symmetric exterior reproduce the exact ΛCDM expansion history under the reciprocal identification \(a=1/r\) fixes the metric function uniquely:

\[
\boxed{
f(r)=1-\Omega_\Lambda\,r^2-\Omega_m\,r^5-\Omega_r\,r^6
},
\qquad
r=\frac{R}{R_S}.
\]

This metric has a horizon at \(r=1\) (crossing, \(H_A=c/R_S\)), a regular de Sitter core at \(r\to0\) whose curvature radius is the cosmological \(R_\Lambda=R_S/\sqrt{\Omega_\Lambda}\), and singularity deferral to infinite proper time. Its \(E=1\) infall reproduces \(H_A^2=(c/R_S)^2(\Omega_\Lambda+\Omega_m a^{-3}+\Omega_r a^{-4})\) exactly, bridging the two previously verified endpoints through the full matter and radiation eras. Matter, radiation, and vacuum appear at radial powers \(5\), \(6\), \(2\) — the reciprocal-infall images of the standard \(a^{-3}\), \(a^{-4}\), and constant dilutions.

**Scope, stated first.** This is a *kinematic* bridge. Alice's expansion history *along her worldline* is exactly ΛCDM, and her constant-time slices are spatially flat, but \(H_A\) varies across shells: the full spacetime is inhomogeneous (Lemaître–Tolman–Bondi-like), not exact homogeneous FLRW. The construction reproduces the scale-factor history, not yet the homogeneity that CMB isotropy requires. It also does not verify energy conditions on the effective source, and it adopts the marginally bound geodesic.

---

## 1. The construction

Take a static, spherically symmetric exterior,

\[
ds^2=-f(R)\,dt^2+\frac{dR^2}{f(R)}+R^2 d\Omega^2,
\tag{1}
\]

and the marginally bound radial geodesic \(E=1\), for which

\[
\dot R^2=1-f(R).
\tag{2}
\]

Under the reciprocal identification \(a=R_S/R=1/r\), Alice's Hubble rate is

\[
H_A=-\frac{\dot R}{R}=\frac{\sqrt{1-f}}{R}.
\tag{3}
\]

Require this to equal the ΛCDM rate,

\[
H_A^2=\frac{c^2}{R_S^2}\left(\Omega_\Lambda+\Omega_m a^{-3}+\Omega_r a^{-4}\right),
\tag{4}
\]

where the density fractions are evaluated at the crossing normalization \(a=1\) (so they are the crossing-epoch values, radiation-dominated if crossing is early; the polynomial *form* is normalization-independent). Substituting \(a=1/r\) and solving Equations (3)-(4) for \(f\):

\[
1-f=R^2H_A^2=\frac{R^2c^2}{R_S^2}\left(\Omega_\Lambda+\Omega_m r^3+\Omega_r r^4\right)
=c^2\left(\Omega_\Lambda r^2+\Omega_m r^5+\Omega_r r^6\right).
\tag{5}
\]

In units \(c=1\),

\[
\boxed{
f(r)=1-\Omega_\Lambda r^2-\Omega_m r^5-\Omega_r r^6
}.
\tag{6}
\]

The reverse check is immediate: with Equation (6), \(\dot r^2=1-f\) gives \(H_A^2=\dot r^2/r^2=\Omega_\Lambda+\Omega_m r^3+\Omega_r r^4=\Omega_\Lambda+\Omega_m a^{-3}+\Omega_r a^{-4}\), exactly ΛCDM.

## 2. The metric is regular and hits both endpoints

**Crossing horizon.** \(f(1)=1-(\Omega_\Lambda+\Omega_m+\Omega_r)=0\), so \(r=1\) is a horizon, and there \(H_A=c/R_S\) — the null-junction condition verified in RI II.

**Regular de Sitter core.** As \(r\to0\), \(f\to1-\Omega_\Lambda r^2\), which is de Sitter with curvature radius

\[
L=\frac{R_S}{\sqrt{\Omega_\Lambda}}=R_\Lambda,
\tag{7}
\]

the cosmological de Sitter radius of the whole programme. The centre is regular: \(f\to1\) smoothly, no curvature singularity. Notably the regularization scale is not a new Planck-scale parameter \(\ell\) but \(R_\Lambda\) itself. The singularity of the vacuum Schwarzschild interior is replaced by the cosmological future.

**Singularity deferral.** Near \(r\to0\), Equation (3) gives \(\dot r\simeq-\sqrt{\Omega_\Lambda}\,r/R_S\), so \(r\sim e^{-\sqrt{\Omega_\Lambda}\,c\tau/R_S}\) and \(r\to0\) only as \(\tau\to\infty\). Alice reaches the core in infinite proper time at finite curvature, and \(a=1/r\to\infty\) — the de Sitter future.

**Monotone interior.** On \(r\in[0,1]\), \(f\) decreases monotonically from \(1\) to \(0\); \(f>0\) throughout the interior. The structure is a single-horizon, regular-centre spacetime — closer to a de Sitter static patch with modified \(f\) than to a Schwarzschild black hole. This is why no anisotropic Kantowski–Sachs region with timelike \(R\) appears: \(R\) is spacelike throughout \(r\in(0,1)\).

## 3. The power structure

The matter, radiation, and vacuum terms enter Equation (6) at powers \(5\), \(6\), \(2\). Each is the standard dilution power plus two:

\[
\underbrace{a^{-3}}_{\text{matter}}\to r^{3}\to r^{3+2}=r^5,
\qquad
\underbrace{a^{-4}}_{\text{radiation}}\to r^{4}\to r^{6},
\qquad
\underbrace{\text{const}}_{\Lambda}\to r^{0}\to r^{2}.
\tag{8}
\]

The universal "+2" is the geometric \(R^2\) factor converting the Friedmann rate to the metric function in Equation (5). The vacuum term \(r^2\) is the de Sitter core; the higher powers switch off toward the centre, leaving pure de Sitter, and switch on toward crossing, where all three are comparable.

## 4. Spatial flatness and the homogeneity gap

Transforming Equation (1) to the Painlevé–Gullstrand time of the \(E=1\) infallers gives

\[
ds^2=-d\tau^2+\left(dR+\sqrt{1-f}\,d\tau\right)^2+R^2d\Omega^2.
\tag{9}
\]

Constant-\(\tau\) slices have metric \(dR^2+R^2d\Omega^2\): **spatially flat**, matching Alice's flat FLRW interior. The infall is a flat-sliced flow with radial velocity \(v(R)=\sqrt{1-f}\).

But \(v\) is not linear in \(R\). The Hubble rate \(H_A=v/R=\sqrt{1-f}/R\) depends on position: different shells expand at different rates at the same \(\tau\). Homogeneous FLRW requires \(v=HR\) with \(H\) independent of \(R\); here it is not. The spacetime is therefore an inhomogeneous, spatially flat, radially flowing model of Lemaître–Tolman–Bondi type. Each shell carries its own expansion history; the shell that Alice rides carries exactly ΛCDM.

This is the honest boundary of the result. The construction guarantees that a single infalling worldline measures the ΛCDM scale-factor history. It does not guarantee that neighbouring worldlines measure the same, which is what large-scale homogeneity and CMB isotropy demand. Closing that gap requires either a mechanism by which Alice perceives the shell structure as homogeneous, or a genuinely homogeneous completion in which \(v\propto R\) — the same isotropy/homogeneity question the anisotropy diagnosis raised, now sharpened to a statement about the radial profile of \(v(R)\).

## 5. Relation to the sequence

- The de Sitter-core note derived \(a=1/r\) at \(r\to0\); Equation (6) contains that as its \(r^2\) leading term and extends the reciprocal history to all \(r\in(0,1)\).
- The null-junction condition \(H_A=c/R_S\) is recovered exactly at \(r=1\).
- The field-equations note (RI I) postulated Alice's FLRW interior and derived the stress-energy; this note approaches from the exterior and reproduces the same expansion history, meeting RI I if and only if the inhomogeneous flow of §4 can be read as homogeneous — the open item.
- The metric is a regular black hole in the Bardeen–Hayward–Dymnikova class (radial \(p_r=-\rho\)), but with the cosmological \(R_\Lambda\) as its core scale rather than a microscopic length.

## 6. Result hierarchy

| Statement | Status |
|---|---|
| \(f(r)=1-\Omega_\Lambda r^2-\Omega_m r^5-\Omega_r r^6\) reproduces ΛCDM under \(E=1\) reciprocal infall | Exact, §1 |
| Horizon at \(r=1\) with \(H_A=c/R_S\) | Exact, §2 |
| Regular de Sitter core, \(L=R_\Lambda\), singularity deferred | Exact, §2 |
| Matter/radiation/Λ at powers \(5/6/2\) | Exact, §3 |
| Constant-\(\tau\) slices spatially flat | Exact, §4 |
| Full spacetime is homogeneous FLRW | **Not established**; inhomogeneous (LTB-like), §4 |
| Effective source satisfies energy conditions | Unchecked |

The bridge exists at the level of the expansion history: one regular metric carries the reciprocal interior from the verified crossing horizon to the derived de Sitter core, through the full matter and radiation eras, with the cosmological \(R_\Lambda\) emerging as the core scale. What remains is to determine whether its inhomogeneous flow admits a homogeneous reading, which is now a precise question about \(v(R)\) rather than a conceptual gap.

---

## References

1. Claude (Anthropic), ["The Reciprocal Ansatz is Exact in the de Sitter Core."](note.html?src=reciprocal_ansatz_in_the_desitter_core) Technical note, this project.
2. Claude (Anthropic), ["The McVittie Throat: A Negative Result and the Anisotropy Diagnosis."](note.html?src=mcvittie_throat) Technical note, this project.
3. Codex (OpenAI), ["Field Equations of the Reciprocal Interior."](note.html?src=field_equations_of_the_reciprocal_interior) Reciprocal Interior I, this project.
4. Codex (OpenAI), ["Junction Conditions for the Reciprocal Interior."](junctions.html) Reciprocal Interior II, this project.
5. Lemaître, G. "L'Univers en expansion." *Annales de la Société Scientifique de Bruxelles* A53 (1933): 51-85.
6. Hayward, S. A. "Formation and Evaporation of Nonsingular Black Holes." *Physical Review Letters* 96 (2006): 031103. [arXiv:gr-qc/0506126](https://arxiv.org/abs/gr-qc/0506126).
