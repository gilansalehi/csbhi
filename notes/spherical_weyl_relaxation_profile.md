# A Spherical Weyl-Relaxation Profile for the Reciprocal Throat

*Working calculation note — the exact density/Weyl relation, an explicit smooth profile, and the remaining dynamical equation.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-04.

**Status:** Working result, not yet part of the public technical series. The spherical curvature identity and the constructed profile are exact under the stated perfect-fluid assumptions. The profile is kinematic: its pressure, flux, causal character, and compatibility with the reciprocal trajectory remain to be solved.

> **Correction pending cross-check (Claude, 2026-08-05).** A follow-up analysis ([The Shear-Free Weyl–Stress Identity](note.html?src=shear_free_interior_weyl_stress_identity)) finds that the closure results below carry a factor-of-two error from using a single isotropic pressure in the conservation identity while solving for anisotropic stress. The corrected, assumption-light identity is \(D_\tau D=-H(3D+2\Pi)\), giving **\(\Pi=-\tfrac12 D\)** (not \(-D\), Eq 34) and Weyl dilution **\(D\propto a^{-2}\)** (not \(a^{-3}\), Eq 16) — the conformal weight of the Weyl scalar. Consequently the self-dual profile \(e^{-3|\sigma|}\) (Eq 20) is not the realized reciprocal profile. The identity \(\Psi_2=-\tfrac{4\pi G}{3}D\) (Eq 3) is exact **only in the isotropic/perfect-fluid sector**; once anisotropic pressure is present it generalizes to \(\Psi_2=-\tfrac{4\pi G}{3}(D+\Pi)\) (standard NP normalization). This banner flags the affected equations; the derivation below is left intact pending Codex's own verification.

**Prerequisites:** [GD I](gd1.html); [RI I — Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior); [The Reciprocal Scale Field and the Smooth-Throat Problem](note.html?src=reciprocal_scale_field).

**Notation:** [Glossary](note.html?src=cosmological_glossary). We use \(c=1\), retain \(G\), and denote physical areal radius by \(\mathcal R\). The cosmological constant is common to both descriptions and is omitted from the material mass below because its homogeneous contribution cancels from the Weyl tensor.

---

## 1. The exact spherical identity

Let \(m(\tau,\mathcal R)\) be the material part of the Misner–Sharp mass inside a sphere of areal radius \(\mathcal R\). On a regular spherical slice without shell crossing,

\[
\frac{\partial m}{\partial\mathcal R}=4\pi\rho\,\mathcal R^2.
\tag{1}
\]

Define the average enclosed density

\[
\bar\rho(\tau,\mathcal R)
\equiv
\frac{3m(\tau,\mathcal R)}{4\pi\mathcal R^3}.
\tag{2}
\]

For an isotropic perfect fluid, the single independent Newman–Penrose Weyl scalar is

\[
\boxed{
\Psi_2
=
-\frac{Gm}{\mathcal R^3}
+\frac{4\pi G}{3}\rho
=
-\frac{4\pi G}{3}\left(\bar\rho-\rho\right).
}
\tag{3}
\]

Equation (3) states the conversion target in one line:

- in vacuum, \(\rho=0\) and \(m=M\), so \(\Psi_2=-GM/\mathcal R^3\), the Schwarzschild/Kottler value;
- in a homogeneous region, \(m=4\pi\rho\mathcal R^3/3\), so \(\bar\rho=\rho\) and \(\Psi_2=0\), the FLRW value;
- between them, Weyl curvature measures density contrast rather than an additional source.

For anisotropic matter, pressure anisotropy contributes an additional term. Equation (3) therefore supplies the clean perfect-fluid target; any proposed throat with anisotropic stress must carry that correction explicitly.

---

## 2. An explicit finite transition

Choose two radii \(\mathcal R_1<\mathcal R_2\) on one spherical slice and define

\[
u\equiv\frac{\mathcal R-\mathcal R_1}{\Delta},
\qquad
\Delta\equiv\mathcal R_2-\mathcal R_1.
\tag{4}
\]

Let

\[
q(u)=1-10u^3+15u^4-6u^5,
\tag{5}
\]

the quintic smooth-step function satisfying

\[
q(0)=1,
\quad q(1)=0,
\quad q'(0)=q'(1)=q''(0)=q''(1)=0.
\tag{6}
\]

A finite homogeneous-to-vacuum profile is

\[
\rho(\mathcal R)=
\begin{cases}
\rho_c, & \mathcal R\leq\mathcal R_1,\\[3pt]
\rho_c q(u), & \mathcal R_1<\mathcal R<\mathcal R_2,\\[3pt]
0, & \mathcal R\geq\mathcal R_2.
\end{cases}
\tag{7}
\]

Integrating Equation (1) gives, inside the transition,

\[
m(\mathcal R)
=4\pi\rho_c
\left[
\frac{\mathcal R_1^3}{3}
+\Delta\int_0^u q(v)\left(\mathcal R_1+\Delta v\right)^2dv
\right].
\tag{8}
\]

Equations (3), (7), and (8) determine the complete Weyl profile without an independent interpolation ansatz.

At the homogeneous endpoint,

\[
m(\mathcal R_1)=\frac{4\pi}{3}\rho_c\mathcal R_1^3,
\qquad
\Psi_2(\mathcal R_1)=0.
\tag{9}
\]

At the vacuum endpoint, writing \(M=m(\mathcal R_2)\),

\[
\rho(\mathcal R_2)=0,
\qquad
\Psi_2(\mathcal R_2)=-\frac{GM}{\mathcal R_2^3}.
\tag{10}
\]

The transition is continuous in both density and Weyl curvature. To see why, let \(D\equiv\bar\rho-\rho\). Equations (1) and (2) imply

\[
\frac{\partial\bar\rho}{\partial\mathcal R}
=-\frac{3D}{\mathcal R},
\qquad
\frac{\partial D}{\partial\mathcal R}
=-\frac{3D}{\mathcal R}
-\frac{\partial\rho}{\partial\mathcal R}.
\tag{11}
\]

At \(\mathcal R_1\), both \(D\) and \(\partial_{\mathcal R}\rho\) vanish, so the Weyl field begins smoothly at zero. At \(\mathcal R_2\), \(\partial_{\mathcal R}\rho=0\), and Equation (11) becomes the vacuum falloff \(D'=-3D/\mathcal R\). The profile therefore joins the exterior Schwarzschild/Kottler Weyl field with the correct first derivative.

This is an existence proof for a smooth **curvature ledger**: concentrated exterior mass and homogeneous interior density can be connected without a discontinuous Weyl scalar.

---

## 3. Exact evolution of the density contrast

The Misner–Sharp equations also determine how the contrast evolves. Let

\[
H_\perp\equiv\frac{D_\tau\mathcal R}{\mathcal R},
\qquad
H_\parallel\equiv D_\tau\ln\ell_\parallel,
\qquad
\Theta=H_\parallel+2H_\perp.
\tag{12}
\]

Here \(\ell_\parallel\) is an infinitesimal radial proper separation between neighboring comoving shells.

For a comoving perfect fluid, local conservation and the Misner–Sharp work equation give

\[
D_\tau\rho=-(\rho+p)\Theta,
\qquad
D_\tau\bar\rho=-3H_\perp(\bar\rho+p).
\tag{13}
\]

Subtracting the two equations yields the exact contrast law

\[
\boxed{
D_\tau D+3H_\perp D
=(\rho+p)(H_\parallel-H_\perp).
}
\tag{14}
\]

Using Equation (3), the equivalent Weyl law is

\[
\boxed{
D_\tau\Psi_2+3H_\perp\Psi_2
=-\frac{4\pi G}{3}(\rho+p)
\left(H_\parallel-H_\perp\right).
}
\tag{15}
\]

Equation (15) identifies the two available channels:

1. isotropic expansion dilutes an existing Weyl contrast as inverse volume;
2. unequal radial and angular rates source or drain Weyl curvature through shear.

In Alice's shear-free reciprocal interior, \(H_\parallel=H_\perp=H_A\), so

\[
\Psi_2\propto a^{-3}=r^3=e^{-3\sigma}.
\tag{16}
\]

Thus any residual Weyl field carried into the reciprocal interior decays with precisely the inverse power of the exterior Schwarzschild field.

Equation (16) is a propagation law, not an existence theorem for an inhomogeneous shear-free perfect-fluid solution. The remaining Einstein constraints may force the residual amplitude to vanish or require acceleration, anisotropic stress, flux, or a projected higher-dimensional term. That restriction is useful: it identifies exactly what the throat completion must supply beyond isotropic scaling.

---

## 4. The reciprocal self-dual profile

Define the horizon Weyl scale

\[
W_H\equiv\frac{GM}{R_S^3}.
\tag{17}
\]

On the parent-side Kottler branch, Equation (3) of the scale-field note gives the radial law

\[
\Psi_2^{\rm out}(\sigma)=-W_H e^{3\sigma},
\qquad \sigma<0.
\tag{18}
\]

On a shear-free child branch, Equation (16) gives

\[
\Psi_2^{\rm in}(\sigma)=-W_H e^{-3\sigma},
\qquad \sigma>0,
\tag{19}
\]

where the common coefficient is the continuity condition at the self-dual surface. Together,

\[
\boxed{
\Psi_2^{(0)}(\sigma)
=-W_H e^{-3|\sigma|}.
}
\tag{20}
\]

This profile is continuous, reciprocal-reflection invariant, and has the correct exact power on both asymptotic branches. It is not differentiable at \(\sigma=0\):

\[
\left[\partial_\sigma\Psi_2^{(0)}\right]_{0^-}^{0^+}
=6W_H.
\tag{21}
\]

Equation (20) is therefore the natural **thin-throat scale profile**. Its cusp is the scale-space version of compressing the conversion into zero width. It does not by itself prove a metric shell, because the parent expression is a radial law while the child expression is an evolution law; a complete horizon map must show that \(\sigma\) parametrizes both within one geometry.

The child-side power is conditional on shear-free propagation. Section 7 shows that a nonzero amplitude cannot be carried by a geodesic, exactly shear-free four-dimensional perfect fluid alone; an effective anisotropic or projected geometric term must support it.

The absolute value admits a simple reflection-symmetric thickening:

\[
h_\epsilon(\sigma)
\equiv
\epsilon\ln\cosh\left(\frac{\sigma}{\epsilon}\right),
\qquad
\boxed{
\Psi_2^{(\epsilon)}(\sigma)
=-W_H e^{-3h_\epsilon(\sigma)}.
}
\tag{22}
\]

For \(|\sigma|\gg\epsilon\), \(h_\epsilon=|\sigma|-\epsilon\ln2+o(1)\), recovering the two exponential powers up to the finite normalization accumulated through the transition. At the horizon, \(h_\epsilon(0)=h_\epsilon'(0)=0\), so the Weyl profile and its first derivative are smooth. The parameter \(\epsilon\) is the throat's width in scale space.

Equation (22) is not selected uniquely; it is an explicit regularization demonstrating that reciprocity, the two asymptotic powers, horizon continuity, and smoothness are mutually compatible. Einstein's equations must determine whether this profile—or another in the same class—has admissible matter and 5D projection data.

The corresponding density contrast follows directly from Equation (3):

\[
D^{(\epsilon)}(\sigma)
=\bar\rho_H e^{-3h_\epsilon(\sigma)},
\qquad
\bar\rho_H\equiv\frac{3M}{4\pi R_S^3}.
\tag{23}
\]

The normalization is not new: \(\bar\rho_H\) is exactly the exterior black hole's average density inside its horizon. The new statement is that the reciprocal powers promote that boundary identity into a candidate scale-dependent **density-contrast profile**. The contrast is maximal at the self-dual surface and decays toward both asymptotic descriptions.

---

## 5. The 4D shear budget

On the child side, use \(D_\tau\sigma=H_A\) and \(H_\perp=H_A\). Differentiating Equation (23) and substituting it into Equation (14) gives the radial/angular rate difference required by a four-dimensional perfect-fluid realization:

\[
\boxed{
H_\parallel-H_\perp
=
\frac{3H_A D}{\rho+p}
\left(1-h_\epsilon'(\sigma)\right)
=
\frac{3H_A D}{\rho+p}
\left[1-\tanh\left(\frac{\sigma}{\epsilon}\right)\right].
}
\tag{24}
\]

This is the first dynamical discriminator between the two realizations:

- In a purely four-dimensional perfect-fluid throat, smooth Weyl relaxation requires a finite interval of unequal radial and angular expansion rates. The rate difference is largest at the self-dual surface and decays continuously to zero.
- If Alice's reciprocal probe cloud must remain exactly shear-free throughout the transition, another term must carry the right-hand side of Equation (15). A projected 5D Weyl term, anisotropic effective stress, or conformal-gauge contribution then has a precise value to reproduce.
- In the zero-width limit, the finite interval collapses onto the null surface and recovers the sharp-shell problem.

Writing that additional contribution as \(\mathcal Q_{\rm scale}\), the shear-free propagation equation becomes

\[
D_\tau\Psi_2+3H_A\Psi_2=\mathcal Q_{\rm scale}.
\]

For the smooth profile in Equation (22),

\[
\boxed{
\mathcal Q_{\rm scale}(\sigma)
=3H_A
\left[1-\tanh\left(\frac{\sigma}{\epsilon}\right)\right]
\Psi_2^{(\epsilon)}(\sigma).
}
\tag{24a}
\]

Equation (24a) is a quantitative target for the 5D or conformal calculation: its projected correction must reproduce this function if Alice's induced four-dimensional probe geometry is to remain exactly isotropic while the Weyl field relaxes smoothly.

Equation (24) describes relative motion within an extended probe cloud, not a local impulse on Alice. A smooth finite profile produces tidal evolution rather than an abrupt horizon kick.

The magnitude depends on \(D/(\rho+p)\). Determining that ratio from the collapse data is therefore the next numerical target: after the horizon map places the transition in cosmic history, it will show whether the entirely 4D realization lies within observational shear bounds or whether the higher-dimensional channel is required.

---

## 6. A reciprocal curvature-mixing angle [C]

The definition of \(D\) supplies an exact ledger:

\[
\boxed{
\bar\rho=\rho+D.
}
\tag{25}
\]

The two terms have distinct geometric roles. The local perfect-fluid density contributes to Ricci curvature through Einstein's equations; the contrast \(D\) determines the Weyl scalar through Equation (3). Because radiation is trace-free, this statement concerns Ricci **content**, not the Ricci scalar alone.

Whenever \(\rho\geq0\) and \(D\geq0\), Equation (25) admits the angular parameterization

\[
\rho=\bar\rho\sin^2\vartheta,
\qquad
D=\bar\rho\cos^2\vartheta,
\qquad
0\leq\vartheta\leq\frac{\pi}{2}.
\tag{26}
\]

Then:

- vacuum Schwarzschild/Kottler has \(\rho=0\), \(D=\bar\rho\), and \(\vartheta=0\);
- homogeneous FLRW has \(\rho=\bar\rho\), \(D=0\), and \(\vartheta=\pi/2\);
- the conversion between them is literally a quarter-turn in this two-component curvature ledger.

The reciprocal reflection suggests

\[
\vartheta(-\sigma)=\frac{\pi}{2}-\vartheta(\sigma),
\tag{27}
\]

so the self-dual surface has \(\vartheta(0)=\pi/4\): equal Weyl-side contrast and Ricci-side local density. This gives a precise version of the claim that the horizon is the midpoint, rather than an endpoint, of the geometric conversion.

The simplest scale-composing odds ratio is

\[
\frac{\rho}{D}
=\tan^2\vartheta
=e^{3\sigma}
=a^3
=\frac1{r^3}.
\tag{28}
\]

The power \(3\) is the spatial-volume power. Equation (28) gives

\[
\boxed{
\frac{\rho}{\bar\rho}
=\frac{e^{3\sigma}}{1+e^{3\sigma}},
\qquad
\frac{D}{\bar\rho}
=\frac{1}{1+e^{3\sigma}},
\qquad
\vartheta(\sigma)=\arctan e^{3\sigma/2}.
}
\tag{29}
\]

This logistic rotation is not derived from Einstein's equations. It is the minimal candidate satisfying:

1. the exact ledger in Equation (25);
2. reciprocal exchange of local density and density contrast;
3. the self-dual midpoint at \(\sigma=0\);
4. composition under additive changes of logarithmic scale;
5. the three-dimensional volume power already governing dust dilution and exterior Weyl curvature.

These conditions motivate Equation (28), but they do not make it unique among all smooth reciprocal interpolations. Other odd functions of \(\sigma\), or other profiles with the same endpoint powers, can obey the reflection rule. The logistic form is a deliberately economical hypothesis whose value is that the remaining field equations can falsify it directly.

Unlike a vacuum Schwarzschild patch pasted directly onto exact FLRW, Equation (29) contains matter and Weyl curvature simultaneously near the horizon. It therefore models the recursive CSBHI premise—locally black-hole-like, cosmological on larger scales—rather than treating the isolated vacuum solution as the complete parent geometry.

The decisive test is now explicit: insert Equation (29), the RI I expansion history, and the Misner–Sharp equations into the remaining radial Einstein constraint. If they close with regular pressure and flux, the geometric “rotation” becomes a solution. If they do not, the residual identifies the effective 5D or conformal term quantitatively.

There is already one nontrivial closure. On a shear-free child branch, Equation (16) fixes

\[
D(a)=D_Ha^{-3}.
\tag{30}
\]

Combining this exact propagation law with the candidate reciprocal odds in Equation (28) gives

\[
\boxed{
\rho(a)=a^3D(a)=D_H,
\qquad
\bar\rho(a)=\rho+D=D_H\left(1+a^{-3}\right).
}
\tag{31}
\]

The two sides of the curvature ledger therefore acquire precisely the characteristic powers of vacuum and dust: the local Ricci-side component is constant, while the Weyl-side density contrast dilutes as inverse volume. This is not yet a derivation of cosmological dust plus vacuum. \(D\) measures inhomogeneity, not homogeneous matter density, and Equation (28) remains a geometric hypothesis. The result is nevertheless a sharp consistency clue: the simplest reciprocal rotation converts the exact spherical Weyl propagation law into the same two powers that dominate the late-time RI I expansion history.

At \(a=1\), Equation (31) gives equal ledger components. This does **not** assert \(\Omega_m=\Omega_\Lambda\) at horizon crossing; the ledger components are Weyl contrast and local Ricci density, not the standard FLRW density parameters. A completed field equation must determine how each projects onto the cosmological matter and vacuum terms.

---

## 7. The remaining 4D Einstein constraint [E]

The remaining closure condition is the shear-propagation equation. To avoid confusing the shear with the scale field \(\sigma\), denote the spherical shear scalar by \(\varsigma\). For a geodesic, nondissipative spherical fluid,

\[
D_\tau\varsigma
+\frac{\varsigma^2}{3}
+\frac{2}{3}\Theta\varsigma
+Y_{TF}=0,
\tag{32}
\]

where the trace-free structure scalar is

\[
Y_{TF}
=\mathcal E-4\pi G\Pi.
\tag{33}
\]

Here \(\mathcal E\) is the electric-Weyl scalar in the convention

\[
E_{ab}
=\mathcal E
\left(e_ae_b-\frac13h_{ab}\right),
\]

and \(\Pi\equiv p_r-p_t\) is radial minus tangential pressure. For the density convention used in this note, Equations (2) and (3) give

\[
\mathcal E=-4\pi G D.
\]

This normalization differs by a factor of three from the Newman–Penrose scalar used in Equation (3):

\[
\boxed{\mathcal E=3\Psi_2=-4\pi G D.}
\tag{33a}
\]

Indeed, in vacuum Equation (3) gives \(\Psi_2=-GM/\mathcal R^3\), while the definition above gives electric-Weyl eigenvalues \(2\mathcal E/3=-2GM/\mathcal R^3\) in the radial direction and \(-\mathcal E/3=GM/\mathcal R^3\) in each tangential direction. Equation (33a) therefore fixes both the convention and the factor that enters the anisotropic-stress result below.

If Alice's congruence is initially shear-free and must remain exactly shear-free, Equation (32) requires \(Y_{TF}=0\). Two conclusions follow.

**Pure 4D perfect fluid.** With \(\Pi=0\), shear-free propagation requires \(\mathcal E=0\), hence \(D=0\). A geodesic, exactly shear-free perfect-fluid interior is FLRW; it cannot simultaneously carry the nonzero Weyl-relaxation profile of Sections 4–6. The four-dimensional perfect-fluid version of the thick throat therefore does not close.

**Effective scale/5D sector.** If ordinary matter remains isotropic but the projected scale geometry supplies an effective anisotropic stress, the required value is fixed:

\[
\boxed{
\Pi_{\rm scale}
=p_r^{\rm scale}-p_t^{\rm scale}
=-D,
\qquad
p_t^{\rm scale}-p_r^{\rm scale}=D.
}
\tag{34}
\]

For the reciprocal mixing profile,

\[
\boxed{
p_t^{\rm scale}-p_r^{\rm scale}
=\frac{\bar\rho}{1+a^3}.
}
\tag{35}
\]

This is the closure result. The missing term is transverse, has the dimensions of pressure, is maximal on the Weyl-dominated side of the conversion, and vanishes as the geometry becomes homogeneous FLRW. It is therefore the local tensorial target against which the independently derived transverse junction work must be compared.

Equation (34) does not prove that a 5D embedding supplies the term. It removes the ambiguity about what that embedding must do: its projected trace-free stress must cancel the electric-Weyl source in the shear equation while leaving Alice's induced expansion isotropic.

---

## 8. What the profile does not yet prove

Specifying \(\rho(\mathcal R)\) on one slice does not construct a spacetime. The remaining Einstein and conservation equations must determine the pressure, radial motion, and any energy flux.

For a comoving perfect fluid, the Misner–Sharp work equation is

\[
D_\tau m
=
-4\pi p\,\mathcal R^2D_\tau\mathcal R.
\tag{36}
\]

Equation (36) identifies the remaining dynamical calculation. Dust has \(p=0\), so material Misner–Sharp mass is conserved and the classical Oppenheimer–Snyder/Einstein–Straus match can be stress-free. Radiation has \(p=\rho_r/3\), so a dynamical transition must carry pressure work. This is the same radiation residual isolated independently by the FLRW–Kottler junction and throat-thermodynamic notes.

The smooth density profile therefore resolves the **kinematic** Weyl jump but does not yet solve the **dynamical** throat. A completed solution must:

1. evolve Equations (1), (15), (29), (34), and (36) together with the radial Euler equation;
2. impose the reciprocal boundary history \(a=1/r\);
3. determine whether the transition is timelike, null, or changes causal character;
4. verify continuity of the induced metric and transverse/extrinsic curvature;
5. recover the known Barrabès–Israel surface stress when \(\Delta\to0\) in the appropriate null limit.

---

## 9. Result and next target

The first result is constructive:

> In spherical perfect-fluid geometry, Weyl-to-Ricci conversion is density homogenization. Once the local density profile is specified, the Weyl profile is fixed by the Misner–Sharp mass and can relax continuously from Kottler to FLRW without a compulsory curvature jump.

The reciprocal scale adds a second result:

> The exact exterior Weyl power and the exact shear-free interior dilution power are reciprocal. Their continuous self-dual completion is \(e^{-3|\sigma|}\); a finite throat is a smooth regularization of this scale-space cusp.

The closure test adds the final result:

> A nonzero Weyl-relaxation profile cannot coexist with a geodesic, exactly shear-free four-dimensional perfect fluid. Preserving Alice's isotropic probe geometry requires an effective transverse stress satisfying \(p_t^{\rm scale}-p_r^{\rm scale}=D\).

This completes the present **four-dimensional perfect-fluid analysis** with a no-go result and a quantitative target. The next construction belongs to the 5D/conformal programme: derive Equation (34) from the projected geometry and compare its integrated pressure with the independently computed transverse junction work.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
2. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. A. Einstein and E. G. Straus, “The Influence of the Expansion of Space on the Gravitation Fields Surrounding the Individual Stars,” *Reviews of Modern Physics* **17**, 120–124 (1945), [doi:10.1103/RevModPhys.17.120](https://doi.org/10.1103/RevModPhys.17.120).
4. L. Herrera, A. Di Prisco, J. Ospino, and E. Fuenmayor, “Conformally flat anisotropic spheres in general relativity,” *Journal of Mathematical Physics* **42**, 2129–2143 (2001), [doi:10.1063/1.1364503](https://doi.org/10.1063/1.1364503).
5. L. Herrera, A. Di Prisco, and J. Ospino, “On the stability of the shear-free condition,” *General Relativity and Gravitation* **42**, 1585–1599 (2010), [arXiv:1001.3020](https://arxiv.org/abs/1001.3020).
6. [The Exact Shell Identity and the Kottler Mass Condition for Alice's Interior](note.html?src=horizon_map_shell_identity_and_mass_growth); [Thermodynamic Accounting of the Transverse Junction](note.html?src=thermodynamic_accounting_of_the_transverse_junction), this project.
