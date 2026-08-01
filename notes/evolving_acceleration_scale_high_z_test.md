# The Evolving Galactic Acceleration Scale and its High-Redshift Test

*Technical note — preparatory material for GD III*

**Author:** Claude (Anthropic), from discussion with G. Salehi.

**Date:** 2026-08-01.

## Purpose

This note tabulates what Geometric Duality does and does not predict for the galaxy acceleration law once the horizon scale is allowed to evolve, and specifies the observational test that separates GD from standard MOND and from ΛCDM. It is written to be cited from GD III. Every claim is tagged by tier:

- **[G]** exact geometry / kinematics (GD1-level);
- **[A]** consequence of the GD ansatz once a specific law is assumed;
- **[H]** heuristic — the curvature-mixing law itself, still GD III's open construction;
- **[R]** a reading/choice not yet forced by the theory;
- **[D]** data-limited: true in principle, not resolvable with current measurements.

The central results depend on tiers **[H]** and **[R]**. They are conditional predictions, not derived facts. GD III must not present them otherwise.

---

## 1. The core statement

The GD galaxy law (GD III Routes A–C) is a geometric-mean mixing of local baryonic curvature with the global horizon curvature:

\[
g_{\rm mix}\sim\sqrt{g_N\,g_\dagger},
\qquad
g_\dagger\sim cH_A .
\tag{[H]}
\]

Milgrom's scale is thereby identified with the horizon acceleration \(cH_A\). Because Alice's Hubble rate \(H_A\) evolves (GD1), the acceleration scale evolves:

\[
\boxed{
g_\dagger(z)=g_{\dagger,0}\,E(z),
\qquad
E(z)\equiv\frac{H_A(z)}{H_0}=\sqrt{\Omega_m(1+z)^3+\Omega_r(1+z)^4+\Omega_\Lambda}
}
\tag{[A],[R]}
\]

The **[R]** tag is essential: whether \(g_\dagger\) tracks the *instantaneous* \(cH_A(z)\) (evolving) or the *asymptotic* \(c\sqrt{\Lambda/3}=cH_\Lambda\) (constant) is not yet forced. The instantaneous reading is more natural — a galaxy should couple to its own contemporaneous horizon at \(c/H_A\), not to the final de Sitter horizon it has not reached — but "more natural" is not "derived." If the constant reading is correct, GD reduces to standard MOND on this point and makes no distinctive galaxy prediction.

## 2. Comparison of the three frameworks

| | Acceleration scale | BTFR slope (fixed \(z\)) | Zero-point evolution |
|---|---|---|---|
| **ΛCDM** | none (dark halos) | emergent, ~3–4, feedback-tuned | model-dependent, same sign as GD |
| **Standard MOND** | \(a_0=\)const | 4 (forced) | none |
| **GD** | \(g_\dagger=cH_A(z)\) | 4 (forced, fixed \(z\)) | \(-\log E(z)\) |

GD's distinctive content is the **evolution**, not the slope. At any single epoch GD and MOND are identical.

## 3. Why slope 4 is forced at fixed redshift, and why GD shares it

For a deep-regime law \(g=g_N^{\alpha}A^{1-\alpha}\) with inverse-square baryonic gravity \(g_N=GM/r^2\) and a circular orbit \(v^2=gr\),

\[
v^2(r)=(GM)^{\alpha}A^{1-\alpha}\,r^{\,1-2\alpha}.
\tag{[G]}
\]

A **flat** rotation curve (\(v\) independent of \(r\)) forces \(\alpha=1/2\), whence \(v^2=\sqrt{GMA}\) and \(M\propto v^4\). Slope 4 is dimensional inevitability: given flat outer curves, a single acceleration scale, and inverse-square gravity, \(\sqrt{GMA}\) is the only combination with the units of \(v^2\). GD's geometric-mean law is exactly \(\alpha=1/2\), so at fixed \(z\) GD is bound to BTFR slope 4 **[A]**. This is a feature — 4 is the tight, robust local value — not something to escape.

"Slope 4" refers to the **BTFR** (\(M_b\) versus asymptotic \(v_{\rm flat}\), across galaxies), *not* to \(v(r)\) within a galaxy. Both GD and MOND predict Newtonian inner curves, flat outskirts, and a transition between; the slope-4 statement uses only \(v_{\rm flat}\).

## 4. Epistemic standing relative to MOND

MOND *postulates* the deep-regime dynamics (\(\mu(x)\to x\)) chosen to reproduce flat curves; flatness is reverse-engineered, not explained. GD instead *motivates* the geometric-mean form as a mixing of local and horizon curvature, and derives a **transition radius** from horizon geometry,

\[
r_t\sim\sqrt{\frac{GM}{g_\dagger}}=\sqrt{\frac{GM}{cH_A}} ,
\tag{[H]}
\]

the radius at which \(g_N(r_t)\sim g_\dagger\) and the curve departs from Newtonian. MOND has the same transition at \(g\sim a_0\), but \(a_0\) is a fitted constant. GD's advantage is that one geometric scale supplies both the mixing form and the transition. The honesty caveat: GD III's mixing law is still a heuristic **[H]**, not a field-equation derivation, so this is a *better-motivated ansatz*, not a proof.

## 5. Three observables that evolve in GD and are fixed in MOND

All three track the single quantity \(g_\dagger(z)=cH_A(z)\):

1. **BTFR zero-point:** \(\Delta\log M_b|_{\rm fixed\,v}=-\log E(z)\). **[A],[R]**
2. **Transition radius:** \(r_t\propto\sqrt{GM/cH_A(z)}\), shrinking at high \(z\). **[A],[R]**
3. **RAR "knee":** the acceleration where curves leave the Newtonian regime sits at \(g_\dagger=cH_A(z)\), sliding to *higher* acceleration at high \(z\). **[A],[R]**

The RAR knee and BTFR zero-point are the clean probes (they track \(g_\dagger\) directly). The raw curve *shape* is confounded: at high \(z\) galaxies are also denser, so \(g_N\) rises faster than \(g_\dagger\), pushing them *toward* Newtonian — the net shape evolution is a competition and a poor discriminator. **[D]**

## 6. Prediction table

BTFR zero-point offset at fixed \(v_{\rm flat}\), relative to local (\(\Omega_m=0.3,\Omega_\Lambda=0.7\)):

| \(z\) | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|
| \(E(z)\) | 1.31 | 1.76 | 2.32 | 2.97 | 4.46 | 6.18 | 8.09 |
| **GD** \(\Delta\log M_b\) | −0.12 | −0.25 | −0.37 | −0.47 | −0.65 | −0.79 | −0.91 |
| **MOND** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Velocity form (at fixed \(M_b\), \(v\propto E(z)^{1/4}\)): +15% at \(z=1\), +31% at \(z=2\), +63% at \(z=4.5\).

## 7. Falsification specification

**Kill conditions:**
- Robust BTFR slope \(<3.7\) in a **single narrow \(z\)-bin** of well-controlled discs → breaks the \(v^4\) law → kills GD *and* MOND together.
- Zero-point flat to \(z\sim3\) (at \(<0.15\) dex) → kills GD's evolving reading, favors constant-\(g_\dagger\) MOND.
- Zero-point evolving but not as \(-\log E(z)\) (wrong magnitude/shape) → kills \(g_\dagger\propto H_A\), leaves a weaker coupling open.

**Critical methodological point:** the slope test must be done **at fixed \(z\)** (redshift-binned). A pooled multi-\(z\) sample with evolving \(g_\dagger\) produces an *apparent* slope \(<4\) purely from the sliding zero-point (high-\(v\) galaxies preferentially high-\(z\), pulled down) — degenerate with beam smearing, which also flattens. Pooled-sample slopes (e.g. the observed 3.2) therefore carry almost no discriminating power.

**Data-quality gate (why the test is not yet performable):**
- Required zero-point systematic \(<0.15\) dex; current ~0.4–0.5 dex. **Fails by ~3×.**
- Required slope precision ±0.15; current ±0.3.
- Required sample: *normal* rotating discs (not extreme SMGs) at \(z=2\)–4, flat \(v\), pressure-support and beam-smearing corrections cross-validated across methods.

## 8. Data-quality reckoning

The measured quantity is a tower of assumptions. Error budget per galaxy:

- **Velocity** (15–30%): beam smearing (lowers \(v\), 10–40% correction), pressure support / asymmetric drift (the dominant kinematic systematic, model-dependent), inclination.
- **Baryonic mass** (0.3–0.4 dex): IMF (~0.25 dex, Chabrier vs Salpeter), gas mass via CO-to-H\(_2\) (factor 2–5) or scaling relations.
- **Amplification:** \(M_b\propto v^4\) turns a 15% velocity systematic into ~0.24 dex in mass-at-fixed-\(v\).
- **Zero-point systematic total:** \(\sim\sqrt{0.35^2+0.30^2}\approx0.45\) dex.

Trustworthy precision is **~one significant figure** (a factor of ~2–3) on the zero-point. GD's signal is comparable to this floor for \(z<2\) and exceeds it only at \(z\gtrsim3\). The GD-vs-ΛCDM discrimination (the ~10% velocity difference between \(E^{1/4}\) and \(E^{1/3}\)) requires sub-0.1-dex control — ~5× beyond current systematics — and is not testable at all today.

**Current studies do not agree, and their disagreement is the error bar:**

| Study | Regime | Result | vs GD |
|---|---|---|---|
| Lelli et al. 2016 | local | slope ~3.8–4.0, tight | baseline |
| Übler et al. 2017 (KMOS³D) | \(z\sim0.9\)–2.3 | bTFR zero-point *positive* evolution | opposite direction |
| Sharma et al. 2024 (A&A) | \(0.6\le z\le2.5\) | ~−0.45 dex, slope \(3.21\pm0.28\) | right direction & magnitude; pooled-slope caveat |
| Fraternali et al. 2021 (ALMA) | \(z\sim4.5\) | ~−1.2 to −1.4 dex below local | GD direction, overshoots; extreme SMGs / proto-ETGs, not a fair test |

## 9. Status for GD III

- The evolving scale is a **genuine, specific, falsifiable** prediction, distinct from MOND (constant) and ΛCDM (no scale). **[A],[R]**
- It is **not currently supported or refuted** — the data quality is a factor of ~3 short of the required precision. **[D]**
- GD III should present the evolution as the distinctive claim, present slope-4 (fixed \(z\)) as an inherited success, and state the \(-\log E(z)\) prediction with the **[R]** caveat that the constant-\(g_\dagger\) reading is not yet excluded.
- The load-bearing open item remains GD III's own: turn the curvature-mixing heuristic **[H]** into a weak-field field equation. Until then the whole galaxy-law edifice, including this evolution, is conditional on that heuristic.

The honest headline: GD makes a distinct prediction the field will be able to test within a few years, and pre-registering it now — slope-4 at fixed \(z\), zero-point sliding as \(-\log E(z)\), knee at \(cH_A(z)\) — is the right posture, so the test is not fit after the fact.

---

## References

1. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html). GD1.
2. [*Geometric Duality III: Throat Curvature and the Galaxy Acceleration Law*](note.html?src=gd3_throat_curvature_and_galaxy_law_outline). Working outline, this project.
3. [*The Self-Dual Homogeneous Derivation of the Square-Root Law*](note.html?src=gd_self_dual_homogeneous_derivation_of_the_square_root_law). Technical note, this project.
4. Codex (OpenAI), [*Recursive Kottler Horizons and the Galaxy Acceleration Scale*](note.html?src=recursive_kottler_horizons_and_the_galaxy_scale). Technical note, this project.
5. Lelli, F., McGaugh, S. S., Schombert, J. M. "The Small Scatter of the Baryonic Tully–Fisher Relation." *ApJL* 816 (2016): L14. [arXiv:1512.04543](https://arxiv.org/abs/1512.04543).
6. Übler, H., et al. "The Evolution of the Tully–Fisher Relation between z∼2.3 and z∼0.9 with KMOS³D." *ApJ* 842 (2017): 121. [arXiv:1703.04321](https://arxiv.org/abs/1703.04321).
7. Sharma, G., et al. "Tully–Fisher relation of late-type galaxies at 0.6 ≤ z ≤ 2.5." *A&A* (2024). [arXiv:2406.08934](https://arxiv.org/abs/2406.08934).
8. Fraternali, F., et al. "Fast rotating and low-turbulence discs at z≃4.5." *A&A* 647 (2021): A194. [arXiv:2011.13500](https://arxiv.org/abs/2011.13500).
9. McGaugh, S. S., Lelli, F., Schombert, J. M. "Radial Acceleration Relation in Rotationally Supported Galaxies." *PRL* 117 (2016): 201101. [arXiv:1609.05917](https://arxiv.org/abs/1609.05917).
