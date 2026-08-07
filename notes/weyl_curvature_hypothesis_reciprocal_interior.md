# The Weyl Curvature Hypothesis at Background Order

*Technical note — the background-order resolution: homogeneous parent collapse hands the child a Weyl-free FLRW beginning, and the remaining test is perturbative.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-03.

**Prerequisite:** [GD I: *Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html).

**Companion:** [The Weyl Curvature Hypothesis as a Fixed Point](note.html?src=recursive_bhc_and_the_weyl_curvature_hypothesis) — the fixed-point synthesis and entropy arrow that this background-order result feeds.

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

Penrose's Weyl Curvature Hypothesis isolates a fundamental asymmetry. The early universe had enormous matter and radiation density but extraordinarily little free gravitational structure. Its Ricci curvature could be large while its Weyl curvature was zero or extremely small. Standard cosmology encodes that condition in its smooth FLRW beginning but does not explain why the initial gravitational field was so special.

CSBHI supplies a geometric explanation at the homogeneous-background level. It identifies the child Big Bang with gravitational collapse in a parent universe. Homogeneous relativistic collapse already has the required curvature structure: its matter-filled region is FLRW and therefore has vanishing Weyl tensor, even while its density and Ricci curvature grow. The same collapse has a Schwarzschild or Kottler exterior whose nonzero Weyl curvature represents the total enclosed mass. These are compatible regions of one collapse geometry; no scalar conformal transformation must erase the exterior Weyl field.

The reciprocal relation

\[
a(\tau)=\frac{1}{r(\tau)}
\]

then carries the homogeneous collapse scale into the child's homogeneous expansion. Alice's probe cloud expands isotropically, matter and radiation retain their usual dilution powers, and the FLRW background remains Weyl-free while local structure later generates Weyl curvature.

The result is a background resolution of Penrose's initial-condition problem:

\[
\boxed{
\text{homogeneous parent collapse}
\;\equiv\;
\text{low-Weyl child beginning}
}
\]

The remaining test is perturbative rather than conceptual. A completed collapse calculation must carry the parent's small inhomogeneities into the child's scalar, vector, and tensor perturbations and recover the observed nearly homogeneous—not perfectly homogeneous—early universe.

---

## 1. Penrose's question

The Riemann tensor separates into Ricci and Weyl parts.

- **Ricci curvature** is fixed locally by stress-energy through Einstein's equations.
- **Weyl curvature** is the trace-free tidal field: the part associated with gravitational waves, anisotropy, inhomogeneity, and the vacuum field outside a compact mass.

Penrose observed that ordinary thermodynamic matter was hot and dense in the early universe, yet the gravitational field was remarkably smooth. If gravitational clumping represents increasing gravitational entropy, the Big Bang began in a highly special low-gravitational-entropy state.

The Weyl Curvature Hypothesis expresses that special beginning geometrically:

\[
C_{\alpha\beta\gamma\delta}
\longrightarrow0
\quad
\text{at the initial cosmological boundary},
\tag{1}
\]

while Ricci curvature may remain large. The hypothesis states the required boundary condition. It does not, by itself, explain its origin.

The distinction between the Weyl tensor and any particular scalar must remain clear. We use

\[
\mathcal W
\equiv
C_{\alpha\beta\gamma\delta}
C^{\alpha\beta\gamma\delta}
\tag{2}
\]

as a convenient invariant, but Penrose's condition concerns the free gravitational field represented by the tensor itself.

---

## 2. The collapse geometry already contains the answer

Oppenheimer and Snyder supplied the canonical exact model of homogeneous spherical collapse. Its matter-filled interior is a contracting FLRW region; its vacuum exterior is Schwarzschild. The two regions describe the same total mass in different geometric forms.

Inside the homogeneous matter,

\[
C_{\alpha\beta\gamma\delta}=0.
\tag{3}
\]

Outside the matter, the Schwarzschild vacuum has

\[
R_{\mu\nu}=0,
\qquad
\mathcal W
=
\frac{48G^2M^2}{c^4\bar R^6}.
\tag{4}
\]

Equation (4) does not mean that homogeneous collapse secretly contains a Weyl-dominated material interior. It means that the vacuum exterior records the enclosed mass through its tidal field, while the matter-filled interior records the same gravitating content through Ricci curvature.

This is the missing conceptual distinction in a direct Schwarzschild-to-FLRW comparison. CSBHI does not need a regular scalar conformal factor to turn Equation (4) into Equation (3). The child initial data come from the homogeneous collapse region, not from an attempted rescaling of the exterior vacuum metric.

The exterior and interior need not have equal curvature invariants across a finite-density matter boundary. What must match are the appropriate intrinsic and extrinsic data of the collapse solution. Oppenheimer–Snyder collapse provides that construction explicitly in its idealized dust limit.

---

## 3. The CSBHI identification

CSBHI makes one additional identification:

> The parent collapse and the child cosmological beginning are the same formation event described from opposite sides.

The curvature inheritance is then direct:

\[
\boxed{
C^{\rm collapse}_{\alpha\beta\gamma\delta}=0
\quad\Longrightarrow\quad
C^{\rm child}_{\alpha\beta\gamma\delta}=0
}
\tag{5}
\]

at the homogeneous-background level.

The child does not begin with an independently selected smooth metric. Its smooth initial geometry is inherited from the homogeneous geometry of the collapse that forms it. Penrose's special boundary condition becomes a property of the formation process.

The reciprocal ansatz supplies the orientation and scale relation between the two histories:

\[
a(\tau)=\frac{1}{r(\tau)},
\qquad
H_A=\frac{\dot a}{a}=\frac{F(r)}{r}.
\tag{6}
\]

As Bob's radial label decreases, Alice's spatial scale grows. This reciprocal relation does not cause the Weyl tensor to vanish. It carries the already homogeneous collapse geometry into the already homogeneous child expansion.

---

## 4. Alice's operational measurement

Alice can measure curvature with the probe cloud introduced in GD I. Let \(\xi^\mu\) be the separation between Alice and a neighboring freely falling probe. Their relative acceleration obeys

\[
\frac{D^2\xi^\mu}{D\tau^2}
=
-R^\mu{}_{\nu\alpha\beta}
U^\nu\xi^\alpha U^\beta.
\tag{7}
\]

The Ricci part controls the trace or volume-focusing contribution. The Weyl part produces trace-free tidal distortion. Operationally:

- isotropic growth or contraction changes the cloud's volume;
- Weyl tides distort a sphere into an ellipsoid;
- neither requires proper acceleration of Alice at the cloud's center.

In the reciprocal interior, every principal separation scales by the same factor:

\[
\ell_i(\tau)=a(\tau)\ell_{i,H}.
\tag{8}
\]

Hence

\[
\Theta=3H_A,
\qquad
\sigma_{\mu\nu}=0,
\qquad
\omega_{\mu\nu}=0.
\tag{9}
\]

Equation (9) displays the isotropic behavior of the selected congruence. The stronger statement that the entire background Weyl tensor vanishes follows from Alice's FLRW geometry:

\[
\boxed{
C^{\rm FLRW}_{\alpha\beta\gamma\delta}=0
}
\tag{10}
\]

throughout the homogeneous background history.

---

## 5. The curvature history

The background curvature story can be summarized without inventing a Weyl-erasing horizon membrane.

| Regime | Ricci sector | Weyl sector |
|---|---|---|
| Parent FLRW background | Set by parent matter, radiation, and vacuum energy | Zero in the exact background; small perturbatively |
| Homogeneous collapsing matter | Grows with density and pressure | Zero |
| Vacuum exterior of the collapsing region | Vacuum value, with any background \(\Lambda_P\) | Nonzero field encoding the enclosed mass |
| Child homogeneous beginning | Large stress-energy curvature | Zero or perturbatively small |
| Child structure-formation era | Background set by matter and vacuum energy | Grows locally as structure forms |
| Child de Sitter future | Approaches \(\mathcal R=4\Lambda\) | Background returns asymptotically to zero |

For Alice's matter–radiation–vacuum background,

\[
H_A^2
=
\frac{8\pi G}{3}
\left(
\rho_m+\rho_r+\rho_\Lambda
\right),
\tag{11}
\]

with

\[
\rho_m\propto a^{-3},
\qquad
\rho_r\propto a^{-4},
\qquad
\rho_\Lambda=\text{constant}.
\tag{12}
\]

The Ricci scalar is

\[
\mathcal R
=
8\pi G
\left(
\rho_m+4\rho_\Lambda
\right)
\tag{13}
\]

in units where \(c=1\). Radiation does not appear in Equation (13) because its stress-energy tensor is traceless. This does **not** mean that the radiation era has no Ricci curvature: the Ricci tensor and its quadratic invariants remain sensitive to the radiation density.

The Weyl tensor of the exact background remains zero while these Ricci quantities evolve. Perturbations then produce the small initial Weyl curvature needed for galaxies, stars, black holes, gravitational waves, and the observed growth of structure.

---

## 6. What has been resolved

In standard FLRW cosmology, the low-Weyl beginning enters as an initial condition. Penrose highlights how extraordinary that condition is: the early matter distribution was smooth even though gravitational clumping had an enormous available phase space.

CSBHI changes the explanatory order:

1. the child Big Bang is the interior description of parent gravitational collapse;
2. the relevant parent collapse region is homogeneous at background order;
3. a homogeneous collapsing region is FLRW and has zero Weyl tensor;
4. the child therefore inherits a low-Weyl FLRW beginning;
5. the reciprocal relation carries that homogeneous geometry into expansion; and
6. perturbations later generate local Weyl curvature as structure forms.

Thus CSBHI does not merely impose Penrose's condition on a new cosmology. It identifies a geometric process that naturally possesses the required curvature structure.

\[
\boxed{
\text{Penrose's low-Weyl boundary}
=
\text{the homogeneous geometry of parent collapse}
}
\tag{14}
\]

This is the sense in which CSBHI resolves the Weyl Curvature Hypothesis at background order.

---

## 7. The remaining empirical calculation

The real universe was not exactly homogeneous. A complete result must therefore go beyond Equation (14) and calculate the perturbations.

The required test is concrete:

1. specify perturbations of the parent collapsing FLRW region;
2. carry their scalar, vector, and tensor data into the child initial hypersurface;
3. evolve those modes through the reciprocal background;
4. recover the observed primordial fluctuation spectrum and its small amplitude; and
5. verify that gravitational entropy grows as local Weyl curvature develops during structure formation.

This is not a request to explain why an arbitrary vacuum Schwarzschild field suddenly becomes conformally flat. It is the ordinary next step after a homogeneous cosmological solution: perturb the collapse, map the perturbations, and compare them with the sky.

The gravitational-entropy interpretation of Weyl curvature also remains a hypothesis rather than a unique definition of gravitational entropy. CSBHI addresses the geometric initial condition Penrose identified; a microscopic entropy accounting is a separate problem.

---

## Result

Homogeneous collapse has a matter-filled FLRW interior with vanishing Weyl tensor and a vacuum exterior whose Weyl field records the same enclosed mass. CSBHI identifies that homogeneous collapse with the child cosmological beginning and uses \(a=1/r\) to carry its scale into expansion. The child's low-Weyl beginning is therefore inherited geometry rather than an unexplained initial restriction.

The background Weyl Curvature Hypothesis is resolved within the stated CSBHI construction. The remaining question is whether realistic collapse perturbations reproduce the small, nonzero primordial inhomogeneity observed in our universe.

---

## References

1. R. Penrose, [“Singularities and Time-Asymmetry,”](https://personal.lse.ac.uk/robert49/PPB/pdf/Penrose1979a.pdf) in *General Relativity: An Einstein Centenary Survey*, ed. S. W. Hawking and W. Israel, Cambridge University Press (1979).
2. J. R. Oppenheimer and H. Snyder, [“On Continued Gravitational Contraction,”](https://doi.org/10.1103/PhysRev.56.455) *Physical Review* **56**, 455–459 (1939).
3. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html). GD I.
4. [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior). Reciprocal Interior I.
5. G. F. R. Ellis, R. Maartens, and M. A. H. MacCallum, *Relativistic Cosmology*, Cambridge University Press (2012).
6. T. Clifton, G. F. R. Ellis, and R. Tavakol, [“A Gravitational Entropy Proposal,”](https://arxiv.org/abs/1303.5612) *Classical and Quantum Gravity* **30**, 125009 (2013).
