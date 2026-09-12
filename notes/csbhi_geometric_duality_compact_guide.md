# CSBHI / Geometric Duality — A Compact Guide

**Cosmic-Scale Black-Hole Interiors (CSBHI)**  
**Geometric Duality (GD)**  
**Gilan Salehi — September 2026**

**Status:** Introductory project guide. This document summarizes the current proposal and its claim structure; it is not a substitute for the derivations cited at the end.

---

## 1. The proposal

CSBHI proposes that a dynamically forming black hole can produce a child cosmology. A finite formation region connects the parent collapse to a mature reciprocal interior in which inward parent evolution and child expansion obey

\[
\boxed{a=\frac1r.}
\tag{1}
\]

Here \(r\) is a dimensionless parent/interior variable normalized to \(r=1\) at the reciprocal handoff, and \(a\) is the child scale factor normalized to \(a=1\) at the same event. Their mature evolution is

\[
r:1\rightarrow0
\qquad\Longleftrightarrow\qquad
a:1\rightarrow\infty.
\tag{2}
\]

The limit \(r\to0\) therefore corresponds to the already-born child's remote future, not to its beginning. The child begins through collapse and formation; the reciprocal endpoint describes its late-time limit.

Given a homogeneous, isotropic reciprocal branch, Einstein's equations, and specified matter, radiation, and vacuum components, the child obeys the standard spatially flat Friedmann equations. GD does not replace that cosmology. It proposes a geometric origin for it.

---

## 2. The geometric sequence

The current formation architecture assigns four different jobs to four different structures:

\[
\boxed{
\begin{array}{c}
\text{parent gravitational collapse}
\\[3pt]
\downarrow
\\[3pt]
\text{global black-hole event horizon}
\\[3pt]
\downarrow
\\[3pt]
\text{finite formation region}
\\[-1pt]
\left[
\begin{array}{c}
\text{trapping-horizon pair}\\
\text{null focusing and work density}\\
\text{Weyl, shear, and flux data}\\
\text{timelike and null scale transfer}
\end{array}
\right]
\\[4pt]
\downarrow
\\[3pt]
\text{homogeneous reciprocal handoff}
\\[3pt]
\downarrow
\\[3pt]
a=1/r
\\[3pt]
\downarrow
\\[3pt]
\text{radiation}\rightarrow\text{matter}\rightarrow\text{de Sitter future}
\end{array}}
\tag{3}
\]

The black-hole event horizon supplies the global causal history. The trapping geometry supplies local marginality and stress-energy data. The formation region must connect those structures to the child clock and scale. The reciprocal interior supplies the mature cosmology.

No single surface is required to perform all four tasks.

---

## 3. Essential notation

| Symbol | Meaning |
|---|---|
| \(r\) | Dimensionless reciprocal parent/interior variable |
| \(a\) | Child FLRW scale factor |
| \(R_E\) | Areal radius of the parent black-hole event horizon during formation |
| \(R_+,R_-\) | Outward- and inward-moving trapping-horizon branches |
| \(R_b\) | Radius at first creation of the trapping-horizon pair |
| \(R_A\) | Child FLRW apparent-horizon radius |
| \(R_{\rm dS}\) | Child asymptotic de Sitter curvature radius |
| \(H\) | Child Hubble rate |
| \(\Gamma\) | Mature parent/child ruler-scale separation, \(\Gamma=a^2=r^{-2}\) |
| \(\Omega_{\rm W}\) | Local four-metric Weyl factor in a genuinely conformally related formation patch |
| \(\Gamma_{\rm MS}\) | Misner–Sharp radial derivative, \(\Gamma_{\rm MS}=D_\ell R\) |
| \(\kappa_H\) | Hayward–Kodama surface gravity of a spherical trapping or apparent horizon |
| \(\mathcal W_{\rm sph}\) | Spherical electric-Weyl amplitude |
| \(\mathcal T\) | Parent-to-child null affine-transfer function |
| \(P(r)\) | Dimensionless Friedmann/background ledger |
| \(\mathcal J\) | Normalization-independent matter–radiation ledger invariant |

The project's [cosmological glossary](glossary.html) gives the full notation and distinguishes the several horizons used in the programme.

---

## 4. The mature reciprocal interior

In child conformal time,

\[
ds_C^2
=a^2(\eta)
\left(-d\eta^2+d\chi^2+\chi^2d\Omega^2\right).
\tag{4}
\]

Equation (1) gives

\[
ds_C^2
=\frac1{r^2}
\left(-d\eta^2+d\chi^2+\chi^2d\Omega^2\right),
\tag{5}
\]

so the reciprocal relation has direct conformal meaning.

If corresponding mature parent and child rulers are written as

\[
\ell_P=\ell_*r,
\qquad
\ell_C=\ell_*a,
\tag{6}
\]

their relative scale is

\[
\boxed{
\Gamma
\equiv\frac{\ell_C}{\ell_P}
=\frac ar
=a^2
=r^{-2}.
}
\tag{7}
\]

This is a mature ruler-scale relation. It does not assert that an arbitrary Schwarzschild, Kerr, or collapsing parent metric is globally conformal to exact FLRW.

---

## 5. Friedmann cosmology as Gamma dynamics

Because \(\Gamma=a^2\), differentiation with respect to child proper time gives

\[
\boxed{
\frac{\dot\Gamma}{\Gamma}=2H.
}
\tag{8}
\]

For a spatially flat Friedmann child,

\[
H^2=\frac{8\pi G}{3}\rho,
\qquad
\dot H=-4\pi G\left(\rho+\frac{p}{c^2}\right),
\tag{9}
\]

and therefore

\[
\boxed{
\frac{\ddot\Gamma}{\Gamma}
=\frac{8\pi G}{3}
\left(\rho-\frac{3p}{c^2}\right).
}
\tag{10}
\]

The rate of \(\Gamma\) gives the Hubble expansion; its acceleration reads the trace sector of the stress-energy tensor. The familiar eras become

\[
\begin{array}{lll}
\text{radiation:} & \Gamma\propto\tau_C, & a\propto\tau_C^{1/2},\\[3pt]
\text{matter:} & \Gamma\propto\tau_C^{4/3}, & a\propto\tau_C^{2/3},\\[3pt]
\text{vacuum:} & \Gamma\propto e^{2H_\Lambda\tau_C}, & a\propto e^{H_\Lambda\tau_C}.
\end{array}
\tag{11}
\]

Radiation appears linearly in \(\Gamma\) because its stress-energy trace vanishes.

---

## 6. The homogeneous boundary ledger

Define

\[
\boxed{
P(r)\equiv\frac{H^2(r)}{H_\Lambda^2}.
}
\tag{12}
\]

For a flat child containing vacuum, pressureless matter, and radiation,

\[
\boxed{
P(r)=1+\eta_mr^3+\eta_rr^4.
}
\tag{13}
\]

Here \(\eta_m\) and \(\eta_r\) are the matter-to-vacuum and radiation-to-vacuum coefficients in the chosen normalization of \(a\). When the observational scale factor is normalized to \(a_0=1\), they equal the corresponding present density ratios.

A constant-\(w\) component contributes a power

\[
\boxed{n=3(1+w).}
\tag{14}
\]

Vacuum, spatial curvature, dust, and radiation therefore occupy the \(r^0,r^2,r^3,\) and \(r^4\) sectors respectively. Spatial flatness is the absence of the quadratic mode,

\[
P''(0)=0,
\tag{15}
\]

which remains a formation theorem target.

The combination

\[
\boxed{
\mathcal J\equiv\frac{\eta_r^3}{\eta_m^4}
}
\tag{16}
\]

is invariant under a constant rescaling of the scale-factor normalization. Its observed-background benchmark is

\[
\mathcal J_{\rm benchmark}\simeq5.42\times10^{-11},
\tag{17}
\]

corresponding to approximately \(7.88\) e-folds between matter–radiation and matter–vacuum equality. This number is a target for the formation map, not yet a parent-side prediction.

Once the reciprocal branch exists, the same ledger becomes a first integral for \(\Gamma\):

\[
\boxed{
\frac{\dot\Gamma^2}{4H_\Lambda^2}
=\Gamma^2+\eta_m\sqrt\Gamma+\eta_r.
}
\tag{18}
\]

---

## 7. Collapse produces more than one horizon

The parent black-hole event horizon is a global null boundary. A trapping horizon is defined locally by the vanishing of a null expansion. During formation they need not coincide.

In the ingoing Vaidya benchmark, the trapping radius is \(R_T=2m(v)\) and the event-horizon radius obeys

\[
\boxed{
\frac{dR_E}{dv}
=\frac12\left(1-\frac{R_T}{R_E}\right)
}
\tag{19}
\]

in \(G=c=1\). During accretion, \(R_E>R_T\). The separation is an ordinary feature of dynamical general relativity and supplies a finite region in which the null expansion changes between the two surfaces.

Generic smooth spherical first trapping is richer still. With compactness

\[
C\equiv\frac{2m}{R},
\tag{20}
\]

the first marginal sphere satisfies

\[
C_b=1,
\qquad
D_\ell C_b=0.
\tag{21}
\]

The Misner–Sharp equations then give

\[
\boxed{8\pi R_b^2\rho_b=1}
\tag{22}
\]

in geometrized units. Near first contact,

\[
C-1=A\,\Delta t-\frac B2(\Delta\ell)^2+\cdots,
\tag{23}
\]

so two marginal branches are born with the fold law

\[
\boxed{
\Delta\ell_\pm
=\pm\sqrt{\frac{2A}{B}}\sqrt{t-t_b}+O(t-t_b).
}
\tag{24}
\]

The apparent infinite velocity in \(t\) is removed by the regular local parameter \(\sigma=\sqrt{t-t_b}\).

---

## 8. A candidate parent history for \(r\)

After pair creation, let \(R_+\) and \(R_-\) denote the outward and inward trapping branches. The inward branch begins at \(R_b\) and moves toward smaller areal radius. It therefore supplies a natural candidate for the reciprocal history:

\[
\boxed{
r=\frac{R_-}{R_b}.
}
\tag{25}
\]

This has the correct normalization and orientation,

\[
R_-:R_b\rightarrow0
\quad\Longrightarrow\quad
r:1\rightarrow0
\quad\Longrightarrow\quad
a:1\rightarrow\infty.
\tag{26}
\]

CSBHI proposes Equation (25) as the leading geometric identification to test. A complete throat solution must still show that this marginal branch supplies the timelike reciprocal history used by GD1, or derive the correct replacement.

---

## 9. Local handoff data

For a spatially flat FLRW apparent horizon,

\[
\boxed{R_A=\frac cH,}
\tag{27}
\]

and its Hayward–Kodama surface gravity obeys

\[
\boxed{
\frac{\kappa_AR_A}{c^2}
=\frac{3w_{\rm eff}-1}{4}.
}
\tag{28}
\]

The pair \((R_A,\kappa_A)\) therefore carries the homogeneous two-jet: the radius fixes the Hubble and density scale, while the dimensionless surface gravity fixes the effective equation of state.

In spherical perfect-fluid collapse, define

\[
\mathcal W_{\rm sph}
\equiv
\frac m{R^3}-\frac{4\pi}{3}\rho.
\tag{29}
\]

On a parent marginal sphere, \(2m=R\). The exactly homogeneous benchmark \(\mathcal W_{\rm sph}=0\) then gives

\[
\rho_{\rm local}=\bar\rho_{\rm enclosed}
=\frac{3}{8\pi R^2},
\tag{30}
\]

and reproduces the functional FLRW surface-gravity relation (28). Exact zero Weyl is therefore a useful background handoff criterion.

Realistic collapse is not expected to be exactly Weyl-free. Regular spherical density, pressure, shear, and dissipative corrections begin at controlled order near the birth center, with the scalar Weyl residue typically

\[
\boxed{
\mathcal W_{\rm sph}=O(R_E^2).
}
\tag{31}
\]

Rotation permits additional finite higher-order structure and possible \(O(\chi^2)\) preferred-axis memory. The physical target is a low-Weyl, nearly isotropic handoff with calculable perturbations, not an observationally featureless universe.

---

## 10. The global causal map

The Oppenheimer–Snyder benchmark maps the growing parent event horizon exactly to an outgoing child birth cone. CSBHI proposes that a completed child boundary promotes this local cone into the relevant global early causal history. It does not equate parent and child physical horizon radii.

Let \(v_H\) parameterize the parent event-horizon generator,

\[
k_P^b\nabla_bk_P^a=\kappa_P(v_H)k_P^a,
\tag{32}
\]

and let \(\eta=\Phi(v_H)\) be the child conformal-time map. Define the affine transfer

\[
\mathcal T(v_H)\equiv\frac{d\lambda_C}{d\lambda_P}.
\tag{33}
\]

Then

\[
\boxed{
a^2[\Phi(v_H)]\Phi'(v_H)
=C\,\mathcal T(v_H)
\exp\!\left(\int^{v_H}\kappa_P(s)\,ds\right).
}
\tag{34}
\]

Equation (34) is the principal null-clock equation. Its remaining functional input, \(\mathcal T(v_H)\), must be derived from the complete formation geometry.

The possible CSBHI route through the cosmological horizon problem is a common causal history before the mature FLRW clock begins:

\[
\chi_{\rm causal}
=\Delta\eta_{\rm formation}
+\int_{\rm mature}\frac{c\,d\tau_C}{a(\tau_C)}.
\tag{35}
\]

Conformal scaling preserves light cones; it does not create causal contact. The proposal succeeds only if the derived formation contribution is large enough to place the observed last-scattering region inside one connected causal ancestry.

---

## 11. Three scale-transfer objects

Three quantities must remain distinct:

1. **Mature ruler scale**

   \[
   \Gamma=a^2=r^{-2}.
   \]

2. **Local four-metric Weyl factor**

   \[
   g^C_{ab}=\Omega_{\rm W}^2g^P_{ab}.
   \]

3. **Null affine transfer**

   \[
   \mathcal T=\frac{d\lambda_C}{d\lambda_P}.
   \]

Where a genuine local Weyl map has been established,

\[
d\lambda_C=C_\lambda\Omega_{{\rm W},H}^2d\lambda_P.
\tag{36}
\]

The throat must determine how \(\Omega_{\rm W}\), \(\Gamma\), and \(\mathcal T\) meet. They cannot be identified by notation alone.

For the same reason, the child de Sitter radius \(R_{\rm dS}\) is not presently equal to the physical Schwarzschild radius of the parent. Parent mass does not yet determine the child cosmological scale. The missing absolute scale calibration belongs to the formation map.

---

## 12. What the current structure suggests

### Radiation handoff

If the throat supplies a parent ruler related to the child apparent horizon by \(R_A^C=\Gamma R_P\), and both derivatives are compared in child proper time, then

\[
\frac{\dot R_P}{R_P}
=\frac{3w_{\rm eff}-1}{2}H.
\tag{37}
\]

A stationary mapped ruler therefore selects \(w_{\rm eff}=1/3\). Together with \(T^\mu{}_\mu=0\), \(\ddot\Gamma=0\), \(\kappa_AR_A=0\), and the null character of the radiation-era FLRW apparent horizon, this makes radiation a distinguished handoff candidate. The ruler and time correspondences remain premises for the throat to derive.

### Matter ledger

If a completed conformal map produces a dimensionless dressed outer trapping curve \(\mathcal R_+(r)\) with

\[
P(r)=\mathcal R_+(r)^{-2},
\tag{38}
\]

then

\[
\eta_m=-\frac13\mathcal R_+^{(3)}(0),
\qquad
\eta_r=-\frac1{12}\mathcal R_+^{(4)}(0),
\tag{39}
\]

and

\[
\boxed{
\mathcal J
=-\frac3{64}
\frac{[\mathcal R_+^{(4)}(0)]^3}
{[\mathcal R_+^{(3)}(0)]^4}.
}
\tag{40}
\]

This identifies a possible parent-side carrier of the total matter–radiation ledger. It does not yet derive its numerical value, and homogeneous geometry cannot separate particle species that share the same equation of state.

### Singularity and the hot beginning

The reciprocal limit \(r\to0\) occurs at the child's infinite future in the late de Sitter branch. CSBHI therefore does not identify the black-hole center with a cosmological beginning. Nor must the mature FLRW solution be extrapolated physically to \(a=0\): the hot child branch is proposed to begin at a finite formation handoff.

---

## 13. Current claim hierarchy

| Status | Statement |
|---|---|
| Foundational correspondence | \(a=1/r\) |
| Conditional mathematical result | Given the reciprocal FLRW metric, Einstein gravity, and stated fluids, the mature child obeys the standard flat Friedmann background |
| Mature-sector identity | \(\Gamma=a^2=r^{-2}\), with Equations (8), (10), and (18) |
| Established collapse geometry | Dynamical event/trapping separation; generic spherical trapping-pair fold; regular near-center suppression of scalar inhomogeneity |
| Exact analytic benchmark | Homogeneous OS collapse maps its event-horizon history to an outgoing child birth cone |
| Leading formation proposals | \(r=R_-/R_b\); low-Weyl two-jet handoff; event-horizon birth cone as part of the child's global early causal boundary |
| Conditional theorem target | A stationary mapped parent ruler selects a radiation child |
| Open construction | One finite throat geometry deriving the timelike handoff, \(\Omega_{\rm W}\), \(\mathcal T\), the absolute scale, and the child stress-energy transfer |
| Open phenomenology | Primordial spectra, residual Weyl and spin memory, thermal history, species abundances, and numerical parent-collapse coefficients |

CSBHI does not presently derive the baryon asymmetry, baryon-to-dark-matter ratio, particle identity of the dark sector, neutrino masses, \(N_{\rm eff}\), Standard Model couplings, the observed value of \(\Lambda\) from fundamental constants, or the parent mass of our universe.

---

## 14. The short version

A forming black hole contains a global event horizon, local trapping horizons, and a finite dynamical region between the collapse geometry and any mature reciprocal interior. CSBHI assigns the causal clock to the event-horizon history, the local density and pressure data to the trapping geometry, and the subsequent cosmology to

\[
\boxed{a=1/r.}
\]

The inward trapping branch has the right normalization and direction to supply \(r\), but that identification remains to be derived. Once the homogeneous reciprocal branch exists, its ruler-scale separation is

\[
\boxed{\Gamma=a^2=r^{-2},}
\]

and its dynamics are Friedmann cosmology written in geometric-duality variables.

The central open problem is therefore precise:

\[
\boxed{
\text{Can realistic collapse generate one finite throat that supplies the required timelike, null, and scale-transfer data?}
}
\tag{41}
\]

If it can, the cosmological expansion history is not a second structure inserted into the black-hole interior. It is the reciprocal continuation of the formation geometry.

---

## 15. Where to continue

1. [Geometric Duality I](gd1.html) introduces the reciprocal correspondence.
2. [How Collapse Becomes Cosmology](formation.html) gives the reader-first account of the formation campaign.
3. [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior) derives the conditional Friedmann dynamics.
4. [Mature Gamma Dynamics and the Conditional Radiation Handoff](note.html?src=mature_gamma_dynamics_and_conditional_radiation_handoff) develops Equations (7)–(18) and the handoff two-jet.
5. [The Conformal Dictionary and the Pre-FLRW Causal Interval](note.html?src=conformal_dictionary_and_pre_flrw_causal_interval) separates local Weyl scaling from mature ruler scaling and null affine transfer.
6. [What Remains Mathematically Illegible](note.html?src=open_questions) records the current open construction problems.
