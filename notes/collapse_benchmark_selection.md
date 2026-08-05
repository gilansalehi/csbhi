# Selecting the Parent Collapse Benchmark

*Step two of the collapse-cohort horizon-map calculation.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit); [Next Steps for the Collapse-Cohort Horizon Map](note.html?src=next_steps_for_the_collapse_cohort_horizon_map).

**Status:** Benchmark selection. The selected geometry is an established exact parent-side solution. Identifying its horizon history with the child cohort map remains the CSBHI calculation. Tiered **[E]** established geometry, **[C]** candidate correspondence, **[O]** open.

---

## 1. What the benchmark must supply

The first parent model must contain, in one geometry:

1. a regular spherical overdensity that begins inside an expanding FLRW universe;
2. collapse and black-hole-horizon formation rather than a pre-existing point mass;
3. matter outside and inside the black-hole region;
4. a proper-time coordinate shared with the parent FLRW background;
5. invariant shell labels and Misner–Sharp mass;
6. radial null equations from which the black-hole event horizon can be traced;
7. a smooth Schwarzschild-like local limit without treating vacuum Schwarzschild as the global parent spacetime.

No standard analytic model includes realistic gas pressure, radiation, rotation, mergers, feedback, and a cosmological environment simultaneously. The first benchmark should isolate the spherical clock problem while keeping the defining causal and matter structure intact.

---

## 2. Candidates considered

| Model | What it supplies | Why it is not the first benchmark |
|---|---|---|
| Oppenheimer–Snyder | Exact homogeneous dust collapse and a transparent causal diagram | Its exterior is vacuum Schwarzschild rather than the matter-filled parent FLRW universe. Use it as a limiting check. |
| Einstein–Straus / Kottler vacuole | Exact dust–\(\Lambda\) FLRW matching with no surface layer | It embeds an already formed static vacuole; it does not generate the collapse-day horizon clock. |
| McVittie | A central mass in an FLRW background | The original solution suppresses accretion and does not describe formation from a regular overdensity. |
| Vaidya-type collapse | A changing mass and tractable null flux | Its source is null radiation rather than the parent matter shells central to the cohort construction. Use it later as an accretion check. |
| Misner–Sharp perfect-fluid collapse | Pressure, radiation, shocks, and realistic hydrodynamics in spherical symmetry | It is the correct refinement after the clock is understood, but it turns the first step into a numerical equation-of-state problem. |
| Lemaître–Tolman–Bondi collapse | Exact inhomogeneous dust, shell mass, a synchronous parent clock, trapped surfaces, and an FLRW exterior | Selected. A positive \(\Lambda\) and compensated profile give the closest solvable parent to the recursive CSBHI picture. |

---

## 3. Selection

The first benchmark will be a **compensated \(\Lambda\)LTB overdensity embedded in a spatially flat dust–\(\Lambda\) FLRW parent**.

This is not merely Oppenheimer–Snyder collapse with different notation. LTB allows a bound central overdensity to turn around and collapse while the outer universe continues expanding. The outer profile can become exactly or asymptotically FLRW, so matter is never deleted merely to recover a Schwarzschild chart.

Firouzjaee and Mansouri constructed LTB examples in which a collapsing overdensity sits inside an expanding FLRW universe and explicitly traced their apparent and event horizons. Recent work by Galoppo, Bruni, and Harada uses LTB and quasi-spherical Szekeres solutions as exact nonlinear perturbations of flat \(\Lambda\)CDM and finds black-hole-forming broad compensated curvature peaks. The latter supplies the preferred profile family for the benchmark rather than requiring CSBHI to invent one.

---

## 4. Parent geometry

Use units \(c=1\) while retaining \(G\). Let \(t_P\) be parent cosmic proper time, \(x\) a parent comoving shell coordinate, and \(Y(t_P,x)\) the parent areal radius. Write

\[
ds_P^2
=
-dt_P^2
+
\frac{Y'(t_P,x)^2}{1+2E(x)}dx^2
+
Y(t_P,x)^2d\Omega^2.
\tag{1}
\]

Here a prime differentiates with respect to \(x\). The dust four-velocity is \(u^a=(\partial_{t_P})^a\), so \(t_P\) is proper time along every parent matter shell.

The Einstein equations reduce to

\[
\boxed{
\dot Y^2
=
\frac{2Gm(x)}{Y}
+2E(x)
+\frac{\Lambda_P}{3}Y^2
},
\tag{2}
\]

\[
\boxed{
4\pi\rho_P
=
\frac{m'(x)}{Y^2Y'}
}.
\tag{3}
\]

The free data are the Misner–Sharp material mass \(m(x)\), the curvature/energy profile \(E(x)\), and a bang-time function. The benchmark sets the bang-time function constant, removing the decaying mode and giving every outer FLRW shell the same cosmological origin.

---

## 5. Compensated boundary data

Choose a broad, regular curvature peak with a bound central region and a compensating outer region. At a finite comoving boundary \(x_b\), require the LTB data and their necessary derivatives to agree with the flat parent FLRW solution.

Operationally:

\[
m(x_b)
=
\frac{4\pi}{3}\rho_P(t_*)Y(t_*,x_b)^3,
\tag{4}
\]

while the curvature perturbation and its matching derivatives vanish at \(x_b\). Outside \(x_b\),

\[
Y(t_P,x)=a_P(t_P)x
\tag{5}
\]

after fixing the radial gauge.

The central region first expands, turns around, and collapses. The compensating region preserves the unperturbed FLRW mass at large radius. This is precisely the recursive picture required for the benchmark: locally black-hole-forming, globally cosmological.

The next step will import one published viable broad compensated profile and its regularity conditions. A Gaussian or sinusoidal profile will not be chosen merely for convenience; the recent direct-collapse analysis finds those simple profiles do not provide viable black-hole-forming channels in its setup.

---

## 6. The physical horizon clock

Radial outgoing null curves obey

\[
\boxed{
\frac{dt_P}{dx}
=
\frac{Y'}{\sqrt{1+2E}}
}.
\tag{6}
\]

Once the complete parent future is specified, the black-hole event horizon is the outgoing null generator separating rays that remain connected to the external FLRW region from rays that enter the trapped future.

Write its comoving path as \(x_H(t_P)\). Its parent areal radius is

\[
R_{\rm BH}(t_P)
=
Y\bigl(t_P,x_H(t_P)\bigr).
\tag{7}
\]

The benchmark fixes the cohort parameter by

\[
\boxed{v_H\equiv t_P\big|_{\mathcal H_{\rm BH}}}.
\tag{8}
\]

This parameter is generally not affine along the null generator. That is a virtue here: it is physically normalized parent cosmic time, measured by the dust and inherited by the external FLRW universe.

The advanced null coordinate \(v_B\) used in the optical calculation is a different coordinate. The benchmark must calculate

\[
\boxed{
J_H(t_P)
=
\frac{dv_B}{dt_P}
}.
\tag{9}
\]

before the optical relation can determine \(\Phi'\):

\[
\Phi'(t_P)
=
\frac{J_H(t_P)}{2V'}.
\tag{10}
\]

Thus the model supplies exactly the parent-clock Jacobian exposed by the equation audit.

---

## 7. Horizon data available from the benchmark

The parent apparent/trapping horizon obeys

\[
g^{ab}\nabla_aY\nabla_bY=0,
\tag{11}
\]

or

\[
\boxed{
1
-
\frac{2Gm(x)}{Y}
-
\frac{\Lambda_P}{3}Y^2
=0
}.
\tag{12}
\]

This local surface is not the event horizon, but it supplies a late-time anchor from which the global event-horizon generator can be integrated backward. The calculation then yields, from one parent solution:

- the formation endpoint of the black-hole event horizon;
- \(R_{\rm BH}(t_P)\);
- the mass fraction swept out by the horizon;
- its null expansion and area change;
- the relation between parent cosmic time and the advanced optical coordinate;
- the sequence of Alice crossing cohorts.

Unlike a mass-growth clock, \(t_P\) continues advancing after accretion becomes negligible.

---

## 8. What the benchmark deliberately omits

The selected parent has no pressure, radiation, rotation, mergers, magnetic field, or feedback. Dust eventually forms shell-focusing singularities, and shell crossing must be excluded through the profile's regularity conditions.

These omissions do not make the benchmark the proposed CSBHI completion. They define its role:

1. use established GR to generate the parent causal and shell data;
2. stop the classical extrapolation before its shell-focusing endpoint;
3. test whether the reciprocal child map can replace that endpoint regularly;
4. add pressure, radiation, and rotation only after the clock law is explicit.

If the horizon clock cannot be constructed even in this controlled matter-filled model, a more complicated fluid will not rescue the missing definition. If it can, the Misner–Sharp perfect-fluid system becomes the next realism test.

---

## 9. Decision and next calculation

The selected benchmark is therefore:

\[
\boxed{
\text{broad compensated }\Lambda\text{LTB overdensity}
\subset
\text{flat dust–}\Lambda\text{ FLRW parent}
}.
\tag{13}
\]

The parent clock is

\[
\boxed{v_H=t_P}.
\tag{14}
\]

Oppenheimer–Snyder will serve as the homogeneous limit, and the existing dust–\(\Lambda\) FLRW–Kottler result will serve as the timelike-boundary check.

Step three can now write the two null embeddings explicitly:

1. \(t_P\mapsto(t_P,x_H(t_P))\) in the selected parent;
2. \(t_P\mapsto(\eta,R)=(\Phi(t_P),\Phi(t_P))\) in the child.

That step will expose which equation can determine \(\Phi\), \(J_H\), and \(\Omega_\Sigma\) without joining two independently chosen metrics across a zero-width surface.

---

## References

1. G. Lemaître, “L'Univers en expansion,” *Annales de la Société Scientifique de Bruxelles A* **53**, 51–85 (1933).
2. R. C. Tolman, “Effect of Inhomogeneity on Cosmological Models,” *Proceedings of the National Academy of Sciences* **20**, 169–176 (1934), [doi:10.1073/pnas.20.3.169](https://doi.org/10.1073/pnas.20.3.169).
3. H. Bondi, “Spherically Symmetrical Models in General Relativity,” *Monthly Notices of the Royal Astronomical Society* **107**, 410–425 (1947), [doi:10.1093/mnras/107.5-6.410](https://doi.org/10.1093/mnras/107.5-6.410).
4. J. T. Firouzjaee and R. Mansouri, “Asymptotically FRW Black Holes,” *General Relativity and Gravitation* **42**, 2431–2452 (2010), [arXiv:0812.5108](https://arxiv.org/abs/0812.5108).
5. M. Galoppo, M. Bruni, and T. Harada, “Supermassive Black Hole Seeds from Direct Collapse of CDM-Curvature Peaks,” preprint (2026), [arXiv:2605.30145](https://arxiv.org/abs/2605.30145).
6. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).
7. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
