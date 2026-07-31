# Dynamic Throat Kinematics and the Cosmological Clock

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

The stationary null-junction calculation identifies the Schwarzschild radius with Alice's de Sitter apparent-horizon radius, but a stationary boundary describes only the vacuum-dominated limit. This note gives Alice's ingoing cosmological event horizon a time-dependent areal radius \(B(\tau)\). In her spatially flat geometry, the ingoing null condition gives the exact kinematic identity

\[
\boxed{
H_A=\frac{c+\dot B}{B}
}.
\]

The stationary limit \(\dot B=0\) recovers \(H_A=c/B\). Evolution of Alice's event-horizon radius contributes the term \(\dot B/B\) to her expansion rate, while the acceleration history depends on \(\ddot B\). If the horizon map identifies this history with a parent-side horizon history, the identity turns that parent input into a complete homogeneous expansion history \(H_A(\tau)\).

Extending the stationary density identity \(\rho_{\rm geom}=3c^2/(8\pi G B^2)\) to a changing throat suggests a conditional energy-transfer mechanism: growth of \(B\) lowers the geometric vacuum density and can source radiation. An early small-radius plateau, a growing transition, and a late large-radius plateau would then appear to Alice as high-scale de Sitter expansion, reheating and decelerating expansion, and the observed low-scale de Sitter future. This energy-transfer interpretation is a hypothesis, not a consequence of the null condition alone.

The construction also permits an observational reconstruction. Using the Planck background adopted in GD1 gives, at the present epoch,

\[
\frac{B_0}{R_H}=1.14972,
\qquad
\frac{\dot B_0}{c}=0.14972,
\qquad
\frac{\ddot B_0}{cH_0}=-0.39373.
\]

The reconstructed boundary is \(95.15\%\) of its asymptotic de Sitter radius, while \(73.45\%\) of the finite conformal-time interval from the hot early universe to future infinity has elapsed. These values define targets for the parent-collapse calculation. They become predictions only when the horizon map derives \(B(\tau)\) independently from the relevant parent-side area history and its matter and gravitational fluxes.

---

## 1. Assumptions and scope

Alice's homogeneous interior is described by the spatially flat line element

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
H_A\equiv\frac{\dot a}{a}.
\tag{2}
\]

Consider a spherical ingoing null boundary with comoving coordinate \(\chi_b(\tau)\). Its areal radius is

\[
B(\tau)=a(\tau)\chi_b(\tau).
\tag{3}
\]

The calculation assumes:

1. Alice's spatially flat metric in Equation (1);
2. a spherical null boundary on Alice's side;
3. a differentiable function \(B(\tau)>0\); and
4. the usual Friedmann equations only where they are stated explicitly.

No law for \(B(\tau)\) is assumed. In particular, this note does not derive the parent collapse, the reciprocal ansatz, or a complete four-dimensional horizon soldering. Its first task is narrower: determine exactly what expansion Alice observes for any supplied boundary history.

## 2. Exact moving-boundary identity

Setting \(ds^2=d\Omega^2=0\) in Equation (1) gives the ingoing radial null condition

\[
\dot\chi_b=-\frac{c}{a}.
\tag{4}
\]

Differentiate Equation (3):

\[
\dot B
=
\dot a\chi_b+a\dot\chi_b
=
H_AB-c.
\tag{5}
\]

Therefore

\[
\boxed{
H_A
=
\frac{c+\dot B}{B}
}.
\tag{6}
\]

Equation (6) is kinematic. It follows from the FLRW areal radius and the null condition, without an equation of state or a Friedmann density law.

It also separates two contributions to Alice's expansion:

\[
H_A
=
\frac{c}{B}
+
\frac{\dot B}{B}.
\tag{7}
\]

The first is the stationary-horizon term. The second records evolution of Alice's event-horizon radius. If the horizon map identifies \(B(\tau)\) with a parent-side area history, growth of that history appears as an additional contribution to Alice's homogeneous expansion.

## 3. Stationary limit and acceleration

For a stationary boundary,

\[
\dot B=0,
\tag{8}
\]

Equation (6) becomes

\[
H_A=\frac{c}{B}.
\tag{9}
\]

If the stationary regime obeys the flat Friedmann constraint and contains only its residual vacuum curvature, then

\[
H_A^2=\frac{\Lambda c^2}{3}
\tag{10}
\]

and Equations (9)-(10) give

\[
\boxed{
\Lambda=\frac{3}{B^2}
}.
\tag{11}
\]

This is the constant-radius de Sitter result obtained in the stationary null-junction calculation.

For a changing boundary, differentiate Equation (5):

\[
\ddot B
=
\dot H_A B+H_A\dot B.
\tag{12}
\]

Using \(\ddot a/a=\dot H_A+H_A^2\) and Equation (6) gives

\[
\boxed{
\frac{\ddot a}{a}
=
\frac{\ddot B}{B}
+
\frac{c(c+\dot B)}{B^2}
}.
\tag{13}
\]

Alice's expansion accelerates when

\[
B\ddot B+c(c+\dot B)>0,
\tag{14}
\]

and decelerates when the same quantity is negative. A growing boundary need not imply accelerated expansion: sufficiently strong deceleration of the boundary can produce a radiation- or matter-like decelerating epoch.

For a flat effective fluid, define

\[
w_{\rm eff}
=
-1-\frac{2\dot H_A}{3H_A^2}.
\tag{15}
\]

Equation (6) then gives

\[
\boxed{
w_{\rm eff}
=
-1
-
\frac{2}{3}
\frac{
B\ddot B-(c+\dot B)\dot B
}{
(c+\dot B)^2
}
}.
\tag{16}
\]

Thus an independently derived \(B(\tau)\) fixes not only \(H_A\), but the complete effective background equation-of-state history.

## 4. A conditional geometric-reheating model

The stationary identity in Equation (11) corresponds to the mass-equivalent vacuum density

\[
\rho_{\rm geom}(B)
=
\frac{\Lambda c^2}{8\pi G}
=
\frac{3c^2}{8\pi G B^2}.
\tag{17}
\]

Equation (17) is exact in the stationary de Sitter limit. Extending it instantaneously to a changing \(B\) is an additional hypothesis. Under that hypothesis,

\[
\dot\rho_{\rm geom}
=
-2\rho_{\rm geom}\frac{\dot B}{B}.
\tag{18}
\]

A geometric reading does not introduce a second substance pressing against the throat. The vacuum pressure is the stress-energy representation of the conformal curvature itself. Likewise, the surface stress in an abrupt junction represents the derivative discontinuity of that geometry. A smooth completion must not count the bulk geometric pressure and the limiting surface stress as independent energy sources.

A separately conserved component with \(P=-\rho c^2\) has constant density. Therefore a changing \(\rho_{\rm geom}\) cannot simultaneously behave as an isolated cosmological constant. It must instead represent either a changing effective equation of state or an exchange of energy with other components.

If the decrease sources radiation, define \(Q\) by

\[
\dot\rho_{\rm geom}=-Q,
\qquad
\dot\rho_r+4H_A\rho_r=Q.
\tag{19}
\]

Equations (18)-(19) give

\[
\boxed{
Q
=
2\rho_{\rm geom}\frac{\dot B}{B}
}.
\tag{20}
\]

When \(\dot B>0\), geometric vacuum density decreases and \(Q>0\). The same throat evolution that lowers the curvature scale can therefore act as a source for a radiation bath. Once produced, freely evolving radiation and matter retain their standard dilution powers,

\[
\rho_r\propto a^{-4},
\qquad
\rho_m\propto a^{-3},
\tag{21}
\]

as established for the reciprocal interior.

Equations (17)-(20) motivate, but do not yet derive, the following history:

1. an early small-radius plateau \(B\simeq B_I\), with \(H_A\simeq c/B_I\), supplies a high-scale de Sitter phase; it becomes inflationary if it persists for the required number of e-folds;
2. growth of \(B\) lowers the geometric vacuum scale and can transfer energy into radiation;
3. radiation and matter dominate while the boundary evolves and the expansion decelerates; and
4. \(B\to B_\Lambda\) with \(\dot B,\ddot B\to0\), leaving the low-scale de Sitter future.

This would place early inflation and late vacuum acceleration at the two stationary ends of one throat history. A completed model must derive both plateaus, the transfer law, and the intermediate \(B(\tau)\) rather than assume them.

## 5. Reconstructing the required boundary from cosmology

The same equations can be run backward. Given an observed expansion history \(H(a)\), the physical cosmological event-horizon radius is

\[
\boxed{
B(a)
=
a c
\int_a^\infty
\frac{da'}{a'^2H(a')}
}.
\tag{22}
\]

Differentiating Equation (22) with \(\dot a=aH\) reproduces Equation (5):

\[
\dot B=HB-c.
\tag{23}
\]

This reconstruction is not a prediction. Equation (22) uses the cosmological history to determine the boundary that would reproduce it. Its value is to define a target: the parent-horizon calculation must generate the same \(B(\tau)\) without importing \(H(a)\).

For the flat matter-radiation-vacuum background, write

\[
H(a)=H_0E(a),
\tag{24}
\]

\[
E(a)
=
\sqrt{
\Omega_r a^{-4}
+\Omega_m a^{-3}
+\Omega_\Lambda
}.
\tag{25}
\]

The age and present event-horizon radius are then

\[
H_0t_0
=
\int_0^1\frac{da}{aE(a)},
\tag{26}
\]

\[
\frac{B_0}{R_H}
=
\int_1^\infty\frac{da}{a^2E(a)},
\qquad
R_H\equiv\frac{c}{H_0}.
\tag{27}
\]

The present particle-horizon radius is

\[
\frac{R_p}{R_H}
=
\int_0^1\frac{da}{a^2E(a)}.
\tag{28}
\]

Because \(a_0=1\), \(R_p/c\) is the conformal time already elapsed and \(B_0/c\) is the conformal time remaining. The fraction of the complete finite conformal interval already traversed is therefore

\[
\boxed{
f_{\eta,0}
=
\frac{R_p}{R_p+B_0}
}.
\tag{29}
\]

Unlike proper time, which extends indefinitely in the de Sitter future, Equation (29) supplies a finite causal-progress coordinate.

## 6. Present position in the reconstructed history

Use the parameters adopted in GD1,

\[
H_0=67.4\;\mathrm{km\,s^{-1}Mpc^{-1}},
\quad
\Omega_m=0.315,
\quad
\Omega_r=9.2\times10^{-5},
\quad
\Omega_\Lambda=0.684908.
\tag{30}
\]

Equations (26)-(28) give

\[
H_0t_0=0.95060,
\qquad
t_0=13.79\;\mathrm{Gyr},
\tag{31}
\]

\[
R_H=14.51\;\mathrm{Gly},
\qquad
R_p=46.13\;\mathrm{Gly},
\qquad
B_0=16.68\;\mathrm{Gly}.
\tag{32}
\]

Define

\[
x_0\equiv\frac{H_0B_0}{c}=\frac{B_0}{R_H}.
\tag{33}
\]

Numerically,

\[
x_0=1.14972.
\tag{34}
\]

Equation (23) therefore gives

\[
\boxed{
\frac{\dot B_0}{c}
=
x_0-1
=
0.14972
}.
\tag{35}
\]

This is the growth rate of an areal radius, not the local velocity of a material surface, and it is not constrained to behave as the speed of a nearby object.

The present deceleration parameter is

\[
q_0
=
\frac12
\left(
\Omega_m+2\Omega_r-2\Omega_\Lambda
\right)
=
-0.527316.
\tag{36}
\]

From \(\ddot B=\dot H B+H\dot B\), or equivalently \(\ddot B=-qH^2B-Hc\),

\[
\boxed{
\frac{\ddot B_0}{cH_0}
=
-1-q_0x_0
=
-0.39373
}.
\tag{37}
\]

In acceleration units,

\[
\ddot B_0
=
-2.58\times10^{-10}\;\mathrm{m\,s^{-2}}.
\tag{38}
\]

The reconstructed boundary is still growing, but its growth rate is decreasing.

The asymptotic de Sitter radius is

\[
R_\Lambda
=
\frac{c}{H_0\sqrt{\Omega_\Lambda}}
=
17.53\;\mathrm{Gly}.
\tag{39}
\]

Consequently,

\[
\boxed{
\frac{B_0}{R_\Lambda}=0.95150
}.
\tag{40}
\]

The present event-horizon radius has reached \(95.15\%\) of its final de Sitter value. Meanwhile,

\[
\frac{H_\Lambda}{H_0}
=
\sqrt{\Omega_\Lambda}
=
0.82759,
\tag{41}
\]

so the present expansion rate remains \(20.83\%\) above its asymptotic floor.

Finally, Equation (29) gives

\[
\boxed{
f_{\eta,0}=0.73446
}.
\tag{42}
\]

On the reconstructed matter-radiation-vacuum background, \(73.45\%\) of the finite conformal-time interval has elapsed and \(26.55\%\) remains. This statement concerns causal conformal time, not a finite fraction of the universe's proper-time lifetime.

The transition from decelerating to accelerating expansion occurs when

\[
\rho_m+2\rho_r=2\rho_\Lambda.
\tag{43}
\]

For Equation (30), this gives

\[
a_{\rm acc}=0.61285,
\qquad
z_{\rm acc}=0.63172,
\qquad
t_{\rm acc}=7.69\;\mathrm{Gyr}.
\tag{44}
\]

Thus the reconstructed boundary history must reproduce not only today's \(H_0\) and age, but the sign change encoded in Equations (13)-(14) at the observed epoch.

Collect the present reconstruction into the dimensionless state vector

\[
\boxed{
\mathcal T_0
=
\left(
H_0t_0,\,
f_{\eta,0},\,
\frac{B_0}{R_\Lambda},\,
\frac{\dot B_0}{c},\,
\frac{\ddot B_0}{cH_0}
\right)
=
\left(
0.95060,\,
0.73446,\,
0.95150,\,
0.14972,\,
-0.39373
\right)
}.
\tag{45}
\]

Equation (45) is an operational answer to where the present epoch lies in the reconstructed causal history. It combines proper age, conformal progress, distance from the final horizon radius, and the boundary's instantaneous motion. A parent-side derivation must reproduce the vector rather than merely one of its entries.

## 7. Turning the reconstruction into a test

Equations (22)-(44) describe the boundary required by the observed homogeneous history. A test of CSBHI must reverse the direction of inference:

1. derive the relevant parent-side area history from its matter and gravitational-radiation fluxes;
2. map that parent history to a predicted Alice-side radius \(B_{\rm pred}(\tau)\);
3. compute

   \[
   H_A^{\rm pred}(\tau)
   =
   \frac{c+\dot B_{\rm pred}(\tau)}{B_{\rm pred}(\tau)};
   \tag{46}
   \]

4. integrate \(H_A^{\rm pred}\) to obtain \(a(\tau)\), the cosmic age, and all horizon radii; and
5. compare the predicted radiation, matter, and acceleration transitions with Equations (30)-(44).

Dynamical-horizon balance laws already relate changes in black-hole area to local matter and gravitational fluxes. They do not by themselves provide the CSBHI horizon map, but they supply candidate parent-side dynamical input. During accretion, a quasi-local dynamical or trapping horizon is generally spacelike, while the event horizon remains null. A complete calculation must identify which parent surface maps to Alice's null boundary and relate their area histories rather than silently treating them as the same hypersurface.

Agreement would be nontrivial only if \(B_{\rm pred}\) is derived without inserting the Friedmann history. If Equation (22) is used to define \(B\), then Equation (6) is an exact reconstruction identity rather than an independent cosmological prediction.

## 8. Result hierarchy

The calculation establishes three different levels of result.

**Exact within the stated geometry:**

\[
\dot B=H_AB-c,
\qquad
H_A=\frac{c+\dot B}{B},
\qquad
\frac{\ddot a}{a}
=
\frac{\ddot B}{B}
+
\frac{c(c+\dot B)}{B^2}.
\tag{47}
\]

**Observational reconstruction:** Equations (22)-(44) determine the boundary history corresponding to the measured homogeneous expansion. They locate the present epoch within that target history but do not explain it.

**Conditional physical interpretation:** Equations (17)-(20) treat the changing curvature scale as an energy reservoir capable of sourcing radiation. Establishing that interpretation requires a smooth throat metric, its Einstein tensor, and a conservation calculation across the complete junction.

The central open equation is therefore not another Friedmann identity. It is the parent-side law for \(B(\tau)\). Once supplied, Equation (6) converts black-hole growth into a predicted cosmological history and allows the proposed cosmological teleology to be tested directly.

---

## References

1. ["Null-Horizon Matching of the Reciprocal Interior."](note.html?src=null_horizon_matching_of_the_reciprocal_interior) Technical note, this project.
2. Ashtekar, A., and Krishnan, B. "Dynamical Horizons and Their Properties." *Physical Review D* 68 (2003): 104030. [doi:10.1103/PhysRevD.68.104030](https://doi.org/10.1103/PhysRevD.68.104030).
3. Gibbons, G. W., and Hawking, S. W. "Cosmological Event Horizons, Thermodynamics, and Particle Creation." *Physical Review D* 15, no. 10 (1977): 2738-2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
4. Planck Collaboration. "Planck 2018 Results. VI. Cosmological Parameters." *Astronomy & Astrophysics* 641 (2020): A6. [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910).
5. ["Field Equations of the Reciprocal Interior."](note.html?src=field_equations_of_the_reciprocal_interior) Technical note, this project.
