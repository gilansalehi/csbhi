# Asymptotic Consistency of the Collapse-Cohort Map

*Step six of the collapse-cohort horizon-map calculation: formation, asymptotically stationary accretion, and the child de Sitter future.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system); [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [Optical Transfer Through a Matter-Filled Parent Collapse](note.html?src=optical_transfer_through_compensated_ltb_collapse).

**Status:** Exact endpoint analysis conditional on the collapse-cohort correspondence. Formation regularity and the child reconstruction from a general parent mass-tail exponent are analytic. The late stationary limit fixes that exponent conditionally; the intermediate event-horizon history remains numerical. Tiered **[E]** established asymptotics, **[N]** marginal-shell quadrature, **[C]** CSBHI correspondence, **[O]** parent null integration.

**Notation:** [Glossary](note.html?src=cosmological_glossary). Set \(c=1\), retain \(G\), and define

\[
\Delta t\equiv t_P-t_{\rm form},
\qquad
\mu_H(t_P)\equiv\frac{m(x_H(t_P))}{M_f}.
\tag{1}
\]

The proposed shell clock is

\[
\boxed{
\mu_H(t_P)
=
\left[
\frac{\eta_C(\Delta t)}{\eta_\infty}
\right]^3
},
\qquad
\tau=\Delta t.
\tag{2}
\]

---

## 1. Formation: the map opens regularly [E/C]

Regularity at the parent center gives

\[
m(x)=m_3x^3+O(x^5),
\qquad
x_H(t_P)=\gamma\Delta t+O(\Delta t^2).
\tag{3}
\]

Therefore

\[
\mu_H(t_P)
=
K\Delta t^3+O(\Delta t^4),
\qquad
K\equiv\frac{m_3\gamma^3}{M_f}.
\tag{4}
\]

The child normalization \(a_C(0)=1\) gives

\[
\eta_C(\tau)
=
\tau+O(\tau^2).
\tag{5}
\]

Substitution in Equation (2) fixes the complete child conformal interval:

\[
\boxed{\eta_\infty=K^{-1/3}}.
\tag{6}
\]

The cubic power is regular spherical volume; its coefficient is the first nontrivial bridge between the parent event-horizon tangent and the complete child conformal history.

The angular geometry is regular as well. Along the parent event horizon,

\[
\frac{dR_{\rm BH}}{dt_P}
=
\dot Y_H+\sqrt{1+2E_H}
\longrightarrow 1
\tag{7}
\]

at the regular center. Hence

\[
R_{\rm BH}=\Delta t+O(\Delta t^2).
\tag{8}
\]

The child particle-horizon areal radius is

\[
P=a_C\eta_C=\Delta t+O(\Delta t^2),
\tag{9}
\]

so the angular conformal factor begins at

\[
\boxed{
\Omega_\Sigma
\equiv
\frac{P}{R_{\rm BH}}
\longrightarrow 1
}.
\tag{10}
\]

This is a tangent match, not an equality imposed for later cross-sections.

Finally, regularity of \(A=Y'/\sqrt{1+2E}\) and absence of shell crossing make the optical integrating factor \(\beta_H\) finite. Thus

\[
J_H=2\beta_H,
\qquad
V'=a_C\beta_H
\longrightarrow
\beta_H
\tag{11}
\]

at formation. Neither massive cohorts nor radial light receive an endpoint impulse.

---

## 2. A general late parent mass tail [E/C]

Do not assume its exponent yet. Write the event horizon’s remaining unswept mass as

\[
1-\mu_H(t_P)
=
C\,e^{-\lambda\Delta t}
+o\!\left(e^{-\lambda\Delta t}\right),
\qquad
C>0,\quad\lambda>0.
\tag{12}
\]

Equation (2) then gives

\[
\eta_C(\Delta t)
=
\eta_\infty
\left[
1-\frac{C}{3}e^{-\lambda\Delta t}
+o\!\left(e^{-\lambda\Delta t}\right)
\right],
\tag{13}
\]

and therefore

\[
\boxed{
\eta_\infty-\eta_C
=
\frac{\eta_\infty C}{3}
e^{-\lambda\Delta t}
+o\!\left(e^{-\lambda\Delta t}\right)
}.
\tag{14}
\]

The scale factor reconstructed directly from the shell clock is

\[
a_{\rm req}
=
\frac{3\mu_H^{2/3}}
{\eta_\infty\dot\mu_H}.
\tag{15}
\]

Using Equation (12),

\[
\boxed{
a_{\rm req}
=
\frac{3}{\eta_\infty\lambda C}
e^{\lambda\Delta t}
\left[1+o(1)\right]
},
\qquad
\boxed{
H_{\rm req}\longrightarrow\lambda
}.
\tag{16}
\]

This is the sharp late-time result: **the child de Sitter Hubble rate equals the decay exponent of the parent event horizon’s remaining swept mass, measured in the same parent dust time.**

\[
\boxed{H_{\Lambda,C}=\lambda}.
\tag{17}
\]

No child density parameter was inserted to obtain Equation (17).

---

## 3. The conditional ΛLTB coefficient [C/O]

The marginal parent shell has local instability rate

\[
\omega=\sqrt3\,H_{\Lambda,P}.
\tag{18}
\]

Because its turning displacement scales as the square root of its distance from the marginal shell, the one-way turning time contains \(-\ln(x_b-x)/(2\omega)\). The full collapse retraces the dwell and therefore gives

\[
x_b-x
\propto
e^{-\sqrt3H_{\Lambda,P}t_P}.
\tag{19}
\]

If the global event horizon crosses each near-marginal shell at a time differing from its collapse time only by a bounded amount, then

\[
\lambda=\sqrt3H_{\Lambda,P}.
\tag{20}
\]

Equations (17) and (20) would imply

\[
\boxed{
H_{\Lambda,C}=\sqrt3H_{\Lambda,P}
},
\qquad
\boxed{
\Lambda_C=3\Lambda_P
}.
\tag{21}
\]

Only Equation (17) is structurally fixed by the shell clock. Direct quadrature verifies the complete-collapse coefficient in Equation (19). Equation (21) remains conditional on the event horizon approaching the final stationary radius with a bounded crossing-to-focusing interval; see [The Late Event-Horizon Tail](note.html?src=late_event_horizon_tail_compensated_ltblambda).

---

## 4. An asymptotically stationary parent is compatible with a growing child [E/C]

Let the parent black-hole event horizon approach a finite areal radius,

\[
R_{\rm BH}(t_P)\longrightarrow R_+,
\qquad
\frac{dR_{\rm BH}}{dt_P}\longrightarrow0.
\tag{22}
\]

The mapped child particle-horizon radius does not approach \(R_+\). From Equations (13) and (16),

\[
P=a_C\eta_C
\sim
\frac{3}{\lambda C}e^{\lambda\Delta t}.
\tag{23}
\]

Consequently,

\[
\boxed{
\Omega_\Sigma
=
\frac{P}{R_{\rm BH}}
\propto
e^{\lambda\Delta t}
}.
\tag{24}
\]

This is not a failure of the angular match. It is the conformal local-to-global conversion: a finite parent black-hole cross-section corresponds to an ever larger child particle-horizon sphere. Equal physical areas hold only at the formation tangent, where \(\Omega_\Sigma\to1\).

The parent can therefore become arbitrarily close to stationary while the child approaches de Sitter expansion. The advancing child clock is carried by successive horizon cohorts and the conformal factor, not by continued macroscopic growth of \(R_{\rm BH}\).

---

## 5. Optical late-time behavior [E/C]

Parameterize the parent optical endpoint generally by

\[
\beta_H(t_P)
\sim
B\,e^{-q\Delta t},
\tag{25}
\]

where \(q\) is fixed by the parent radial-expansion integral and the exterior clock normalization. The horizon and child phase derivatives behave as

\[
J_H=2\beta_H
\sim
2B e^{-q\Delta t},
\tag{26}
\]

\[
V'=a_C\beta_H
\propto
e^{(\lambda-q)\Delta t}.
\tag{27}
\]

The coordinate derivative \(V'\) may grow, remain finite, or decay. The physical child frequency does not inherit that coordinate behavior:

\[
\boxed{
\nu_C\propto\frac{V'}{a_C}
=
\beta_H
\sim
B e^{-q\Delta t}
}.
\tag{28}
\]

Thus the same redshift measured by the parent dust is carried continuously into the child. In a homogeneous parent de Sitter exterior, \(\beta=1/a_P\) and \(q=H_{\Lambda,P}\); the matter-filled collapse supplies the finite path-dependent correction through the integrated longitudinal expansion.

---

## 6. Surface gravity is not the shell clock [E/C]

A stationary black hole has a surface gravity \(\kappa_{\rm BH}\), which governs the relation between suitable affine and stationary horizon parameters. The collapse-cohort map instead uses parent dust proper time,

\[
v_H=t_P.
\tag{29}
\]

These parameters are not interchangeable. Therefore

\[
H_{\Lambda,C}=\kappa_{\rm BH}
\tag{30}
\]

is not an endpoint requirement of the present construction. It could emerge only after the completed geometry derives the conversion between parent cosmic time, a stationary Killing normalization, and an affine horizon parameter.

The shell clock gives the correct comparison:

\[
H_{\Lambda,C}
=
-\lim_{t_P\to\infty}
\frac{d}{dt_P}\ln\!\left(1-\mu_H\right).
\tag{31}
\]

This resolves the apparent competition between the marginal-shell exponent and the surface-gravity clue: they refer to different parent clocks. Equation (31) is the one selected by the collapse-day cohort construction.

---

## 7. Step 6 result

> The proposed collapse-cohort map has no obstruction in any of the three endpoint limits. At formation, regular spherical volume gives \(\mu_H\propto\Delta t^3\), the parent and child horizon radii share the same tangent, \(\Omega_\Sigma\to1\), and the optical transfer remains finite. At late times, any parent swept-mass tail \(1-\mu_H\propto e^{-\lambda t_P}\) reconstructs a child de Sitter scale factor \(a_C\propto e^{\lambda\tau}\), fixing \(H_{\Lambda,C}=\lambda\). A finite stationary parent horizon is compatible with the growing child because the angular conformal factor, rather than the parent area, grows exponentially. Surface gravity does not replace \(\lambda\): it governs a different horizon parameter unless a clock conversion is derived.

The endpoint structure is therefore consistent. The one decisive number is now isolated:

\[
\boxed{
\lambda
=
-\lim_{t_P\to\infty}
\frac{d}{dt_P}
\ln\!\left[
1-\frac{m(x_H(t_P))}{M_f}
\right]
}.
\tag{32}
\]

The late stationary limit now supplies Equation (32) conditionally as \(\lambda=\sqrt3H_{\Lambda,P}\). Integrating the global ΛLTB event horizon through the intermediate collapse remains necessary to test the complete shell-clock history rather than its endpoint alone.

---

## References

1. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
2. R. Codur and C. Marinoni, “Redshift drift in radially inhomogeneous Lemaître–Tolman–Bondi spacetimes,” *Phys. Rev. D* **104**, 123531 (2021), [arXiv:2107.04868](https://arxiv.org/abs/2107.04868).
3. [The Shell Clock in a Compensated ΛLTB Collapse](note.html?src=shell_clock_benchmark_compensated_ltb); [Optical Transfer Through a Matter-Filled Parent Collapse](note.html?src=optical_transfer_through_compensated_ltb_collapse), this project.
