# Matter Completion and the Self-Consistent MeV Birth Benchmark

## Extending the Dual-Horizon CSBHI–Einstein–Cartan System Beyond Pure Radiation

**Gilan Salehi**  
Working note — September 2026

**Status:** Working conditional result. The analytic background is exact within the flat-FLRW dual-horizon Vaidya benchmark. The numerical birth state uses the stated thermal assumptions. The horizon correspondences and matter-transfer law remain open.

**Prerequisites:** [*The Trapping-Horizon Enthalpy Identity*](note.html?src=trapping_horizon_enthalpy_identity); [*Macroscopic Horizon Birth Selects the Low-Torsion Einstein–Cartan Branch*](note.html?src=macroscopic_horizon_birth_low_torsion_branch).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

Adding pressureless matter to the dual-horizon Vaidya benchmark produces a radiation-to-matter-to-vacuum sequence. Up to a negligible macroscopic torsion correction,

$$
\boxed{\xi=\Omega_r+\frac34\Omega_m},
$$

so parent horizon growth follows \(1\to3/4\to0\). The complete dimensionless background is fixed by one additional constant specifying the matter abundance. The horizon map does not yet predict that constant.

Using the reconstructed birth radius \(R_{T,b}\simeq1.52\times10^9\,\mathrm m\), finite-mass electron–positron thermodynamics gives

$$
\boxed{0.54\,\mathrm{MeV}\lesssim T_b\lesssim0.61\,\mathrm{MeV}},
$$

with \(\tau_b\simeq2.5\,\mathrm s\) and \(\sigma/\epsilon\simeq3.3\times10^{-46}\). If this surface is the child's physical beginning, the pre-MeV thermal state must be inherited or reconstructed through the parent–child map.

---

## 1. Dual-horizon system

Define

$$
L=\sqrt{\frac3\Lambda},\quad
x=\frac{R_T}{L},\quad
y=\frac{R_E}{L},\quad
s=\frac{cv}{L},\quad
\theta=\frac{c\tau}{L}.
$$

The dual-horizon hypotheses give

$$
\boxed{
\frac{d\tau}{dv}=\frac{R_T}{2R_E},
\qquad
H=\frac{c}{R_T},
}
$$

$$
\boxed{
\xi
=
\frac{R_E}{R_T}\frac1c\frac{dR_T}{dv}
=
\frac34(1+w_{\rm eff}).
}
\tag{1}
$$

The remaining evolution equations are

$$
\boxed{
\frac{dy}{ds}=\frac12\left(1-\frac{x}{y}\right),
\quad
\frac{d\theta}{ds}=\frac{x}{2y},
\quad
\frac{d\ln a}{ds}=\frac1{2y}.
}
\tag{2}
$$

---

## 2. Matter-completed enthalpy law

Let

$$
\epsilon_{\rm eff}=\epsilon_r+\epsilon_m-\sigma+\epsilon_\Lambda,
$$

$$
p_{\rm eff}=\frac{\epsilon_r}{3}-\sigma-\epsilon_\Lambda,
$$

and define \(D=\epsilon_{\rm eff}=3c^4/(8\pi GR_T^2)\), with

$$
\Omega_r=\frac{\epsilon_r}{D},\quad
\Omega_m=\frac{\epsilon_m}{D},\quad
\Omega_s=\frac{\sigma}{D},\quad
\lambda=\frac{\epsilon_\Lambda}{D}.
$$

Then

$$
\boxed{
\xi=\Omega_r+\frac34\Omega_m-\frac32\Omega_s.
}
\tag{3}
$$

At the benchmark radius, \(\sigma/\epsilon_r\simeq3.3\times10^{-46}\), and the spin term subsequently dilutes as \(a^{-6}\). Setting \(\Omega_s=0\) therefore gives the background to extraordinary precision.

With

$$
z\equiv\frac{\epsilon_m}{\epsilon_r},
\qquad
z\propto a,
$$

and \(\lambda=x^2\), one obtains

$$
\boxed{
\xi(x,z)
=
(1-x^2)\frac{1+\frac34z}{1+z}.
}
\tag{4}
$$

Consequently,

$$
\boxed{
\frac{dx}{ds}
=
\frac{x}{y}(1-x^2)\frac{1+\frac34z}{1+z},
\qquad
\frac{dz}{ds}=\frac{z}{2y}.
}
\tag{5}
$$

The three limits are

$$
\boxed{
\begin{array}{lll}
z\ll1,\ x^2\ll1 &\Rightarrow& \xi\to1,\quad w_{\rm eff}\to1/3,\\[3pt]
z\gg1,\ x^2\ll1 &\Rightarrow& \xi\to3/4,\quad w_{\rm eff}\to0,\\[3pt]
x\to1 &\Rightarrow& \xi\to0,\quad w_{\rm eff}\to-1.
\end{array}
}
\tag{6}
$$

---

## 3. Analytic integration of the matter-completed history

Equations (4)–(6) give the complete horizon system once the matter abundance is specified. Normalize \(z=1\) at radiation–matter equality and define

$$
\eta\equiv\frac{\epsilon_\Lambda}{\epsilon_{\rm eq}}.
\tag{7}
$$

Then

$$
\epsilon_r=\epsilon_{\rm eq}z^{-4},
\qquad
\epsilon_m=\epsilon_{\rm eq}z^{-3},
$$

and

$$
\boxed{
x^2(z)=\frac{\eta z^4}{1+z+\eta z^4}.
}
\tag{8}
$$

The scale normalization is unambiguous:

$$
\boxed{\frac{a}{a_{\rm eq}}=z.}
\tag{9}
$$

The child time and parent event horizon are

$$
\boxed{
\theta(z)-\theta(z_0)
=
\int_{z_0}^{z}\frac{x(u)}{u}\,du,
}
\tag{10}
$$

$$
\boxed{
y(z)
=
z\int_z^\infty\frac{x(u)}{u^2}\,du.
}
\tag{11}
$$

Equation (11) is the future-selected solution satisfying \(y\to1\) as \(z\to\infty\). Thus

$$
\boxed{
\eta\longrightarrow x(z)\longrightarrow y(z)\longrightarrow\tau(z),a(z)
}
$$

fixes the full conditional background.

Matter–vacuum equality occurs at \(z_{\Lambda m}=\eta^{-1/3}\). With \(\lambda_{\rm eq}=\eta/(2+\eta)\), the duration of the matter era is

$$
\boxed{
N_m
=
\frac13\ln\left(\frac{1-\lambda_{\rm eq}}{2\lambda_{\rm eq}}\right).
}
\tag{12}
$$

The horizon map does not determine \(\eta\). Predicting the matter era therefore requires a parent-to-child matter ledger.

---

## 4. Single-fluid cross-check

For one perfect fluid with constant \(p=w\epsilon\), plus \(\Lambda\),

$$
\xi=\frac34(1+w)(1-x^2).
\tag{13}
$$

The system integrates to

$$
\boxed{
x=\tanh\left[\frac32(1+w)\theta\right],
}
\tag{14}
$$

$$
\boxed{
H(\tau)
=
\frac{c}{L}\coth\left[\frac32(1+w)\frac{c\tau}{L}\right],
}
\tag{15}
$$

$$
\boxed{
a(\tau)
\propto
\sinh^{\frac{2}{3(1+w)}}
\left[\frac32(1+w)\frac{c\tau}{L}\right].
}
\tag{16}
$$

These are the exact flat radiation-plus-\(\Lambda\) and dust-plus-\(\Lambda\) solutions for \(w=1/3\) and \(w=0\). The new content is their interpretation as parent horizon-growth histories.

---

## 5. Self-consistent MeV benchmark

At

$$
R_{T,b}=1.52\times10^9\ {\rm m},
$$

the horizon constraint gives

$$
\boxed{
D_b=6.253\times10^{24}\ {\rm J\,m^{-3}},
\qquad
\rho_b=6.96\times10^7\ {\rm kg\,m^{-3}}.
}
\tag{17}
$$

The electron–positron energy and number densities are evaluated using finite-mass Fermi–Dirac integrals,

$$
\epsilon_{e^\pm}
=
\frac{4}{2\pi^2}\frac{(k_BT)^4}{(\hbar c)^3}
\int_0^\infty
\frac{x^2\sqrt{x^2+y_e^2}}{e^{\sqrt{x^2+y_e^2}}+1}\,dx,
\tag{18}
$$

$$
n_{e^\pm}
=
\frac{4}{2\pi^2}\frac{(k_BT)^3}{(\hbar c)^3}
\int_0^\infty
\frac{x^2}{e^{\sqrt{x^2+y_e^2}}+1}\,dx,
\tag{19}
$$

where \(y_e=m_ec^2/(k_BT)\). Photons and three effectively massless neutrino flavors supply the remaining radiation density. The Einstein–Cartan spin term is

$$
\sigma=\frac{\pi G\hbar^2}{4c^2}n_f^2.
\tag{20}
$$

Taking \(T_\nu=T\) gives

$$
\boxed{T_b=0.54265\ {\rm MeV}},
\tag{21}
$$

with

$$
\boxed{
g_{*\rho}^{\rm eff}=10.511,
\quad
g_n^{\rm eff}=7.068,
\quad
n_f\simeq1.79\times10^{37}\ {\rm m^{-3}},
}
\tag{22}
$$

and

$$
\boxed{
\frac{\sigma}{\epsilon}=3.32\times10^{-46},
\qquad
\beta_*\simeq0.0313.
}
\tag{23}
$$

An extreme instantaneous-decoupling choice \(T_\nu/T_\gamma=(4/11)^{1/3}\) gives \(T_b\simeq0.608\,\mathrm{MeV}\). These limiting treatments confine the benchmark to

$$
\boxed{0.54\ {\rm MeV}\lesssim T_b\lesssim0.61\ {\rm MeV}.}
\tag{24}
$$

Since \(H_b=c/R_{T,b}=0.1972\,\mathrm{s^{-1}}\), the radiation-era relation \(H\simeq1/(2\tau)\) gives

$$
\boxed{\tau_b\simeq2.54\ {\rm s}.}
\tag{25}
$$

The temperature and time are consequences of the same radiation Friedmann relation and are not independent predictions.

---

## 6. The matter ledger

The equilibrium calculation fixes the radiation state compatible with the geometric density. It does not explain how that state was prepared. If the child begins at the MeV surface, the conventional earlier thermal history is not part of its physical branch.

The transition must therefore determine:

- photon entropy;
- electron–positron and neutrino distributions;
- the neutron/proton ratio;
- baryon and lepton abundances;
- dark nonrelativistic matter;
- and the mapping of parent spin and particle currents.

Ordinary conformal rescaling preserves causal type and does not change a massive spin-\(1/2\) baryon into a massless spin-\(1\) photon. The required completion is a field and current map, not a coordinate relabeling.

Schematically, the missing data are

$$
\boxed{
\begin{aligned}
T_{\mu\nu}^{P}n^\nu
&\longrightarrow
T_{\mu\nu}^{C}n^\nu+\text{transverse geometric flux},\\
J_B^{P}\cdot n
&\longrightarrow
J_B^{C}\cdot n+S_B,\\
J_{\rm spin}^{P}\cdot n
&\longrightarrow
J_{\rm spin}^{C}\cdot n+\text{torsion/transverse geometry}.
\end{aligned}
}
\tag{26}
$$

If baryon number changes, the source \(S_B\) must be supplied by physical baryon-number-violating dynamics rather than by the conformal map alone.

---

## 7. Result and next calculation

The matter-completed benchmark establishes the conditional chain

$$
\boxed{
\eta
\longrightarrow
\text{radiation–matter–vacuum child history}
\longrightarrow
\text{parent event/trapping-horizon history}.
}
\tag{27}
$$

It does not yet determine \(\eta\). That requires

$$
\boxed{
\text{parent collapse matter and current data}
\longrightarrow
\eta,
}
\tag{28}
$$

without calibrating to child cosmological observations.

The next closure calculation must derive the energy, baryon, lepton, entropy, and spin-current transfer laws across the parent–child transition. If those laws fix \(\eta\), Equations (8), (10), and (11) determine the complete background and both parent horizon histories.
