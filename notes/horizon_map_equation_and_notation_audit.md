# Horizon-Map Equation and Notation Audit

*Step-one audit for the collapse-cohort calculation.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [GD I](gd1.html); [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary); [Next Steps for the Collapse-Cohort Horizon Map](note.html?src=next_steps_for_the_collapse_cohort_horizon_map).

**Status:** Equation inventory and notation normalization. No collapse benchmark or new dynamical law is assumed here. Tiered **[E]** established identity, **[C]** candidate CSBHI correspondence, **[O]** open.

---

## 1. The canonical variables

The direct collapse map will use the following notation.

| Symbol | Meaning |
|---|---|
| \(v_H\) | Physically normalized parameter along the parent black-hole event-horizon generator. |
| \(\tau\) | Alice's proper time and the child FLRW cosmic time. |
| \(\tau_i\) | Child cosmic time assigned to cohort \(i\)'s crossing. |
| \(\Delta\tau_i=\tau-\tau_i\) | Proper time elapsed aboard cohort \(i\) after crossing. |
| \(\eta\) | Child conformal time, \(d\eta=d\tau/a\). |
| \(R\) | Child comoving radial coordinate. |
| \(\bar R=aR\) | Child areal radius. |
| \(r_i(\Delta\tau_i)\) | Bob's horizon-normalized radial label assigned to cohort \(i\); \(r_i(0)=1\). |
| \(\Phi(v_H)\) | Candidate conversion from parent horizon progress to child conformal time and comoving radius. |
| \(R_{\rm BH}(v_H)\) | Areal radius of a parent black-hole event-horizon cross-section. |
| \(\Omega_\Sigma(v_H)\) | Conformal factor between the parent and child angular metrics on the candidate null correspondence. |
| \(\bar R_p(\tau)\) | Child particle-horizon areal radius; its present value is the glossary's \(R_p\). |
| \(B(\tau)\) | Child cosmological event-horizon areal radius; its present value is \(R_e=B_0\). |
| \(R_A(\tau)\) | Child apparent-horizon radius, \(c/H_A\) in spatially flat FLRW. |

The recent notes used \(T\) for global child time and \(\tau\) for elapsed onboard time. That duplication is unnecessary. The canonical form uses \(\tau\) for child cosmic time and \(\Delta\tau_i\) for elapsed time after crossing.

The conformal factor is written \(\Omega_\Sigma\), not \(\Omega_H\), to distinguish it from density fractions and to associate it with the candidate correspondence \(\Sigma\), not with an unspecified horizon radius.

---

## 2. The three maps already in hand

### Causal map [C]

The collapse-cohort construction proposes

\[
\boxed{
(\eta_i,R_i)
=
\bigl(\Phi(v_i),\Phi(v_i)\bigr)
},
\qquad R=\eta.
\tag{1}
\]

This is an outgoing child null history and the particle-horizon history of the selected central FLRW observer.

### Evolution map [C]

Once cohort \(i\) crosses,

\[
\boxed{
\frac{a(\tau)}{a(\tau_i)}
=
\frac{1}{r_i(\Delta\tau_i)}
}.
\tag{2}
\]

At every crossing, \(r_i(0)=1\). Equation (2) therefore evolves each cohort but cannot compare the crossing epochs \(\tau_i\).

### Homogeneous shell map [E/C]

Let \(s_*(\mu)\) denote the parent areal radius of the shell containing mass fraction \(\mu\) on the selected collapse surface. Let \(R(\mu)\) be its proposed child comoving label. Homogeneity gives

\[
s_*(\mu)=B_*\mu^{1/3},
\qquad
R(\mu)=R_b\mu^{1/3}.
\tag{3}
\]

Hence

\[
\frac{a(\tau)R(\mu)}{s_*(\mu)}
=
\frac{a(\tau)R_b}{B_*},
\tag{4}
\]

independent of \(\mu\). The common \(\mu^{1/3}\) profile fixes relative shell positions, not the clock \(\Phi\) or the overall conformal normalization.

The local symbols \(R_P\) and \(R_C\) used in the first shell note should not propagate into the series: \(R_p\) already denotes the particle horizon, while \(R_{\Lambda,P}\) and \(R_{\Lambda,C}\) denote parent and child de Sitter radii.

---

## 3. Particle and event horizons are opposite null branches

This is the most important result of the audit.

For the outgoing child null history in Equation (1),

\[
R=\eta,
\qquad
\bar R_p(\tau)=a(\tau)\eta(\tau).
\tag{5}
\]

Since \(d\eta/d\tau=1/a\),

\[
\boxed{
\dot{\bar R}_p
=
H_A\bar R_p+c
}.
\tag{6}
\]

Restoring \(c\) makes the outward null term explicit.

The dynamic-throat notes instead study the ingoing child cosmological event horizon,

\[
B(\tau)
=
a(\tau)c
\int_\tau^\infty\frac{d\tau'}{a(\tau')},
\tag{7}
\]

which obeys

\[
\boxed{
\dot B
=
H_AB-c
}.
\tag{8}
\]

Equations (6) and (8) differ by the sign of the null term because they describe different causal surfaces.

Consequences:

1. The parent event-horizon generator is currently proposed to map to the child **particle-horizon history**, not to \(B(\tau)\).
2. The reconstructed values \(B_0=16.68\,\mathrm{Gly}\), \(B_0/R_\Lambda=0.9515\), and \(\dot B_0/c=0.14972\) are event-horizon targets. They cannot be inserted into the particle-horizon map.
3. In a de Sitter future, \(B\to R_\Lambda\) while \(\bar R_p=a\eta\to\infty\). Equal-area matching to a stationary parent horizon is therefore not the direct cohort proposal.
4. The finite quantity common to the two descriptions is the remaining conformal interval \(\eta_\infty-\eta\), not the particle-horizon areal radius.

---

## 4. The angular conformal relation

The parent event horizon has angular metric

\[
q_{\rm BH}
=
R_{\rm BH}(v_H)^2d\Omega^2.
\tag{9}
\]

The child particle-horizon history has

\[
q_p
=
\left[
a\bigl(\tau_H(v_H)\bigr)\Phi(v_H)
\right]^2d\Omega^2.
\tag{10}
\]

The most general spherical conformal correspondence is therefore

\[
\boxed{
a\bigl(\tau_H(v_H)\bigr)\Phi(v_H)
=
\Omega_\Sigma(v_H)R_{\rm BH}(v_H)
}.
\tag{11}
\]

Equation (11) defines the conformal factor required by a proposed \(\Phi\). It does not yet determine either function.

The homogeneous shell map fixes ratios within each spatial slice. By itself, it is invariant under a time-dependent common rescaling and therefore does **not** determine \(\Omega_\Sigma(v_H)\). An additional normalization must come from the reciprocal crossing law, parent collapse dynamics, optical transfer, or the completed scale geometry.

This answers the first question posed by the handoff note at the purely spatial level: shell homogeneity alone does not close the angular scale.

---

## 5. Exact relation to the older optical event map

The null-optics note uses

\[
v_A=\eta+R,
\qquad
v_B=V(v_A),
\tag{12}
\]

where \(v_A\) labels child ingoing rays and \(v_B\) is the parent advanced null coordinate. Restrict the relation to the proposed child null history \(R=\eta=\Phi(v_H)\). Then

\[
v_A=2\Phi(v_H),
\tag{13}
\]

and

\[
v_B(v_H)
=
V\bigl(2\Phi(v_H)\bigr).
\tag{14}
\]

Define the parent clock Jacobian

\[
J_H(v_H)
\equiv
\frac{dv_B}{dv_H}.
\tag{15}
\]

Differentiation gives the exact local dictionary

\[
\boxed{
\Phi'(v_H)
=
\frac{J_H(v_H)}
{2V'\bigl(2\Phi(v_H)\bigr)}
}.
\tag{16}
\]

The earlier statement that \(V'\) and \(\Phi'\) are merely “inverse descriptions” was incomplete. The child null-coordinate convention contributes the factor of two, and the physical parent clock contributes \(J_H\).

At one horizon cross-section, the optical calculation found

\[
V'=\frac{1}{2e},
\tag{17}
\]

where \(e\) is Alice's conserved energy per unit mass in the Schwarzschild benchmark. This coefficient follows directly from the local frequency calculation. An ingoing photon with Killing energy \(E_\gamma\) is measured at the horizon by Alice with frequency \(E_\gamma/(2e)\), while a static Bob at \(r_B\) measures \(E_\gamma/\sqrt{f_B}\). The screen relation at \(a=1\), \(\nu_H/\nu_B=\sqrt{f_B}\,V'\), therefore gives Equation (17).

Equation (17) is a one-cross-section Schwarzschild normalization, not a global result for matter-filled collapse. A \(\Lambda\)LTB parent has no static Killing energy \(e\); its null propagation must determine the corresponding optical Jacobian directly. Given the local benchmark, Equations (15)–(16) imply

\[
\boxed{
\Phi'=eJ_H
}
\tag{18}
\]

For the marginally bound PG congruence, \(e=1\), so

\[
\boxed{\Phi'=J_H}.
\tag{19}
\]

The special coordinate choice \(v_H=v_B\) gives \(J_H=1\) and hence \(\Phi'=1\), but a physically normalized parent cosmological clock need not make that choice.

The benchmark must therefore determine \(J_H\). Even after doing so, Equation (19) is a boundary normalization, not a global solution \(\Phi(v_H)=v_H\).

---

## 6. Other exact boundary data

The horizon-flow density identity supplies

\[
H_{A,H}=\frac{c}{R_S},
\qquad
\rho_{\rm total}(a=1)
=
\frac{3c^2}{8\pi G R_S^2}
=
\frac{3M}{4\pi R_S^3}
\tag{20}
\]

for the marginally bound congruence. This fixes the rate and total-density normalization at one reciprocal crossing. It does not divide the density into components or determine \(\Phi\) away from that cross-section.

The exact timelike-shell calculation supplies

\[
\bar R(\tau)=a(\tau)R_0,
\tag{21}
\]

and, for a shared cosmological constant,

\[
M_K
=
\frac{4\pi}{3}\rho\,\bar R^3.
\tag{22}
\]

Dust gives a stress-free FLRW–Kottler timelike match. Radiation supplies a pressure residual that decays as \(a^{-1}\) in the exterior mass parameter. These results show that matter restores junction data omitted by a vacuum surrogate, but they do not parameterize the null cohort history.

---

## 7. Inputs that are checks, not clocks

The following results constrain a completed map but cannot derive \(\Phi\) by themselves:

- the present particle-horizon radius \(R_p\);
- the present cosmological event-horizon radius \(R_e=B_0\);
- the present Hubble radius \(R_H\);
- the de Sitter radius \(R_\Lambda\);
- the reconstructed conformal-progress fraction;
- the hyperbolic de Sitter angle \(H_\Lambda\tau\);
- the stationary Schwarzschild/de Sitter surface-gravity ratio;
- the observed age of the universe.

They become validation data after the parent clock is derived. Using any of them to select \(\Phi\) and then presenting the match as a prediction would reverse the logic.

---

## 8. Results of the audit

The prior work reduces to the following clean system:

\[
(\eta,R)
=
\bigl(\Phi(v_H),\Phi(v_H)\bigr),
\tag{23}
\]

\[
\frac{a(\tau)}{a(\tau_i)}
=
\frac{1}{r_i(\Delta\tau_i)},
\tag{24}
\]

\[
a(\tau_H)\Phi
=
\Omega_\Sigma R_{\rm BH},
\tag{25}
\]

\[
\Phi'
=
\frac{J_H}{2V'},
\qquad
\Phi'_{H}=eJ_H
\tag{26}
\]

under a shared horizon-length normalization.

What remains open is no longer “the whole horizon map.” It is:

1. derive the global evolution of \(V'\) and the parent Jacobian \(J_H\), thereby fixing \(\Phi'\), from a matter-filled parent collapse;
2. derive \(\Omega_\Sigma\) from the reciprocal crossing geometry rather than define it afterward;
3. verify that the null map extends to neighboring shells without shear, shell crossing, or an impulse.

The next calculation should select a dynamical spherical collapse benchmark that supplies a physical parent clock and a continuous horizon generator. It must keep the child particle horizon distinct from the child cosmological event horizon.

---

## Source notes audited

1. [Collapse Day and Present Day](note.html?src=collapse_day_present_day_cohort_worldsheet).
2. [From Collapse Shells to a Child FLRW Patch](note.html?src=homogeneous_collapse_shell_map).
3. [The Remaining Horizon Clock](note.html?src=remaining_horizon_clock_map).
4. [Null Optics of the Reciprocal Interior](note.html?src=null_optics_of_the_reciprocal_interior).
5. [The Horizon Flow and Density Identity](note.html?src=horizon_flow_density_identity).
6. [The Exact Shell Identity and the Kottler Mass Condition](note.html?src=horizon_map_shell_identity_and_mass_growth).
7. [Dynamic Throat Kinematics and the Cosmological Clock](note.html?src=dynamic_throat_kinematics_and_the_cosmological_clock).
8. [The Hyperbolic Cosmological Clock](note.html?src=hyperbolic_cosmological_clock).
9. [Null-Horizon Matching of the Reciprocal Interior](note.html?src=null_horizon_matching_of_the_reciprocal_interior), used only as a documented sharp-surrogate limit.
