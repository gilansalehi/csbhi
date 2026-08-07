# Null Optics of the Reciprocal Interior

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

This note calculates the propagation of light in the reciprocal interior defined by

\[
a(\tau)=\frac{1}{r(\tau)}.
\]

Once radiation has entered Alice's spatially flat interior, its optical evolution is fixed. A freely propagating mode has frequency \(\nu\propto r\), wavelength \(\lambda\propto1/r\), blackbody temperature \(T\propto r\), and bolometric specific intensity \(I\propto r^4\). These relations define an exact transfer operator from any specified interior boundary or initial radiation field to Alice's later sky.

The remaining question is whether the entire parent black-hole event horizon can supply that boundary data through a local null junction. Continuity of the horizon's angular geometry gives a sharp answer. A spherical ingoing null boundary in the reciprocal interior has areal radius \(B\) satisfying \(\dot B=H_A B-1\). Matching it to a static horizon of fixed radius \(r_h\) requires \(B=r_h\), and therefore \(H_A=1/r_h\) along the boundary. This intrinsic-area condition holds along a static boundary in the de Sitter limit, but not throughout a matter-and-radiation era with changing \(H_A\).

Thus the current construction determines the interior optical transfer exactly, while a unique image of the exterior sky still requires a dynamical boundary, a transition layer, or a completed nonlocal or higher-dimensional horizon map.

---

## 1. Interior null coordinates

Alice's metric is

\[
ds_A^2=-d\tau^2+a(\tau)^2\left(dR^2+R^2d\Omega^2\right),
\qquad
a(\tau)=\frac{1}{r(\tau)}.
\tag{1}
\]

Here \(r\) is Bob's horizon-normalized radial coordinate along Alice's infall, while \(R\) is an Alice-centered comoving coordinate. Define Alice's conformal time by

\[
d\eta=\frac{d\tau}{a}.
\tag{2}
\]

Since

\[
H_A=\frac{\dot a}{a}=-\frac{\dot r}{r},
\]

Equation (2) becomes

\[
d\eta=-\frac{dr}{H_A(r)}.
\tag{3}
\]

The metric is therefore

\[
ds_A^2=a(\eta)^2
\left[-d\eta^2+dR^2+R^2d\Omega^2\right].
\tag{4}
\]

For a radial light ray, \(ds_A^2=d\Omega^2=0\), so

\[
\frac{dR}{d\eta}=\pm1,
\qquad
\left|\frac{dR}{dr}\right|=\frac{1}{H_A(r)}.
\tag{5}
\]

The reciprocal interior is conformal to Minkowski space. Its radial null paths are therefore straight in \((\eta,R)\), while the scale factor changes the frequency and intensity measured by comoving observers.

## 2. Exact optical transfer inside the reciprocal geometry

Consider a freely propagating mode with constant comoving frequency \(q\). A comoving observer measures

\[
\nu(\tau)=\frac{q}{a(\tau)}=q\,r(\tau).
\tag{6}
\]

If the radiation enters the interior at \(r=r_e\) and is observed at \(r=r_o\lt r_e\), then

\[
\boxed{
\frac{\nu_o}{\nu_e}=\frac{r_o}{r_e}
}
\tag{7}
\]

and

\[
\boxed{
\frac{\lambda_o}{\lambda_e}=\frac{r_e}{r_o}.
}
\tag{8}
\]

Equivalently,

\[
\frac{d\ln\nu}{d\tau}=-H_A.
\tag{9}
\]

Liouville's theorem preserves \(I_\nu/\nu^3\) along a collisionless ray [1, 2]. The complete spectral transfer is therefore

\[
\boxed{
I_{\nu,o}(\nu,\mathbf n)
=
\left(\frac{r_o}{r_e}\right)^3
I_{\nu,e}\!\left(\nu\frac{r_e}{r_o},\mathbf n\right).
}
\tag{10}
\]

After integrating over frequency,

\[
\boxed{
I_o(\mathbf n)
=
\left(\frac{r_o}{r_e}\right)^4 I_e(\mathbf n).
}
\tag{11}
\]

A blackbody remains a blackbody with

\[
\boxed{
T_o=\frac{r_o}{r_e}T_e.
}
\tag{12}
\]

Equations (7)–(12) require no additional cosmological dynamics beyond the metric in Equation (1). They determine how any specified interior radiation field evolves. They do not determine which exterior direction supplies each interior direction \(\mathbf n\), nor the magnification of an unresolved source; those depend on the horizon map.

## 3. A minimal horizon-screen normalization

The radial part of the missing event map can be isolated as one function. Let

\[
v_B=t+r_*
\]

be Bob's advanced null coordinate and let

\[
v_A=\eta+R
\]

label Alice's ingoing radial rays. A radial horizon map has the form

\[
v_B=V(v_A).
\]

For a static Bob, whose proper time satisfies \(d\tau_B=\sqrt{f_B}\,dv_B\), the phase of a monochromatic signal is \(2\pi\nu_B\tau_B\). Alice is comoving, so \(dv_A/d\tau=1/a\), and she measures

\[
\frac{\nu_A}{\nu_B}
=
\frac{\sqrt{f_B}}{a}
\frac{dV}{dv_A}.
\]

The reciprocal ansatz fixes \(1/a=r\). It does not fix \(dV/dv_A\). That derivative is the remaining freedom in the radial event map; the angular problem adds a map of directions and impact parameters.

The exterior geometry supplies a natural local normalization for \(dV/dv_A\) at horizon crossing. Write the horizon-normalized Schwarzschild metric as

\[
ds_B^2=-f(r)dt^2+\frac{dr^2}{f(r)}+r^2d\Omega^2,
\qquad
f(r)=1-\frac{1}{r}.
\tag{13}
\]

Let \(e\) be Alice's conserved energy per unit mass and \(E_\gamma\) the Killing energy of an ingoing radial photon. Their radial components are

\[
u^r=-\sqrt{e^2-f},
\qquad
k^r=-E_\gamma.
\tag{14}
\]

Alice measures

\[
\nu_A=-u_\mu k^\mu
=
\frac{E_\gamma}{e+\sqrt{e^2-f}}.
\tag{15}
\]

A static Bob at \(r=r_B\) measures \(\nu_B=E_\gamma/\sqrt{f_B}\). At the horizon,

\[
\boxed{
\frac{\nu_H}{\nu_B}=\frac{\sqrt{f_B}}{2e}.
}
\tag{16}
\]

If Alice is released from rest beside Bob, then \(e=\sqrt{f_B}\), and Equation (16) reduces to

\[
\boxed{
\nu_H=\frac{\nu_B}{2}.
}
\tag{17}
\]

Continuity of frequency at \(a=1\) sets \(dV/dv_A=1/(2e)\) at that cross-section. Extending this value as a constant is the simplest radial screen map.

One minimal optical model treats the horizon cross-section at \(a=1\) as a transparent screen, carries the locally measured frequency continuously into an interior comoving mode, and preserves the ray's angular label. Under those explicit assumptions, Equations (7) and (17) give

\[
\boxed{
\frac{\nu_A(r)}{\nu_B}=\frac{r}{2},
\qquad
1+z=\frac{2}{r},
\qquad
\frac{I_A}{I_B}=\left(\frac{r}{2}\right)^4.
}
\tag{18}
\]

The last relation is the bolometric surface-brightness transfer; total flux from an unresolved source also depends on the angular map.

For example, light emitted at \(550\,\mathrm{nm}\) crosses the horizon at \(1100\,\mathrm{nm}\), reaches \(11\,\mu\mathrm m\) at \(r=0.1\), and reaches \(1.1\,\mathrm{mm}\) at \(r=10^{-3}\). A \(5778\,\mathrm K\) blackbody would have an observed temperature of \(2.889\,r\times10^3\,\mathrm K\), reaching \(2.725\,\mathrm K\) at \(r\simeq9.43\times10^{-4}\).

This numerical resemblance does not turn an exterior point source into a cosmic microwave background. In the transparent, unscattered model, a point source remains angularly localized. A thermal, nearly isotropic microwave sky requires appropriate boundary data or an interior thermal history in addition to the wavelength map.

Equation (18) is a testable candidate transfer rule, not yet a unique consequence of Equation (1). It assumes a particular identification of modes at one horizon cross-section. A continuous exterior history requires an event-by-event map along the horizon.

## 4. The finite conformal-time budget

The black-hole normalization \(r=1\) at horizon crossing need not coincide with the observational convention \(\bar a_0=1\) at the present epoch. Let \(r_0\) be Bob's radial value corresponding to the present epoch and define

\[
x\equiv\frac{r}{r_0}=\frac{1}{\bar a}.
\tag{19}
\]

The present physical distance to the cosmological event horizon is then

\[
R_e
=
c\int_0^1\frac{dx}{H_A(x)},
\qquad
H_A(x)
=
H_0\sqrt{\Omega_m x^3+\Omega_r x^4+\Omega_\Lambda}.
\tag{20}
\]

Using \(\Omega_m=0.315\), \(\Omega_r=9.2\times10^{-5}\), and \(\Omega_\Lambda=0.684908\), Equation (20) gives

\[
\boxed{
\frac{R_e}{c/H_0}=1.14972.
}
\tag{21}
\]

For a Hubble radius of \(14.51\) billion light-years, this is \(16.68\) billion light-years. Alice has infinite future proper time in the vacuum-dominated limit but only finite future conformal time. The reciprocal interior therefore contains a cosmological event horizon, and only a finite interval of null phase can reach any comoving observer after the present reference epoch. The calculation uses only the ratio \(r/r_0\); it does not assign the present epoch to the black-hole horizon.

## 5. The first null-junction condition

The horizon-screen rule in Section 3 supplies an optical transfer at one cross-section. To decide whether the entire parent black-hole event horizon can act as a local boundary, compare the intrinsic angular geometry of the two null surfaces.

The static exterior horizon has fixed areal radius \(r_h\) and angular metric

\[
d\sigma_H^2=r_h^2d\Omega^2.
\tag{22}
\]

Let a spherical radial null boundary in Alice's interior follow \(R=R_b(\tau)\), and define its areal radius by

\[
B(\tau)=a(\tau)R_b(\tau).
\tag{23}
\]

For an ingoing null boundary, Equation (1) gives

\[
\frac{dR_b}{d\tau}=-\frac{1}{a}.
\tag{24}
\]

Differentiating Equation (23),

\[
\boxed{
\dot B=H_A B-1.
}
\tag{25}
\]

The first null-junction condition requires continuity of the degenerate metric intrinsic to the horizon [3, 4]. Its angular part therefore requires

\[
B(\tau)=r_h
\tag{26}
\]

along every matched generator. Since the exterior radius is constant, Equations (25) and (26) imply

\[
\boxed{
H_A=\frac{1}{r_h}.
}
\tag{27}
\]

This condition must hold along the boundary, not merely at one event. A static spherical horizon can therefore satisfy the intrinsic-area condition for an ingoing null boundary of a spatially flat expanding interior only when \(H_A\) is constant. That is the de Sitter sector. For the normalized horizon \(r_h=1\), the horizon-crossing condition \(H_A(1)=1\) makes the two descriptions tangent at the initial cross-section, but matter and radiation give

\[
\dot H_A=-4\pi G\left(\rho_m+\frac{4}{3}\rho_r\right)<0,
\tag{28}
\]

so the boundary does not remain at fixed areal radius. In the asymptotic vacuum sector, a fixed null surface of radius \(H_\Lambda^{-1}\) satisfies Equation (27) exactly. This is the de Sitter cosmological-horizon radius that appears in the five-dimensional embedding; it need not equal the original black-hole horizon radius.

An outgoing radial null boundary satisfies \(\dot B=H_A B+1\), so it cannot remain at fixed positive radius in an expanding interior. The same moving-boundary equation appears in prior black-hole cosmology work [5].

Equation (27) is only the first junction condition. Even in the de Sitter sector, a complete match must compare the transverse curvature on both sides; a jump there represents null surface stress [3, 4].

## 6. What is fixed and what remains open

The calculation separates three claims that should not be conflated:

1. **Exact interior optics.** Once radiation data are specified on an interior initial or boundary surface, Equations (7)–(12) determine their later frequency, spectrum, temperature, and surface brightness.
2. **A minimal candidate map.** Continuity of radial frequency and angle at the \(a=1\) cross-section gives Equation (18). It is sufficient for concrete toy skies and numerical forecasts.
3. **The complete horizon map.** A unique prediction for Bob's continuous image on Alice's sky requires a map from exterior horizon events and directions to interior events and directions. Equation (27) proves that a fixed static horizon cannot provide that local null boundary throughout a changing matter–radiation–vacuum history.

The open geometry is now narrower than a generic request for "a horizon map." A completed construction must choose among:

- a moving or dynamical exterior boundary whose area follows Equation (25);
- a timelike transition layer, for which the companion junction notes already give exact conditions;
- a nonlocal duality between the two descriptions; or
- a higher-dimensional geometry whose four-dimensional projections produce both sides.

Any of these choices can feed boundary data into the exact transfer operator derived here. The resulting angular map, luminosity distance, lensing, polarization rotation, and anisotropy spectrum would then become genuine observational tests.

---

## References

1. Ellis, G. F. R. “Relativistic Cosmology.” In *General Relativity and Cosmology*, edited by R. K. Sachs, 104–182. Academic Press, 1971.
2. Misner, C. W., Thorne, K. S., and Wheeler, J. A. *Gravitation*. W. H. Freeman, 1973.
3. Barrabès, C., and Israel, W. “Thin Shells in General Relativity and Cosmology: The Lightlike Limit.” *Physical Review D* 43, no. 4 (1991): 1129–1142. [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
4. Poisson, E. “A Reformulation of the Barrabès–Israel Null-Shell Formalism.” arXiv:gr-qc/0207101 (2002). [arXiv:gr-qc/0207101](https://arxiv.org/abs/gr-qc/0207101).
5. Gaztañaga, E. “The Black Hole Universe, Part I.” *Symmetry* 14, no. 9 (2022): 1849. [doi:10.3390/sym14091849](https://doi.org/10.3390/sym14091849).
