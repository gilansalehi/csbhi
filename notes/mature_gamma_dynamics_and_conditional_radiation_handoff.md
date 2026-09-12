# Mature Gamma Dynamics and the Conditional Radiation Handoff

## The dual scale mode, its Friedmann first integral, and the remaining throat projection

**Working result — September 2026. Source: upstream project derivation. Independent audit and revisions: Codex (OpenAI).**

---

## Abstract

GD1 supplies the reciprocal law

\[
\boxed{a=\frac1r.}
\]

If a corresponding parent ruler contracts as \(\ell_P=\ell_*r\) while its child dual expands as \(\ell_C=\ell_*a\), define the mature dual scale separation

\[
\boxed{
\Gamma
\equiv
\frac{\ell_C}{\ell_P}.
}
\]

Then

\[
\boxed{
\Gamma
=
\frac ar
=
a^2
=
r^{-2}.
}
\]

This is an exact consequence of the reciprocal ruler assignment, not a proof that the complete parent black-hole metric and child FLRW metric are globally Weyl-equivalent. A local four-metric Weyl factor is denoted separately by \(\Omega_{\rm W}\). Only where both descriptions admit one common conformal reference metric and \(\Omega_{\rm W}=\Gamma\) has been established may one also write \(g_C=\Gamma^2g_P\).

In the mature flat-FLRW sector, \(\Gamma\) obeys

\[
\boxed{
\frac{\dot\Gamma^2}{4H_\Lambda^2}
=
\Gamma^2
+\eta_m\sqrt{\Gamma}
+\eta_r,
}
\]

and

\[
\boxed{
\frac{\ddot\Gamma}{H_\Lambda^2}
=
4\Gamma
+\frac{\eta_m}{\sqrt{\Gamma}}.
}
\]

Radiation appears in the first integral but disappears from the acceleration because its stress-energy trace vanishes. The usual radiation, matter, and vacuum scale-factor laws become elementary trajectories of \(\Gamma\).

At a normalized handoff, the child apparent-horizon two-jet supplies

\[
\Gamma_*=1,
\qquad
\dot\Gamma_*=2H_*,
\qquad
\ddot\Gamma_*=-4\left(\frac{\kappa_*R_*}{c^2}\right)H_*^2.
\]

If a stationary parent ruler maps through \(R_A^C=\Gamma R_P\), the child equation of state is forced to \(w=1/3\). This is a promising conditional radiation-selection theorem. It still requires the throat to establish the ruler correspondence, time map, Weyl-flat/isotropic handoff, and the relation between the mature scale mode \(\Gamma\) and the null affine transfer \(\mathcal T\).

The principal result is therefore:

\[
\boxed{
\textbf{mature }\Gamma\textbf{ dynamics closed conditionally;}
\quad
\textbf{throat launch and null projection open.}
}
\]

---

## 1. Two objects that must remain distinct

The project previously used the same symbol \(\Gamma\) for two related but not yet identical constructions.

### Mature dual scale separation

\[
\boxed{
\Gamma
\equiv
\frac{\ell_C}{\ell_P}
=a^2=r^{-2}.
}
\tag{1}
\]

This compares corresponding physical rulers in the reciprocal description.

### Local four-metric Weyl factor

\[
\boxed{
g^C_{ab}
=
\Omega_{\rm W}^2g^P_{ab}.
}
\tag{2}
\]

This is a local tensor equation requiring the two metrics to be conformally related on one mapped region.

Equation (1) does not imply Equation (2) throughout a Schwarzschild, Kerr, or generic collapsing spacetime. Weyl curvature obstructs a global equivalence with exact FLRW. In a common conformally flat homogeneous sector one may have

\[
g_P=r^2\bar g,
\qquad
g_C=a^2\bar g,
\tag{3}
\]

so that

\[
\Omega_{\rm W}
=
\frac ar
=
\Gamma.
\tag{4}
\]

But Equation (4) is a property to establish at the handoff, not a global identity to assume.

Cross-project prose calls \(\Gamma\) “big Gamma” when useful. Formation calculations write \(\Omega_{\rm W}\) for an independently established four-metric Weyl factor and \(\Gamma_{\rm MS}\) for the Misner–Sharp radial derivative.

---

## 2. Exact mature-sector kinematics

Here and below, a dot denotes differentiation with respect to child cosmic proper time \(\tau_C\). From Equation (1),

\[
\boxed{
\frac{\dot\Gamma}{\Gamma}
=
2H.
}
\tag{5}
\]

Differentiating gives

\[
\frac{\ddot\Gamma}{\Gamma}
=
2\dot H+4H^2.
\tag{6}
\]

For spatially flat Friedmann GR,

\[
H^2=\frac{8\pi G}{3}\rho,
\tag{7}
\]

\[
\dot H
=
-4\pi G
\left(
\rho+\frac{p}{c^2}
\right),
\tag{8}
\]

where \(\rho\) is mass-equivalent density. Substitution yields

\[
\boxed{
\frac{\ddot\Gamma}{\Gamma}
=
\frac{8\pi G}{3}
\left(
\rho-\frac{3p}{c^2}
\right).
}
\tag{9}
\]

Thus the logarithmic velocity of the dual scale knows the total expansion rate, while its acceleration is sourced by the stress-energy trace.

For radiation,

\[
p_r=\frac13\rho_rc^2
\quad\Longrightarrow\quad
\boxed{\ddot\Gamma=0}
\tag{10}
\]

in a purely radiation-dominated flat universe.

For dust,

\[
\boxed{
\frac{\ddot\Gamma}{\Gamma}
=
\frac{8\pi G}{3}\rho_m.
}
\tag{11}
\]

For vacuum,

\[
p_\Lambda=-\rho_\Lambda c^2
\]

and therefore

\[
\boxed{
\frac{\ddot\Gamma}{\Gamma}
=
\frac{32\pi G}{3}\rho_\Lambda
=4H_\Lambda^2.
}
\tag{12}
\]

These equations repackage the standard Friedmann dynamics after the GD1 reciprocal identification has been made. They do not derive the matter content or its inheritance coefficients.

---

## 3. The matter–radiation–vacuum ledger as Gamma dynamics

Let

\[
P(r)
\equiv
\frac{H^2}{H_\Lambda^2}
=
1+\eta_mr^3+\eta_rr^4.
\tag{13}
\]

Since

\[
r=\Gamma^{-1/2},
\tag{14}
\]

we obtain

\[
P(\Gamma)
=
1
+\eta_m\Gamma^{-3/2}
+\eta_r\Gamma^{-2}.
\tag{15}
\]

Combining Equations (5) and (15) gives

\[
\boxed{
\dot\Gamma
=
2H_\Lambda\Gamma
\sqrt{
1
+\eta_m\Gamma^{-3/2}
+\eta_r\Gamma^{-2}
}.
}
\tag{16}
\]

Squaring,

\[
\boxed{
\frac{\dot\Gamma^2}{4H_\Lambda^2}
=
\Gamma^2
+\eta_m\sqrt{\Gamma}
+\eta_r.
}
\tag{17}
\]

Differentiating Equation (17) on an expanding branch with \(\dot\Gamma\neq0\) gives

\[
\boxed{
\frac{\ddot\Gamma}{H_\Lambda^2}
=
4\Gamma
+\frac{\eta_m}{\sqrt{\Gamma}}.
}
\tag{18}
\]

The radiation coefficient disappears because radiation is trace-free. It remains as the constant kinetic contribution in the first integral.

If

\[
\mathcal D\equiv r\frac{d}{dr},
\tag{19}
\]

then

\[
(4-\mathcal D)P
=
4+\eta_mr^3,
\tag{20}
\]

and Equation (18) may be written

\[
\boxed{
\frac{\ddot\Gamma}
{\Gamma H_\Lambda^2}
=
(4-\mathcal D)P.
}
\tag{21}
\]

The definition (19) is essential; without it, Equation (21) is only notation.

---

## 4. The three standard eras

### Radiation domination

When the constant term \(\eta_r\) dominates Equation (17),

\[
\dot\Gamma^2\simeq4H_\Lambda^2\eta_r,
\]

so

\[
\boxed{\Gamma\propto\tau_C}
\tag{22}
\]

after choosing the radiation singular origin. Hence

\[
a=\sqrt{\Gamma}\propto\tau_C^{1/2}.
\tag{23}
\]

### Matter domination

When the matter term dominates,

\[
\dot\Gamma^2
\propto
\sqrt{\Gamma},
\]

and therefore

\[
\boxed{\Gamma\propto\tau_C^{4/3},}
\tag{24}
\]

\[
a\propto\tau_C^{2/3}.
\tag{25}
\]

### Vacuum domination

When the \(\Gamma^2\) term dominates,

\[
\dot\Gamma
=
2H_\Lambda\Gamma,
\]

so

\[
\boxed{
\Gamma
\propto
e^{2H_\Lambda\tau_C},
}
\tag{26}
\]

\[
a\propto e^{H_\Lambda\tau_C}.
\tag{27}
\]

At background order, \(\Gamma\) therefore contains the complete flat matter–radiation–\(\Lambda\) expansion history once \(H_\Lambda\), \(\eta_m\), and \(\eta_r\) are supplied.

---

## 5. The handoff two-jet

For the flat-FLRW apparent horizon,

\[
R_A=\frac{c}{H}.
\tag{28}
\]

Using the standard Hayward–Kodama sign convention adopted in the trapping-pair note,

\[
\boxed{
\frac{\kappa_AR_A}{c^2}
=
\frac{3w_{\rm eff}-1}{4}.
}
\tag{29}
\]

Equations (5) and (9) give

\[
\frac{\ddot\Gamma}{\Gamma}
=
(1-3w_{\rm eff})H^2,
\tag{30}
\]

so

\[
\boxed{
\frac{\ddot\Gamma}{\Gamma}
=
-4
\left(
\frac{\kappa_AR_A}{c^2}
\right)H^2.
}
\tag{31}
\]

Normalize the reciprocal handoff by

\[
a_*=r_*=1.
\tag{32}
\]

Then

\[
\boxed{\Gamma_*=1,}
\tag{33}
\]

\[
\boxed{
\dot\Gamma_*
=
2H_*
=
\frac{2c}{R_*},
}
\tag{34}
\]

and

\[
\boxed{
\ddot\Gamma_*
=
-4
\left(
\frac{\kappa_*R_*}{c^2}
\right)H_*^2.
}
\tag{35}
\]

Equation (35) is a child-side identity. Reading \(R_*\) and \(\kappa_*\) directly from a parent throat requires the still-unproved handoff map, including its conformal and surface-gravity derivative terms.

The formation two-jet can therefore supply the initial position, velocity, and acceleration of the mature dual scale only after that transfer is established.

---

## 6. A conditional radiation-selection theorem

Suppose a distinguished parent ruler maps to the child apparent-horizon radius through

\[
\boxed{
R_A^C
=
\Gamma R_P.
}
\tag{36}
\]

Here \(R_P\) is evaluated as a function of child cosmic time through the completed handoff map. Therefore

\[
R_P=\frac{R_A}{\Gamma}.
\tag{37}
\]

Taking a child-time derivative,

\[
\frac{\dot R_P}{R_P}
=
\frac{\dot R_A}{R_A}
-\frac{\dot\Gamma}{\Gamma}.
\tag{38}
\]

For flat Friedmann evolution,

\[
\frac{\dot R_A}{R_A}
=
-\frac{\dot H}{H}
=
\frac32(1+w_{\rm eff})H.
\tag{39}
\]

Using Equation (5),

\[
\boxed{
\frac{\dot R_P}{R_P}
=
\frac{3w_{\rm eff}-1}{2}H.
}
\tag{40}
\]

Equivalently,

\[
\boxed{
\frac{\dot R_P}{R_P}
=
2
\left(
\frac{\kappa_AR_A}{c^2}
\right)H.
}
\tag{41}
\]

Therefore, under the stated assumptions,

\[
\dot R_P=0
\quad\Longrightarrow\quad
\boxed{w_{\rm eff}=\frac13.}
\tag{42}
\]

This is the precise conditional theorem:

> If the mature reciprocal relation gives \(\Gamma=a^2\), a selected parent ruler maps to the child apparent horizon by Equation (36), the derivative is taken through the completed child-time map, and that mapped ruler is stationary, then the child handoff is radiation-like.

Generic stationarity of a late Schwarzschild event horizon does not by itself satisfy these premises. The selected ruler might be a trapping-horizon cross-section, the conformal relation may not yet hold at the handoff, or the parent-to-child time conversion may alter the meaning of “stationary.” These are the remaining proof obligations.

Radiation is nevertheless singled out simultaneously by

\[
T^\mu{}_\mu=0,
\qquad
\ddot\Gamma=0,
\qquad
\kappa_AR_A=0,
\qquad
\dot R_P=0,
\tag{43}
\]

and by the null signature of the flat-FLRW apparent horizon for \(w=1/3\).

---

## 7. Conditional stellar-mass benchmark

If the handoff normalization is

\[
\Gamma_*=1
\]

and the child apparent-horizon scale is conditionally matched to a parent Schwarzschild scale,

\[
R_{A,*}^C
\simeq
\frac{2GM_{\rm parent}}{c^2},
\tag{44}
\]

then a \(10M_\odot\) parent gives

\[
R_*\simeq29.5\ {\rm km},
\qquad
H_*\simeq1.02\times10^4\ {\rm s^{-1}},
\tag{45}
\]

while a \(30M_\odot\) parent gives

\[
R_*\simeq88.6\ {\rm km},
\qquad
H_*\simeq3.38\times10^3\ {\rm s^{-1}}.
\tag{46}
\]

For a radiation background,

\[
H\simeq\frac1{2\tau_C},
\tag{47}
\]

so

\[
\boxed{
\tau_*
\simeq
4.93\times10^{-5}\ {\rm s}
}
\tag{48}
\]

for \(10M_\odot\), and

\[
\boxed{
\tau_*
\simeq
1.48\times10^{-4}\ {\rm s}
}
\tag{49}
\]

for \(30M_\odot\).

Using

\[
\epsilon_r
=
\frac{\pi^2}{30}
g_*
\frac{(k_BT)^4}{\hbar^3c^3}
\tag{50}
\]

with the flat Friedmann density gives approximately

\[
T_*
\simeq
46\text{–}122\ {\rm MeV}
\tag{51}
\]

across \(10\!-\!30M_\odot\) and the illustrative range \(g_*=10.75\!-\!61.75\). Because \(g_*(T)\) changes through the QCD crossover, this is an order-of-magnitude benchmark, not a self-consistent thermal solution.

The estimate places the conditional stellar-mass handoff in the broad QCD-era neighborhood and supersedes the abandoned \(0.5\ {\rm MeV}\) benchmark that came from the erroneous isometric horizon identification.

---

## 8. What a finite throat must launch

Suppose the pre-handoff region has no developed dual scale rate,

\[
\Gamma\simeq1,
\qquad
\dot\Gamma\simeq0,
\tag{52}
\]

while the mature branch begins with

\[
\frac{\dot\Gamma}{\Gamma}
=
2H_*
\sim
\frac{2c}{R_*}.
\tag{53}
\]

If the transition lasts

\[
\Delta\tau_{\rm throat}
\sim
\frac{R_*}{c}
\sim
H_*^{-1},
\tag{54}
\]

then the required rate change is of order

\[
\frac{\Delta(\dot\Gamma/\Gamma)}
{\Delta\tau_{\rm throat}}
=
O(H_*^2).
\tag{55}
\]

The natural curvature scale of a stellar throat is also \(O(c^2/R_*^2)=O(H_*^2)\). This dimensional agreement shows that no factor of \(10^{21}\) must be produced instantaneously at birth. It does not prove that the Einstein equations or any completed junction dynamically generate the required sign and coefficient.

---

## 9. Three phases

The corrected architecture separates:

### I. Collapse and throat homogenization

The parent contains Weyl curvature, pressure gradients, dissipation, and rotation. No global scalar Weyl factor can convert the complete geometry into exact FLRW. The dynamics must control shear and Weyl curvature while creating handoff data.

### II. Conformal handoff

At a candidate Weyl-flat and isotropic boundary,

\[
\Gamma_*=1,
\qquad
\dot\Gamma_*=2H_*,
\qquad
\ddot\Gamma_*
=
-4
\left(
\frac{\kappa_*R_*}{c^2}
\right)H_*^2.
\tag{56}
\]

Radiation is the distinguished zero-acceleration possibility,

\[
\kappa_*R_*=0,
\qquad
\ddot\Gamma_*=0.
\tag{57}
\]

### III. Mature GD1 evolution

Once the reciprocal homogeneous branch and inheritance ledger are supplied,

\[
\Gamma=a^2=r^{-2}
\tag{58}
\]

and Equation (17) fixes its subsequent background evolution.

The functional freedom of the mature background has therefore been reduced to the ordinary constants \(H_\Lambda\), \(\eta_m\), \(\eta_r\), a time origin, and the expanding/contracting branch. This is a closure of the mature reparameterization, not a derivation of those constants.

---

## 10. The null optical transfer remains an independent projection

For an actual local Weyl relation,

\[
g_C=\Omega_{\rm W}^2g_P,
\tag{59}
\]

mapped affine null parameters satisfy

\[
\boxed{
\mathcal T
\equiv
\frac{d\lambda_C}{d\lambda_P}
=
C_\lambda\Omega_{{\rm W},H}^2.
}
\tag{60}
\]

But the mature dual ruler scale is

\[
\Gamma=a^2.
\tag{61}
\]

Therefore

\[
\boxed{
\mathcal T=C_\lambda\Gamma^2
}
\tag{62}
\]

does **not** follow until the throat geometry proves

\[
\Omega_{{\rm W},H}=\Gamma
\tag{63}
\]

along the relevant null history, with compatible normalization.

This corrects the premature identification in the preceding conformal-dictionary note. The transverse/timelike scale-transfer law and null affine-transfer law may be two projections of one formation geometry, but the formation geometry must demonstrate that relation.

---

## 11. Audit verdict

### Algebraically verified

- \(\Gamma=a^2=r^{-2}\) follows from the stated dual-ruler definition.
- Equations (5), (9), (17), and (18) follow exactly from flat Friedmann evolution.
- Radiation disappears from \(\ddot\Gamma\) because its stress-energy trace vanishes.
- The radiation, matter, and vacuum power laws are recovered.
- The child-side two-jet and surface-gravity relations are correct with the stated sign and units.
- The stellar-mass radii, Hubble rates, times, and broad thermal range are numerically consistent.

### Conditional physical results

- The formation two-jet becomes initial data for \(\Gamma\) only after the parent–child handoff is derived.
- Stationary mapped parent radius implies \(w=1/3\) only under Equations (36)–(41).
- The \(O(H_*^2)\) throat-launch estimate is dimensional plausibility, not dynamics.

### Still open

- whether realistic collapse reaches the necessary Weyl-flat/isotropic handoff;
- which parent ruler maps to the child apparent horizon;
- how parent and child time parameters are related through the finite throat;
- whether \(\Omega_{\rm W}\) equals \(\Gamma\) on the relevant formation patch;
- how the null optical transfer \(\mathcal T\) is projected from the same geometry; and
- whether the resulting handoff supplies the correct matter, radiation, perturbation, and thermal data.

---

## Conclusion

The mature Gamma problem is substantially reduced.

\[
\boxed{
\Gamma=a^2=r^{-2}
}
\]

turns the standard flat matter–radiation–vacuum Friedmann background into a one-dimensional first integral. Radiation supplies a constant kinetic term, matter and vacuum bend the trajectory through the stress-energy trace, and the usual cosmic eras follow immediately.

The throat problem is not thereby solved. It has become more precise:

\[
\boxed{
\text{parent formation geometry}
\longrightarrow
(\Gamma_*,\dot\Gamma_*,\ddot\Gamma_*)
\longrightarrow
\text{mature Friedmann evolution}.
}
\]

The strongest new candidate is the conditional radiation-selection theorem. A stationary parent ruler, if it is the one mapped to the child apparent horizon through the mature reciprocal scale law, forces \(w=1/3\). Proving that the real trapping/event-horizon geometry supplies precisely that ruler and handoff is the next calculation.

The null affine map remains separate until the local Weyl factor \(\Omega_{\rm W}\) is derived and related to \(\Gamma\). Keeping those two objects distinct prevents the new closure from becoming another hidden global-conformal assumption.
