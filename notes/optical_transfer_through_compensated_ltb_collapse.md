# Optical Transfer Through a Matter-Filled Parent Collapse

*Step five of the collapse-cohort horizon-map calculation: the exact null-coordinate transport law, its frequency interpretation, and the numerical data still required from the global event horizon.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit); [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system); [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb).

**Status:** Exact optical reduction, with numerical optical evaluation still open. The integrating-factor transport and frequency identities follow from the parent ΛLTB metric and child FLRW metric. The subsequent full-history mass test is linked below and changes the interpretation of the unit-lapse result. Tiered **[E]** established geometry, **[C]** CSBHI phase correspondence, **[O]** numerical optical transfer.

**Notation:** [Glossary](note.html?src=cosmological_glossary). We use \(c=1\), retain \(G\), and write parent cosmic time as \(t_P\). The parent areal radius is \(Y(t_P,x)\),

\[
A(t_P,x)
\equiv
\frac{Y'(t_P,x)}{\sqrt{1+2E(x)}}.
\tag{1}
\]

---

## 1. The parent optical coordinate [E]

The radial parent metric is

\[
ds_P^2=-dt_P^2+A(t_P,x)^2dx^2.
\tag{2}
\]

Introduce an advanced null coordinate \(v_B\) by

\[
dv_B
=
\beta(t_P,x)\left(dt_P+A(t_P,x)dx\right).
\tag{3}
\]

The surfaces \(v_B=\mathrm{constant}\) are ingoing radial null rays. Exactness of Equation (3) requires

\[
\partial_x\beta
=
A\,\partial_{t_P}\beta
+
\beta\,\partial_{t_P}A.
\tag{4}
\]

Equation (4) is the parent null-coordinate integrating-factor equation. It is a first-order transport equation, not another free function in the horizon map.

---

## 2. Characteristic solution [E]

An ingoing parent ray obeys

\[
\frac{dx_-}{dt_P}=-\frac{1}{A}.
\tag{5}
\]

Along that ray, Equation (4) reduces to

\[
\boxed{
\frac{d\ln\beta}{dt_P}
=
-\frac{\partial_{t_P}A}{A}
\equiv
-H_\parallel
}.
\tag{6}
\]

Here \(H_\parallel=\dot Y'/Y'\) is the parent radial expansion rate; the time-independent LTB curvature factor cancels. Let an ingoing ray be emitted in the homogeneous parent FLRW region at \((t_o,x_o)\) and reach the event horizon at the later event \((t_H,x_H)\), with \(t_o<t_H\). Integration gives

\[
\boxed{
\beta_H
=
\beta_o
\exp\!\left[
-\int_{t_o}^{t_H}
H_\parallel\bigl(t_P,x_-(t_P)\bigr)\,dt_P
\right]
}.
\tag{7}
\]

Normalize the advanced coordinate in the homogeneous parent exterior by

\[
v_B=\eta_P+x,
\qquad
\beta_o=\frac{1}{a_P(t_o)}.
\tag{8}
\]

Then the horizon value is fixed physically:

\[
\boxed{
\beta_H(t_H)
=
\frac{1}{a_P(t_o)}
\exp\!\left[
-\int_{t_o}^{t_H}
\frac{\dot Y'}{Y'}
\,dt_P
\right]
}.
\tag{9}
\]

The homogeneous check is immediate. If \(Y=a_P(t_P)x\), then \(H_\parallel=H_P\), and Equation (9) returns \(\beta_H=1/a_P(t_H)\), as required by \(v_B=\eta_P+x\).

---

## 3. What a parent observer measures [E]

Let a radial mode have phase proportional to \(v_B\). Comoving parent dust has four-velocity \(u_P=\partial_{t_P}\), so the locally measured frequency is proportional to

\[
\nu_P\propto\beta.
\tag{10}
\]

Equation (7) therefore gives the exact parent optical transfer from the homogeneous exterior to the event horizon:

\[
\boxed{
\frac{\nu_H}{\nu_o}
=
\frac{\beta_H}{\beta_o}
=
\exp\!\left[
-\int_{t_o}^{t_H}
H_\parallel\bigl(t_P,x_-(t_P)\bigr)\,dt_P
\right]
}.
\tag{11}
\]

This is the usual LTB radial-redshift content written in the integrating-factor language required by the horizon map. The signal accumulates the radial expansion or contraction encountered along the null ray. It is not determined by the endpoint areal radii alone.

---

## 4. Evaluation on the parent event horizon [E]

The outgoing event-horizon generator obeys

\[
\frac{dx_H}{dt_P}=\frac{1}{A_H}.
\tag{12}
\]

Restricting Equation (3) to it gives

\[
\boxed{
J_H(t_P)
\equiv
\frac{dv_B}{dt_P}
=
2\beta_H(t_P)
}.
\tag{13}
\]

Thus Step 5 has no independent coordinate normalization left after Equation (8). The parent geometry transports that normalization to the horizon through Equation (9), and Equation (13) supplies the physical clock Jacobian required by the equation audit.

---

## 5. Child phase transfer and the same clock [E/C]

The proposed child image of the horizon is its particle-horizon history,

\[
R=\eta_C=\Phi(t_P),
\qquad
v_A=\eta_C+R=2\Phi.
\tag{14}
\]

Let the event map act on radial phases by

\[
v_B=V(v_A).
\tag{15}
\]

Differentiating along the mapped null history gives

\[
V'
=
\frac{J_H}{2\Phi'}.
\tag{16}
\]

Keep the cohort lapse explicit,

\[
N_H=\frac{d\tau_H}{dt_P},
\qquad
\Phi'=\frac{N_H}{a_C}.
\tag{17}
\]

Equations (13), (16), and (17) then yield

\[
\boxed{
V'
=
\frac{a_C\beta_H}{N_H}
}.
\tag{18}
\]

A child comoving observer measures the mapped phase at frequency

\[
\nu_C\propto\frac{V'}{a_C}
=
\frac{\beta_H}{N_H}.
\tag{19}
\]

The parent dust at the same crossing measures \(\nu_H\propto\beta_H\). Local frequency continuity is therefore equivalent to

\[
\boxed{N_H=1}.
\tag{20}
\]

With the same-clock identification already obtained from the freely falling cohorts,

\[
\boxed{
V'(t_P)=a_C(t_P-t_{\rm form})\,\beta_H(t_P)
}.
\tag{21}
\]

Equation (21) is the full optical derivative in terms of parent collapse data and child FLRW dynamics.

---

## 6. What the optical calculation does—and does not—fix

The calculation produces two distinct results.

1. **A physical prediction:** Equation (11) gives the redshift or blueshift between a parent FLRW observer and the corresponding event-horizon crossing. Its value depends on the integrated parent radial expansion along the connecting ingoing ray.
2. **A consistency identity:** Equations (18)–(20) show that the optical phase map and the freely falling cohort map select the same lapse. Optics does not supply a second independent function \(\Phi\); it checks the same-clock identification using massless rather than massive probes.

This resolves an ambiguity in the earlier plan. The optical calculation cannot replace the global event-horizon integration. To evaluate Equations (9), (11), and (21) throughout formation, the benchmark must supply:

- the two-dimensional solution \(Y(t_P,x)\) and its radial derivative \(Y'\);
- the global black-hole event horizon \(x_H(t_P)\), not the trapping horizon;
- the family of ingoing null rays joining each horizon cross-section to the homogeneous parent exterior.

The published trapping-time table supplies none of these three objects by itself. Substituting it would again compute the wrong surface.

---

## 7. Step 5 result

> The optical transfer through a matter-filled spherical collapse is fixed by one characteristic integral of the parent radial expansion, \(\beta_H=\beta_o\exp[-\int_{t_o}^{t_H} H_\parallel dt_P]\). It determines the observable frequency shift from the parent FLRW exterior to each black-hole event-horizon crossing and fixes the parent clock Jacobian \(J_H=2\beta_H\). On the child side, phase continuity gives \(V'=a_C\beta_H/N_H\); equality of the locally measured frequencies selects \(N_H=1\), exactly the lapse already selected by the freely falling cohort clocks. Optics therefore confirms the same clock but does not generate a second horizon-map function. Its numerical history requires the same global event horizon and two-dimensional ΛLTB solution left open by the shell-clock benchmark.

The next calculation should not fit an optical curve independently. It should construct the global event horizon, evaluate Equation (9) on it, and then check formation and late-time asymptotes of the shell, optical, and child clocks together.

### Subsequent benchmark result

The [full-history shell-clock test](note.html?src=full_history_test_of_the_collapse_cohort_shell_clock) preserves the endpoint relations but rejects the unit-lapse shell clock during the intermediate collapse for the selected compensated profile. The optical transport law remains exact. What must be revisited is the step that turns phase/frequency continuity into \(N_H=1\), or the direct mass-volume correspondence with which that normalization was combined.

---

## References

1. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
2. R. Codur and C. Marinoni, “Redshift drift in radially inhomogeneous Lemaître–Tolman–Bondi spacetimes,” *Phys. Rev. D* **104**, 123531 (2021), [arXiv:2107.04868](https://arxiv.org/abs/2107.04868).
3. [Null Optics of the Reciprocal Interior](note.html?src=null_optics_of_the_reciprocal_interior); [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit), this project.
