# CSBHI Formation Mini-Program — Level 5 Conditional Result and Campaign Summary

## Rotation, event-horizon creases, and the remaining birth-completion test

**Working note — September 10, 2026. Source: upstream project analysis. Independent review and revisions: Codex (OpenAI).**

> **Notation update — September 2026.** This note's \(\Gamma\) is the proposed local four-metric Weyl factor, now denoted \(\Omega_{\rm W}\) in cross-project summaries. The mature dual scale \(\Gamma=a^2\) is a separate object until the throat relates them.

---

## Abstract

Level 5 asks whether rotation, the first ingredient in the formation ladder that genuinely breaks spherical symmetry, creates an unavoidable singularity or order-unity anisotropy in the proposed CSBHI child geometry.

Slow-rotation theory supplies a useful hierarchy. Frame dragging, angular momentum, and magnetic-Weyl structure enter in the axial sector at first order in the dimensionless spin \(\chi\). Scalar density, pressure, centrifugal shape, and mass-quadrupole corrections are even under reversal of the rotation direction and begin at \(O(\chi^2)\). A regular axial perturbation excludes the singular central Kerr-like mode. At second order, however, a finite central electric-Weyl quadrupole is allowed: rotation supplies a preferred axis, so spherical regularity no longer forces every trace-free tidal tensor to vanish at the formation center.

The conformal calculation then yields a conditional result. If the parent rotational curvature, shear, and vorticity remain finite while the isotropic conformal expansion rate diverges at the child birth limit, their expansion-normalized child values tend to zero. This would make finite rotational memory dynamically negligible without erasing it. The required behavior of the conformal factor has not yet been derived by Result IV, however, and cannot be assumed as a completed CSBHI result.

Generic nonspherical formation also replaces the single spherical event-horizon vertex with an extended endpoint and crease set. Near a nondegenerate crease-nucleation event, a standard local perestroika has transverse size \(O(\sqrt{\tau})\), while the intrinsic metric correction on each smooth horizon sheet is only \(O(\tau)\). A smooth positive conformal map preserves the crease and its generator multiplicity; it does not convert the nonsmooth causal boundary into a smooth one. The local metric estimate is therefore encouraging but not a complete birth map.

Level 5 has isolated a plausible dimensionless spin memory,

\[
\mathcal R
=1+C_{\rm rot}\chi^2+O(\chi^4),
\]

in the aspect ratio of a rotationally deformed crease perestroika. Its coefficient requires a specified collapse.

The appropriate verdict is

\[
\boxed{
\textbf{LEVEL 5 — CONDITIONAL LOCAL PASS; BIRTH COMPLETION OPEN.}
}
\]

Levels 0–4 survive their structural tests. Level 5 shows that regular rotation need not introduce a scalar singularity at first order and identifies how finite spin memory could become expansion-subdominant. It does not yet close the campaign because the absolute conformal birth behavior and the image of the nonsmooth endpoint set remain theory inputs rather than derived results.

---

## 1. Objective and notation

Let

\[
\chi=\frac{Jc}{GM^2}
\tag{1}
\]

be the dimensionless spin of the parent object. Let \(g^P_{ab}\) be the parent metric and suppose a formation region is related to a child region by

\[
\boxed{
F^*g^C_{ab}=\Gamma^2g^P_{ab},
}
\tag{2}
\]

where \(F\) is the proposed event map and \(\Gamma\) is Result IV's local Weyl-factor notation. Cross-project summaries now write this object as \(\Omega_{\rm W}\); \(R\) remains reserved for areal radius and \(r\) for the GD1 horizon-normalized cohort variable.

For a chosen parent timelike congruence, define

\[
\mathcal H_P=\frac13\Theta_P,
\tag{3}
\]

and let \(D_P\) denote differentiation along that congruence. Let \(\mathcal E_{ab}\) and \(\mathcal B_{ab}\) be the electric and magnetic parts of the Weyl tensor.

The Level-5 question is not whether rotation produces structure. It does. The question is whether that structure forces an unacceptable child birth geometry.

---

## 2. Slow rotation has two distinct perturbative orders

Reversing the sense of rotation sends

\[
\chi\longrightarrow-\chi.
\]

Axial quantities may therefore be odd in \(\chi\), whereas scalar and centrifugal quantities are even. In the ordinary slow-rotation hierarchy,

\[
\boxed{
\begin{aligned}
\text{frame dragging, angular momentum, magnetic Weyl}
&=O(\chi),\\
\text{density and pressure corrections, shape and mass quadrupole}
&=O(\chi^2).
\end{aligned}
}
\tag{4}
\]

Consequently, rotation does not create a first-order scalar correction to the homogeneous background merely by being present. This does not mean that all first-order rotational physics vanishes: the axial vector and tensor sectors remain.

For a regular axial \(\ell=1\) perturbation, the central solution must exclude the singular vacuum-like integration mode. The rotational velocity and frame-dragging fields then obey their regular central parity conditions. Schematically, in a regular orthonormal frame,

\[
\mathcal B_{ab}=O(\chi R)
\tag{5}
\]

for the leading magnetic-Weyl field near the center. Equation (5) records the expected regular power counting, not a universal coefficient; that coefficient and even the most convenient component representation depend on the rotating-collapse model and gauge.

The robust statement is narrower:

\[
\boxed{
\text{the regular first-order axial sector contains no finite scalar singularity at }R=0.
}
\tag{6}
\]

---

## 3. A finite second-order tidal quadrupole is allowed

At second order, the axial rotation self-couples into an even-parity quadrupolar sector. A regular local metric may contain terms of the form

\[
\chi^2R^2P_2(\cos\vartheta),
\tag{7}
\]

where

\[
P_2(\cos\vartheta)
=\frac12(3\cos^2\vartheta-1).
\]

Curvature contains second derivatives of the metric. It is therefore compatible with regularity for the electric Weyl tensor to approach a finite axial quadrupole,

\[
\boxed{
\mathcal E^P_{ab}(0)
=\chi^2Q_0
\left(n_an_b-\frac13h_{ab}\right)
+O(\chi^4),
}
\tag{8}
\]

where \(n^a\) is the rotation-axis direction and \(Q_0\) is a finite, collapse-dependent coefficient.

This is the first rung at which regularity does not force the parent Weyl field itself to vanish at the formation center. The preferred axis makes a regular trace-free central tensor possible.

Equation (8) is not yet a prediction for the child. It identifies the parent datum that the conformal map must transfer.

---

## 4. Conformal transfer of curvature

Define the Weyl curvature magnitude by

\[
\mathcal C
=\sqrt{\left|C_{abcd}C^{abcd}\right|},
\tag{9}
\]

with the understanding that a frame-based electric/magnetic norm is required in algebraically special cases for which this scalar invariant vanishes despite nonzero Weyl curvature. Under a smooth positive Weyl rescaling,

\[
\boxed{
\mathcal C_C=\Gamma^{-2}\mathcal C_P.
}
\tag{10}
\]

For corresponding normalized timelike congruences, the local volume-expansion rate transforms as

\[
\boxed{
\mathcal H_C
=\Gamma^{-1}
\left(
\mathcal H_P+D_P\ln\Gamma
\right).
}
\tag{11}
\]

Combining Equations (10) and (11) removes the explicit algebraic power of \(\Gamma\):

\[
\boxed{
\frac{\mathcal C_C}{\mathcal H_C^2}
=
\frac{\mathcal C_P}
{(\mathcal H_P+D_P\ln\Gamma)^2}.
}
\tag{12}
\]

This yields a useful conditional implication:

\[
\boxed{
\begin{gathered}
\mathcal C_P\text{ finite},\\
|\mathcal H_P+D_P\ln\Gamma|\rightarrow\infty
\end{gathered}
\quad\Longrightarrow\quad
\frac{\mathcal C_C}{\mathcal H_C^2}\rightarrow0.
}
\tag{13}
\]

Finite parent Weyl curvature would then remain present but become negligible compared with the child's isotropic expansion scale.

The antecedent in Equation (13) is not presently established. Result IV derives a local formation-era conformal relation and relative scale evolution, but leaves the absolute normalization and exact vertex behavior open. It also does not yet prove that the outgoing child birth-cone vertex is an \(A_C\rightarrow0\) Big-Bang boundary. Equation (13) is therefore a pass condition for the future birth completion, not evidence that the condition has already been met.

---

## 5. Expansion-normalized shear and vorticity

The same distinction applies to shear and vorticity. For corresponding normalized congruences, their magnitudes transform schematically as

\[
\sigma_C=\Gamma^{-1}\sigma_P,
\qquad
\varpi_C=\Gamma^{-1}\varpi_P.
\tag{14}
\]

Consequently,

\[
\boxed{
\frac{\sigma_C}{\mathcal H_C}
=
\frac{\sigma_P}
{\mathcal H_P+D_P\ln\Gamma},
\qquad
\frac{\varpi_C}{\mathcal H_C}
=
\frac{\varpi_P}
{\mathcal H_P+D_P\ln\Gamma}.
}
\tag{15}
\]

If the parent quantities remain finite and the denominator diverges, both normalized ratios vanish. As with Equation (13), this is conditional on a birth-limit behavior that the theory must still derive.

Thus conformal scaling does not erase spin, shear, or Weyl curvature. The candidate mechanism is relative suppression by the isotropic conformal expansion.

---

## 6. The event-horizon crease remains a separate problem

Generic nonspherical event horizons possess an extended set of past generator endpoints. Normal crease pieces are two-dimensional spacelike submanifolds at which two smooth null sheets meet transversely; corners and caustics form lower-dimensional parts of the endpoint structure.

A crease is a property of the global null boundary. The ambient spacetime can be smooth. In local freely falling coordinates near a regular endpoint event,

\[
g^P_{\mu\nu}=\eta_{\mu\nu}+O(X^2).
\tag{16}
\]

Therefore,

\[
\boxed{
\text{event-horizon crease}
\not\Rightarrow
\text{curvature or matter singularity}.
}
\tag{17}
\]

But smooth ambient geometry does not make the horizon differentiable. Two distinct generators or sheets still meet there.

---

## 7. A local crease-nucleation perestroika

Near a nondegenerate two-sheet crease-nucleation event and for a suitable local slicing, the transverse intersection can be represented to leading order by

\[
\boxed{
\mu_1x^2+\mu_2y^2=2\alpha\tau,
}
\tag{18}
\]

with

\[
\mu_1>0,
\qquad
\mu_2>0,
\qquad
\alpha>0.
\]

This is a local perestroika normal form. It describes the nucleation or change of the crease on the chosen foliation; it is not a universal equation for every point of an already-existing normal crease.

The transverse semiaxes are

\[
L_x=\sqrt{\frac{2\alpha\tau}{\mu_1}},
\qquad
L_y=\sqrt{\frac{2\alpha\tau}{\mu_2}},
\tag{19}
\]

so

\[
\boxed{
L_{\rm crease}=O(\sqrt{\tau}).
}
\tag{20}
\]

The sheet slopes are likewise \(O(\sqrt{\tau})\). The contribution of those slopes to the induced metric is quadratic, while the smooth ambient metric correction is \(O(X^2)=O(\tau)\). Hence on each smooth sheet,

\[
\boxed{
\gamma^P_{AB}=\delta_{AB}+O(\tau).
}
\tag{21}
\]

This is a favorable local result: the visually sharp opening of the crease need not produce an equally large intrinsic metric distortion.

It is not, by itself, a resolution of the crease. The two-sheet multiplicity and nondifferentiability are extrinsic and causal data, not merely corrections to the intrinsic metric of either sheet.

---

## 8. What a conformal map does to the crease

On each smooth sheet,

\[
\gamma^C_{AB}=\Gamma^2\gamma^P_{AB},
\tag{22}
\]

so Equation (21) gives

\[
\boxed{
\Gamma^{-2}\gamma^C_{AB}
=\delta_{AB}+O(\tau).
}
\tag{23}
\]

The normalized intrinsic metric therefore approaches its locally isotropic limit as \(\tau\rightarrow0\).

If \(F\) and \(\Gamma\) extend smoothly and nondegenerately across the endpoint set, however, null paths and generator multiplicity are preserved. In that regular case,

\[
\boxed{
F(\mathcal C_P)=\mathcal C_C.
}
\tag{24}
\]

The conformal map transports the crease rather than removing it.

Any proposal in which the child boundary has different differentiability or topology must therefore specify a singular or degenerate completion of \(F\) or \(\Gamma\) at the endpoint set and show that its transformed curvature and stress remain controlled. Result IV has not yet supplied that completion.

Equations (23) and (24) answer different questions. The first concerns the normalized intrinsic metric on the smooth sheets. The second concerns the causal assembly of the sheets into the horizon.

---

## 9. A possible dimensionless spin memory

The local perestroika in Equation (18) has aspect ratio

\[
\boxed{
\mathcal R
=\frac{L_x}{L_y}
=\sqrt{\frac{\mu_2}{\mu_1}}.
}
\tag{25}
\]

Because \(\mathcal R\) is dimensionless, a common scalar conformal factor does not alter it. If the spherical limit has \(\mu_1=\mu_2\), the coefficients depend analytically on slow rotation, and the axes are labeled continuously, reversal symmetry implies

\[
\boxed{
\mathcal R
=1+C_{\rm rot}\chi^2+O(\chi^4).
}
\tag{26}
\]

This is a candidate residual spin memory in the causal structure of formation. It is neither a curvature singularity nor automatically a density perturbation. Its coefficient is not fixed by regularity and must be calculated from a rotating collapse model.

The residual also cannot be dismissed merely because the expansion-normalized Weyl tensor may become small. Dimensionless shape data and expansion-normalized dynamical fields are different observables.

---

## 10. Creases are not primordial overdensities

The causal chain producing a crease is

\[
\text{smooth parent matter}
\longrightarrow
\text{curvature and null focusing}
\longrightarrow
\text{degenerate generator arrival paths}
\longrightarrow
\text{horizon crease}.
\tag{27}
\]

There is no general implication

\[
\text{crease}\Longrightarrow\delta\rho>0.
\tag{28}
\]

The density, pressure, flux, shear, and Weyl perturbations studied in Levels 2–4 remain the better candidates for child scalar perturbations. Rotation adds coherent vector, tensor, and quadrupolar structure. The crease records how the global causal boundary is assembled from the corresponding null generators.

A rotating parent also selects a preferred axis. Its leading coherent distortion should not be mistaken for a statistically isotropic primordial spectrum.

---

## 11. The event horizon as a causal bottleneck

The event horizon is not an insulator. Matter, radiation, angular momentum, and information-bearing fields cross it. A more precise CSBHI possibility is that the formation map depends on a restricted set of characteristic data on the null boundary:

\[
\boxed{
\text{complex parent collapse}
\longrightarrow
\text{stress flux, null shear, Weyl and angular-momentum data}
\longrightarrow
\text{CSBHI birth map}
\longrightarrow
\text{child initial geometry}.
}
\tag{29}
\]

Calling the horizon a causal bottleneck means that the map is written in terms of such invariant boundary data. It does not mean that the horizon destroys information or automatically thermalizes the parent state.

---

## 12. Level-5 result ledger

| Claim | Status |
|---|---|
| First-order scalar correction from reversing slow rotation | Absent by parity |
| Regularity of the first-order axial sector | Structurally supported |
| Finite \(O(\chi^2)\) central electric-Weyl quadrupole | Allowed |
| Expansion-normalized Weyl, shear, and vorticity vanish | Conditional on \(|\mathcal H_P+D_P\ln\Gamma|\rightarrow\infty\) |
| Generic crease implies a spacetime or matter singularity | No |
| Local perestroika size | \(O(\sqrt{\tau})\) for the stated normal form |
| Intrinsic metric correction on each smooth sheet | \(O(\tau)\) |
| A smooth conformal map removes the crease | No; it preserves it |
| Dimensionless rotational crease memory | Plausible at \(O(\chi^2)\); coefficient open |
| One admissible child boundary from the full endpoint set | Open |

The ledger supports a conditional local pass, not a completed global pass.

---

## 13. Formation mini-program scoreboard

| Level | Model | Result |
|---|---|---|
| 0 | Oppenheimer–Snyder dust | Passed |
| 1 | Homogeneous perfect fluid | Passed structurally |
| 2 | Perturbed LTB dust | Structurally promising; absolute calibration \(K(q)\) open |
| 3 | General spherical perfect fluid | Passed structurally near the regular birth vertex |
| 4 | Dissipative spherical collapse | Passed structurally for a smooth total stress tensor |
| 5 | Rotating collapse and horizon creases | Conditional local pass; birth completion and spin amplitude open |

Across the ladder, no regular contribution studied through Level 4 forces an order-unity scalar departure at the spherical birth vertex. Level 5 changes the character of the question: a regular finite quadrupolar Weyl field and a dimensionless causal shape memory are now allowed, and generic horizon formation has a nonsmooth endpoint structure that a regular conformal map preserves.

The campaign has therefore established the robustness of the spherical regular-center mechanism and isolated the precise nonspherical closure problem. It has not yet established the final child boundary.

---

## 14. Remaining pass/fail calculations

### 14.1 Derive the birth-limit conformal behavior

Determine \(\Gamma\), not merely its relative formation-era variation, and test whether

\[
|\mathcal H_P+D_P\ln\Gamma|\rightarrow\infty
\tag{30}
\]

actually follows. This decides whether Equations (13) and (15) are realized.

### 14.2 Complete the crease map

Apply that derived completion to a normal two-sheet crease and its nucleation perestroika. Check the transformed curvature, effective stress, topology, generator multiplicity, and differentiability.

### 14.3 Compute the transformed Einstein tensor

Identify the child stress-energy associated with the complete nonspherical conformal geometry, including terms generated by derivatives of \(\Gamma\).

### 14.4 Connect formation to mature GD1 evolution

Join the finite formation patch to the reciprocal interior without introducing an uncontrolled curvature or stress discontinuity.

### 14.5 Determine amplitudes

Use a specified rotating collapse to calculate \(Q_0\), \(C_{\rm rot}\), and the child vector, tensor, and scalar transfer functions. This is where numerical collapse becomes necessary.

---

## Conclusion

Rotation does not immediately destroy the CSBHI formation picture. Its first-order effects are axial rather than scalar, the regular central solution excludes a singular rotational mode, and its first scalar and quadrupolar corrections begin at second order in spin. A finite rotational Weyl quadrupole is nevertheless allowed at the center and must be transferred rather than assumed away.

The conformal equations identify a possible suppression mechanism: finite parent anisotropy becomes negligible relative to the child expansion if the isotropic conformal rate diverges at birth. That statement is exact as an implication but remains conditional because CSBHI has not yet derived the required absolute birth behavior of \(\Gamma\).

The crease calculation supplies a second partial result. Near a nondegenerate crease-nucleation perestroika, the transverse opening is \(O(\sqrt{\tau})\) while each sheet's intrinsic metric correction is \(O(\tau)\). The ambient spacetime can remain regular. Yet a smooth conformal map preserves the crease as a causal and differentiability structure.

The strongest justified summary is therefore

\[
\boxed{
\begin{gathered}
\text{regular slow rotation presents no first-order scalar obstruction,}\\
\text{and the local crease metric is controlled,}\\
\text{but the child birth completion and dimensionless spin memory remain open.}
\end{gathered}
}
\]

The mini-program has reached the theory boundary it was designed to locate. The remaining work is no longer another regularity expansion. It is the definition and dynamical validation of the absolute conformal birth map.

The [*CSBHI Geometric Parameter Cascade*](note.html?src=csbhi_geometric_parameter_cascade) carries this boundary into the broader parameter ledger: it records which child observables follow once \(L\), \(\eta_m\), and \(\eta_r\) are supplied, while keeping the parent-to-child lapse and absolute conformal calibration explicitly open.

---

## References

1. J. B. Hartle, “Slowly Rotating Relativistic Stars. I. Equations of Structure,” *Astrophysical Journal* **150**, 1005–1029 (1967), [doi:10.1086/149400](https://doi.org/10.1086/149400).
2. M. Siino and T. Koike, “Topological classification of black hole: Generic Maxwell set and crease set of horizon,” *International Journal of Modern Physics D* **20**, 1095–1122 (2011), [doi:10.1142/S0218271811019220](https://doi.org/10.1142/S0218271811019220), [arXiv:gr-qc/0405056](https://arxiv.org/abs/gr-qc/0405056).
3. M. Gadioux and H. S. Reall, “Creases, corners, and caustics: Properties of nonsmooth structures on black hole horizons,” *Physical Review D* **108**, 084021 (2023), [doi:10.1103/PhysRevD.108.084021](https://doi.org/10.1103/PhysRevD.108.084021), [arXiv:2303.15512](https://arxiv.org/abs/2303.15512).
4. S. Cotsakis, “The crease flow on null hypersurfaces,” *European Physical Journal C* **84**, 435 (2024), [doi:10.1140/epjc/s10052-024-12743-4](https://doi.org/10.1140/epjc/s10052-024-12743-4), [arXiv:2312.08023](https://arxiv.org/abs/2312.08023).
5. Y. Sekiguchi and M. Shibata, “Axisymmetric collapse simulations of rotating massive stellar cores in full general relativity: Numerical study for prompt black hole formation,” *Physical Review D* **71**, 084013 (2005), [doi:10.1103/PhysRevD.71.084013](https://doi.org/10.1103/PhysRevD.71.084013), [arXiv:astro-ph/0504567](https://arxiv.org/abs/astro-ph/0504567).
6. G. Salehi, [“Result IV — The Conformal Formation Map”](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
7. [“CSBHI Mini-Program — Level 5 Setup”](note.html?src=level_5_event_horizon_creases_and_rotation_test), CSBHI working note (2026).
