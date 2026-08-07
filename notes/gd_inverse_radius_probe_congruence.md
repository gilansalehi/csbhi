# The Inverse-Radius Interior and Alice's Probe Congruence

## A technical note on the geometric-duality map

**Author:** Codex (OpenAI).

## Abstract

This note gives a precise mathematical realization of the central kinematic claim in Geometric Duality (GD): a future-directed infall variable that decreases toward zero can serve as an interior time coordinate, while its reciprocal becomes an isotropic cosmological scale factor.

Let \(r(\tau)\) be the horizon-normalized Schwarzschild areal radius Bob assigns to Alice's trajectory, and let \(\tau\) be Alice's future-directed proper time. Define

\[
a(\tau)\equiv \frac{1}{r(\tau)}.
\]

Then

\[
\dot r=-H_A r,
\qquad
H_A\equiv\frac{\dot a}{a}.
\]

If Alice's interior is the spatially flat FLRW geometry with scale factor \(a\), its metric may be written directly in the inverse-scale coordinate \(r\) as

\[
ds_A^2
=
\frac{1}{r^2}
\left[
-\frac{dr^2}{H_A(r)^2}
+dR^2+R^2d\Omega^2
\right].
\]

An initially comoving probe cloud then expands isotropically with expansion scalar \(\Theta=3H_A\), zero shear, and proper separations \(\ell_\alpha=\ell_H/r\). For a dust + \(\Lambda\) expansion history, \(r=0\) is reached only at infinite proper time and all curvature invariants approach finite de Sitter values.

This construction is exact once the GD identification \(a=1/r\) and the Alice FLRW metric are specified. It is not, however, a coordinate or ordinary conformal transformation of the vacuum Schwarzschild interior. Establishing the horizon map between the exterior black-hole geometry and this Alice interior remains the principal open junction problem.

---

## 1. The question

Consider Alice in future-directed free fall toward a black-hole interior. Bob labels Alice's exterior areal radius by \(r\), with

\[
r=1
\]

at the horizon and \(r\to0\) toward the conventional Schwarzschild endpoint.

GD proposes a stronger interior interpretation than the ordinary Schwarzschild-coordinate role swap. The decreasing exterior-radius label is promoted to an Alice-frame temporal variable, while the reciprocal radius supplies the scale of Alice's spatial geometry.

The operational question is:

> If Alice releases freely falling probes around herself, does she measure their spatial separation growing isotropically at the cosmological rate?

The calculation below answers yes within the GD interior metric and identifies precisely what must still be established to connect that metric to the black-hole exterior.

---

## 2. Separate the three radial quantities

The notation must distinguish quantities that were previously all denoted by \(r\).

### 2.1 Bob's radial coordinate

\[
r
\]

is the Schwarzschild or Kottler areal-radius coordinate Bob assigns to Alice's trajectory, normalized to the parent black-hole horizon selected by the construction. In the paper's normalized units, symmetry spheres have area \(4\pi r^2\). That horizon is at \(r=1\), and the proposed infinite interior future corresponds to \(r\to0\).

### 2.2 Alice's comoving radial coordinate

The coordinate \(R\) labels probes at fixed comoving positions in Alice's spatial geometry.

### 2.3 Alice's areal radius

The areal radius Alice assigns to a probe at \(R\) is

\[
\bar R(\tau,R)
=
a(\tau)R.
\]

The areal radius \(\bar R\) is not Bob's decreasing coordinate \(r\). GD relates them through the reciprocal scale factor rather than identifying them as one coordinate in one chart.

---

## 3. The inverse-radius map

The GD identification is

\[
\boxed{
a(\tau)=\frac{1}{r(\tau)}
}
\]

Both Bob's and Alice's clocks remain future-directed. The opposite signs arise from differentiating the reciprocal:

\[
H_A
\equiv
\frac{\dot a}{a}
=
-\frac{\dot r}{r}.
\]

Therefore,

\[
\boxed{
\dot r=-H_A r.
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
+a(\tau)^2\left(dR^2+R^2d\Omega^2\right).
\]

Since

\[
a=\frac1r,
\qquad
d\tau=-\frac{dr}{rH_A(r)},
\]

the same metric becomes

\[
\boxed{
ds_A^2
=
\frac{1}{r^2}
\left[
-\frac{dr^2}{H_A(r)^2}
+dR^2+R^2d\Omega^2
\right].
}
\]

This displays the GD interpretation directly:

- the finite coordinate interval \(0\lt r\le1\) labels Alice's post-horizon future;
- the Alice-frame spatial length scale is \(1/r\);
- the metric conformal factor is \(1/r^2\);
- decreasing \(r\) and increasing \(a\) are the same future-directed evolution.

The distinction between the length scale and the metric conformal factor is important: \(1/r\) multiplies physical lengths, while \(1/r^2\) multiplies the metric.

---

## 5. The probe-cloud calculation

### 5.1 Comoving geodesics

Consider Alice and nearby probes at fixed comoving coordinates \((R,\theta,\phi)\). Their four-velocity in the \(r\)-coordinate system is

\[
U^\mu
=
(-rH_A,0,0,0),
\]

where the negative sign indicates that \(r\) decreases toward Alice's future. It is correctly normalized:

\[
g_{\mu\nu}U^\mu U^\nu=-1.
\]

These comoving worldlines are geodesic for a homogeneous perfect-fluid FLRW metric.

### 5.2 Proper separation

Let \(\ell_H\) be the probes' physical separation at the horizon, where \(a=1\). Their Alice-frame proper separation is

\[
\ell_\alpha(r)
=
a(\tau)\ell_H
=
\frac{\ell_H}{r}.
\]

Consequently,

\[
\boxed{
\frac{\dot\ell_\alpha}{\ell_\alpha}
=
-\frac{\dot r}{r}
=
H_A.
}
\]

The result is independent of the orientation of the probe separation.

For example, two probes at the same \(r\) and comoving radius \(R_0\), but separated by a small angle \(\delta\theta\), have

\[
\ell_\perp(r)
\simeq
\frac{R_0\delta\theta}{r}.
\]

They separate as \(1/r\), even though the corresponding transverse separation contracts in the vacuum Schwarzschild interior.

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
\frac{\ddot a}{a}\,
\xi^{\hat i}
\]

for each orthonormal spatial direction \(\hat i\). The same coefficient appears in all three directions.

This distinguishes GD's Alice-frame congruence from the vacuum Schwarzschild tidal eigenvalues, which stretch one spatial direction and compress two.

---

## 6. Dust + \(\Lambda\) dynamics

For a spatially flat dust + \(\Lambda\) interior normalized by \(a=1\) at \(r=1\), the Friedmann equation is

\[
H_A(r)^2
=
\frac{8\pi G}{3}
\left(
\rho_{m0}r^3
+\rho_\Lambda
\right).
\]

The factor \(r^3\) follows directly from

\[
\rho_m
=
\rho_{m0}a^{-3}
=
\rho_{m0}r^3.
\]

Here \(r=1/a\) is the inverse-scale coordinate, while Alice's areal radius remains the distinct quantity \(\bar R=aR\).

For dust + \(\Lambda\),

\[
\dot H_A
=
-4\pi G\rho_{m0}r^3,
\]

so the probe acceleration is

\[
\boxed{
\frac{\ddot\ell_\alpha}{\ell_\alpha}
=
\frac{\ddot a}{a}
=
\frac{8\pi G}{3}\rho_\Lambda
-\frac{4\pi G}{3}\rho_{m0}r^3.
}
\]

The probes separate whenever \(H_A>0\). Their expansion decelerates during matter domination and accelerates once \(\Lambda\) dominates. In the limit \(r\to0\), the expansion becomes de Sitter exponential expansion.

---

## 7. Infinite proper time in a finite coordinate interval

The proper time elapsed as \(r\) decreases from \(r_0\) to \(r\) is

\[
\tau(r)-\tau(r_0)
=
\int_r^{r_0}
\frac{dr'}{r'H_A(r')}.
\]

As \(r\to0\),

\[
H_A(r)
\longrightarrow
H_\Lambda
\equiv
\sqrt{\frac{8\pi G}{3}\rho_\Lambda},
\]

and therefore

\[
\tau(r)-\tau(r_0)
\sim
\frac{1}{H_\Lambda}
\int_r^{r_0}
\frac{dr'}{r'}
\longrightarrow
+\infty.
\]

Hence

\[
\boxed{
r=0
\quad\text{is approached only as}\quad
\tau\to+\infty.
}
\]

The inverse-scale coordinate compresses an infinite amount of Alice proper time into the finite coordinate interval \(0\lt r\le1\).

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
\mathcal R(r)
=
8\pi G\rho_{m0}r^3
+32\pi G\rho_\Lambda.
\]

Thus

\[
\boxed{
\mathcal R\longrightarrow4\Lambda
}
\]

as \(r\to0\).

The Kretschmann scalar is

\[
K
=
12
\left[
\left(\frac{\ddot a}{a}\right)^2
+H_A^4
\right],
\]

and approaches

\[
\boxed{
K\longrightarrow\frac83\Lambda^2.
}
\]

The endpoint \(r=0\) is therefore not a curvature singularity of the Alice metric. It is the future conformal boundary of an asymptotically de Sitter spacetime.

This proves singularity deferral within the specified GD interior. It does not by itself prove that this interior is the unique or smoothly matched continuation of the exterior black-hole geometry.

---

## 9. Exact de Sitter realization

In the pure-\(\Lambda\) limit,

\[
H_A=H_\Lambda=\text{constant},
\qquad
r=e^{-H_\Lambda\tau}.
\]

The Alice metric becomes

\[
ds_A^2
=
\frac1{r^2}
\left[
-\frac{dr^2}{H_\Lambda^2}
+dR^2+R^2d\Omega^2
\right].
\]

Defining conformal time

\[
\eta=-\frac{r}{H_\Lambda}
\]

gives

\[
\boxed{
ds_A^2
=
\frac1{H_\Lambda^2\eta^2}
\left(
-d\eta^2+dR^2+R^2d\Omega^2
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
A(r)=\frac{2M}{r}-1>0,
\]

the interior metric is

\[
ds_S^2
=
-\frac{dr^2}{A(r)}
+A(r)\,dt_B^2
+r^2d\Omega^2.
\]

The coordinate role swap is explicit: \(r\) is timelike and \(t_B\) is spacelike. But the spatial scale factors are anisotropic:

\[
a_\parallel(r)
=
\sqrt{\frac{2M}{r}-1},
\qquad
a_\perp(r)=r.
\]

One direction expands while two contract.

The obstruction is invariant, not merely notational. Vacuum Schwarzschild has nonzero Weyl curvature,

\[
C_{\mu\nu\rho\sigma}C^{\mu\nu\rho\sigma}
=
\frac{48M^2}{r^6},
\]

whereas every FLRW spacetime is conformally flat:

\[
C_{\mu\nu\rho\sigma}=0.
\]

The vanishing or nonvanishing of the Weyl tensor is preserved by regular conformal transformations. Therefore no coordinate rotation followed by an ordinary scalar conformal rescaling can transform a finite region of vacuum Schwarzschild into the Alice FLRW metric.

The appropriate conclusion is not that the GD construction fails. It is that GD must be stated as a map between two geometries:

\[
\boxed{
(\mathcal M_B,g_B,r)
\quad\xrightarrow{\;\mathcal D_{\rm GD}\;}
(\mathcal M_A,g_A,\tau,a),
}
\]

with

\[
a(\tau)=\frac{1}{r(\tau)}.
\]

It is not an ordinary coordinate transformation within one vacuum Schwarzschild manifold.

---

## 11. What the horizon role swap contributes

Ordinary Schwarzschild geometry already supplies the causal clue:

- exterior \(t_B\) is timelike and \(r\) is spacelike;
- interior \(r\) is timelike and \(t_B\) is spacelike.

GD strengthens this clue into an interior dictionary:

1. Bob's radius \(r(\tau)\) decreases monotonically along Alice's future-directed worldline;
2. the reciprocal \(1/r\) becomes the Alice-frame isotropic spatial scale;
3. the exterior finite-radius endpoint \(r=0\) becomes Alice's future conformal infinity;
4. the anisotropic Schwarzschild tidal description is not retained as Alice's physical spatial metric, but is replaced by the conformally flat FLRW interior.

In this precise sense, the Schwarzschild role swap motivates the GD map but does not derive the full Alice metric by itself.

---

## 12. The remaining horizon problem

The inverse-radius interior and its probe congruence are mathematically complete. What remains open is the map at \(r=1\).

The original paper describes a timelike shell at the horizon. A black-hole event horizon is null, however, while \(r=\text{constant}\) surfaces in the Alice metric above are spacelike. Therefore \(r=1\) cannot simply be identified with the null horizon as an ordinary Darmois-Israel matching hypersurface.

At least three mathematical possibilities remain:

1. **Null-horizon matching.**  Re-express the Alice interior in horizon-adapted coordinates and apply null junction conditions at a genuine null boundary.
2. **Timelike transition layer.**  Place a timelike matching worldtube strictly inside or outside the null horizon and determine the required surface stress-energy.
3. **Higher-dimensional throat.**  Treat the Schwarzschild/Kottler and FLRW metrics as different four-dimensional projections or slicings of a higher-dimensional geometry, with the null horizon as their common throat limit.

The pure-de-Sitter embedding makes the third route exact in the asymptotic sector. Extending it to include the black-hole Weyl term, dust, and a valid horizon junction is the remaining load-bearing construction.

---

## 13. Status of the result

### Exact consequences of the specified Alice metric

- \(a=1/r\) implies \(\dot r=-H_A r\) with no time reversal.
- Comoving probe separations obey \(\dot\ell_\alpha/\ell_\alpha=H_A\) in all spatial directions.
- The congruence has \(\Theta=3H_A\), zero shear, and zero vorticity.
- Dust dilutes as \(r^3\).
- With \(\Lambda>0\), \(r=0\) occurs only at infinite Alice proper time.
- Curvature remains finite and approaches the de Sitter values.
- The pure-\(\Lambda\) limit is exactly the flat patch of the standard de Sitter hyperboloid.

### GD identification or postulate

- Bob's exterior radius history \(r(\tau)\) supplies a monotonic interior time coordinate.
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

> Let \(r(\tau)\) be the horizon-normalized exterior radius Bob assigns along Alice's worldline, and let GD identify Alice's interior scale factor as \(a=1/r\). Then the flat FLRW metric becomes \(ds_A^2=r^{-2}\left[-dr^2/H_A(r)^2+dR^2+R^2\,d\Omega^2\right]\). Comoving probes separate isotropically as \(\ell_\alpha\propto1/r\), with expansion scalar \(3H_A\). For dust + \(\Lambda\), the limit \(r\to0\) lies at infinite proper time and finite curvature, approaching the standard de Sitter conformal boundary. This realizes the intended GD interior exactly, but it defines a distinct conformally flat geometry rather than a coordinate or ordinary conformal rewriting of vacuum Schwarzschild. The unresolved problem is the horizon map connecting the two geometries.

---

## References

1. R. Gaur and M. Visser, “Cosmology in Painlevé-Gullstrand coordinates,” *JCAP* 09 (2022) 030, [arXiv:2207.08375](https://arxiv.org/abs/2207.08375).
2. M. Spradlin, A. Strominger, and A. Volovich, “Les Houches Lectures on de Sitter Space,” [arXiv:hep-th/0110007](https://arxiv.org/abs/hep-th/0110007).
3. G. S. Djordjevic, L. Nesic, and D. Radovancevic, “Two-oscillator Kantowski-Sachs model of the Schwarzschild black hole interior,” [arXiv:1510.00887](https://arxiv.org/abs/1510.00887).
4. J. T. Wheeler, “Weyl geometry,” [arXiv:1801.03178](https://arxiv.org/abs/1801.03178).
5. D. Marković and S. L. Shapiro, “Gravitational Collapse with a Cosmological Constant,” *Physical Review D* **61** (2000) 084029, [arXiv:gr-qc/9912066](https://arxiv.org/abs/gr-qc/9912066).
