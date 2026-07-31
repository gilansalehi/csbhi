# Two Routes to the Vacuum Surface-Gravity Jump

*Technical note*

**Author:** Claude (Anthropic).

**Date:** 2026-07-30.

## Abstract

"Thermodynamic Accounting of the Transverse Junction" computes the signed surface-gravity jump \(\Delta\kappa\) between a vacuum Schwarzschild sphere and Alice's apparent horizon at a general FLRW epoch, then isolates the vacuum-energy share of that jump using today's measured density fractions. "Recursive Kottler Horizons and the Galaxy Scale" computes an unrelated quantity, \([\kappa]\), the static surface-gravity jump at the recursive Kottler horizon root, under the conditional identification \(M=M_H\). The two numbers agree to five digits, \(6.7275\times10^{-10}\ \mathrm{m\,s^{-2}}\).

This note shows the agreement is not a numerical accident. Both expressions reduce, by direct substitution, to the same closed form,

\[
\boxed{
\Delta\kappa_\Lambda
=
[\kappa]
=
\frac32\,\Omega_{\Lambda,0}\,cH_0
}.
\]

Running the argument in reverse — solving for the mass that makes the recursive-Kottler surface gravity equal the FLRW vacuum work term, without assuming \(M=M_H\) in advance — reproduces \(M=M_H\) exactly. The mass identification is therefore pinned down by two independent conditions (a horizon-radius ratio and a surface-gravity match) rather than one, though neither condition is yet a first-principles derivation of \(M=M_H\) itself.

---

## 1. The two quantities being compared

**Route A — apparent-horizon vacuum work term.** From the general dynamic surface-gravity jump at Alice's apparent horizon,

\[
\frac{\Delta\kappa}{cH_A}
=
\frac34\Omega_m+\frac12\Omega_r+\frac32\Omega_\Lambda,
\tag{1}
\]

the vacuum-only contribution, evaluated with today's actual density fractions, is

\[
\Delta\kappa_\Lambda
\equiv
\frac32\,\Omega_{\Lambda,0}\,cH_0.
\tag{2}
\]

Equation (1) makes no reference to any black hole, recursive embedding, or conditional mass; it is a property of the real, currently matter+radiation+vacuum-mixed universe alone.

**Route B — recursive Kottler static jump.** From the common-root Kottler construction, with \(\alpha\equiv\Lambda_P/\Lambda_C\),

\[
[\kappa]
=
\frac{3c^2(1-\alpha)}{2R_{\Lambda,C}},
\qquad
1-\alpha=\frac{M}{M_{\Lambda,C}}.
\tag{3}
\]

Equation (3) makes no reference to the present universe's density budget; it is a property of a static Schwarzschild–de Sitter embedding with parameter \(M\).

## 2. Route A, reduced

Using Planck 2018 values as adopted throughout this project,

\[
\Omega_{\Lambda,0}=0.684908,
\qquad
H_0=67.4\ \mathrm{km\,s^{-1}Mpc^{-1}},
\tag{4}
\]

so that \(cH_0=6.54846\times10^{-10}\ \mathrm{m\,s^{-2}}\), Equation (2) gives

\[
\Delta\kappa_\Lambda
=
1.5\times0.684908\times6.54846\times10^{-10}
=
6.7275\times10^{-10}\ \mathrm{m\,s^{-2}}.
\tag{5}
\]

This matches the vacuum-row entry in the component table of "Thermodynamic Accounting of the Transverse Junction."

## 3. Route B, reduced

The recursive-Kottler note fixes \(R_{\Lambda,C}\) to the observed de Sitter radius,

\[
R_{\Lambda,C}=R_\Lambda=\frac{R_H}{\sqrt{\Omega_{\Lambda,0}}},
\tag{6}
\]

and, under the conditional identification \(M=M_H\), uses the independently established ratio identity

\[
\frac{M_H}{M_{\Lambda,C}}=\frac{R_H}{R_{\Lambda,C}}=\sqrt{\Omega_{\Lambda,0}}
\tag{7}
\]

(itself a restatement of \((R_H/R_\Lambda)^2=\Omega_\Lambda\), established in GD1 Section 7). Substituting Equations (6)-(7) into Equation (3):

\[
[\kappa]
=
\frac{3c^2\sqrt{\Omega_{\Lambda,0}}}{2\,(R_H/\sqrt{\Omega_{\Lambda,0}})}
=
\frac{3c^2\Omega_{\Lambda,0}}{2R_H}
=
\frac32\,\Omega_{\Lambda,0}\,\frac{c^2}{R_H}
=
\frac32\,\Omega_{\Lambda,0}\,cH_0,
\tag{8}
\]

using \(c/R_H=H_0\). This is symbol-for-symbol identical to Equation (2). Numerically it reproduces Equation (5) to the same five digits, confirming the match already reported is exact rather than approximate agreement between two unrelated numbers.

## 4. The match is not circular: recovering \(M=M_H\) from surface gravity alone

Equations (2) and (8) were derived using the conditional assumption \(M=M_H\) already in hand. A stronger check is to impose the equality directly and solve for \(M\) without presupposing which mass makes it work.

Set Equation (3), in its general form (not yet substituting \(M=M_H\)), equal to Equation (2):

\[
\frac{3c^2}{2R_{\Lambda,C}}\cdot\frac{M}{M_{\Lambda,C}}
=
\frac32\,\Omega_{\Lambda,0}\,cH_0.
\tag{9}
\]

Solve for \(M/M_{\Lambda,C}\):

\[
\frac{M}{M_{\Lambda,C}}
=
\frac{\Omega_{\Lambda,0}\,H_0R_{\Lambda,C}}{c}.
\tag{10}
\]

Using \(R_{\Lambda,C}=R_H/\sqrt{\Omega_{\Lambda,0}}\) and \(H_0R_H=c\):

\[
\frac{M}{M_{\Lambda,C}}
=
\frac{\Omega_{\Lambda,0}}{\sqrt{\Omega_{\Lambda,0}}}
=
\sqrt{\Omega_{\Lambda,0}}.
\tag{11}
\]

\[
\boxed{
\frac{M}{M_{\Lambda,C}}=\sqrt{\Omega_{\Lambda,0}}
\quad\Longrightarrow\quad
M=M_H
}
\tag{12}
\]

by Equation (7). The mass that makes the recursive-Kottler surface gravity equal the FLRW apparent-horizon vacuum work term is not a free parameter landing near \(M_H\) by chance — it is exactly \(M_H\), recovered from a condition (a dimensionful acceleration-scale match) that shares no algebraic structure on its face with the condition that originally produced \(M_H\) (a dimensionless horizon-radius ratio, Equation 7).

## 5. What this does and does not establish

Two logically distinct conditions now select \(M=M_H\):

1. \(M_H/M_{\Lambda,C}=R_H/R_{\Lambda,C}\) — a ratio of horizon radii, established independently in GD1 Section 7 and used to define \(M_H\) in the first place.
2. The recursive-Kottler surface-gravity jump equals the FLRW apparent-horizon vacuum work term — a dimensionful acceleration-scale match, established here.

Agreement between two conditions of different type is stronger evidence for treating \(M=M_H\) as physically apt than either condition alone, since a generic incorrect mass would satisfy neither. It is not a derivation of \(M=M_H\) from first principles: both conditions could in principle share a deeper, still-unidentified reason for preferring this mass, in which case they would not be independent checks so much as two faces of the same fact. Distinguishing those possibilities requires the same missing ingredient as everywhere else in this program — an independently derived law for how the recursive parent horizon's mass relates to the child's observed cosmology, rather than a mass supplied by hand.

## Result

\[
\Delta\kappa_\Lambda=[\kappa]=\frac32\,\Omega_{\Lambda,0}\,cH_0=6.7275\times10^{-10}\ \mathrm{m\,s^{-2}}
\]

exactly, given \(R_{\Lambda,C}=R_\Lambda\) and \(M=M_H\); and requiring this equality without assuming \(M=M_H\) recovers it as the unique solution. The two notes were computing the same physical quantity by construction, not by coincidence.

---

## References

1. ["Thermodynamic Accounting of the Transverse Junction."](note.html?src=thermodynamic_accounting_of_the_transverse_junction) Technical note, this project.
2. ["Recursive Kottler Horizons and the Galaxy Scale."](note.html?src=recursive_kottler_horizons_and_the_galaxy_scale) Technical note, this project.
3. Planck Collaboration. "Planck 2018 Results. VI. Cosmological Parameters." *Astronomy & Astrophysics* 641 (2020): A6. [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910).
