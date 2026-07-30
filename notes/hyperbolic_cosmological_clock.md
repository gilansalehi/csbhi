# The Hyperbolic Cosmological Clock

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

The late-time reciprocal interior approaches de Sitter spacetime, whose standard realization is a four-dimensional hyperboloid in five-dimensional Minkowski space. Motion along the comoving origin is a Lorentz boost with rapidity

\[
\theta=H_\Lambda\tau=\frac{c\tau}{R_\Lambda}.
\]

This gives the cosmological history a simple geometric clock. Using the background parameters adopted in *Geometric Duality* gives

\[
\boxed{\theta_0=H_\Lambda t_0\simeq0.787}.
\]

The exact flat dust–vacuum solution recovers the same number directly from the observed matter and vacuum fractions: \(\theta_0=0.7870\). Radiation changes the age-based value by only \(4.2\times10^{-4}\) in relative terms. The agreement assigns the present background a definite point in the asymptotic de Sitter comparison geometry and turns the familiar radiation, matter, acceleration, and vacuum eras into identifiable geometric intervals.

This clock does **not** determine the absolute reciprocal coordinate \(r_0\). In a pure de Sitter patch, \(a=e^\theta\), but matter and radiation add a nonequilibrium contribution to the total expansion. The exact factorization is

\[
\ln\frac{a_0}{a_H}
=
H_\Lambda t_0
+
\int_{\tau_H}^{\tau_0}(H_A-H_\Lambda)\,d\tau.
\]

The embedding fixes the first term. The finite-throat history fixes the second. This distinction identifies exactly what the 5D geometry establishes and what the horizon map must still supply.

---

## 1. The de Sitter hyperbola

Let

\[
H_\Lambda=c\sqrt{\frac{\Lambda}{3}},
\qquad
R_\Lambda=\sqrt{\frac{3}{\Lambda}}=\frac{c}{H_\Lambda}.
\tag{1}
\]

Four-dimensional de Sitter spacetime is the hyperboloid

\[
-X_0^2+X_1^2+X_2^2+X_3^2+X_4^2=R_\Lambda^2
\tag{2}
\]

in five-dimensional Minkowski space. At the comoving origin of the expanding flat patch,

\[
X_0=R_\Lambda\sinh\theta,
\qquad
X_4=R_\Lambda\cosh\theta,
\tag{3}
\]

where

\[
\boxed{
\theta=H_\Lambda\tau=\frac{c\tau}{R_\Lambda}
}
\tag{4}
\]

is the boost rapidity in the \((X_0,X_4)\) plane. A proper-time interval in the de Sitter patch is therefore a hyperbolic angle in the embedding space.

In pure de Sitter space, the flat-slicing scale factor is

\[
a(\tau)=a_H e^{H_\Lambda(\tau-\tau_H)}.
\tag{5}
\]

If \(a_H=1\) at horizon entry, the reciprocal ansatz gives

\[
r(\tau)=e^{-\theta},
\tag{6}
\]

after choosing \(\theta=0\) at entry. Equation (6) is exact in the pure-vacuum limit. The observed universe contains matter and radiation, so it cannot be applied to the entire expansion history without an additional term.

## 2. Today's boost angle

Use the present background values adopted in GD1,

\[
H_0=67.4\;\mathrm{km\,s^{-1}Mpc^{-1}},
\quad
\Omega_m=0.315,
\quad
\Omega_r=9.2\times10^{-5},
\quad
\Omega_\Lambda=0.684908.
\tag{7}
\]

Then

\[
H_\Lambda=H_0\sqrt{\Omega_\Lambda},
\qquad
R_\Lambda=\frac{c}{H_\Lambda}=17.5295\;\mathrm{Gly}.
\tag{8}
\]

The same matter–radiation–vacuum background gives

\[
H_0t_0=0.950603,
\qquad
t_0=13.7907\;\mathrm{Gyr}.
\tag{9}
\]

The boost accumulated over that age is

\[
\boxed{
\theta_{\rm age}
=H_\Lambda t_0
=\sqrt{\Omega_\Lambda}\,H_0t_0
=0.786712
}.
\tag{10}
\]

At the comoving origin, the corresponding point on the de Sitter comparison hyperbola has coordinates

\[
\frac{X_0}{R_\Lambda}=\sinh\theta_0=0.87041,
\qquad
\frac{X_4}{R_\Lambda}=\cosh\theta_0=1.32575,
\tag{11}
\]

or

\[
X_0=15.26\;\mathrm{Gly},
\qquad
X_4=23.24\;\mathrm{Gly}.
\tag{12}
\]

These are embedding coordinates, not additional physical dimensions measured within Alice's universe. The mixed matter–radiation–vacuum spacetime is not itself the constant-curvature hyperboloid. The coordinates specify the point reached by its asymptotic de Sitter clock after the same proper-time interval.

## 3. The same clock from the matter–vacuum ratio

Radiation is negligible over most of the late-time history. For a spatially flat dust–vacuum background, write the scale factor relative to its present value as \(y=a/a_0\). The exact solution is

\[
y^3
=
\frac{\widehat\Omega_m}{\widehat\Omega_\Lambda}
\sinh^2u,
\qquad
u\equiv\frac{3}{2}H_\Lambda\tau,
\tag{13}
\]

where the hats renormalize the two late-time components,

\[
\widehat\Omega_m
=
\frac{\Omega_m}{\Omega_m+\Omega_\Lambda},
\qquad
\widehat\Omega_\Lambda
=
\frac{\Omega_\Lambda}{\Omega_m+\Omega_\Lambda}.
\tag{14}
\]

The Hubble rate and apparent-horizon radius become

\[
H_A=H_\Lambda\coth u,
\qquad
\frac{R_A}{R_\Lambda}=\tanh u.
\tag{15}
\]

The density fractions have an especially simple hyperbolic form:

\[
\boxed{
\widehat\Omega_\Lambda=\tanh^2u,
\qquad
\widehat\Omega_m=\operatorname{sech}^2u
}.
\tag{16}
\]

Thus the observed matter–vacuum ratio determines the same geometric clock without inserting the cosmic age:

\[
u_0
=
\operatorname{artanh}\sqrt{\widehat\Omega_\Lambda}
=1.180565,
\tag{17}
\]

\[
\boxed{
\theta_{\rm density}
=\frac{2u_0}{3}
=0.787043
}.
\tag{18}
\]

The age and density constructions differ by

\[
\theta_{\rm density}-\theta_{\rm age}=3.32\times10^{-4},
\tag{19}
\]

or \(0.042\%\). The dust–vacuum formula omits the short radiation era; restoring radiation gives Equation (10). The close agreement is therefore an internal check, not a new parameter fit.

## 4. Cosmological epochs as hyperbolic positions

Equation (16) turns the late expansion history into simple points on the hyperbola.

Acceleration begins when \(\rho_m=2\rho_\Lambda\). Therefore

\[
\tanh^2u_{\rm acc}=\frac13,
\qquad
u_{\rm acc}=0.658479,
\qquad
\theta_{\rm acc}=0.438986.
\tag{20}
\]

For the adopted background, this corresponds to

\[
t_{\rm acc}=7.70\;\mathrm{Gyr}.
\tag{21}
\]

Matter and vacuum densities become equal when

\[
\tanh^2u_{m\Lambda}=\frac12,
\qquad
u_{m\Lambda}=0.881374,
\qquad
\theta_{m\Lambda}=0.587582,
\tag{22}
\]

or

\[
t_{m\Lambda}=10.30\;\mathrm{Gyr}.
\tag{23}
\]

Today,

\[
u_0=1.180565,
\qquad
\theta_0=0.787043,
\qquad
t_0=13.80\;\mathrm{Gyr}
\tag{24}
\]

in the dust–vacuum approximation. The succession from deceleration to acceleration is therefore visible directly in the hyperbolic angle.

The present apparent horizon also has a simple position:

\[
\frac{R_{A0}}{R_\Lambda}
=
\tanh u_0
=
\sqrt{\widehat\Omega_\Lambda}
=0.82763.
\tag{25}
\]

With radiation restored,

\[
R_{A0}=R_H=14.5073\;\mathrm{Gly},
\qquad
B_0=16.6794\;\mathrm{Gly},
\qquad
R_\Lambda=17.5295\;\mathrm{Gly}.
\tag{26}
\]

The apparent horizon, cosmological event horizon, and asymptotic de Sitter radius are distinct today. They coincide only in the stationary de Sitter future.

## 5. What \(\theta_0\) does—and does not—fix

It is tempting to read \(\theta_0=0.787\) as the total number of e-folds since the Big Bang. That would be incorrect. In a pure de Sitter history,

\[
\ln\frac{a_0}{a_H}=H_\Lambda t_0=\theta_0.
\tag{27}
\]

For the observed mixed history, the exact identity is instead

\[
\boxed{
\ln\frac{a_0}{a_H}
=
\underbrace{H_\Lambda t_0}_{N_\Lambda}
+
\underbrace{
\int_{\tau_H}^{\tau_0}(H_A-H_\Lambda)\,d\tau
}_{N_{\rm neq}}
}.
\tag{28}
\]

The embedding determines

\[
N_\Lambda=0.786712.
\tag{29}
\]

Matter, radiation, and the finite throat determine \(N_{\rm neq}\). Under the reciprocal ansatz,

\[
\boxed{
r_0
=
e^{-N_\Lambda}e^{-N_{\rm neq}}
}.
\tag{30}
\]

If the entire history were pure de Sitter, Equation (30) would give \(r_0=0.45534\). That number is a vacuum-only comparison, not Alice's present position in the full reciprocal geometry.

The 5D embedding has nevertheless supplied something exact and useful: a geometric clock that can be evaluated from either the cosmic age or the late-time density ratio. These are two expressions of the same background solution, and their agreement checks the calculation. The remaining normalization is not hidden in recombination physics. It is the integrated history of the finite horizon junction.

## 6. Result and next calculation

The de Sitter embedding converts proper time into hyperbolic angle. The present expansion history selects

\[
\theta_0\simeq0.787
\]

by two routes, and the matter–vacuum epochs occupy definite positions along that angle. This is the clean geometric content of the asymptotic 5D picture.

The embedding alone cannot fix the absolute reciprocal coordinate because the universe has not always been de Sitter. Equation (28) isolates the missing quantity as one integral. The next note evaluates that integral in terms of the finite throat radius \(B(\tau)\) and shows how a thermal transition can calibrate its earliest accessible endpoint.

## References

1. G. Salehi, [“Geometric Duality: Conformal Scaling of Black Hole Interiors.”](gd1.html) Preprint, this project.
2. Codex (OpenAI), [“Dynamic Throat Kinematics and the Cosmological Clock.”](note.html?src=dynamic_throat_kinematics_and_the_cosmological_clock) Technical note, this project.
3. M. Spradlin, A. Strominger, and A. Volovich, [“Les Houches Lectures on de Sitter Space.”](https://arxiv.org/abs/hep-th/0110007) 2001.
4. Planck Collaboration, [“Planck 2018 results. VI. Cosmological parameters.”](https://arxiv.org/abs/1807.06209) *Astronomy & Astrophysics* **641**, A6 (2020).
