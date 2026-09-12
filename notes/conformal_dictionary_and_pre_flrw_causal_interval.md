# The Conformal Dictionary and the Pre-FLRW Causal Interval

## Scale transfer, affine transport, marginality, and a conditional route through the horizon problem

**Working correction and synthesis — September 2026. Source: upstream project derivation. Independent audit and revisions: Codex (OpenAI).**

> **Notation and scope correction — September 2026.** Earlier drafts used \(\Gamma\) for the local four-metric Weyl factor. Current notation writes that object as \(\Omega_{\rm W}\) and reserves \(\Gamma_{\rm GD}=a^2=r^{-2}\) for the mature dual ruler-scale separation. The throat has not yet proved \(\Omega_{\rm W}=\Gamma_{\rm GD}\). In particular, the null affine transfer is \(C_\lambda\Omega_{{\rm W},H}^2\), not automatically \(C_\lambda\Gamma_{\rm GD}^2\). See [Mature Gamma Dynamics and the Conditional Radiation Handoff](note.html?src=mature_gamma_dynamics_and_conditional_radiation_handoff).

---

## Abstract

The current CSBHI formation programme includes a local conformal hypothesis rather than an isometric parent–child identification. Its basic local relation is

\[
\boxed{g^C_{ab}=\Omega_{\rm W}^2g^P_{ab}},
\qquad \Omega_{\rm W}>0.
\]

A positive smooth conformal factor changes physical scales and affine parametrizations, but preserves causal cones and unparameterized null curves. Consequently, it cannot create causal contact between events that were causally unrelated in the mapped spacetime region. It can, however, magnify a domain with a common parent/throat causal history into a much larger child geometry. This provides a possible pre-FLRW contribution to the child's causal past, not yet a demonstrated solution of the CMB horizon problem.

The conformal hypothesis also sharpens several parts of GD2. Areal radii and proper times scale with \(\Omega_{\rm W}\); affine null parameters scale with \(\Omega_{\rm W}^2\); the affine transfer is fixed by \(\Omega_{{\rm W},H}^2\), up to ordinary constant affine normalization, wherever that local Weyl relation has actually been established; and marginal spheres do not generally map to marginal spheres. The conformally dressed trapping-pair curve, rather than the raw parent horizon curve, is therefore the correct candidate carrier of the child matter/radiation ledger.

These statements correct several earlier isometric benchmarks. They do not determine \(\Omega_{\rm W}\). The finite formation throat may supply boundary data for the conformal mode, but a scalar-curvature identity is not a dynamical field equation, and the extension of the local formation-era Weyl map into the mature GD1 interior remains open.

The governing guardrail is:

\[
\boxed{
\textbf{Never equate a parent dimensionful quantity with a child one without specifying }\Omega_{\rm W}.
}
\]

---

## 1. Claim status

This note separates four levels of statement.

### Established conformal geometry

For a positive smooth Weyl transformation, causal type and unparameterized null geodesics are preserved. Physical lengths, proper times, affine parameters, expansions, curvatures, and quasi-local masses transform nontrivially.

### Conditional CSBHI consequence

If the parent and child formation regions are genuinely related by \(g_C=\Omega_{\rm W}^2g_P\), the cross-frame affine transfer is not independent of \(\Omega_{\rm W}\).

### Mechanism candidate

A finite transition region with curvature mismatch can develop nonzero derivatives of \(\Omega_{\rm W}\), even if its value and first normal derivative are initially normalized to \((1,0)\). This is a possible initial-value mechanism for the conformal mode, not yet a field equation that selects it.

### Open global claim

The local Weyl relation established for the homogeneous formation patch has not been extended through the full mature GD1 branch. The mature ruler scale \(\Gamma_{\rm GD}=a^2\) is known conditionally from GD1, but identifying it with \(\Omega_{\rm W}\) remains a stronger GD2 hypothesis.

---

## 2. Local Weyl dictionary

Let

\[
\omega\equiv\ln\Omega_{\rm W}.
\]

In spherical symmetry write

\[
ds_P^2=h^P_{AB}dx^Adx^B+R_P^2d\Omega^2.
\]

The child angular metric immediately gives

\[
\boxed{R_C=\Omega_{\rm W} R_P.}
\tag{1}
\]

For the same timelike curve, unit-normalized separately in the two metrics,

\[
\boxed{d\tau_C=\Omega_{\rm W}\,d\tau_P.}
\tag{2}
\]

If \(\lambda_P\) is affine for a parent null geodesic, an affine child parameter satisfies

\[
\boxed{d\lambda_C=C_\lambda\Omega_{\rm W}^2d\lambda_P,}
\tag{3}
\]

where \(C_\lambda>0\) is the ordinary constant freedom in affine normalization. The corresponding tangent vectors obey

\[
k_C^a=C_\lambda^{-1}\Omega_{\rm W}^{-2}k_P^a.
\tag{4}
\]

For a timelike congruence with one-third volume expansion \(H\),

\[
\boxed{
H_C
=
\Omega_{\rm W}^{-1}
\left(H_P+D_P\omega\right),
}
\tag{5}
\]

where \(D_P\) differentiates along the parent unit tangent. Equation (5) compares corresponding congruences; it is not permission to identify two independently chosen parent and child clocks.

The correct dictionary for an actual local Weyl-related patch is therefore:

| Quantity | Isometric surrogate | Conformal branch |
|---|---:|---:|
| Areal radius | \(R_C=R_P\) | \(R_C=\Omega_{\rm W} R_P\) |
| Proper time | \(d\tau_C=d\tau_P\) | \(d\tau_C=\Omega_{\rm W} d\tau_P\) |
| Affine null parameter | \(d\lambda_C=d\lambda_P\) | \(d\lambda_C=C_\lambda\Omega_{\rm W}^2d\lambda_P\) |
| Null paths | same paths and parameter | same unparameterized paths |
| Volume-expansion rate | \(H_C=H_P\) | \(H_C=\Omega_{\rm W}^{-1}(H_P+D_P\omega)\) |
| Misner–Sharp mass | simple equality or scaling | derivative terms in \(\Omega_{\rm W}\) contribute |

An equality such as \(R_P=R_C\) is admissible only inside a deliberately declared isometric benchmark or at a cross-section where \(\Omega_{\rm W}=1\) has been separately established.

---

## 3. The affine-transfer function under a genuine conformal map

The GD2 affine construction introduced

\[
\mathcal T(v_H)
\equiv
\frac{d\lambda_C}{d\lambda_P}.
\tag{6}
\]

Equation (3) gives, on the mapped null history,

\[
\boxed{
\mathcal T(v_H)
=
C_\lambda\Omega_{{\rm W},H}^2(v_H).
}
\tag{7}
\]

Thus \(\mathcal T\) ceases to be an independent function if the strong local conformal hypothesis is imposed. The unknown functional freedom has not disappeared; it has been identified with the still-undetermined conformal factor.

The established affine relation was

\[
a^2[\Phi(v_H)]\Phi'(v_H)
=
C\mathcal T(v_H)
\exp\!\left(\int\kappa_P\,dv_H\right).
\tag{8}
\]

Absorbing \(C_\lambda\) into the constant \(C\) gives

\[
\boxed{
\Phi'
=
C
\left(\frac{\Omega_{{\rm W},H}}{a}\right)^2
e^{K(v_H)},
\qquad
K(v_H)\equiv\int\kappa_P\,dv_H.
}
\tag{9}
\]

Define the formation variable

\[
\boxed{\Upsilon_H\equiv\frac{\Omega_{{\rm W},H}}{a}.}
\tag{10}
\]

The symbol \(\Upsilon_H\) is chosen instead of \(\Xi\), because \(\Xi\) has already been used in earlier horizon-flow work. Then

\[
\boxed{\Phi'=C\Upsilon_H^2e^K.}
\tag{11}
\]

This cleanly separates the mature child scale \(a\), the cross-frame scale \(\Omega_{\rm W}\), and the horizon's non-affinity \(\kappa_P\).

---

## 4. A finite throat can generate a conformal rate

Let \(n\) be a Gaussian normal coordinate through a smooth finite transition region of thickness \(\ell\). Normalize the parent edge by

\[
\Omega_{\rm W}(0)=1,
\qquad
\partial_n\Omega_{\rm W}(0)=0.
\tag{12}
\]

Taylor expansion gives

\[
\Omega_{\rm W}(\ell)
=
1+\frac12\Omega_{\rm W}_{;nn}(0)\ell^2+O(\ell^3),
\tag{13}
\]

\[
\partial_n\Omega_{\rm W}(\ell)
=
\Omega_{\rm W}_{;nn}(0)\ell+O(\ell^2).
\tag{14}
\]

Hence a finite second derivative acting across a finite width can produce a nonzero outgoing first derivative. In the smooth zero-width limit both changes vanish. This explains why an infinitesimal seam with smooth matching could not generate a new scale rate.

The four-dimensional scalar curvatures obey

\[
R_C
=
\Omega_{\rm W}^{-2}
\left[
R_P-6\Box_P\omega-6(\nabla\omega)^2
\right].
\tag{15}
\]

Using \(\omega=\ln\Omega_{\rm W}\), this is equivalently

\[
\boxed{
\Box_P\Omega_{\rm W}
=
\frac{\Omega_{\rm W}}{6}
\left(R_P-\Omega_{\rm W}^2R_C\right).
}
\tag{16}
\]

Equation (16) is an identity that any chosen pair of conformally related metrics must satisfy. It does not determine the full Hessian of \(\Omega_{\rm W}\), supply boundary data, or establish a new scalar-field dynamics. The statement

\[
\text{curvature mismatch}
\longrightarrow
\text{curvature of }\Omega_{\rm W}
\]

is therefore a geometric mechanism candidate rather than a completed theory.

---

## 5. When corresponding contraction becomes expansion

For the corresponding timelike congruence, Equation (5) gives

\[
H_C>0
\quad\Longleftrightarrow\quad
D_P\ln\Omega_{\rm W}>-H_P.
\tag{17}
\]

If the parent congruence is contracting, \(H_P<0\). The conformal rate cancels the contraction at

\[
D_P\ln\Omega_{\rm W}=-H_P
\tag{18}
\]

and overtakes it beyond that point. This is an exact kinematic criterion under the conformal identification. It does not show that the required \(\Omega_{\rm W}\) is dynamically generated.

---

## 6. Marginality is not conformally invariant

Let \(k_P^a\) be an affine parent null tangent and let

\[
\theta_P=\frac{2}{R_P}k_P(R_P)
\]

be its spherical expansion. Using Equations (1) and (4), the affine child expansion is

\[
\boxed{
\theta_C
=
C_\lambda^{-1}\Omega_{\rm W}^{-2}
\left[
\theta_P+2k_P(\ln\Omega_{\rm W})
\right].
}
\tag{19}
\]

The constant \(C_\lambda^{-1}\) is irrelevant to the zero. A child marginal sphere therefore obeys

\[
\boxed{
\theta_P+2k_P(\ln\Omega_{\rm W})=0,
}
\tag{20}
\]

not generally \(\theta_P=0\).

Some earlier notes use null normals normalized separately in the two frames rather than affine-related tangents. Their displayed prefactor is \(\Omega_{\rm W}^{-1}\) instead of \(\Omega_{\rm W}^{-2}\). This is a normalization difference only; the bracket and marginality condition are identical.

The natural candidate for a completed FLRW handoff must therefore require more than parent marginality. Schematically,

\[
\boxed{
\mathcal W\rightarrow0,
\qquad
\Sigma\rightarrow0,
\qquad
\theta_P+2k_P(\ln\Omega_{\rm W})=0.
}
\tag{21}
\]

The first two conditions enforce homogeneous, shear-free parent data; the third enforces marginality in the child metric.

---

## 7. Correction to the trapping-pair ledger

The raw parent curve \(R_+(R_-)\) cannot by itself equal the child Friedmann history. Adopt the candidate reciprocal coordinate

\[
r=\frac{R_-}{R_b},
\qquad
a=\frac1r,
\tag{22}
\]

and suppose a selected parent cross-section maps to the child apparent horizon. Then

\[
R_A^C(r)=\mathscr S_A(r)R_+^P(r),
\tag{23}
\]

while asymptotically

\[
R_{\rm dS}^C
=
\mathscr S_{A,\infty}R_{+,\infty}^P.
\tag{24}
\]

Define the dressed curve

\[
\boxed{
\mathcal R_+(r)
\equiv
\frac{\mathscr S_A(r)R_+^P(r)}
{\mathscr S_{A,\infty}R_{+,\infty}^P}.
}
\tag{25}
\]

For flat FLRW,

\[
\boxed{
P(r)
\equiv
\frac{H_C^2}{H_\Lambda^2}
=
\mathcal R_+^{-2}(r).
}
\tag{26}
\]

If

\[
P(r)=1+\eta_mr^3+\eta_rr^4+\cdots
\]

and the lower flatness conditions hold, then

\[
\boxed{
\eta_m=-\frac{\mathcal R_+^{(3)}(0)}3,
\qquad
\eta_r=-\frac{\mathcal R_+^{(4)}(0)}{12}.
}
\tag{27}
\]

Here \(\mathscr S_A\) is deliberately generic scale-transfer data. It may be related to \(\Omega_{\rm W}\), \(\Gamma_{\rm GD}\), or both, but the throat must derive that relation. The ledger may therefore be carried jointly by parent trapping-horizon evolution and scale-transfer evolution. This is the corrected content of [The Conditional Trapping-Pair Ledger and Weyl-Flat Handoff](note.html?src=conditional_trapping_pair_ledger_and_weyl_flat_handoff).

---

## 8. Parent mass and a specified scale comparison

Suppose only as a constant-scale benchmark at a declared comparison event or cross-section \(X\) that

\[
R_{\rm dS}^C
=
\Omega_{{\rm W},X} R_H^P,
\qquad
R_H^P=\frac{2GM_{\rm parent}}{c^2}.
\tag{28}
\]

Then

\[
\boxed{
M_{\rm parent}
=
\frac{c^2R_{\rm dS}^C}{2G\Omega_{{\rm W},X}}.
}
\tag{29}
\]

The mass-equivalent obtained by setting \(\Omega_{{\rm W},X}=1\) is instead

\[
\boxed{M_{\rm equiv}=\Omega_{{\rm W},X} M_{\rm parent}.}
\tag{30}
\]

For \(R_{\rm dS}=17.53\,\mathrm{Gly}\), \(M_{\rm equiv}\simeq5.6\times10^{22}M_\odot\). A \(10M_\odot\) parent would require

\[
\Omega_{{\rm W},X}\simeq5.6\times10^{21},
\qquad
\ln\Omega_{{\rm W},X}\simeq50.1,
\tag{31}
\]

while a \(30M_\odot\) parent gives \(\ln\Omega_{{\rm W},X}\simeq49.0\).

These numbers are scale-ratio targets at the declared comparison \(X\), not derived formation results and not inflationary e-folds. They are not values of a mature \(\Gamma_{{\rm GD},\infty}\): in an asymptotically de Sitter child, \(\Gamma_{\rm GD}=a^2\) diverges. If \(\Omega_{\rm W}\) varies, its gradients also enter the quasi-local mass and Equations (29)–(30) are insufficient.

No present CSBHI result canonically identifies the parent event-horizon radius with today's child particle-horizon radius. Such a comparison is more speculative than the de Sitter benchmark and should not be described as canonical.

---

## 9. A conditional pre-FLRW contribution to causal reach

Conformal scaling cannot turn causally disconnected parent events into causally connected ones. The possible horizon-problem mechanism is instead

\[
\boxed{
\text{common parent/throat causal history}
\longrightarrow
\text{large child physical separation}.
}
\tag{32}
\]

Observers can later lie outside one another's **FLRW-only post-handoff particle horizons** while sharing a causal past in the formation region.

Equation (9) gives a candidate throat contribution to child conformal time,

\[
\boxed{
\Delta\eta_{\rm throat}
=
C\int_{\rm throat}
\left(\frac{\Omega_{{\rm W},H}}{a}\right)^2
e^{K(v_H)}\,dv_H.
}
\tag{33}
\]

After a consistent matching of coordinates and normalization, the complete causal reach would take the schematic form

\[
\boxed{
\chi_{\rm causal}
=
\Delta\eta_{\rm throat}
+
\int_{\rm FLRW}
\frac{c\,d\tau}{a(\tau)}.
}
\tag{34}
\]

The first term is absent when one declares the hot FLRW branch to be the beginning of the causal history.

Equations (33)–(34) are not yet a solution of the CMB horizon problem. A completed calculation must:

1. construct the global parent–throat–child geometry and fix \(\Omega_{\rm W}\);
2. normalize the handoff so both integrals use one child comoving coordinate;
3. show that the past cones of widely separated last-scattering points intersect in the common formation domain;
4. establish adequate equilibration or a dynamical origin of the shared state; and
5. preserve the observed perturbation spectrum and other early-universe constraints.

The mechanism, if successful, would enlarge the causal history rather than change the local speed of light or the conformal light cones.

---

## 10. Local formation map versus global conformal history

Result IV establishes an explicit local Weyl relation on the homogeneous formation patch. Earlier work also found that requiring one simple global four-dimensional Weyl factor to perform every mature-interior role is overly restrictive.

Accordingly, the proposed sequence

\[
\Omega_{\rm W}\simeq1,
\quad
\nabla\Omega_{\rm W}\simeq0
\quad\longrightarrow\quad
\nabla\nabla\Omega_{\rm W}\neq0
\quad\longrightarrow\quad
\Omega_{\rm W}\gg1
\tag{35}
\]

is a useful research model, not yet the canonical global solution. It must be reconciled with the stationary/de Sitter obstruction, the transformed Einstein tensor, the crease-set behavior, and the mature reciprocal metric.

---

## 11. Legacy-note correction ledger

The following older notes retain useful calculations but require explicit scope corrections.

| Earlier note | What survives | What is no longer current |
|---|---|---|
| *The Horizon Flow and Density Identity* | The parent PG infall rate and the parent compactness-density algebra | Calling the parent-proper-time reciprocal rate the physical child Hubble rate without \(\Omega_{\rm W}\); the cross-frame density equality |
| *Null-Horizon Matching of the Reciprocal Interior* | A negative test of an ordinary zero-width isometric junction | Its equal-radius result is not a conclusion of the conformal CSBHI branch |
| *The Exact Shell Identity and the Kottler Mass Condition* | Standard timelike Israel–Darmois matching for one physical hypersurface | Its shared junction radius is not a parent–child conformal radius equality |
| *Dynamic Throat Kinematics and the Cosmological Clock* | The child-side identity \(\dot B=HB-c\) for an ingoing FLRW null boundary | Identifying that future event-horizon history with the parent formation map or transferring its radius is not current GD2 |
| *The Collapse-to-Child Boundary System* | The separate parent and child null embeddings | The unit-lapse selection and any inference that one clock removes the conformal transfer |
| *Optical Transfer Through a Matter-Filled Parent Collapse* | The parent-side LTB optical integrating factor | Its \(N_H=1\) cross-frame normalization; a local Weyl map would instead give \(C_\lambda\Omega_{{\rm W},H}^2\), but the throat must still establish that map |
| *The Remaining Horizon Clock* | The identification of \(\Phi'\) as missing in the pre-conformal formulation | A local Weyl map would carry the null affine factor through \(\Omega_{{\rm W},H}\); the relation to \(\Gamma_{\rm GD}\) remains open |
| *Horizon-Map Equation and Notation Audit* | The horizon-name guardrails and angular conformal relation | Its Schwarzschild-rate/child-density boundary identity is an isometric benchmark, and \(\Omega_\Sigma\) is now the local precursor of canonical \(\Omega_{\rm W}\) |
| *Asymptotic Consistency of the Collapse-Cohort Map* | Its endpoint expansions within the old cohort model | Its unit-lapse, raw mass-tail, and child-reconstruction claims must be redone with \(\Omega_{\rm W}\) explicit |
| *Next Steps for the Collapse-Cohort Horizon Map* | Its decomposition of the remaining construction | Its clock function must be derived jointly with \(\Omega_{\rm W}\), \(\Gamma_{\rm GD}\), and the throat map |

The sharp-junction and dynamic-future-horizon notes remain useful as archived surrogate calculations. They must not be combined with Result IV as though they described the same physical map.

---

## 12. Next pass/fail calculations

The correction turns the next work into four concrete tests.

### I. Solve or derive the conformal mode

Supply enough independent equations and boundary data to determine \(\Omega_{\rm W}\), rather than merely imposing the scalar-curvature identity.

### II. Conformal marginality and stress-energy

Locate the cross-section satisfying Equation (20), compute the full transformed Einstein tensor, and test whether the child stress tensor is physically admissible.

### III. Corrected ledger

Evaluate the dressed curve \(\mathcal R_+(r)\), not raw \(R_+(R_-)\), and compare its late jet with any local handoff ledger.

### IV. Global causal-domain test

Compute Equation (33) in a completed geometry and trace actual last-scattering past cones through the handoff. A large scale ratio alone is not sufficient.

---

## Conclusion

The conformal correction removes several false identifications while preserving the useful architecture.

\[
\boxed{
\text{local Weyl transfer is controlled by }\Omega_{\rm W},
\quad
\text{causal paths are conformally preserved},
\quad
\text{marginality requires a derivative condition}.
}
\]

Under an independently established local conformal map, the affine-transfer function becomes \(C_\lambda\Omega_{{\rm W},H}^2\). The finite throat may generate the initial derivative data of this local Weyl factor, and the dressed trapping pair can still carry the matter/radiation ledger. Neither statement identifies \(\Omega_{\rm W}\) with the mature ruler scale \(\Gamma_{\rm GD}\).

The CMB horizon problem acquires a legitimate candidate route: include a common pre-FLRW formation domain in the causal past and then map it to a much larger physical child geometry. That route remains a calculation to be passed, not a result to be announced.

---

## References

1. V. Faraoni, E. Gunzig, and P. Nardone, [*Conformal transformations in classical gravitational theories and in cosmology*](https://arxiv.org/abs/gr-qc/9811047), *Fundamental Cosmic Physics* **20** (1999).
2. A. Prain, V. Vitagliano, V. Faraoni, and M. Lapierre-Léonard, [*Hawking–Hayward quasi-local energy under conformal transformations*](https://arxiv.org/abs/1501.02977), *Classical and Quantum Gravity* **32** (2015).
3. [*The Conformal Formation Map*](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
4. [*The Conditional Trapping-Pair Ledger and Weyl-Flat Handoff*](note.html?src=conditional_trapping_pair_ledger_and_weyl_flat_handoff), CSBHI working calculation (2026).
