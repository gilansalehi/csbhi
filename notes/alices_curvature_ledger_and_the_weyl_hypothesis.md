# Alice's Curvature Ledger and the Weyl Curvature Hypothesis

*Technical note*

**Author:** Codex (OpenAI), developed from G. Salehi's Alice–Bob thought experiment.

**Date:** 2026-08-01.

**Prerequisite:** [GD I: *Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

This note follows the curvature Alice can measure from Bob's distant station, through her approach to the parent supermassive black hole, and into the reciprocal interior. It distinguishes two trajectories. The ordinary GD I trajectory begins long after the black hole forms and illustrates the interior lifecycle. A second, collapse-origin trajectory passes through the formation epoch identified with the child universe's Big Bang.

At Bob's station, the parent FLRW background supplies a small Ricci curvature while the distant black hole supplies negligible Weyl curvature. As Alice approaches the black hole, its tidal Weyl field grows while the Ricci background need not change appreciably. In the reciprocal interior, Alice's probe cloud expands isotropically with zero shear. Its homogeneous FLRW background has zero Weyl curvature, while matter, radiation, and vacuum energy determine its Ricci curvature and expansion.

The collapse-origin trajectory gives the sharper connection to Penrose's Weyl Curvature Hypothesis. Homogeneous relativistic collapse already provides the required curvature pattern: large Ricci curvature from dense matter with vanishing Weyl curvature. CSBHI identifies that collapse with the child cosmological beginning and carries the resulting homogeneous geometry forward through the reciprocal scale (a=1/r). The correspondence therefore offers a geometric origin for Penrose's low-Weyl boundary condition rather than treating it as an unexplained initial restriction. Deriving the complete collapse-to-interior map and its perturbations remains the calculation that would turn this structural correspondence into a complete result.

---

## 1. What Penrose requires

Penrose's Weyl Curvature Hypothesis separates two parts of spacetime curvature:

- **Ricci curvature** records curvature sourced locally by energy density and pressure.
- **Weyl curvature** records free tidal structure: anisotropy, inhomogeneity, gravitational waves, and the vacuum field of an enclosed mass.

The early universe can therefore be hot and dense without possessing large gravitational entropy. Penrose requires its initial Weyl curvature to vanish, or to be extremely small, while allowing its Ricci curvature to be large. Matter begins in a nearly homogeneous state; gravitational clumping and local Weyl curvature develop later.

The hypothesis is a boundary condition. It describes the unusual beginning but does not explain why the beginning had that form. CSBHI supplies a candidate explanation: the child Big Bang is the interior description of parent black-hole formation.

---

## 2. How Alice measures curvature

Alice remains in free fall, so her proper acceleration is zero:

\[
A^\mu=U^\nu\nabla_\nu U^\mu=0.
\tag{1}
\]

Here \(U^\mu\) is Alice's four-velocity and \(A^\mu\) is her four-acceleration. Zero proper acceleration does not mean zero curvature. Alice detects curvature by monitoring the separation vector \(\xi^\mu\) between herself and neighboring probes:

\[
\frac{D^2\xi^\mu}{D\tau^2}
=
-R^\mu{}_{\nu\alpha\beta}
U^\nu\xi^\alpha U^\beta.
\tag{2}
\]

Ricci curvature controls the trace or volume-focusing part of this relative acceleration. Weyl curvature controls its trace-free tidal distortion. A spherical probe cloud therefore gives Alice an operational curvature instrument:

- an isotropic change in volume records expansion or Ricci focusing;
- a change of shape at fixed infinitesimal volume records Weyl tidal shear;
- neither requires a force on Alice's central worldline.

We use

\[
\mathcal W\equiv C_{\alpha\beta\gamma\delta}C^{\alpha\beta\gamma\delta}
\tag{3}
\]

for the quadratic Weyl invariant and \(\mathcal R\) for the Ricci scalar. These are local spacetime invariants rather than coordinate forces.

---

## 3. Ordinary Alice: the curvature ledger

### 3.1 Bob's station

Bob's station belongs to the parent universe. On large scales that universe is FLRW, not empty Schwarzschild space. The background Ricci scalar is

\[
\mathcal R
=
8\pi G\left(\rho-3p\right),
\tag{4}
\]

in units where \(c=1\), with vacuum energy included in \(\rho\) and \(p\). In a late vacuum-dominated parent,

\[
\mathcal R\simeq4\Lambda_P.
\tag{5}
\]

This is extremely small. The exact FLRW background has \(\mathcal W=0\). Local structures add Weyl curvature, but GD I places Bob far enough from the SMBH and other structures that these tidal contributions are negligible. Alice therefore begins with

\[
\mathcal W\simeq0,
\qquad
\mathcal R\simeq4\Lambda_P,
\tag{6}
\]

and her local laboratory appears Minkowskian to excellent accuracy.

### 3.2 Approaching the SMBH

In GD I's local Schwarzschild approximation, the Weyl invariant is

\[
\mathcal W(r)
=
\frac{12}{R_S^4r^6}.
\tag{7}
\]

It rises rapidly as Alice approaches the horizon. The black hole's vacuum Weyl field does not itself add Ricci curvature, so Alice continues to measure approximately the parent FLRW Ricci background unless she crosses material stress-energy:

\[
\mathcal R(r)\simeq4\Lambda_P.
\tag{8}
\]

Her probe cloud detects the growing tidal field even though Alice remains weightless.

In units where the horizon radius is \(R_S=1\), Equation (7) becomes

\[
\mathcal W(r)=\frac{12}{r^6}.
\tag{9}
\]

The idealized exterior values are:

| Bob's radius \(r\) | Inward rate \(F=1/\sqrt r\) | Weyl invariant \(\mathcal W R_S^4\) | Ricci scalar |
|---:|---:|---:|---:|
| \(r\to\infty\) | \(0\) | \(0\) | \(\simeq4\Lambda_P\) |
| \(4\) | \(0.500\) | \(0.00293\) | \(\simeq4\Lambda_P\) |
| \(3\) | \(0.577\) | \(0.0165\) | \(\simeq4\Lambda_P\) |
| \(2\) | \(0.707\) | \(0.1875\) | \(\simeq4\Lambda_P\) |
| \(1^+\) | \(1.000\) | \(12\) | \(\simeq4\Lambda_P\) |

The horizon value is finite. For a supermassive black hole its dimensional magnitude, \(12/R_S^4\), can be extremely small even though it is not mathematically zero.

### 3.3 The child-side horizon

CSBHI does not continue the pure-vacuum Schwarzschild interior. At \(r=1\), it assigns Alice the reciprocal normalization

\[
a=\frac1r=1,
\qquad
H_A=\frac{F}{r}.
\tag{10}
\]

For the marginally bound trajectory used in GD I, \(F(1)=1\), so the crossing value is \(H_{A,H}=1\) in horizon units. The Friedmann constraint gives

\[
\rho(a=1)=\frac{3H_{A,H}^2}{8\pi G}.
\tag{11}
\]

This equals the parent's areal-volume average compactness density at the shared horizon. The exterior description packages the enclosed content into the mass parameter \(M\); the child description packages it into a homogeneous density.

On the child side, Alice's geometry is spatially flat FLRW. Its homogeneous background therefore has

\[
\boxed{\mathcal W=0.}
\tag{12}
\]

Equations (9) and (12) belong to opposite sides of the proposed correspondence. CSBHI does not claim that they are one Schwarzschild invariant viewed in two ordinary coordinate charts. It assigns different geometric descriptions to exterior collapse and interior expansion.

### 3.4 The reciprocal interior

For \(0<r\le1\), the reciprocal scale is

\[
a(r)=\frac1r.
\tag{13}
\]

Applied equally in every spatial direction, it gives Alice's probe cloud

\[
\Theta=3H_A,
\qquad
\sigma_{\mu\nu}=0,
\qquad
\omega_{\mu\nu}=0.
\tag{14}
\]

Matter and radiation dilute according to

\[
\rho_m(r)=\rho_{m0}r^3,
\qquad
\rho_r(r)=\rho_{r0}r^4,
\qquad
\rho_\Lambda(r)=\rho_\Lambda.
\tag{15}
\]

The background expansion is

\[
H_A(r)^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}r^3
+\rho_{r0}r^4
+\rho_\Lambda
\right).
\tag{16}
\]

The Ricci scalar becomes

\[
\mathcal R(r)
=
8\pi G
\left(
\rho_{m0}r^3+4\rho_\Lambda
\right).
\tag{17}
\]

Radiation does not appear in Equation (17) because its stress-energy tensor has zero trace. It remains present in the Ricci tensor and in Equation (16).

The resulting ledger is:

| Bob's \(r\) | Alice's \(a\) | Matter density | Radiation density | Background Weyl |
|---:|---:|---:|---:|---:|
| \(1\) | \(1\) | \(\rho_{m0}\) | \(\rho_{r0}\) | \(0\) |
| \(1/2\) | \(2\) | \(\rho_{m0}/8\) | \(\rho_{r0}/16\) | \(0\) |
| \(1/10\) | \(10\) | \(\rho_{m0}/1000\) | \(\rho_{r0}/10000\) | \(0\) |
| \(r\to0\) | \(a\to\infty\) | \(0\) | \(0\) | \(0\) |

The ordering of radiation, matter, and vacuum domination follows from their different powers of \(r\). Specific events such as thermalization and recombination require the absolute crossing normalization and thermal history, while the dilution sequence itself follows directly.

### 3.5 Present-day observers

At the homogeneous level, our present universe remains FLRW and therefore has zero background Weyl curvature. Real observers do not inhabit the exact background. Galaxies, clusters, stars, black holes, gravitational waves, and density perturbations add local Weyl curvature.

Alice arriving in deep space near the present-day Earth therefore measures:

- small Ricci curvature from the cosmic matter and vacuum background;
- nonzero local Weyl curvature from the Milky Way, Local Group, nearby structure, and propagating gravitational fields;
- zero proper acceleration while she remains freely falling.

This is Penrose's intended qualitative arrow: the background begins smooth, while local gravitational structure and its Weyl curvature develop over cosmic history.

### 3.6 The de Sitter future

As \(r\to0\), matter and radiation dilute away:

\[
H_A\to H_\Lambda,
\qquad
F(r)=rH_A(r)\to0.
\tag{18}
\]

Alice requires infinite proper time to reach \(r=0\). Her background approaches de Sitter space with

\[
\mathcal W\to0,
\qquad
\mathcal R\to4\Lambda,
\qquad
K\to\frac{8}{3}\Lambda^2.
\tag{19}
\]

Bob's apparent point at \(r=0\) is Alice's regular future conformal boundary, not a material point that must spread through space.

---

## 4. Why homogeneous density looks like one exterior mass

The reciprocal correspondence does not begin with a delta-function of matter at \(r=0\). The Schwarzschild parameter \(M\) is the total mass measured from the exterior; \(r=0\) is the endpoint of Bob's radial representation.

For a homogeneous comoving dust region in Alice's interior,

\[
V_\alpha=a^3V_H,
\qquad
\rho_m=\rho_{m0}a^{-3}.
\tag{20}
\]

Its total dust mass is

\[
M_m
=
\rho_mV_\alpha
=
\rho_{m0}V_H,
\tag{21}
\]

which is constant. The reciprocal expansion changes density and volume inversely while preserving the enclosed dust mass.

Birkhoff's theorem supplies the exterior half of the statement: the vacuum exterior of any spherical mass distribution depends on its total mass, not on its radial density profile. A homogeneous spherical interior can therefore be represented externally by the same Schwarzschild mass parameter as a compact source. The Oppenheimer–Snyder solution realizes this exactly for a homogeneous collapsing dust sphere: its interior is FLRW, while its exterior is Schwarzschild.

This establishes the relevant inverse correspondence without requiring a point mass to be dynamically smeared into a fluid:

\[
\boxed{
\text{homogeneous spherical density}
\quad\longleftrightarrow\quad
\text{one exterior mass parameter}
}.
\tag{22}
\]

The reciprocal ansatz then supplies the scale evolution of the homogeneous side.

---

## 5. Collapse-origin Alice

Ordinary Alice begins her journey after the SMBH already exists. She therefore does not personally traverse its formation event. To test the proposed cosmological origin, consider instead an Alice comoving with the matter that forms the parent black hole.

In the ideal homogeneous-collapse limit:

1. the collapsing matter has an FLRW geometry;
2. its Weyl curvature vanishes;
3. its density and Ricci curvature grow during collapse;
4. its exterior is described by a single Schwarzschild or Kottler mass parameter;
5. CSBHI identifies the collapse with the child cosmological beginning;
6. the reciprocal interior carries the homogeneous child forward as an expanding FLRW geometry.

Collapse-origin Alice therefore approaches the correspondence with

\[
\mathcal W\simeq0,
\qquad
\text{large Ricci curvature},
\tag{23}
\]

which is exactly Penrose's required initial curvature pattern.

This trajectory reveals the central CSBHI proposal more directly than ordinary infall. The child does not acquire a smooth beginning after a Schwarzschild point mass is dispersed. The parent collapse and child Big Bang are two geometric descriptions of one formation process. Homogeneity lies in the collapsing matter description before it appears as homogeneous child expansion.

A generic inhomogeneous collapse need not have vanishing Weyl curvature. The Penrose condition therefore becomes a testable requirement on the parent collapse and its map: the formation process corresponding to our cosmological beginning must be sufficiently homogeneous that the child begins with the observed low tidal inhomogeneity.

---

## 6. The CSBHI reading of Penrose

Penrose imposes a low-Weyl cosmological beginning as a special boundary condition. CSBHI proposes the following origin for it:

\[
\boxed{
\text{homogeneous parent collapse}
\quad\equiv\quad
\text{homogeneous child Big Bang}
}.
\tag{24}
\]

The parent and child descriptions emphasize different curvature sectors:

- dense collapsing matter carries Ricci curvature;
- the spherical vacuum exterior carries the enclosed mass through Weyl curvature;
- the child FLRW background carries matter, radiation, and vacuum energy through Ricci curvature;
- perturbations later generate the local Weyl curvature associated with structure.

The reciprocal relation

\[
a=\frac1r
\tag{25}
\]

then ties inward exterior progression to outward interior expansion, preserves homogeneous dilution, and sends Bob's finite radial endpoint to Alice's infinite de Sitter future.

On this reading, CSBHI does more than satisfy the Weyl Curvature Hypothesis by choosing an FLRW child. It identifies a familiar relativistic process capable of possessing the same low-Weyl, high-Ricci structure—homogeneous gravitational collapse—and proposes that the collapse and cosmological beginning are the same formation event seen from opposite sides.

---

## 7. Result and remaining calculation

The curvature ledger establishes the following conditional result:

> A homogeneous collapse-origin trajectory has the curvature pattern required by Penrose: negligible Weyl curvature and large Ricci curvature. CSBHI identifies that collapse with the child Big Bang. Its reciprocal interior preserves homogeneous, shear-free expansion; standard dilution then produces the radiation, matter, and vacuum sequence, local structure generates later Weyl curvature, and the background approaches a finite-curvature de Sitter future.

The remaining calculation is now narrow and explicit. A completed collapse-to-interior map must:

1. relate the parent collapse history to the child's initial spatial data;
2. preserve the enclosed mass and horizon normalization already identified by the project;
3. determine how perturbations in the collapsing matter become child scalar, vector, and tensor perturbations;
4. recover the observed small but nonzero initial inhomogeneity rather than an exactly featureless universe.

This is not a request for an ordinary scalar conformal transformation of Schwarzschild into FLRW. The exterior mass geometry and homogeneous interior are already known to coexist in spherical collapse. The new problem is to complete the reciprocal continuation that turns the collapsing FLRW formation region into the expanding child FLRW history.

---

## References

1. R. Penrose, "Singularities and Time-Asymmetry," in *General Relativity: An Einstein Centenary Survey*, ed. S. W. Hawking and W. Israel, Cambridge University Press (1979). [PDF](https://personal.lse.ac.uk/robert49/PPB/pdf/Penrose1979a.pdf).
2. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html). GD I.
3. [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior). Reciprocal Interior I.
4. J. R. Oppenheimer and H. Snyder, "On Continued Gravitational Contraction," *Physical Review* **56**, 455–459 (1939). [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
5. K. Nakao, "The Oppenheimer–Snyder Space-Time with a Cosmological Constant," *General Relativity and Gravitation* **24**, 1069–1081 (1992). [doi:10.1007/BF00756947](https://doi.org/10.1007/BF00756947).
6. G. F. R. Ellis, R. Maartens, and M. A. H. MacCallum, *Relativistic Cosmology*, Cambridge University Press (2012).
7. T. Clifton, G. F. R. Ellis, and R. Tavakol, "A Gravitational Entropy Proposal," *Classical and Quantum Gravity* **30**, 125009 (2013). [arXiv:1303.5612](https://arxiv.org/abs/1303.5612).
8. [*The Horizon Flow and Density Identity*](note.html?src=horizon_flow_density_identity). This project.
