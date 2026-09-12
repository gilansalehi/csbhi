# Perturbing the Conformal Formation Map

## LTB horizon sweep, null-beam timing, and the unresolved conformal calibration

**Working calculation — September 2026. Source: upstream project derivation. Review and revisions: Codex (OpenAI).**

> **Notation update — September 2026.** This note retains Result IV's \(\Gamma\) for the local formation-patch Weyl factor. Current cross-project notation calls it \(\Omega_{\rm W}\), distinct from the mature ruler scale \(\Gamma_{\rm GD}=a^2\).

## Abstract

[Result IV](note.html?src=result_iv_conformal_formation_map) maps the event-horizon formation history of homogeneous Oppenheimer–Snyder (OS) collapse exactly onto an outgoing null cone. This note perturbs that benchmark within Lemaître–Tolman–Bondi (LTB) dust.

The perturbation is taken around the conformal formation map \(g_C=\Gamma^2g_P\). It does not impose equality of parent and child areal radii or Misner–Sharp masses, and it does not assume that marginality transfers between the two frames.

To first order, one radial-metric perturbation controls both the displacement of the growing event-horizon generator and the optical delay accumulated by an ingoing beam:

\[
h
=
\varepsilon+\tan q\,\partial_q\varepsilon
-\frac12\sec^2q\,\delta\mathcal E.
\]

With the perturbed horizon vertex chosen as the origin,

\[
\delta\eta_H(q)=\int_0^q h(s,s)\,ds,
\]

while a beam normalized at the stellar surface acquires

\[
\delta v_H(q)
=
-\int_q^{q_0}h(2q-s,s)\,ds.
\]

The two effects give the perturbed operational ordering of the horizon-crossing events. Continuing the OS null-coordinate calibration gives the radial-null contribution

\[
\delta\Phi_{\rm null}
=
\frac14\sec^2q\,\Delta v_H^{\rm rel}.
\]

Generic LTB collapse has nonzero Weyl curvature and therefore cannot be conformally mapped to exact FLRW. The child target must be perturbed FLRW. An isotropic conformal perturbation cancels from the first-order radial null-speed combination \(\Phi_B+\Psi_B\), but the Weyl tensor alone does not reconstruct the child light cone: the perturbed constraints, gauge choice, and boundary data remain necessary.

The calculation also isolates the GD datum not fixed by the cohort law. The function

\[
K(q)
\equiv
\mathscr A_{C,H}(q)\frac{R_H(q)}{\sin q}
\]

sets the absolute conformal calibration assigned to each crossing shell. GD1 fixes subsequent relative evolution but not \(K(q)\). Exact OS symmetry reduces it to one constant. In perturbed collapse, a covariant birth or junction law must determine its spatial variation.

The minimal closure hypothesis is \(K(q)=K_0\) in a specified mass gauge: one black-hole birth establishes one global calibration. That hypothesis is testable; it is not yet derived.

---

## 1. Perturbed LTB radial geometry

Use the LTB dust convention

\[
ds_P^2
=
-dt^2
+\frac{R_{,q}^2}{1+\mathcal E(q)}dq^2
+R^2d\Omega^2,
\tag{1}
\]

with

\[
\dot R^2=\frac{2M(q)}R+\mathcal E(q).
\tag{2}
\]

The homogeneous OS solution is

\[
R_0=S(\eta)\sin q,
\qquad
\mathcal E_0=-\sin^2q,
\qquad
dt=S\,d\eta.
\tag{3}
\]

The formation-from-horizon-free-data benchmark assumes \(q_0<\pi/3\), so the background event-horizon vertex \(\eta_0=\pi-3q_0\) lies after the conventional OS initial slice.

Perturb the areal radius and energy function:

\[
R=S\sin q\,[1+\varepsilon(\eta,q)],
\qquad
\mathcal E=-\sin^2q+\delta\mathcal E(q).
\tag{4}
\]

Expanding the radial metric gives

\[
ds^2_{P,{\rm radial}}
=
S^2\left[-d\eta^2+(1+2h)dq^2\right],
\tag{5}
\]

where

\[
\boxed{
h
=
\varepsilon
+\tan q\,\partial_q\varepsilon
-\frac12\sec^2q\,\delta\mathcal E.
}
\tag{6}
\]

Radial null curves therefore satisfy

\[
\boxed{
\frac{d\eta}{dq}=\pm(1+h).
}
\tag{7}
\]

Once the LTB evolution equation, mass gauge, bang-time data, and boundary matching are imposed, \(\varepsilon\) and \(\delta\mathcal E\) are not arbitrary independent perturbations. Equation (6) is the kinematic combination obtained from a specified LTB solution.

In a fixed-Misner–Sharp-mass gauge, the first-order relation between radius and enclosed mean-density contrast is

\[
\boxed{
\varepsilon=-\frac13\bar\delta_P.
}
\tag{8}
\]

It follows from \(M\propto\bar\rho R^3\) at fixed mass. It is gauge-specific, not a scalar identity under arbitrary radial relabeling.

---

## 2. Perturbation of the growing event horizon

Shift OS conformal time so the background horizon vertex is at the origin,

\[
\bar\eta=\eta-\eta_0,
\qquad
\bar\eta_H^{(0)}=q.
\]

Write the perturbed generator as

\[
\boxed{
\bar\eta_H(q)=q+\delta\eta_H(q).
}
\tag{9}
\]

Using the outgoing sign in Equation (7),

\[
\boxed{
\delta\eta_H'(q)=h(\bar\eta=q,q).
}
\tag{10}
\]

Choose the actual perturbed event-horizon vertex as the origin. Then

\[
\boxed{
\delta\eta_H(q)=\int_0^q h(s,s)\,ds.
}
\tag{11}
\]

In the background conversion \(dt=S\,d\eta\), the first-order proper-time shift at fixed shell label is

\[
\boxed{
\delta t_H(q)=S_H(q)\,\delta\eta_H(q).
}
\tag{12}
\]

Equation (11) determines the shape of a selected outgoing null generator relative to its vertex. Selecting that generator as the event horizon remains a global operation: its vertex or late-time endpoint must be supplied by the exterior causal solution.

It also supplies an immediate surface-anchor test. Once the time gauge is fixed at the vertex,

\[
\delta\eta_H(q_0)
=
\int_0^{q_0}h(s,s)\,ds
\]

is predicted by the interior. It must equal the perturbation of the event-horizon crossing obtained independently from the stellar surface and exterior solution. A mismatch means the selected interior generator is not the global event horizon or the assumed perturbation data fail the boundary matching.

Using Equation (8),

\[
h
=
-\frac13\left[
\bar\delta_P+\tan q\,\partial_q\bar\delta_P
\right]
-\frac12\sec^2q\,\delta\mathcal E,
\tag{13}
\]

so

\[
\boxed{
\delta\eta_H(q)
=
-\frac13\int_0^q
\left[
\bar\delta_H+\tan s\,\partial_s\bar\delta_H
\right]ds
-\frac12\int_0^q
\sec^2s\,\delta\mathcal E(s)\,ds.
}
\tag{14}
\]

An overdensity moves the crossing earlier only when the full density-gradient and energy-function combination makes \(h<0\). The sign does not follow from \(\bar\delta>0\) alone.

---

## 3. Operational timing from an ingoing beam

Define a perturbed ingoing null coordinate

\[
\tilde v=\bar\eta+q+\delta v.
\tag{15}
\]

Demanding that \(\tilde v\) remain constant along incoming radial rays gives

\[
\boxed{
(\partial_{\bar\eta}-\partial_q)\delta v=-h.
}
\tag{16}
\]

Normalize \(\delta v=0\) where the beam enters the OS matter region at the stellar surface. A background ray intersecting the horizon at shell \(q\) follows \(\bar\eta=2q-s\) while crossing shell coordinate \(s\). Its accumulated interior distortion is

\[
\boxed{
\delta v_H(q)
=
-\int_q^{q_0}h(2q-s,s)\,ds.
}
\tag{17}
\]

The crossing event contains the displacement of the horizon and the beam-path correction:

\[
\boxed{
\Delta v_H(q)=\delta\eta_H(q)+\delta v_H(q).
}
\tag{18}
\]

Subtracting the vertex value preserves the child origin,

\[
\Delta v_H^{\rm rel}(q)
=
\Delta v_H(q)-\Delta v_H(0),
\tag{19}
\]

and the ordered parent formation history becomes

\[
\boxed{
v_H(q)-v_H(0)
=
2q+\Delta v_H^{\rm rel}(q).
}
\tag{20}
\]

Equation (17) is the interior contribution under a fixed surface normalization. A physical beam clock must eventually include the perturbed stellar surface, exterior propagation, and source proper time.

---

## 4. Radial contribution to the formation map

In exact OS,

\[
V=\tan\frac v2,
\qquad
\Phi_0(q)=\frac12\tan q.
\]

If the same null-coordinate calibration is continued perturbatively, Equation (20) gives

\[
\boxed{
\delta\Phi_{\rm null}(q)
=
\frac14\sec^2q\,\Delta v_H^{\rm rel}(q).
}
\tag{21}
\]

Equation (21) uses the \(\beta=0\), unit-normalized member of the vertex-preserving conformal family. More generally,

\[
\Phi_{\beta,0}(q)
=
\frac{\lambda}{2}
\frac{\tan q}{1+\beta\tan q},
\]

and the radial perturbation becomes

\[
\boxed{
\delta\Phi_{\beta,{\rm null}}(q)
=
\frac{\lambda}{4}
\frac{\sec^2q}{(1+\beta\tan q)^2}
\Delta v_H^{\rm rel}(q).
}
\]

The null kinematics do not select \(\beta\) or \(\lambda\). Their physical determination belongs to the same conformal-completion problem as \(K(q)\).

This is a definite radial-null result once the beam normalization and continuation of \(V(v)\) are specified. It is not yet the complete gauge-invariant child event-map perturbation. A null-coordinate reparameterization changes its numerical form, while the angular geometry and child metric constraints determine how the ordering is represented in perturbed FLRW coordinates.

---

## 5. Why the child must be perturbed FLRW

OS is conformally flat, \(C_{abcd}=0\). Generic LTB dust has nonzero Weyl curvature. Since the mixed Weyl tensor is invariant under a smooth Weyl rescaling, a generic LTB region cannot be conformally transformed into exact FLRW.

The target must therefore be

\[
\boxed{
\text{perturbed LTB parent}
\longleftrightarrow
\text{perturbed FLRW child}.
}
\tag{22}
\]

Write the scalar radial sector schematically as

\[
ds_C^2=A^2
\left[
-(1+2\Psi_B)d\eta^2
+(1-2\Phi_B)d\chi^2+\cdots
\right].
\]

An outgoing radial null curve satisfies

\[
\boxed{
\frac{d\chi}{d\eta}=1+\Phi_B+\Psi_B
}
\tag{23}
\]

to first order. Under a purely isotropic conformal perturbation \(g_{ab}\mapsto(1+2\omega)g_{ab}\),

\[
\Psi_B\mapsto\Psi_B+\omega,
\qquad
\Phi_B\mapsto\Phi_B-\omega,
\]

so

\[
\boxed{
\Phi_B+\Psi_B
\quad\text{is unchanged by }\omega.
}
\tag{24}
\]

The isotropic conformal mode changes local scale and the Ricci sector without changing this first-order radial null-speed combination. The remaining combination contains the non-conformal metric perturbation inherited from the parent and is closely related to the tidal or lensing sector.

This should not be shortened to “Weyl alone fixes the light cone.” Ricci curvature also focuses null congruences, and the Weyl tensor does not reconstruct \(\Phi_B+\Psi_B\) without field equations and boundary data. Perturbations of LTB backgrounds are especially delicate because their scalar, vector, and tensor sectors do not decouple as they do on exact FLRW.

---

## 6. The conformal calibration function

For each LTB shell, the GD1 cohort relation is

\[
\frac{\mathscr A_C(t,q)}{\mathscr A_{C,H}(q)}
=
\frac{R_H(q)}{R(t,q)}.
\tag{25}
\]

Here \(\mathscr A_C\) denotes the local isotropic scale in a chosen perturbed-FLRW slicing; the background FLRW scale factor remains a function of cosmic time alone.

Define

\[
\boxed{
K(q)
\equiv
\mathscr A_{C,H}(q)\frac{R_H(q)}{\sin q}.
}
\tag{26}
\]

Then

\[
\boxed{
\mathscr A_C(t,q)
=
K(q)\frac{\sin q}{R(t,q)}.
}
\tag{27}
\]

For exact OS, \(R=S\sin q\), and homogeneity gives

\[
K(q)=K_0,
\qquad
\mathscr A_C=\frac{K_0}{S}.
\]

For perturbed collapse write, in the fixed mass gauge,

\[
K(q)=K_0[1+\kappa_K(q)].
\]

Equation (4) then gives

\[
\boxed{
\delta\ln\mathscr A_C
=
\kappa_K(q)-\varepsilon(t,q).
}
\tag{28}
\]

Between crossing and a later event on the same cohort,

\[
\delta\ln\mathscr A_C(t,q)
-\delta\ln\mathscr A_{C,H}(q)
=
\varepsilon_H(q)-\varepsilon(t,q),
\tag{29}
\]

because \(\kappa_K\) cancels.

The reciprocal ansatz therefore fixes relative evolution after crossing. It does not fix the absolute scale assigned across different crossing cohorts.

The split into \(K_0\) and \(\kappa_K(q)\) depends on the shell gauge and child slicing. A physical closure law must define the calibration covariantly—for example through junction data, an invariant mass or area prescription, or a dynamical conformal field—not merely declare a coordinate function constant.

---

## 7. Inventory at the crossing surface

At the perturbed crossing event,

\[
\eta_H=\eta_H^{(0)}+\delta\eta_H,
\qquad
\Phi_{\rm map}=\Phi_0+\delta\Phi.
\]

The parent representation gives

\[
\delta\ln\mathscr A_{C,H}
=
\kappa_K-\varepsilon_H
-\mathcal H_{P,H}\delta\eta_H.
\tag{30}
\]

Define \(\mathcal S_H\) as the intrinsic child isotropic-scale perturbation at fixed child coordinate in the chosen slicing. Then

\[
\delta\ln\mathscr A_{C,H}
=
\mathcal H_{C,H}\delta\Phi+\mathcal S_H,
\tag{31}
\]

and hence

\[
\boxed{
\mathcal S_H
=
\kappa_K-\varepsilon_H
-\mathcal H_{P,H}\delta\eta_H
-\mathcal H_{C,H}\delta\Phi.
}
\tag{32}
\]

Equation (32) inventories the unknowns but remains slicing-dependent. \(\mathcal S_H\) should not automatically be identified with the gauge-invariant comoving curvature perturbation \(\zeta\). That conversion requires the completed child perturbation and stress-energy.

For a fully specified parent solution, the collapse supplies \(\varepsilon_H\), \(h\), and the relative horizon and beam shifts. The non-conformal child metric is then constrained by the inherited geometry and field equations. The specifically GD datum still missing is the covariant rule fixing \(K(q)\).

---

## 8. Minimal closure hypothesis

The simplest extension of the homogeneous map is

\[
\boxed{K(q)=K_0}
\tag{33}
\]

in a specified mass gauge: one black-hole birth establishes one global absolute conformal calibration, while departures from homology become child perturbations rather than independent conversion scales.

Equation (33) adds no new spatial degree of freedom. It is also stronger than GD1 and must be tested. A covariant formulation might imply it, replace it with a nonconstant functional of parent invariants, or rule it out.

If it survives, \(\kappa_K=0\), and Equation (32), together with the completed event map, fixes the initial child scale perturbation from parent collapse data.

---

## 9. Result and limits

Within first-order spherical LTB perturbations of the OS benchmark:

1. Equation (6) gives the radial null deformation.
2. Equations (10)–(11) give the relative shape of the selected horizon generator.
3. Equation (17) gives the independent ingoing-beam path correction.
4. Equation (20) gives the perturbed operational order of crossing events.
5. Equation (21) gives the radial contribution to the map under the continued OS calibration.
6. Generic LTB collapse requires a perturbed-FLRW child.
7. Isotropic conformal rescaling cancels from the first-order radial null-speed combination.
8. GD1 leaves an absolute formation calibration \(K(q)\).

The calculation does not yet complete the surface-anchor test against a specified exterior, the full source-clock transfer, a gauge-invariant child perturbation map, the perturbed Einstein constraints, a covariant law fixing \(K(q)\), or the continuation into the mature GD1 interior.

The highest-information next test is therefore

\[
\boxed{
K(q)=K_0
\quad\Longrightarrow\quad
G^C_{ab}[\Gamma,g_P]
\quad\stackrel{?}{\longrightarrow}\quad
\text{regular physical child perturbations}.
}
\]

That calculation must be repeated if the junction geometry selects a different calibration.

---

## Conclusion

Perturbing the OS formation map does not destroy its causal structure. The growing event horizon and an ingoing beam can both be followed analytically to first order through an LTB deformation. Their combined shift gives the perturbed operational ordering of the parent horizon-crossing events.

The calculation also locates the boundary of the kinematics. Generic LTB tidal curvature cannot be erased by conformal rescaling, so the child must be perturbed FLRW. The isotropic conformal mode changes scale without changing the first-order radial null-speed combination; the remaining metric perturbation must satisfy the child field equations.

GD1 determines the relative evolution of every cohort after crossing. It does not determine the absolute scale assigned across the family of crossing events. Exact OS symmetry hides that freedom in one constant. Perturbed collapse exposes it as \(K(q)\).

The next theory decision is therefore precise. Either a covariant birth law fixes \(K(q)\), with constant calibration as the minimal candidate, or the conformal formation map remains underdetermined at first order. Once that rule is supplied, the transformed Einstein tensor becomes a pass/fail test of the child perturbations.

---

## References

1. R. A. Sussman, “Radial Asymptotics of Lemaître–Tolman–Bondi Dust Models,” *General Relativity and Gravitation* **42**, 2813–2864 (2010), [doi:10.1007/s10714-010-1029-x](https://doi.org/10.1007/s10714-010-1029-x), [arXiv:1002.0173](https://arxiv.org/abs/1002.0173).
2. C. Clarkson, T. Clifton, and S. February, “Perturbation Theory in Lemaître–Tolman–Bondi Cosmology,” *JCAP* **06**, 025 (2009), [doi:10.1088/1475-7516/2009/06/025](https://doi.org/10.1088/1475-7516/2009/06/025), [arXiv:0903.5040](https://arxiv.org/abs/0903.5040).
3. J. T. Wheeler, “Weyl Geometry,” *General Relativity and Gravitation* **50**, 80 (2018), [doi:10.1007/s10714-018-2401-5](https://doi.org/10.1007/s10714-018-2401-5), [arXiv:1801.03178](https://arxiv.org/abs/1801.03178).
4. G. Salehi, [“Result IV — The Conformal Formation Map”](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
