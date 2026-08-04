# Geometric Duality Research Roadmap

## The programme

Geometric Duality is organized as a sequence of papers that strengthen one claim at a time. GD1 is the source of truth for the programme's current notation and established results.

\[
\text{reciprocal interior}
\longrightarrow
\text{horizon map}
\longrightarrow
\text{throat dynamics}
\longrightarrow
\text{observational tests}.
\]

---

## Canonical notation

The series reserves

\[
r
\]

for the horizon-normalized Schwarzschild areal radius Bob assigns to Alice. It decreases from \(r=1\) toward \(r=0\).

Alice's variables are

\[
a(\tau)=\frac1{r(\tau)},
\qquad
R=\text{comoving radial label},
\qquad
\bar R=a(\tau)R=\text{areal radius}.
\]

The intrinsic FLRW identity \(\bar R=aR\) and the GD ansatz \(a=1/r\) relate different quantities. They must not be collapsed into a single equation.

---

## GD1: the reciprocal interior

[*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html) introduces \(a=1/r\) and follows its consequences inside Alice's proposed spatially flat geometry.

Its principal results are:

- \(H_{\rm A}=\dot a/a=F(r)/r\);
- isotropic expansion of Alice's probe congruence;
- matter and radiation dilution with their standard powers;
- recovery of the matter-radiation-\(\Lambda\) Friedmann background;
- infinite Alice proper time and finite curvature as Bob's \(r\to0\);
- reciprocal relations among the observed horizon scales;
- an exact de Sitter endpoint with PG flow \(F_{\rm dS}=H_\Lambda\bar R\).

GD1 defines the reciprocal correspondence along Alice's worldline. A complete global model must preserve that construction rather than replace it with a direct junction between independently chosen Schwarzschild and FLRW metrics.

The companion note [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior) derives the Friedmann energy and acceleration equations directly from Alice's reciprocal metric, Einstein's equations, and stress-energy conservation, then translates them into Bob's infall function.

---

## Supporting Note I: the de Sitter PG flow

[*Painlevé–Gullstrand Flow from the 5D de Sitter Embedding*](note.html?src=pg_flow_from_5d_desitter_embedding) develops the exact asymptotic result used in GD1.

It shows

\[
dS_4\subset \mathbb M^{1,4}
\quad\Longrightarrow\quad
\text{flat de Sitter slicing}
\quad\Longrightarrow\quad
F_{\rm dS}=H_\Lambda\bar R.
\]

This result establishes the standard geometric origin of the pure-de Sitter PG flow. It does not supply the matter-corrected embedding or the parent-child horizon map.

---

## GD2: the 5D de Sitter throat

[*Geometric Duality II*](note.html?src=gd2_5d_de_sitter_throat_outline) must construct a throat geometry that derives
the relationships among

- the de Sitter curvature scale \(L\),
- the null causal horizon \(\mathcal H\), and
- a matching structure or history \(\Sigma\)

without treating them as one object.

No stress-free timelike or null junction is assumed. GD2 must calculate the junction data, stress-energy, and relation between any timelike matching history and the parent black-hole event horizon.

---

## Supporting Note III and GD3: throat dynamics

[*The Self-Dual Homogeneous Derivation of the Square-Root Law*](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law) shows that homogeneity, local/global exchange symmetry, and exact deep-regime scale invariance select

\[
g_{\rm mix}=\kappa\sqrt{g_NcH}.
\]

[*Geometric Duality III*](note.html?src=gd3_throat_curvature_and_galaxy_law_outline) must identify the tensorial or geometric mechanism that realizes this selected law. Its targets include the radial-acceleration relation and

\[
v^4\sim GMcH.
\]

The selection theorem is not yet the weak-field field equation.

---

## Later papers

Later work must address:

- perturbations, CMB propagation, and structure growth;
- lensing and cluster dynamics;
- the interpolation between Newtonian and deep-throat regimes;
- horizon entropy and thermodynamic interpretations;
- the relation between parent-horizon data and child-universe observables.

The planned thermodynamic synthesis asks whether the recurring clues identified by Milgrom, McGaugh, Verlinde, Padmanabhan, and the holographic tradition are macroscopic descriptions of the same horizon-centered geometry.

---

## Standard of evidence

Each stage distinguishes four kinds of statement:

1. **Exact geometry:** an identity or metric calculation.
2. **Consequence of the GD ansatz:** a result that follows once \(a=1/r\) and Alice's geometry are specified.
3. **Interpretation:** the Alice/Bob causal reading of that geometry.
4. **Open construction:** a claim that a later paper must derive.

The programme advances only when an open construction becomes an explicit calculation.
