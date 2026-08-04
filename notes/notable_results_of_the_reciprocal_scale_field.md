# The Notable Results of the Reciprocal Scale-Field Investigation

*A conceptual guide to what the calculation established, what it suggests, and how to picture it.*

**Author:** Codex (OpenAI), synthesizing calculations by Claude (Anthropic), developed with G. Salehi.

**Date:** 2026-08-04.

**Status:** Synthesis note. The radial identities and minimal-coupling obstruction are exact within their stated models. The conformal-compensator and five-dimensional interpretations are research directions, not completed constructions.

**Prerequisites:** [GD I](gd1.html); [RI I: *Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior).

**Source calculation:** [*The Scale Field of the Reciprocal Interior (Crunch 1)*](note.html?src=scale_field_of_the_reciprocal_interior).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

---

## Abstract

The reciprocal ansatz

\[
a=\frac1r
\]

can be written as a logarithmic scale relation,

\[
\sigma\equiv\ln a=-\ln r.
\]

This simple substitution produces several notable results. The reciprocal involution becomes the reflection \(\sigma\mapsto-\sigma\); the black-hole event horizon becomes the fixed surface \(\sigma=0\); and every finite horizon-normalized depth \(r>0\) receives one finite scale value. When the logarithmic profile is inserted into the scalar wave operator of a Schwarzschild exterior, the black-hole mass term cancels exactly and the remaining source has exponential form. A minimally coupled canonical scalar cannot carry this nonconstant profile while leaving the exterior exactly Schwarzschild or Kottler, which rules out the simplest interpretation of scale as ordinary scalar matter.

The calculation therefore points toward a third interpretation between “new material field” and “mere notation”: scale may be a **conformal compensator**. In that description the multiplicative scale field calibrates the local units used to measure the metric, and ordinary Einstein gravity appears after fixing the scale gauge. A five-dimensional completion could instead make logarithmic scale a geometric direction whose four-dimensional projections produce the parent and child descriptions.

None of these interpretations yet derives \(a=1/r\). The achievement is narrower and useful: the investigation identifies the mathematical form of the scale coordinate, eliminates one inadequate dynamical realization, and isolates the next calculation capable of distinguishing gauge scale from higher-dimensional geometry.

---

## 1. One reciprocal relation becomes a straight scale line

The project uses \(r\) for Bob's horizon-normalized areal coordinate along Alice's trajectory. Restoring the parent Schwarzschild radius \(R_S\),

\[
r=\frac{R}{R_S},
\]

where \(R\) is the corresponding dimensional areal radius in this calculation. The reciprocal ansatz and logarithmic scale coordinate are

\[
a=\frac1r=\frac{R_S}{R},
\qquad
\sigma=\ln a=-\ln r=\ln\!\left(\frac{R_S}{R}\right).
\tag{1}
\]

The entire positive radial half-line becomes the ordinary real line in \(\sigma\):

| Bob's radial description | Logarithmic scale description |
|---|---|
| \(r\to\infty\) | \(\sigma\to-\infty\) |
| \(r=1\) | \(\sigma=0\) |
| \(r\to0^+\) | \(\sigma\to+\infty\) |

The reciprocal operation is now just

\[
r\mapsto\frac1r
\qquad\Longleftrightarrow\qquad
\sigma\mapsto-\sigma.
\tag{2}
\]

### How to picture it

The logarithm unfolds a multiplicative relation into an additive direction. Equal steps in \(\sigma\) represent equal *ratios* of scale rather than equal increments of radius. Moving from \(r=1\) to \(r=1/2\) is the same scale-distance as moving from \(r=1/2\) to \(r=1/4\).

This is why \(\sigma\) is a natural candidate for a scale coordinate. The horizon is its origin, not its endpoint.

The density of the real number line is not, by itself, what makes this work. The important facts are that Equation (1) is continuous, differentiable, and one-to-one for every \(r>0\). Every finite depth has exactly one finite scale value. The surface \(r=0\) does not receive another finite value; it lies at \(\sigma=+\infty\), matching the singularity-deferral picture of GD I.

---

## 2. The horizon fixes the scale origin

At the parent black-hole event horizon,

\[
r=1,
\qquad
a=1,
\qquad
\sigma=0.
\tag{3}
\]

This is stronger than choosing an arbitrary cosmological normalization because the reference surface has geometric meaning: it is the black-hole event horizon. Once that surface is chosen, the reciprocal ansatz supplies an absolute origin for logarithmic scale along the modeled trajectory.

It is important to state exactly what the horizon does **not** fix. For the reciprocal profile,

\[
\left.\frac{d\sigma}{dR}\right|_{R=R_S}=-\frac1{R_S}.
\tag{4}
\]

Thus \(\sigma\) vanishes at the horizon but does not stop changing there. The horizon is the **zero of the scale coordinate**, not a surface on which scale dynamics freeze.

### Interpretation

The horizon gives the scale field the equivalent of a marked zero on a ruler. The remaining problem is dynamical: what law makes the scale follow Equation (1) away from that mark?

---

## 3. The Schwarzschild mass cancels from the scale equation

Consider the static spherical line element

\[
ds^2=-f(R)\,dt^2+\frac{dR^2}{f(R)}+R^2d\Omega^2
\]

and the logarithmic profile in Equation (1). Its scalar wave operator is

\[
\Box\sigma
=-\frac{f+Rf'}{R^2}.
\tag{5}
\]

For Schwarzschild,

\[
f(R)=1-\frac{R_S}{R}.
\]

The two mass-dependent terms in \(f+Rf'\) cancel exactly:

\[
f+Rf'=1.
\]

Therefore

\[
\boxed{
\Box\sigma
=-\frac1{R^2}
=-\frac{e^{2\sigma}}{R_S^2}
}.
\tag{6}
\]

For Kottler spacetime,

\[
f(R)=1-\frac{R_S}{R}-\frac{\Lambda R^2}{3},
\]

the same calculation gives

\[
\boxed{
\Box\sigma
=\Lambda-\frac{e^{2\sigma}}{R_S^2}
}.
\tag{7}
\]

### Why this is notable

The background contains the black-hole mass, yet the local differential equation obeyed by its logarithmic areal scale does not retain an explicit Schwarzschild mass term. The mass survives only through the normalization length \(R_S\).

This does not derive a new field equation. Equation (6) is an exact identity obtained by applying the existing wave operator to a chosen geometric function. Its value is diagnostic: it reveals the particularly simple source that any scale-field theory would need to reproduce.

---

## 4. Spherical geometry produces an exponential source

If one temporarily treats \(\sigma\) as a probe scalar obeying

\[
\Box\sigma=U_{,\sigma},
\]

Equation (6) reconstructs

\[
U_{,\sigma}
=-\frac{e^{2\sigma}}{R_S^2},
\qquad
U(\sigma)
=U_0-\frac{e^{2\sigma}}{2R_S^2}.
\tag{8}
\]

This is a Liouville-type exponential potential.

Two ingredients explain its form:

1. Translating logarithmic scale, \(\sigma\mapsto\sigma+c\), makes exponentials the natural functions that transform by an overall weight.
2. The radial operator carries the area measure of a two-sphere, and that quadratic area scaling fixes the exponent \(2\) in Equation (8).

The exponential is therefore not a random curve fitted to the answer. It reflects the combination of logarithmic scale and spherical geometry. However, the potential was reconstructed *from* the background; the calculation does not yet establish it as a fundamental potential.

### Interpretation

The scale profile is geometrically legible to a scalar equation. The calculation tells us the language in which the reciprocal relation wants to be written, without yet deciding whether that language describes matter, gauge, or an extra dimension.

---

## 5. Scale is not an ordinary minimally coupled scalar hair

The simplest dynamical interpretation gives \(\sigma\) a canonical kinetic term and lets its stress-energy gravitate. That model encounters an exact obstruction if the exterior must remain in the one-function Schwarzschild/Kottler form.

For that metric,

\[
G^t{}_t=G^R{}_R.
\]

Einstein's equations therefore require the same equality for the source. A static canonical scalar instead gives

\[
T^R{}_R-T^t{}_t=f\left(\frac{d\sigma}{dR}\right)^2.
\tag{9}
\]

Away from the horizon, \(f\ne0\), so exact Schwarzschild/Kottler form requires

\[
\frac{d\sigma}{dR}=0.
\]

That contradicts the reciprocal profile in Equation (4).

### What this rules out

The following three requirements cannot all hold simultaneously:

1. \(\sigma\) is an ordinary minimally coupled canonical scalar;
2. \(\sigma\) has the nonconstant reciprocal profile;
3. the exterior remains exactly Schwarzschild/Kottler.

The result does **not** prove that scale is mere notation. A scalar can backreact and produce a different black-hole metric, and nonminimal or conformal coupling changes its stress tensor. The result eliminates only the most literal matter-field realization while preserving the exact exterior approximation.

### Interpretation

Scale does not behave like ordinary scalar hair laid over an otherwise unchanged black hole. If it is physical, it must be part of the gravitational geometry more intimately than that.

---

## 6. Conformal compensation supplies a third interpretation

The investigation began with a fork:

- scale is a new physical scalar field; or
- scale is geometric bookkeeping.

Conformal geometry supplies a third possibility: scale can be a **gauge compensator**. It can participate in the metric's local calibration without behaving as an additional material substance.

Because \(\sigma\) is logarithmic, the naturally conformal variable is multiplicative. Define

\[
\chi
=\chi_H e^{-\sigma}
=\chi_H r,
\tag{10}
\]

where \(\chi_H\) sets the reference scale at the horizon. Under a local conformal transformation,

\[
g_{\mu\nu}\mapsto\Omega^2g_{\mu\nu},
\qquad
\chi\mapsto\Omega^{-1}\chi.
\tag{11}
\]

The combination

\[
\widehat g_{\mu\nu}
=\frac{\chi^2}{\chi_H^2}g_{\mu\nu}
\tag{12}
\]

is unchanged. A conformal-compensator action is built schematically from

\[
\chi^2\mathcal R,
\qquad
(\nabla\chi)^2,
\qquad
\chi^4,
\]

with coefficients fixed so the complete action respects Equation (11). Fixing the gauge \(\chi=\text{constant}\) produces the Einstein description with a fixed Planck scale.

This corrects an earlier phrase. Einstein gravity is not recovered merely because \(\sigma=0\) at one surface. It is recovered in an **Einstein gauge** in which the compensator is fixed throughout the region being described.

### How to picture conformal coupling

A minimally coupled scalar is like a temperature painted onto spacetime: it has a value at each point and contributes energy.

A conformal compensator is closer to a ruler calibration painted onto spacetime. Changing the calibration changes the metric's numerical lengths at the same time, leaving invariant physical ratios unchanged. The horizon condition \(r=a=1\) fixes the reference calibration.

This makes the option especially well matched to CSBHI. The project already asserts that the same geometry is measured at reciprocal scales by different descriptions. A compensator is the standard mathematical object for keeping such descriptions physically equivalent under local changes of scale.

### The unresolved physical fork

- If \(\chi\) is pure gauge, its variation introduces no independent scalar particle. The scale profile is genuine geometric structure but not new matter.
- If \(\chi\) retains a physical degree of freedom, its gradients and coupling alter gravity and may produce a varying effective Planck scale.

The conformally coupled field equations decide which interpretation is available. The minimal-coupling calculation cannot.

---

## 7. A possible five-dimensional reading

The logarithmic coordinate also suggests a geometric extension:

\[
\text{multiplicative scale }a
\quad\longrightarrow\quad
\text{additive coordinate }\sigma=\ln a.
\]

In a five-dimensional construction, \(\sigma\) could be an actual geometric direction rather than a four-dimensional scalar. Alice's expanding four-geometry would then arise as an induced metric on a hypersurface or trajectory through the scale direction.

This possibility gives precise content to the intuition that four-dimensional Weyl curvature may be downstream of a larger geometry. Gauss–Codazzi projection of five-dimensional gravity produces four-dimensional Einstein terms together with extrinsic-curvature corrections and a projected five-dimensional Weyl term. That projected term is the established mathematical location where bulk geometry can appear as otherwise unexplained four-dimensional tidal curvature.

No such five-dimensional CSBHI metric has yet been constructed. The logarithmic coordinate identifies a promising variable for that construction; it does not supply the construction itself.

---

## 8. A dynamic horizon would contribute to the scale flow

For a parent black hole whose Schwarzschild radius changes with an exterior time parameter,

\[
\sigma=\ln\!\left(\frac{R_S}{R}\right)
\]

has the differential form

\[
d\sigma=d\ln R_S-d\ln R.
\tag{13}
\]

This separates two effects:

- \(-d\ln R\): Alice's inward motion relative to the center;
- \(d\ln R_S\): growth or evaporation of the parent horizon.

Equation (13) does not establish that Hawking evaporation is the completion of collapse under reciprocal scaling. It shows exactly where that hypothesis would enter. Testing it requires a horizon map relating the exterior evolution parameter to Alice's proper time.

### Interpretation

The original ansatz tracked scale along Alice's motion through an approximately fixed black hole. The logarithmic form is ready for the more realistic problem in which the black hole itself evolves.

---

## 9. Results ledger

| Statement | Status | Meaning |
|---|---|---|
| \(\sigma=\ln a=-\ln r\) turns reciprocity into reflection | Exact algebra | Multiplicative scale becomes an additive coordinate |
| The horizon is \(\sigma=0\) | Exact within the ansatz | The black-hole event horizon anchors the scale origin |
| Every \(r>0\) has one finite \(\sigma\) | Exact | Every finite depth receives one smooth scale value |
| The Schwarzschild mass term cancels from \(\Box\sigma\) | Exact probe identity | The logarithmic radial scale obeys an unusually simple equation |
| The source is proportional to \(e^{2\sigma}\) | Exact probe identity | Logarithmic scale and spherical area combine into Liouville form |
| A canonical scalar cannot preserve exact Kottler with this profile | Exact within minimal coupling | Scale is not ordinary scalar hair on an unchanged exterior |
| \(\chi=\chi_H e^{-\sigma}\) may be a conformal compensator | Candidate interpretation | Scale may be gauge geometry rather than matter |
| \(\sigma\) may be a fifth coordinate | Candidate interpretation | Parent and child may be projections of one scale-extended geometry |
| Evaporation may complete the scale trajectory | Open hypothesis | Requires a dynamic horizon and an exterior/interior clock map |

---

## 10. The next decisive calculation

The next calculation should compare two conformal realizations rather than continue refining the minimally coupled scalar that Equation (9) already excludes.

1. **Conformally coupled physical scalar.** Keep the Einstein–Hilbert term and add the standard curvature coupling \(\chi^2\mathcal R\). Test whether \(\chi/\chi_H=r\) can coexist with a regular black-hole event horizon and acceptable asymptotics.
2. **Weyl compensator.** Let \(\chi\) supply the gravitational scale and treat Equation (11) as gauge symmetry. Determine whether the reciprocal profile is a gauge description of an ordinary Einstein solution or leaves a gauge-invariant residue.
3. **Five-dimensional lift.** If neither four-dimensional realization produces the required parent/child geometry, use \(\sigma\) as a scale coordinate and derive the induced four-dimensional equations, including the projected Weyl term.

The discriminating question is not merely whether one can write \(\chi(r)\). It is:

> Does the reciprocal scale introduce a new observable degree of freedom, or does it reorganize one geometry into two conformally related descriptions with the horizon fixing their common normalization?

---

## Conclusion

The scale-field investigation has not yet produced a new fundamental action, but it has substantially narrowed the search.

The reciprocal ansatz becomes geometrically transparent in logarithmic scale. Its horizon is a reflection point, its radial wave equation loses the explicit Schwarzschild mass term, and its source takes the exponential form naturally associated with logarithmic scale and spherical area. The simplest attempt to treat that scale as ordinary scalar matter fails to preserve the exterior geometry. Conformal compensation then supplies a more fitting interpretation: scale may calibrate the metric rather than sit inside it as another substance.

That is the notable result. The investigation has moved the question from “Can \(a=1/r\) be renamed as a field?” to the sharper problem:

\[
\boxed{
\text{Is reciprocal scale a gauge of four-dimensional geometry, or a direction of a larger one?}
}
\]

The answer belongs to the conformally coupled and five-dimensional calculations that follow.

---

## References

1. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html), GD I.
2. Codex (OpenAI), [*Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior), RI I.
3. Claude (Anthropic), [*The Scale Field of the Reciprocal Interior (Crunch 1)*](note.html?src=scale_field_of_the_reciprocal_interior), this project.
4. C. G. Callan, S. Coleman, and R. Jackiw, “A New Improved Energy-Momentum Tensor,” *Annals of Physics* **59**, 42–73 (1970), [doi:10.1016/0003-4916(70)90394-5](https://doi.org/10.1016/0003-4916(70)90394-5).
5. G. Anastasiou, I. J. Araya, and A. Chakraborty, “Weyl-invariant scalar-tensor gravities from purely metric theories,” *JHEP* **09**, 134 (2023), [arXiv:2307.13531](https://arxiv.org/abs/2307.13531).
6. T. Shiromizu, K. Maeda, and M. Sasaki, “The Einstein Equations on the 3-Brane World,” *Physical Review D* **62**, 024012 (2000), [arXiv:gr-qc/9910076](https://arxiv.org/abs/gr-qc/9910076).
7. G. Dotti, R. J. Gleiser, and C. Martínez, “Static black hole solutions with a self interacting conformally coupled scalar field,” *Physical Review D* **77**, 104035 (2008), [arXiv:0710.1735](https://arxiv.org/abs/0710.1735).
