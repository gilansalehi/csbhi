# Macroscopic Horizon Birth Selects the Low-Torsion Einstein–Cartan Branch

## A Conditional Discriminator Between Direct-Horizon and Torsion-Bounce Black-Hole Cosmology

**Gilan Salehi**  
Working note — September 2026

**Status:** Conditional branch-selection result. Exact within the flat-FLRW, ingoing-Vaidya, thermal spin-fluid benchmark stated below. The calculation does not establish the proposed horizon correspondences or complete the parent–child junction.

**Prerequisites:** [GD I: *Geometric Duality*](gd1.html); [*Marginality Transfer and the Reciprocal Cosmological Clock*](note.html?src=marginality_transfer_and_reciprocal_cosmological_clock).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

Einstein–Cartan black-hole cosmology and the Cosmic Scale Black Hole Interior (CSBHI) construction assign different roles to the black-hole interior. In torsion-bounce cosmology, collapse continues after horizon formation until fermionic spin–torsion repulsion produces a nonsingular bounce. CSBHI instead associates child birth directly with collapse at a finite marginal horizon and assigns the subsequent expansion to a reciprocal interior branch.

Under explicit parent–child horizon correspondences, an ingoing Vaidya benchmark gives

$$
H_C=\frac{c}{R_T},
\qquad
w_{\rm eff}
=-1+\frac43\frac{R_E}{R_T}\frac{1}{c}\frac{dR_T}{dv}.
$$

Combining this geometry with the standard thermal Einstein–Cartan spin-fluid relations produces two branches. For a macroscopic accreting parent, the branch compatible with positive trapping-horizon growth has

$$
\boxed{
\frac{\sigma}{\epsilon}
\sim
\frac{\ell_{\rm Pl}}{R_T}
}.
$$

Whenever a second positive thermal root exists, it approaches the Einstein–Cartan cancellation regime \(\sigma/\epsilon\to1\), but necessarily has \(dR_T/dv<0\), the opposite sign from monotonic positive-energy accretion.

The result does not refute Einstein–Cartan gravity or Popławski's continued-collapse model. It conditionally distinguishes horizon→continued contraction→torsion bounce from horizon→child birth→reciprocal expansion. If direct horizon birth survives the full CSBHI junction problem, macroscopic black-hole formation selects the low-torsion branch rather than the torsion-bounce branch.

---

## 1. Dual-horizon geometric input

Consider the ingoing Vaidya benchmark [1]

$$
ds_P^2
=
-\left(1-\frac{R_T(v)}{\mathcal R}\right)c^2dv^2
+2c\,dv\,d\mathcal R
+\mathcal R^2d\Omega^2,
\tag{1}
$$

where \(v\) is parent advanced time and

$$
R_T(v)=\frac{2GM(v)}{c^2}
\tag{2}
$$

is the parent trapping-horizon radius [2]. Outgoing radial null curves obey

$$
\frac{d\mathcal R}{dv}
=
\frac{c}{2}\left(1-\frac{R_T}{\mathcal R}\right).
\tag{3}
$$

The parent event-horizon radius \(R_E(v)\) is the globally selected outgoing null solution,

$$
\frac{dR_E}{dv}
=
\frac{c}{2}\left(1-\frac{R_T}{R_E}\right).
\tag{4}
$$

For the child FLRW geometry, let \(R_A=c/H_C\) be the apparent-horizon radius in the spatially flat case and let \(B_C(\tau_C)\) be its cosmological event-horizon radius. The latter obeys

$$
\frac{dB_C}{d\tau_C}=H_CB_C-c.
\tag{5}
$$

Impose the two benchmark correspondences

$$
R_T^P=R_A^C,
\qquad
R_E^P=B_C.
\tag{6}
$$

The first gives

$$
\boxed{H_C=\frac{c}{R_T}.}
\tag{7}
$$

Define the cohort lapse

$$
N_H\equiv\frac{d\tau_C}{dv}.
\tag{8}
$$

Equations (4)–(6) describe the same event-horizon radius in the two parametrizations, so

$$
\frac{c}{2}\left(1-\frac{R_T}{R_E}\right)
=
N_Hc\left(\frac{R_E}{R_T}-1\right).
\tag{9}
$$

Away from the exactly stationary point,

$$
\boxed{N_H=\frac{R_T}{2R_E}.}
\tag{10}
$$

At \(R_E=R_T\), both null equations vanish; Equation (10) is only the continuous limit of the dynamical relation.

From Equation (7),

$$
q_C
=
-1-\frac{1}{H_C^2}\frac{dH_C}{d\tau_C}
=
-1+\frac{1}{c}\frac{dR_T}{d\tau_C}.
\tag{11}
$$

Define

$$
\boxed{
\xi(v)
\equiv
\frac{R_E}{R_T}
\frac{1}{c}\frac{dR_T}{dv}.
}
\tag{12}
$$

Using Equation (10),

$$
\boxed{q_C=-1+2\xi.}
\tag{13}
$$

For a flat FLRW child represented by a total effective perfect fluid,

$$
q_C=\frac{1+3w_{\rm eff}}{2},
$$

and therefore

$$
\boxed{w_{\rm eff}=-1+\frac43\xi.}
\tag{14}
$$

These relations follow from the Vaidya and FLRW null equations once Equation (6) is imposed. They do not use cosmological calibration.

For ingoing Vaidya accretion by positive-energy null dust, \(dM/dv\ge0\), and therefore

$$
\boxed{\xi\ge0.}
\tag{15}
$$

This is the accreting-Vaidya condition, not a theorem for arbitrary collapse.

---

## 2. Einstein–Cartan radiation plus spin torsion

For an unpolarized relativistic spin fluid, write the magnitude of the negative Einstein–Cartan spin contribution as \(\sigma>0\). The effective spin-fluid terms used by Popławski are [3]

$$
\epsilon_S=-\sigma,
\qquad
p_S=-\sigma,
$$

with

$$
\sigma=\frac14\varkappa s^2,
\qquad
\varkappa=\frac{8\pi G}{c^4},
\qquad
s^2=\frac18(\hbar cn)^2.
$$

Thus

$$
\boxed{
\sigma=\frac{\pi G\hbar^2}{4c^2}n^2.
}
\tag{16}
$$

For ultrarelativistic ordinary matter, \(p=\epsilon/3\). In the high-density flat approximation, the spin-fluid cancellation condition is

$$
\boxed{\sigma=\epsilon.}
\tag{17}
$$

Introduce \(\epsilon_\Lambda=\Lambda c^4/(8\pi G)\). The total effective density and pressure are

$$
\epsilon_{\rm eff}=\epsilon-\sigma+\epsilon_\Lambda,
$$

$$
p_{\rm eff}=\frac{\epsilon}{3}-\sigma-\epsilon_\Lambda.
\tag{18}
$$

For a homogeneous unpolarized spin fluid, the Einstein–Cartan equations can be written as the ordinary metric Einstein equations with these effective sources [3,4]. This supports the bulk FLRW calculation below. It does not establish the junction conditions of the full Riemann–Cartan connection.

---

## 3. Horizon geometry reconstructs the two components

Equation (7) fixes the total effective density on the matched child apparent horizon:

$$
\boxed{
D\equiv\epsilon_{\rm eff}
=
\frac{3c^4}{8\pi G R_T^2}.
}
\tag{19}
$$

Define

$$
\boxed{
\lambda
\equiv
\frac{\epsilon_\Lambda}{D}
=
\frac{\Lambda R_T^2}{3}.
}
\tag{20}
$$

Equation (14) supplies

$$
\frac{p_{\rm eff}}{D}=-1+\frac43\xi.
\tag{21}
$$

Solving the density and pressure equations gives

$$
\boxed{\epsilon=D(3-2\xi-3\lambda)}
\tag{22}
$$

and

$$
\boxed{\sigma=2D(1-\xi-\lambda).}
\tag{23}
$$

Define

$$
\boxed{\delta\equiv1-\xi-\lambda.}
\tag{24}
$$

Then

$$
\boxed{\sigma=2D\delta,}
\tag{25}
$$

$$
\boxed{\epsilon=D(1-\lambda+2\delta),}
\tag{26}
$$

and

$$
\boxed{
\frac{\sigma}{\epsilon}
=
\frac{2\delta}{1-\lambda+2\delta}.
}
\tag{27}
$$

No thermal microphysics has yet been imposed.

---

## 4. The accretion bound

Assume a nonnegative cosmological constant and a non-vacuum cross-section,

$$
0\le\lambda<1.
\tag{28}
$$

Positive spin torsion requires \(\delta\ge0\), while accretion requires \(\xi\ge0\). Hence

$$
0\le\delta\le1-\lambda.
\tag{29}
$$

Equation (27) increases monotonically with \(\delta\). Its largest value on the accreting branch is

$$
\boxed{
\frac{\sigma}{\epsilon}\le\frac23.
}
\tag{30}
$$

An accreting marginal horizon in this benchmark therefore cannot simultaneously represent the flat spin-fluid cancellation surface \(\sigma/\epsilon=1\).

A finite CSBHI birth horizon has \(H_C=c/R_T>0\), whereas the idealized flat Einstein–Cartan cancellation surface has \(H=0\). The two surfaces encode different dynamics.

---

## 5. Thermal Einstein–Cartan microphysics

For relativistic matter in thermal equilibrium [3],

$$
\epsilon(T)
=
\frac{\pi^2}{30}g_*
\frac{(k_BT)^4}{(\hbar c)^3},
\tag{31}
$$

$$
n(T)
=
\frac{\zeta(3)}{\pi^2}g_n
\frac{(k_BT)^3}{(\hbar c)^3},
\tag{32}
$$

where

$$
g_*=g_b+\frac78g_f,
\qquad
g_n=\frac34g_f.
\tag{33}
$$

Define

$$
\epsilon_{\rm Pl}=\frac{c^7}{\hbar G^2},
\qquad
\ell_{\rm Pl}=\sqrt{\frac{\hbar G}{c^3}},
\qquad
T_{\rm Pl}=\frac{1}{k_B}\sqrt{\frac{\hbar c^5}{G}}.
\tag{34}
$$

Eliminating temperature between Equations (16), (31), and (32) gives

$$
\boxed{
\frac{\sigma}{\epsilon_{\rm Pl}}
=
C_*
\left(\frac{\epsilon}{\epsilon_{\rm Pl}}\right)^{3/2},
}
\tag{35}
$$

where

$$
\boxed{
C_*
=
\frac{30^{3/2}\zeta(3)^2g_n^2}{4\pi^6g_*^{3/2}}.
}
\tag{36}
$$

This is the thermal Einstein–Cartan spin-fluid curve in \((\epsilon,\sigma)\) space.

---

## 6. Geometry–microphysics consistency equation

The geometric density scale satisfies

$$
\frac{D}{\epsilon_{\rm Pl}}
=
\frac{3}{8\pi}
\frac{\ell_{\rm Pl}^2}{R_T^2}.
\tag{37}
$$

Substituting Equations (25) and (26) into Equation (35) gives

$$
\boxed{
2\delta
=
\beta_*
\frac{\ell_{\rm Pl}}{R_T}
(1-\lambda+2\delta)^{3/2},
}
\tag{38}
$$

with

$$
\boxed{
\beta_*=C_*\sqrt{\frac{3}{8\pi}}.
}
\tag{39}
$$

Equation (38) contains no fitted child expansion parameter. Its inputs are \(R_T\), \(R_E\), \(dR_T/dv\), \(\Lambda\), \(g_*\), and \(g_n\), together with fundamental constants.

For the high-temperature Standard Model count used by Popławski,

$$
g_b=28,
\qquad
g_f=90,
\qquad
g_*=106.75,
\qquad
g_n=67.5,
$$

and

$$
\boxed{\beta_*\simeq0.08812.}
\tag{40}
$$

At lower temperatures, \(g_*(T)\) and \(g_n(T)\) must be evaluated self-consistently. Their variation changes the coefficient, not the geometric power of \(\ell_{\rm Pl}/R_T\).

---

## 7. The macroscopic accreting branch

Let

$$
\eta\equiv\frac{\ell_{\rm Pl}}{R_T}.
\tag{41}
$$

For a macroscopic horizon, \(\eta\ll1\). Equation (38) has a small-\(\delta\) solution,

$$
\boxed{
\delta_{\rm low}
\simeq
\frac{\beta_*}{2}\eta(1-\lambda)^{3/2}.
}
\tag{42}
$$

Using Equation (27),

$$
\boxed{
\frac{\sigma}{\epsilon}
\simeq
\beta_*
\frac{\ell_{\rm Pl}}{R_T}
\sqrt{1-\lambda}.
}
\tag{43}
$$

At a birth surface for which \(\lambda\ll1\),

$$
\boxed{
\frac{\sigma}{\epsilon}
\simeq
\beta_*
\frac{\ell_{\rm Pl}}{R_T}.
}
\tag{44}
$$

For a Schwarzschild scale, \(R_T=2GM/c^2\), so

$$
\boxed{
\frac{\sigma}{\epsilon}
\simeq
\frac{\beta_*}{2}\frac{m_{\rm Pl}}{M}
\simeq
0.0441\frac{m_{\rm Pl}}{M}.
}
\tag{45}
$$

For a stellar-mass horizon the ratio is of order \(10^{-40}\). The temperature-dependent degrees of freedom change the prefactor, but not the macroscopic suppression:

$$
\boxed{
\frac{\sigma}{\epsilon}
\propto
\frac{\ell_{\rm Pl}}{R_T}.
}
\tag{46}
$$

---

## 8. Exact separation of the two thermal branches

Set

$$
u\equiv1-\lambda>0.
$$

Equation (38) becomes

$$
F(\delta)
\equiv
\frac{2\delta}{(u+2\delta)^{3/2}}
=
\beta_*\eta.
\tag{47}
$$

Its derivative is

$$
F'(\delta)
=
\frac{2(u-\delta)}{(u+2\delta)^{5/2}}.
\tag{48}
$$

Therefore \(F\) rises on \(0<\delta<u\), reaches its unique maximum at \(\delta=u\), and falls on \(\delta>u\). Two positive roots exist when

$$
\beta_*\eta
<
\frac{2}{3\sqrt{3u}}.
\tag{49}
$$

For the lower root,

$$
\delta_{\rm low}<u
\quad\Longrightarrow\quad
\xi=u-\delta_{\rm low}>0.
\tag{50}
$$

For the upper root,

$$
\delta_{\rm high}>u
\quad\Longrightarrow\quad
\boxed{\xi<0.}
\tag{51}
$$

The sign separation is exact within the benchmark; it does not rely on a large-\(\delta\) approximation.

For \(\eta\ll1\), the upper root is approximately

$$
\boxed{
\delta_{\rm high}
\simeq
\frac{1}{2\beta_*^2\eta^2}.
}
\tag{52}
$$

On this branch,

$$
\frac{\sigma}{\epsilon}
=
\frac{2\delta}{u+2\delta}
\longrightarrow1.
\tag{53}
$$

Equation (12) then gives

$$
\boxed{
\frac{dR_T}{dv}<0.
}
\tag{54}
$$

For a macroscopic radius,

$$
|\xi|
\sim
\frac{R_T^2}{2\beta_*^2\ell_{\rm Pl}^2}.
\tag{55}
$$

Thus

$$
\boxed{
\begin{array}{ll}
\text{lower thermal root}
&\longleftrightarrow
\text{growing trapping horizon},
\\[6pt]
\text{upper thermal root}
&\longleftrightarrow
\text{shrinking trapping horizon}.
\end{array}
}
\tag{56}
$$

---

## 9. Birth temperature

Equation (31) gives

$$
\boxed{
\frac{T}{T_{\rm Pl}}
=
\left[
\frac{45}{4\pi^3g_*}
(1-\lambda+2\delta)
\right]^{1/4}
\sqrt{\frac{\ell_{\rm Pl}}{R_T}}.
}
\tag{57}
$$

A macroscopic birth horizon therefore implies

$$
T\ll T_{\rm Pl},
\qquad
\boxed{T\propto R_T^{-1/2}.}
\tag{58}
$$

The conventional thermal spin-fluid bounce instead occurs near the Planck density; using all Standard Model species, Popławski obtains \(\epsilon_{\rm bb}\simeq15.4\epsilon_{\rm Pl}\) [3].

The difference is structural. Torsion-bounce cosmology allows contraction after horizon formation until the \(T^6\) spin term competes with the \(T^4\) radiation term. Direct-horizon birth fixes a macroscopic curvature density before that regime is reached.

---

## 10. Late-time limit

In the stationary limit of the dual-horizon benchmark,

$$
R_E,R_T\longrightarrow R_\infty,
\qquad
\xi\longrightarrow0.
$$

If the corresponding child endpoint has

$$
\Lambda_{\rm eff}=\frac{3}{R_\infty^2},
$$

then \(\lambda=\Lambda R_T^2/3\to1\). Equations (22) and (23) give

$$
\epsilon\longrightarrow0,
\qquad
\sigma\longrightarrow0.
$$

The stationary parent maps to a vacuum-dominated de Sitter child rather than to a persistent cancellation between large radiation and torsion densities.

---

## 11. Hostile audit

The calculation was checked without assuming that the CSBHI birth map is correct. The audit separates algebraic failures from limitations of the benchmark.

| Question | Finding | Classification |
|---|---|---|
| Are \(\epsilon\) and \(\sigma\) reconstructed correctly from \(\xi\) and \(\lambda\)? | Yes. Solving the effective density and pressure equations gives Equations (22) and (23) directly. | Survives |
| Does eliminating \(T\) preserve the dimensions and numerical factors? | Yes. Equations (30)–(35) follow from the stated thermal densities and give \(\beta_*=0.0881\) for \(g_*=106.75\) and \(g_n=67.5\). | Survives |
| Must the second positive thermal root have \(\xi<0\)? | Yes. Equation (45) proves that the root above \(\delta=u\) lies on \(\xi=u-\delta<0\), independent of the large-root approximation. | Survives |
| Does \(\xi\ge0\) characterize accretion? | Yes for the ingoing Vaidya benchmark with positive-energy null dust, because \(R_T=2GM/c^2\) and \(dM/dv\ge0\). It is not a theorem for every matter-collapse model. | Scope-limiting |
| Does the flat Vaidya–FLRW benchmark reproduce Popławski's closed spin-fluid collapse? | No. It tests a different causal architecture: direct birth on a flat child marginal sphere. The result does not disprove a closed universe that continues contracting after horizon formation. | Scope-limiting |
| May effective Einstein–Cartan stress-energy be used in the Hayward–Kodama equations? | In the homogeneous unpolarized spin-fluid treatment, eliminating algebraic torsion yields ordinary metric Einstein equations with effective density and pressure, so the bulk calculation is consistent. A junction in the full Riemann–Cartan geometry may contain additional spin-current boundary data. | Repairable at the junction |
| Does low torsion at horizon birth prove that torsion never produces a child universe? | No. The conclusion follows only if the physical child begins on the direct expanding branch. On that branch, \(\sigma/\epsilon\propto a^{-2}\), so torsion becomes still less important after birth. | Scope-limiting |

No fatal algebraic failure was found. The strongest result supported by the calculation is therefore:

> Within the spatially flat dual-horizon Vaidya benchmark, thermal Einstein–Cartan spin-fluid microphysics and a macroscopic growing trapping horizon select the lower root
> \[
> \frac{\sigma}{\epsilon}
> \simeq
> \beta_*\frac{\ell_{\rm Pl}}{R_T}\sqrt{1-\lambda}.
> \]
> Whenever a second positive thermal root exists, it lies on the shrinking-horizon branch and approaches \(\sigma/\epsilon=1\) for a macroscopic horizon.

---

## 12. What the result decides

Popławski's black-hole cosmology places the spin–torsion bounce after horizon formation. Its causal sequence is

$$
\boxed{
\text{horizon formation}
\longrightarrow
\text{continued contraction}
\longrightarrow
\text{torsion bounce}
\longrightarrow
\text{expanding child}.
}
\tag{59}
$$

CSBHI proposes a different sequence:

$$
\boxed{
\text{horizon formation}
\longrightarrow
\text{child birth}
\longrightarrow
\text{reciprocal expansion}.
}
\tag{60}
$$

The calculation does not decide between Equations (59) and (60). It shows what follows if Equation (60) is correct. A macroscopic growing horizon selects a low-torsion state, and expansion then drives the spin fraction downward. The near-bounce state belongs to the other thermal root and, within this benchmark, to the opposite sign of horizon evolution.

Einstein–Cartan theory may therefore remain the correct local description of fermionic spin while not supplying the child-birth mechanism. In that interpretation, local microphysics provides the available spin states and the global throat geometry selects the realized state.

---

## 13. Next tests

The conditional result becomes substantially stronger if it survives four replacements:

1. **Replace null dust with timelike collapse.** Repeat the calculation in LTB or a relativistic-fluid collapse and test whether the \(\ell_{\rm Pl}/R_T\) suppression persists.
2. **Retain child spatial curvature.** Repeat the root analysis for \(k\ne0\), including the closed geometry used in Popławski's construction.
3. **Complete the parent–child junction.** Derive the two horizon correspondences and their clock from the transition geometry rather than imposing them as benchmark hypotheses.
4. **Keep the Riemann–Cartan boundary data.** Verify that eliminating algebraic torsion before matching gives the same transverse conditions as a junction calculation with the torsionful connection and spin current retained.

Temperature-dependent particle content can then be inserted through \(g_*(T)\) and \(g_n(T)\). That refinement changes \(\beta_*\), but not the parametric factor \(\ell_{\rm Pl}/R_T\).

---

## 14. Conclusion

The dual-horizon geometry fixes a macroscopic effective density and an effective equation of state. Thermal Einstein–Cartan microphysics supplies an independent relation between ordinary radiation and spin torsion. Their intersection is governed by

$$
\boxed{
2\delta
=
\beta_*\frac{\ell_{\rm Pl}}{R_T}
(1-\lambda+2\delta)^{3/2},
}
\tag{61}
$$

with \(\delta=1-\lambda-\xi\). For a macroscopic growing horizon, the selected solution is

$$
\boxed{
\frac{\sigma}{\epsilon}
\simeq
\beta_*\frac{\ell_{\rm Pl}}{R_T}\sqrt{1-\lambda}
\ll1.
}
\tag{62}
$$

The second positive root approaches the torsion-cancellation regime but lies on \(\xi<0\), the shrinking-horizon branch. The result is exact within the stated benchmark and conditional on its horizon correspondences.

The calculation therefore supplies a sharp discriminator. If the complete CSBHI junction establishes direct birth on the expanding marginal-horizon branch, a conventional torsion bounce is not the mechanism that creates the child. Torsion can remain valid spin physics, but the macroscopic horizon geometry selects the low-torsion state.

---

## References

1. P. C. Vaidya, “The Gravitational Field of a Radiating Star,” *Proceedings of the Indian Academy of Sciences A* **33**, 264–276 (1951). [doi:10.1007/BF03173260](https://doi.org/10.1007/BF03173260).
2. S. A. Hayward, “General Laws of Black-Hole Dynamics,” *Physical Review D* **49**, 6467–6474 (1994). [arXiv:gr-qc/9303006](https://arxiv.org/abs/gr-qc/9303006).
3. N. J. Popławski, “Big Bounce from Spin and Torsion,” *General Relativity and Gravitation* **44**, 1007–1014 (2012). [arXiv:1105.6127](https://arxiv.org/abs/1105.6127); [doi:10.1007/s10714-011-1323-2](https://doi.org/10.1007/s10714-011-1323-2).
4. N. J. Popławski, “Cosmology with Torsion: An Alternative to Cosmic Inflation,” *Physics Letters B* **694**, 181–185 (2010). [arXiv:1007.0587](https://arxiv.org/abs/1007.0587).
5. N. J. Popławski, “Universe in a Black Hole in Einstein–Cartan Gravity,” *The Astrophysical Journal* **832**, 96 (2016). [arXiv:1410.3881](https://arxiv.org/abs/1410.3881); [doi:10.3847/0004-637X/832/2/96](https://doi.org/10.3847/0004-637X/832/2/96).
