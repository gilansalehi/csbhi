# The Crossing Epoch as the Single Free Parameter

*Technical note*

**Author:** Claude (Anthropic).

**Date:** 2026-07-30.

## Abstract

The finite-throat reconstruction fixes Alice's absolute reciprocal coordinate by assuming she crosses Bob's horizon at the moment of its formation, identified with a thermal landmark at \(T\simeq4\,\mathrm{MeV}\). This note reintroduces the degree of freedom that assumption removes and asks what is thereby determined and what remains free.

The result is that relaxing the assumption does not produce an underdetermined model. It produces a **one-parameter family**, parametrized by the crossing epoch

\[
y_H\equiv\frac{a_H}{a_0}=r_0.
\]

Every other quantity — the total expansion since crossing \(N_{\rm tot}=-\ln y_H\), Bob's Schwarzschild radius at crossing \(R_S=B_H\), and the conditional parent mass \(M\) — is a fixed function of \(y_H\). The crossing epoch is bounded above, not below:

\[
\boxed{
y_H\lesssim4\times10^{-11},
\qquad
M_{\rm crossing}\lesssim8.4\times10^{12}\,M_\odot
}.
\]

The bound is the requirement that the junction close before primordial nucleosynthesis. Codex's calibration therefore sits at the heaviest-Bob edge of the allowed range, not at an interior point.

Separately, today's throat radius \(B_0=16.7\,\mathrm{Gly}\) is fixed by the observed expansion history independent of \(y_H\). The apparent conflict between the finite-throat mass \((\lesssim10^{13}M_\odot)\) and the recursive-Kottler conditional identification \(M=M_H\sim10^{23}M_\odot\) is then shown to be a diagnosis rather than a contradiction: the two are mutually consistent **if and only if** Bob accretes, so that \(R_S(\tau)=B(\tau)\) grows by a factor \(\sim6\times10^9\) across the history. A static Bob falsifies \(M=M_H\).

---

## 1. The freed degree of freedom

The reciprocal ansatz sets \(a_H=1\), \(r_H=1\) at crossing by convention; this fixes the origin and unit of the absolute scale factor but says nothing about which observed epoch crossing corresponds to. That single physical fact is the normalized scale factor at crossing,

\[
y_H\equiv\frac{a_H}{a_0}=\frac{1}{a_0}=r_0,
\tag{1}
\]

equivalently the redshift \(1+z_H=1/y_H\) or the temperature \(T_H=T_0/y_H\) at which Alice entered.

The finite-throat note removes this freedom by identifying crossing with reheating at \(T_T\simeq4\,\mathrm{MeV}\), i.e. \(y_H=y_T=4.19\times10^{-11}\), optionally shifted by a pre-thermal e-fold count \(N_{\rm pre}\). Reintroducing the degree of freedom means letting \(y_H\) range freely and asking what the framework still fixes.

## 2. Everything reduces to \(y_H\)

Given the observed flat matter–radiation–vacuum background, the cosmological event-horizon radius is the fixed function

\[
B(y)=yR_H\int_y^\infty\frac{dy'}{y'^2E(y')},
\qquad
E(y)=\sqrt{\Omega_ry^{-4}+\Omega_my^{-3}+\Omega_\Lambda}.
\tag{2}
\]

In the radiation-dominated early regime this reduces to the exact linear law

\[
B(y)=y\,(R_p+B_0)+O(y^2),
\qquad
R_p+B_0=62.81\,\mathrm{Gly}.
\tag{3}
\]

The first null junction condition identifies Bob's Schwarzschild radius with the shared event horizon at crossing,

\[
R_S=B_H=B(y_H)=y_H(R_p+B_0),
\tag{4}
\]

so the conditional parent mass is **linear** in the crossing epoch,

\[
\boxed{
M(y_H)=\frac{c^2B_H}{2G}=\frac{c^2(R_p+B_0)}{2G}\,y_H
}.
\tag{5}
\]

The total accumulated expansion since crossing is

\[
N_{\rm tot}=\ln\frac{a_0}{a_H}=-\ln y_H,
\tag{6}
\]

and the absolute reciprocal coordinate is simply \(r_0=y_H\). Thus the entire reconstruction collapses onto one number. The model is a one-parameter family, not an underdetermined one.

## 3. The upper bound from nucleosynthesis

The crossing epoch is not entirely free. For the standard hot Big Bang history — in particular the light-element abundances set at \(T\sim1\,\mathrm{MeV}\) — to be Alice's **post**-crossing interior evolution, the junction and its transient surface stress must precede nucleosynthesis. Crossing during or after BBN would imprint the junction discontinuity on the primordial abundances, contradicting observation.

The lowest thermalization temperature consistent with successful BBN is conventionally taken as a few MeV. Using the conservative value \(T_T=4\,\mathrm{MeV}\),

\[
y_H\le y_T=\frac{T_0}{T_T}\left(\frac{g_{*s,0}}{g_{*s,T}}\right)^{1/3}=4.19\times10^{-11}.
\tag{7}
\]

Because \(M(y_H)\) is increasing in \(y_H\) by Equation (5), the latest allowed crossing gives the **heaviest** allowed Bob:

\[
\boxed{
M_{\rm crossing}\le M(y_T)=8.43\times10^{12}\,M_\odot
}.
\tag{8}
\]

This reframes the finite-throat number. It is not a point estimate but the ceiling of the allowed range. Earlier or hotter crossing gives a lighter Bob, with mass falling linearly toward zero as \(y_H\to0\). Standard cosmology supplies no lower bound; a completed model with a pre-thermal inflationary throat plateau might impose one by tying the earliest e-folds to a required inflationary scale, but no such bound follows from the observed history alone.

## 4. The mass "tension" is a static-versus-dynamic diagnosis

Today's throat radius is fixed by the observed history **independent of the crossing epoch**:

\[
B_0=16.68\,\mathrm{Gly}
\quad\Longrightarrow\quad
M_0\equiv\frac{c^2B_0}{2G}=5.3\times10^{22}\,M_\odot\approx1.15\,M_H.
\tag{9}
\]

This is the same \(10^{23}M_\odot\) scale as the recursive-Kottler conditional identification \(M=M_H\). It does not depend on \(y_H\); it is simply the reconstructed event-horizon mass now.

There are therefore two masses in play:

1. Bob's mass **at crossing**, \(M_{\rm crossing}\le8.4\times10^{12}M_\odot\), epoch-dependent (Section 3);
2. the throat's mass **today**, \(M_0\approx5\times10^{22}M_\odot\), epoch-independent (Equation 9).

Their ratio is fixed:

\[
\frac{M_0}{M_{\rm crossing}}=\frac{B_0}{B_H}=\frac{B_0}{y_H(R_p+B_0)}
\;\ge\;
\frac{B_0}{y_T(R_p+B_0)}=6.3\times10^{9}.
\tag{10}
\]

Whether these two masses can both describe Bob turns on a single structural choice.

**Static Bob.** If Bob's exterior is an eternal Schwarzschild black hole of fixed \(R_S=B_H\), his mass is \(\le10^{13}M_\odot\) for all time. Alice's interior event horizon \(B(\tau)\) still grows to \(16.7\,\mathrm{Gly}\), but that is interior geometry decoupled from Bob's fixed exterior radius. In this case \(R_S\ne R_H\), and the recursive-Kottler conditional identification \(M=M_H\) is **false**.

**Dynamic (accreting) Bob.** If the junction persists dynamically — the moving-boundary premise \(\dot B>0\) of the throat-kinematics note — then Bob's horizon and Alice's interior event horizon are the same growing surface, \(R_S(\tau)=B(\tau)\). Bob's mass then grows from \(\sim8\times10^{12}M_\odot\) at crossing to \(\sim5\times10^{22}M_\odot\) today, and both notes are correct at their respective epochs. The recursive-Kottler identification \(M=M_H\) holds as the present-epoch value.

\[
\boxed{
\text{Finite-throat junction} \;\wedge\; (M=M_H)
\quad\Longleftrightarrow\quad
\text{Bob accretes, } R_S(\tau)=B(\tau)
}
\tag{11}
\]

The two independently-motivated results are compatible if and only if Bob gains the factor \(\sim6\times10^9\) in mass demanded by Equation (10). This is not decorative: it is the same \(\dot B>0\) throat evolution the kinematic note already treats, now seen to be **required** rather than optional if the recursive-Kottler mass identification is to survive alongside the finite-throat junction. A static exterior would break one of them.

## 5. What remains free and what would fix it

Reintroducing the crossing-epoch degree of freedom leaves the model with exactly one undetermined number, \(y_H=r_0\), bounded above by Equation (8) and unbounded below. It converts several previously separate uncertainties into functions of that one parameter:

\[
r_0=y_H,
\qquad
N_{\rm tot}=-\ln y_H,
\qquad
M_{\rm crossing}=\frac{c^2(R_p+B_0)}{2G}\,y_H.
\tag{12}
\]

The parameter is fixed only by the same missing ingredient named throughout this program: an independent law for \(B(\tau)\) from the parent collapse and junction geometry. That law would supply the crossing epoch \(y_H\) directly — for instance by predicting the parent horizon's area at the moment Alice's worldline enters it — rather than leaving it to a thermal calibration. Until then, the honest statement is that CSBHI predicts a one-parameter ray of interior normalizations, with a heaviest-Bob endpoint set by nucleosynthesis and a dynamical-accretion condition, Equation (11), that any \(M=M_H\) completion must satisfy.

## Result

\[
r_0=y_H\lesssim4\times10^{-11},
\qquad
M_{\rm crossing}=\frac{c^2(R_p+B_0)}{2G}\,y_H\lesssim8.4\times10^{12}\,M_\odot,
\]

with the crossing epoch the single freed degree of freedom, bounded above by BBN and below by nothing in the observed history. The finite-throat mass and the recursive-Kottler mass \(M_H\) are consistent if and only if Bob accretes so that \(R_S(\tau)=B(\tau)\) grows by \(\sim6\times10^9\) across the history; a static exterior falsifies the \(M=M_H\) identification.

---

## References

1. Codex (OpenAI), ["The Finite-Throat Transition and the Absolute Reciprocal Coordinate."](note.html?src=finite_throat_transition_and_the_absolute_reciprocal_coordinate) Technical note, this project.
2. Codex (OpenAI), ["Dynamic Throat Kinematics and the Cosmological Clock."](note.html?src=dynamic_throat_kinematics_and_the_cosmological_clock) Technical note, this project.
3. Codex (OpenAI), ["Recursive Kottler Horizons and the Galaxy Scale."](note.html?src=recursive_kottler_horizons_and_the_galaxy_scale) Technical note, this project.
4. Claude (Anthropic), ["Two Routes to the Vacuum Surface-Gravity Jump."](note.html?src=two_routes_to_the_vacuum_surface_gravity_jump) Technical note, this project.
5. S. Hannestad, "What is the Lowest Possible Reheating Temperature?" *Physical Review D* 70 (2004): 043506. [arXiv:astro-ph/0403291](https://arxiv.org/abs/astro-ph/0403291).
6. Planck Collaboration, "Planck 2018 Results. VI. Cosmological Parameters." *Astronomy & Astrophysics* 641 (2020): A6. [doi:10.1051/0004-6361/201833910](https://doi.org/10.1051/0004-6361/201833910).
