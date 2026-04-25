# Painlevé–Gullstrand Flow from the 5D de Sitter Embedding

## Abstract

In *Geometric Duality of Black-Hole Interiors*, the spatially flat FLRW metric is rewritten in Painlevé–Gullstrand form by introducing the areal radius

\[
r=a(t)\chi .
\]

This turns ordinary cosmological expansion into a radial flow geometry with shift function

\[
F=Hr .
\]

In this note we show that, in the pure de Sitter limit, the same flow form arises directly from the standard embedding of four-dimensional de Sitter spacetime as a hyperboloid in five-dimensional Minkowski space.

Starting from the embedded de Sitter hyperboloid, the induced metric in flat-slicing coordinates is

\[
ds^2=-dt^2+e^{2Ht}\left(d\chi^2+\chi^2d\Omega^2\right).
\]

Defining the areal radius \(r=e^{Ht}\chi\), this becomes

\[
ds^2=-dt^2+\left(dr-Hr\,dt\right)^2+r^2d\Omega^2.
\]

Thus the Painlevé–Gullstrand flow term used in the GD construction is not an independent assumption in the de Sitter sector. It is the areal-radius expression of the standard embedded de Sitter geometry.

---

# 1. Purpose of the note

The purpose of this note is narrow.

We want to show that the radial flow form used in Geometric Duality,

\[
F=Hr,
\]

already appears in ordinary de Sitter geometry when de Sitter space is written in areal-radius coordinates.

This is not yet the full GD construction.

It does not prove the full dust+\(\Lambda\) spacetime.

It does not prove the Horizon Triple Identity.

It does not prove the galaxy-scale square-root law.

It proves one clean geometric fact:

> The pure de Sitter hyperboloid, embedded in five-dimensional Minkowski space and written in areal-radius coordinates, naturally gives the Painlevé–Gullstrand flow form \(F=Hr\).

That is the whole job of this note.

---

# 2. Geometric setup

We work in units where

\[
c=1.
\]

Let the five-dimensional ambient space be flat Minkowski space with line element

\[
ds_5^2
=
-dX_0^2
+dX_1^2
+dX_2^2
+dX_3^2
+dX_4^2.
\]

Four-dimensional de Sitter spacetime is the hyperboloid

\[
-X_0^2
+X_1^2
+X_2^2
+X_3^2
+X_4^2
=
L^2.
\]

Here

\[
L=\sqrt{\frac{3}{\Lambda}}
\]

is the de Sitter curvature radius.

In pure de Sitter space,

\[
H=\frac{1}{L}
=
\sqrt{\frac{\Lambda}{3}}.
\]

A terminology note is important. Strictly speaking, we are not embedding the universe in “5D de Sitter.” We are embedding **4D de Sitter spacetime** as a hyperboloid inside **5D Minkowski space**.

So the clean hierarchy is:

\[
\text{5D Minkowski ambient space}
\quad\supset\quad
\text{4D de Sitter hyperboloid}.
\]

The de Sitter metric is the metric induced on that hyperboloid.

---

# 3. Flat slicing of the de Sitter hyperboloid

Let \(x^i\), with \(i=1,2,3\), be flat comoving spatial coordinates, and define

\[
\rho^2=\delta_{ij}x^i x^j.
\]

A standard flat-slicing parameterization of the de Sitter hyperboloid is

\[
X_0
=
L\sinh(Ht)
+
\frac{e^{Ht}}{2L}\rho^2,
\]

\[
X_i
=
e^{Ht}x_i,
\qquad i=1,2,3,
\]

\[
X_4
=
L\cosh(Ht)
-
\frac{e^{Ht}}{2L}\rho^2.
\]

These coordinates satisfy

\[
-X_0^2+\sum_{i=1}^{3}X_i^2+X_4^2=L^2.
\]

The metric on de Sitter spacetime is obtained by pulling back the ambient metric to the hyperboloid:

\[
g_{\mu\nu}
=
\eta_{AB}
\frac{\partial X^A}{\partial x^\mu}
\frac{\partial X^B}{\partial x^\nu}.
\]

Carrying out this substitution gives the induced metric

\[
ds^2
=
-dt^2
+
e^{2Ht}\delta_{ij}dx^i dx^j.
\]

In spherical comoving coordinates,

\[
\delta_{ij}dx^i dx^j
=
d\chi^2+\chi^2d\Omega^2,
\]

so

\[
ds^2
=
-dt^2
+
e^{2Ht}
\left(
d\chi^2+\chi^2d\Omega^2
\right).
\]

This is the spatially flat FLRW form of de Sitter space, with

\[
a(t)=e^{Ht}.
\]

Thus the embedded hyperboloid naturally gives the flat-slicing FLRW metric.

---

# 4. Introducing the areal radius

The areal radius is the radius \(r\) for which a spherical surface has area

\[
A=4\pi r^2.
\]

In the flat-slicing de Sitter metric,

\[
ds^2
=
-dt^2
+
a(t)^2
\left(
d\chi^2+\chi^2d\Omega^2
\right),
\]

the angular term is

\[
a(t)^2\chi^2d\Omega^2.
\]

Therefore the areal radius is

\[
r=a(t)\chi.
\]

For pure de Sitter,

\[
a(t)=e^{Ht},
\]

so

\[
r=e^{Ht}\chi.
\]

Differentiate:

\[
dr
=
\dot a\,\chi\,dt
+
a\,d\chi.
\]

Since

\[
\dot a=Ha,
\]

we have

\[
\dot a\,\chi
=
Ha\chi
=
Hr.
\]

Therefore

\[
dr
=
a\,d\chi
+
Hr\,dt.
\]

Solving for \(a\,d\chi\),

\[
a\,d\chi
=
dr-Hr\,dt.
\]

The angular term becomes

\[
a^2\chi^2d\Omega^2
=
r^2d\Omega^2.
\]

Substituting these into the metric gives

\[
ds^2
=
-dt^2
+
\left(dr-Hr\,dt\right)^2
+
r^2d\Omega^2.
\]

This is the desired Painlevé–Gullstrand flow form.

---

# 5. The PG flow term

The metric can now be written as

\[
ds^2
=
-dt^2
+
\left(dr-Hr\,dt\right)^2
+
r^2d\Omega^2.
\]

Equivalently,

\[
ds^2
=
-\left(1-H^2r^2\right)dt^2
-2Hr\,dt\,dr
+dr^2
+r^2d\Omega^2.
\]

This is de Sitter spacetime in areal-radius flow coordinates.

If we write the PG form as

\[
ds^2
=
-dt^2
+
\left(dr-F\,dt\right)^2
+
r^2d\Omega^2,
\]

then the flow function is

\[
F=Hr.
\]

If instead we choose the opposite sign convention,

\[
ds^2
=
-dt^2
+
\left(dr+F\,dt\right)^2
+
r^2d\Omega^2,
\]

then the same expanding patch corresponds to

\[
F=-Hr.
\]

The important geometric content is the radial-linear magnitude

\[
|F|=Hr.
\]

The sign records whether one writes the flow as outward expansion or inward infall. The de Sitter geometry itself contains the same flow structure either way.

---

# 6. Relation to the static de Sitter patch

The areal-radius metric above is not yet the usual static-patch form because it contains a cross term:

\[
-2Hr\,dt\,dr.
\]

The static de Sitter metric is usually written

\[
ds^2
=
-\left(1-H^2r^2\right)dT^2
+
\left(1-H^2r^2\right)^{-1}dr^2
+
r^2d\Omega^2.
\]

The PG-flow coordinates and the static coordinates describe the same de Sitter geometry. They are related by a time redefinition of the form

\[
dT
=
dt
+
\frac{Hr}{1-H^2r^2}\,dr,
\]

up to the sign convention chosen for the flow.

This comparison is useful because it shows that the PG form is not exotic. It is simply a horizon-regular flow chart for de Sitter space.

The de Sitter horizon appears where

\[
1-H^2r^2=0,
\]

namely

\[
r=H^{-1}=L.
\]

In the static chart this location appears as a coordinate horizon. In the PG-flow chart, the metric remains regular there.

This mirrors the familiar role of Painlevé–Gullstrand coordinates for Schwarzschild: the horizon is present geometrically, but the coordinate system does not break down at the horizon.

---

# 7. Geometric meaning

The flow term

\[
F=Hr
\]

has a simple meaning.

In the embedding coordinates,

\[
X_i=e^{Ht}x_i.
\]

Thus the physical spatial coordinates grow exponentially relative to the comoving labels \(x_i\). In spherical symmetry, this says

\[
r=e^{Ht}\chi.
\]

At fixed comoving label \(\chi\),

\[
\frac{dr}{dt}=Hr.
\]

So the PG flow term is not an extra force field added on top of de Sitter space. It is just the areal-radius expression of the exponential scaling already present in the embedded hyperboloid.

The same geometry can therefore be read in three equivalent ways:

\[
\text{hyperbolic motion on the embedded de Sitter hyperboloid}
\]

\[
\Longleftrightarrow
\]

\[
\text{flat-slicing FLRW expansion}
\]

\[
\Longleftrightarrow
\]

\[
\text{areal-radius PG flow with }F=Hr.
\]

This is the clean mathematical bridge used by GD.

---

# 8. Relation to Geometric Duality

GD1 uses the transformation

\[
r=a(t)R
\]

to rewrite the spatially flat FLRW metric as a Painlevé–Gullstrand flow metric.

The exact four-dimensional step is

\[
ds^2
=
-dt^2
+
a(t)^2
\left(dR^2+R^2d\Omega^2\right)
\]

\[
\Longrightarrow
\]

\[
ds^2
=
-dt^2
+
\left(dr-Hr\,dt\right)^2
+
r^2d\Omega^2.
\]

This note shows that, in the pure de Sitter limit, that same structure is generated by the standard five-dimensional embedding.

So the chain is:

\[
\text{5D Minkowski}
\quad\supset\quad
dS_4
\quad\Rightarrow\quad
\text{flat FLRW slicing}
\quad\Rightarrow\quad
\text{PG flow }F=Hr.
\]

This supports the geometric track of GD.

It means that the PG flow term is not merely a clever coordinate trick introduced after the fact. In the de Sitter sector, it is already present in the standard geometry once the intrinsic metric is expressed in areal-radius form.

---

# 9. What this result does and does not prove

This note proves an exact result for pure de Sitter space:

\[
a(t)=e^{Ht},
\qquad
H=\text{constant},
\qquad
F=Hr.
\]

The full GD framework includes matter, so instead of

\[
H^2=\frac{\Lambda}{3},
\]

one has

\[
H^2(t)
=
\frac{8\pi G}{3}
\left(
\rho_m a^{-3}(t)+\rho_\Lambda
\right).
\]

For general spatially flat FLRW, the areal-radius rewriting still gives

\[
F(r,t)=H(t)r.
\]

However, the simple 5D de Sitter hyperboloid no longer describes the full dust+\(\Lambda\) spacetime. Matter perturbation, shell matching, and the full GD duality map require additional structure.

Thus the correct conclusion is modest:

> The pure de Sitter sector of GD has a standard embedding origin. The matter-corrected GD geometry remains a further problem.

That limitation is not a weakness of the note. It is what makes the note clean.

---

# 10. Compact result

The entire calculation can be summarized as

\[
ds_5^2\big|_{dS_4}
=
-dt^2
+
e^{2Ht}
\left(
d\chi^2+\chi^2d\Omega^2
\right),
\]

with

\[
r=e^{Ht}\chi,
\]

so that

\[
ds_5^2\big|_{dS_4}
=
-dt^2
+
\left(dr-Hr\,dt\right)^2
+
r^2d\Omega^2.
\]

Therefore

\[
\boxed{F=Hr.}
\]

This is the central result of the note.

---

# 11. Conclusion

The standard five-dimensional embedding of four-dimensional de Sitter spacetime naturally produces the flat FLRW form of de Sitter geometry. When that same intrinsic metric is rewritten using areal radius, it becomes a Painlevé–Gullstrand flow metric with radial flow function

\[
F=Hr.
\]

This gives the geometric-duality program a clean intermediate result:

\[
\text{de Sitter embedding}
\quad\Rightarrow\quad
\text{FLRW expansion}
\quad\Rightarrow\quad
\text{PG flow}.
\]

The result is exact in the pure de Sitter sector and provides a firm geometric foothold for GD2, where the next task is to clarify how the curvature scale, causal horizon, and matching shell fit together as different presentations of the same underlying throat structure.
