# The Trapping-Horizon Enthalpy Identity

## Horizon Growth, Friedmann Dynamics, and the Parent–Child Boundary in Geometric Duality

**Gilan Salehi**  
Working note — September 2026

**Status:** Exact FLRW horizon identity and conditional parent–child correspondence. The Einstein equations determine the child-side relation; its parent-side interpretation requires the marginal-surface identification and an independently obtained event-map clock.

**Prerequisites:** [GD I: *Geometric Duality*](gd1.html); [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior); [*Marginality Transfer and the Reciprocal Cosmological Clock*](note.html?src=marginality_transfer_and_reciprocal_cosmological_clock).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

Geometric Duality proposes that a child cosmological region is born directly at gravitational collapse and subsequently evolves according to the reciprocal ansatz

$$
a=\frac1r.
$$

The reciprocal construction already preserves the standard matter, radiation, curvature, and vacuum-energy Friedmann scalings. The remaining background problem is not to reconstruct the expansion a second time, but to identify its parent-side horizon representation.

Consider the conditional marginal-surface correspondence

$$
\boxed{R_T^P=R_A^C},
$$

where \(R_T^P\) is the parent trapping-horizon radius and \(R_A^C\) is the child FLRW apparent-horizon radius. The identification concerns corresponding marginal two-spheres, not the complete parent and child horizon worldtubes.

For a spatially flat FLRW child, \(R_A=c/H\). Einstein's equations then give

$$
\boxed{
\frac{dR_A}{d\tau_C}
=
\frac{4\pi G R_A^2}{c^3}(\epsilon+p).
}
$$

Thus cosmological apparent-horizon growth is controlled by the enthalpy density \(\epsilon+p\), rather than by total density alone.

If corresponding marginal cross-sections are related by a parent–child lapse

$$
N_H\equiv\frac{d\tau_C}{dt_P},
$$

define

$$
\boxed{
\Xi_H
\equiv
\frac{1}{2cN_H}\frac{dR_T}{dt_P}.
}
$$

Then

$$
\boxed{
\Xi_H
=
\frac34\frac{\epsilon+p}{\epsilon}
=
\frac34(1+w_{\rm eff})
=
\frac{1+q}{2}.
}
$$

For a flat radiation–matter–vacuum mixture,

$$
\boxed{
\Xi_H=\Omega_r+\frac34\Omega_m.
}
$$

Radiation, matter, and vacuum domination therefore appear as the horizon-flow sequence

$$
\boxed{1\longrightarrow\frac34\longrightarrow0.}
$$

The same scalar determines the Hayward–Kodama surface gravity, FLRW work density, and—within an ingoing-Vaidya benchmark—the event-to-trapping-horizon growth variable used by the low-torsion branch calculation. What previously appeared as several separate horizon, clock, thermodynamic, and junction correspondences are different representations of the same background Einstein dynamics.

---

## 1. Scope and claim status

Four ingredients must remain distinct.

### 1.1 Reciprocal interior ansatz

Geometric Duality begins with

$$
\boxed{a=\frac1r.}
\tag{1}
$$

Applied to an isotropic reciprocal interior, conservation preserves

$$
\epsilon_r\propto a^{-4},
\qquad
\epsilon_m\propto a^{-3},
\qquad
\epsilon_\Lambda=\mathrm{constant}.
\tag{2}
$$

The complete flat Friedmann background is already present in the reciprocal construction. The present note does not derive those dynamics again.

### 1.2 Standard spherical general relativity

Misner–Sharp energy, trapping horizons, FLRW apparent horizons, Hayward–Kodama surface gravity, and Hayward's unified first law are established formulations of spherical Einstein gravity. Results derived solely from those ingredients are standard GR identities.

### 1.3 Parent–child marginal-surface hypothesis

The specifically CSBHI step is

$$
\boxed{S_T^P\longleftrightarrow S_A^C,}
\tag{3}
$$

with preservation of the marginal-sphere data

$$
R_T^P=R_A^C,
\qquad
E_{\rm MS}^P=E_{\rm MS}^C.
\tag{4}
$$

This is a correspondence between two-sphere cross-sections. It is not the stronger worldtube identity

$$
\mathcal H_T^P=\mathcal H_A^C.
$$

The two horizon worldtubes can have different causal signatures during dynamical evolution.

### 1.4 Clock

A physical association between successive parent and child marginal spheres requires an event map. Write its lapse as

$$
\boxed{
N_H\equiv\frac{d\tau_C}{dt_P}.
}
\tag{5}
$$

Nothing in the present derivation chooses \(N_H\) from observed cosmology. When a collapse calculation supplies \(N_H\) independently, the identities below become direct parent-side tests.

---

## 2. Marginality fixes the energy scale

In spherical symmetry, the Misner–Sharp energy satisfies [1]

$$
1-\frac{2GE_{\rm MS}}{c^4R}
=
h^{ab}\nabla_aR\nabla_bR.
\tag{6}
$$

On a marginal sphere,

$$
h^{ab}\nabla_aR\nabla_bR=0,
$$

so

$$
\boxed{
E_{\rm MS}=\frac{c^4R}{2G}.
}
\tag{7}
$$

For the child FLRW region,

$$
E_{\rm MS}=\frac{4\pi}{3}R^3\epsilon,
\tag{8}
$$

where \(\epsilon\) is total energy density. Equating Equations (7) and (8) on the child apparent horizon gives

$$
\boxed{
\epsilon=\frac{3c^4}{8\pi GR_A^2}.
}
\tag{9}
$$

For a spatially flat child,

$$
R_A=\frac{c}{H},
\tag{10}
$$

so Equation (9) is the flat Friedmann constraint

$$
H^2=\frac{8\pi G}{3c^2}\epsilon.
\tag{11}
$$

Under the CSBHI cross-sectional correspondence,

$$
\boxed{
R_T^P=R_A^C=\frac{c}{H_C}.
}
\tag{12}
$$

The parent trapping radius therefore fixes the instantaneous child Hubble scale.

---

## 3. Apparent-horizon evolution

The second flat Friedmann equation is

$$
\dot H
=
-\frac{4\pi G}{c^2}(\epsilon+p),
\tag{13}
$$

where the dot denotes differentiation with respect to child proper time \(\tau_C\), and \(p\) is expressed in energy-density units.

Since \(R_A=c/H\),

$$
\dot R_A=-\frac{c\dot H}{H^2}.
\tag{14}
$$

Using Equations (10) and (13),

$$
\boxed{
\dot R_A
=
\frac{4\pi GR_A^2}{c^3}(\epsilon+p).
}
\tag{15}
$$

Equation (9) reduces this to

$$
\boxed{
\dot R_A
=
\frac{3c}{2}\frac{\epsilon+p}{\epsilon}.
}
\tag{16}
$$

For \(w_{\rm eff}=p/\epsilon\),

$$
\boxed{
\dot R_A=\frac{3c}{2}(1+w_{\rm eff}).
}
\tag{17}
$$

Apparent-horizon growth is therefore proportional to enthalpy density. Vacuum energy affects the curvature scale through \(\epsilon\), but contributes no enthalpy because \(p_\Lambda=-\epsilon_\Lambda\). It drives the horizon toward a constant radius rather than continued growth.

---

## 4. Transfer to the parent trapping surface

Let corresponding marginal cross-sections obey

$$
R_T(t_P)=R_A(\tau_C(t_P)).
\tag{18}
$$

Differentiating gives

$$
\frac{dR_T}{dt_P}=N_H\dot R_A.
\tag{19}
$$

Define the dimensionless horizon-flow scalar

$$
\boxed{
\Xi_H
\equiv
\frac{1}{2cN_H}\frac{dR_T}{dt_P}.
}
\tag{20}
$$

Equations (16) and (19) yield

$$
\boxed{
\Xi_H
=
\frac34\frac{\epsilon+p}{\epsilon}
=
\frac34(1+w_{\rm eff}).
}
\tag{21}
$$

Using

$$
q\equiv-1-\frac{\dot H}{H^2},
\tag{22}
$$

one has \(\dot R_A/c=1+q\), so

$$
\boxed{
\Xi_H=\frac{1+q}{2}.
}
\tag{23}
$$

Once the child apparent horizon is identified with the parent trapping surface and the event-map clock is supplied, normalized parent trapping-horizon growth is exactly the child's normalized enthalpy.

---

## 5. Radiation, matter, and vacuum

For a flat child containing radiation, pressureless matter, and vacuum energy,

$$
\epsilon=\epsilon_r+\epsilon_m+\epsilon_\Lambda,
\tag{24}
$$

$$
p=\frac13\epsilon_r-\epsilon_\Lambda.
\tag{25}
$$

Hence

$$
\boxed{
\epsilon+p=\frac43\epsilon_r+\epsilon_m.
}
\tag{26}
$$

Define \(\Omega_i=\epsilon_i/\epsilon\). Equation (21) becomes

$$
\boxed{
\Xi_H=\Omega_r+\frac34\Omega_m.
}
\tag{27}
$$

Using the standard component scalings,

$$
\boxed{
\Xi_H(a)
=
\frac{
\Omega_{r0}a^{-4}+\frac34\Omega_{m0}a^{-3}
}{
\Omega_{r0}a^{-4}+\Omega_{m0}a^{-3}+\Omega_{\Lambda0}
}.
}
\tag{28}
$$

The cosmic sequence becomes a horizon-flow sequence:

$$
\begin{array}{lll}
\text{radiation:} & \Xi_H=1, & \dot R_A=2c,\\[4pt]
\text{matter:} & \Xi_H=\frac34, & \dot R_A=\frac32c,\\[4pt]
\text{vacuum:} & \Xi_H=0, & \dot R_A=0.
\end{array}
\tag{29}
$$

Thus

$$
\boxed{1\longrightarrow\frac34\longrightarrow0.}
\tag{30}
$$

The rates in Equation (29) describe the evolution of a geometric apparent-horizon radius. They are not local velocities of material objects.

---

## 6. The same history without a clock

The cross-sectional radius history can be expressed directly in terms of the child scale factor. Since \(R_A=c/H\),

$$
\frac{d\ln R_A}{d\ln a}
=
-\frac{\dot H}{H^2}.
$$

Therefore

$$
\boxed{
\frac{d\ln R_T}{d\ln a}
=
2\Xi_H
=
\frac32(1+w_{\rm eff}),
}
\tag{31}
$$

where \(R_T(a)\) is the parent trapping radius assigned to child epoch \(a\), not the reciprocal radial coordinate of an individual infalling worldline.

For single-component eras,

$$
\boxed{
R_T\propto
\begin{cases}
a^2, & \text{radiation},\\[4pt]
a^{3/2}, & \text{matter},\\[4pt]
\mathrm{constant}, & \text{vacuum}.
\end{cases}
}
\tag{32}
$$

For the complete flat mixture,

$$
\boxed{
R_T(a)
=
\frac{c/H_0}{
\sqrt{
\Omega_{r0}a^{-4}
+\Omega_{m0}a^{-3}
+\Omega_{\Lambda0}
}}.
}
\tag{33}
$$

The marginal Misner–Sharp mass is

$$
\boxed{
M_T(a)
=
\frac{c^2R_T(a)}{2G}
=
\frac{c^3}{2GH(a)}.
}
\tag{34}
$$

Equations (33) and (34) are not new cosmological dynamics. They are the parent marginal-horizon representation of the specified child Friedmann history.

---

## 7. Unified-first-law interpretation

Hayward's unified first law in spherical Einstein gravity is [2]

$$
\nabla_aE=A\psi_a+W\nabla_aV,
\tag{35}
$$

where

$$
A=4\pi R^2,
\qquad
V=\frac{4\pi}{3}R^3,
\tag{36}
$$

$$
W=-\frac12T^{ab}h_{ab},
\tag{37}
$$

and

$$
\psi_a
=
T_a{}^b\nabla_bR+W\nabla_aR.
\tag{38}
$$

For a perfect FLRW fluid,

$$
\boxed{W_C=\frac{\epsilon-p}{2}.}
\tag{39}
$$

Projected along a trapping or apparent horizon, Equation (35) becomes the corresponding dynamical-horizon first law [2,3]. The unified first law is a reorganization of the spherical Einstein equations, so its agreement with the Friedmann derivation is an equivalence rather than an independent confirmation.

On any mapped marginal sphere,

$$
E=\frac{c^4R}{2G}.
$$

Therefore

$$
\frac{dE_P}{dt_P}
=
\frac{c^4}{2G}\frac{dR_T}{dt_P}.
\tag{40}
$$

Using Equations (15) and (19),

$$
\boxed{
\frac{dE_P}{dt_P}
=
2\pi c\,N_HR^2(\epsilon_C+p_C).
}
\tag{41}
$$

The parent unified first law then gives

$$
\boxed{
A\psi_a^Pz_P^a
+W_P\frac{dV}{dt_P}
=
2\pi c\,N_HR^2(\epsilon_C+p_C),
}
\tag{42}
$$

where \(z_P^a\) is the parent trapping-horizon evolution vector in the chosen parametrization. Equivalently,

$$
\boxed{
\epsilon_C+p_C
=
\frac{1}{2\pi cN_HR^2}\frac{dE_P}{dt_P}.
}
\tag{43}
$$

The child's background enthalpy density is the parent marginal-horizon energy-growth rate expressed in child proper time. For a specified collapse and an independently derived \(N_H\), Equation (43) is a test rather than a fitted relation.

---

## 8. Surface gravity and work density

Using a common Hayward–Kodama convention, the surface gravity on a marginal sphere can be written [2,4]

$$
\kappa
=
\frac{c^2}{2R}
-\frac{4\pi GR}{c^2}W.
\tag{44}
$$

For the flat FLRW child,

$$
\kappa_A
=
-\frac{c^2}{R_A}
\left(1-\frac{\dot R_A}{2c}\right).
\tag{45}
$$

Because \(\dot R_A/(2c)=\Xi_H\),

$$
\boxed{
\kappa_A=-\frac{c^2}{R}(1-\Xi_H).
}
\tag{46}
$$

Using \(w=4\Xi_H/3-1\), the FLRW work density becomes

$$
\boxed{
W_C
=
\frac{c^4}{8\pi GR^2}(3-2\Xi_H).
}
\tag{47}
$$

Thus \(\Xi_H\) controls both horizon growth and the transverse curvature encoded by \(\kappa_A\).

If two spherical Einstein solutions are compared on marginal cross-sections of the same radius,

$$
\boxed{
\kappa_P-\kappa_C
=
\frac{4\pi GR}{c^2}(W_C-W_P),
}
\tag{48}
$$

provided the same orientation and Hayward–Kodama normalization are used on both sides.

A surface-gravity difference does not by itself require an exotic membrane or an additional macroscopic spacetime region. It can represent the ordinary difference in work density between the two descriptions.

---

## 9. Vaidya specialization

For ingoing Vaidya null dust,

$$
W_P=0,
\tag{49}
$$

and the parent trapping-horizon surface gravity is

$$
\kappa_T=\frac{c^2}{2R_T}.
\tag{50}
$$

Under the additional dual-event-horizon correspondence, the Vaidya null equations give [5]

$$
\boxed{
N_v
\equiv
\frac{d\tau_C}{dv}
=
\frac{R_T}{2R_E},
}
\tag{51}
$$

where \(R_E\) is the parent event-horizon radius. Substitution into Equation (20) gives

$$
\boxed{
\Xi_H
=
\frac{R_E}{R_T}\frac1c\frac{dR_T}{dv}.
}
\tag{52}
$$

The earlier Vaidya relation

$$
w_{\rm eff}
=
-1+
\frac43\frac{R_E}{R_T}\frac1c\frac{dR_T}{dv}
\tag{53}
$$

is therefore Equation (21) expressed using the Vaidya clock. Vaidya does not supply a second cosmological evolution competing with the reciprocal Friedmann solution. Its principal contribution is a candidate geometric synchronization that converts parent horizon evolution into child proper time.

---

## 10. Reinterpretation of the transverse-junction residual

For the Vaidya parent, Equation (48) becomes

$$
\kappa_T-\kappa_A
=
\frac{4\pi GR}{c^2}W_C.
\tag{54}
$$

Using Equation (47),

$$
\boxed{
\kappa_T-\kappa_A
=
\frac{c^2}{2R}(3-2\Xi_H).
}
\tag{55}
$$

This is the scalar previously encountered as the sharp transverse-derivative residual. The same \(\Xi_H\) appears in

$$
\boxed{
\begin{aligned}
\text{equation of state:}\quad&
w_{\rm eff}=\frac43\Xi_H-1,\\[4pt]
\text{deceleration:}\quad&
q=2\Xi_H-1,\\[4pt]
\text{horizon growth:}\quad&
\dot R_A=2c\Xi_H,\\[4pt]
\text{surface gravity:}\quad&
\kappa_A=-\frac{c^2}{R}(1-\Xi_H),\\[4pt]
\text{work density:}\quad&
W_C=\frac{c^4}{8\pi GR^2}(3-2\Xi_H).
\end{aligned}
}
\tag{56}
$$

These are five representations of the same background Einstein dynamics, not five independent mechanisms.

---

## 11. Macroscopic birth and the radiation branch

The Einstein–Cartan consistency calculation applied to the same dual-horizon variable finds that a macroscopic growing horizon selects a low-torsion branch [5],

$$
\frac{\sigma}{\epsilon}
\sim
\frac{\ell_{\rm Pl}}{R_T}
\ll1.
\tag{57}
$$

In the vacuum-negligible limit, that branch approaches

$$
\Xi_H\simeq1.
\tag{58}
$$

Equation (21) shows immediately that \(\Xi_H\simeq1\) means \(w_{\rm eff}\simeq1/3\). The macroscopic low-torsion branch and the reciprocal Friedmann construction therefore meet on a radiation-like birth state.

This is a cross-consistency result, not a fully independent derivation of radiation domination: both calculations depend on the proposed parent–child horizon architecture.

---

## 12. Present-epoch consistency check

No present-day cosmological value was used to derive Equations (21), (27), or (43). As a post-derivation check, use the flat-background values employed in GD I,

$$
\Omega_{m0}\simeq0.315,
\qquad
\Omega_{r0}\simeq9.2\times10^{-5},
\qquad
\Omega_{\Lambda0}\simeq0.6849.
$$

Equation (27) gives

$$
\Xi_{H0}\simeq0.2363.
\tag{59}
$$

Therefore

$$
q_0=2\Xi_{H0}-1\simeq-0.527,
\tag{60}
$$

and

$$
\dot R_{A0}
=
2c\Xi_{H0}
\simeq0.473c.
\tag{61}
$$

GD I gives

$$
R_{A0}\simeq14.51\ {\rm Gly},
\qquad
R_\Lambda\simeq17.53\ {\rm Gly},
$$

so

$$
\boxed{
\frac{R_{A0}}{R_\Lambda}\simeq0.828.
}
\tag{62}
$$

The child apparent horizon is already about \(83\%\) of its asymptotic radius. The integrated cosmological event horizon in the same background is approximately

$$
R_e\simeq16.68\ {\rm Gly},
\qquad
\frac{R_e}{R_\Lambda}\simeq0.952.
\tag{63}
$$

These values are consequences of the chosen Friedmann background. They do not establish the parent event-horizon correspondence.

---

## 13. What the result establishes

Within spatially flat spherical Einstein gravity, the following identity is exact:

> **The FLRW apparent-horizon growth rate is proportional to the total enthalpy density \(\epsilon+p\).**

Under the additional marginal-cross-section identification \(R_T^P=R_A^C\) and a specified event-map lapse \(N_H=d\tau_C/dt_P\),

$$
\boxed{
\frac{1}{2cN_H}\frac{dR_T}{dt_P}
=
\frac34\frac{\epsilon_C+p_C}{\epsilon_C}.
}
\tag{64}
$$

For the reciprocal matter–radiation–vacuum background,

$$
\boxed{
\frac{1}{2cN_H}\frac{dR_T}{dt_P}
=
\Omega_r+\frac34\Omega_m.
}
\tag{65}
$$

In energy-flow form,

$$
\boxed{
\frac{dE_P}{dt_P}
=
2\pi c\,N_HR_T^2(\epsilon_C+p_C).
}
\tag{66}
$$

These equations provide a compact parent-side representation of the child Friedmann history.

---

## 14. What remains open

The derivation does not establish:

1. that the parent trapping-horizon and child apparent-horizon worldtubes form one smooth hypersurface;
2. that their differing causal signatures have been reconciled;
3. that a complete null, non-null, or finite-width transition geometry has been constructed;
4. that the event-map lapse \(N_H\) has been derived for arbitrary realistic collapse;
5. that the Vaidya event-horizon correspondence is universal;
6. that perturbations, angular momentum, shear, Weyl curvature, or nonspherical collapse obey the same map;
7. or that the reciprocal ansatz follows from standard GR.

The principal physical postulate remains the reciprocal parent–child identification. The principal GD II problem remains its realization at collapse.

---

## 15. Implications for Geometric Duality II

GD I supplies

$$
a(\tau_C),
\qquad
H(a),
\qquad
\epsilon_i(a).
$$

Marginality supplies

$$
R_T^P=R_A^C=\frac{c}{H_C}.
$$

Einstein's equations then supply

$$
\epsilon+p
\longleftrightarrow
\text{horizon growth}.
$$

The unknown background structure is therefore no longer the child expansion history. A specified parent collapse must instead furnish:

1. the required sequence of marginal cross-sections;
2. the event map associating those spheres with child epochs;
3. an independently determined \(N_H\);
4. and parent horizon energy supply consistent with Equation (66).

The test of a realistic timelike-collapse model is not whether it independently rediscovers the Friedmann equation. It is whether its horizon dynamics, evaluated using an independently obtained clock, satisfy

$$
\boxed{
A\psi_a^Pz_P^a
+W_P\frac{dV}{dt_P}
=
2\pi c\,N_HR^2(\epsilon_C+p_C)
}
\tag{67}
$$

throughout the mapped history.

---

## 16. Conclusion

The reciprocal interior already preserves the familiar matter, radiation, and vacuum-energy Friedmann dynamics. The new question is where those dynamics live on the parent side.

If the parent trapping surface is identified cross-sectionally with the child apparent horizon,

$$
R_T^P=R_A^C,
$$

then

$$
\boxed{
\frac{dR_A}{d\tau_C}
=
\frac{4\pi GR_A^2}{c^3}(\epsilon+p),
}
\tag{68}
$$

and

$$
\boxed{
\Xi_H
=
\frac{1}{2cN_H}\frac{dR_T}{dt_P}
=
\frac34\frac{\epsilon+p}{\epsilon}.
}
\tag{69}
$$

For the reciprocal matter–radiation–vacuum background,

$$
\boxed{
\Xi_H=\Omega_r+\frac34\Omega_m.
}
\tag{70}
$$

The cosmic history becomes the horizon-flow sequence

$$
\boxed{
1\longrightarrow\frac34\longrightarrow0.
}
\tag{71}
$$

Radiation produces maximal horizon growth, pressureless matter produces the intermediate rate, and vacuum energy freezes the horizon because its enthalpy vanishes.

The same scalar determines the equation of state, deceleration, surface gravity, work density, and Vaidya horizon-growth variable. These are not separate mechanisms. They are different faces of the same background Einstein dynamics.

The central parent–child statement is therefore

$$
\boxed{
\text{parent horizon-energy growth}
\longleftrightarrow
\text{child enthalpy}
\longleftrightarrow
\text{Friedmann evolution}.
}
\tag{72}
$$

If the full event map supplies the required clock, the trapping surface becomes the parent-side representation of the child's cosmological background.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964). [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. S. A. Hayward, “Unified First Law of Black-Hole Dynamics and Relativistic Thermodynamics,” *Classical and Quantum Gravity* **15**, 3147–3162 (1998). [arXiv:gr-qc/9710089](https://arxiv.org/abs/gr-qc/9710089); [doi:10.1088/0264-9388/15/10/017](https://doi.org/10.1088/0264-9388/15/10/017).
3. R.-G. Cai and L.-M. Cao, “Unified First Law and Thermodynamics of Apparent Horizon in FRW Universe,” *Physical Review D* **75**, 064008 (2007). [arXiv:gr-qc/0611071](https://arxiv.org/abs/gr-qc/0611071); [doi:10.1103/PhysRevD.75.064008](https://doi.org/10.1103/PhysRevD.75.064008).
4. V. Faraoni, “Cosmological Apparent and Trapping Horizons,” *Physical Review D* **84**, 024003 (2011). [arXiv:1106.4427](https://arxiv.org/abs/1106.4427); [doi:10.1103/PhysRevD.84.024003](https://doi.org/10.1103/PhysRevD.84.024003).
5. G. Salehi, [“Macroscopic Horizon Birth Selects the Low-Torsion Einstein–Cartan Branch”](note.html?src=macroscopic_horizon_birth_low_torsion_branch), working note (2026).
6. G. Salehi, [“Marginality Transfer and the Reciprocal Cosmological Clock”](note.html?src=marginality_transfer_and_reciprocal_cosmological_clock), working note (2026).
7. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html), preprint (2026). [doi:10.5281/zenodo.21864669](https://doi.org/10.5281/zenodo.21864669).
