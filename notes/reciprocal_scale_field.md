# The Reciprocal Scale Field and the Smooth-Throat Problem

*Consolidated calculation note — the scale-field reformulation of the reciprocal ansatz, its Liouville structure, and the thin- versus thick-throat alternatives.*

**Authors:** Claude (Anthropic) and Codex (OpenAI), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Consolidated draft, under verification. The radial identity (§2), minimal-scalar exclusion (§3), and endpoint Weyl scalars (§4) are exact within their stated models. The interpretation of the scale variable and the smooth 5D completion remain open. The null shell is established only for the zero-width Schwarzschild–de Sitter surrogate; it is the sharp limit of, not evidence against, a finite transition. Tiered **[E]** established/derived, **[C]** inference, **[O]** open. Supersedes the earlier Crunch 1–3 working notes and their two synthesis drafts.

**Prerequisites:** [GD I](gd1.html); [RI I — Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior); [the involution note](reciprocal-involution.html).

**Notation:** [Glossary](note.html?src=cosmological_glossary). \(c=1\), signature \((-+++)\), \(\Box\equiv\nabla^\mu\nabla_\mu\); \(r\) = Bob's horizon-normalized areal radius; \(\sigma\equiv\ln a=-\ln r\).

---

## Abstract

One change of variable turns the reciprocal ansatz \(a=1/r\) into a scale field \(\sigma=\ln a\), and a short chain of calculations follows from it:

1. The reciprocal involution becomes the reflection \(\sigma\to-\sigma\), with the horizon-normalized value \(\sigma=0\) as its fixed point.
2. Inserted into the scalar wave operator on a Schwarzschild exterior, \(\sigma=-\ln r\) satisfies a **Liouville (exponential) equation** and the black-hole mass term cancels exactly.
3. A minimally coupled canonical scalar **cannot** carry this profile while leaving an exact Schwarzschild/Kottler exterior unchanged. The remaining readings are a **conformal compensator** (a Weyl-gauge field calibrating local units) or pure geometry (\(\sigma=-\ln(\text{areal radius})\)).
4. A sharp Kottler-to-FLRW identification changes the Weyl scalar from its exterior value to zero. The reciprocal variable labels that change but does not determine its physical profile.
5. The already-computed zero-width null soldering carries Barrabès–Israel surface stress. A finite matter-filled transition can instead relax the Weyl curvature continuously, distributing the same geometric work through a smooth throat.

**Headline:** a null shell is the zero-thickness limit of the throat. The physical question is whether the Weyl-to-Ricci conversion occurs abruptly on that shell or continuously across a finite matter-filled region.

---

## 1. The scale field [E]

The reciprocal interior metric \(ds^2=-d\tau^2+a^2(dR^2+R^2d\Omega^2)\), \(a=1/r\), carries a scale factor that RI I leaves as an undetermined function. Name it \(\sigma\equiv\ln a=-\ln r\). Then \(a^2=e^{2\sigma}\), and

| Bob's radial description | scale description |
|---|---|
| \(r\to\infty\) (spatial infinity, \(a\to0\)) | \(\sigma\to-\infty\) |
| \(r=1\) (horizon) | \(\sigma=0\) |
| \(r\to0^+\) (de Sitter future, \(a\to\infty\)) | \(\sigma\to+\infty\) |
| reciprocal involution \(a\leftrightarrow1/a\) | reflection \(\sigma\to-\sigma\) |

The horizon-fixing involution is the reflection \(\sigma\to-\sigma\) with fixed point \(\sigma=0\), and the interior/exterior are its two branches. This is the same self-dual point identified in the [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry) (\(t\to1/t\) is \(\ln t\to-\ln t\)); \(\sigma\) is the log of that note's imaginary-axis coordinate.

---

## 2. The Liouville equation and scale covariance [E]

To test whether \(\sigma\) can behave as an ordinary scalar, begin with the candidate action
\[
S=\int d^4x\sqrt{-g}\left[\frac{1}{2\kappa}R-\tfrac12(\partial\sigma)^2-V(\sigma)\right]+S_m,\qquad \Box\sigma=V'(\sigma).
\]
Because \(r\) is dimensionless, write the physical areal radius as \(\mathcal R=R_Sr\) and \(\sigma=-\ln(\mathcal R/R_S)\). For a static radial field in
\[
ds^2=-f\,dt^2+f^{-1}d\mathcal R^2+\mathcal R^2d\Omega^2,
\]
\[
\Box\sigma=\frac1{\mathcal R^2}\big(\mathcal R^2 f\,\sigma'\big)',\qquad
\boxed{\ \Box\sigma=-\frac{f+\mathcal R f'}{\mathcal R^2}\ }.
\]

- **Schwarzschild** \(f=1-R_S/\mathcal R\): \(f+\mathcal Rf'=1\) *exactly*. The mass term cancels, so
  \[
  \boxed{\ \Box\sigma=-\frac{e^{2\sigma}}{R_S^2}\ },
  \qquad V(\sigma)=-\frac{e^{2\sigma}}{2R_S^2}.
  \]
  The result is identical to the flat-space radial operator.
- **Kottler** \(f=1-R_S/\mathcal R-\Lambda\mathcal R^2/3\): \(f+\mathcal Rf'=1-\Lambda\mathcal R^2\), so
  \[
  \Box\sigma=-\frac{e^{2\sigma}}{R_S^2}+\Lambda,
  \qquad V(\sigma)=-\frac{e^{2\sigma}}{2R_S^2}+\Lambda\sigma.
  \]

Exponentials transform multiplicatively under the scale shift \(\sigma\to\sigma+c\). Scale covariance therefore makes a Liouville potential natural; the spherical radial operator fixes the exponent to \(2\). This places the calculation in Liouville and two-dimensional dilaton-gravity territory, whose modular structure supplies a possible connection to the modular note.

The horizon fixes the normalization \(\sigma=0\), but this does not by itself reduce the field equations to Einstein gravity: \(\nabla\sigma\) remains nonzero there. Einstein gravity may emerge after a conformal compensator is fixed to a constant gauge throughout a region. Establishing that statement requires the conformally coupled action studied in §8.

---

## 3. What the scale field is: three readings, one excluded [E→C]

**Self-consistent backreaction excludes the simplest "scale as ordinary matter" model.** An exact one-function black-hole exterior has the form \(-f\,dt^2+f^{-1}d\mathcal R^2+\mathcal R^2d\Omega^2\), for which \(G^t{}_t=G^\mathcal R{}_\mathcal R\), so Einstein's equations require \(T^t{}_t=T^\mathcal R{}_\mathcal R\). For a static canonical scalar,
\[
T^t{}_t=-\big(\tfrac12 f\sigma'^2+V\big),\quad T^\mathcal R{}_{\mathcal R}=\tfrac12 f\sigma'^2-V
\ \Rightarrow\ f\sigma'^2=0\ \Rightarrow\ \sigma'=0 .
\]
A gravitating, minimally coupled canonical \(\sigma\) therefore cannot preserve that exact exterior profile. This excludes one specific realization; it does not exclude nonminimal or conformal coupling, a more general two-function exterior, or a higher-dimensional origin. **[E]**

That leaves two readings, and they are the substantive ones **[C]**:

- **Conformal compensator:** \(\sigma\) is represented by a multiplicative Weyl-gauge field calibrating the local units in which the metric is measured; ordinary Einstein gravity may appear after fixing that field to a constant gauge.
- **Pure geometry:** \(\sigma=-\ln(\text{areal radius})\), in which case the Liouville identity of §2 is a property of the areal radius and promoting \(\sigma\) merely *exposes* the reciprocal \(a\leftrightarrow1/a\) symmetry of 4D GR — no new degree of freedom.

The safe conclusion is narrower and useful: **\(\sigma\) is not a minimally coupled canonical matter field on an unchanged Schwarzschild/Kottler background.** Distinguishing a Weyl compensator, geometric bookkeeping, and a higher-dimensional scale coordinate is the next calculation (§8).

---

## 4. The Weyl conversion target [E→C]

The exterior Kottler geometry is Petrov type D with a single independent Weyl scalar
\[
\boxed{\ \Psi_2=-\frac{GM}{R_S^3}e^{3\sigma}\ },\qquad
C_{\alpha\beta\gamma\delta}C^{\alpha\beta\gamma\delta}
=\frac{48G^2M^2}{R_S^6}e^{6\sigma}.
\]
(The cosmological constant contributes to Ricci rather than Weyl, so Kottler and Schwarzschild share the same Weyl scalar.) Exact FLRW is conformally flat, \(\Psi_2=0\). A zero-width Kottler-to-FLRW surrogate therefore changes \(\Psi_2\) from \(-GM/R_S^3\) to zero at \(\sigma=0\). The reciprocal variable labels this change but does not determine how the physical geometry completes it.

This defines the **Weyl-to-Ricci conversion target**: concentrated mass registers through Weyl curvature in the exterior description, while homogeneous matter registers through Ricci curvature in the FLRW description. A sharp step is a property of the piecewise surrogate, not yet a prediction of the completed throat. In the finite three-region picture, \(\Psi_2(\sigma)\) can instead relax continuously from its exterior value toward zero while the density becomes homogeneous. **[C]**

The exterior identity nevertheless captures the scale-dependent-character intuition cleanly: \(\Psi_2\) depends on both the scale \(\sigma\) and the source \(M\). It provides the parent-side boundary value that any finite transition must reproduce.

---

## 5. Thin shell and smooth-throat limits [E→C]

For a candidate 5D completion foliated by four-dimensional hypersurfaces, Gauss–Codazzi and the Shiromizu–Maeda–Sasaki decomposition give, for a Ricci-flat bulk,
\[
{}^{(4)}G_{\mu\nu}=KK_{\mu\nu}-K_\mu{}^\alpha K_{\alpha\nu}-\tfrac12 g_{\mu\nu}(K^2-K_{\alpha\beta}K^{\alpha\beta})-E_{\mu\nu},\quad E_{\mu\nu}={}^{(5)}C_{\mu A\nu B}n^An^B .
\]
The induced four-dimensional curvature depends on the slice's intrinsic metric, its extrinsic curvature \(K_{\mu\nu}\), and the projected bulk Weyl term \(E_{\mu\nu}\). These are precisely the channels through which a smooth higher-dimensional geometry could present different Weyl/Ricci balances on different slices. **[E]**

Two controlled limits now fit together:

| model | geometric result |
|---|---|
| Exact Schwarzschild/de Sitter or Kottler/FLRW pieces soldered across a zero-width null horizon | The previously computed transverse-curvature jump gives Barrabès–Israel null-shell stress. The thermodynamic work term is its sharp-boundary representation. **[E]** |
| A finite matter-filled transition | \(\Psi_2\), the density profile, and the induced curvature may vary continuously. The same work is distributed through the transition, with no distributional shell required. **[C]** |

The Weyl change by itself does not prove a shell: exact dust matchings such as Oppenheimer–Snyder and Einstein–Straus can join a conformally flat matter region to a Weyl-curved vacuum without surface stress. What establishes the null shell in the sharp surrogate is the transverse-junction calculation, not the finite difference between the two Weyl scalars.

If a smooth 5D bulk and a smooth family of slices connect the two descriptions, the induced curvature must relax continuously. The putative throat-brane is therefore the zero-thickness limit of the finite throat, not yet the demonstrated physical geometry. Campbell–Magaard guarantees separate local analytic embeddings; it does not guarantee one common global bulk joining them.

---

## 6. The unified picture [C]

- The reciprocal ansatz is a **scale reflection** with the horizon-normalized value \(\sigma=0\) as its self-dual fixed point.
- A minimally coupled canonical scalar cannot carry this profile while leaving an exact Schwarzschild/Kottler exterior unchanged. A conformal compensator and a higher-dimensional scale coordinate remain viable realizations.
- The sharp null junction and the finite throat are two limits of one problem. The first compresses the transverse work onto a Barrabès–Israel shell; the second must distribute it through a continuous curvature and matter profile.
- This sharpens the [conformal-crossover picture](note.html?src=reciprocal_interior_conformal_crossover): the entry throat near \(\sigma=0\) remains distinct from the child crossover at \(\sigma\to\infty\). The scale-field calculation supplies a natural coordinate for that history but not yet its complete metric.

**Not claimed:** a completed parent–child metric; a physically thin brane; the conformally coupled compensator's consistency; a common 5D bulk; or the finite transition's Weyl and density profiles.

---

## 7. Honest ledger

| Claim | Grade | Basis |
|---|---|---|
| \(\sigma=\ln a\); involution \(=\sigma\to-\sigma\); horizon normalization \(\sigma=0\) | **[E]** | change of variable |
| \(\Box(-\ln r)=-e^{2\sigma}/R_S^2\) in Schwarzschild | **[E]** | direct computation |
| minimally coupled canonical \(\sigma\) incompatible with an unchanged one-function exterior | **[E]** | \(T^t{}_t=T^\mathcal R{}_{\mathcal R}\Rightarrow\sigma'=0\) |
| \(\sigma\) is a conformal compensator, geometric variable, or fifth coordinate | **[O]** | fork not yet decided |
| exterior \(\Psi_2=-(GM/R_S^3)e^{3\sigma}\); exact FLRW has \(\Psi_2=0\) | **[E]** | textbook Weyl scalars |
| a finite throat converts the Weyl/Ricci balance continuously | **[C]** | target suggested by exact matter matchings |
| Gauss–Codazzi supplies the 5D projection channels | **[E]** | standard |
| zero-width null surrogate carries surface stress | **[E]** | Barrabès–Israel junction calculation |
| physical throat is smooth rather than a null shell | **[O]** | finite profile not yet constructed |

---

## 8. Open computations

1. **Matter-filled Weyl profile [decisive].** Use the spherical Misner–Sharp/Weyl relation to construct a finite density profile that carries the exterior Weyl curvature continuously into the homogeneous FLRW value. Test the Darmois data and identify whether any shell remains.
2. **Conformal compensator.** Write the locally Weyl-invariant action using a multiplicative field \(\chi=\chi_H e^{-\sigma}\); identify its gauge-invariant metric and determine whether reciprocal scaling is gauge, dynamics, or higher-dimensional geometry.
3. **Local 5D throat.** Introduce a fifth coordinate independently of \(\sigma\), solve the Gauss–Codazzi constraints in a near-throat expansion, and determine whether the finite 4D profile admits a smooth common bulk.
4. **Sharp-limit recovery.** Take the width of the smooth profile to zero and verify that its integrated work tends to the existing Barrabès–Israel null-shell stress.

---

## References

1. Petrov type-D Weyl scalar \(\Psi_2=-GM/r^3\): S. Chandrasekhar, *The Mathematical Theory of Black Holes* (Oxford, 1983).
2. T. Shiromizu, K. Maeda, M. Sasaki, "The Einstein equations on the 3-brane world," *Phys. Rev. D* **62**, 024012 (2000), [arXiv:gr-qc/9910076](https://arxiv.org/abs/gr-qc/9910076).
3. C. Barrabès and W. Israel, “Thin shells in general relativity and cosmology: The lightlike limit,” *Physical Review D* **43**, 1129 (1991), [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
4. W. Israel, "Singular hypersurfaces and thin shells in general relativity," *Nuovo Cimento B* **44**, 1 (1966).
5. Campbell–Magaard embedding: S. Rippl, C. Romero, R. Tavakol, [arXiv:gr-qc/9511016](https://arxiv.org/abs/gr-qc/9511016); induced matter: P. S. Wesson, *Space–Time–Matter* (World Scientific, 1999).
6. Liouville-potential scalar black holes, e.g. K. C. K. Chan, J. H. Horne, R. B. Mann, *Nucl. Phys. B* **447**, 441 (1995), [arXiv:gr-qc/9502042](https://arxiv.org/abs/gr-qc/9502042).
7. G. Salehi, [GD1](gd1.html); [RI I](note.html?src=field_equations_of_the_reciprocal_interior); [involution note](reciprocal-involution.html); [modular note](note.html?src=modular_self_duality_and_the_reciprocal_symmetry); [conformal-crossover note](note.html?src=reciprocal_interior_conformal_crossover), this project.
