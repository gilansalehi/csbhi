# Collapse Day and Present Day: The Infall-Cohort Worldsheet

*Working note on repeating the GD I thought experiment at different parent epochs.*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Prerequisites:** [GD I](gd1.html); [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

**Status:** Candidate construction. The causal characters used below are standard. Identifying the parent black-hole event horizon with the child particle-horizon history is a CSBHI proposal, not yet a derived junction. Tiered **[E]** established, **[C]** candidate correspondence, **[O]** open.

---

## Abstract

GD I follows one Alice through a parent black-hole event horizon and assigns her interior spatial scale by \(a=1/r\). Repeating that experiment at every parent epoch produces a family of infalling worldlines: the **cohort worldsheet**.

Compare two members. Precursor Alice crosses as the black hole forms; Present Alice crosses later. At the precursor crossing, a timelike Alice continues into the reciprocal interior while a radial photon emitted tangent to the horizon remains on its null generator. That photon meets Present Alice at her later crossing. In a spatially flat child FLRW diagram, the minimal spherical image of this null history is \(R=\eta\), the particle-horizon history of a central comoving observer.

This fixes the causal shape of the radial map. One monotone function, \(\Phi(v_H)\), remains: it converts parent horizon time \(v_H\) into child conformal time and comoving radius.

---

## 1. Repeat the experiment

Let \(v_H\) label the parent epoch at which an Alice cohort crosses one angular generator of the black-hole event horizon. Let \(\tau\) be child cosmic time, let \(\tau_i\) be the time assigned to cohort \(i\)'s crossing, and let \(\Delta\tau_i=\tau-\tau_i\) be her elapsed proper time after crossing. Write the cohort as

\[
\gamma_{v_H}(\Delta\tau).
\tag{1}
\]

The family

\[
X:(v_H,\Delta\tau)\longmapsto\gamma_{v_H}(\Delta\tau)
\tag{2}
\]

is a two-dimensional worldsheet in the radial diagram. Restoring \((\theta,\phi)\) gives the spherical four-dimensional family. Bob's station supplies a timelike boundary; the crossing events \(X(v_H,0)\) lie on the null event horizon.

Select

- \(v_*=v_{\mathrm{form}}\): the limiting collapse-day experiment;
- \(v_0\): a later present-day experiment.

Collapse-day Alice is the limit of successively earlier regular infallers, not a material observer sitting on a singular boundary.

---

## 2. The branch at the precursor crossing

At an early regular crossing, Precursor Alice emits an outward radial photon exactly tangent to the event horizon.

- **Timelike branch:** Alice continues into the reciprocal interior and accumulates proper time.
- **Null branch:** the photon follows the event-horizon generator.

The photon can meet a later Alice when she crosses that generator. A massive Alice cannot remain on the horizon, and a photon emitted strictly inside it cannot catch it. **[E]**

This replaces the language of an Alice bouncing from a singularity. In a classical collapse diagram the singularity is a future boundary; future-directed curves do not leave it. CSBHI instead proposes that the reciprocal interior replaces the would-be singular endpoint in the completed metric. **[C]**

---

## 3. The child null history

Write the spatially flat child geometry in conformal time:

\[
ds_C^2
=
a(\eta)^2
\left(
-d\eta^2+dR^2+R^2d\Omega^2
\right).
\tag{3}
\]

Radial light obeys

\[
\frac{dR}{d\eta}=\pm1.
\tag{4}
\]

Place a central comoving observer at \(R=0\) and the limiting formation anchor at \(\eta=0\). The outgoing null history is

\[
R=\eta.
\tag{5}
\]

Its areal radius is

\[
\bar R_p(\eta)=a(\eta)\eta.
\tag{6}
\]

For the central observer, this is the evolving particle-horizon radius. It is not the Hubble radius, apparent horizon, cosmological event horizon, or CMB last-scattering surface. **[E]**

The minimal candidate map is therefore

\[
\boxed{
\eta(v_H)=R(v_H)=\Phi(v_H)
}.
\tag{7}
\]

Equation (7) proposes a correspondence between the parent event-horizon generator and one child particle-horizon history. **[C]**

---

## 4. The causal wedge

Suppress the two-spheres and define

\[
q=(0,0),
\qquad
E=(\eta_0,0),
\qquad
Q=(\eta_0,\eta_0).
\tag{8}
\]

Then

- \(q\to E\) is Stationary Precursor Alice's central comoving history;
- \(q\to Q\) is the null branch \(R=\eta\);
- \(E\to Q\) is a spacelike slice of constant child time;
- \(Q\) is the event assigned to Present Alice's crossing.

The missing edge between Precursor Alice and Present Alice is therefore not another observer's worldline. It is a spacelike relation between different cohorts on one child time slice.

The parent horizon parameter labels both child time and child radius because the image is null:

\[
v_H
\longmapsto
(\eta,R)
=
\bigl(\Phi(v_H),\Phi(v_H)\bigr).
\tag{9}
\]

This resolves the false choice between parent time becoming child time and parent time becoming child space. Along a null surface, one parameter advances both.

---

## 5. Continue each cohort

Let cohort \(i\) cross at \(v_i\) and child time \(\tau_i\), with

\[
R_i=\Phi(v_i).
\tag{10}
\]

If it joins the child Hubble flow, it remains at fixed \(R_i\). Its reciprocal evolution is most carefully normalized as

\[
\boxed{
\frac{a(\tau)}{a(\tau_i)}
=
\frac{1}{r_i(\Delta\tau_i)}
}.
\tag{11}
\]

Every Alice calls her crossing scale one, while the shared global scale \(a(\tau_i)\) can differ between cohorts. The exact formation-boundary observer is a limit \(\tau_i\to0^+\).

---

## 6. Region correspondence

| Parent construction | Child causal-patch construction |
|---|---|
| Collapse / horizon-formation anchor | Initial anchor of the selected causal patch |
| Black-hole event-horizon generator | Particle-horizon null history \(R=\eta\) |
| Successive horizon-crossing cohorts | Points \(R=\eta=\Phi(v_H)\) |
| Reciprocal interior | FLRW region inside the causal boundary |
| Decreasing \(r_i(\Delta\tau_i)\) | Increasing \(a(\tau)/a(\tau_i)\) |
| \(r\to0\) | Infinite de Sitter-like future |

Bob's exterior supplies parent boundary data. This note does not identify it with a particular child region outside the causal patch.

---

## 7. The exact residual

Causal character and symmetry fix the form of the map, but not

\[
\boxed{\Phi(v_H)}.
\tag{12}
\]

The reciprocal ansatz supplies no information along the horizon because \(r=1\) at every crossing. A null horizon's intrinsic metric also supplies angular area but no proper length along its generator. Determining \(\Phi\) requires parent collapse dynamics, a null soldering law, or the completed scale geometry.

The horizon map is therefore no longer an unspecified four-dimensional transformation. In the radial spherical sector it has a known causal form and one undetermined parameterization.

---

## References

1. R. M. Wald, “The Thermodynamics of Black Holes,” *Living Reviews in Relativity* **4**, 6 (2001), [doi:10.12942/lrr-2001-6](https://doi.org/10.12942/lrr-2001-6).
2. A. Ashtekar and B. Krishnan, “Isolated and Dynamical Horizons and Their Applications,” *Living Reviews in Relativity* **7**, 10 (2004), [doi:10.12942/lrr-2004-10](https://doi.org/10.12942/lrr-2004-10).
3. T. M. Davis and C. H. Lineweaver, “Expanding Confusion,” *Publ. Astron. Soc. Aust.* **21**, 97–109 (2004), [arXiv:astro-ph/0310808](https://arxiv.org/abs/astro-ph/0310808).
4. Codex (OpenAI), [“Null Optics of the Reciprocal Interior”](note.html?src=null_optics_of_the_reciprocal_interior), this project.
5. G. Salehi, [GD I](gd1.html), this project.
