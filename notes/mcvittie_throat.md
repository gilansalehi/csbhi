# The McVittie Throat: A Negative Result and the Anisotropy Diagnosis

*Technical note*

**Author:** Claude (Anthropic), with corrections from Codex (OpenAI).

**Date:** 2026-07-31.

## Abstract

An earlier draft of this note proposed the McVittie metric as an exact-solution realization of the CSBHI throat and — more boldly — as a geometric origin of the reciprocal ansatz \(a=1/r\). Codex identified decisive errors in the second claim. This revision records the negative result and extracts what it teaches, which turns out to be more useful than the original proposal.

**What survives:** McVittie is a single exact solution containing a central Weyl mass in an asymptotically flat FLRW background, with homogeneous FLRW density, inhomogeneous pressure, evolving apparent horizons, and generalized accreting forms. It is a legitimate testbed for constructing or ruling out the throat.

**What fails:** the identification of Bob's normalized areal coordinate with McVittie's isotropic potential \(\mu\), and hence the claimed derivation of \(a=1/r\). The relation \(\mu\propto1/a\) holds automatically on *every* comoving shell and selects nothing; Bob's areal coordinate is \(R/2m=(1+\mu)^2/4\mu\neq\mu\); and the surface \(\mu=1\) is a spacelike singularity in the expanding case, not Alice's horizon crossing.

**What the failure teaches:** the obstruction is not a missing ansatz. It is the **anisotropy of the vacuum interior**. Birkhoff's theorem forces the region inside a spherical vacuum mass to be the Kantowski–Sachs Schwarzschild interior, in which the two-sphere contracts and the radial direction expands — the opposite of an isotropic FLRW scale factor. The reciprocal ansatz is, exactly, the reciprocal of the Kantowski–Sachs sphere's areal radius. Its physical content — that this reciprocal is an *isotropic* scale factor — is what a vacuum interior cannot supply. Supplying it requires isotropizing matter, and the natural mechanism is \(\Lambda\)-driven isotropization of the anisotropic interior toward de Sitter. This relocates Q1 from "why reciprocal" (which is nearly free) to "why isotropic with this normalization" (which is the matter/no-hair question).

---

## 1. Why a single metric, not a junction

The junction programme glues distinct exact geometries — Schwarzschild or Kottler outside, FLRW inside — and measures the residual stress at the seam. It finds, correctly, that no abrupt Schwarzschild–FLRW soldering is \(C^1\). But a junction is the wrong shape of object: gluing two vacuum-or-fluid regions across a surface leaves surface stress unless the two bulk geometries were secretly the same solution. Q2 and Q3 ask for a *single* metric interpolating parent and child. McVittie is the standard candidate and had not been invoked in the corpus, which cites Einstein–Straus and Kottler junctions instead.

## 2. The McVittie metric

In isotropic coordinates, with \(G=c=1\),

\[
ds^2
=
-\frac{(1-\mu)^2}{(1+\mu)^2}\,dt^2
+
(1+\mu)^4\,a(t)^2
\left[
d\bar r^2+\bar r^2 d\Omega^2
\right],
\qquad
\mu=\frac{m}{2a(t)\bar r}.
\tag{1}
\]

The source has homogeneous density and inhomogeneous pressure,

\[
8\pi\rho(t)=3H^2,
\qquad
8\pi p(t,\bar r)=-3H^2-2\dot H\,\frac{1+\mu}{1-\mu},
\qquad
H=\frac{\dot a}{a}.
\tag{2}
\]

The pressure factor is \((1+\mu)/(1-\mu)\), the reciprocal of the lapse \(N=(1-\mu)/(1+\mu)=\sqrt{1-2m/R}\); an earlier version of this note dropped the \((1+\mu)\) numerator. The areal radius is

\[
R=(1+\mu)^2 a\bar r,
\qquad
\frac{R}{2m}=\frac{(1+\mu)^2}{4\mu}.
\tag{3}
\]

**Limits that recover verified results.** \(m\to0\): flat FLRW (Alice's background). \(H\to0\): isotropic Schwarzschild with \(p\to0\) (Bob's exterior). \(H=\text{const}\): \(p=-\rho\), and the solution is isometric to Kottler — the exterior used in RI II §3 and the recursive-Kottler note. McVittie–de Sitter is the seamless form of that junction.

## 3. The negative result

The earlier draft proposed \(r_{\rm Bob}\equiv\mu\), giving \(a=1/r\) as a metric identity on the shell \(\bar r=m/2\). This fails for four reasons, all correct as Codex stated them.

1. **\(\mu\propto1/a\) is a coordinate triviality.** For any fixed comoving shell, \(\mu=m/(2a\bar r)\propto1/a\) automatically. Choosing \(\bar r=m/2\) merely sets the constant to one. The geometry selects no reciprocal power.
2. **Bob's coordinate is not \(\mu\).** Bob's \(r\) is a normalized *areal* radius, related to \(\mu\) by Equation (3). On the chosen shell \(\mu=1/a\) gives \(R/2m=(a+1)^2/4a\), which equals one at \(a=1\) and then *increases*: the shell drifts outward into the FLRW region rather than following Alice inward.
3. **\(\mu=1\) is not the horizon.** In the expanding case, \(\mu=1\) (i.e. \(R=2m\)) is generally a spacelike curvature singularity. The apparent horizons instead solve \(1-2m/R-H^2R^2=0\), reducing to the Kottler roots in the de Sitter limit — the same roots verified in RI II §7. The crossing identification holds only in the static Schwarzschild limit.
4. **The isotropic inversion double-covers the exterior.** The map \(u\mapsto m^2/4u\) exchanges two copies of \(R\ge2m\); it never reaches \(R<2m\). It is exterior-to-exterior, not the exterior-to-interior bridge required.

A related overreach: the earlier claim that McVittie's pressure singularity *is* the junction work term. Its divergence is \(\propto\dot H\) and vanishes in exact de Sitter, whereas RI II's stationary transverse jump \([\kappa]=3c^2/2R_S\) does not. They share a qualitative role but are not the same object.

## 4. The anisotropy diagnosis

The failure points somewhere specific. Ask directly: what does the region *inside* the central mass actually look like, and why is it not FLRW?

**Birkhoff forces anisotropy.** Any spherically symmetric vacuum region is Schwarzschild. Inside the horizon, \(R<2m\), the areal radius \(R\) becomes timelike and the metric is the Kantowski–Sachs Schwarzschild interior,

\[
ds^2
=
-d\tau^2
+
\underbrace{\left(\frac{2m}{R}-1\right)}_{a_\parallel^2}dz^2
+
\underbrace{R^2}_{a_\perp^2}d\Omega^2,
\qquad
d\tau=\frac{dR}{\sqrt{2m/R-1}}.
\tag{4}
\]

As \(R:2m\to0\), the radial scale factor \(a_\parallel=\sqrt{2m/R-1}\) runs \(0\to\infty\) while the transverse scale factor \(a_\perp=R\) runs \(2m\to0\). The two-sphere **contracts** toward the singularity while the radial direction **expands**. This is maximal anisotropy, not FLRW. It is a theorem, not an accident: a vacuum spherical interior *cannot* be isotropic.

**The reciprocal ansatz is the reciprocal of the contracting sphere.** Write the reciprocal candidate \(a\equiv2m/R=R_S/a_\perp\). Then

\[
a_\perp=\frac{R_S}{a},
\qquad\text{i.e.}\qquad
r\equiv\frac{a_\perp}{R_S}=\frac1a.
\tag{5}
\]

So \(a=1/r\) is *definitionally* the statement that Alice's scale factor is the reciprocal of the Kantowski–Sachs sphere's areal radius. As a relation between labels it is nearly free. Its physical content is the further claim that this reciprocal quantity is an **isotropic** FLRW scale factor that Alice measures in all directions. In the vacuum interior that claim is simply false: \(2m/R\) is the scale factor of no direction — the actual directions are the anisotropic \(a_\parallel\) and \(a_\perp\). There is no isotropic \(a\) for the ansatz to name.

**This answers the question "is it just missing the ansatz?" — no, the reverse.** The reciprocal *relation* is present in any Schwarzschild interior for free, as Equation (5). What is missing is the *isotropy* that would make the reciprocal quantity a genuine scale factor. Vacuum cannot provide it. Only isotropizing matter can.

**The mechanism for isotropy already exists.** Two standard results supply it:

- *Oppenheimer–Snyder.* A homogeneous dust interior is exactly closed FLRW, matched to a Schwarzschild exterior. Filling the mass with isotropic matter — rather than leaving it a vacuum Weyl point — makes the interior FLRW by construction. McVittie's defect is precisely that its mass is a vacuum concentration, so its interior reverts to Kantowski–Sachs.
- *\(\Lambda\)-isotropization.* Kantowski–Sachs cosmologies with positive \(\Lambda\) approach de Sitter in the expanding direction, a cosmic-no-hair behaviour (analogous to Wald's theorem for Bianchi models, with KS handled separately since it is not Bianchi). An anisotropic infall interior with \(\Lambda\) isotropizes toward the de Sitter attractor at late times.

Together these suggest the correct picture: the reciprocal FLRW interior is not the exact early geometry but an **emergent late-time attractor** of an anisotropic, matter-and-\(\Lambda\)-filled infall region. Near crossing the interior is anisotropic Kantowski–Sachs; as \(\Lambda\) dominates it isotropizes toward de Sitter — which is exactly the verified late-time endpoint of the reciprocal interior (RI II §4, \(\Lambda=3/R_S^2\)).

## 5. What this means for Q1, and the path forward

The mystery relocates. Q1 was "why the reciprocal power \(a=1/r\)." Equation (5) shows the reciprocal relation is nearly free once Alice's scale factor is identified with the reciprocal Kantowski–Sachs sphere. The real question is:

> **Q1′.** Why is the infall interior isotropic FLRW with scale factor \(R_S/a_\perp\), rather than the anisotropic Kantowski–Sachs geometry that vacuum forces?

This is a matter-content and isotropization question, not a choice-of-power question. It is answerable by the tools above rather than by a new symmetry postulate.

The constructive path, merging Codex's six steps with the diagnosis:

1. Take a matter-filled (not vacuum) spherical interior, so isotropy is possible — the OS-type or a regular-interior generalized-McVittie source.
2. Add \(\Lambda\) and test isotropization: does the anisotropy \(a_\parallel/a_\perp\) decay toward the de Sitter attractor?
3. Express the solution in areal-radius coordinates; locate the black-hole apparent and event horizons (they should reduce to the Kottler roots already verified).
4. Follow an infalling timelike congruence through the regular future horizon and compute the spatial geometry it measures.
5. Test whether that geometry is isotropic and whether its scale is reciprocal to Bob's operational areal coordinate — the genuine test of \(a=1/r\), now correctly posed against \(R/2m\), not \(\mu\).
6. Integrate the near-horizon stress and compare coefficient-for-coefficient with RI II's work term.

If an isotropizing matter-plus-\(\Lambda\) interior yields \(a=1/r_{\rm Bob}\) as an attractor, the reciprocal ansatz is derived. If it yields only anisotropic Kantowski–Sachs with no isotropic limit at the relevant epoch, the ansatz needs a different home.

## 6. Result hierarchy

| Statement | Status |
|---|---|
| McVittie is an exact FLRW-embedded-mass solution; reduces to FLRW, Schwarzschild, Kottler | Established GR |
| Corrected pressure \(8\pi p=-3H^2-2\dot H(1+\mu)/(1-\mu)\) | Established GR (Codex correction) |
| \(r_{\rm Bob}\equiv\mu\Rightarrow a=1/r\) | **Refuted** (§3) |
| Pressure singularity \(=\) junction work term | **Refuted** as identity (§3) |
| Vacuum spherical interior is anisotropic Kantowski–Sachs | Established GR (Birkhoff) |
| \(a=1/r\) is the reciprocal of the KS sphere, Eq. (5) | Exact, this note |
| Isotropy requires matter; \(\Lambda\) isotropizes KS toward de Sitter | Established GR (OS; KS no-hair) |
| Reciprocal FLRW interior as a late-time isotropization attractor | Proposal; test via §5 |

The negative result is informative: it shows the obstruction is anisotropy, not a missing ansatz, and it names the two ingredients — isotropizing matter and \(\Lambda\)-driven no-hair — that any successful throat must contain. That much could indeed have been assembled in the 1930s; that it was not is why the reciprocal interior still needs building.

---

## References

1. McVittie, G. C. "The Mass-Particle in an Expanding Universe." *MNRAS* 93 (1933): 325-339. [doi:10.1093/mnras/93.5.325](https://doi.org/10.1093/mnras/93.5.325).
2. Nolan, B. C. "A Point Mass in an Isotropic Universe." *Physical Review D* 58 (1998): 064006. [doi:10.1103/PhysRevD.58.064006](https://doi.org/10.1103/PhysRevD.58.064006).
3. Faraoni, V., and Jacques, A. "Cosmological Expansion and Local Physics." *Physical Review D* 76 (2007): 063510. [arXiv:0707.1350](https://arxiv.org/abs/0707.1350).
4. Kaloper, N., Kleban, M., and Martin, D. "McVittie's Legacy: Black Holes in an Expanding Universe." *Physical Review D* 81 (2010): 104044. [arXiv:1003.4777](https://arxiv.org/abs/1003.4777).
5. Kantowski, R., and Sachs, R. K. "Some Spatially Homogeneous Anisotropic Relativistic Cosmological Models." *Journal of Mathematical Physics* 7 (1966): 443-446. [doi:10.1063/1.1704952](https://doi.org/10.1063/1.1704952).
6. Oppenheimer, J. R., and Snyder, H. "On Continued Gravitational Contraction." *Physical Review* 56 (1939): 455-459. [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
7. Wald, R. M. "Asymptotic Behavior of Homogeneous Cosmological Models in the Presence of a Positive Cosmological Constant." *Physical Review D* 28 (1983): 2118-2120. [doi:10.1103/PhysRevD.28.2118](https://doi.org/10.1103/PhysRevD.28.2118).
8. Codex (OpenAI), ["Junction Conditions for the Reciprocal Interior."](junctions.html) Reciprocal Interior II, this project.
