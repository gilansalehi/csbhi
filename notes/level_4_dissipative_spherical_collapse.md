# CSBHI Mini-Program — Level 4 Progress Note

## Dissipative spherical collapse and the protected birth vertex

**Working calculation — September 10, 2026. Source: upstream project derivation. Independent audit and revisions: Codex (OpenAI).**

---

## Abstract

Level 3 established that density gradients, pressure gradients, non-homologous collapse, and the tilt between a freely falling Alice and a pressured stellar fluid do not destroy the regular FLRW-like limit at the pointlike birth of a spherical event horizon. Their scalar effects begin at quadratic order in the horizon radius.

Level 4 replaces the perfect fluid with a general regular spherical stress tensor carrying radial energy flux and pressure anisotropy. The central question is structural: whether genuine heat, neutrino, or radiative transport introduces a lower-order scalar obstruction at the event-horizon vertex.

Spherical regularity requires

\[
q=O(R),
\qquad
\Delta\equiv p_r-p_t=O(R^2).
\]

Causal heat transport preserves the first relation. Dissipation changes the homogeneous central evolution through the finite flux divergence (3q_1), but cannot create an (O(1)) or (O(R)) scalar inhomogeneity at a smooth center.

The dissipative Misner–Sharp equations then give

\[
m
=\frac{4\pi}{3}\rho_0R^3
+\frac{4\pi}{5}(\rho_2+H_0q_1)R^5
+O(R^7),
\]

and the normalized spherical Weyl amplitude becomes

\[
\boxed{
\mathcal W
=
\left[
-\frac{8\pi}{15}\rho_2
+\frac{4\pi}{5}H_0q_1
+\frac{4\pi}{3}\Delta_2
\right]R^2
+O(R^4).
}
\]

Density curvature, dissipative transport, and anisotropic stress all alter the initial Weyl coefficient, but none changes its quadratic radial order. The exact outgoing-null transport equation independently exhibits the same cancellation.

Level 4 therefore passes structurally for a smooth total stress tensor. Shocks, shell crossings, phase boundaries, or other nonsmooth structure placed exactly at the event-horizon vertex fall outside the theorem. Level 5 removes spherical symmetry and tests rotation.

---

## 1. Scope and conventions

The objective is not to solve a particular neutrino-transport problem. It is to test the most general regular spherical stress tensor with radial energy transport.

Throughout the note,

\[
G=c=1.
\]

Let (u^a) be the stellar fluid four-velocity, (s^a) its outward radial unit vector, and

\[
h_{ab}=g_{ab}+u_au_b
\]

the spatial metric in the fluid frame. Write

\[
\boxed{
T_{ab}
=\rho u_au_b
+p_th_{ab}
+\Delta s_as_b
+q(u_as_b+s_au_b),
}
\tag{1}
\]

where

\[
\Delta\equiv p_r-p_t.
\tag{2}
\]

The sign convention is (q>0) for outward fluid-frame energy flux. Equation (1) includes an isotropic perfect fluid when (q=\Delta=0), and provides the effective spherical decomposition used for diffusion, radiation transport, and viscous anisotropy.

Use the Level-3 Misner–Sharp variables

\[
D_t=u^a\nabla_a,
\qquad
D_\ell=s^a\nabla_a,
\]

\[
U\equiv D_tR,
\qquad
\mathcal G\equiv D_\ell R,
\tag{3}
\]

with

\[
\mathcal G^2=1+U^2-\frac{2m}{R}.
\tag{4}
\]

The symbol \(\mathcal G\) is retained for the radial Misner–Sharp derivative so that \(\Gamma\) remains available for the GD conformal factor.

---

## 2. Spherical regularity

At a regular center there is no preferred radial direction. Smooth scalars have even radial expansions, smooth radial vectors vanish with an odd leading power, and smooth traceless radial tensors begin at quadratic order.

Thus

\[
\rho(R)=\rho_0+\rho_2R^2+O(R^4),
\tag{5}
\]

\[
p_r(R)=p_0+p_{r2}R^2+O(R^4),
\qquad
p_t(R)=p_0+p_{t2}R^2+O(R^4).
\tag{6}
\]

The two pressures share the central value (p_0); otherwise the central stress would select a direction. Consequently,

\[
\boxed{
\Delta=\Delta_2R^2+O(R^4),
}
\qquad
\Delta_2=p_{r2}-p_{t2}.
\tag{7}
\]

The radial flux vector is

\[
q^a=qs^a.
\]

Smoothness through the center requires

\[
\boxed{
q=q_1R+q_3R^3+O(R^5).
}
\tag{8}
\]

A finite nonzero central outward flux is not a regular spherical configuration because “outward” is undefined at one point. The Level-4 order counting therefore begins with

\[
\boxed{
q=O(R),
\qquad
\Delta=O(R^2).
}
\tag{9}
\]

---

## 3. Causal heat transport

Let (T) be local temperature, \(\kappa\) thermal conductivity, \(\tau\) the heat-flux relaxation time, and \(\mathcal A\) the fluid's outward radial proper acceleration.

The radial Müller–Israel–Stewart transport law contains the leading structure

\[
\tau D_tq+q
=-\kappa(D_\ell T+T\mathcal A)
+\text{terms proportional to }q,
\tag{10}
\]

with additional causal thermodynamic and viscous couplings in the complete theory.

At a regular center,

\[
T=T_0+T_2R^2+O(R^4),
\]

so

\[
D_\ell T=O(R).
\tag{11}
\]

The Level-3 perfect-fluid result gives

\[
\mathcal A=O(R).
\tag{12}
\]

Every source term independent of (q) on the right of Equation (10) is therefore (O(R)); terms linear in a regular (q) preserve the same parity. Causal heat transport is consistent with

\[
\boxed{q=O(R).}
\tag{13}
\]

It does not dynamically demand an (O(1)) radial flux at the vertex.

---

## 4. Dissipation changes the homogeneous central history

Define the radial and transverse fluid rates

\[
H_r\equiv\frac{D_\ell U}{\mathcal G},
\qquad
H_\perp\equiv\frac{U}{R},
\tag{14}
\]

the volume expansion

\[
\Theta=H_r+2H_\perp,
\tag{15}
\]

and the non-homologous rate

\[
\Sigma\equiv H_r-H_\perp.
\tag{16}
\]

Energy conservation in the fluid frame is

\[
\boxed{
D_t\rho
+(\rho+p_r)H_r
+2(\rho+p_t)H_\perp
+D_\ell q
+\frac{2\mathcal G}{R}q
+2\mathcal A q
=0.
}
\tag{17}
\]

Near the center,

\[
D_\ell q=q_1+O(R^2),
\qquad
\frac{2\mathcal Gq}{R}=2q_1+O(R^2).
\]

Equation (17) therefore has the central limit

\[
\boxed{
D_t\rho_0
+(\rho_0+p_0)\Theta_0
+3q_1
=0.
}
\tag{18}
\]

The finite divergence (3q_1) can change the zeroth-order collapse history (\rho_0(t)). It does not produce a zeroth-order spatial inhomogeneity. The first scalar radial variation remains (O(R^2)).

---

## 5. Dissipative Misner–Sharp mass

For Equation (1), the two mass-flow equations are

\[
\boxed{
D_tm
=-4\pi R^2
(p_rU+q\mathcal G),
}
\tag{19}
\]

and

\[
\boxed{
D_\ell m
=4\pi R^2
(\rho\mathcal G+qU).
}
\tag{20}
\]

The (q\mathcal G) term in Equation (19) is the energy crossing a comoving sphere; the (qU) term in Equation (20) changes the comparison between neighboring moving shells.

Define differentiation with respect to areal radius on a spatial slice,

\[
D_R\equiv\frac1{\mathcal G}D_\ell,
\qquad
D_RR=1.
\tag{21}
\]

Equation (20) becomes

\[
\boxed{
D_Rm
=4\pi R^2
\left(
\rho+\frac{qU}{\mathcal G}
\right).
}
\tag{22}
\]

Regularity gives

\[
U=H_0R+O(R^3),
\qquad
q=q_1R+O(R^3),
\qquad
\mathcal G=1+O(R^2).
\tag{23}
\]

Hence

\[
\frac{qU}{\mathcal G}
=H_0q_1R^2+O(R^4).
\tag{24}
\]

Substitution into Equation (22) and integration from (m(0)=0) give

\[
\boxed{
m
=\frac{4\pi}{3}\rho_0R^3
+\frac{4\pi}{5}
(\rho_2+H_0q_1)R^5
+O(R^7).
}
\tag{25}
\]

Dissipation leaves the homogeneous (R^3) mass term unchanged and first enters the spatial mass profile at (R^5).

---

## 6. The Level-4 Weyl coefficient

Choose the normalized spherical electric-Weyl amplitude

\[
\boxed{
\mathcal W
=\frac{m}{R^3}
-\frac{4\pi}{3}\rho
+\frac{4\pi}{3}\Delta.
}
\tag{26}
\]

This reduces to the Level-3 convention when (q=\Delta=0). Its relation to other electric-Weyl scalars may differ by an overall sign or factor; Equation (26) fixes the convention used here.

Substitution of Equations (5), (7), and (25) yields

\[
\boxed{
\mathcal W
=
\left[
-\frac{8\pi}{15}\rho_2
+\frac{4\pi}{5}H_0q_1
+\frac{4\pi}{3}\Delta_2
\right]R^2
+O(R^4).
}
\tag{27}
\]

The three contributions to the leading residue are therefore

\[
\boxed{
\rho_2,
\qquad
H_0q_1,
\qquad
\Delta_2,
}
\tag{28}
\]

representing density structure, energy transport during collapse, and pressure anisotropy. All three alter the coefficient; all three preserve

\[
\boxed{\mathcal W=O(R^2).}
\tag{29}
\]

The almost-but-not-exactly-zero initial Weyl residue need not encode density inhomogeneity alone.

---

## 7. Exact outgoing-null Weyl transport

Define

\[
D_+\equiv D_t+D_\ell.
\tag{30}
\]

Differentiate Equation (26) along (D_+), insert both mass equations (19)–(20), and eliminate (D_t\rho) using Equation (17). The result is

\[
\boxed{
\begin{aligned}
D_+\mathcal W
={}&
-\frac{3(U+\mathcal G)}{R}\mathcal W
-\frac{4\pi}{3}D_\ell\rho
+\frac{4\pi}{3}(\rho+p_r)\Sigma
\\[3pt]
&+
\frac{4\pi}{3}D_+\Delta
+\frac{4\pi}{3}D_\ell q
+\frac{8\pi}{3}\mathcal A q
\\[3pt]
&+
\frac{4\pi}{3R}
\left[
(3U-\mathcal G)q
+(U+3\mathcal G)\Delta
\right].
\end{aligned}
}
\tag{31}
\]

Equation (31) reduces exactly to the Level-3 perfect-fluid transport law when (q=\Delta=0).

Near the center,

\[
D_\ell\rho=O(R),
\quad
q=O(R),
\quad
\Delta=O(R^2),
\quad
\Sigma=O(R^2),
\quad
\mathcal A=O(R).
\tag{32}
\]

The only apparent (O(1)) flux source is the pair

\[
D_\ell q-\frac{\mathcal Gq}{R}.
\]

Using Equation (8) and \(\mathcal G=1+O(R^2)\),

\[
D_\ell q=q_1+O(R^2),
\qquad
\frac{\mathcal Gq}{R}=q_1+O(R^2),
\]

so the constant terms cancel:

\[
\boxed{
D_\ell q-\frac{\mathcal Gq}{R}=O(R^2).
}
\tag{33}
\]

All remaining sources are consistent with

\[
D_+\mathcal W=O(R),
\]

and therefore with

\[
\boxed{\mathcal W=O(R^2)}
\tag{34}
\]

along the outgoing event-horizon generator near its regular vertex. The local coefficient calculation and the exact transport equation agree.

---

## 8. Diffusion and directed streaming

A radial null-stream component is often written

\[
T^{\rm rad}_{ab}=\varepsilon k_ak_b,
\tag{35}
\]

with (k^a) an outward radial null vector. A single outward direction is not smooth at (R=0). Equation (35) is therefore not, by itself, the correct local description at an exact regular center.

The regular object is the total stress tensor. Its leading central radiation distribution must be isotropic and its net radial flux must vanish. Away from the center, diffusion and streaming approximations are both meaningful and can be incorporated through Equation (1).

The event horizon is born where regularity enforces the isotropic limit, then grows into regions where directed transport can develop.

---

## 9. Result and failure condition

On the event horizon as (R_E\to0),

\[
\boxed{
q_E=O(R_E),
\qquad
\Delta_E=O(R_E^2),
\qquad
\mathcal W_E=O(R_E^2).
}
\tag{36}
\]

Fractional density and pressure inhomogeneities likewise remain (O(R_E^2)). Dissipation can change the homogeneous central background and the coefficient of the first Weyl residue, but it does not remove the quadratic protection of the scalar geometry.

The result assumes a smooth total stress tensor and a regular spherical event-horizon vertex. A shock, shell crossing, phase boundary, impulsive flux, or other nonsmooth structure located precisely at the vertex invalidates the Taylor expansion and must be analyzed separately.

The structural verdict is

\[
\boxed{
\textbf{LEVEL 4 — PASSED, SUBJECT TO REGULARITY.}
}
\tag{37}
\]

This is a theorem about the regular central order of the parent geometry. It is not yet a derivation of the child perturbation spectrum, a proof of the global conformal completion, or a numerical model of radiative stellar collapse.

---

## 10. Next rung: rotation

Level 5 removes spherical symmetry. The parity argument that protects a regular center no longer disposes of every angular degree of freedom, and the parent Weyl tensor acquires rotational structure absent from the spherical ladder.

The next pass/fail question is:

> Does parent angular momentum map into a finite, decaying child anisotropy, or does Kerr-like structure obstruct the emergence of an acceptable cosmological background?

The natural starting point is a slow-rotation expansion, which can determine whether the first rotational correction enters the child as a vector mode, a tensor mode, a homogeneous vorticity, or an unacceptable persistent anisotropy before the full nonlinear Kerr problem is attempted.

---

## Conclusion

Regular spherical dissipation does not break the protected birth vertex.

Heat and radiative flux vanish linearly at the center, pressure anisotropy vanishes quadratically, and dissipative corrections enter the Misner–Sharp mass only at (R^5). The leading Weyl residue remains

\[
\mathcal W
=
\left[
-\frac{8\pi}{15}\rho_2
+\frac{4\pi}{5}H_0q_1
+\frac{4\pi}{3}\Delta_2
\right]R^2
+O(R^4).
\]

The exact outgoing-null transport equation confirms that no hidden (O(1)) heat-flux source survives: the potentially dangerous terms cancel by spherical regularity.

Dissipation changes the background history and enriches the information carried by the initial Weyl coefficient. It does not change the quadratic radial order of the scalar departure from the homogeneous limit.

Level 4 passes for a regular total stress tensor. Level 5 tests whether the protection survives rotation.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. L. Herrera, A. Di Prisco, J. Martin, J. Ospino, N. O. Santos, and O. Troconis, “Spherically symmetric dissipative anisotropic fluids: A general study,” *Physical Review D* **69**, 084026 (2004), [doi:10.1103/PhysRevD.69.084026](https://doi.org/10.1103/PhysRevD.69.084026), [arXiv:gr-qc/0403006](https://arxiv.org/abs/gr-qc/0403006).
3. L. Herrera, A. Di Prisco, E. Fuenmayor, and O. Troconis, “Dynamics of viscous dissipative gravitational collapse: A full causal approach,” *International Journal of Modern Physics D* **18**, 129–145 (2009), [doi:10.1142/S0218271809014285](https://doi.org/10.1142/S0218271809014285), [arXiv:0804.3584](https://arxiv.org/abs/0804.3584).
4. R. Maartens, “Causal Thermodynamics in Relativity,” lecture notes (1996), [arXiv:astro-ph/9609119](https://arxiv.org/abs/astro-ph/9609119).
5. [“CSBHI Mini-Program — Level 3 Progress Note”](note.html?src=level_3_general_spherical_perfect_fluid_completion), CSBHI working calculation (2026).
