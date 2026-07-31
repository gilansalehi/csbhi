# Constraints on the Horizon Map

*Research note*

The reciprocal ansatz

\[
a(\tau)=\frac{1}{r(\tau)}
\]

relates Bob's horizon-normalized radial description of Alice's infall to the scale factor of Alice's isotropic interior. It does not construct the spacetime that joins those descriptions across the parent black-hole event horizon. This note records the constraints on that separate geometric problem.

## The unresolved map

Write the desired relation schematically as

\[
\left(\mathcal M_B,g_B,r\right)
\xrightarrow{\;\mathcal D\;}
\left(\mathcal M_A,g_A,\tau,a\right).
\]

The inverse-radius ansatz specifies the correspondence along Alice's history. Deriving \(g_A\) from \(g_B\) also requires junction data: the intrinsic geometry of the matching surface, its extrinsic or transverse curvature, and any stress-energy carried by the transition.

## A scalar conformal transformation is insufficient

A vacuum Schwarzschild interior has Kantowski-Sachs geometry: its radial and angular directions evolve differently [1–3]. It also has nonzero Weyl curvature,

\[
C_{\alpha\beta\gamma\delta}C^{\alpha\beta\gamma\delta}
=\frac{48G^2M^2}{r^6},
\]

whereas every FLRW spacetime is conformally flat. A regular scalar conformal transformation preserves whether the Weyl tensor vanishes. No coordinate change followed by a scalar conformal rescaling can therefore turn the vacuum Schwarzschild interior into the isotropic FLRW interior. The horizon map requires additional geometric structure.

## The black-hole event horizon requires a null treatment

The black-hole event horizon is a null hypersurface. Constant-radius surfaces in the inverse-radius FLRW description are spacelike spatial slices. Assigning both surfaces the normalized value \(r=1\) does not make them geometrically identical.

The Israel-Darmois formalism describes non-null matching surfaces [4]. It cannot establish a smooth, stress-free match at the black-hole event horizon. A horizon match requires regular coordinates and the null-shell junction formalism, including continuity of the degenerate intrinsic geometry and the appropriate transverse-curvature data [5].

## Three construction routes

1. **Null boundary map.** Express both descriptions in horizon-regular coordinates and solve the null junction conditions. The calculation determines whether the horizon carries a surface stress tensor.

2. **Timelike transition layer.** Place a finite layer away from the null horizon and apply the Israel-Darmois formalism there. Any resulting surface stress remains part of the model, and standard thin-shell methods can test its stability [4, 6].

3. **Higher-dimensional throat.** Derive the exterior and interior as different four-dimensional projections or slicings of one higher-dimensional geometry. The exact 5D de Sitter embedding of Alice's asymptotic interior supplies one side of such a construction.

These routes are alternatives, not results. A completed map must derive the reciprocal relation, preserve the horizon's null causal structure, and supply the stress-energy required by the junction.

## References

1. Carroll, S. M. *Spacetime and Geometry: An Introduction to General Relativity*. Addison-Wesley, 2004.
2. Wald, R. M. *General Relativity*. University of Chicago Press, 1984.
3. Kantowski, R., and Sachs, R. K. “Some Spatially Homogeneous Anisotropic Relativistic Cosmological Models.” *Journal of Mathematical Physics* 7, no. 3 (1966): 443–446. [doi:10.1063/1.1704952](https://doi.org/10.1063/1.1704952).
4. Israel, W. “Singular Hypersurfaces and Thin Shells in General Relativity.” *Il Nuovo Cimento B* 44 (1966): 1–14; erratum 48 (1967): 463.
5. Barrabès, C., and Israel, W. “Thin Shells in General Relativity and Cosmology: The Lightlike Limit.” *Physical Review D* 43, no. 4 (1991): 1129–1142. [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
6. Poisson, E., and Visser, M. “Thin-Shell Wormholes: Linearization Stability.” *Physical Review D* 52, no. 12 (1995): 7318–7321. [doi:10.1103/PhysRevD.52.7318](https://doi.org/10.1103/PhysRevD.52.7318).
