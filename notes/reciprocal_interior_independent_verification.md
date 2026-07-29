# The Reciprocal Interior: An Independent Verification

*Technical note*

**Author:** Claude (Anthropic), invited as an independent auditor of the Geometric Duality construction.

## Abstract

This note independently re-derives the dynamics of Alice's reciprocal interior, cross-checking [Field Equations of the Reciprocal Interior](note.html?src=field_equations_of_the_reciprocal_interior) by a different route: spherical comoving coordinates rather than local Cartesian ones, for the Einstein-tensor computation. Where that note establishes the Friedmann dynamics from Einstein's equations and then substitutes the reciprocal ansatz, this note adds two things it does not cover: a rigorous statement of *why* the substitution \(a=1/r\) loses no information — the two differential equations it relates are genuinely equivalent, not merely similar — and an independent check of the curvature invariants (\(\mathcal R\), \(K\)) that carry the weight of the paper's "singularity deferred" claim.

It also corrects an error of its own author's making. An earlier informal version of the curvature-term substitution below inverted a power of \(r\) in an intermediate line; the final boxed result was unaffected, but the algebra shown to get there was wrong. The corrected derivation is given in full in Section 4, with the error stated plainly rather than quietly fixed.

The two notes agree on every point of substance. Where they overlap, that agreement is itself the finding: the same physics, reached by different computational paths, lands in the same place.

---

## 1. Scope and inputs

Same four inputs as the companion note, stated once for self-containment:

1. the reciprocal ansatz \(a(\tau)=1/r(\tau)\), with \(F(r)\equiv-dr/d\tau>0\);
2. Alice's interior takes the spatially flat FLRW form, \(ds_A^2=-d\tau^2+a(\tau)^2(dR^2+R^2d\Omega^2)\);
3. Einstein's field equations, \(G_{\mu\nu}=8\pi G\,T_{\mu\nu}\);
4. matter, radiation, and vacuum energy as non-interacting perfect fluids with \(w_m=0\), \(w_r=1/3\), \(w_\Lambda=-1\), obeying local conservation.

Nothing below derives the ansatz itself, the isotropy assumption, or the junction to Bob's exterior. Those remain open, exactly as both notes and the paper's own Appendix C say.

---

## 2. The Einstein tensor, by a second route

Rather than local Cartesian coordinates, work directly in \((\tau,R,\theta,\phi)\) with \(g_{RR}=a^2\), \(g_{\theta\theta}=a^2R^2\), \(g_{\phi\phi}=a^2R^2\sin^2\theta\), and let \(\gamma_{ij}\) denote the flat unit 3-metric so that \(g_{ij}=a^2\gamma_{ij}\).

Direct computation of the Ricci tensor in this chart gives

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

matches Section 6 of the main paper exactly. From these, the \(00\)-component of Einstein's equation gives \(G_{00}=3H_A^2=8\pi G\rho\), i.e.

\[
\boxed{H_A^2=\frac{8\pi G}{3}\rho,}
\]

and the spatial component, after the same algebra as the companion note, gives \(\ddot a/a=-\tfrac{4\pi G}{3}(\rho+3p)\). Both match the main paper's eq:alice-friedmann and eq:alice-acceleration, and both match the companion note's eqs. (10) and (12) term for term. Two different coordinate systems, two different sets of intermediate Christoffel symbols, one answer. That is the value of doing this twice.

---

## 3. Invertibility: why nothing is lost in the substitution

The companion note states that the substitution \(a=1/r\) is invertible without proving it as a distinct claim. It's worth doing properly, because "invertible" is doing real logical work here: it is what licenses calling the \(r\)-space equation and the \(a\)-space equation *equivalent* rather than merely *related*.

**Claim.** The map \(\iota:a\mapsto r=1/a\) is a bijection of \((0,\infty)\) onto itself, and it carries every solution of the Friedmann constraint for \(a(\tau)\) to exactly one solution of the boxed infall equation for \(r(\tau)\), and back.

**Proof.** \(\iota\) is its own inverse: \(\iota(\iota(a))=1/(1/a)=a\). It is smooth and strictly decreasing on \((0,\infty)\), hence a diffeomorphism of that interval onto itself — no branch points, no domain restriction beyond \(a,r>0\), which both sides of the correspondence already require physically (a scale factor and a Schwarzschild-normalized radius are each positive by construction).

Given any solution \(a(\tau)\) of \(H_A^2=\tfrac{8\pi G}{3}\rho(a)\), define \(r(\tau)\equiv 1/a(\tau)\). Because \(\iota\) is a diffeomorphism, \(r(\tau)\) is smooth wherever \(a(\tau)\) is, and \(\dot r=-\dot a/a^2\). Substituting directly:

\[
H_A^2=\left(\frac{\dot a}{a}\right)^2=\left(-\frac{\dot r}{r}\right)^2=\frac{F(r)^2}{r^2}=\frac{8\pi G}{3}\rho(1/r),
\]

which is exactly the boxed \(F(r)\) equation with \(\rho\) re-expressed in \(r\). Conversely, given any solution \(r(\tau)\) of the boxed equation, \(a(\tau)\equiv 1/r(\tau)\) satisfies the original Friedmann constraint by the identical calculation run backward. Since \(\iota\) is a bijection, this correspondence is one-to-one in both directions: no solution of either equation is lost, and no spurious solution is introduced. \(\blacksquare\)

The only place a choice enters is the sign of the square root, and that is fixed by \(F\)'s own definition as a *positive* inward flow (\(F=-dr/d\tau>0\) while \(r\) decreases) — a labeling convention, not a second solution being discarded.

This is what makes it correct to say, as the companion note does, that "the Friedmann equation *is* the time-time field equation of the proposed reciprocal interior." It is not merely analogous to it under the ansatz; given the ansatz, it is the same equation, read in a different variable. Genuine equivalence of this kind is what the phrase "conditional but exact" in the companion note's abstract is entitled to mean.

---

## 4. The curvature term — corrected

Include spatial curvature by restoring the standard \(k\)-dependence in the spatial metric, so the constraint equation reads

\[
H_A^2+\frac{k}{a^2}=\frac{8\pi G}{3}\rho.
\]

**The error, stated plainly:** an earlier version of this derivation substituted \(a=1/r\) and wrote the curvature term as \(k/r^2\). That is wrong. Since \(a=1/r\), we have \(a^2=1/r^2\), so

\[
\frac{k}{a^2}=k\,r^2,
\]

not \(k/r^2\) — the power of \(r\) inverts along with \(a\) itself, and it is easy to write the wrong one down without noticing, precisely because the final destination (\(C=-k\) multiplying \(r^4\) inside \(F^2\)) is already known from Appendix A and it is tempting to pattern-match toward it rather than carry the substitution through. Doing it correctly:

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

This is the correct result, and it does match Appendix A's identification \(C=-k\) and the companion note's eq. (22) — but now by an intermediate derivation that is actually right, rather than one that happened to land on the right final line by two compensating slips. Setting \(k=0\) recovers eq:infall-function.

---

## 5. Curvature invariants at the deferred endpoint

Section 6 of the main paper asserts that as \(r\to0\), \(\mathcal R\to4\Lambda\) and the Kretschmann scalar \(K\to\tfrac83\Lambda^2\) — the claim that carries the entire weight of "the singularity is deferred to infinite proper time, not merely postponed in disguise." This deserves independent checking as much as the dynamical equations do, and the companion note does not cover it.

For flat FLRW, the standard result for the Kretschmann scalar is

\[
K=R_{\alpha\beta\gamma\delta}R^{\alpha\beta\gamma\delta}=12\left[\left(\frac{\ddot a}{a}\right)^2+H_A^4\right].
\]

In the vacuum-dominated limit, matter and radiation densities vanish as \(r\to0\) (equivalently \(a\to\infty\)), so from Section 2's results, \(\dot H_A\to0\) and \(\ddot a/a=\dot H_A+H_A^2\to H_\Lambda^2\), while \(H_A\to H_\Lambda\equiv\sqrt{\Lambda/3}\). Then:

\[
\mathcal R=6(\dot H_A+2H_A^2)\longrightarrow 6(0+2H_\Lambda^2)=12H_\Lambda^2=12\cdot\frac{\Lambda}{3}=4\Lambda,
\]

\[
K=12\left[(H_\Lambda^2)^2+H_\Lambda^4\right]=12\cdot 2H_\Lambda^4=24H_\Lambda^4=24\left(\frac{\Lambda}{3}\right)^2=\frac{24\Lambda^2}{9}=\frac{8}{3}\Lambda^2.
\]

Both match the main paper's stated limits exactly. Combined with Section 3's invertibility argument, this closes the loop on the "singularity deferred" claim: the proper-time divergence at \(r\to0\) (established in the main paper via the logarithmic integral) and the finiteness of curvature there are independent tests, as the paper itself says, and both check out under direct recomputation.

---

## 6. What this means for Appendix A

The companion note already adopts the more direct route to \(F(r)\) — substituting the ansatz into the *constraint* equation once it is known, rather than integrating the acceleration equation as an ODE, which is what the current Appendix A does. This note's contribution is the piece that route was missing: a proof, not just an assertion, that the resulting correspondence is lossless in both directions (Section 3), and a corrected, careful treatment of the curvature term that this route requires (Section 4).

If Appendix A is rewritten as a short correspondence proof along the lines Codex proposed, the natural shape is:

1. State the Friedmann constraint as established (cross-referencing the field-equations note for its derivation from GR).
2. Apply \(a=1/r\), \(F=-dr/d\tau\), and note the substitution is invertible — citing Section 3 above rather than asserting it.
3. Obtain the boxed infall function by direct substitution, curvature term included, using the corrected treatment in Section 4.
4. Optionally cite Section 5's curvature-invariant check as independent confirmation that the resulting geometry is finite where the paper claims it is.

---

## References

1. Einstein, A. "Die Grundlage der allgemeinen Relativitätstheorie." *Annalen der Physik* 49, no. 7 (1916): 769–822. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702).
2. Friedmann, A. "Über die Krümmung des Raumes." *Zeitschrift für Physik* 10 (1922): 377–386. [doi:10.1007/BF01332580](https://doi.org/10.1007/BF01332580).
3. Carroll, S. M. *Spacetime and Geometry: An Introduction to General Relativity*. San Francisco: Addison-Wesley, 2004.
4. Wald, R. M. *General Relativity*. Chicago: University of Chicago Press, 1984.
5. Ellis, G. F. R., and van Elst, H. "Cosmological Models." In *Theoretical and Observational Cosmology*, 1–116. Kluwer, 1999. [arXiv:gr-qc/9812046](https://arxiv.org/abs/gr-qc/9812046).
