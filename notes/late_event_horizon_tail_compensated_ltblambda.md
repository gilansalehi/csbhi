# The Late Event-Horizon Tail of a Compensated ΛLTB Collapse

*A controlled endpoint calculation for the collapse-cohort horizon map.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [Asymptotic Consistency of the Collapse-Cohort Map](note.html?src=asymptotic_consistency_of_the_collapse_cohort_map).

**Status:** Endpoint result. The marginal-shell exponent is established analytically and reproduced numerically. Its transfer to the event-horizon swept-mass tail is conditional on the standard stationary-future boundary condition. The subsequent full-history test is linked in Section 7. Tiered **[E]** established ΛLTB dynamics, **[N]** numerical quadrature, **[C]** CSBHI shell-clock consequence.

---

## 1. The remaining endpoint question

The shell-clock proposal identifies the parent mass fraction swept by the black-hole event horizon with the cube of the child's conformal progress:

\[
\mu_H(t_P)
=
\frac{m(x_H(t_P))}{M_f}
=
\left[
\frac{\eta_C(t_P-t_{\rm form})}{\eta_\infty}
\right]^3.
\tag{1}
\]

If the parent tail has

\[
1-\mu_H(t_P)
\propto
e^{-\lambda t_P},
\tag{2}
\]

then the same-clock map gives

\[
H_{\Lambda,C}=\lambda.
\tag{3}
\]

The unresolved coefficient was therefore the decay rate of the parent event horizon's remaining unswept mass.

---

## 2. Λ-consistent parent shells [E/N]

Each parent dust shell obeys

\[
\dot Y^2
=
\frac{2Gm(x_P)}{Y}
-k(x_P)
+H_{\Lambda,P}^2Y^2,
\qquad
H_{\Lambda,P}^2=\frac{\Lambda_P}{3}.
\tag{4}
\]

The previous benchmark reconstructed \(m(x_P)\) from the matter-era parametric solution used by the source. The present calculation instead imposes the common bang time directly on Equation (4):

\[
t_i
=
\int_0^{Y_i}
\frac{dY}{
\sqrt{2Gm/Y-k+H_{\Lambda,P}^2Y^2}
}.
\tag{5}
\]

At \(z_i=300\), restoring Λ changes the reconstructed mass by only \(2.6\times10^{-8}\). The asymptotic captured family remains

\[
x_b=2.90966\,\sigma,
\qquad
M_f=5.14754\times10^5M_\odot.
\tag{6}
\]

The correction is negligible for the quoted mass but removes an avoidable inconsistency from the endpoint calculation.

---

## 3. The marginal shell has two dwell passages [E]

Define the distance from marginal binding by

\[
\epsilon(x_P)
=
k(x_P)
-3\left[Gm(x_P)H_{\Lambda,P}\right]^{2/3}.
\tag{7}
\]

For \(x_P\lt x_b\), the shell recollapses and \(\epsilon>0\). Near the unstable static radius

\[
Y_s
=
\left(
\frac{Gm}{H_{\Lambda,P}^2}
\right)^{1/3},
\tag{8}
\]

write \(Y=Y_s+\xi\). Equation (4) becomes

\[
\dot\xi^2
=
\omega^2\xi^2-\epsilon+\cdots,
\qquad
\omega=\sqrt3\,H_{\Lambda,P}.
\tag{9}
\]

The turning displacement scales as \(|\xi_{\rm turn}|\propto\sqrt\epsilon\). The time required to approach it from a fixed inner radius is therefore

\[
t_{\rm turn}(x_P)
=
-\frac{1}{2\omega}
\ln(x_b-x_P)
+O(1).
\tag{10}
\]

Equation (10) describes only the expanding leg. Dust collapse is time-symmetric about turnaround: the shell encounters the same logarithmic dwell again while departing \(Y_s\). Thus

\[
\boxed{
t_{\rm col}(x_P)
=
-\frac{1}{\omega}
\ln(x_b-x_P)
+O(1)
}.
\tag{11}
\]

Equivalently,

\[
\boxed{
x_b-x_P
\propto
e^{-\sqrt3H_{\Lambda,P}t_{\rm col}}
}.
\tag{12}
\]

The factor of two belongs in the *time coefficient*, because complete collapse includes two dwell passages. Omitting the return leg doubles the inferred decay rate.

---

## 4. Direct quadrature [N]

The shell times were evaluated from Equation (4) by quadrature. Halving the coordinate gap \(x_b-x_P\) measures the logarithmic rate without fitting an additive time constant.

| \((x_b-x_P)/x_b\) | one-way rate / \(2\omega\) | complete-collapse rate / \(\omega\) |
|---:|---:|---:|
| \(10^{-2}\) | 0.99340 | 0.99340 |
| \(3\times10^{-3}\) | 0.99605 | 0.99605 |
| \(10^{-3}\) | 0.99814 | 0.99814 |
| \(3\times10^{-4}\) | 0.99927 | 0.99927 |
| \(10^{-4}\) | 0.99970 | 0.99970 |

Both columns converge to unity. The one-way turning rate is \(2\omega\); the complete-collapse rate is \(\omega\), exactly as Equations (10)–(12) require.

The calculation is reproducible in [global_ltblambda_event_horizon.mjs](../scripts/global_ltblambda_event_horizon.mjs).

---

## 5. From shell focusing to the event horizon [E/C]

The black-hole event horizon is not the local trapping horizon. Their distinction remains essential during formation. At late times, however, the completed parent approaches a stationary black hole with finite radius and finite mass \(M_f\).

Let \(\Delta_H(x_P)\) be the parent dust time between event-horizon crossing and shell focusing:

\[
t_H(x_P)
=
t_{\rm col}(x_P)-\Delta_H(x_P).
\tag{13}
\]

If the event horizon approaches the final stationary black-hole horizon, its crossing radius approaches a finite value. Equation (4) then gives a finite limit for \(\Delta_H\). For this seed, the limiting free-fall interval from the local trapping radius to shell focusing is approximately

\[
\Delta_{\rm trap}
\longrightarrow
\frac{4GM_f}{3}
=3.38\ \mathrm{s}.
\tag{14}
\]

The precise event-horizon value need not equal Equation (14). Only its boundedness matters. A bounded subtraction cannot change the logarithmic divergence in Equation (11), so

\[
x_b-x_H(t_P)
\propto
e^{-\omega t_P}.
\tag{15}
\]

Because \(m'(x_b)\) is finite and nonzero,

\[
\boxed{
1-\mu_H(t_P)
\propto
e^{-\sqrt3H_{\Lambda,P}t_P}
}.
\tag{16}
\]

Equation (16) does not replace the event horizon with the trapping horizon. It uses the completed stationary future to show that their finite late-time separation cannot alter the exponent.

---

## 6. Conditional recursive coefficient [C]

Combining Equations (3) and (16) gives

\[
\boxed{
H_{\Lambda,C}
=
\sqrt3\,H_{\Lambda,P}
}.
\tag{17}
\]

Since \(\Lambda=3H_\Lambda^2\),

\[
\boxed{
\Lambda_C=3\Lambda_P
}.
\tag{18}
\]

This coefficient is conditional on the shell clock, the same parent–child proper-time identification, and a stationary parent future. It is not a derivation of the reciprocal ansatz and does not yet establish the intermediate history.

It does close the late endpoint more tightly than before: the remaining global null integration can change Equation (18) only by invalidating the stationary bounded-gap condition, not by altering the verified marginal-shell dwell.

---

## 7. Subsequent full-history result

The full event-horizon generator \(x_H(t_P)\) is numerically multiscale: the compensated profile spans kiloparsecs, while the final seed horizon is only \(1.52\times10^6\) km. Near the stationary tail, the event horizon and trapping horizon can differ by roughly machine precision when expressed in the comoving shell coordinate.

The [full-history calculation](note.html?src=full_history_test_of_the_collapse_cohort_shell_clock) uses the horizon-adapted logarithmic offset demanded by this scale separation. Its late boundary condition remains

\[
\lambda=\sqrt3H_{\Lambda,P}.
\tag{19}
\]

The endpoint result survives. The intermediate history rejects the unit-lapse shell clock for this benchmark and isolates an evolving cohort lapse as the next target.

---

## References

1. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
2. M. H. A. Firouzjaee and R. Mansouri, “Asymptotically FRW Black Holes,” *General Relativity and Gravitation* **42**, 2431–2452 (2010), [arXiv:0812.5108](https://arxiv.org/abs/0812.5108).
3. [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [Asymptotic Consistency of the Collapse-Cohort Map](note.html?src=asymptotic_consistency_of_the_collapse_cohort_map), this project.
