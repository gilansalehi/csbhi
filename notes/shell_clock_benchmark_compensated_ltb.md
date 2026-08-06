# The Shell Clock in a Compensated \(\Lambda\)LTB Collapse

*Step four of the collapse-cohort horizon-map calculation: a published profile, a reproducible parent-side benchmark, and the endpoint conditions on the proposed child clock.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [Selecting the Parent Collapse Benchmark](note.html?src=collapse_benchmark_selection); [The Collapse-to-Child Boundary System](note.html?src=collapse_to_child_boundary_system).

**Status:** Partial benchmark result. The published compensated profile and its trapping history are reconstructed numerically. The formation and late-time event-horizon constraints are derived analytically. The intermediate global event-horizon history is not supplied by the source and remains a numerical calculation. Tiered **[E]** established \(\Lambda\)LTB geometry, **[N]** numerical reconstruction, **[C]** conditional CSBHI correspondence, **[O]** open event-horizon integration.

---

## 1. The question

The boundary system proposed the shell-clock relation

\[
\boxed{
\mu_H(t_P)
=
\frac{m\!\left(x_H(t_P)\right)}{M_f}
=
\left[
\frac{\eta_C(t_P-t_{\rm form})}{\eta_\infty}
\right]^3
}.
\tag{1}
\]

Here \(x_H(t_P)\) is the **black-hole event-horizon** generator in the parent, \(M_f\) is the material mass of the complete captured shell family, and \(\eta_C/\eta_\infty\) is the child's fractional progress through its finite conformal interval.

Equation (1) is not another definition of the clock. The same-clock proposal already fixes

\[
\tau=t_P-t_{\rm form}.
\tag{2}
\]

The parent collapse and child FLRW solution must therefore produce the two sides of Equation (1) independently.

---

## 2. Published profile [E]

Use the spherical member of the broad compensated curvature-peak family constructed by Galoppo, Bruni, and Harada [1]:

\[
\mathcal R_{c,i}(u)
=
-A\left[
e^{-u^2/2}\left(1+\alpha u^2+\beta u^4\right)
-C_*
\right],
\qquad
u=\frac{x_P}{\sigma},
\tag{3}
\]

inside its compact support. The constant \(C_*\) makes the profile vanish at \(u=u_*\). Their regular black-hole-forming family sets

\[
\beta=\frac{\alpha}{2}-\frac18,
\qquad
u_*^2=
\frac{
2\left[
1-2\alpha+
\sqrt{(1-2\alpha)(3-10\alpha)}
\right]
}{
1-4\alpha
}.
\tag{4}
\]

For the representative profile used here,

\[
\alpha=0.225,
\qquad
\beta=-0.0125,
\qquad
\sigma=5\ {\rm kpc},
\qquad
A=1.7\times10^{-11},
\qquad
z_i=300.
\tag{5}
\]

The LTB curvature function follows from the published initial-data map,

\[
k(x_P)
=
\frac{2x_P\mathcal R'_{c,i}}
{1+2x_P\mathcal R'_{c,i}}.
\tag{6}
\]

We reconstruct the Misner–Sharp mass by imposing the paper's initial gauge \(Y_i=a_i x_P\) and common bang time on the exact dust parametric solution. This avoids replacing the mass with only the first term of its perturbative series.

The calculation is reproducible in the [benchmark script](../scripts/collapse_shell_clock_benchmark.mjs).

---

## 3. Parent-side reconstruction [N]

The reconstructed first zero of the initial density contrast is

\[
\boxed{x_{\rm OD}=1.98790\,\sigma},
\tag{7}
\]

in agreement with the published estimate \(x_{\rm OD}\simeq2\sigma\). The material mass inside that overdense core is

\[
\boxed{M_{\rm OD}=1.6894\times10^5\,M_\odot}.
\tag{8}
\]

The paper's future trapping-horizon formula places the central trapping event at \(t_P=84.66\ {\rm Mpc}/c\) and the trapping of the outer core at \(t_P=365.06\ {\rm Mpc}/c\). Their separation is approximately

\[
\boxed{\Delta t_{\rm FH}=9.15\times10^8\ {\rm yr}}.
\tag{9}
\]

These values reproduce the scale of the source's \(10^3\!-\!10^6\,M_\odot\) seed family and its extended shell-by-shell formation history.

### The trapping history is not the event-horizon history

The source calculates the local future trapping horizon \(Y=2Gm\). It explicitly notes that the radial null geodesics required for the global causal boundary are generally not analytically integrable and adopts a trapping criterion instead [1]. Consequently,

\[
x_{\rm FH}(t_P)\ne x_H(t_P)
\tag{10}
\]

during dynamical formation.

The following table records the reconstructed trapping history only. The last column is the conformal fraction that Equation (1) would require at the same *mass fraction*; it is not a claimed child solution.

| Trapped core mass fraction | Fraction of the core-trapping interval | Required \(\eta_C/\eta_\infty=\mu^{1/3}\) |
|---:|---:|---:|
| \(0.01\) | \(0.00185\) | \(0.21544\) |
| \(0.10\) | \(0.03517\) | \(0.46416\) |
| \(0.25\) | \(0.11488\) | \(0.62996\) |
| \(0.50\) | \(0.30569\) | \(0.79370\) |
| \(0.75\) | \(0.58860\) | \(0.90856\) |
| \(0.90\) | \(0.81710\) | \(0.96549\) |
| \(0.99\) | \(0.98049\) | \(0.99666\) |

Replacing \(x_H\) by \(x_{\rm FH}\) would make a visually complete graph but would answer the wrong question. Event horizons depend on the completed future; trapping horizons are local surfaces.

---

## 4. The captured family is fixed by \(\Lambda_P\) [E/N]

The overdense core is the paper's finite-time seed mass, but it is not the complete family of bound shells. Retain \(\Lambda_P\) in the parent shell equation:

\[
\dot Y^2
=
\frac{2Gm}{Y}
-k
+H_{\Lambda,P}^2Y^2,
\qquad
H_{\Lambda,P}^2=\frac{\Lambda_P}{3}.
\tag{11}
\]

For a fixed shell, the right-hand side has its minimum at

\[
Y_s
=
\left(\frac{Gm}{H_{\Lambda,P}^2}\right)^{1/3}.
\tag{12}
\]

The limiting shell between recollapse and eternal expansion satisfies

\[
\boxed{
k(x_b)
=
3\left[Gm(x_b)H_{\Lambda,P}\right]^{2/3}
}.
\tag{13}
\]

Using the Planck-background parameters employed by the source gives

\[
\boxed{x_b=2.90966\,\sigma},
\qquad
\boxed{M_f=m(x_b)=5.1475\times10^5\,M_\odot}.
\tag{14}
\]

This is a useful correction to the first setup. \(M_{\rm OD}\) is the seed mass assembled over the quoted finite formation interval; \(M_f\) in Equation (1) is the asymptotic bound mass. Positive \(\Lambda_P\) supplies a natural outer member of the captured shell family.

The source neglects \(\Lambda_P\) in its finite-time local-collapse estimates while retaining it in the background. Equation (13) instead asks an explicitly asymptotic question, so it restores the \(\Lambda_P\) term already present in the exact LTB field equation. The final solver should also reconstruct \(m(x)\) with that term retained from the initial slice; at \(z_i=300\), the correction to the matter-era mass reconstruction is negligible at the precision quoted here.

---

## 5. Formation endpoint: the cube survives [E/C]

Near a regular spherical center,

\[
m(x)=m_3x^3+O(x^5).
\tag{15}
\]

A regular outgoing event-horizon generator has

\[
x_H(t_P)
=
\gamma\left(t_P-t_{\rm form}\right)
+O\!\left((t_P-t_{\rm form})^2\right),
\tag{16}
\]

for a finite positive \(\gamma\). Therefore

\[
\boxed{
\mu_H(t_P)
\propto
\left(t_P-t_{\rm form}\right)^3
}.
\tag{17}
\]

On the child side, \(a(0)=1\) gives

\[
\eta_C(\tau)=\tau+O(\tau^2).
\tag{18}
\]

Both sides of Equation (1) consequently carry the same cubic formation power. This is a necessary success, but not yet a distinctive prediction: the power follows from regular spherical volume together with a regular null generator. Its coefficient is nontrivial. If

\[
\mu_H=K\left(t_P-t_{\rm form}\right)^3+\cdots,
\tag{19}
\]

then Equation (1) and \(a(0)=1\) require

\[
\boxed{\eta_\infty=K^{-1/3}}.
\tag{20}
\]

The actual event-horizon tangent therefore fixes the child's complete conformal interval. It is not free once the parent null history is known.

---

## 6. Late endpoint: a new exponent test [E/C]

Let \(x\) approach the limiting bound shell \(x_b\) from below. Write

\[
\epsilon(x)
\equiv
k(x)-3\left[Gm(x)H_{\Lambda,P}\right]^{2/3}.
\tag{21}
\]

For the profile above, \(\epsilon>0\) on the recollapsing side and vanishes linearly at \(x_b\). Expanding Equation (11) around the static radius in Equation (12) gives

\[
\dot Y^2
=
3H_{\Lambda,P}^2(Y-Y_s)^2-\epsilon+\cdots.
\tag{22}
\]

The nearly marginal shell spends a logarithmically long time near \(Y_s\). Its turning-point displacement obeys

\[
|Y_{\rm turn}-Y_s|
\propto
\sqrt{\epsilon}
\propto
\sqrt{x_b-x}.
\]

The local escape rate from the unstable static radius is
\(\omega=\sqrt3\,H_{\Lambda,P}\). The one-way expansion to the turning point contributes
\(-\ln(x_b-x)/(2\omega)\). Complete collapse contains that dwell twice—on approach to the turning point and again on departure—so its leading form is

\[
t_{\rm col}(x)
=
-\frac{1}{\sqrt3\,H_{\Lambda,P}}
\ln(x_b-x)+O(1).
\tag{23}
\]

The event-horizon crossing occurs after the same near-static dwell. If the explicit null integration confirms that its crossing time differs from the shell collapse time only by a bounded term, it inherits the same leading divergence. Under that still-unverified condition,

\[
x_b-x_H(t_P)
\propto
e^{-\sqrt3 H_{\Lambda,P}t_P}.
\tag{24}
\]

Because \(m'(x_b)\) is finite,

\[
1-\mu_H(t_P)
\propto
e^{-\sqrt3 H_{\Lambda,P}t_P}.
\tag{25}
\]

The child de Sitter tail obeys

\[
\eta_\infty-\eta_C(\tau)
\propto
e^{-H_{\Lambda,C}\tau}.
\tag{26}
\]

Expanding Equation (1) near \(\mu_H=1\) and using the same clock \(\tau=t_P-t_{\rm form}\) gives the asymptotic compatibility condition

\[
\boxed{
H_{\Lambda,C}
=
\sqrt3\,H_{\Lambda,P}
}
\qquad
\Longleftrightarrow
\qquad
\boxed{
\Lambda_C=3\Lambda_P
}.
\tag{27}
\]

Equation (27) is not inserted into the benchmark and is not yet a completed recursive law. It is the conditional late-time prediction of four stated ingredients: the \(\Lambda\)LTB marginal-shell exponent, a bounded interval between event-horizon crossing and shell focusing in the stationary limit, the same cohort clock, and the cubic homogeneous shell map. The first is verified by direct quadrature in [The Late Event-Horizon Tail](note.html?src=late_event_horizon_tail_compensated_ltblambda); the second follows if the generator approaches the final stationary black-hole horizon. The full intermediate event-horizon history remains numerical.

---

## 7. The middle becomes a functional test

Once \(x_H(t_P)\) is known, Equation (1) can be tested without selecting child density fractions first. It reconstructs the conformal history

\[
\eta_{\rm req}(t_P)
=
\eta_\infty\,\mu_H(t_P)^{1/3}.
\tag{28}
\]

Differentiation then reconstructs the scale factor demanded by the shell clock:

\[
\boxed{
a_{\rm req}(t_P)
=
\frac{
3\mu_H(t_P)^{2/3}
}{
\eta_\infty\,\dot\mu_H(t_P)
}
}.
\tag{29}
\]

The formation coefficient in Equation (20) fixes \(\eta_\infty\), so Equation (29) has no remaining scale freedom. The decisive middle-history test is whether \(H_{\rm req}^2\) has the matter–radiation–vacuum form derived in RI I,

\[
H_{\rm req}^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}a_{\rm req}^{-3}
+\rho_{r0}a_{\rm req}^{-4}
+\rho_\Lambda
\right),
\tag{30}
\]

with nonnegative constant component densities. This is a shape test, not a fit to the observed age or horizon sizes.

---

## 8. What Step 4 establishes

The benchmark does not yet establish that the published collapse satisfies Equation (1) at every epoch. It establishes four narrower results:

1. **The published compensated profile is reproduced numerically.** Its core radius, mass scale, and extended trapping history agree with the source.
2. **The apparent horizon cannot substitute for the event horizon.** The source supplies the former, while the shell clock requires the latter.
3. **The complete shell family has a natural \(\Lambda_P\)-controlled endpoint.** The marginally bound shell fixes \(M_f\), rather than an arbitrary finite accretion cutoff.
4. **The shell endpoint power is sharp; the child coefficient remains conditional.** Regular formation supplies the cubic law, while the complete near-marginal collapse gives the shell rate \(\sqrt3H_{\Lambda,P}\). If the event horizon approaches the final stationary radius, its finite crossing-to-focusing interval preserves that rate and the shell clock gives \(H_{\Lambda,C}=\sqrt3H_{\Lambda,P}\).

The remaining numerical object is now unambiguous: integrate the global outgoing event-horizon generator through the full \(\Lambda\)LTB future, evaluate \(\mu_H(t_P)\), reconstruct \(a_{\rm req}\) from Equation (29), and compare Equation (30) over the intermediate history.

That calculation can confirm the shell clock, falsify the same-clock identification, or isolate the required correction. None of those outcomes changes the reciprocal infall–expansion correspondence itself.

---

## References

1. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
2. M. H. A. Firouzjaee and R. Mansouri, “Asymptotically FRW Black Holes,” *General Relativity and Gravitation* **42**, 2431–2452 (2010), [arXiv:0812.5108](https://arxiv.org/abs/0812.5108).
3. Planck Collaboration, “Planck 2018 Results. VI. Cosmological Parameters,” *Astronomy & Astrophysics* **641**, A6 (2020), [arXiv:1807.06209](https://arxiv.org/abs/1807.06209).
