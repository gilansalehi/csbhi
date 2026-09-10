# The Tolman VII Birth-Vertex Amplitude Benchmark

## Quantifying the onset of tidal and pressure-induced structure in GD2

**Working calculation — September 2026. Source: upstream project derivation. Review, numerical cross-check, and revisions: Codex (OpenAI).**

## Abstract

[*Pressure Gradients and the Regular Birth Vertex*](note.html?src=pressure_gradients_and_the_regular_birth_vertex) shows that realistic radial pressure gradients prevent the geodesic Alice congruence from remaining exactly shear-free and uniformly expanding across a finite star. Regular spherical geometry nevertheless suppresses the scalar, tidal, and anisotropic departures from FLRW at the central event-horizon vertex.

This note measures that suppression using the Tolman VII density profile,

\[
\rho(R)=\rho_c\left(1-\frac{R^2}{R_*^2}\right),
\]

as an analytic neutron-star benchmark. With \(x=R/R_*\), the exact density contrast between the local and enclosed-average matter is

\[
\boxed{
\bar\rho-\rho=\frac25\rho_cx^2.
}
\]

The corresponding spherical electric-Weyl amplitude, normalized to the central Ricci scale \(K_c=4\pi G\rho_c/3\), is

\[
\boxed{
\frac{|\mathcal E|}{K_c}=\frac25x^2.
}
\]

The departure is \(4\times10^{-5}\) at one percent of the stellar radius, \(4\times10^{-3}\) at one tenth, and \(0.10\) at half radius. The regular-center suppression is therefore quantitatively strong near the vertex but does not keep the full star close to homogeneous OS collapse.

The static TOV pressure profile gives the same radial order. Near the center,

\[
\frac{dp}{dR}
=
-\frac{4\pi G}{3}
(\rho_c+p_c/c^2)(\rho_c+3p_c/c^2)R
+O(R^3),
\]

so the material acceleration relative to a geodesic Alice is \(O(R)\), Alice–fluid tilt is \(O(R)\), and the induced anisotropic stress is \(O(R^2)\). Numerically integrating the Tolman VII TOV equation at compactness \(\mathcal C=GM/(R_*c^2)=0.20\) gives

\[
\boxed{
\frac{p_c}{\rho_cc^2}=0.18746,
\qquad
\frac{a_{\rm fluid}R_*}{c^2}=0.7812\,x+O(x^3).
}
\]

Tolman VII is a static equilibrium solution, not a collapse history. It fixes a plausible spatial curvature and pressure scale but does not determine the time taken by the growing event horizon to sweep through the star. The remaining calculation requires relativistic hydrodynamics and a dynamically located event horizon.

---

## 1. Why Tolman VII

The Tolman VII solution is an exact static, spherical perfect-fluid solution with the quadratic density profile

\[
\boxed{
\rho(R)
=
\rho_c\left(1-\frac{R^2}{R_*^2}\right).
}
\tag{1}
\]

Unlike uniform-density OS matter, Equation (1) has a regular central maximum and a vanishing surface density. It is widely used as a compact analytic surrogate for realistic neutron-star interiors, although improved variants add higher radial powers to fit numerical equations of state more closely.

For the present purpose, no claim is made that a collapsing star remains in Tolman VII equilibrium. The profile supplies a controlled answer to a narrower question:

\[
\boxed{
\text{How rapidly does regular stellar structure depart from the homogeneous central limit?}
}
\]

Define

\[
x\equiv\frac{R}{R_*}.
\tag{2}
\]

---

## 2. Enclosed mass and average density

The enclosed mass is

\[
m(R)
=
4\pi\int_0^R\rho(\widetilde R)\widetilde R^2d\widetilde R.
\tag{3}
\]

Substitution of Equation (1) gives

\[
\boxed{
m(R)
=
4\pi\rho_cR_*^3
\left(
\frac{x^3}{3}-\frac{x^5}{5}
\right).
}
\tag{4}
\]

At the surface,

\[
\boxed{
M=m(R_*)=\frac{8\pi}{15}\rho_cR_*^3.
}
\tag{5}
\]

The average density enclosed by radius \(R\) is

\[
\bar\rho(R)
\equiv
\frac{3m(R)}{4\pi R^3}
=
\rho_c\left(1-\frac35x^2\right).
\tag{6}
\]

Therefore

\[
\boxed{
\bar\rho-\rho
=
\frac25\rho_cx^2.
}
\tag{7}
\]

The central density contrast does not merely vanish. It switches on quadratically.

---

## 3. Tidal amplitude

Let \(\rho\) denote mass density and \(m\) enclosed mass. For a spherical perfect fluid, one conventional electric-Weyl tidal rate is

\[
\mathcal E
=
\frac{Gm}{R^3}
-\frac{4\pi G}{3}\rho,
\tag{8}
\]

up to an overall sign convention. Equations (6) and (8) give

\[
|\mathcal E|
=
\frac{4\pi G}{3}(\bar\rho-\rho)
=
\frac{8\pi G\rho_c}{15}x^2.
\tag{9}
\]

Define the corresponding central Ricci rate

\[
K_c\equiv\frac{4\pi G\rho_c}{3}.
\tag{10}
\]

The dimensionless tidal departure is then

\[
\boxed{
\frac{|\mathcal E|}{K_c}
=
\frac25x^2.
}
\tag{11}
\]

This is the first explicit radial amplitude for the pressure-supported GD2 benchmark.

| Fractional radius \(x\) | \( |\mathcal E|/K_c \) |
|---:|---:|
| \(0.01\) | \(4\times10^{-5}\) |
| \(0.05\) | \(1\times10^{-3}\) |
| \(0.10\) | \(4\times10^{-3}\) |
| \(0.25\) | \(2.5\times10^{-2}\) |
| \(0.50\) | \(0.10\) |
| \(0.75\) | \(0.225\) |
| \(1.00\) | \(0.40\) |

Near the center, the homogeneous approximation is excellent. At half radius, the tidal departure has reached ten percent. Near the surface, a linear perturbation of OS is no longer a controlled global description.

---

## 4. Pressure-gradient amplitude

For a static spherical perfect fluid, the TOV equation in physical units is

\[
\frac{dp}{dR}
=
-\frac{
G(\rho+p/c^2)(m+4\pi R^3p/c^2)
}{
R(R-2Gm/c^2)
}.
\tag{12}
\]

Near a regular center,

\[
m(R)=\frac{4\pi}{3}\rho_cR^3+O(R^5).
\tag{13}
\]

Consequently,

\[
\boxed{
\frac{dp}{dR}
=
-\frac{4\pi G}{3}
(\rho_c+p_c/c^2)(\rho_c+3p_c/c^2)R
+O(R^3),
}
\tag{14}
\]

The proper acceleration required to hold the perfect fluid on its static worldlines is

\[
a_{\rm fluid}
=
\frac{|D_Rp|}{\rho+p/c^2}.
\tag{15}
\]

Because the orthonormal radial derivative differs from \(d/dR\) only at \(O(R^2)\) near the center,

\[
\boxed{
a_{\rm fluid}
=
\frac{4\pi G}{3}
(\rho_c+3p_c/c^2)R
+O(R^3).
}
\tag{16}
\]

The pressure-induced acceleration is \(O(R)\), in agreement with the general regular-center theorem.

If Alice is momentarily comoving with the fluid at the vertex, a short proper interval produces

\[
V=O(R),
\tag{17}
\]

and hence

\[
\boxed{
\pi_A\sim(\rho c^2+p)\left(\frac{V}{c}\right)^2=O(R^2).
}
\tag{18}
\]

The two independent shape-changing sources therefore share the same leading radial order:

\[
\boxed{
\mathcal E=O(R^2),
\qquad
\pi_A=O(R^2).
}
\tag{19}
\]

---

## 5. Representative neutron-star compactness

Define

\[
\mathcal C
\equiv
\frac{GM}{R_*c^2}.
\tag{20}
\]

Equation (5) gives

\[
\rho_cR_*^2
=
\frac{15c^2}{8\pi G}\mathcal C.
\tag{21}
\]

Integrate Equation (12) inward from

\[
p(R_*)=0
\tag{22}
\]

using the Tolman VII density and mass profiles. At

\[
\mathcal C=0.20,
\]

the result is

\[
\boxed{
\frac{p_c}{\rho_cc^2}
=
0.187463.
}
\tag{23}
\]

Substituting Equations (21) and (23) into Equation (16) gives

\[
\frac{a_{\rm fluid}R_*}{c^2}
=
\frac52\mathcal C
\left(
1+3\frac{p_c}{\rho_cc^2}
\right)x
+O(x^3),
\tag{24}
\]

or

\[
\boxed{
\frac{a_{\rm fluid}R_*}{c^2}
=
0.78119\,x+O(x^3).
}
\tag{25}
\]

For a short interval \(\Delta\tau\),

\[
\boxed{
\frac{V}{c}
\simeq
0.78119
\left(\frac{c\Delta\tau}{R_*}\right)x.
}
\tag{26}
\]

The unknown quantity is now explicit:

\[
\boxed{
\frac{c\Delta\tau_{\rm EH}}{R_*}.
}
\tag{27}
\]

Tolman VII does not determine the event-horizon sweep time because it is static. Reusing the OS sweep would restore the very dust assumption this benchmark is meant to remove.

---

## 6. What the benchmark establishes

The general pressure-gradient theorem predicted that the reciprocal scalar-rate, Weyl, shear, and anisotropic corrections vanish at the central birth vertex. Tolman VII supplies their first spatial coefficient.

At

\[
\frac{R_E}{R_*}=0.01,
\]

the dimensionless tidal departure is

\[
\frac{|\mathcal E|}{K_c}=4\times10^{-5}.
\]

At

\[
\frac{R_E}{R_*}=0.10,
\]

it is

\[
\frac{|\mathcal E|}{K_c}=4\times10^{-3}.
\]

At

\[
\frac{R_E}{R_*}=0.50,
\]

it is already

\[
\frac{|\mathcal E|}{K_c}=0.10.
\]

The resulting hierarchy is

\[
\boxed{
\begin{aligned}
\text{central birth vertex}
&\longrightarrow
\text{smooth homogeneous leading term},\\
\text{growing event horizon}
&\longrightarrow
\text{progressively larger inherited structure},\\
\text{outer stellar region}
&\longrightarrow
\text{nonlinear formation map required}.
\end{aligned}
}
\tag{28}
\]

The benchmark passes near the vertex and supplies a quantitative warning against treating the entire pressured star as a small perturbation of OS.

---

## 7. Provisional primordial-amplitude correspondence

Under a local Weyl rescaling, an electric-Weyl curvature measured by corresponding normalized observers scales as inverse length squared. The dimensionless product of the tidal rate and the corresponding squared length is therefore unchanged:

\[
\frac{\mathcal E_C L_C^2}{c^2}
=
\frac{\mathcal E_P L_P^2}{c^2}.
\tag{29}
\]

The large absolute conformal factor does not automatically erase dimensionless parent tidal structure.

As a provisional scale comparison only, suppose the normalized tidal amplitude relevant to the largest child scales were required to be \(10^{-5}\). Equation (11) would then give

\[
\frac25x^2\lesssim10^{-5},
\]

and therefore

\[
\boxed{
x\lesssim5.0\times10^{-3}.
}
\tag{30}
\]

On that identification, the largest smooth child scales would arise from roughly the innermost half percent of the parent radius.

Equation (30) is not yet a primordial-spectrum prediction. No transfer law has equated \( |\mathcal E|/K_c \) with \(\zeta\), a Bardeen potential, or a CMB observable. The calculation instead identifies a concrete question for the eventual perturbation map:

\[
\boxed{
\text{Which parent radial interval maps to each child comoving scale, and how does its Weyl amplitude transfer?}
}
\]

---

## 8. Why a dynamical collapse is now unavoidable

Tolman VII supplies an equilibrium spatial profile. Stellar black-hole formation supplies a dynamical sequence involving collapse, core bounce, shocks, neutrino transport, accretion, and—in many models—a transient proto-neutron star before black-hole formation.

Modern relativistic simulations make the missing distinction concrete. GR1D evolves spherical general-relativistic hydrodynamics with finite-temperature equations of state and approximate neutrino transport. A recent three-dimensional GRMHD calculation of a \(45M_\odot\) progenitor followed core bounce, shock stalling, proto-neutron-star accretion, and black-hole formation about \(325\) ms after bounce, with an initial measured black-hole mass near \(2.62M_\odot\).

Those results do not supply the GD map automatically. They supply the physical fields it must consume:

\[
\rho(t,R),
\qquad
p(t,R),
\qquad
U(t,R),
\qquad
m(t,R).
\tag{31}
\]

The next benchmark must locate the global event horizon within such a history and integrate the Alice congruence through it. That calculation determines

\[
\Delta\tau_{\rm EH},
\qquad
V(t,R),
\qquad
\Sigma_A(t,R),
\qquad
\delta\Phi,
\qquad
\delta\mathscr H_{\rm GD}.
\tag{32}
\]

---

## 9. Scoreboard verdict

The static spatial-amplitude test earns

\[
\boxed{\textbf{PASS NEAR THE BIRTH VERTEX}.}
\]

Tolman VII confirms the quadratic onset of tidal and anisotropic structure and supplies the exact coefficient

\[
\boxed{
\frac{|\mathcal E|}{K_c}=\frac25x^2.
}
\]

The same result rules out a global linearized-OS treatment of the full stellar radius:

\[
\boxed{
\frac{|\mathcal E|}{K_c}=0.40
\quad\text{at}\quad
x=1.
}
\]

The unresolved amplitude test is dynamical rather than algebraic:

\[
\boxed{
\text{Evolve a realistic collapse, locate its event horizon, and compute the inherited perturbation at every crossing.}
}
\tag{33}
\]

---

## Conclusion

The regular birth vertex is quantitatively protected.

For the Tolman VII neutron-star benchmark,

\[
\boxed{
\frac{|\mathcal E|}{K_c}=\frac25\left(\frac{R}{R_*}\right)^2.
}
\]

Pressure support produces the same hierarchy:

\[
a_{\rm fluid}=O(R),
\qquad
V=O(R),
\qquad
\pi_A=O(R^2).
\]

At one percent of the stellar radius, the tidal departure is \(4\times10^{-5}\). By half radius it reaches ten percent, and the surface value is forty percent. The homogeneous formation map is therefore a controlled central expansion, not a global approximation to a realistic pressured star.

The [*Level 3 Progress Note*](note.html?src=level_3_general_spherical_perfect_fluid_completion) completes the analytic perfect-fluid system by deriving the global event-horizon, nonlinear Weyl, and Alice-tilt transport equations. A later relativistic-hydrodynamic calculation must replace the static Tolman VII slice to obtain the full sweep time and the amplitude of the child perturbations inherited from the parent's evolving pressure and density structure.

---

## References

1. R. C. Tolman, “Static Solutions of Einstein's Field Equations,” *Physical Review* **55**, 364–373 (1939), [doi:10.1103/PhysRev.55.364](https://doi.org/10.1103/PhysRev.55.364).
2. N. Neary, M. Ishak, and K. Lake, “The Tolman VII solution, trapped null orbits and \(w\)-modes,” *Physical Review D* **64**, 084001 (2001), [arXiv:gr-qc/0104002](https://arxiv.org/abs/gr-qc/0104002).
3. N. Jiang and K. Yagi, “Improved analytic modeling of neutron star interiors,” *Physical Review D* **99**, 124029 (2019), [doi:10.1103/PhysRevD.99.124029](https://doi.org/10.1103/PhysRevD.99.124029), [arXiv:1904.05954](https://arxiv.org/abs/1904.05954).
4. E. O'Connor and C. D. Ott, “A New Open-Source Code for Spherically-Symmetric Stellar Collapse to Neutron Stars and Black Holes,” *Classical and Quantum Gravity* **27**, 114103 (2010), [doi:10.1088/0264-9381/27/11/114103](https://doi.org/10.1088/0264-9381/27/11/114103), [arXiv:0912.2393](https://arxiv.org/abs/0912.2393).
5. E. O'Connor and C. D. Ott, “Black Hole Formation in Failing Core-Collapse Supernovae,” *Astrophysical Journal* **730**, 70 (2011), [doi:10.1088/0004-637X/730/2/70](https://doi.org/10.1088/0004-637X/730/2/70), [arXiv:1010.5550](https://arxiv.org/abs/1010.5550).
6. G. Halevi, S. Shankar, P. Mösta, R. Haas, and E. Schnetter, “A Black Hole is Born: 3D GRMHD Simulation of Black Hole Formation from Core-Collapse,” *Astrophysical Journal Letters* (2025), [doi:10.3847/2041-8213/ae08a6](https://doi.org/10.3847/2041-8213/ae08a6), [arXiv:2506.20837](https://arxiv.org/abs/2506.20837).
7. [“Pressure Gradients and the Regular Birth Vertex”](note.html?src=pressure_gradients_and_the_regular_birth_vertex), CSBHI working calculation (2026).
