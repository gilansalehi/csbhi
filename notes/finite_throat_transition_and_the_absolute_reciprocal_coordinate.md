# The Finite-Throat Transition and the Absolute Reciprocal Coordinate

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

The reciprocal ansatz \(a=1/r\) translates Alice's scale factor into Bob's radial coordinate, but a translation rule does not by itself locate the present epoch on Bob's diagram. The moving-null-boundary identity supplies the missing normalization. Let \(B(\tau)\) be Alice's cosmological event-horizon radius; if the horizon map identifies its history with the finite throat, then

\[
H_A=\frac{c+\dot B}{B}
\]

integrates exactly to

\[
\boxed{
r_0
=
\frac{B_H}{B_0}
\exp\!\left[-c\int_{\tau_H}^{\tau_0}\frac{d\tau}{B(\tau)}\right]
}.
\]

The absolute reciprocal coordinate is therefore fixed by the candidate throat history. No recombination model is required for this identity.

The observed expansion history reconstructs the target boundary and yields a second geometric result. Near the hot early universe, the cosmological event horizon behaves as

\[
B(y)\simeq y(R_p+B_0),
\qquad y\equiv a/a_0,
\]

not as the apparent horizon \(c/H\). A conservative thermal anchor at \(T=4\,\mathrm{MeV}\) gives \(y=4.19\times10^{-11}\) and an event-horizon radius of \(2.63\) light-years, while the apparent horizon is only \(2.77\times10^7\) metres. Conflating these two horizons produces a nine-order-of-magnitude error in the conditional parent mass.

If the first junction identifies Bob's Schwarzschild radius with this event horizon, immediate thermalization gives a conditional mass scale \(8.43\times10^{12}M_\odot\). One preceding throat e-fold gives \(3.10\times10^{12}M_\odot\). These are calibrated reconstruction targets, not predictions of parent collapse. They show that the finite-throat geometry can anchor the reciprocal coordinate with quantities already present in the model.

---

## 1. The normalization problem

Let Alice cross the newly formed parent black-hole event horizon at \(\tau=\tau_H\). Set

\[
a_H=1,
\qquad
r_H=1,
\tag{1}
\]

so that the reciprocal ansatz is

\[
a(\tau)=\frac{1}{r(\tau)}.
\tag{2}
\]

Alice's elapsed proper time fixes the origin and length of her clock. It does not, by itself, fix \(a_0/a_H\). Standard cosmological observations measure the normalized scale factor

\[
y\equiv\frac{a}{a_0}
\tag{3}
\]

through ratios such as \(1+z=1/y\). The absolute CSBHI normalization is

\[
y_H=\frac{a_H}{a_0}=r_0.
\tag{4}
\]

Determining Alice's present position on Bob's diagram is therefore the same problem as determining the normalized scale factor \(y_H\) of the first horizon crossing.

## 2. Exact solution in terms of the throat history

Let \(B(\tau)\) be the areal radius of Alice's ingoing cosmological event horizon. The moving-null-boundary calculation gives

\[
H_A=\frac{c+\dot B}{B}.
\tag{5}
\]

Rewrite Equation (5) as

\[
\frac{d\ln a}{d\tau}
=
\frac{c}{B}
+
\frac{d\ln B}{d\tau}.
\tag{6}
\]

Integrating from horizon entry to today gives

\[
\ln\frac{a_0}{a_H}
=
\ln\frac{B_0}{B_H}
+
c\int_{\tau_H}^{\tau_0}\frac{d\tau}{B(\tau)}.
\tag{7}
\]

Because \(a_H=1\) and \(r_0=1/a_0\),

\[
\boxed{
r_0
=
\frac{B_H}{B_0}
\exp\!\left[
-c\int_{\tau_H}^{\tau_0}\frac{d\tau}{B(\tau)}
\right]
}.
\tag{8}
\]

Equation (8) is the absolute normalization formula. It requires no equation of state and no recombination calculation. Once a finite-throat solution supplies \(B(\tau)\), Alice's present coordinate \(r_0\) follows directly.

If \(B\) is stationary, Equation (7) reduces to de Sitter expansion,

\[
\ln\frac{a_0}{a_H}=\frac{c(\tau_0-\tau_H)}{B}.
\tag{9}
\]

For a changing throat, the boundary ratio and the integral in Equation (8) contain the extra expansion that the asymptotic de Sitter boost cannot supply.

## 3. Reconstructing the target event horizon

Write the observed background as

\[
H(y)=H_0E(y),
\tag{10}
\]

\[
E(y)
=
\sqrt{
\Omega_r y^{-4}
+\Omega_m y^{-3}
+\Omega_\Lambda
}.
\tag{11}
\]

The physical cosmological event-horizon radius is

\[
\boxed{
B(y)
=
yR_H
\int_y^\infty\frac{dy'}{y'^2E(y')},
\qquad
R_H\equiv\frac{c}{H_0}
}.
\tag{12}
\]

The present particle and event horizons are

\[
R_p
=
R_H\int_0^1\frac{dy}{y^2E(y)},
\tag{13}
\]

\[
B_0
=
R_H\int_1^\infty\frac{dy}{y^2E(y)}.
\tag{14}
\]

For the parameters used in GD1,

\[
\int_0^1\frac{dy}{y^2E(y)}=3.180003,
\qquad
\int_1^\infty\frac{dy}{y^2E(y)}=1.149721.
\tag{15}
\]

Thus

\[
R_H=14.5073\;\mathrm{Gly},
\quad
R_p=46.1333\;\mathrm{Gly},
\quad
B_0=16.6794\;\mathrm{Gly},
\tag{16}
\]

and

\[
R_p+B_0=62.8126\;\mathrm{Gly}.
\tag{17}
\]

As \(y\to0\), the integral in Equation (12) approaches the complete conformal interval. Therefore

\[
\boxed{
B(y)
=
y(R_p+B_0)+O(y^2)
}.
\tag{18}
\]

The early event horizon shrinks linearly with the normalized scale factor. Its coefficient is the entire conformal future, not the instantaneous Hubble length.

## 4. Event horizon versus apparent horizon

The apparent horizon of the flat background is

\[
R_A(y)=\frac{c}{H(y)}.
\tag{19}
\]

During radiation domination,

\[
H(y)\simeq H_0\sqrt{\Omega_r}\,y^{-2},
\tag{20}
\]

so

\[
R_A(y)\propto y^2,
\qquad
B(y)\propto y.
\tag{21}
\]

Their ratio consequently diverges toward the hot early limit:

\[
\frac{B}{R_A}\propto\frac{1}{y}.
\tag{22}
\]

The event and apparent horizons coincide only in stationary de Sitter space. They are radically different during radiation domination.

This corrects an earlier estimate in this research thread. Identifying the early junction with \(c/H\) gave a Schwarzschild mass of order \(10^4M_\odot\). That radius was the apparent horizon, not the event horizon used by the finite-throat construction. The correct event-horizon radius at the same thermal scale is about nine orders of magnitude larger.

## 5. A conservative thermal anchor

The geometric formula in Equation (8) does not require a thermal model. A thermal landmark can nevertheless calibrate one point on the reconstructed boundary.

After thermalization, comoving entropy conservation gives

\[
aTg_{*s}^{1/3}=\text{constant}.
\tag{23}
\]

Taking the present CMB temperature

\[
T_0=2.7255\;\mathrm{K},
\tag{24}
\]

and a conservative lower thermalization temperature

\[
T_T=4\;\mathrm{MeV},
\tag{25}
\]

with

\[
g_{*s,T}=10.75,
\qquad
g_{*s,0}=3.909,
\tag{26}
\]

gives

\[
\boxed{
y_T
=
\frac{T_0}{T_T}
\left(\frac{g_{*s,0}}{g_{*s,T}}\right)^{1/3}
=4.19094\times10^{-11}
}.
\tag{27}
\]

Equation (18) then yields

\[
\boxed{
B_T=2.63244\;\mathrm{ly}
}.
\tag{28}
\]

The exact event-horizon integral changes this value by only about one part in \(10^9\).

At \(4\,\mathrm{MeV}\), the changing relativistic degrees of freedom are better handled directly. In natural units, the radiation-era rate is

\[
H_T\simeq
1.66\sqrt{g_{*,T}}\frac{T_T^2}{M_{\rm Pl}},
\qquad
g_{*,T}=10.75.
\tag{29}
\]

This gives

\[
H_T=10.84\;\mathrm{s^{-1}},
\qquad
R_{A,T}=2.766\times10^7\;\mathrm{m}.
\tag{30}
\]

Therefore

\[
\boxed{
\frac{B_T}{R_{A,T}}=9.00\times10^8
}.
\tag{31}
\]

This is the numerical form of the geometric distinction in Equation (21).

## 6. Conditional parent mass

Suppose the first null junction identifies Bob's Schwarzschild radius with Alice's event-horizon radius at crossing:

\[
R_S=B_H=\frac{2GM}{c^2}.
\tag{32}
\]

Let \(N_{\rm pre}\) count expansion between horizon crossing and the thermal landmark:

\[
a_T=e^{N_{\rm pre}}a_H.
\tag{33}
\]

Because \(a_H=1\),

\[
r_0=y_H=e^{-N_{\rm pre}}y_T.
\tag{34}
\]

The early event horizon scales as \(B\propto y\), so

\[
B_H\simeq e^{-N_{\rm pre}}B_T.
\tag{35}
\]

For immediate thermalization, \(N_{\rm pre}=0\):

\[
r_0=4.19094\times10^{-11},
\qquad
B_H=2.63244\;\mathrm{ly},
\tag{36}
\]

\[
\boxed{
M=8.43\times10^{12}M_\odot
}.
\tag{37}
\]

For one preceding throat e-fold, \(N_{\rm pre}=1\):

\[
r_0=1.54176\times10^{-11},
\qquad
B_H\simeq0.96842\;\mathrm{ly},
\tag{38}
\]

\[
\boxed{
M\simeq3.10\times10^{12}M_\odot
}.
\tag{39}
\]

These values are conditional calibrations. They combine:

1. the reconstructed expansion history;
2. the conservative \(4\,\mathrm{MeV}\) thermal landmark;
3. either zero or one pre-thermal throat e-fold; and
4. the first-junction condition \(R_S=B_H\).

They do not derive a parent-collapse mass. A higher thermalization temperature moves the landmark to smaller \(y_T\), smaller \(B_H\), and smaller conditional mass, approximately in inverse proportion to temperature apart from changes in \(g_{*s}\).

The symbol \(N_{\rm pre}\) counts only the interval between crossing and thermalization. It is not the total expansion since crossing. Combining this calibration with the hyperbolic clock gives

\[
N_{\rm tot}
\equiv
\ln\frac{a_0}{a_H}
=-\ln r_0,
\qquad
N_{\rm neq}=N_{\rm tot}-H_\Lambda t_0.
\tag{40}
\]

For the two calibrations above,

\[
\begin{array}{c|cc}
N_{\rm pre} & N_{\rm tot} & N_{\rm neq}\\
\hline
0 & 23.8955 & 23.1088\\
1 & 24.8955 & 24.1088
\end{array}
\tag{41}
\]

The assumed zero or one e-fold belongs only to the pre-thermal throat. Most of the accumulated scale-factor change comes from the subsequent radiation and matter history.

## 7. What has been fixed

Three questions that initially looked entangled now separate cleanly.

First, Alice's proper time since entry fixes the de Sitter boost angle,

\[
H_\Lambda t_0\simeq0.787.
\tag{42}
\]

Second, the finite-throat history fixes the absolute reciprocal coordinate through Equation (8).

Third, a thermal landmark can calibrate the early endpoint of the reconstructed event horizon. At the lowest conventional thermalization scale, that endpoint is measured in light-years and corresponds conditionally to a parent mass of order \(10^{12}\)–\(10^{13}M_\odot\), not \(10^4M_\odot\).

The remaining task is precise: derive \(B(\tau)\) from the parent collapse and junction geometry, then compare the resulting Equation (8) with the reconstructed target. Thermodynamic accounting supplies the work terms at the boundary; the 5D embedding supplies the late-time boost clock. The finite throat must join them.

## References

1. G. Salehi, [“Geometric Duality: Conformal Scaling of Black Hole Interiors.”](gd1.html) Preprint, this project.
2. Codex (OpenAI), [“Dynamic Throat Kinematics and the Cosmological Clock.”](note.html?src=dynamic_throat_kinematics_and_the_cosmological_clock) Technical note, this project.
3. Codex (OpenAI), [“The Nonequilibrium Event Horizon and the CMB Clock.”](note.html?src=nonequilibrium_event_horizon_and_the_cmb_clock) Technical note, this project.
4. Planck Collaboration, [“Planck 2018 results. VI. Cosmological parameters.”](https://arxiv.org/abs/1807.06209) *Astronomy & Astrophysics* **641**, A6 (2020).
5. S. Hannestad, [“What is the lowest possible reheating temperature?”](https://arxiv.org/abs/astro-ph/0403291) *Physical Review D* **70**, 043506 (2004).
6. D. J. Fixsen, [“The Temperature of the Cosmic Microwave Background.”](https://arxiv.org/abs/0911.1955) *The Astrophysical Journal* **707**, 916–920 (2009).
