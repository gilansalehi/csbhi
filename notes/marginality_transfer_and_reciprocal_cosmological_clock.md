# Marginality Transfer and the Reciprocal Cosmological Clock in Spherical Black-Hole–FLRW Matching

*Draft v0.1 — September 2026*

**Author:** Gilan Salehi.

**Status:** Conditional cross-sectional matching result. The calculation derives the clock required by reciprocal scale and marginality transfer; it does not establish the complete parent–child junction.

**Prerequisites:** [GD I](gd1.html); [The Remaining Horizon Clock](note.html?src=remaining_horizon_clock_map); [Horizon-Map Equation and Notation Audit](note.html?src=horizon_map_equation_and_notation_audit).

**Notation:** [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary).

## Abstract

Consider a spherically symmetric parent spacetime undergoing gravitational collapse and a child FLRW spacetime associated with it through a reciprocal scale relation

$$
a=\frac{1}{r},
$$

where \(r\) is a dimensionless parent-side collapse scale and \(a\) is the child cosmological scale factor. The reciprocal relation specifies which parent and child scales correspond, but does not by itself determine the synchronization between parent collapse time \(t_P\) and child cosmic proper time \(\tau_C\).

This note isolates a geometric constraint on that synchronization. In spherical symmetry the invariant

$$
\chi \equiv h^{ab}\nabla_a\mathcal R\nabla_b\mathcal R
=
1-\frac{2GM_{\rm MS}}{c^2\mathcal R}
$$

vanishes on a marginal sphere, where \(\mathcal R\) is areal radius and \(M_{\rm MS}\) is the Misner–Sharp mass. If corresponding parent and child two-spheres have continuous \(\mathcal R\) and \(M_{\rm MS}\), marginality on the parent side implies marginality on the child side. When the child geometry is FLRW, the corresponding sphere is therefore its apparent horizon,

$$
R_H^P=R_A^C
=
\frac{c}{\sqrt{H_C^2+kc^2/a^2}}.
$$

For a spatially flat child this gives \(H_C=c/R_H^P\). Combining this with \(a=1/r\) yields the horizon-required clock relation

$$
N_H\equiv\frac{d\tau_C}{dt_P}
=
-\frac{R_H^P}{c}\frac{d\ln r}{dt_P}.
$$

If \(r\rightarrow0\) while the parent marginal radius approaches a finite nonzero value \(R_\infty\), then \(\tau_C\rightarrow\infty\) and

$$
a(\tau_C)\sim e^{c\tau_C/R_\infty}.
$$

Thus finite parent collapse can correspond to an infinite, asymptotically exponential child future without fitting the clock to cosmological observations.

The result is conditional on the stated cross-sectional matching data. It does not establish a complete parent–child junction. In particular, a dynamical black-hole trapping horizon and an FLRW apparent-horizon worldtube can have different causal signatures, preventing their naive identification as a single hypersurface. The remaining problem is therefore to construct the parent-to-child event map and test the clock relation independently using the full junction geometry.

---

## 1. The missing clock in reciprocal black-hole cosmology

The reciprocal-interior construction begins from the scale identification

$$
a(\tau_C)=\frac{1}{r(t_P)}.
\tag{1}
$$

The normalization is chosen so that

$$
r=1,\qquad a=1
$$

at the parent-collapse/child-birth epoch, while subsequent evolution runs as

$$
r:1\rightarrow0,
\qquad
a:1\rightarrow\infty.
\tag{2}
$$

Equation (1) fixes a correspondence between scales. It does not fix a correspondence between clocks.

Let \(t_P\) denote a parent-side time associated with the collapsing matter or collapse foliation, and let \(\tau_C\) denote the proper cosmological time of the FLRW child. Define the horizon synchronization lapse

$$
N_H\equiv\frac{d\tau_C}{dt_P}.
\tag{3}
$$

The subscript \(H\) indicates that the synchronization is to be constrained through the horizon map. It does not imply that \(t_P\) is proper time along the horizon itself.

If \(N_H=1\), the two time parameters advance at equal rates. More generally, \(N_H\) may vary throughout the collapse.

The purpose of the present calculation is to determine what synchronization is required by the reciprocal relation together with invariant spherical matching geometry, without selecting \(N_H\) from \(H_0\), the age of the universe, \(\Omega_\Lambda\), or any other child observable.

---

## 2. Marginal spheres in spherical symmetry

Any spherically symmetric spacetime can locally be written as

$$
ds^2=h_{ab}(x)\,dx^a dx^b+\mathcal R^2(x)d\Omega^2,
\tag{4}
$$

where \(\mathcal R\) is the areal radius, defined invariantly by the area of each symmetry sphere,

$$
A=4\pi \mathcal R^2.
\tag{5}
$$

Introduce

$$
\chi\equiv h^{ab}\nabla_a\mathcal R\nabla_b\mathcal R.
\tag{6}
$$

The Misner–Sharp mass \(M_{\rm MS}\) is defined geometrically by

$$
\chi
=
1-\frac{2GM_{\rm MS}}{c^2\mathcal R}.
\tag{7}
$$

A marginal sphere satisfies

$$
\chi=0,
\tag{8}
$$

and hence

$$
\frac{2GM_{\rm MS}}{c^2\mathcal R}=1.
\tag{9}
$$

This is the local spherical trapping-horizon condition. It is distinct from the definition of an event horizon, which depends on the global causal structure of the spacetime.

For a dynamical collapse, the local marginal or trapping horizon is therefore the appropriate object for the present argument.

---

## 3. Marginality transfer

Consider corresponding round two-spheres \(S_P\) and \(S_C\) on the parent and child sides of a proposed spherical matching.

Assume that their areal radii agree,

$$
\mathcal R_P=\mathcal R_C\equiv \mathcal R_\Sigma,
\tag{10}
$$

and that their Misner–Sharp masses agree,

$$
M_{\rm MS}^P=M_{\rm MS}^C\equiv M_\Sigma.
\tag{11}
$$

The first relation follows from identifying the intrinsic spherical geometry: the same round two-sphere cannot have two different areas.

The second relation is stronger. In standard shell-free spherical matchings, mass equality is supplied by the full junction conditions rather than by intrinsic-metric continuity alone. For a null boundary the appropriate null-shell formalism must likewise be applied. We therefore state Equation (11) explicitly as a matching hypothesis rather than building it silently into the construction.

### Proposition 1: Marginality transfer

If Equations (10) and (11) hold for corresponding spherical cross-sections, then

$$
\chi_P=\chi_C.
\tag{12}
$$

Consequently,

$$
\chi_P=0
\quad\Longrightarrow\quad
\chi_C=0.
\tag{13}
$$

### Proof

From Equation (7),

$$
\chi_P
=
1-\frac{2GM_{\rm MS}^P}{c^2\mathcal R_P},
$$

and

$$
\chi_C
=
1-\frac{2GM_{\rm MS}^C}{c^2\mathcal R_C}.
$$

Using Equations (10) and (11),

$$
\chi_P
=
1-\frac{2GM_\Sigma}{c^2\mathcal R_\Sigma}
=
\chi_C.
$$

Therefore if the parent sphere is marginal,

$$
\chi_P=0,
$$

the child sphere is marginal as well,

$$
\boxed{\chi_C=0.}
\tag{14}
$$

The result depends only on spherical geometry and the stated matching data.

---

## 4. The FLRW corollary

Take the child spacetime to be FLRW,

$$
ds_C^2
=
-c^2d\tau_C^2
+
a^2(\tau_C)
\left[
\frac{dR^2}{1-kR^2}
+
R^2d\Omega^2
\right].
\tag{15}
$$

Its areal radius is

$$
\mathcal R=a(\tau_C)R.
\tag{16}
$$

Evaluating Equation (6) gives

$$
h^{ab}\nabla_a\mathcal R\nabla_b\mathcal R
=
1-
\frac{\mathcal R^2}{c^2}
\left(
H_C^2+\frac{kc^2}{a^2}
\right),
\tag{17}
$$

where

$$
H_C\equiv\frac{1}{a}\frac{da}{d\tau_C}.
\tag{18}
$$

The marginality condition therefore yields the FLRW apparent-horizon radius

$$
R_A^C
=
\frac{c}{
\sqrt{H_C^2+kc^2/a^2}
}.
\tag{19}
$$

By Proposition 1, a parent marginal sphere matched with continuous \(\mathcal R\) and \(M_{\rm MS}\) is also marginal on the FLRW side. Consequently,

$$
\boxed{
R_H^P=R_A^C.
}
\tag{20}
$$

Equation (20) is not an identification between an arbitrary black-hole radius and an arbitrary cosmological horizon. It follows specifically from matching a marginal parent sphere to a spherical FLRW cross-section while preserving the two quantities that determine spherical marginality.

For a spatially flat child,

$$
k=0,
$$

and Equation (20) reduces to

$$
R_H^P=\frac{c}{H_C}.
\tag{21}
$$

Thus

$$
\boxed{
H_C=\frac{c}{R_H^P}.
}
\tag{22}
$$

No observational cosmological parameter has entered this relation.

---

## 5. The reciprocal scale map and the required clock

Now impose the reciprocal scale relation

$$
a=\frac{1}{r}.
\tag{23}
$$

Taking logarithms,

$$
\ln a=-\ln r.
$$

Differentiating with respect to child cosmic time,

$$
H_C
=
\frac{d\ln a}{d\tau_C}
=
-\frac{d\ln r}{d\tau_C}.
\tag{24}
$$

Using

$$
N_H=\frac{d\tau_C}{dt_P},
$$

gives

$$
\frac{d}{d\tau_C}
=
\frac{1}{N_H}\frac{d}{dt_P},
$$

so

$$
H_C
=
-\frac{1}{N_H}
\frac{d\ln r}{dt_P}.
\tag{25}
$$

Equation (25) is purely kinematic. It says that the child Hubble rate is the negative fractional collapse rate of the reciprocal parent scale, converted between the two clocks by \(N_H\).

For a spatially flat child, Equation (22) supplies an independent horizon constraint on the same \(H_C\). Combining Equations (22) and (25),

$$
-\frac{1}{N_H}
\frac{d\ln r}{dt_P}
=
\frac{c}{R_H^P}.
$$

Hence

$$
\boxed{
N_H
=
-\frac{R_H^P}{c}
\frac{d\ln r}{dt_P}.
}
\tag{26}
$$

Equation (26) is the central clock relation of this note.

It should be interpreted carefully. It is the synchronization **required** if the reciprocal scale map and the cross-sectional horizon matching are both valid. It has not yet been independently recovered from the complete transverse junction geometry. That independent calculation remains a necessary test.

Nevertheless, Equation (26) is not obtained by fitting the child cosmology. Once the parent collapse history \(r(t_P)\), the associated marginal radius \(R_H^P(t_P)\), and the parent-to-child event map have been specified, its right-hand side is entirely parent-side geometric data.

---

## 6. Finite parent collapse and infinite child time

Equation (26) gives

$$
d\tau_C
=
-\frac{R_H^P}{c}\,d\ln r.
\tag{27}
$$

Assuming \(r\) is monotonic, integrate along the matched collapse history:

$$
\tau_C(r)-\tau_C(r_0)
=
-\frac{1}{c}
\int_{r_0}^{r}
R_H^P(r')\,d\ln r'.
\tag{28}
$$

Suppose now that

$$
r\rightarrow0
\tag{29}
$$

while the parent marginal radius approaches a finite nonzero limit,

$$
R_H^P\rightarrow R_\infty>0.
\tag{30}
$$

Then asymptotically,

$$
\tau_C
\sim
-\frac{R_\infty}{c}\ln r+\mathrm{const}.
\tag{31}
$$

Since

$$
\ln r\rightarrow-\infty
$$

as \(r\rightarrow0\),

$$
\boxed{
\tau_C\rightarrow\infty.
}
\tag{32}
$$

Thus a finite endpoint in the parent collapse parameter need not correspond to a finite endpoint in child cosmic proper time.

Solving Equation (31) for \(r\),

$$
r
\sim
r_\star e^{-c\tau_C/R_\infty}.
\tag{33}
$$

Using \(a=1/r\),

$$
\boxed{
a(\tau_C)
\sim
a_\star e^{c\tau_C/R_\infty}.
}
\tag{34}
$$

Correspondingly,

$$
H_C\rightarrow\frac{c}{R_\infty}.
\tag{35}
$$

Under the usual smoothness assumptions required for the constant-\(H\) limit, the geometry approaches the flat de Sitter form. The corresponding effective cosmological constant is

$$
\boxed{
\Lambda_{\rm eff}
=
\frac{3H_\infty^2}{c^2}
=
\frac{3}{R_\infty^2}.
}
\tag{36}
$$

The asymptotic exponential behavior does not depend on a particular power law for the parent collapse.

For example, suppose

$$
r\propto(t_s-t_P)^q
\tag{37}
$$

with any \(q>0\). Then

$$
-\frac{d\ln r}{dt_P}
=
\frac{q}{t_s-t_P},
$$

and Equation (26) gives

$$
N_H
\sim
\frac{qR_\infty}
{c(t_s-t_P)}.
\tag{38}
$$

Integration produces

$$
\tau_C
\sim
-\frac{qR_\infty}{c}
\ln(t_s-t_P).
$$

Meanwhile

$$
a\propto(t_s-t_P)^{-q}.
$$

Eliminating \(t_s-t_P\) again gives

$$
a\propto e^{c\tau_C/R_\infty}.
\tag{39}
$$

The collapse exponent cancels.

The asymptotic child behavior is therefore controlled by the finite limiting horizon scale rather than by the detailed power governing the parent approach to \(r=0\).

---

## 7. Surface-energy correction

The exact marginality-transfer result depends on continuity of Misner–Sharp mass.

To see directly how a shell modifies it, retain areal-radius continuity,

$$
\mathcal R_P=\mathcal R_C=\mathcal R_\Sigma,
$$

but permit a mass jump

$$
M_C=M_P+\Delta M_\Sigma.
\tag{40}
$$

If the parent sphere is marginal,

$$
\frac{2GM_P}{c^2\mathcal R_\Sigma}=1.
\tag{41}
$$

Then

$$
\chi_C
=
1-\frac{2GM_C}{c^2\mathcal R_\Sigma}
$$

becomes

$$
\chi_C
=
-\frac{2G\Delta M_\Sigma}{c^2\mathcal R_\Sigma}.
\tag{42}
$$

Therefore

$$
\boxed{
\Delta M_\Sigma=0
\quad\Longrightarrow\quad
\chi_C=0,
}
\tag{43}
$$

while a nonzero shell-energy contribution displaces the child matching sphere from exact marginality.

This separates two questions that should not be conflated.

The first is whether the cross-section carries a jump in enclosed gravitational mass. That controls marginality transfer.

The second is whether the full junction possesses transverse surface pressure or tension. That requires the remaining junction data and may remain nonzero even when the mass jump vanishes.

---

## 8. Why cross-sectional equality is not yet a complete horizon junction

Equations (20) and (26) concern matched spherical cross-sections. They do not establish that the complete parent trapping-horizon worldtube and the complete child apparent-horizon worldtube are one smooth hypersurface.

This distinction matters because the two worldtubes need not have the same causal signature.

A future outer black-hole trapping horizon satisfying the usual positive-energy conditions is generically spacelike while it is growing and becomes null in the stationary limit.

An FLRW apparent horizon can instead be timelike, null, or spacelike depending on the cosmic stress-energy.

The contrast is easiest to see for a spatially flat FLRW universe with constant equation of state

$$
p=w\rho c^2.
\tag{44}
$$

For

$$
R_A=\frac{c}{H},
$$

the Friedmann equations give

$$
\dot R_A
=
\frac{3}{2}c(1+w).
\tag{45}
$$

Along the apparent-horizon worldtube, the induced radial line element has sign proportional to

$$
3(1+w)(3w-1).
\tag{46}
$$

Consequently, for ordinary nonphantom matter,

$$
-1<w<\frac13,
$$

the FLRW apparent-horizon worldtube is timelike; it is null for \(w=1/3\) and \(w=-1\).

In particular, a matter-dominated FLRW apparent horizon is timelike, whereas an accreting future outer black-hole trapping horizon is generically spacelike.

A single smooth matching hypersurface cannot possess different causal signatures when approached from its two sides.

Therefore the result of Proposition 1 should not be interpreted as proving the naive worldtube identity

$$
\mathcal H_P=\mathcal H_C.
$$

Instead, it establishes a correspondence between marginal **cross-sections**:

$$
S_H^P
\longleftrightarrow
S_A^C.
\tag{47}
$$

The outstanding construction must determine how these cross-sections are associated through the parent collapse and whether a null, mixed-signature, shell-supported, or otherwise dynamical throat provides the required four-dimensional geometry.

This is not a peripheral detail. It is the central remaining junction problem.

---

## 9. The independent-clock test

Equation (26) was obtained through two ingredients:

$$
a=\frac1r
$$

and

$$
R_H^P=R_A^C.
$$

It is therefore the clock synchronization required by those assumptions.

A complete derivation requires an independent determination of the same synchronization from the remaining geometric data.

The appropriate test is:

$$
\boxed{
N_H^{(\mathrm{horizon})}
\stackrel{?}{=}
N_H^{(\mathrm{junction})}.
}
\tag{48}
$$

The left-hand side is Equation (26),

$$
N_H^{(\mathrm{horizon})}
=
-\frac{R_H^P}{c}
\frac{d\ln r}{dt_P}.
\tag{49}
$$

The right-hand side must be obtained independently from the dynamical collapse geometry: for example from null-generator normalization, transverse curvature, optical expansion, shell kinematics, or another invariant junction construction.

No child observable should be used to choose this function.

If the two calculations agree over an entire nontrivial collapse history, the reciprocal clock has been derived rather than fitted.

If they disagree, the discrepancy identifies a failure in at least one of the assumptions entering the construction: the collapse benchmark, the parent-to-child event map, the reciprocal spatial identification, the zero-shell-energy condition, the assumed child stress-energy, or the proposed throat geometry.

This comparison is therefore a falsifiable mathematical test of the construction itself.

---

## 10. Discussion

The central result of this note is elementary in form:

$$
\mathcal R_P=\mathcal R_C,
\qquad
M_P=M_C
$$

imply

$$
\chi_P=\chi_C.
$$

A marginal parent sphere therefore maps to a marginal child sphere.

For an FLRW child, this immediately identifies the child cross-section as its apparent horizon. In the spatially flat case,

$$
R_H^P=\frac{c}{H_C}.
$$

The reciprocal ansatz then converts this geometrical horizon relation into a clock relation,

$$
N_H
=
-\frac{R_H^P}{c}
\frac{d\ln r}{dt_P}.
$$

A finite nonzero limiting parent horizon radius in turn maps \(r\rightarrow0\) to an infinite child proper-time interval and an asymptotically exponential expansion.

The individual ingredients are standard. Misner–Sharp mass, marginal trapping surfaces, FLRW apparent horizons, and spherical junction conditions are established tools of general relativity. The marginality-transfer lemma itself is a direct consequence of their definitions and should not be presented as a fundamentally new theorem of spherical gravity.

The proposed contribution is instead their use as a constraint on a reciprocal parent-collapse/child-cosmology map, particularly the emergence of the horizon-required synchronization in Equation (26) and its asymptotic consequence.

The calculation also exposes a structural obstruction. Cross-sectional marginality can be transferred without difficulty, but the corresponding horizon worldtubes need not have compatible causal signatures. Thus the geometric map cannot simply identify the entire evolving black-hole trapping horizon with the entire FLRW apparent horizon.

The next problem is correspondingly sharper than the original question of “matching a black hole to a universe.” Given a specified dynamical spherical collapse, one must construct the event map between marginal cross-sections and determine the child clock independently from the full junction geometry.

That calculation decides whether Equation (26) is a physical synchronization law or only the synchronization required by the reciprocal ansatz.

---

## 11. Conclusion

In spherical symmetry, marginality is determined entirely by the invariant compactness combination

$$
\frac{2GM_{\rm MS}}{c^2R}.
$$

Consequently, corresponding spherical cross-sections that preserve both areal radius and Misner–Sharp mass preserve marginality.

For a parent marginal surface and an FLRW child,

$$
\boxed{
R_H^P=R_A^C.
}
$$

For a spatially flat child,

$$
\boxed{
H_C=\frac{c}{R_H^P}.
}
$$

Combining this with the reciprocal scale relation

$$
a=\frac1r
$$

gives

$$
\boxed{
N_H
=
\frac{d\tau_C}{dt_P}
=
-\frac{R_H^P}{c}
\frac{d\ln r}{dt_P}.
}
$$

If

$$
R_H^P\rightarrow R_\infty>0
$$

as

$$
r\rightarrow0,
$$

then

$$
\boxed{
\tau_C\rightarrow\infty,
\qquad
a\sim e^{c\tau_C/R_\infty},
\qquad
\Lambda_{\rm eff}=\frac{3}{R_\infty^2}.
}
$$

These results follow without calibrating the clock to the observed cosmological expansion.

They establish a conditional horizon map between parent marginal cross-sections and the child FLRW geometry. They do not yet establish the complete parent–child spacetime junction.

The decisive remaining calculation is to derive \(N_H\) independently from the dynamical collapse and junction geometry and compare it with the expression above.

---

## References

1. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964). [doi:10.1103/PhysRev.136.B571](https://doi.org/10.1103/PhysRev.136.B571).

2. S. A. Hayward, “General Laws of Black-Hole Dynamics,” *Physical Review D* **49**, 6467–6474 (1994). [arXiv:gr-qc/9303006](https://arxiv.org/abs/gr-qc/9303006).

3. W. Israel, “Singular Hypersurfaces and Thin Shells in General Relativity,” *Il Nuovo Cimento B* **44**, 1–14 (1966). [doi:10.1007/BF02710419](https://doi.org/10.1007/BF02710419).

4. C. Barrabès and W. Israel, “Thin Shells in General Relativity and Cosmology: The Lightlike Limit,” *Physical Review D* **43**, 1129–1142 (1991). [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).

5. V. Faraoni, “Cosmological Apparent and Trapping Horizons,” *Physical Review D* **84**, 024003 (2011). [doi:10.1103/PhysRevD.84.024003](https://doi.org/10.1103/PhysRevD.84.024003).

6. G. Salehi, “Geometric Duality: Conformal Scaling of Black Hole Interiors,” preprint (2026). [doi:10.5281/zenodo.21864669](https://doi.org/10.5281/zenodo.21864669).
