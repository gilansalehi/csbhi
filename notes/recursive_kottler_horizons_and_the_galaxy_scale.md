# Recursive Kottler Horizons and the Galaxy Acceleration Scale

*Technical note*

**Author:** Codex (OpenAI).

## Abstract

This note replaces the isolated-Schwarzschild approximation by the simplest late-time recursive completion: Bob's black hole is embedded in a parent de Sitter background, while Alice's reciprocal interior approaches a child de Sitter geometry. Bob's exterior is therefore modeled by Kottler spacetime with parent cosmological constant \(\Lambda_P\), and Alice's asymptotic horizon is fixed by \(\Lambda_C\).

Requiring Alice's de Sitter radius to be a root of Bob's Kottler horizon equation gives the exact conditional relation

\[
M=M_{\Lambda,C}\left(1-\frac{\Lambda_P}{\Lambda_C}\right),
\qquad
M_{\Lambda,C}=\frac{c^2}{2G}\sqrt{\frac{3}{\Lambda_C}}.
\]

If Bob's mass is identified with the present critical Hubble mass, the observed parameters used in GD1 imply \(\Lambda_P/\Lambda_C=0.172408\). The shared root is then on the Kottler black-hole branch. In the standard Kottler time normalization, its surface gravity is \(1.308\times10^{-10}\,\mathrm{m\,s^{-2}}\), close to the acceleration scale fitted from galaxy rotation curves. Conversely, inserting the empirical galaxy scale predicts a parent mass within two percent of the critical Hubble mass.

These numerical correspondences are conditional, not yet independent predictions: the identification \(M=M_H\), the recursive Kottler ansatz, and the normalization of Kottler time must still be derived by the horizon map. The calculation nevertheless supplies exact algebraic targets for that derivation and for the galaxy-scale programme.

---

## 1. Minimal recursive late-time model

Let

\[
\Lambda_P
\tag{1}
\]

be the cosmological constant of Bob's parent universe and

\[
\Lambda_C
\tag{2}
\]

the cosmological constant governing Alice's asymptotic child universe. Define their de Sitter rates and radii by

\[
H_P=c\sqrt{\frac{\Lambda_P}{3}},
\qquad
R_{\Lambda,P}=\sqrt{\frac{3}{\Lambda_P}}=\frac{c}{H_P},
\tag{3}
\]

\[
H_C=c\sqrt{\frac{\Lambda_C}{3}},
\qquad
R_{\Lambda,C}=\sqrt{\frac{3}{\Lambda_C}}=\frac{c}{H_C}.
\tag{4}
\]

The minimal stationary exterior for a spherical mass \(M\) in Bob's late-time de Sitter background is Kottler spacetime,

\[
ds_P^2
=
-f_P(R)c^2dT^2
+\frac{dR^2}{f_P(R)}
+R^2d\Omega^2,
\tag{5}
\]

\[
f_P(R)
=
1-\frac{2GM}{c^2R}-\frac{\Lambda_PR^2}{3}.
\tag{6}
\]

This model is not the completed recursive geometry. It is the simplest exact late-time background in which Bob's black-hole term and the parent universe's vacuum curvature coexist.

## 2. Common-horizon equation

Assume Alice's asymptotic de Sitter cosmological-horizon radius is a root of Bob's Kottler function:

\[
f_P(R_{\Lambda,C})=0.
\tag{7}
\]

Because \(R_{\Lambda,C}^2=3/\Lambda_C\), Equation (7) becomes

\[
1
-\frac{2GM}{c^2R_{\Lambda,C}}
-\frac{\Lambda_P}{\Lambda_C}
=0.
\tag{8}
\]

Define

\[
\alpha:=\frac{\Lambda_P}{\Lambda_C},
\qquad
M_{\Lambda,C}:=\frac{c^2R_{\Lambda,C}}{2G}.
\tag{9}
\]

Then Equation (8) gives

\[
\boxed{
\frac{M}{M_{\Lambda,C}}=1-\alpha
}
\tag{10}
\]

or equivalently

\[
\boxed{
\frac{\Lambda_P}{\Lambda_C}
=
1-\frac{M}{M_{\Lambda,C}}
}.
\tag{11}
\]

Equation (11) is the minimal parent-child density relation. Positive mass requires \(0\leq\alpha<1\).

## 3. Which Kottler horizon?

The sign of \(f_P'\) distinguishes the black-hole and cosmological roots. At \(R=R_{\Lambda,C}\), use Equation (8) to obtain

\[
R_{\Lambda,C}f_P'(R_{\Lambda,C})
=
\frac{2GM}{c^2R_{\Lambda,C}}
-\frac{2\Lambda_PR_{\Lambda,C}^2}{3}
=
(1-\alpha)-2\alpha
=
1-3\alpha.
\tag{12}
\]

Therefore:

\[
\begin{array}{lll}
\alpha<1/3 &\Longrightarrow& \text{black-hole horizon},\\[4pt]
\alpha=1/3 &\Longrightarrow& \text{degenerate Nariai horizon},\\[4pt]
\alpha>1/3 &\Longrightarrow& \text{cosmological horizon}.
\end{array}
\tag{13}
\]

On the black-hole branch, Equations (10) and (13) require

\[
\boxed{
\frac{2}{3}M_{\Lambda,C}<M\leq M_{\Lambda,C}
}.
\tag{14}
\]

The Nariai endpoint obeys

\[
\Lambda_C=3\Lambda_P,
\qquad
M=\frac23M_{\Lambda,C}.
\tag{15}
\]

## 4. Observational substitution

Use the Planck parameters adopted in GD1,

\[
H_0=67.4\;\mathrm{km\,s^{-1}Mpc^{-1}},
\qquad
\Omega_\Lambda=0.684908.
\tag{16}
\]

The observed child de Sitter rate and radius are

\[
H_C=H_0\sqrt{\Omega_\Lambda}
=55.7797\;\mathrm{km\,s^{-1}Mpc^{-1}},
\tag{17}
\]

\[
\Lambda_C
=
\frac{3H_C^2}{c^2}
=
1.09076\times10^{-52}\;\mathrm{m^{-2}},
\tag{18}
\]

\[
R_{\Lambda,C}
=
\frac{c}{H_C}
=
1.65843\times10^{26}\;\mathrm m
=17.5295\;\mathrm{Gly}.
\tag{19}
\]

The corresponding pure-de-Sitter horizon mass is

\[
M_{\Lambda,C}
=
\frac{c^2R_{\Lambda,C}}{2G}
=
1.11661\times10^{53}\;\mathrm{kg}.
\tag{20}
\]

The present critical Hubble mass is

\[
M_H
=
\frac{c^3}{2GH_0}
=
9.24096\times10^{52}\;\mathrm{kg}.
\tag{21}
\]

Their ratio is

\[
\frac{M_H}{M_{\Lambda,C}}
=
\frac{R_H}{R_{\Lambda,C}}
=
\sqrt{\Omega_\Lambda}
=
0.8275917.
\tag{22}
\]

Now make the conditional identification

\[
M=M_H.
\tag{23}
\]

Equations (11) and (22) give

\[
\boxed{
\alpha
=
\frac{\Lambda_P}{\Lambda_C}
=
1-\sqrt{\Omega_\Lambda}
=
0.1724083
}.
\tag{24}
\]

Thus

\[
\boxed{
\Lambda_P
=
1.88057\times10^{-53}\;\mathrm{m^{-2}}
},
\tag{25}
\]

\[
\boxed{
H_P
=
23.1609\;\mathrm{km\,s^{-1}Mpc^{-1}},
\qquad
R_{\Lambda,P}
=
42.2174\;\mathrm{Gly}
}.
\tag{26}
\]

Because \(0.1724083<1/3\), the shared root is on Bob's black-hole branch. The mass interval in Equation (14) evaluates to

\[
7.44406\times10^{52}\;\mathrm{kg}
<M\leq
1.11661\times10^{53}\;\mathrm{kg},
\tag{27}
\]

and \(M_H\) lies inside it.

## 5. Surface gravity of the recursive root

In the standard static Kottler normalization, the signed acceleration surface gravity is

\[
\kappa_P
=
\frac{c^2}{2}f_P'(R_{\Lambda,C}).
\tag{28}
\]

On the black-hole branch, Equations (12) and (28) give

\[
\boxed{
\kappa_P
=
\frac{c^2}{2R_{\Lambda,C}}(1-3\alpha)
}.
\tag{29}
\]

Using Equation (24),

\[
\boxed{
\kappa_P
=
1.30816\times10^{-10}\;\mathrm{m\,s^{-2}}
}.
\tag{30}
\]

It may also be written entirely in terms of present observables:

\[
\boxed{
\frac{\kappa_P}{cH_0}
=
\frac{\sqrt{\Omega_\Lambda}}{2}
\left(3\sqrt{\Omega_\Lambda}-2\right)
=
0.199770
}.
\tag{31}
\]

Thus the conditional recursive scale is numerically close to \(cH_0/5\).

## 6. Comparison with the galaxy acceleration scale

The radial acceleration relation is commonly fitted with a characteristic scale near

\[
a_0\simeq1.2\times10^{-10}\;\mathrm{m\,s^{-2}}.
\tag{32}
\]

One recent joint analysis reports

\[
a_0
=
\left(1.19
\pm0.04_{\rm stat}
\pm0.09_{\rm sys}\right)
\times10^{-10}\;\mathrm{m\,s^{-2}}.
\tag{33}
\]

Equation (30) is approximately nine percent above the canonical value in Equation (32) and is compatible at the scale of the systematic uncertainty quoted in Equation (33).

The reverse substitution is also informative. Set \(\kappa_P=a_0\) in Equation (29):

\[
\alpha
=
\frac13
\left(
1-\frac{2a_0R_{\Lambda,C}}{c^2}
\right),
\tag{34}
\]

and then use Equation (10):

\[
M
=
M_{\Lambda,C}
\left[
\frac23
+\frac{2a_0R_{\Lambda,C}}{3c^2}
\right].
\tag{35}
\]

For \(a_0=1.20\times10^{-10}\;\mathrm{m\,s^{-2}}\),

\[
\boxed{
\alpha=0.185714,
\qquad
M=9.09239\times10^{52}\;\mathrm{kg}
}.
\tag{36}
\]

This mass is \(1.61\%\) below \(M_H\). Using the central value in Equation (33) gives

\[
\alpha=0.186944,
\qquad
M=9.07865\times10^{52}\;\mathrm{kg},
\tag{37}
\]

which is \(1.76\%\) below \(M_H\).

The comparison is a numerical clue rather than a fit or a prediction. Neither Equation (23) nor the normalization in Equation (28) has yet been derived from the completed recursive geometry.

## 7. Transverse derivative target

The child de Sitter radial function is

\[
f_C(R)=1-\frac{R^2}{R_{\Lambda,C}^2},
\tag{38}
\]

so

\[
R_{\Lambda,C}f_C'(R_{\Lambda,C})=-2.
\tag{39}
\]

Bob's Kottler derivative is given by Equation (12). Under Equation (24),

\[
R_{\Lambda,C}f_P'(R_{\Lambda,C})
=
1-3\alpha
=
0.482775.
\tag{40}
\]

Therefore the standard static soldering still has a signed surface-gravity jump:

\[
[\kappa]
=
\kappa_P-\kappa_C
=
\frac{3c^2}{2R_{\Lambda,C}}(1-\alpha).
\tag{41}
\]

For \(M=M_H\), Equation (41) becomes

\[
\boxed{
[\kappa]
=
6.72750\times10^{-10}\;\mathrm{m\,s^{-2}}
=
1.02736\,cH_0
}.
\tag{42}
\]

The near equality follows algebraically:

\[
\boxed{
\frac{[\kappa]}{cH_0}
=
\frac32\Omega_\Lambda
}.
\tag{43}
\]

The Kottler background therefore solves the common-root problem but does not, by itself, eliminate the second-junction-condition obstruction identified in the companion null-matching note. A full recursive conformal metric must account for Equation (41), either by changing the transverse geometry smoothly or by identifying the resulting horizon stress as part of the geometric throat.

## 8. Normalization and interpretation

Unlike asymptotically flat Schwarzschild spacetime, Kottler spacetime has no asymptotically flat infinity at which to fix the normalization of its timelike Killing vector. Rescaling that vector rescales the numerical surface gravity in Equation (28). A completed parent-child junction must therefore supply a preferred observer or soldering normalization before Equation (30) can be treated as an invariant prediction for \(a_0\).

The robust results of this note are:

1. the common-root relation in Equations (10)-(11);
2. the black-hole-branch condition \(\Lambda_P/\Lambda_C<1/3\);
3. the mass interval in Equation (14);
4. the conditional numerical parent scale in Equations (24)-(27); and
5. the explicit transverse-derivative target in Equation (41).

The galaxy-scale comparison becomes predictive only if the recursive geometry independently fixes both \(M=M_H\) and the normalization used in Equation (28).

## 9. Connection to the galaxy-law programme

The planned galaxy law mixes a local baryonic acceleration with a global horizon acceleration:

\[
g_{\rm mix}\sim\sqrt{g_NcH}.
\tag{44}
\]

The present calculation identifies an additional horizon acceleration, \(\kappa_P\), produced by the competition between the parent black-hole term and the parent de Sitter term at their common child-horizon root. If the completed throat geometry selects \(\kappa_P\) as the relevant global input, the natural dynamical target becomes

\[
g_{\rm mix}\sim\sqrt{g_N\kappa_P}.
\tag{45}
\]

Equations (30)-(37) explain why this possibility merits a tensorial derivation. They do not establish that galaxies couple to \(\kappa_P\), nor do they replace the baryonic mass in \(g_N\) with the mass of a galaxy's central black hole. The local-throat mediation mechanism remains the central open problem of GD3.

---

## References

1. Kottler, F. "Über die physikalischen Grundlagen der Einsteinschen Gravitationstheorie." *Annalen der Physik* 361, no. 14 (1918): 401-462. [doi:10.1002/andp.19183611402](https://doi.org/10.1002/andp.19183611402).
2. Planck Collaboration. "Planck 2018 Results. VI. Cosmological Parameters." *Astronomy & Astrophysics* 641 (2020): A6. [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910).
3. Gibbons, G. W., and Hawking, S. W. "Cosmological Event Horizons, Thermodynamics, and Particle Creation." *Physical Review D* 15, no. 10 (1977): 2738-2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
4. Bousso, R., and Hawking, S. W. "Pair Creation of Black Holes during Inflation." *Physical Review D* 54 (1996): 6312-6322. [doi:10.1103/PhysRevD.54.6312](https://doi.org/10.1103/PhysRevD.54.6312).
5. McGaugh, S. S., Lelli, F., and Schombert, J. M. "Radial Acceleration Relation in Rotationally Supported Galaxies." *Physical Review Letters* 117 (2016): 201101. [doi:10.1103/PhysRevLett.117.201101](https://doi.org/10.1103/PhysRevLett.117.201101).
6. Desmond, H. "The Underlying Radial Acceleration Relation." *Monthly Notices of the Royal Astronomical Society* 526, no. 3 (2023): 3342-3351. [doi:10.1093/mnras/stad2762](https://doi.org/10.1093/mnras/stad2762).
7. ["Null-Horizon Matching of the Reciprocal Interior."](note.html?src=null_horizon_matching_of_the_reciprocal_interior) Technical note, this project.
8. ["The Exact Shell Identity and the Kottler Mass Condition."](note.html?src=horizon_map_shell_identity_and_mass_growth) Technical note, this project.
9. ["Self-Dual Homogeneous Derivation of the Square-Root Law."](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law) Research note, this project.
