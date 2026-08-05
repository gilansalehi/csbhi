# GD Self-Dual Homogeneous Derivation of the Square-Root Law

**Author:** Codex (OpenAI).

This note turns the project's recursive-throat self-duality premise into a functional-equation proof of the square-root law.

---

## Purpose

The goal is to derive the MOND-like GD mixing law

\[
g_{\rm mix} \sim \sqrt{g_N cH}
\]

from symmetry and exact scale assumptions, without yet requiring the full tensorial realization.

---

## 1. Setup

Define the global throat acceleration scale

\[
a_H := cH.
\]

Let

\[
D(g_N,a_H)
\]

denote the mixed acceleration law coupling the local Newtonian scale \(g_N\) to the global throat scale \(a_H\).

We impose four assumptions.

### Assumption 1: No new dimensionful scale

The mixed law depends only on the local Newtonian acceleration \(g_N\) and the global throat acceleration \(a_H\).

### Assumption 2: Homogeneity

If both accelerations are rescaled by the same factor, the output rescales linearly:

\[
D(\lambda g_N, \lambda a_H) = \lambda D(g_N,a_H).
\]

### Assumption 3: Recursive self-duality

The local and global sectors are not fundamentally distinct, so the mixing law is invariant under exchange:

\[
D(g_N,a_H)=D(a_H,g_N).
\]

### Assumption 4: Exact deep-regime scale invariance

For a point mass,

\[
g_N(r)=\frac{GM}{r^2},
\]

and in the deep mixed regime the law should produce exactly flat outer rotation curves, so the mixed acceleration must scale purely as

\[
D(r) \propto \frac{1}{r}
\]

with no residual logarithmic modulation.

---

## 2. Homogeneous form of the law

From Assumption 2, the mixed law must take the form

\[
D(g_N,a_H)=a_H\,\phi\!\left(\frac{g_N}{a_H}\right)
\]

for some dimensionless function \(\phi\).

This follows because the output has units of acceleration and the only dimensionless variable is the ratio \(g_N/a_H\).

---

## 3. Functional equation from self-duality

Impose Assumption 3:

\[
a_H\,\phi\!\left(\frac{g_N}{a_H}\right)
=
g_N\,\phi\!\left(\frac{a_H}{g_N}\right).
\]

Set

\[
x:=\frac{g_N}{a_H}.
\]

Then the equation becomes

\[
\phi(x)=x\,\phi(1/x).
\]

Now define

\[
\psi(u):=e^{-u/2}\phi(e^u).
\]

Then

\[
\psi(u)=\psi(-u),
\]

so \(\psi\) is an even function.

Therefore the general self-dual homogeneous solution is

\[
\phi(x)=\sqrt{x}\,\psi(\ln x),
\qquad \psi(-u)=\psi(u).
\]

Hence

\[
\boxed{
D(g_N,a_H)=\sqrt{g_N a_H}\,\psi\!\left(\ln\frac{g_N}{a_H}\right),
\qquad \psi \text{ even.}
}
\]

This is already a nontrivial result: the square-root prefactor is universal, and the only remaining freedom is an even logarithmic modulation.

---

## 4. Elimination of residual freedom by exact scale invariance

For a point mass,

\[
g_N(r)=\frac{GM}{r^2}.
\]

Then

\[
D(r)=\frac{\sqrt{GM a_H}}{r}\,
\psi\!\left(\ln\frac{GM}{a_H r^2}\right).
\]

If \(\psi\) is not constant, then the force carries a residual \(\ln r\) dependence and is not exactly proportional to \(1/r\).

Assumption 4 requires exact flat-curve scaling in the deep regime, so the minimal closure is

\[
\psi(u)\equiv \kappa,
\]

a constant.

Therefore

\[
\boxed{
D(g_N,a_H)=\kappa\sqrt{g_N a_H}.
}
\]

Restoring \(a_H=cH\), we obtain

\[
\boxed{
g_{\rm mix}=\kappa\sqrt{g_N cH}.
}
\]

---

## 5. Corollary: BTFR / MOND scaling

Using

\[
g_N=\frac{GM}{r^2},
\]

we find

\[
g_{\rm mix}(r)=\kappa\sqrt{\frac{GM}{r^2}cH}
=\kappa\frac{\sqrt{GMcH}}{r}.
\]

Equating this to the centripetal acceleration \(v^2/r\) gives

\[
\frac{v^2}{r}=\kappa\frac{\sqrt{GMcH}}{r}.
\]

Thus

\[
v^2=\kappa\sqrt{GMcH},
\]

and therefore

\[
\boxed{
v^4=\kappa^2 GMcH.
}
\]

This is the BTFR / deep-MOND scaling law in the GD setting.

---

## 6. Statement of result

### Theorem

Under the assumptions of:

1. no new dimensionful scale,
2. homogeneity,
3. recursive self-duality under exchange of local and global sectors,
4. exact deep-regime scale invariance,

the unique mixed acceleration law is

\[
\boxed{
g_{\rm mix}=\kappa\sqrt{g_N cH}.
}
\]

### Proof

The proof is the functional-equation derivation above.

---

## 7. Why this matters

This result is stronger than the earlier dimensional argument.

It shows that the exponent \(1/2\) is not merely chosen because it works observationally. It is forced by:

- recursive local/global exchange symmetry,
- homogeneity,
- and exact deep-regime scale invariance.

The square-root law is therefore the unique exact self-dual homogeneous law consistent with the GD throat picture.

---

## 8. Limitations

This note does not yet identify the exact tensor, projected curvature invariant, effective metric term, or field equation that realizes the law dynamically.

So the result should be read as:

- a theorem at the level of symmetry-constrained law selection,
- not yet the final tensorial realization.

The downstream open problem is now narrower:

> find the exact geometric or dynamical object in GD whose weak-field realization reproduces this already-selected law.

---

## 9. Interpretation

This result suggests that the square-root law is not an arbitrary MOND-like fit grafted onto GD. It is the natural mixed law selected by recursive throat self-duality once the local and global sectors are treated as two levels of one geometry.

That may be the cleanest bridge yet between the strong metaphysical reading of GD and its galactic phenomenology.
