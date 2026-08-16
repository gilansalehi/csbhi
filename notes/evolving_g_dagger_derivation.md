# The Evolving Galactic Acceleration-Scale Correspondence

*A correspondence, not a derivation — the galactic analogue of the reciprocal ansatz, and its coefficient-independent falsifiable prediction.*

---

## Introduction

The radial acceleration relation ties the observed acceleration in a galaxy to the acceleration its baryons alone would produce, and it turns over at a characteristic scale \(g_\dagger\approx1.2\times10^{-10}\,\mathrm{m/s^2}\). Standard constant-\(a_0\) MOND treats that scale as fixed. The reciprocal picture instead identifies the galactic acceleration scale with the contemporaneous cosmological horizon, and therefore lets it evolve.

This note states that correspondence and draws the one clean consequence that survives without any free parameter — the ratio \(g_\dagger(z)/g_\dagger(0)\) tracks \(H(z)/H_0\). The argument has three parts at three honestly different standings: a conditional **theorem** that fixes the *form* of the galaxy law, a **correspondence** that supplies its global scale — an ansatz at the same tier as \(a=1/r\), posited and tested rather than derived — and the **prediction** the two together make, which is falsifiable now.

Conventions: \(H_A(z)\) is Alice's interior Hubble rate, \(H_\Lambda\equiv\sqrt{\Lambda/3}\), and \(E(z)\equiv H_A(z)/H_0\); \(g_N\) is the local baryonic (Newtonian) acceleration and \(g_\dagger\) the acceleration scale of the radial acceleration relation.

## 1. The theorem: the square-root form

Let \(A\) be an as-yet-unspecified global acceleration scale. Require of the mixing law \(D(g_N,A)\) that it introduce (i) no new dimensionful constant, (ii) no preferred scale — homogeneity, (iii) a symmetric treatment of the local and global accelerations, \(D(g_N,A)=D(A,g_N)\), and (iv) exact flat-rotation-curve scaling. These force the functional equation \(\phi(x)=x\,\phi(1/x)\), whose solution is the geometric mean,

\[
D(g_N,A)=\kappa\sqrt{g_N\,A},\qquad \kappa \text{ an undetermined constant.}
\]

This is a conditional theorem: given the four hypotheses, the square-root form is not one option among many but the only one. It fixes the *form* and leaves both the global scale \(A\) and the normalization \(\kappa\) open. The derivation is carried out in full in the [self-dual square-root note](https://www.gilansalehi.com/csbhi/notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md).

## 2. The correspondence: the galactic reciprocal ansatz

The theorem asks for a global scale but does not name it. The reciprocal picture names it — the inverse radius of Alice's contemporaneous cosmological horizon,

\[
\boxed{\ A(\tau)=\frac{c^2}{R_{\rm hor}(\tau)}\ }.
\]

This is the galactic analogue of \(a=1/r\): a reciprocal relation between the local gravitational field and the global horizon scale, applied one recursive level down. It is an ansatz, at the same standing as the foundational reciprocal ansatz — motivated by recursive self-similarity, not forced by it, and earning its place by what it predicts rather than by derivation.

One genuine choice remains, and it is where observation enters. If the relevant horizon is the contemporaneous apparent (Hubble) horizon, \(R_{\rm hor}=c/H_A(\tau)\), the scale is \(A=cH_A(\tau)\) and **evolves**. If it is the asymptotic de Sitter horizon, \(R_{\rm hor}=c/H_\Lambda\), the scale is \(A=cH_\Lambda\) and is **fixed** — indistinguishable on this point from standard constant-\(a_0\) MOND. The recursive reading, like \(a(\tau)=1/r(\tau)\) itself, is naturally taken at the current epoch and so favors the contemporaneous horizon; but the ansatz alone does not exclude the fixed one. Which horizon the completed weak-field geometry actually selects is open, and the data can decide it directly.

## 3. The prediction: the coefficient-independent ratio

Combine the theorem with the evolving correspondence. Writing the empirical deep form of the relation as \(g_{\rm obs}=\sqrt{g_N\,g_\dagger}\) gives \(g_\dagger=\kappa^2 A=\kappa^2 cH_A(z)\). The unknown \(\kappa^2\) and \(c\) cancel in the ratio, leaving a pure prediction with no free parameter:

\[
\boxed{\ \frac{g_\dagger(z)}{g_\dagger(0)}=\frac{H_A(z)}{H_0}=E(z)=\sqrt{\Omega_m(1+z)^3+\Omega_r(1+z)^4+\Omega_\Lambda}\ }.
\]

This is the robust result, and it needs none of the absolute normalization — not the coefficient \(\kappa\), not \(c\), not the value of \(g_\dagger(0)\). It is a clean discriminator between the two readings:

- **Constant scale / fixed horizon:** \(g_\dagger(z)/g_\dagger(0)=1\), flat.
- **Evolving correspondence:** \(g_\dagger(z)/g_\dagger(0)=E(z)\), rising.

The same scaling propagates into the observables: the baryonic Tully–Fisher zero-point slides as \(-\log E(z)\), and the knee of the radial acceleration relation moves to \(cH_A(z)\). The predicted offset reaches \(0.8\)–\(1.0\) dex by \(z\gtrsim3\), well above the \(\sim0.45\) dex systematic floor of the measurement — so the test is performable in the JWST era, and the prediction is coefficient-free and can be registered in advance.

## 4. Observational standing

The empirical anchors are two.

The **local** value \(g_\dagger(0)\approx1.2\times10^{-10}\,\mathrm{m/s^2}\) (SPARC) is smaller than \(cH_0\approx6.8\times10^{-10}\,\mathrm{m/s^2}\) by \(\kappa^2\approx0.18\sim1/2\pi\) — the theorem's undetermined order-one constant, fixed empirically rather than derived.

At **intermediate redshift**, MUSE-DARK III (79 star-forming galaxies, \(0.33\lt z\lt 1.44\)) reports \(g_\dagger(z\!\sim\!1)=2.38^{+0.12}_{-0.10}\times10^{-10}\,\mathrm{m/s^2}\), rising from the local \(1.2\pm0.26\). The coefficient-independent test is the ratio:

\[
\left.\frac{g_\dagger(z\!\sim\!1)}{g_\dagger(0)}\right|_{\rm obs}\approx\frac{2.38}{1.2}\approx1.98\pm0.45,
\qquad E(1)=1.76\ (\text{H-linked}),\qquad 1\ (\text{constant scale}).
\]

The datum favors the rising correspondence over constant-\(g_\dagger\) MOND at roughly \(2\sigma\), and the parameter-free value \(E(1)=1.76\) sits comfortably inside the measured ratio. The three-way standing:

| framework | \(g_\dagger(z)/g_\dagger(0)\) | vs. MUSE-DARK III | free parameters |
|---|---|---|---|
| Standard constant-\(a_0\) MOND | \(1\) | disfavored \(\sim2\sigma\) | none |
| H-linked MOND hypothesis | \(E(z)\) if \(a_0\propto H\) | consistent | none in the ratio |
| CSBHI reciprocal correspondence | \(E(z)\) (\(=1.76\) at \(z\!\sim\!1\)) | consistent | none (\(\kappa\) cancels) |
| ΛCDM + feedback | model-dependent, rises | accommodated | feedback tuning |

The claim worth defending is the sharp one: a parameter-free redshift curve, consistent with recent evidence of acceleration-scale evolution, that disfavors a constant scale and — unlike ΛCDM — needs no feedback tuning to produce the rise. Its limits belong in the same breath. The intermediate-redshift point is a single model-dependent measurement with sizeable scatter (~0.17 dex). ΛCDM simulations can also produce a rising RAR scale through galaxy formation and feedback, so evolution alone does not select this correspondence — the true discriminant is the parameter-free *shape* \(E(z)\), which present data cannot yet resolve against a model-dependent feedback curve.

The H-linked law itself has clear precedent. Limbach, Psaltis, and Özel compared the consequences of coupling the MOND scale to \(H(z)\) or to the vacuum density in 2008. Bekenstein and Sagi found that \(a_0\) can evolve in TeVeS, although much more slowly than \(H\) in their favored case. Milgrom later studied the explicit hypothesis \(a_0(t)\propto cH(t)\), which conditionally gives the same normalized redshift law written above. CSBHI therefore does not claim priority for the formula. Its contribution is an independent geometric reason to select the contemporaneous horizon, together with a direct formulation in terms of the empirical RAR scale \(g_\dagger\).

## 5. Result

> Recursive self-duality fixes the square-root *form* of the galaxy law once a global acceleration scale is supplied. Identifying that scale with the inverse radius of the contemporaneous cosmological horizon — the galactic analogue of \(a=1/r\) — yields the coefficient-independent, falsifiable prediction \(g_\dagger(z)/g_\dagger(0)=H(z)/H_0\). The law has prior MOND precedent; CSBHI reaches it independently through the reciprocal horizon correspondence. Recent intermediate-redshift evidence is consistent with the rise and disfavors a fixed scale at \(\sim2\sigma\), with no parameter tuned to it.

The standing is exactly that of the programme it belongs to: a correspondence with a testable consequence, at the same tier as the foundational ansatz — not a derivation of the acceleration scale or its normalization. What remains open is whether the completed weak-field throat geometry *selects* the apparent horizon over the de Sitter horizon and *fixes* \(\kappa\); that is GD III's task, and the ratio prediction stands independent of it. A correspondence pays down its guess-status one falsifiable consequence at a time, and this is one such consequence: it reaches into rotation-curve data the ansatz was never tuned to, and it can fail. The sky writes the verdict at \(z\gtrsim3\).

---

*Derived by Claude (Anthropic) and independently cross-checked by Codex (OpenAI) under Salehi Remediation.*

## References

1. [Self-Dual Homogeneous Derivation of the Square-Root Law](https://www.gilansalehi.com/csbhi/notes/gd_self_dual_homogeneous_derivation_of_the_square_root_law.md); [The Evolving Galactic Acceleration Scale and its High-Redshift Test](https://www.gilansalehi.com/csbhi/notes/evolving_acceleration_scale_high_z_test.md); [The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution](https://www.gilansalehi.com/csbhi/reciprocal-involution.html); [Recursive Kottler Horizons and the Galaxy Acceleration Scale](https://www.gilansalehi.com/csbhi/notes/recursive_kottler_horizons_and_the_galaxy_scale.md), this project.
2. H. Desmond, "The underlying radial acceleration relation," *MNRAS*, [arXiv:2303.11314](https://arxiv.org/abs/2303.11314) — local \(g_\dagger(0)\approx1.2\times10^{-10}\,\mathrm{m/s^2}\) from SPARC.
3. MUSE-DARK III, [arXiv:2604.22613](https://arxiv.org/abs/2604.22613) — an increasing radial-acceleration-relation scale with redshift.
4. G. Salehi, [Geometric Duality I](https://www.gilansalehi.com/csbhi/gd1.html), this project.
5. C. Limbach, D. Psaltis, and F. Özel, "The Redshift Evolution of the Tully–Fisher Relation as a Test of Modified Gravity," [arXiv:0809.2790](https://arxiv.org/abs/0809.2790) (2008) — compares Hubble-linked and vacuum-density-linked evolution of the MOND scale.
6. J. D. Bekenstein and E. Sagi, "Do Newton's \(G\) and Milgrom's \(a_0\) vary with cosmological epoch?", [arXiv:0802.1526](https://arxiv.org/abs/0802.1526) (2008) — derives slow epoch dependence of \(a_0\) in TeVeS.
7. M. Milgrom, "Cosmological variation of the MOND constant: secular effects on galactic systems," [arXiv:1412.4344](https://arxiv.org/abs/1412.4344) (2015) — explicitly studies the hypothesis \(a_0(t)\propto cH(t)\).
8. B. W. Keller and J. W. Wadsley, "ΛCDM is Consistent with SPARC Radial Acceleration Relation," [arXiv:1610.06183](https://arxiv.org/abs/1610.06183) (2017) — demonstrates an RAR in hydrodynamical ΛCDM simulations.
