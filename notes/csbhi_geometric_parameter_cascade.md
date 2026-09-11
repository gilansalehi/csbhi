# CSBHI Geometric Parameter Cascade

**Working note — September 2026. Revised after downstream consistency audit. Source: upstream project analysis. Independent review and revisions: Codex (OpenAI).**

---

## Abstract

CSBHI suggests that a substantial set of quantities normally quoted as separate cosmological observables may descend from a smaller set of geometric and inheritance data.

The cleanest established cascade begins with the child asymptotic de Sitter curvature radius

\[
L.
\]

Under spatial flatness, standard general-relativistic Friedmann evolution, separately conserved matter and radiation, a true cosmological constant, and no additional homogeneous components, \(L\) fixes the complete vacuum sector. Introducing one dimensionless matter ratio

\[
\eta_m
\]

then fixes the late-time dust–\(\Lambda\) background, while an additional radiation ratio

\[
\eta_r
\]

closes the homogeneous radiation bookkeeping.

This is initially a change of parameter basis, not a reduction in physical freedom. Under the stated assumptions,

\[
\boxed{
(L,\eta_m,\eta_r)
\longleftrightarrow
(H_0,\Omega_m,\Omega_r)
}
\]

is invertible once flatness fixes \(\Omega_\Lambda\). A genuine CSBHI parameter reduction occurs only if the parent formation geometry independently determines \(L\), \(\eta_m\), or \(\eta_r\).

The present theory does **not** identify the child curvature radius \(L\) with the physical Schwarzschild radius of a stellar parent. Current CSBHI formation work instead requires a nontrivial conformal scale transfer. Consequently, parent mass does not yet close the cascade.

The galaxy-scale acceleration law introduces another unresolved dimensionless coefficient,

\[
\kappa_g,
\]

with two presently viable horizon choices: a fixed asymptotic de Sitter scale \(cH_\Lambda\), or the contemporaneous cosmological scale \(cH(z)\).

The emerging input structure is therefore

\[
\boxed{
L,\quad
\eta_m,\quad
\eta_r,\quad
\kappa_g,\quad
\text{horizon selection},\quad
\text{formation-map data}
}
\]

rather than a large set of unrelated observables. The purpose of this note is to identify which quantities genuinely cascade from these inputs and where the present derivation stops.

---

## 1. Assumptions and notation

The background cascade assumes:

1. spatially flat FLRW geometry;
2. standard Einstein gravity for the homogeneous child background;
3. separately conserved pressureless matter, \(\rho_m\propto a^{-3}\);
4. separately conserved radiation, \(\rho_r\propto a^{-4}\);
5. a true cosmological constant, \(\rho_\Lambda=\mathrm{constant}\); and
6. no additional homogeneous components.

All \(\rho_i\) in this note are mass densities; the corresponding energy densities are \(\epsilon_i=\rho_i c^2\). Under these assumptions,

\[
H^2
=
\frac{8\pi G}{3}
\left(
\rho_m+\rho_r+\rho_\Lambda
\right).
\tag{1}
\]

This is the standard flat matter–radiation–\(\Lambda\) Friedmann background recovered in GD1 and RI1.

The cascade does not by itself determine baryon fraction, neutrino masses, recombination physics, \(N_{\rm eff}\), primordial perturbations, or particle-physics couplings.

The constants \(G\), \(c\), \(\hbar\), and \(k_B\) are treated as external fundamental constants. Define \(L\) as the **child asymptotic de Sitter curvature radius** and \(H_\Lambda\) as the associated asymptotic Hubble rate. No equality between \(L\) and a parent physical throat or Schwarzschild radius is assumed.

---

## 2. The one-scale vacuum cascade

By definition of the four-dimensional de Sitter curvature radius,

\[
\boxed{
H_\Lambda=\frac{c}{L}
}
\tag{2}
\]

and

\[
\boxed{
\Lambda=\frac{3}{L^2}.
}
\tag{3}
\]

GD1 independently identifies the asymptotic child geometry as de Sitter, with

\[
R_\Lambda
=\sqrt{\frac{3}{\Lambda}}
=\frac{c}{H_\Lambda}
=L.
\tag{4}
\]

The de Sitter timescale is

\[
\boxed{
t_\Lambda
=\frac{1}{H_\Lambda}
=\frac{L}{c}.
}
\tag{5}
\]

Define the characteristic de Sitter surface-gravity or curvature-acceleration scale by

\[
\boxed{
a_\Lambda
=cH_\Lambda
=\frac{c^2}{L}.
}
\tag{6}
\]

This is not the proper acceleration of a static observer placed on the horizon; that quantity is not finite there.

Thus one geometric scale fixes

\[
\boxed{
L
\longrightarrow
H_\Lambda,\;
\Lambda,\;
t_\Lambda,\;
a_\Lambda.
}
\tag{7}
\]

---

## 3. Vacuum density and pressure

The vacuum mass density is

\[
\boxed{
\rho_\Lambda
=\frac{\Lambda c^2}{8\pi G}
=\frac{3c^2}{8\pi GL^2}.
}
\tag{8}
\]

The corresponding energy density is

\[
\boxed{
\epsilon_\Lambda
=\rho_\Lambda c^2
=\frac{3c^4}{8\pi GL^2}.
}
\tag{9}
\]

For a true cosmological constant,

\[
\boxed{
p_\Lambda=-\epsilon_\Lambda,
\qquad
w_\Lambda
\equiv\frac{p_\Lambda}{\epsilon_\Lambda}
=-1.
}
\tag{10}
\]

The last relation is definitional for a cosmological constant. It becomes an observational CSBHI prediction only if the completed theory asserts that no additional effective geometric contribution modifies the late-time dark-energy sector.

---

## 4. Horizon geometry and two notions of volume

The asymptotic de Sitter horizon radius and area are

\[
\boxed{
R_{\rm dS}=L,
\qquad
A_{\rm dS}=4\pi L^2.
}
\tag{11}
\]

The **areal volume** is defined by

\[
\boxed{
V_A=\frac{4\pi}{3}L^3.
}
\tag{12}
\]

This is the volume entering the Misner–Sharp mass of a homogeneous spherical region. It is not the proper volume of a constant-static-time de Sitter slice. The latter is

\[
V_{\rm proper}
=4\pi
\int_0^L
\frac{R^2\,dR}
{\sqrt{1-R^2/L^2}},
\tag{13}
\]

which evaluates to

\[
\boxed{
V_{\rm proper}=\pi^2L^3.
}
\tag{14}
\]

The two volumes play different geometric roles and must not be conflated.

---

## 5. Misner–Sharp mass of the de Sitter horizon

Define \(M_{\rm dS}\) as the Misner–Sharp mass enclosed by the de Sitter horizon. Using the homogeneous vacuum mass density and the areal volume,

\[
M_{\rm dS}
=\rho_\Lambda V_A,
\]

so

\[
\boxed{
M_{\rm dS}=\frac{c^2L}{2G}.
}
\tag{15}
\]

Equivalently,

\[
\boxed{
\frac{2GM_{\rm dS}}{c^2L}=1.
}
\tag{16}
\]

This is the standard spherical marginality relation. It does not imply that \(M_{\rm dS}\) equals the mass of the parent stellar black hole. Such an equality would require an additional parent–child scale and mass identification absent from current CSBHI.

---

## 6. Horizon thermodynamics

The Gibbons–Hawking temperature of the de Sitter horizon is

\[
\boxed{
T_{\rm dS}
=\frac{\hbar H_\Lambda}{2\pi k_B}
=\frac{\hbar c}{2\pi k_BL}.
}
\tag{17}
\]

With Planck area

\[
\ell_P^2=\frac{\hbar G}{c^3},
\tag{18}
\]

the horizon entropy is

\[
S_{\rm dS}
=\frac{k_BA_{\rm dS}}{4\ell_P^2},
\]

and hence

\[
\boxed{
S_{\rm dS}
=\frac{\pi k_Bc^3L^2}{G\hbar}.
}
\tag{19}
\]

Thus \(L\) determines the complete standard de Sitter thermodynamic sector.

---

## 7. What one scale determines—and what that means

Without introducing another cosmological parameter, \(L\) fixes

\[
\begin{gathered}
H_\Lambda,\;\Lambda,\;t_\Lambda,\;a_\Lambda,\\
\rho_\Lambda,\;\epsilon_\Lambda,\;p_\Lambda,\;w_\Lambda,\\
R_{\rm dS},\;A_{\rm dS},\;V_A,\;V_{\rm proper},\\
M_{\rm dS},\;T_{\rm dS},\;S_{\rm dS}.
\end{gathered}
\tag{20}
\]

These are not fifteen independent predictions. Several are definitions or standard consequences of one de Sitter solution. The useful result is a dependency ledger: once \(L\) is supplied, none requires another fit.

Nor is this, by itself, a reduction relative to standard cosmological parameter counting. The distinct CSBHI question is whether the parent formation geometry can determine \(L\) rather than accepting it as child-side input.

---

## 8. Present Hubble scale versus de Sitter scale

Let \(H_0\) be the present Hubble rate. Whenever \(\Omega_\Lambda\) denotes the present cosmological-constant density fraction,

\[
\boxed{
H_\Lambda=H_0\sqrt{\Omega_\Lambda},
}
\tag{21}
\]

and therefore

\[
\boxed{
L
=\frac{c}{H_0\sqrt{\Omega_\Lambda}}.
}
\tag{22}
\]

This relation follows directly from the definition of \(\Omega_\Lambda\); it does not require radiation to vanish. In a matter- or radiation-containing universe,

\[
H_0\ne H_\Lambda.
\]

GD1 accordingly distinguishes the present Hubble radius from the asymptotic de Sitter radius:

\[
R_H=\frac{c}{H_0},
\qquad
R_\Lambda=\frac{c}{H_\Lambda}.
\tag{23}
\]

Using the Planck benchmark gives approximately

\[
R_H=14.51\ {\rm Gly},
\qquad
R_\Lambda=17.53\ {\rm Gly}.
\tag{24}
\]

Scratch estimates that substitute \(H_0\) directly into \(\Lambda=3H^2/c^2\) are therefore present-epoch approximations, not the exact asymptotic relation.

---

## 9. Numerical vacuum benchmark

Using

\[
H_0=67.4\ {\rm km\,s^{-1}\,Mpc^{-1}},
\qquad
\Omega_\Lambda\simeq0.685,
\tag{25}
\]

one obtains

\[
\boxed{
L\simeq17.53\ {\rm Gly},
\qquad
\Lambda\simeq1.09\times10^{-52}\ {\rm m^{-2}}.
}
\tag{26}
\]

The remaining descendants are

\[
\boxed{
\begin{aligned}
\rho_\Lambda
&\simeq5.85\times10^{-27}\ {\rm kg\,m^{-3}},\\
a_\Lambda
&\simeq5.42\times10^{-10}\ {\rm m\,s^{-2}},\\
t_\Lambda
&\simeq17.53\ {\rm Gyr},\\
T_{\rm dS}
&\simeq2.20\times10^{-30}\ {\rm K},\\
S_{\rm dS}/k_B
&\simeq3.31\times10^{122}.
\end{aligned}
}
\tag{27}
\]

These are consistency benchmarks, not independent fits or predictions.

---

## 10. Matter inheritance

The vacuum scale does not presently determine the amount of matter inherited by the child. Introduce

\[
\boxed{
\eta_m
\equiv
\frac{\rho_{m0}}{\rho_\Lambda},
}
\tag{28}
\]

where \(\rho_{m0}\) is the present matter mass density. Ignoring radiation temporarily,

\[
\boxed{
H(a)^2
=H_\Lambda^2
\left(1+\eta_ma^{-3}\right).
}
\tag{29}
\]

At \(a=1\),

\[
\boxed{
H_0=H_\Lambda\sqrt{1+\eta_m},
}
\tag{30}
\]

and

\[
\boxed{
\Omega_\Lambda=\frac{1}{1+\eta_m},
\qquad
\Omega_m=\frac{\eta_m}{1+\eta_m}.
}
\tag{31}
\]

This is an alternative parameterization of the same flat dust–\(\Lambda\) background. It becomes explanatory only if CSBHI derives \(\eta_m\) from formation data.

---

## 11. Matter–vacuum equality and acceleration

Matter–vacuum equality satisfies

\[
\eta_m(1+z_{m\Lambda})^3=1,
\]

and therefore

\[
\boxed{
1+z_{m\Lambda}=\eta_m^{-1/3}.
}
\tag{32}
\]

For dust plus \(\Lambda\), the acceleration transition \(\ddot a=0\) occurs at \(\rho_m=2\rho_\Lambda\), giving

\[
\boxed{
1+z_{\rm acc}
=\left(\frac{2}{\eta_m}\right)^{1/3}.
}
\tag{33}
\]

The present deceleration parameter is

\[
q_0
=\frac12\Omega_m-\Omega_\Lambda,
\]

or

\[
\boxed{
q_0
=\frac{\eta_m/2-1}{1+\eta_m}.
}
\tag{34}
\]

---

## 12. Cosmic age and the full dust–\(\Lambda\) history

For a flat dust–\(\Lambda\) universe,

\[
t_0
=\int_0^1\frac{da}{aH(a)},
\]

which gives

\[
\boxed{
t_0
=\frac{2}{3H_\Lambda}
\sinh^{-1}\!\left(\eta_m^{-1/2}\right).
}
\tag{35}
\]

The complete homogeneous expansion function is

\[
\boxed{
H(z)
=H_\Lambda
\sqrt{1+\eta_m(1+z)^3}.
}
\tag{36}
\]

All dust–\(\Lambda\) background distance–redshift relations then follow by integration. GD1 and RI1 already establish this standard Friedmann background once the component densities are supplied.

---

## 13. Matter benchmark

For

\[
\Omega_m=0.315,
\qquad
\Omega_\Lambda=0.685,
\]

the required ratio is

\[
\boxed{
\eta_m
=\frac{\Omega_m}{\Omega_\Lambda}
\simeq0.460.
}
\tag{37}
\]

Equations (32)–(35) then give

\[
\boxed{
\begin{aligned}
z_{m\Lambda}&\simeq0.296,\\
z_{\rm acc}&\simeq0.632,\\
q_0&\simeq-0.528,\\
t_0&\simeq13.80\ {\rm Gyr}.
\end{aligned}
}
\tag{38}
\]

Thus \((L,\eta_m)\) determines the flat dust–\(\Lambda\) background. The unresolved CSBHI question is whether the formation map can produce \(\eta_m\simeq0.460\) without child-side calibration.

---

## 14. Radiation inheritance

Introduce

\[
\boxed{
\eta_r
\equiv
\frac{\rho_{r0}}{\rho_\Lambda}.
}
\tag{39}
\]

The full homogeneous background is then

\[
\boxed{
H(a)^2
=H_\Lambda^2
\left(
1+\eta_ma^{-3}+\eta_ra^{-4}
\right).
}
\tag{40}
\]

Let

\[
D=1+\eta_m+\eta_r.
\tag{41}
\]

At the present epoch,

\[
\boxed{
H_0=H_\Lambda\sqrt D,
}
\tag{42}
\]

and

\[
\boxed{
\Omega_\Lambda=\frac1D,
\qquad
\Omega_m=\frac{\eta_m}{D},
\qquad
\Omega_r=\frac{\eta_r}{D}.
}
\tag{43}
\]

Matter–radiation equality and radiation–vacuum equality obey

\[
\boxed{
1+z_{mr}=\frac{\eta_m}{\eta_r},
\qquad
1+z_{r\Lambda}=\eta_r^{-1/4}.
}
\tag{44}
\]

Thus, under the stated assumptions, \((L,\eta_m,\eta_r)\) determines the complete flat matter–radiation–\(\Lambda\) expansion history. It does not determine particle content, thermal history, or how \(\eta_m\) divides into baryons, dark-matter-like phenomenology, massive neutrinos, or other species.

---

## 15. Parent–child scale transfer remains open

Current CSBHI does not identify the child physical curvature radius directly with a parent black-hole radius. For a conformal map

\[
g^C_{ab}=\Gamma^2g^P_{ab},
\tag{45}
\]

the physical areal radii are related schematically by

\[
\boxed{
R_C=\Gamma R_P.
}
\tag{46}
\]

The GD2 event-map work explicitly avoids equating the child areal radius with the parent black-hole radius. Moreover, under a varying conformal factor, derivatives of \(\Gamma\) contribute to the transformation of quasi-local mass.

Therefore

\[
L=\frac{2GM_P}{c^2}
\tag{47}
\]

is **not** part of the current CSBHI branch. It is the special isometric case \(\Gamma=1\), which removes the scale hierarchy the conformal formation map is intended to explain.

In a hypothetical constant-scale approximation one could write schematically

\[
L
=\Gamma_\infty
\frac{2GM_P}{c^2},
\tag{48}
\]

but this is not presently a derived closure relation. For dynamical \(\Gamma\), even Equation (48) is insufficient because conformal-gradient terms enter the mass transformation.

The correct conclusion is

\[
\boxed{
M_P\not\Rightarrow L
\quad\text{yet}.
}
\tag{49}
\]

The missing absolute scale-transfer law is one of GD2's central open problems.

---

## 16. Thermodynamic parent–child comparison remains open

Because \(L\ne R_P\) in the current architecture, parent black-hole and child de Sitter thermodynamics cannot be equated directly.

In the special constant-scale approximation

\[
L=\Gamma_\infty R_P,
\tag{50}
\]

the standard Schwarzschild and de Sitter temperatures would obey

\[
\boxed{
\frac{T_{\rm dS}}{T_{\rm BH}}
=\frac{2}{\Gamma_\infty},
}
\tag{51}
\]

while their area entropies would obey

\[
\boxed{
\frac{S_{\rm dS}}{S_{\rm BH}}
=\Gamma_\infty^2.
}
\tag{52}
\]

The relations \(T_{\rm dS}=2T_{\rm BH}\) and \(S_{\rm dS}=S_{\rm BH}\) are therefore only the discarded special case \(\Gamma_\infty=1\). No positive parent–child thermodynamic identification presently follows.

---

## 17. Galaxy acceleration cascade

The GD galaxy program considers a deep-regime square-root law

\[
\boxed{
g_{\rm mix}
=\kappa_g\sqrt{g_Ng_H},
}
\tag{53}
\]

where \(g_N\) is the baryonic Newtonian acceleration, \(g_H\) is a selected global cosmological acceleration scale, and \(\kappa_g\) is a dimensionless normalization still requiring derivation. The square-root relation and the near coincidence between the empirical MOND scale and cosmological accelerations have substantial MOND precedent; the prospective CSBHI contribution is a geometric selection of \(g_H\) and \(\kappa_g\).

### Branch A: fixed asymptotic de Sitter scale

Set

\[
g_H=cH_\Lambda.
\]

Comparison with the empirical deep-regime form defines

\[
\boxed{
g_\dagger
=\kappa_g^2cH_\Lambda.
}
\tag{54}
\]

Using \(g_\dagger\simeq1.2\times10^{-10}\ {\rm m\,s^{-2}}\) and \(cH_\Lambda\simeq5.42\times10^{-10}\ {\rm m\,s^{-2}}\) gives

\[
\boxed{
\kappa_g^{(\Lambda)}\simeq0.471.
}
\tag{55}
\]

### Branch B: contemporaneous cosmological horizon

Alternatively set

\[
g_H(z)=cH(z).
\]

Then

\[
\boxed{
g_\dagger(z)=\kappa_g^2cH(z).
}
\tag{56}
\]

At the present epoch,

\[
g_\dagger(0)=\kappa_g^2cH_0,
\]

so the same empirical local scale requires

\[
\boxed{
\kappa_g^{(0)}\simeq0.428.
}
\tag{57}
\]

The horizon selection remains unresolved. The fixed branch predicts \(g_\dagger(z)=\mathrm{constant}\), while the evolving branch predicts

\[
\boxed{
\frac{g_\dagger(z)}{g_\dagger(0)}
=\frac{H(z)}{H_0}.
}
\tag{58}
\]

High-redshift galaxy dynamics can therefore discriminate between the two correspondences independently of the normalization.

---

## 18. Formation-map status

The recent formation campaign examined increasingly realistic parent collapse:

\[
\text{dust}
\longrightarrow
\text{pressure}
\longrightarrow
\text{radial inhomogeneity}
\longrightarrow
\text{dissipation}
\longrightarrow
\text{rotation}.
\tag{59}
\]

It established useful local structural results. Regular spherical inhomogeneities are suppressed near the central birth region. Smooth dissipative flux does not automatically generate a scalar singularity. First-order rotational effects occupy the axial sector, while leading scalar and quadrupolar deformations begin at second order in spin. Generic event-horizon creases are nonsmooth features of the global causal boundary rather than singularities of the ambient spacetime or matter density.

These results do not complete the parent–child formation map.

The parent optical integrating factor \(\beta_H\) is fixed, once the parent geometry and exterior normalization are supplied, by the characteristic integral

\[
\beta_H
=\beta_o
\exp\!\left[
-\int H_\parallel\,dt_P
\right].
\tag{60}
\]

It is not an additional arbitrary horizon-map function. The surviving freedom lies instead in the nontrivial cohort lapse

\[
N_H=\frac{d\tau_C}{dt_P},
\tag{61}
\]

the absolute conformal calibration \(K(q)\) or equivalently the physical normalization of \(\Gamma\), and the extension of the null event map to a complete child metric and neighboring timelike cohorts. The minimal condition \(K(q)=K_0\) remains a test hypothesis, not a derivation.

The appropriate status is

\[
\boxed{
\text{local formation structure survives;}
\quad
\text{absolute conformal formation map remains open.}
}
\tag{62}
\]

The remaining work is mathematical as well as numerical: the scale-transfer, lapse, and global completion must be derived before realistic simulations can determine amplitudes.

---

## 19. What the background cascade genuinely determines

Under the flat-Friedmann assumptions:

- **From \(L\):** the vacuum and de Sitter sector is fixed.
- **From \((L,\eta_m)\):** the flat dust–\(\Lambda\) background is fixed, including \(H_0\), \(\Omega_m\), \(\Omega_\Lambda\), \(q_0\), \(t_0\), \(z_{m\Lambda}\), \(z_{\rm acc}\), and the complete homogeneous \(H(z)\).
- **From \((L,\eta_m,\eta_r)\):** \(\Omega_r\), \(z_{mr}\), \(z_{r\Lambda}\), and the full matter–radiation–\(\Lambda\) background are added.
- **From \((L,\kappa_g)\) plus a horizon-selection rule:** the galaxy acceleration scale and baryonic Tully–Fisher normalization are fixed conditionally.

The present theory does not derive \(L\) from parent mass.

---

## 20. What the cascade does not determine

The present cascade does not determine

\[
\Omega_b,
\quad
\sum m_\nu,
\quad
N_{\rm eff},
\tag{63}
\]

the recombination temperature, baryon-to-photon ratio, primordial scalar amplitude, primordial spectral tilt, tensor-to-scalar ratio, or Standard Model couplings.

Write the tensor-to-scalar ratio as \(r_{\rm tens}\), rather than bare \(r\), because \(r\) is already reserved for GD radial variables. The formation campaign supplies possible geometric sources for primordial perturbations but does not yet fix their absolute amplitudes or spectra.

---

## 21. Dark-energy falsifiability

If CSBHI ultimately claims that late-time acceleration is exhausted by a true child de Sitter curvature term, then it predicts

\[
\boxed{w=-1.}
\tag{64}
\]

If additional effective geometric terms arise from the completed conformal formation map, the observationally inferred effective dark-energy equation of state need not equal the bare cosmological-constant value. Measurements of evolving dark energy therefore test the simplest closed CSBHI vacuum sector, not automatically every possible completion.

---

## 22. Revised parameter inventory

| Primitive quantity or rule | Role | Present standing |
|---|---|---|
| \(L\) | Child asymptotic curvature scale | Child-side input |
| \(\eta_m\) | Present matter/vacuum ratio | Child-side input |
| \(\eta_r\) | Present radiation/vacuum ratio | Child-side input |
| \(\kappa_g\) | Galaxy-scale normalization | Undetermined coefficient |
| Horizon-selection rule | Chooses \(H_\Lambda\) or \(H(z)\) for galaxy dynamics | Open correspondence |
| \(N_H\), \(K(q)\), and \(\Gamma\) | Clock and absolute parent–child scale transfer | Open GD2 geometry |
| Formation perturbation data | Determine primordial perturbations | Structural sources identified; amplitudes open |

This inventory is smaller than the list of derived observables, but the homogeneous basis \((L,\eta_m,\eta_r)\) contains the same number of degrees of freedom as the equivalent standard flat-Friedmann parameterization. The scientific reduction remains a target until one or more entries are derived from parent formation data.

---

## 23. Highest-value unresolved quantities

### 23.1 Matter inheritance

\[
\boxed{
\eta_m\simeq0.460.
}
\tag{65}
\]

Deriving this ratio would simultaneously account for much of the observed late-time background.

### 23.2 Radiation inheritance

A derivation of \(\eta_r\) would connect the dissipative parent-collapse sector to the radiation-era child background.

### 23.3 Galaxy normalization and horizon choice

The present targets are

\[
\boxed{
\kappa_g\simeq0.428
}
\]

for the evolving \(H(z)\) branch, or

\[
\boxed{
\kappa_g\simeq0.471
}
\]

for the fixed \(H_\Lambda\) branch.

### 23.4 Absolute conformal scale transfer

The relation

\[
\boxed{
R_C=\Gamma R_P
}
\tag{66}
\]

must be completed dynamically. Until then, the numerical value of \(L\) remains a child-side input rather than a quantity derived from parent collapse.

### 23.5 Primordial formation coefficients

These would ultimately control observables such as

\[
A_s,
\qquad
n_s,
\qquad
r_{\rm tens},
\tag{67}
\]

and residual statistical anisotropy.

---

## 24. Conclusion

The corrected cascade does not support

\[
M_P\longrightarrow L.
\]

That step would collapse the conformal hierarchy into the discarded isometric branch. What survives is the exact dependency structure

\[
\boxed{
L
\longrightarrow
\text{vacuum and de Sitter sector},
}
\tag{68}
\]

\[
\boxed{
(L,\eta_m)
\longrightarrow
\text{flat dust–\(\Lambda\) background},
}
\tag{69}
\]

and

\[
\boxed{
(L,\eta_m,\eta_r)
\longrightarrow
\text{flat matter–radiation–\(\Lambda\) background}.
}
\tag{70}
\]

These are standard de Sitter and Friedmann consequences organized in a CSBHI dependency ledger. The prospective theoretical contribution lies upstream: deriving their inputs from one parent formation geometry.

The galaxy sector adds one dimensionless coefficient and one horizon-selection question. The formation sector remains structurally encouraging but requires the nontrivial lapse, absolute conformal calibration, and global metric completion before parent collapse can determine child cosmological scales quantitatively.

The highest-value question is therefore

\[
\boxed{
\text{Can }
\eta_m,\;
\eta_r,\;
\kappa_g,
\text{ and ultimately }L
\text{ be derived from the parent geometry?}
}
\tag{71}
\]

That derivation—not the downstream algebra—would turn the parameter cascade into a genuine explanatory compression.

---

## References

1. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html), preprint (2026).
2. G. Salehi and Codex, [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior), CSBHI technical paper (2026).
3. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
4. G. W. Gibbons and S. W. Hawking, “Cosmological Event Horizons, Thermodynamics, and Particle Creation,” *Physical Review D* **15**, 2738–2751 (1977), [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
5. Planck Collaboration, “Planck 2018 Results. VI. Cosmological Parameters,” *Astronomy & Astrophysics* **641**, A6 (2020), [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910), [arXiv:1807.06209](https://arxiv.org/abs/1807.06209).
6. M. Milgrom, “A Modification of the Newtonian Dynamics as a Possible Alternative to the Hidden Mass Hypothesis,” *Astrophysical Journal* **270**, 365–370 (1983), [doi:10.1086/161130](https://doi.org/10.1086/161130).
7. M. Milgrom, “The \(a_0\)–Cosmology Connection in MOND,” *Studies in History and Philosophy of Modern Physics* **71**, 170–190 (2020), [arXiv:2001.09729](https://arxiv.org/abs/2001.09729).
8. C. Limbach, D. Psaltis, and F. Özel, “The Redshift Evolution of the Tully–Fisher Relation as a Test of Modified Gravity,” *Astrophysical Journal* **696**, 1257–1261 (2009), [arXiv:0809.2790](https://arxiv.org/abs/0809.2790).
9. G. Salehi, [*Result IV — The Conformal Formation Map*](note.html?src=result_iv_conformal_formation_map), CSBHI working result (2026).
10. [*Optical Transfer Through a Matter-Filled Parent Collapse*](note.html?src=optical_transfer_through_compensated_ltb_collapse), CSBHI supporting calculation (2026).
11. [*CSBHI Formation Mini-Program — Level 5 Conditional Result and Campaign Summary*](note.html?src=level_5_rotation_and_campaign_summary), CSBHI working result (2026).

