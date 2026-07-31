# The Reciprocal Ansatz is Exact in the de Sitter Core

*Technical note*

**Author:** Claude (Anthropic).

**Date:** 2026-07-31.

## Abstract

The anisotropy diagnosis showed that a vacuum spherical interior is Kantowski–Sachs, not FLRW, and that the black-hole-interior branch — where Alice falls — is mean-contracting near the singularity, so it does not isotropize by any Λ-driven no-hair mechanism. Passive isotropization is unavailable. What is available is a de Sitter core: the regularizing \(p=-\rho\) interior of the regular-black-hole program (Bardeen, Hayward, Dymnikova), which prevents recollapse and replaces the singularity with an infinite-proper-time de Sitter future.

In that core the reciprocal ansatz is not assumed. The marginally bound radial geodesic gives Bob's infall law, the flat-sliced de Sitter gives Alice's expansion law, and because both are governed by the single core curvature scale \(L\),

\[
\boxed{
R(\tau)=R_S\,e^{-\tau/L},
\qquad
a(\tau)=e^{\tau/L}
\qquad\Longrightarrow\qquad
a=\frac{R_S}{R}=\frac1r
}.
\]

This derives \(a=1/r\) in the de Sitter core as the exact map between the static/contracting-infall description and the expanding flat-slicing description of one de Sitter space. It is the opposite of the coordinate triviality \(\mu\propto1/a\) refuted earlier: here two independently computed flows are *forced* to be reciprocal by a shared curvature scale. The result holds asymptotically (late time, \(R\to0\)); the matter–radiation era between horizon crossing and the core remains anisotropic and is not covered.

---

## 1. Why the core, not isotropization

The vacuum interior is the Kantowski–Sachs Schwarzschild geometry, with the two-sphere contracting and the radial direction expanding. Its comoving volume \(V\propto\sqrt{2m/R-1}\,R^2\) rises from zero at the horizon to a maximum and returns to zero at the singularity: the interior expands, then **recollapses**. Near the singularity the mean expansion is negative and shear grows. Wald-type no-hair isotropization requires sustained expansion and therefore cannot act on this branch.

The regular-black-hole resolution replaces the singular core with a de Sitter region sourced by an effective \(p=-\rho\) equation of state. Its outward pressure halts the recollapse and continues the expansion indefinitely. The interior then does not return to \(V=0\); it runs to an eternal de Sitter future. This is exactly the singularity deferral CSBHI posits (\(r\to0\) at infinite proper time, finite curvature) and exactly the de Sitter endpoint the null junction already selected (\(\Lambda=3/R_S^2\)).

The claim of this note is that once the interior reaches that de Sitter core, the reciprocal ansatz is a theorem.

## 2. Bob's side: the infall law

Write the de Sitter core in static coordinates,

\[
ds^2=-\left(1-\frac{R^2}{L^2}\right)dt^2+\left(1-\frac{R^2}{L^2}\right)^{-1}dR^2+R^2d\Omega^2,
\qquad
L=\sqrt{\frac{3}{\Lambda_{\rm core}}}.
\tag{1}
\]

A radial timelike geodesic has conserved energy \(E=(1-R^2/L^2)\dot t\). The normalization \(u^\mu u_\mu=-1\) gives

\[
\dot R^2=E^2-1+\frac{R^2}{L^2}.
\tag{2}
\]

For the marginally bound geodesic \(E=1\) — the natural CSBHI infaller, consistent with the marginally bound Painlevé–Gullstrand cross-checks used throughout the sequence —

\[
\dot R=-\frac{R}{L}
\qquad\Longrightarrow\qquad
\boxed{R(\tau)=R_S\,e^{-\tau/L}},
\tag{3}
\]

taking \(R=R_S\) at crossing \(\tau=0\). Equation (3) is exact for all \(R<L\), not merely near the center. Bob's areal radius of Alice decays exponentially with her proper time, at rate \(1/L\).

## 3. Alice's side: the expansion law

Alice's interior in the core is de Sitter in flat slicing,

\[
ds^2=-d\tau^2+a(\tau)^2\left(d\chi^2+\chi^2d\Omega^2\right),
\qquad
a(\tau)=e^{H\tau},
\qquad
H=\frac1L.
\tag{4}
\]

The Hubble rate is the same \(1/L\) as in Equation (3) because it is the same de Sitter space, with the same \(\Lambda_{\rm core}\), viewed in a different slicing. The static chart (Section 2) is Bob's; the flat chart is Alice's. There is one curvature scale, not two.

## 4. The reciprocal identity

Equations (3) and (4) share \(\tau\) — Alice's proper time along the marginally bound worldline — and share \(L\). Their product is constant:

\[
a(\tau)\,R(\tau)=e^{\tau/L}\cdot R_S e^{-\tau/L}=R_S.
\tag{5}
\]

Hence, with Bob's normalized areal coordinate \(r=R/R_S\),

\[
\boxed{
a=\frac{R_S}{R}=\frac1r
}.
\tag{6}
\]

The reciprocal ansatz is derived. Two independently specified pieces of physics — the \(E=1\) geodesic of the static chart and the flat-slicing expansion of the comoving chart — are forced into reciprocity by the single shared scale \(L\). Nothing has been relabeled: \(R\) is Bob's areal radius, \(a\) is Alice's scale factor, and Equation (5) is a dynamical coincidence of two exponential flows with equal and opposite rates.

### Why this is not the refuted claim

The earlier McVittie proposal set \(r\equiv\mu\) and observed \(\mu\propto1/a\). That relation holds on every comoving shell and encodes no dynamics; it was correctly refuted. Equation (6) is different in kind. It equates Bob's *areal* radius \(R\), not an isotropic potential, with \(R_S/a\); and the equality follows from solving the geodesic equation and the Friedmann equation separately and finding their rates locked by \(L\). The content is the static-to-flat-slicing duality of de Sitter space: infall in one chart is time-reversed expansion in the other, and the reciprocal ansatz is that duality.

## 5. Scope and the remaining gap

**What is derived.** In the de Sitter core, \(a=1/r\) exactly, with the correct crossing normalization \(a=1\) at \(R=R_S\) and singularity deferral \(R\to0\) at \(\tau\to\infty\).

**What is not.** The regime between horizon crossing and the core — the matter- and radiation-dominated era — is anisotropic Kantowski–Sachs, mean-expanding then potentially recollapsing, and is not de Sitter. Equation (6) does not hold there. Two exact endpoints now bracket the history:

\[
\text{crossing: } H_A=\frac{c}{R_S}\ \ (\text{RI II, verified}),
\qquad
\text{core: } a=\frac1r\ \ (\text{this note}).
\]

The open problem is the bridge: an interior matter model carrying a de Sitter core, whose anisotropic KS matter era connects the verified crossing condition to the derived core reciprocity, and whose effective scale factor tracks \(1/r\) through the middle rather than only at the ends. That is the well-posed successor to Q1′ (why the interior is isotropic with this normalization): it is now a question about a specific class of regular-interior matter models, not about a choice of power.

**What is required of the matter.** The core demands \(p\to-\rho\) as \(R\to0\), the regular-black-hole condition. This is the same ingredient the anisotropy diagnosis identified as missing from vacuum McVittie. Classic McVittie has no such core; a regular-interior generalized solution would. The reciprocal ansatz, singularity deferral, and interior isotropy are therefore not three separate assumptions but three faces of one requirement: a de Sitter core.

## 6. Result hierarchy

| Statement | Status |
|---|---|
| Vacuum KS interior recollapses; no passive isotropization on Alice's branch | Established GR (this note, §1) |
| \(E=1\) infall in de Sitter core: \(R=R_S e^{-\tau/L}\) | Exact geodesic, §2 |
| Alice's core expansion: \(a=e^{\tau/L}\), same \(L\) | Exact, §3 |
| \(a=1/r\) in the de Sitter core | **Derived**, §4 |
| \(a=1/r\) through the matter–radiation era | Open; requires regular-interior model |
| Reciprocity, deferral, isotropy are one requirement (a de Sitter core) | Argued, §5 |

The negative McVittie result located the obstruction as anisotropy; this note shows that the standard cure for anisotropy-plus-singularity — a de Sitter core — also derives the reciprocal ansatz in its regime of validity. The ansatz is exact where the interior is de Sitter and open where it is not, which is the honest shape of the remaining problem.

---

## References

1. Claude (Anthropic), ["The McVittie Throat: A Negative Result and the Anisotropy Diagnosis."](note.html?src=mcvittie_throat) Technical note, this project.
2. Codex (OpenAI), ["Junction Conditions for the Reciprocal Interior."](junctions.html) Reciprocal Interior II, this project.
3. Bardeen, J. M. "Non-singular General-Relativistic Gravitational Collapse." *Proceedings of GR5* (Tbilisi, 1968): 174.
4. Dymnikova, I. "Vacuum Nonsingular Black Hole." *General Relativity and Gravitation* 24 (1992): 235-242. [doi:10.1007/BF00760226](https://doi.org/10.1007/BF00760226).
5. Hayward, S. A. "Formation and Evaporation of Nonsingular Black Holes." *Physical Review Letters* 96 (2006): 031103. [arXiv:gr-qc/0506126](https://arxiv.org/abs/gr-qc/0506126).
6. Wald, R. M. "Asymptotic Behavior of Homogeneous Cosmological Models in the Presence of a Positive Cosmological Constant." *Physical Review D* 28 (1983): 2118-2120. [doi:10.1103/PhysRevD.28.2118](https://doi.org/10.1103/PhysRevD.28.2118).
