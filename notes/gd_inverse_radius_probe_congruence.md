# The Inverse-Radius Interior and Alice's Probe Congruence

## A technical note on the geometric-duality map

> **Notation:** This note predates GD1's final convention. Its \(u=\rho_B/\rho_H\) is the quantity now called Bob's horizon-normalized \(r\); \(a_A\) is now \(a\); \(\chi\) is now \(R\); and \(\mathcal R_A\) is now \(\bar R\). The underlying calculation is unchanged.

## Abstract

This note gives a precise mathematical realization of the central kinematic claim in Geometric Duality (GD): a future-directed infall variable that decreases toward zero can serve as an interior time coordinate, while its reciprocal becomes an isotropic cosmological scale factor.

Let

\[
u(\tau)\equiv \frac{\rho_B(\tau)}{\rho_H},
\qquad
a_A(\tau)\equiv \frac{1}{u(\tau)},
\]

where \(\rho_B\) is the exterior areal-radius label assigned to Alice's trajectory, \(\rho_H\) is the horizon radius, and \(\tau\) is Alice's future-directed proper time. Then

\[
\dot u=-H_Au,
\qquad
H_A\equiv\frac{\dot a_A}{a_A}.
\]

If Alice's interior is the spatially flat FLRW geometry with scale factor \(a_A\), its metric may be written directly in the inverse-scale coordinate \(u\) as

\[
ds_A^2
=
\frac{1}{u^2}
\left[
-\frac{du^2}{H_A(u)^2}
+d\vec\chi^{\,2}
\right].
\]

An initially comoving probe cloud then expands isotropically with expansion scalar \(\Theta=3H_A\), zero shear, and proper separations \(\ell_A\propto1/u\). For a dust + \(\Lambda\) expansion history, \(u=0\) is reached only at infinite proper time and all curvature invariants approach finite de Sitter values.

This construction is exact once the GD identification \(a_A=1/u\) and the Alice FLRW metric are specified. It is not, however, a coordinate or ordinary conformal transformation of the vacuum Schwarzschild interior. Establishing the horizon map between the exterior black-hole geometry and this Alice interior remains the principal open junction problem.

---

## 1. The question

Consider Alice in future-directed free fall toward a black-hole interior. Bob labels Alice's exterior areal radius by \(\rho_B\), with

\[
\rho_B=\rho_H
\]

at the horizon and \(\rho_B\to0\) toward the conventional Schwarzschild endpoint.

GD proposes a stronger interior interpretation than the ordinary Schwarzschild-coordinate role swap. The decreasing exterior-radius label is promoted to an Alice-frame temporal variable, while the reciprocal radius supplies the scale of Alice's spatial geometry.

The operational question is:

> If Alice releases freely falling probes around herself, does she measure their spatial separation growing isotropically at the cosmological rate?

The calculation below answers yes within the GD interior metric and identifies precisely what must still be established to connect that metric to the black-hole exterior.

---

## 2. Separate the three radial quantities

The notation must distinguish quantities that were previously all denoted by \(r\).

### 2.1 Exterior areal radius

\[
\rho_B
\]

is the Schwarzschild or Kottler areal-radius label assigned to Alice's exterior trajectory. Symmetry spheres in the exterior have area \(4\pi\rho_B^2\).

### 2.2 Inverse-scale time

Define the dimensionless variable

\[
u(\tau)
\equiv
\frac{\rho_B(\tau)}{\rho_H}.
\]

The horizon is normalized to \(u=1\), and the proposed infinite interior future corresponds to \(u\to0\).

### 2.3 Alice-frame areal distance

If \(\chi\) is an Alice-frame comoving radial coordinate, then the Alice-frame areal distance is

\[
\mathcal R_A(\tau,\chi)
=
a_A(\tau)\chi.
\]

This is not the same geometric variable as \(\rho_B\). GD relates them through a duality map rather than identifying them as one coordinate in one chart.

---

## 3. The inverse-radius map

The GD identification is

\[
\boxed{
a_A(\tau)=\frac{1}{u(\tau)}
}
\]

or, before horizon normalization,

\[
a_A(\tau)=\frac{\rho_H}{\rho_B(\tau)}.
\]

Both Bob's and Alice's clocks remain future-directed. The opposite signs arise from differentiating the reciprocal:

\[
H_A
\equiv
\frac{\dot a_A}{a_A}
=
-\frac{\dot u}{u}.
\]

Therefore,

\[
\boxed{
\dot u=-H_Au.
}
\]

No time reversal \(\tau\mapsto-\tau\) is required.

---

## 4. Alice's metric in inverse-scale time

Take Alice's interior metric to be spatially flat FLRW:

\[
ds_A^2
=
-d\tau^2
+a_A(\tau)^2d\vec\chi^{\,2}.
\]

Since

\[
a_A=\frac1u,
\qquad
d\tau=-\frac{du}{uH_A(u)},
\]

the same metric becomes

\[
\boxed{
ds_A^2
=
\frac{1}{u^2}
\left[
-\frac{du^2}{H_A(u)^2}
+d\vec\chi^{\,2}
\right].
}
\]

This displays the GD interpretation directly:

- the finite coordinate interval \(0<u\le1\) labels Alice's post-horizon future;
- the Alice-frame spatial length scale is \(1/u\);
- the metric conformal factor is \(1/u^2\);
- decreasing \(u\) and increasing \(a_A\) are the same future-directed evolution.

The distinction between the length scale and the metric conformal factor is important: \(1/u\) multiplies physical lengths, while \(1/u^2\) multiplies the metric.

---

## 5. The probe-cloud calculation

### 5.1 Comoving geodesics

Consider Alice and nearby probes at fixed comoving positions \(\vec\chi\). Their four-velocity in the \(u\)-coordinate system is

\[
U^\mu
=
(-uH_A,0,0,0),
\]

where the negative sign indicates that \(u\) decreases toward Alice's future. It is correctly normalized:

\[
g_{\mu\nu}U^\mu U^\nu=-1.
\]

These comoving worldlines are geodesic for a homogeneous perfect-fluid FLRW metric.

### 5.2 Proper separation

Let two probes have a fixed comoving separation \(\delta\vec\chi\). Their Alice-frame proper separation is

\[
\ell_A(u)
=
\sqrt{g_{ij}\delta\chi^i\delta\chi^j}
=
\frac{|\delta\vec\chi|}{u}.
\]

Consequently,

\[
\boxed{
\frac{\dot\ell_A}{\ell_A}
=
-\frac{\dot u}{u}
=
H_A.
}
\]

The result is independent of the orientation of \(\delta\vec\chi\).

For example, two probes at the same \(u\) and comoving radius \(\chi_0\), but separated by a small angle \(\delta\theta\), have

\[
\ell_\perp(u)
\simeq
\frac{\chi_0\delta\theta}{u}.
\]

They separate as \(1/u\), even though the corresponding transverse separation contracts in the vacuum Schwarzschild interior.

### 5.3 Expansion, shear, and vorticity

The expansion scalar is

\[
\boxed{
\Theta
\equiv
\nabla_\mu U^\mu
=
3H_A.
}
\]

Spatial isotropy gives

\[
\boxed{
\sigma_{\mu\nu}=0,
\qquad
\omega_{\mu\nu}=0.
}
\]

Thus the Alice-frame probe cloud undergoes genuine isotropic expansion rather than one-directional tidal stretching.

### 5.4 Relative acceleration

The geodesic-deviation equation reduces to

\[
\frac{D^2\xi^{\hat i}}{D\tau^2}
=
\frac{\ddot a_A}{a_A}\,
\xi^{\hat i}
\]

for each orthonormal spatial direction \(\hat i\). The same coefficient appears in all three directions.

This distinguishes GD's Alice-frame congruence from the vacuum Schwarzschild tidal eigenvalues, which stretch one spatial direction and compress two.

---

## 6. Dust + \(\Lambda\) dynamics

For a spatially flat dust + \(\Lambda\) interior normalized by \(a_A=1\) at \(u=1\), the Friedmann equation is

\[
H_A(u)^2
=
H_0^2
\left(
\Omega_m u^3
+\Omega_\Lambda
\right).
\]

The factor \(u^3\) follows directly from

\[
\rho_m a_A^{-3}
=
\rho_m u^3.
\]

Equivalently,

\[
H_A(u)^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}u^3
+\rho_\Lambda
\right).
\]

This is the mathematically consistent meaning of an expression such as

\[
\rho=\rho_{m0}r^3+\rho_\Lambda
\]

in the original draft: that \(r\) must be the inverse-scale variable \(u=1/a_A\), not the Alice-frame FLRW areal radius \(\mathcal R_A=a_A\chi\).

For dust + \(\Lambda\),

\[
\dot H_A
=
-\frac32H_0^2\Omega_m u^3,
\]

so the probe acceleration is

\[
\boxed{
\frac{\ddot\ell_A}{\ell_A}
=
\frac{\ddot a_A}{a_A}
=
H_0^2
\left(
\Omega_\Lambda
-\frac12\Omega_m u^3
\right).
}
\]

The probes separate whenever \(H_A>0\). Their expansion decelerates during matter domination and accelerates once \(\Lambda\) dominates. In the limit \(u\to0\), the expansion becomes de Sitter exponential expansion.

---

## 7. Infinite proper time in a finite coordinate interval

The proper time elapsed as \(u\) decreases from \(u_0\) to \(u\) is

\[
\tau(u)-\tau(u_0)
=
\int_u^{u_0}
\frac{du'}{u'H_A(u')}.
\]

As \(u\to0\),

\[
H_A(u)
\longrightarrow
H_\Lambda
\equiv
H_0\sqrt{\Omega_\Lambda},
\]

and therefore

\[
\tau(u)-\tau(u_0)
\sim
\frac{1}{H_\Lambda}
\int_u^{u_0}
\frac{du'}{u'}
\longrightarrow
+\infty.
\]

Hence

\[
\boxed{
u=0
\quad\text{is approached only as}\quad
\tau\to+\infty.
}
\]

The inverse-scale coordinate compresses an infinite amount of Alice proper time into the finite coordinate interval \(0<u\le1\).

---

## 8. Curvature at the future endpoint

For a flat FLRW geometry,

\[
\mathcal R
=
6(\dot H_A+2H_A^2).
\]

Substitution gives

\[
\mathcal R(u)
=
3H_0^2\Omega_m u^3
+12H_0^2\Omega_\Lambda.
\]

Thus

\[
\boxed{
\mathcal R\longrightarrow4\Lambda
}
\]

as \(u\to0\).

The Kretschmann scalar is

\[
K
=
12
\left[
\left(\frac{\ddot a_A}{a_A}\right)^2
+H_A^4
\right],
\]

and approaches

\[
\boxed{
K\longrightarrow\frac83\Lambda^2.
}
\]

The endpoint \(u=0\) is therefore not a curvature singularity of the Alice metric. It is the future conformal boundary of an asymptotically de Sitter spacetime.

This proves singularity deferral within the specified GD interior. It does not by itself prove that this interior is the unique or smoothly matched continuation of the exterior black-hole geometry.

---

## 9. Exact de Sitter realization

In the pure-\(\Lambda\) limit,

\[
H_A=H_\Lambda=\text{constant},
\qquad
u=e^{-H_\Lambda\tau}.
\]

The Alice metric becomes

\[
ds_A^2
=
\frac1{u^2}
\left[
-\frac{du^2}{H_\Lambda^2}
+d\vec\chi^{\,2}
\right].
\]

Defining conformal time

\[
\eta=-\frac{u}{H_\Lambda}
\]

gives

\[
\boxed{
ds_A^2
=
\frac1{H_\Lambda^2\eta^2}
\left(
-d\eta^2+d\vec\chi^{\,2}
\right),
}
\]

the standard flat patch of four-dimensional de Sitter spacetime.

This same intrinsic geometry is realized by the standard embedding of four-dimensional de Sitter spacetime as a hyperboloid in five-dimensional Minkowski space. The embedding therefore supplies an exact geometric realization of the inverse-radius Alice metric in the asymptotic \(\Lambda\)-dominated limit.

The dust term makes the full spacetime non-de-Sitter, so the simple constant-curvature hyperboloid is then only the asymptotic limit rather than a complete embedding of the dust + \(\Lambda\) history.

---

## 10. Why this is not merely Schwarzschild in new coordinates

Inside its horizon, vacuum Schwarzschild may be written as a homogeneous but anisotropic Kantowski-Sachs geometry. With

\[
A(\rho_B)=\frac{2M}{\rho_B}-1>0,
\]

the interior metric is

\[
ds_S^2
=
-\frac{d\rho_B^2}{A(\rho_B)}
+A(\rho_B)\,dt_B^2
+\rho_B^2d\Omega^2.
\]

The coordinate role swap is explicit: \(\rho_B\) is timelike and \(t_B\) is spacelike. But the spatial scale factors are anisotropic:

\[
a_\parallel(\rho_B)
=
\sqrt{\frac{2M}{\rho_B}-1},
\qquad
a_\perp(\rho_B)=\rho_B.
\]

One direction expands while two contract.

The obstruction is invariant, not merely notational. Vacuum Schwarzschild has nonzero Weyl curvature,

\[
C_{\mu\nu\rho\sigma}C^{\mu\nu\rho\sigma}
=
\frac{48M^2}{\rho_B^6},
\]

whereas every FLRW spacetime is conformally flat:

\[
C_{\mu\nu\rho\sigma}=0.
\]

The vanishing or nonvanishing of the Weyl tensor is preserved by regular conformal transformations. Therefore no coordinate rotation followed by an ordinary scalar conformal rescaling can transform a finite region of vacuum Schwarzschild into the Alice FLRW metric.

The appropriate conclusion is not that the GD construction fails. It is that GD must be stated as a map between two geometries:

\[
\boxed{
(\mathcal M_B,g_B,\rho_B)
\quad\xrightarrow{\;\mathcal D_{\rm GD}\;}
(\mathcal M_A,g_A,u,a_A),
}
\]

with

\[
u=\frac{\rho_B}{\rho_H},
\qquad
a_A=\frac1u.
\]

It is not an ordinary coordinate transformation within one vacuum Schwarzschild manifold.

---

## 11. What the horizon role swap contributes

Ordinary Schwarzschild geometry already supplies the causal clue:

- exterior \(t_B\) is timelike and \(\rho_B\) is spacelike;
- interior \(\rho_B\) is timelike and \(t_B\) is spacelike.

GD strengthens this clue into an interior dictionary:

1. the exterior infall variable \(\rho_B/\rho_H\) becomes the Alice-frame time label \(u\);
2. the reciprocal \(1/u\) becomes the Alice-frame isotropic spatial scale;
3. the exterior finite-radius endpoint \(u=0\) becomes Alice's future conformal infinity;
4. the anisotropic Schwarzschild tidal description is not retained as Alice's physical spatial metric, but is replaced by the conformally flat FLRW interior.

In this precise sense, the Schwarzschild role swap motivates the GD map but does not derive the full Alice metric by itself.

---

## 12. The remaining horizon problem

The inverse-radius interior and its probe congruence are mathematically complete. What remains open is the map at \(u=1\).

The original paper describes a timelike shell at the horizon. A black-hole event horizon is null, however, while \(u=\text{constant}\) surfaces in the Alice metric above are spacelike. Therefore \(u=1\) cannot simply be identified with the null horizon as an ordinary Darmois-Israel matching hypersurface.

At least three mathematical possibilities remain:

1. **Null-horizon matching.**  Re-express the Alice interior in horizon-adapted coordinates and apply null junction conditions at a genuine null boundary.
2. **Timelike transition layer.**  Place a timelike matching worldtube strictly inside or outside the null horizon and determine the required surface stress-energy.
3. **Higher-dimensional throat.**  Treat the Schwarzschild/Kottler and FLRW metrics as different four-dimensional projections or slicings of a higher-dimensional geometry, with the null horizon as their common throat limit.

The pure-de-Sitter embedding makes the third route exact in the asymptotic sector. Extending it to include the black-hole Weyl term, dust, and a valid horizon junction is the remaining load-bearing construction.

---

## 13. Status of the result

### Exact consequences of the specified Alice metric

- \(a_A=1/u\) implies \(\dot u=-H_Au\) with no time reversal.
- Comoving probe separations obey \(\dot\ell_A/\ell_A=H_A\) in all spatial directions.
- The congruence has \(\Theta=3H_A\), zero shear, and zero vorticity.
- Dust dilutes as \(u^3\).
- With \(\Lambda>0\), \(u=0\) occurs only at infinite Alice proper time.
- Curvature remains finite and approaches the de Sitter values.
- The pure-\(\Lambda\) limit is exactly the flat patch of the standard de Sitter hyperboloid.

### GD identification or postulate

- Alice's exterior radius history supplies the interior time coordinate \(u=\rho_B/\rho_H\).
- Alice physically measures the FLRW metric \(g_A\), rather than the vacuum Schwarzschild interior metric.
- The reciprocal radius supplies the isotropic interior scale factor.

### Not yet established

- A regular horizon map deriving \(g_A\) from, or joining it to, the exterior black-hole geometry.
- A tensorial mechanism that maps the exterior Weyl tidal field into Alice's isotropic Ricci curvature.
- A complete dust + \(\Lambda\) higher-dimensional embedding.
- Perturbation matching and stability.

---

## 14. Compact statement

The result may be summarized as follows:

> Let the normalized exterior infall radius along Alice's worldline be \(u=\rho_B/\rho_H\), and let GD identify Alice's interior scale factor as \(a_A=1/u\). Then the flat FLRW metric becomes
> \[
> ds_A^2=u^{-2}\left[-du^2/H_A(u)^2+d\vec\chi^{\,2}\right].
> \]
> Comoving probes separate isotropically as \(\ell_A\propto1/u\), with expansion scalar \(3H_A\). For dust + \(\Lambda\), the limit \(u\to0\) lies at infinite proper time and finite curvature, approaching the standard de Sitter conformal boundary. This realizes the intended GD interior exactly, but it defines a distinct conformally flat geometry rather than a coordinate or ordinary conformal rewriting of vacuum Schwarzschild. The unresolved problem is the horizon map connecting the two geometries.

---

## References

1. R. Gaur and M. Visser, “Cosmology in Painlevé-Gullstrand coordinates,” *JCAP* 09 (2022) 030, [arXiv:2207.08375](https://arxiv.org/abs/2207.08375).
2. M. Spradlin, A. Strominger, and A. Volovich, “Les Houches Lectures on de Sitter Space,” [arXiv:hep-th/0110007](https://arxiv.org/abs/hep-th/0110007).
3. G. S. Djordjevic, L. Nesic, and D. Radovancevic, “Two-oscillator Kantowski-Sachs model of the Schwarzschild black hole interior,” [arXiv:1510.00887](https://arxiv.org/abs/1510.00887).
4. J. T. Wheeler, “Weyl geometry,” [arXiv:1801.03178](https://arxiv.org/abs/1801.03178).
5. D. Marković and S. L. Shapiro, “Gravitational Collapse with a Cosmological Constant,” *Physical Review D* **61** (2000) 084029, [arXiv:gr-qc/9912066](https://arxiv.org/abs/gr-qc/9912066).
