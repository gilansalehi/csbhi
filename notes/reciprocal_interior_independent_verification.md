# The Reciprocal Interior: An Independent Verification

*Technical note*

**Author:** Claude (Anthropic), invited as an independent auditor of the Geometric Duality construction.

## Abstract

This note independently re-derives the dynamics of Alice's reciprocal interior, cross-checking [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior) in spherical comoving coordinates rather than local Cartesian coordinates. It also establishes the branchwise equivalence of the \(a\)- and \(r\)-space evolution equations and checks the curvature invariants \(\mathcal R\) and \(K\) at the deferred endpoint.

It also corrects an error in an earlier informal calculation. That calculation inverted the curvature power in both an intermediate line and the resulting curved-space expression. Its spatially flat result was unaffected because the erroneous term vanishes when \(k=0\). Section 5 gives the corrected derivation.

The two notes agree on every point of substance. Where they overlap, that agreement is itself the finding: the same physics, reached by different computational paths, lands in the same place.

---

## 1. Scope and inputs

The calculation uses the same four inputs as the companion note:

1. the reciprocal ansatz \(a(\tau)=1/r(\tau)\), with signed radial flow \(F\equiv-dr/d\tau\);
2. Alice's interior takes the spatially flat FLRW form, \(ds_A^2=-d\tau^2+a(\tau)^2(dR^2+R^2d\Omega^2)\);
3. Einstein's field equations, \(G_{\mu\nu}=8\pi G\,T_{\mu\nu}\);
4. matter, radiation, and vacuum energy as non-interacting perfect fluids with \(w_m=0\), \(w_r=1/3\), and \(w_\Lambda=-1\).

Nothing below derives the ansatz itself or a complete parent spacetime. The calculation tests the specified reciprocal interior on its own terms.

---

## 2. The Einstein tensor in spherical coordinates

Rather than local Cartesian coordinates, work directly in \((\tau,R,\theta,\phi)\) with \(g_{RR}=a^2\), \(g_{\theta\theta}=a^2R^2\), \(g_{\phi\phi}=a^2R^2\sin^2\theta\), and let \(\gamma_{ij}\) denote the flat unit 3-metric so that \(g_{ij}=a^2\gamma_{ij}\).

Direct computation of the Ricci tensor in this chart gives [3–5]

\[
R_{00}=-3\frac{\ddot a}{a},
\qquad
R_{ij}=\left(a\ddot a+2\dot a^2\right)\gamma_{ij}.
\]

Writing \(a\ddot a=a^2(\dot H_A+H_A^2)\) (the standard identity \(\ddot a/a=\dot H_A+H_A^2\)) converts the second expression to \(R_{ij}=a^2(\dot H_A+3H_A^2)\gamma_{ij}=(\dot H_A+3H_A^2)g_{ij}\) — identical in form to the companion note's Cartesian-coordinate result, obtained here with different intermediate quantities entirely (\(\gamma_{ij}\) and the spherical Christoffel symbols, rather than \(\delta_{ij}\)).

The Ricci scalar,

\[
\mathcal R = g^{00}R_{00}+g^{ij}R_{ij} = 3\left(\frac{\ddot a}{a}\right)+\frac{3}{a^2}\left(a\ddot a+2\dot a^2\right) = 6\left(\frac{\ddot a}{a}+H_A^2\right)=6\left(\dot H_A+2H_A^2\right),
\]

matches Section 6 of the main paper exactly. From these, the \(00\)-component of Einstein's equation [1] gives \(G_{00}=3H_A^2=8\pi G\rho\), i.e.

\[
\boxed{H_A^2=\frac{8\pi G}{3}\rho}
\]

and the spatial component gives \(\ddot a/a=-\tfrac{4\pi G}{3}(\rho+3p)\). These are the Friedmann constraint and acceleration equations [2–5]. They match the boxed equations in Section 4 of the main paper and the companion note's Equations (10) and (12). Computing the tensor in spherical coordinates provides a coordinate check on the Cartesian calculation.

---

## 3. Conservation fixes the density powers

The contracted Bianchi identity and Einstein's equations imply total stress-energy conservation,

\[
\nabla_\mu T^{\mu\nu}=0.
\]

For the metric above, its time component is

\[
\dot\rho+3H_A(\rho+p)=0.
\]

Because the three fluids do not exchange energy, each component obeys this equation separately. For constant \(p_i=w_i\rho_i\),

\[
\dot\rho_i+3H_A(1+w_i)\rho_i=0,
\]

which integrates to

\[
\rho_i(a)=\rho_{i0}a^{-3(1+w_i)}.
\]

Therefore

\[
\rho_m=\rho_{m0}a^{-3},
\qquad
\rho_r=\rho_{r0}a^{-4},
\qquad
\rho_\Lambda=\text{constant}.
\]

Total conservation follows from the field equations; separate conservation is the additional consequence of treating the components as non-interacting [3–5].

---

## 4. Branchwise equivalence under the reciprocal map

The map \(\iota:a\mapsto r=1/a\) is its own inverse, smooth, and strictly decreasing on \((0,\infty)\). It is therefore a diffeomorphism of that interval onto itself.

Given a solution \(a(\tau)>0\), define \(r(\tau)=1/a(\tau)\). Then \(r(\tau)\) is smooth wherever \(a(\tau)\) is, and \(\dot r=-\dot a/a^2\). Each expanding or contracting branch is monotonic, so its signed radial flow \(F=-\dot r\) may be written as a function of \(r\):

\[
H_A^2=\left(\frac{\dot a}{a}\right)^2=\left(-\frac{\dot r}{r}\right)^2=\frac{F(r)^2}{r^2}=\frac{8\pi G}{3}\rho(1/r).
\]

The calculation runs backward identically. The reciprocal map therefore preserves the signed solutions of the homogeneous background equation. The expanding branch \(H_A>0\) maps to decreasing \(r\) and positive inward flow \(F>0\); the contracting branch maps to increasing \(r\) and \(F<0\). The paper selects the former because its thought experiment follows Alice inward while her reciprocal scale grows.

Within that branch, the Friedmann constraint and the infall equation are the same equation written in reciprocal variables. This equivalence applies to the homogeneous background evolution; it does not establish an equivalence of perturbations, global spacetime geometry, or the unresolved exterior–interior junction.

---

## 5. The curvature term — corrected

Include spatial curvature by restoring the standard \(k\)-dependence in the spatial metric, so the constraint equation reads

\[
H_A^2+\frac{k}{a^2}=\frac{8\pi G}{3}\rho.
\]

An earlier informal calculation substituted \(a=1/r\) and wrote the curvature term as \(k/r^2\). Since \(a^2=1/r^2\), the correct substitution is

\[
\frac{k}{a^2}=k\,r^2.
\]

The constraint therefore becomes

\[
H_A^2=\frac{8\pi G}{3}\left(\rho_{m0}r^3+\rho_{r0}r^4+\rho_\Lambda\right)-k\,r^2.
\]

Multiplying through by \(r^2\) (since \(F^2=r^2H_A^2\)):

\[
\boxed{
F(r)^2
=
\frac{8\pi G}{3}
\left(\rho_{m0}r^5+\rho_{r0}r^6+\rho_\Lambda r^2\right)
-k\,r^4.
}
\]

This matches Appendix A's identification \(C=-k\) and the companion note's Equation (22). Setting \(k=0\) recovers the paper's boxed infall function. The earlier error affected the curved-space expression but not this spatially flat result.

---

## 6. Curvature invariants at the deferred endpoint

Section 6 of the main paper states that as \(r\to0\), \(\mathcal R\to4\Lambda\) and the Kretschmann scalar \(K\to\tfrac83\Lambda^2\). These limits provide a check independent of the proper-time calculation.

For flat FLRW, the Kretschmann scalar is [3–5]

\[
K=R_{\alpha\beta\gamma\delta}R^{\alpha\beta\gamma\delta}=12\left[\left(\frac{\ddot a}{a}\right)^2+H_A^4\right].
\]

Write vacuum energy as \(\rho_\Lambda=\Lambda/(8\pi G)\), so \(H_\Lambda^2=\Lambda/3\). As \(r\to0\), equivalently \(a\to\infty\), Section 3 shows that matter and radiation vanish while vacuum energy remains. The field equations then give \(\dot H_A\to0\), \(\ddot a/a\to H_\Lambda^2\), and \(H_A\to H_\Lambda\). Therefore

\[
\mathcal R=6(\dot H_A+2H_A^2)\longrightarrow 6(0+2H_\Lambda^2)=12H_\Lambda^2=12\cdot\frac{\Lambda}{3}=4\Lambda,
\]

\[
K=12\left[(H_\Lambda^2)^2+H_\Lambda^4\right]=12\cdot 2H_\Lambda^4=24H_\Lambda^4=24\left(\frac{\Lambda}{3}\right)^2=\frac{24\Lambda^2}{9}=\frac{8}{3}\Lambda^2.
\]

Both match the main paper's stated limits. Together with the logarithmic proper-time divergence established there, they place \(r=0\) at infinite future proper time with finite scalar curvature within Alice's assumed FLRW interior. This calculation does not establish regularity of the unresolved junction or geodesic completeness of a larger spacetime.

---

## 7. Relation to Appendix A

Appendix A maps established Friedmann dynamics into the infall function by integrating the acceleration equation. The companion note reaches the same result directly from the time-time field equation. Sections 4 and 5 above verify that the reciprocal substitution preserves the selected branch and carries the curvature term correctly. The two routes agree without requiring a revision to Appendix A.

---

## References

1. Einstein, A. "Die Grundlage der allgemeinen Relativitätstheorie." *Annalen der Physik* 49, no. 7 (1916): 769–822. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702).
2. Friedmann, A. "Über die Krümmung des Raumes." *Zeitschrift für Physik* 10 (1922): 377–386. [doi:10.1007/BF01332580](https://doi.org/10.1007/BF01332580).
3. Carroll, S. M. *Spacetime and Geometry: An Introduction to General Relativity*. San Francisco: Addison-Wesley, 2004.
4. Wald, R. M. *General Relativity*. Chicago: University of Chicago Press, 1984.
5. Ellis, G. F. R., and van Elst, H. "Cosmological Models." In *Theoretical and Observational Cosmology*, 1–116. Kluwer, 1999. [arXiv:gr-qc/9812046](https://arxiv.org/abs/gr-qc/9812046).
