# The Nonequilibrium Event Horizon and the CMB Clock

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

The apparent horizon of a spatially flat FLRW universe satisfies an equilibrium horizon first law. The cosmological event horizon generally does not. This distinction matters for the reciprocal-interior construction because its reconstructed moving boundary is the event horizon \(B(\tau)\), while the local Friedmann constraint selects the apparent horizon \(R_A=c/H_A\).

Define their ratio by

\[
x\equiv\frac{H_AB}{c}=\frac{B}{R_A}.
\]

If the area entropy, Hayward surface gravity, and FLRW work density are applied to the event-horizon sphere, the exact residual is

\[
\boxed{
\dot{\mathcal Q}_{\rm neq}
=
-\frac{c^5}{G}x^2(1+qx)
=
\frac{c^5}{G}x^2\frac{\ddot B}{cH_A}
}.
\]

The residual vanishes in the stationary de Sitter limit \(x=1,\ q=-1\). It measures the failure of a global, moving event horizon to obey the local equilibrium identity of the apparent horizon. It is a geometric bookkeeping term, not an ordinary luminosity.

The cosmic microwave background fixes a different part of the problem. Its temperature determines the photon energy density, the radiation work term, and the normalized scale-factor clock. The present CMB temperature exceeds the asymptotic de Sitter horizon temperature by \(1.24\times10^{30}\), so the CMB cannot be used as the throat's Hawking temperature. It instead records the thermal history carried by the geometry.

---

## 1. Two cosmological horizons

Let Alice's interior be spatially flat FLRW,

\[
ds^2
=
-c^2d\tau^2
+a(\tau)^2
\left(d\chi^2+\chi^2d\Omega^2\right),
\tag{1}
\]

with

\[
H_A\equiv\frac{\dot a}{a},
\qquad
q\equiv-\frac{\ddot a}{aH_A^2}.
\tag{2}
\]

The local Friedmann geometry selects the apparent-horizon radius

\[
R_A=\frac{c}{H_A}.
\tag{3}
\]

The cosmological event horizon, when the defining integral converges, has areal radius

\[
B(\tau)
=
a(\tau)c
\int_\tau^\infty\frac{d\tau'}{a(\tau')}.
\tag{4}
\]

Differentiation gives the exact null-boundary identity

\[
\dot B=H_AB-c.
\tag{5}
\]

Define

\[
x\equiv\frac{H_AB}{c}=\frac{B}{R_A}.
\tag{6}
\]

Then

\[
\frac{\dot B}{c}=x-1.
\tag{7}
\]

Differentiating Equation (5) and using

\[
\dot H_A=-H_A^2(1+q)
\tag{8}
\]

gives

\[
\boxed{
\ddot B=-cH_A(1+qx)
}.
\tag{9}
\]

The apparent and event horizons coincide in stationary de Sitter space. During radiation and matter domination they are widely separated, and their dynamics encode different information.

## 2. Energy on the event-horizon sphere

Let \(\epsilon\) and \(P\) denote Alice's total energy density and pressure. The flat Friedmann constraint and continuity equation are

\[
H_A^2=\frac{8\pi G}{3c^2}\epsilon,
\tag{10}
\]

\[
\dot\epsilon+3H_A(\epsilon+P)=0.
\tag{11}
\]

The matter energy inside the event-horizon sphere is

\[
E_E
=
\frac{4\pi}{3}B^3\epsilon.
\tag{12}
\]

Using Equations (5) and (11), its exact rate of change is

\[
\boxed{
\dot E_E
=
-4\pi B^2
\left(c\epsilon+H_ABP\right)
}.
\tag{13}
\]

The first term records energy crossing the ingoing null boundary. The second records pressure work associated with the expanding background.

For a flat effective fluid,

\[
P=w_{\rm eff}\epsilon,
\qquad
w_{\rm eff}=\frac{2q-1}{3},
\tag{14}
\]

and the horizon work density is

\[
W\equiv\frac{\epsilon-P}{2}
=
\frac{2-q}{3}\epsilon.
\tag{15}
\]

## 3. Testing the equilibrium first law

The Hayward surface-gravity scalar evaluated on a sphere of areal radius \(B\) is

\[
\kappa_E
=
-\frac{B}{2}
\left(2H_A^2+\dot H_A\right)
=
-\frac{BH_A^2}{2}(1-q).
\tag{16}
\]

Use the area and volume

\[
A_E=4\pi B^2,
\qquad
V_E=\frac{4\pi}{3}B^3,
\tag{17}
\]

and test the equilibrium-form balance

\[
\dot E_E
=
\frac{c^2\kappa_E}{8\pi G}\dot A_E
+W\dot V_E
+\dot{\mathcal Q}_{\rm neq}.
\tag{18}
\]

The first two terms combine to

\[
\frac{c^2\kappa_E}{8\pi G}\dot A_E
+W\dot V_E
=
\frac{c^2B^2H_A^2}{2G}\dot B.
\tag{19}
\]

Subtract Equation (19) from Equation (13), use Equations (6), (10), and (14), and obtain

\[
\boxed{
\dot{\mathcal Q}_{\rm neq}
=
-\frac{c^5}{G}x^2(1+qx)
}.
\tag{20}
\]

Equation (9) gives the equivalent form

\[
\boxed{
\dot{\mathcal Q}_{\rm neq}
=
\frac{c^5}{G}x^2
\frac{\ddot B}{cH_A}
}.
\tag{21}
\]

This residual is exact under the assumptions of Section 1. It quantifies how far the event-horizon sphere lies from the apparent-horizon equilibrium balance.

The calculation does not assign a microscopic carrier to \(\dot{\mathcal Q}_{\rm neq}\). The event horizon is global, and Equation (20) is a balance-law residual of order \(c^5/G\), not a radiative power available to a local detector. A smooth throat model must decide whether it appears as entropy production, nonlocal gravitational flux, or another geometric term.

## 4. The equilibrium limit

The residual vanishes when

\[
1+qx=0,
\tag{22}
\]

or, by Equation (9), when

\[
\ddot B=0.
\tag{23}
\]

The asymptotic de Sitter limit satisfies

\[
q\to-1,
\qquad
x\to1,
\qquad
\dot B,\ddot B\to0,
\tag{24}
\]

and therefore

\[
\dot{\mathcal Q}_{\rm neq}\to0.
\tag{25}
\]

This recovers the same-orientation stationary thermodynamic accounting of the direct Schwarzschild–de Sitter junction. The event horizon becomes the apparent horizon, its radius stops changing, and the bulk work can be represented exactly by the limiting surface tension.

At a finite FLRW epoch, substituting \(B=R_A\) into the event-horizon equations would generally be inconsistent: Equation (5) would give \(\dot B=0\), while the apparent horizon obeys \(\dot R_A=c(1+q)\). The two surfaces coincide dynamically only in the stationary limit.

## 5. Present value of the residual

Use the same flat background as the cosmological-clock reconstruction,

\[
H_0=67.4\;\mathrm{km\,s^{-1}Mpc^{-1}},
\quad
\Omega_m=0.315,
\quad
\Omega_r=9.2\times10^{-5},
\quad
\Omega_\Lambda=0.684908.
\tag{26}
\]

The reconstructed event horizon gives

\[
x_0=1.14972097,
\qquad
q_0=-0.527316.
\tag{27}
\]

Hence

\[
\frac{G\dot{\mathcal Q}_{{\rm neq},0}}{c^5}
=
-x_0^2(1+q_0x_0)
=
-0.520460.
\tag{28}
\]

In SI units,

\[
\boxed{
\dot{\mathcal Q}_{{\rm neq},0}
=
-1.8884\times10^{52}\;\mathrm{W}
}.
\tag{29}
\]

The enormous number reflects the natural gravitational power scale

\[
\frac{c^5}{G}
=
3.6283\times10^{52}\;\mathrm{W}.
\tag{30}
\]

Equation (29) is therefore best read in the dimensionless form of Equation (28). It is the present geometric disequilibrium of the global event-horizon bookkeeping, not a hidden luminosity pouring through the sky.

For several reconstructed epochs:

| Epoch | \(a/a_0\) | \(q\) | \(x=B/R_A\) | \(G\dot{\mathcal Q}_{\rm neq}/c^5\) |
|---|---:|---:|---:|---:|
| radiation–matter equality | \(2.921\times10^{-4}\) | \(0.7500\) | \(199.92\) | \(-6.03\times10^6\) |
| recombination | \(9.174\times10^{-4}\) | \(0.6207\) | \(90.78\) | \(-4.73\times10^5\) |
| acceleration transition | \(0.6129\) | \(0\) | \(1.4792\) | \(-2.188\) |
| present | \(1\) | \(-0.5273\) | \(1.1497\) | \(-0.5205\) |
| \(a/a_0=2\) | \(2\) | \(-0.9184\) | \(1.0211\) | \(-0.06481\) |
| de Sitter future | \(\infty\) | \(-1\) | \(1\) | \(0\) |

The residual falls rapidly after vacuum domination and approaches zero as the event horizon's acceleration vanishes.

## 6. What the CMB fixes

For a blackbody photon bath of temperature \(T_\gamma\),

\[
\epsilon_\gamma
=
\frac{\pi^2k_B^4}{15\hbar^3c^3}T_\gamma^4.
\tag{31}
\]

At

\[
T_{\gamma,0}=2.7255\;\mathrm{K},
\tag{32}
\]

Equation (31) gives

\[
\epsilon_{\gamma,0}
=
4.1748\times10^{-14}\;\mathrm{J\,m^{-3}},
\tag{33}
\]

\[
\rho_{\gamma,0}
=
\frac{\epsilon_{\gamma,0}}{c^2}
=
4.6451\times10^{-31}\;\mathrm{kg\,m^{-3}},
\tag{34}
\]

and

\[
\Omega_{\gamma,0}
=
5.4438\times10^{-5}.
\tag{35}
\]

Photons contribute the work density

\[
W_{\gamma,0}
=
\frac{\epsilon_{\gamma,0}}{3}
=
1.3916\times10^{-14}\;\mathrm{J\,m^{-3}}.
\tag{36}
\]

Relativistic neutrinos raise the total radiation fraction to the \(\Omega_r\) used in Equation (26). The CMB therefore fixes a real, but presently tiny, part of the transverse-work target.

More importantly, freely propagating radiation supplies a clock. Let

\[
\bar a\equiv\frac{a}{a_0},
\qquad
\bar a_0=1.
\tag{37}
\]

Then

\[
\boxed{
\frac{T_\gamma}{T_{\gamma,0}}
=
\frac{1}{\bar a}
}.
\tag{38}
\]

Under the reciprocal ansatz \(a=1/r\),

\[
\bar a=\frac{r_0}{r},
\tag{39}
\]

so

\[
\boxed{
\frac{T_\gamma}{T_{\gamma,0}}
=
\frac{r}{r_0}
}.
\tag{40}
\]

Once the horizon map fixes \(r_0\), the radiation temperature labels Alice's position along the reciprocal history directly.

## 7. The CMB is not the horizon temperature

The asymptotic de Sitter Hubble rate and radius for Equation (26) are

\[
H_\Lambda=H_0\sqrt{\Omega_\Lambda},
\qquad
R_\Lambda=\frac{c}{H_\Lambda}.
\tag{41}
\]

The Gibbons–Hawking temperature is

\[
T_{\rm dS}
=
\frac{\hbar H_\Lambda}{2\pi k_B}
=
2.1975\times10^{-30}\;\mathrm{K}.
\tag{42}
\]

Therefore

\[
\boxed{
\frac{T_{\gamma,0}}{T_{\rm dS}}
=
1.2402\times10^{30}
}.
\tag{43}
\]

Equating the present CMB temperature to a horizon temperature would imply

\[
R_T
=
\frac{\hbar c}{2\pi k_BT_{\gamma,0}}
=
1.3372\times10^{-4}\;\mathrm{m},
\tag{44}
\]

which is unrelated to the cosmic horizon. The CMB is relic radiation within the interior, not Hawking radiation at the present cosmological boundary.

The two temperatures cross only in the remote de Sitter future: the CMB cools as \(\bar a^{-1}\), while \(T_{\rm dS}\) approaches a nonzero constant. That crossover marks the loss of a recoverable primordial thermal signal, not the present location of the throat.

## 8. Result

The thermodynamic calculation separates three pieces that had been easy to conflate:

1. the **apparent horizon** carries the local equilibrium Friedmann identity;
2. the **event horizon** carries the global causal history and requires the nonequilibrium residual in Equation (20); and
3. the **CMB** fixes the radiation work and normalized scale-factor clock, not the horizon temperature.

The remaining geometric target is now precise. A complete throat metric must reproduce both

\[
\gamma\,dA=W\,dV
\tag{45}
\]

at the local apparent-horizon scale and

\[
\dot{\mathcal Q}_{\rm neq}
=
-\frac{c^5}{G}x^2(1+qx)
\tag{46}
\]

along the global event-horizon history. The first fixes the transverse work. The second fixes its dynamical departure from equilibrium. The CMB then places each thermal epoch on that geometry.

---

## References

1. ["Dynamic Throat Kinematics and the Cosmological Clock."](note.html?src=dynamic_throat_kinematics_and_the_cosmological_clock) Technical note, this project.
2. ["Thermodynamic Accounting of the Transverse Junction."](note.html?src=thermodynamic_accounting_of_the_transverse_junction) Technical note, this project.
3. Hayward, S. A. "Unified First Law of Black-Hole Dynamics and Relativistic Thermodynamics." *Classical and Quantum Gravity* 15 (1998): 3147-3162. [arXiv:gr-qc/9710089](https://arxiv.org/abs/gr-qc/9710089).
4. Akbar, M., and Cai, R.-G. "Thermodynamic Behavior of Friedmann Equation at Apparent Horizon of FRW Universe." *Physical Review D* 75 (2007): 084003. [arXiv:hep-th/0609128](https://arxiv.org/abs/hep-th/0609128).
5. Helou, A. "Dynamics of the Cosmological Apparent Horizon: Surface Gravity and Temperature." (2015). [arXiv:1502.04235](https://arxiv.org/abs/1502.04235).
6. Gibbons, G. W., and Hawking, S. W. "Cosmological Event Horizons, Thermodynamics, and Particle Creation." *Physical Review D* 15 (1977): 2738-2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
7. Planck Collaboration. "Planck 2018 Results. VI. Cosmological Parameters." *Astronomy & Astrophysics* 641 (2020): A6. [arXiv:1807.06209](https://arxiv.org/abs/1807.06209).
8. Fixsen, D. J. "The Temperature of the Cosmic Microwave Background." *The Astrophysical Journal* 707 (2009): 916-920. [arXiv:0911.1955](https://arxiv.org/abs/0911.1955).
