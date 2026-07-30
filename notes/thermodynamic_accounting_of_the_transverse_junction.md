# Thermodynamic Accounting of the Transverse Junction

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

The direct Schwarzschild–de Sitter junction has matching intrinsic geometry but unequal transverse derivatives. This note shows that the mismatch has an exact thermodynamic interpretation. At a shared spherical radius \(R\), the Schwarzschild and de Sitter horizons carry the same area entropy and enclosed energy, but their signed surface gravities differ because the cosmological horizon includes vacuum pressure–volume work with the opposite orientation.

For a general spatially flat FLRW interior, the Hayward–Kodama surface gravity at the apparent horizon \(R_A=c/H_A\) is

\[
\kappa_A
=
-\frac{cH_A}{2}(1-q),
\]

while a vacuum Schwarzschild horizon of the same radius has

\[
\kappa_B=\frac{cH_A}{2}.
\]

The signed jump is

\[
\boxed{
\Delta\kappa
\equiv
\kappa_B-\kappa_A
=
\frac{4\pi G R_A}{c^2}W
},
\]

where \(W=(\epsilon-P)/2\) is the interior work density. The corresponding effective surface-tension magnitude is

\[
\boxed{
\gamma
=
\frac{c^2}{8\pi G}\Delta\kappa
=
\frac{R_AW}{2}
}.
\]

Consequently,

\[
\boxed{\gamma\,dA=W\,dV}.
\]

In the stationary de Sitter limit and the same-orientation static soldering, this effective tension is exactly the null-shell tension of the abrupt matching. The interior volume work has been compressed onto the junction surface; it need not represent an additional material membrane. Away from that limit, the formula supplies a thermodynamic target for a smooth conformal throat rather than a completed junction condition.

---

## 1. Geometry and conventions

Let a spherical horizon have areal radius \(R\), area

\[
A=4\pi R^2,
\tag{1}
\]

and volume

\[
V=\frac{4\pi}{3}R^3.
\tag{2}
\]

The Bekenstein–Hawking entropy is

\[
S_H
=
\frac{k_BA}{4\ell_P^2},
\qquad
\ell_P^2=\frac{\hbar G}{c^3}.
\tag{3}
\]

The Misner–Sharp energy on a marginal sphere satisfying \(2GE/(c^4R)=1\) is

\[
E=\frac{c^4R}{2G}.
\tag{4}
\]

We use acceleration units for surface gravity. Its associated physical temperature is

\[
T_H
=
\frac{\hbar|\kappa|}{2\pi c k_B}.
\tag{5}
\]

Signed \(\kappa\) is retained in the horizon first law because black-hole and cosmological horizons have opposite orientations. The physical detector temperature uses \(|\kappa|\).

## 2. Schwarzschild and de Sitter at one radius

For a Schwarzschild horizon of radius \(R\),

\[
\kappa_B=\frac{c^2}{2R},
\tag{6}
\]

and

\[
T_B=\frac{\hbar c}{4\pi k_BR}.
\tag{7}
\]

For a de Sitter cosmological horizon of the same radius,

\[
\kappa_A=-\frac{c^2}{R},
\tag{8}
\]

while its positive detector temperature is

\[
T_A=\frac{\hbar c}{2\pi k_BR}=2T_B.
\tag{9}
\]

The factor of two in Equation (9) is the thermodynamic form of the unequal radial derivatives found in the direct null-junction calculation.

Differentiate Equations (1), (3), and (4):

\[
dA=8\pi R\,dR,
\tag{10}
\]

\[
dS_H
=
\frac{2\pi k_BR}{\ell_P^2}\,dR,
\tag{11}
\]

\[
dE=\frac{c^4}{2G}\,dR.
\tag{12}
\]

For the Schwarzschild side,

\[
T_B\,dS_H
=
\frac{c^4}{2G}\,dR
=
dE.
\tag{13}
\]

No pressure–volume term appears in the vacuum exterior.

## 3. The de Sitter work term

The de Sitter energy density and pressure are

\[
\epsilon_\Lambda
=
\frac{\Lambda c^4}{8\pi G}
=
\frac{3c^4}{8\pi GR^2},
\tag{14}
\]

\[
P_\Lambda=-\epsilon_\Lambda.
\tag{15}
\]

In spherical horizon thermodynamics, the work density is

\[
W\equiv\frac{\epsilon-P}{2}.
\tag{16}
\]

For vacuum energy,

\[
W_\Lambda=\epsilon_\Lambda.
\tag{17}
\]

The signed entropy term on the cosmological side is

\[
\frac{c^2\kappa_A}{8\pi G}\,dA
=
-\frac{c^4}{G}\,dR.
\tag{18}
\]

The volume-work term is

\[
W_\Lambda\,dV
=
\frac{3c^4}{2G}\,dR.
\tag{19}
\]

Their sum gives

\[
\boxed{
\frac{c^2\kappa_A}{8\pi G}\,dA
+
W_\Lambda\,dV
=
\frac{c^4}{2G}\,dR
=
dE
}.
\tag{20}
\]

The factor-of-two temperature difference is required by the opposite orientation and the vacuum work term. Matching the bare temperatures would discard part of the cosmological first law.

## 4. The null-shell tension equals vacuum work

The same-orientation static null junction gives the surface-pressure convention

\[
P_\Sigma
=
-\frac{3c^4}{16\pi GR}.
\tag{21}
\]

Define the positive tension magnitude

\[
\gamma_\Lambda\equiv-P_\Sigma
=
\frac{3c^4}{16\pi GR}.
\tag{22}
\]

Equations (10), (19), and (22) give

\[
\boxed{
\gamma_\Lambda\,dA
=
W_\Lambda\,dV
}.
\tag{23}
\]

Equivalently,

\[
\boxed{
\frac{2\gamma_\Lambda}{R}
=
\epsilon_\Lambda
}.
\tag{24}
\]

Equation (24) is the spherical Young–Laplace relation. Here it does not describe an independent exterior fluid holding back the interior. It says that an abrupt codimension-one junction represents the de Sitter volume work as surface tension. In a smooth throat, the same contribution can be distributed through a finite region of conformal curvature.

Equation (23) uses the same radial orientation on both sides. Under the future-black-hole to future-cosmological orientation, the junction calculation moves part of the mismatch into angular transverse curvature and therefore into surface density. The thermodynamic identity does not remove that orientation dependence. It fixes the total interior work that the complete set of junction data must carry.

## 5. Dynamic FLRW apparent-horizon thermodynamics

Now let Alice's interior contain a general homogeneous perfect fluid with energy density \(\epsilon\), pressure \(P\), Hubble rate \(H_A\), and deceleration parameter

\[
q\equiv-\frac{\ddot a}{aH_A^2}.
\tag{25}
\]

For a spatially flat FLRW geometry, the apparent-horizon radius is

\[
R_A=\frac{c}{H_A}.
\tag{26}
\]

The Friedmann constraint gives

\[
\epsilon
=
\frac{3c^2H_A^2}{8\pi G}
=
\frac{3c^4}{8\pi GR_A^2}.
\tag{27}
\]

Consequently, the energy inside the apparent horizon is again

\[
E_A=\epsilon\frac{4\pi R_A^3}{3}
=
\frac{c^4R_A}{2G}.
\tag{28}
\]

The Hayward–Kodama surface gravity is

\[
\kappa_A
=
-\frac{c^2}{R_A}
\left(
1-\frac{\dot R_A}{2H_AR_A}
\right).
\tag{29}
\]

Since

\[
\dot R_A=c(1+q),
\tag{30}
\]

Equation (29) becomes

\[
\boxed{
\kappa_A
=
-\frac{cH_A}{2}(1-q)
}.
\tag{31}
\]

For a flat effective fluid,

\[
P=w_{\rm eff}\epsilon,
\qquad
w_{\rm eff}=\frac{2q-1}{3}.
\tag{32}
\]

The work density is therefore

\[
W
=
\frac{\epsilon-P}{2}
=
\frac{2-q}{3}\epsilon.
\tag{33}
\]

Using Equations (10), (27), (31), and (33), evaluated at \(R_A\),

\[
\frac{c^2\kappa_A}{8\pi G}\,dA
=
-\frac{c^4}{2G}(1-q)\,dR_A,
\tag{34}
\]

\[
W\,dV
=
\frac{c^4}{2G}(2-q)\,dR_A.
\tag{35}
\]

The sum is

\[
\boxed{
dE_A
=
\frac{c^2\kappa_A}{8\pi G}\,dA
+
W\,dV
=
\frac{c^4}{2G}\,dR_A
}.
\tag{36}
\]

Thus the full spatially flat Friedmann background satisfies the same horizon first law at every epoch.

## 6. The transverse-derivative target

Place a vacuum Schwarzschild horizon at the same instantaneous areal radius \(R_A\). Its surface gravity is

\[
\kappa_B=\frac{c^2}{2R_A}
=
\frac{cH_A}{2}.
\tag{37}
\]

Define the signed transverse derivative jump by

\[
\Delta\kappa\equiv\kappa_B-\kappa_A.
\tag{38}
\]

Equations (31) and (37) give

\[
\boxed{
\Delta\kappa
=
\frac{cH_A}{2}(2-q)
}.
\tag{39}
\]

Using Equations (26), (27), and (33), the same result is

\[
\boxed{
\Delta\kappa
=
\frac{4\pi G R_A}{c^2}W
}.
\tag{40}
\]

Use the same surface-pressure normalization as the static null calculation to define an effective tension:

\[
P_\Sigma
=
-\frac{c^2}{8\pi G}\Delta\kappa,
\qquad
\gamma\equiv-P_\Sigma.
\tag{41}
\]

Therefore

\[
\boxed{
\gamma
=
\frac{R_AW}{2}
}.
\tag{42}
\]

Because

\[
\frac{dV}{dA}=\frac{R_A}{2},
\tag{43}
\]

Equation (42) gives the general identity

\[
\boxed{
\gamma\,dA=W\,dV
}.
\tag{44}
\]

The effective transverse stress is exactly the interior work density projected from volume to area.

For \(q=-1\), the apparent horizon is a stationary de Sitter null horizon and Equations (39)-(44) reduce to the same-orientation null-junction result of Section 4. At a general FLRW epoch, the apparent horizon need not be null. Equations (39)-(44) then specify the transverse derivative and work balance that a dynamical throat must reproduce; they do not by themselves constitute a Barrabès-Israel junction calculation.

## 7. Matter, radiation, and vacuum contributions

For matter, radiation, and vacuum energy,

\[
P_m=0,
\qquad
P_r=\frac{\epsilon_r}{3},
\qquad
P_\Lambda=-\epsilon_\Lambda.
\tag{45}
\]

The total work density is

\[
\boxed{
W
=
\frac{\epsilon_m}{2}
+
\frac{\epsilon_r}{3}
+
\epsilon_\Lambda
}.
\tag{46}
\]

Hence

\[
\gamma
=
R_A
\left(
\frac{\epsilon_m}{4}
+
\frac{\epsilon_r}{6}
+
\frac{\epsilon_\Lambda}{2}
\right).
\tag{47}
\]

Writing the instantaneous density fractions as \(\Omega_i=\epsilon_i/\epsilon\),

\[
\frac{\Delta\kappa}{cH_A}
=
\frac34\Omega_m
+
\frac12\Omega_r
+
\frac32\Omega_\Lambda.
\tag{48}
\]

The characteristic limits are:

| Dominant component | \(q\) | \(\kappa_A/(cH_A)\) | \(\Delta\kappa/(cH_A)\) |
|---|---:|---:|---:|
| radiation | \(1\) | \(0\) | \(1/2\) |
| matter | \(1/2\) | \(-1/4\) | \(3/4\) |
| vacuum | \(-1\) | \(-1\) | \(3/2\) |

Radiation's vanishing \(\kappa_A\) in the pure-radiation limit follows from its traceless stress-energy. Radiation still contributes to \(W\) and to the transverse jump.

## 8. Present numerical target

Use

\[
H_0=67.4\;\mathrm{km\,s^{-1}Mpc^{-1}},
\quad
\Omega_m=0.315,
\quad
\Omega_r=9.2\times10^{-5},
\quad
\Omega_\Lambda=0.684908.
\tag{49}
\]

Then

\[
q_0=-0.527316,
\qquad
R_A=R_H=14.51\;\mathrm{Gly}.
\tag{50}
\]

The two signed surface gravities are

\[
\kappa_{B,0}
=
3.2742\times10^{-10}\;\mathrm{m\,s^{-2}},
\tag{51}
\]

\[
\kappa_{A,0}
=
-5.0007\times10^{-10}\;\mathrm{m\,s^{-2}}.
\tag{52}
\]

Therefore

\[
\boxed{
\Delta\kappa_0
=
8.2748\times10^{-10}\;\mathrm{m\,s^{-2}}
}.
\tag{53}
\]

The critical energy density and total work density are

\[
\epsilon_{c,0}
=
7.6689\times10^{-10}\;\mathrm{J\,m^{-3}},
\tag{54}
\]

\[
W_0
=
6.4606\times10^{-10}\;\mathrm{J\,m^{-3}}.
\tag{55}
\]

Equation (42) gives

\[
\boxed{
\gamma_0
=
4.4336\times10^{16}\;\mathrm{N\,m^{-1}}
}.
\tag{56}
\]

The work-density shares are:

| Component | Fraction of \(W_0\) | Contribution to \(\Delta\kappa_0\) |
|---|---:|---:|
| matter | \(18.696\%\) | \(1.5470\times10^{-10}\;\mathrm{m\,s^{-2}}\) |
| radiation | \(0.00364\%\) | \(3.0122\times10^{-14}\;\mathrm{m\,s^{-2}}\) |
| vacuum | \(81.301\%\) | \(6.7275\times10^{-10}\;\mathrm{m\,s^{-2}}\) |

The vacuum contribution reproduces the static derivative scale found in the recursive Kottler calculation. The matter contribution lies in the same acceleration decade as the observed galaxy scale, but no galaxy law follows from that numerical proximity alone.

## 9. What the calculation resolves

The calculation fixes the interior-side thermodynamic transverse derivative once \(H_A\), \(q\), and the comoving time normalization are specified. In the stationary null limit, it also fixes the sharp-junction stress:

\[
\Delta\kappa
\longleftrightarrow
W
\longleftrightarrow
\gamma.
\tag{57}
\]

This removes the freedom to treat the same-orientation stationary surface tension as an arbitrary new source. Under the standard Einstein equations, it is the boundary representation of the interior work term.

The calculation does not make the piecewise metric \(C^1\). An abrupt Schwarzschild–FLRW identification still carries distributional curvature. The thermodynamic identity instead tells a completed smooth throat exactly what work must be distributed through its transition geometry.

It also identifies the correct matching object: not bare temperature equality, but equality of the complete energy–entropy–work balance. The opposite horizon orientations and the work density account for the unequal surface gravities.

---

## References

1. ["Null-Horizon Matching of the Reciprocal Interior."](note.html?src=null_horizon_matching_of_the_reciprocal_interior) Technical note, this project.
2. Hayward, S. A. "Unified First Law of Black-Hole Dynamics and Relativistic Thermodynamics." *Classical and Quantum Gravity* 15 (1998): 3147-3162. [arXiv:gr-qc/9710089](https://arxiv.org/abs/gr-qc/9710089).
3. Akbar, M., and Cai, R.-G. "Thermodynamic Behavior of Friedmann Equation at Apparent Horizon of FRW Universe." *Physical Review D* 75 (2007): 084003. [arXiv:hep-th/0609128](https://arxiv.org/abs/hep-th/0609128).
4. Gibbons, G. W., and Hawking, S. W. "Cosmological Event Horizons, Thermodynamics, and Particle Creation." *Physical Review D* 15 (1977): 2738-2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
5. Bekenstein, J. D. "Black Holes and Entropy." *Physical Review D* 7 (1973): 2333-2346. [doi:10.1103/PhysRevD.7.2333](https://doi.org/10.1103/PhysRevD.7.2333).
