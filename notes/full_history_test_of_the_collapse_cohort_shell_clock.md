# Full-History Test of the Collapse-Cohort Shell Clock

*The global horizon-adapted calculation and the first functional verdict on the proposed parent–child synchronization.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-06.

**Prerequisites:** [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system); [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [The Late Event-Horizon Tail](note.html?src=late_event_horizon_tail_compensated_ltblambda).

**Status:** Controlled asymptotic full-history test. The event-horizon crossing history is calculated in a horizon-adapted variable and tested against the proposed shell clock. The endpoint powers agree, but the intermediate history cannot be produced by nonnegative dust, radiation, and vacuum energy under the same-clock identification. Tiered **[E]** ΛLTB and FLRW identities, **[N]** numerical horizon reconstruction, **[C]** CSBHI shell-clock test, **[O]** replacement synchronization law.

---

## 1. The proposed clock

The collapse-to-child boundary system proposed

\[
\tau=t_P-t_{\rm form}
\tag{1}
\]

and

\[
\boxed{
\mu_H(t_P)
\equiv
\frac{m(x_H(t_P))}{M_f}
=
\left[
\frac{\eta_C(\tau)}{\eta_\infty}
\right]^3
}.
\tag{2}
\]

The cube in Equation (2) comes from homogeneous spherical shell ordering. Equation (1) is the additional claim that parent dust proper time and child comoving proper time advance at the same rate.

The endpoint calculations found two successes:

- regular formation gives \(\mu_H\propto\tau^3\);
- the stationary tail gives \(H_{\Lambda,C}=\sqrt3H_{\Lambda,P}\), conditionally implying \(\Lambda_C=3\Lambda_P\).

The present calculation tests the complete function between them.

---

## 2. A horizon-adapted variable [E]

Let

\[
\delta(x_P)
\equiv
t_{\rm col}(x_P)-t_H(x_P)
\tag{3}
\]

be the proper time remaining before shell focusing when the event horizon crosses shell \(x_P\). Near focusing, every regular dust shell has the universal form

\[
Y
=
\left(\frac{9Gm}{2}\right)^{1/3}
\delta^{2/3}
+O(k).
\tag{4}
\]

The local trapping surface \(Y=2Gm\) corresponds to \(\delta=4Gm/3\). Define

\[
\boxed{
u(x_P)
\equiv
\ln\!\left(\frac{3\delta}{4Gm}\right)
}.
\tag{5}
\]

Then \(u=0\) is the trapping surface and \(u>0\) places the event horizon outside it. This variable preserves the distinction even when the two radii agree to nearly machine precision.

Writing

\[
F
=
\frac{2Gm}{Y}-k+H_{\Lambda,P}^2Y^2,
\tag{6}
\]

the outgoing radial null equation gives

\[
\frac{du}{dx_P}
=
\frac{t'_{\rm col}}{\delta}
\left(
1-\frac{\sqrt F}{\sqrt{1-k}}
\right)
-
\frac{m'}{m}
\left[
1+
\frac{e^{-u/3}}{2\sqrt{1-k}}
\right].
\tag{7}
\]

Equation (7) is the event-horizon generator expressed as its logarithmic displacement from the trapping surface. It is integrated inward from the stationary late-time branch.

The enormous separation between the kiloparsec profile and the seed horizon makes a matched expansion more stable than direct subtraction. On the outer branch, Equation (7) gives

\[
u_{\rm out}
=
\frac{6(Gm)'}{t'_{\rm col}}
+\cdots,
\tag{8}
\]

so

\[
t_H
=
t_{\rm col}
-\frac{4Gm}{3}\left[1+O(u_{\rm out})\right].
\tag{9}
\]

The outer solution is matched to a direct implicit integration of Equation (7) through the central peel-away region. The reported history is therefore a controlled horizon/trapping expansion, not a replacement of the event horizon by the trapping surface.

For the selected profile, \(k<3\times10^{-11}\). The omitted correction in Equation (4) is therefore negligible throughout the horizon-crossing layer used for the intermediate test.

---

## 3. The formation anchor is ultraviolet-sensitive [N]

The regular center of this compensated profile has

\[
Gm=m_3x_P^3+\cdots,
\qquad
k=k_2x_P^2+\cdots,
\qquad
t_{\rm col}=t_0+t_4x_P^4+\cdots.
\tag{10}
\]

The absence of a quadratic term makes the central collapse extraordinarily simultaneous. Integrating Equation (7) in \(-\ln x_P\) gives a finite event-horizon lead,

\[
\delta_0
\simeq
5.1\times10^{-61}\ \mathrm{Mpc}/c
\simeq
5.3\times10^{-47}\ \mathrm{s}.
\tag{11}
\]

Halving the logarithmic integration step changes Equation (11) by approximately \(0.3\%\), and changing the matching shell from \(x_P=0.008\) to \(0.012\) changes it below the displayed precision.

Equation (11) is approximately \(9.8\times10^{-4}\) Planck times. Classical dust cannot assign physical meaning to that absolute number or resolve whether the central shell-focusing event is censored at that separation. Consequently, the formation coefficient and the absolute conformal interval inferred from it are ultraviolet-sensitive. They should not be promoted as predictions.

The *shape* test below does not depend on that normalization: logarithmic derivatives remove \(\eta_\infty\) and the central coefficient.

---

## 4. Reconstructing the child history [C/N]

Equation (2) requires

\[
\eta_{\rm req}
=
\eta_\infty\mu_H^{1/3}.
\tag{12}
\]

Since \(d\eta_C/d\tau=1/a_C\), differentiation gives

\[
\boxed{
a_{\rm req}
=
\frac{3\mu_H^{2/3}}
{\eta_\infty\dot\mu_H}
}.
\tag{13}
\]

The corresponding expansion rate and effective equation of state are

\[
H_{\rm req}
=
\frac{d\ln a_{\rm req}}{dt_P},
\tag{14}
\]

\[
w_{\rm req}
=
-1-
\frac{2\dot H_{\rm req}}
{3H_{\rm req}^2}.
\tag{15}
\]

Outside the microscopic formation layer, the event horizon lies extremely close to the trapping surface in shell coordinates. Its crossing-to-focusing interval remains seconds while the shell assembly history spans years to tens of billions of years. The distinction is retained in Equation (7), but it does not materially alter the following intermediate values.

| Swept mass \(\mu_H\) | Parent time since formation | \(H_{\rm req}/H_{\Lambda,C}\) | \(w_{\rm req}\) | nonnegative-fluid lower bound |
|---:|---:|---:|---:|---:|
| 0.01 | \(7.12\times10^6\) yr | 1032.13 | -0.082 | \(-9.4\times10^{-7}\) |
| 0.10 | \(1.37\times10^8\) yr | 63.83 | -0.337 | -0.00025 |
| 0.25 | \(5.53\times10^8\) yr | 18.96 | -0.420 | -0.0028 |
| 0.50 | \(2.33\times10^9\) yr | 4.93 | -0.437 | -0.041 |
| 0.75 | \(7.68\times10^9\) yr | 1.69 | -0.602 | -0.352 |
| 0.90 | \(1.67\times10^{10}\) yr | 1.09 | -0.882 | -0.842 |
| 0.99 | \(4.04\times10^{10}\) yr | 0.993 | -1.002 | -1.015 |

Changing both numerical differentiation scales by a factor of two changes the central three displayed \(w_{\rm req}\) values by less than \(6\times10^{-4}\).

---

## 5. The nonnegative-fluid test [E/C]

For a spatially flat child containing nonnegative dust, radiation, and vacuum energy,

\[
H_A^2
=
\frac{8\pi G}{3}
(\rho_m+\rho_r+\rho_\Lambda),
\tag{16}
\]

\[
w_{\rm eff}
=
\frac{\rho_r/3-\rho_\Lambda}
{\rho_m+\rho_r+\rho_\Lambda}.
\tag{17}
\]

With \(H_{\Lambda,C}^2=(8\pi G/3)\rho_\Lambda\) and \(\rho_m,\rho_r\ge0\), Equation (17) obeys the model-independent inequality

\[
\boxed{
w_{\rm eff}
\ge
-\frac{H_{\Lambda,C}^2}{H_A^2}
}.
\tag{18}
\]

The reconstructed history violates Equation (18) through most of the intermediate collapse. At half the final swept mass, for example,

\[
w_{\rm req}=-0.437,
\qquad
-\frac{H_{\Lambda,C}^2}{H_{\rm req}^2}
=-0.041.
\tag{19}
\]

Radiation cannot repair the discrepancy because its positive pressure raises \(w_{\rm eff}\). Matching the reconstructed curve would require a negative-density component, an additional negative-pressure component, or a different parent–child clock.

---

## 6. Verdict

The selected compensated ΛLTB collapse passes both endpoint tests but fails the middle-history test under Equations (1) and (2):

1. **Formation power:** the exact null generator opens with the required cubic mass power, although its coefficient lies beyond the classical regime.
2. **Late-time power:** the event-horizon tail reconstructs de Sitter expansion with \(H_{\Lambda,C}=\sqrt3H_{\Lambda,P}\).
3. **Intermediate shape:** the reconstructed effective pressure is too negative to arise from nonnegative dust, radiation, and vacuum energy.

This is not a failure of the reciprocal ansatz \(a=1/r\), the infall–expansion correspondence, or the collapse/child interpretation. It rejects the conjunction of four narrower choices:

- this compensated dust profile as the parent benchmark;
- the direct mass-volume identity in Equation (2);
- the unit lapse \(d\tau/dt_P=1\);
- a child restricted to nonnegative dust, radiation, and vacuum energy.

The most economical correction is a nontrivial cohort lapse

\[
N_H(t_P)
\equiv
\frac{d\tau}{dt_P},
\tag{20}
\]

because it changes the synchronization while preserving shell ordering, both endpoint geometries, and the reciprocal interior. The calculation has therefore converted the vague “horizon-map problem” into a specific target: determine whether the null geometry fixes an evolving \(N_H\) that restores Equation (18).

---

## Reproducibility

The profile reconstruction, Λ-consistent shell evolution, marginal tail, horizon-adapted formation integration, shell-clock reconstruction, and differentiation-scale checks are implemented in [global_ltblambda_event_horizon.mjs](../scripts/global_ltblambda_event_horizon.mjs).

---

## References

1. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
2. M. H. A. Firouzjaee and R. Mansouri, “Asymptotically FRW Black Holes,” *General Relativity and Gravitation* **42**, 2431–2452 (2010), [arXiv:0812.5108](https://arxiv.org/abs/0812.5108).
3. [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system); [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [The Late Event-Horizon Tail](note.html?src=late_event_horizon_tail_compensated_ltblambda), this project.
