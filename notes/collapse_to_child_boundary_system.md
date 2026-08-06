# The Collapse-to-Child Boundary System

*Step three of the collapse-cohort horizon-map calculation: the two null embeddings, their single clock freedom, and the mass-history constraint that tests the map.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit); [Selecting the Parent Collapse Benchmark](note.html?src=collapse_benchmark_selection); [Next Steps for the Collapse-Cohort Horizon Map](note.html?src=next_steps_for_the_collapse_cohort_horizon_map).

**Status:** Boundary-system derivation. The parent and child null identities are exact within their respective metrics. Their identification, the cohort synchronization, and the shell correspondence are CSBHI hypotheses exposed here as explicit tests. Tiered **[E]** established geometry, **[C]** candidate correspondence, **[O]** open numerical test.

**Units and notation:** (c=1), (G) retained. Parent cosmic proper time is (t_P); child proper time is (	au); child conformal time is (eta). A dot on (Y) means (partial_{t_P}Y), while (H_A=dot a/a) uses child proper time as in the project glossary. Context keeps the two derivatives unambiguous.

---

## 1. Parent event-horizon embedding [E]

Write the radial part of the selected (Lambda)LTB parent metric as

\[
ds_P^2=-dt_P^2+A(t_P,x)^2dx^2,
\qquad
A\equiv\frac{Y'}{\sqrt{1+2E}}.
\tag{1}
\]

The outgoing black-hole event-horizon generator has embedding

\[
X_P(t_P)
=
\bigl(t_P,x_H(t_P),\theta,\phi\bigr).
\tag{2}
\]

Nullness fixes its comoving velocity:

\[
\boxed{
\frac{dx_H}{dt_P}
=
\frac{1}{A_H}
=
\frac{\sqrt{1+2E_H}}{Y'_H}
}.
\tag{3}
\]

Its areal radius is

\[
R_{\rm BH}(t_P)=Y\bigl(t_P,x_H(t_P)\bigr),
\tag{4}
\]

so its physical radial rate is

\[
\boxed{
\frac{dR_{\rm BH}}{dt_P}
=
\dot Y_H+\sqrt{1+2E_H}
}.
\tag{5}
\]

On the collapsing LTB branch, the parent field equation gives the entirely parent-side expression

\[
\frac{dR_{\rm BH}}{dt_P}
=
\sqrt{1+2E_H}
-
\sqrt{
\frac{2Gm_H}{R_{\rm BH}}
+2E_H
+\frac{\Lambda_P}{3}R_{\rm BH}^2
}.
\tag{6}
\]

Equations (3)–(6) determine the parent null embedding once the compensated profile and its future boundary conditions are specified. No child geometry has entered.

---

## 2. Child particle-horizon embedding [E/C]

The proposed child image is

\[
X_C(t_P)
=
\bigl(\tau_H(t_P),R=\Phi(t_P),\theta,\phi\bigr),
\qquad
\eta\bigl(\tau_H(t_P)\bigr)=\Phi(t_P).
\tag{7}
\]

Introduce the one possible clock mismatch explicitly:

\[
\boxed{
N_H(t_P)
\equiv
\frac{d\tau_H}{dt_P}
>0
}.
\tag{8}
\]

Because (d\eta=d\tau/a), Equation (7) gives

\[
\boxed{
\Phi'(t_P)
=
\frac{N_H(t_P)}{a\bigl(\tau_H(t_P)\bigr)}
}.
\tag{9}
\]

Equation (9) is also the child null condition: substituting (dR/dt_P=\Phi') and (d\tau/dt_P=N_H) into the radial FLRW metric gives zero identically.

This is the first closure result. The map did not contain three independent unknown functions. Before imposing a physical synchronization, its radial freedom is the single lapse (N_H). Once (N_H) is fixed, both (	au_H) and (Phi) follow.

---

## 3. The cohort clock [C]

The (Lambda)LTB coordinate (t_P) is proper time along every parent dust worldline. Child FLRW time (	au) is proper time along every child comoving worldline. The cohort construction identifies one collapsing parent worldline with one child comoving worldline and requires horizon crossing to produce no impulse or clock discontinuity.

The remaining issue is synchronization *between* cohorts. The benchmark removes the parent decaying mode with a constant bang-time function, so its dust clocks form one synchronous family. The child comoving clocks also form one synchronous family. Anchor both at the limiting formation cohort,

\[
t_P=t_{\rm form}
\quad\longleftrightarrow\quad
\tau=0,
\qquad
a(0)=1.
\tag{10}
\]

The direct same-clock identification is then

\[
\boxed{N_H=1},
\qquad
\boxed{\tau_H=t_P-t_{\rm form}}.
\tag{11}
\]

This is not a theorem about arbitrary null junctions. It is the operational content of the collapse-day thought experiment: Precursor Alice and every later Alice carry ordinary proper time continuously through the crossing, and their synchronized parent clocks become the synchronized child clocks. A nontrivial (N_H) would be a new physical lapse that the theory would have to source.

Equations (9) and (11) give the candidate clock map without observational calibration:

\[
\boxed{
\Phi(t_P)
=
\eta_C(t_P-t_{\rm form})
=
\int_0^{t_P-t_{\rm form}}
\frac{d\tau}{a(\tau)}
}.
\tag{12}
\]

Thus parent elapsed proper time maps to child proper time, while the reciprocal child geometry converts that proper time into the conformal coordinate carried by the particle-horizon history. Alice is not time-reversed in the child cosmology.

---

## 4. Optical consistency [E/C]

The parent two-metric admits an advanced null coordinate locally. Write

\[
dv_B
=
\beta(t_P,x)
\left(dt_P+A(t_P,x)dx\right).
\tag{13}
\]

Exactness of (dv_B) requires

\[
\partial_x\beta
=
A\,\partial_{t_P}\beta
+\beta\,\partial_{t_P}A.
\tag{14}
\]

The boundary condition that normalizes (v_B) is supplied by a parent observer or by the asymptotic FLRW region. Along the outgoing event horizon, Equations (3) and (13) give

\[
\boxed{
J_H(t_P)
\equiv
\frac{dv_B}{dt_P}
=
2\beta_H(t_P)
}.
\tag{15}
\]

On the child particle-horizon history, (v_A=\eta+R=2\Phi). Therefore the phase map (v_B=V(v_A)) obeys

\[
V'
=
\frac{J_H}{2\Phi'}
=
\frac{a\beta_H}{N_H}.
\tag{16}
\]

This reproduces the audit relation exactly. It also shows what the same-clock condition means optically. Parent dust measures a mode with phase proportional to (v_B) at frequency proportional to (eta_H); child comoving matter measures the mapped mode at frequency proportional to (V'/a). Continuity of locally measured frequency gives

\[
\frac{V'}{a}=\beta_H,
\tag{17}
\]

and Equations (16)–(17) return (N_H=1).

The clock identification and the optical transfer are therefore the same boundary normalization expressed with massive and massless probes. The integrating factor (eta) and coordinate Jacobian (J_H) remain necessary for predicting the external signal, but they do not introduce another freedom into (Phi).

---

## 5. Angular scale [E/C]

The child particle-horizon areal radius on the mapped history is

\[
P(t_P)
\equiv
a\bigl(\tau_H(t_P)\bigr)\Phi(t_P).
\tag{18}
\]

The spherical conformal relation then determines, rather than independently assumes, the angular scale:

\[
\boxed{
\Omega_\Sigma(t_P)
=
\frac{P(t_P)}{R_{\rm BH}(t_P)}
=
\frac{a(t_P-t_{\rm form})\,
\eta_C(t_P-t_{\rm form})}
{Y(t_P,x_H(t_P))}
}.
\tag{19}
\]

Its evolution is explicit:

\[
\boxed{
\frac{d\ln\Omega_\Sigma}{dt_P}
=
H_A
+\frac{1}{P}
-\frac{1}{R_{\rm BH}}
\frac{dR_{\rm BH}}{dt_P}
}.
\tag{20}
\]

The first two terms are the child particle-horizon flow; the last is the parent event-horizon flow. Equation (6) supplies that last term entirely from the (Lambda)LTB solution.

At the regular center where the parent event horizon begins, (m=O(x^3)), (E=O(x^2)), and (dot Y=O(x)). Equation (5) therefore gives

\[
\frac{dR_{\rm BH}}{dt_P}
\longrightarrow 1.
\tag{21}
\]

The child has (P(0)=0), (a(0)=1), and (dP/d\tau=H_AP+1\to1). Hence

\[
\boxed{
\Omega_\Sigma(t_{\rm form})
\equiv
\lim_{t_P\to t_{\rm form}^{+}}
\frac{P}{R_{\rm BH}}
=1
}.
\tag{22}
\]

This is a tangent match at the formation anchor, not an assertion that the two horizon areas remain equal. If the parent black-hole radius later approaches a finite value while the child particle-horizon areal radius grows, (Omega_\Sigma) grows with it. That behavior is the conformal local-to-global conversion the construction was meant to represent.

---

## 6. The shell map becomes a test [C/O]

Let (M_f) be the final parent material mass assigned to the complete family of shells that crosses the black-hole event horizon, and define the swept mass fraction

\[
\mu_H(t_P)
\equiv
\frac{m(x_H(t_P))}{M_f}.
\tag{23}
\]

If the homogeneous shell correspondence and the causal map label the same cohorts, then

\[
\Phi(t_P)
=
R_b\,\mu_H(t_P)^{1/3}.
\tag{24}
\]

This relation should not be used to choose (Phi) after Equation (12) has fixed the clock. It is the benchmark's first nontrivial compatibility test. Combining Equations (12) and (24) gives

\[
\boxed{
\mu_H(t_P)
=
\left[
\frac{\eta_C(t_P-t_{\rm form})}{R_b}
\right]^3
}.
\tag{25}
\]

If the complete captured shell family maps to the complete child conformal interval, then (mu_H\to1), (eta_C\to\eta_\infty), and (R_b=\eta_\infty). The scale-free form is

\[
\boxed{
\frac{m(x_H(t_P))}{M_f}
=
\left[
\frac{\eta_C(t_P-t_{\rm form})}{\eta_\infty}
\right]^3
}.
\tag{26}
\]

Equation (26) is the sharp output of Step 3. The parent side is the fraction of the final black-hole mass swept out by the event horizon. The child side is the cube of conformal progress through the particle-horizon history. The cube is not fitted: it is the volume power forced by homogeneous spherical shell ordering.

Differentiating before imposing Equation (26) gives the directly computable parent rate

\[
\frac{d\mu_H}{dt_P}
=
\frac{m'_H}{M_f}
\frac{\sqrt{1+2E_H}}{Y'_H}
=
\frac{4\pi\rho_HY_H^2\sqrt{1+2E_H}}{M_f}.
\tag{27}
\]

The selected compensated profile can therefore pass or fail Equation (26) without using the observed age, present particle horizon, CMB scale, or de Sitter radius to tune the answer.

Equation (26) also identifies where the collapse and primordial-amplitude tracks meet. The (Lambda)LTB benchmark computes the parent mass and horizon history; the recursive hypothesis proposes how those data seed the child. The geometric ratio and its perturbation transfer remain subsequent calculations, not assumptions inserted into this clock law.

---

## 7. What is fixed, and what remains open

The boundary system is now

\[
\boxed{
\begin{aligned}
\tau_H(t_P)&=t_P-t_{\rm form},\\
\Phi(t_P)&=\eta_C(t_P-t_{\rm form}),\\
J_H(t_P)&=2\beta_H(t_P),\\
V'(t_P)&=a(t_P-t_{\rm form})\beta_H(t_P),\\
\Omega_\Sigma(t_P)&=\frac{a\Phi}{R_{\rm BH}}.
\end{aligned}
}
\tag{28}
\]

Its inputs are cleanly separated:

| Input | Source |
|---|---|
| (x_H(t_P)), (R_{\rm BH}(t_P)), (m_H(t_P)), (eta_H(t_P)) | Parent (Lambda)LTB collapse [E] |
| (a(	au)), (eta_C(	au)), (eta_\infty) | Child Einstein–FLRW dynamics [E within the RI metric ansatz] |
| parent event horizon (leftrightarrow) child particle-horizon history | CSBHI causal correspondence [C] |
| (N_H=1) | Same-clock, no-impulse cohort identification [C] |
| (mu^{1/3}) shell ordering | Homogeneous spherical mass map [E/C] |
| (a(0)=1), (	au=0) at formation | Reciprocal boundary normalization [C] |
| observed age and horizon radii | Not used; reserved for validation |

What remains open is no longer an unspecified clock function. Step 4 must:

1. choose one published regular compensated (Lambda)LTB profile;
2. integrate its event horizon and optical integrating factor;
3. evaluate the two sides of Equation (26);
4. test formation and de Sitter asymptotes;
5. quantify any residual rather than absorbing it into (N_H) or (Omega_\Sigma).

If Equation (26) holds for a recursion-consistent profile, the collapse and child histories share one physical clock and one homogeneous shell ordering. If it fails, the failure localizes the missing physics: pressure, radiation, rotation, a nontrivial cohort lapse, or a modification of the shell correspondence. It does not erase the reciprocal infall–expansion relation.

### Subsequent benchmark result

The [full-history shell-clock test](note.html?src=full_history_test_of_the_collapse_cohort_shell_clock) finds the second outcome for the selected compensated ΛLTB profile. The endpoint powers agree, but \(N_H=1\) reconstructs an intermediate equation of state outside the nonnegative dust–radiation–vacuum domain. The boundary reduction to one lapse remains valid; the unit-lapse selection does not.

---

## Result

> A matter-filled parent collapse and the reciprocal child do not require three independent map functions. Their two null embeddings reduce the freedom to one cohort lapse (N_H=d\tau/dt_P). Identifying each freely falling parent cohort with the same clock carried into the child sets (N_H=1), so the map is simply (Phi(t_P)=\eta_C(t_P-t_{\rm form})); optical frequency continuity gives the same normalization. The angular factor is then computed as (Omega_\Sigma=a\Phi/R_{\rm BH}), beginning at unity at the regular formation anchor and evolving thereafter. Homogeneous shell ordering supplies the decisive test: the parent mass fraction swept by the event horizon must equal the cube of the child's conformal-progress fraction. The next numerical calculation can now test that relation without fitting the child age or horizons.
