# The Trapping-Horizon Pair and the Inward Reciprocal Branch

## A finite-throat refinement of the CSBHI collapse map

**Working calculation — September 2026. Source: upstream project derivation. Independent audit and revisions: Codex (OpenAI).**

---

## Abstract

Smooth spherical collapse can produce its first marginally trapped sphere through a nondegenerate fold: the compactness profile first touches unity and then separates into an outward and an inward trapping-horizon branch. This standard collapse geometry refines the CSBHI formation picture from a single event/trapping-horizon gap into two distinct finite regions.

On a suitable spherical foliation, the common post-formation ordering is

\[
R_E>R_+>R_-,
\]

where \(R_E\) is the global event horizon and \(R_+\) and \(R_-\) are the outward- and inward-moving marginal branches. The interval \(R_E-R_+\) records the difference between a teleological causal boundary and a local trapping boundary. The interval \(R_+-R_-\) is a trapped region born at zero width and opened dynamically by the Einstein equations.

For an interior, smooth, nondegenerate first contact, define the compactness \(C=2m/R\) in geometrized units. The birth conditions

\[
C_b=1,
\qquad
D_\ell C_b=0
\]

give the exact local relation

\[
\boxed{8\pi R_b^2\rho_b=1.}
\]

Marginality also fixes the mean enclosed density, so

\[
\boxed{\bar\rho_b=3\rho_b.}
\]

The time derivative of compactness determines the pressure dependence,

\[
\boxed{
D_tC\big|_b
=
\frac{\mathcal G_b}{R_b}(1+w_b),
}
\]

for a collapsing branch with \(U_b=-\mathcal G_b\). Expanding around the first contact yields the universal fold law

\[
\Delta\ell_\pm
=
\pm\sqrt{\frac{2A}{B}}\sqrt{\Delta t}
+O(\Delta t).
\]

The inward branch therefore supplies a geometrically distinguished candidate for the GD1 radial variable,

\[
r_-(t)\equiv\frac{R_-(t)}{R_b}
=
1-\beta\sqrt{t-t_b}+\cdots,
\]

and hence \(a=1/r_-\) initially increases in the required direction.

This candidate is not yet the completed GD2 map. A trapping-horizon hypersurface is not an individual freely falling Alice trajectory, and the current conformal branch does not identify the parent birth radius with a child apparent-horizon radius. The child clock and absolute scale must still be derived from the event-horizon optics and the conformal completion.

The result nevertheless supplies the first standard collapse structure with the correct birth normalization and inward direction for a possible post-crossing reciprocal branch.

---

## 1. Scope and claim status

This note separates three levels of claim.

### Established spherical-collapse geometry

For a smooth, nondegenerate interior maximum of compactness that first reaches \(C=1\), a pair of marginal branches is created with square-root separation. The Misner–Sharp equations determine the local density and pressure combinations appearing below.

### Candidate CSBHI interpretation

The inward branch \(R_-\) is a physically motivated candidate for the radial structure underlying the GD1 variable \(r\). The event horizon remains the causal surface used to order formation cohorts; the trapping pair supplies a possible local birth and post-crossing structure.

### Open transfer problem

The note does not establish a conformal map from \(R_-\) to a child FLRW scale, transfer parent marginality to a child apparent horizon, or derive the child matter/radiation ledger. Those steps require the still-open absolute conformal calibration, event map, and clock.

The fold calculation also has a precise domain. It assumes that the first trapped sphere forms at a smooth interior extremum with

\[
D_\ell^2C_b<0,
\qquad
\mathcal G_b\neq0.
\]

First trapping at a material boundary, thin shell, shock, shell crossing, or other nonsmooth structure requires a separate analysis.

---

## 2. Three surfaces and two finite regions

Let

\[
\mathcal H_E
\]

be the parent black-hole event horizon, and let

\[
\mathcal H_+,
\qquad
\mathcal H_-
\]

denote the two marginal branches created at first trapping.

On the usual spherical slices of a smooth collapse calculation, one commonly finds after pair creation

\[
\boxed{R_E>R_+>R_-.}
\tag{1}
\]

This areal-radius ordering is foliation- and model-dependent; it is not promoted here to a general invariant theorem. Its physical decomposition is nevertheless useful.

The region

\[
\boxed{R_E-R_+}
\tag{2}
\]

is the global/local horizon buffer. It separates the teleological event horizon from the locally defined outer trapping horizon and is the natural location for optical delay, redshift, and clock information.

The region

\[
\boxed{R_+-R_-}
\tag{3}
\]

is the newly formed trapped region. It has zero width at birth,

\[
R_+(t_b)=R_-(t_b)=R_b,
\tag{4}
\]

and then opens dynamically.

The differences in (2) and (3) are areal-radius separations on the chosen slice, not invariant proper thicknesses. “Throat” is used only as descriptive shorthand for this finite trapped region; the calculation does not establish a traversable wormhole throat.

This replaces the earlier one-gap cartoon with two geometrically distinct sectors. It does not replace the GD2 causal correspondence between event-horizon crossings and the outgoing child birth cone.

---

## 3. The event/trapping gap is ordinary dynamical GR

Choose outgoing and ingoing null normals satisfying

\[
\ell\cdot n=-1.
\]

In spherical symmetry their expansions are

\[
\theta_\ell=\frac{2}{R}\ell(R),
\qquad
\theta_n=\frac{2}{R}n(R).
\tag{5}
\]

With a compatible dual-null normalization, the spherical cross-focusing equation may be written

\[
\boxed{
\mathcal L_n\theta_\ell
=
-\theta_\ell\theta_n
-\frac{1}{R^2}
+8\pi T_{\ell n}.
}
\tag{6}
\]

Here and through Section 10,

\[
G=c=1.
\]

During accretion the event horizon need not be marginal on a chosen slice:

\[
\theta_\ell\big|_E>0,
\]

whereas the outer trapping horizon satisfies

\[
\theta_\ell\big|_+=0.
\]

The finite region between the two surfaces is therefore where ordinary curvature and stress-energy drive the outgoing expansion to zero. A zero-width null junction is neither required nor expected.

In ingoing Vaidya, one convenient normalization gives

\[
\theta_\ell=\frac{R-R_T}{R^2},
\tag{7}
\]

so

\[
\theta_\ell(R_E)=\frac{R_E-R_T}{R_E^2},
\qquad
\theta_\ell(R_T)=0.
\tag{8}
\]

This is a useful benchmark showing that the finite focusing is smooth. It is not an independent derivation of a CSBHI transfer law.

---

## 4. Why Vaidya supplies only half of the local matter information

For a perfect fluid,

\[
T_{ab}=(\rho+p)u_au_b+pg_{ab},
\tag{9}
\]

choose

\[
\ell^a=\frac{u^a+e^a}{\sqrt2},
\qquad
n^a=\frac{u^a-e^a}{\sqrt2}.
\tag{10}
\]

Then

\[
\boxed{T_{\ell\ell}=\frac{\rho+p}{2},}
\qquad
\boxed{T_{\ell n}=\frac{\rho-p}{2}.}
\tag{11}
\]

Consequently,

\[
\boxed{
\rho=T_{\ell\ell}+T_{\ell n},
\qquad
p=T_{\ell\ell}-T_{\ell n}.
}
\tag{12}
\]

Outgoing Raychaudhuri evolution probes \(T_{\ell\ell}\), while transverse cross-focusing probes \(T_{\ell n}\). Together they recover the local total density and pressure of a perfect fluid.

Pure ingoing Vaidya has no \(T_{\ell n}\) work-density channel in this basis. It can therefore model null flux and horizon growth while failing to determine the independent \(\rho-p\) information. This explains why it can furnish a useful optical clock benchmark without closing the local equation-of-state problem.

It does not follow that the two projections determine a species-resolved matter ledger. Baryon number, radiation content, entropy, and other conserved currents require additional transport data.

---

## 5. First trapping as compactness tangency

Use the Misner–Sharp variables

\[
U=D_tR,
\qquad
\mathcal G=D_\ell R,
\tag{13}
\]

where \(\mathcal G\) is used deliberately: the symbol \(\Gamma\) is reserved across the project for the parent–child conformal factor.

Define compactness

\[
\boxed{C\equiv\frac{2m}{R}.}
\tag{14}
\]

The spherical constraint is

\[
\mathcal G^2=1+U^2-C.
\tag{15}
\]

For a perfect fluid,

\[
D_\ell m=4\pi R^2\mathcal G\rho,
\qquad
D_tm=-4\pi R^2Up.
\tag{16}
\]

Suppose the first marginally trapped sphere is created at a smooth interior maximum of \(C\). Then

\[
\boxed{C_b=1,}
\qquad
\boxed{D_\ell C_b=0.}
\tag{17}
\]

Differentiating (14) gives the exact radial identity

\[
D_\ell C
=
\frac{\mathcal G}{R}
\left(8\pi R^2\rho-C\right).
\tag{18}
\]

At the nondegenerate first contact, \(C_b=1\) and \(\mathcal G_b\neq0\), so

\[
\boxed{8\pi R_b^2\rho_b=1.}
\tag{19}
\]

This is a parent-side local density condition for interior pair creation.

---

## 6. Local density and mean enclosed density

Marginality gives

\[
m_b=\frac{R_b}{2}.
\tag{20}
\]

The mean enclosed density is therefore

\[
\bar\rho_b
=
\frac{3m_b}{4\pi R_b^3}
=
\frac{3}{8\pi R_b^2}.
\tag{21}
\]

Combining this with (19) yields

\[
\boxed{\bar\rho_b=3\rho_b.}
\tag{22}
\]

This exact factor of three is a useful parent-collapse datum. It says that first interior trapping occurs where the local density is one third of the mean density enclosed by the marginal sphere.

It does **not** establish

\[
\rho_{C,b}=\bar\rho_{P,b}.
\tag{23}
\]

That tempting equality follows only after imposing the discarded isometric shortcut

\[
R_b^P=R_A^C.
\]

The current CSBHI branch instead requires a nontrivial conformal scale transfer,

\[
R_C=\Gamma R_P,
\tag{24}
\]

and a varying \(\Gamma\) contributes gradient terms to quasi-local mass. Parent marginality therefore does not automatically become child apparent-horizon marginality. Equation (22) is established parent geometry; its child interpretation remains open.

---

## 7. Pressure is encoded in the opening rate

Taking a proper-time derivative of compactness gives

\[
D_tC
=
-\frac{U}{R}
\left(C+8\pi R^2p\right).
\tag{25}
\]

At first trapping, \(C_b=1\). Equation (15) gives

\[
\mathcal G_b^2=U_b^2.
\]

For collapse with outward orientation,

\[
U_b=-\mathcal G_b.
\tag{26}
\]

Using (19) and

\[
w_b\equiv\frac{p_b}{\rho_b},
\]

we obtain

\[
\boxed{
D_tC\big|_b
=
\frac{\mathcal G_b}{R_b}(1+w_b).
}
\tag{27}
\]

For ordinary matter with \(w_b>-1\), the maximum of compactness rises through unity. The first-contact condition fixes the local density scale, while the rate at which trapping develops probes the local enthalpy ratio \(1+w_b\).

This is local total-fluid information. It is not yet a decomposition into matter and radiation species.

---

## 8. Universal square-root opening

Choose local proper time and proper radial distance near the birth event. Write

\[
t=t_b+\Delta t,
\qquad
\ell=\ell_b+\Delta\ell.
\]

For a smooth, nondegenerate fold,

\[
C-1
=
A\,\Delta t
-\frac{B}{2}(\Delta\ell)^2
+O(\Delta t^{3/2},\Delta t\,\Delta\ell,\Delta\ell^3),
\tag{28}
\]

where

\[
A=D_tC\big|_b>0,
\qquad
B=-D_\ell^2C\big|_b>0.
\tag{29}
\]

Solving \(C=1\) gives the two marginal branches,

\[
\boxed{
\Delta\ell_\pm
=
\pm\sqrt{\frac{2A}{B}}\sqrt{\Delta t}
+O(\Delta t).
}
\tag{30}
\]

Thus their coordinate speed relative to the matter behaves as

\[
\frac{d\ell_\pm}{dt}\propto\pm\frac1{\sqrt{t-t_b}},
\]

while the geometry itself remains regular.

Define the fold parameter

\[
\boxed{s_{\rm fold}\equiv\sqrt{t-t_b}.}
\tag{31}
\]

Then

\[
\ell_\pm
=
\ell_b
\pm\sqrt{\frac{2A}{B}}s_{\rm fold}
+O(s_{\rm fold}^2)
\tag{32}
\]

is smooth. The divergent matter-frame velocity is a parameterization feature of an ordinary fold bifurcation, not a curvature singularity.

---

## 9. The inward branch as a GD1 candidate

Because

\[
D_\ell R=\mathcal G,
\]

the inward member has

\[
R_-(t)
=
R_b
-\mathcal G_b
\sqrt{\frac{2A}{B}}
\sqrt{t-t_b}
+O(t-t_b).
\tag{33}
\]

Define the horizon-normalized candidate

\[
\boxed{
r_-(t)
\equiv
\frac{R_-(t)}{R_b}.
}
\tag{34}
\]

Then

\[
\boxed{
r_-(t)
=
1-\beta\sqrt{t-t_b}+O(t-t_b),
}
\tag{35}
\]

with

\[
\beta
=
\frac{\mathcal G_b}{R_b}
\sqrt{\frac{2A}{B}}
>0.
\tag{36}
\]

If GD1 is applied to this candidate,

\[
a=\frac1{r_-},
\]

then

\[
\boxed{
a
=
1+\beta\sqrt{t-t_b}+O(t-t_b).
}
\tag{37}
\]

The branch therefore has the correct normalization and direction:

\[
r_-:1\rightarrow\text{smaller values},
\qquad
a:1\rightarrow\text{larger values}.
\]

This is the strongest candidate yet found for the parent radial structure underlying the reciprocal post-crossing map.

Two cautions remain essential.

First, \(\mathcal H_-\) is a marginal hypersurface, whereas Alice follows a timelike geodesic. A transport rule connecting the branch to the cohort congruence is still required.

Second, in classical collapse the inward branch may run toward a high-curvature or singular region. A completed CSBHI geometry must specify its continuation or replacement before that endpoint.

---

## 10. The birth clock becomes a coefficient test

Equation (37) has a square-root dependence on the parent matter time. A finite child expansion rate therefore requires the child time to use the same regular fold parameter:

\[
\boxed{
\tau_C-\tau_{C,b}
=
\tau_1s_{\rm fold}
+O(s_{\rm fold}^2).
}
\tag{38}
\]

Then

\[
H_{C,b}
=
\left.
\frac1a\frac{da}{d\tau_C}
\right|_b
=
\frac{\beta}{\tau_1}
\tag{39}
\]

is finite.

The fold geometry determines \(\beta\). The event-horizon optical construction must independently determine \(\tau_1\). Their ratio is the candidate child Hubble rate.

The current conformal branch does not justify setting

\[
H_{C,b}=\frac1{R_b^P}.
\tag{40}
\]

Nor does it justify the corresponding special coefficient

\[
\tau_1
=
\mathcal G_b\sqrt{\frac{2A}{B}}.
\tag{41}
\]

Those formulas assume an isometric parent-marginal/child-apparent-horizon identification. They are retained only as the \(\Gamma=1\) diagnostic that the present theory has rejected.

The actual pass/fail test is instead

\[
\boxed{
H_{C,b}^{(\rm reciprocal)}
=
\frac{\beta}{\tau_1^{(\rm EH\ optics)}}
}
\tag{42}
\]

followed by comparison with the child Einstein equations after the conformal scale transfer is fixed.

---

## 11. What the result clarifies

The finite-throat picture reorganizes several recurring issues.

### No zero-width junction is required

The event horizon and outer trapping horizon are distinct during dynamical accretion. Their optical and surface-gravity differences are supported across a finite region by ordinary Einstein evolution.

### Teleological and local roles separate

The event horizon supplies global causal ordering and the optical clock. The trapping pair supplies a locally defined formation event and two dynamical marginal branches.

### Vaidya's limitation is identified

Null flux can determine the \(T_{\ell\ell}\) channel but omits the independent \(T_{\ell n}\) work-density information of a timelike perfect fluid. A realistic collapse is required for the full local equation of state.

### The radial candidate is no longer arbitrary

The inward branch begins at \(r_-=1\) and decreases immediately. This makes it a concrete candidate for the parent structure behind GD1, although the Alice transport law remains open.

### The apparent singular speed is harmless

The pair is smooth in \(s_{\rm fold}=\sqrt{t-t_b}\). The clock question is reduced to a comparison of independently derived leading coefficients.

### The matter ledger remains open

The geometry fixes a local density condition, a mean/local density ratio, and the enthalpy dependence of the opening rate. It does not determine the species decomposition, inherited abundance ratios, entropy, or conserved particle currents.

---

## 12. Revised formation architecture

The candidate division of labor is

\[
\boxed{
\begin{array}{ccccc}
R_E
&>&
R_+
&>&
R_-
\\[3pt]
\text{global causal clock}
&&
\text{outer local boundary}
&&
\text{candidate reciprocal branch}.
\end{array}
}
\tag{43}
\]

At pair creation,

\[
R_+(t_b)=R_-(t_b),
\]

which supplies a local physical formation event. The event horizon can already exist outside because its definition depends on the future spacetime.

This architecture supplements rather than replaces the canonical GD2 causal map:

\[
\text{parent event-horizon crossing history}
\longrightarrow
\text{outgoing child birth cone}.
\]

The trapping pair is proposed as the local machinery through which the post-crossing reciprocal evolution may be realized.

---

## 13. Next pass/fail calculation

The next calculation should use one specified, regular spherical collapse solution and determine

\[
R_E(t),
\qquad
R_+(t),
\qquad
R_-(t).
\]

It should then test the candidate

\[
r(t)=\frac{R_-(t)}{R_b}
\]

against a child time obtained independently from event-horizon optics and the completed conformal transfer.

The outputs are

\[
H_C
=
\frac1a\frac{da}{d\tau_C},
\qquad
\dot H_C,
\]

and the corresponding total child density and pressure inferred from the child Einstein equations.

No child cosmological parameter may be used to calibrate the parent clock or scale. Only after that background test succeeds should conserved currents be added to ask whether the model predicts a radiation-dominated state and a residual matter abundance.

This gives a sharp failure condition. If the independently derived optical clock and inward-branch evolution do not produce an admissible child stress-energy, the proposed trapping-pair implementation of GD1 fails.

---

## 14. Conclusion

The decisive parent-side calculation does not solve the matter ledger, but it substantially narrows the formation problem.

A smooth interior first trapping event is naturally a pair-creation fold. Compactness tangency fixes

\[
8\pi R_b^2\rho_b=1,
\qquad
\bar\rho_b=3\rho_b,
\]

while the opening rate probes \(1+w_b\). The two marginal branches separate as \(\sqrt{t-t_b}\), and the inward branch supplies the first standard GR structure with the birth normalization and decreasing radial direction required by GD1.

What remains is precisely delimited. The event horizon must determine the clock; the conformal completion must determine the child scale; a timelike Alice transport law must connect cohorts to the inward branch; and conserved matter currents must determine any species-resolved inheritance ledger.

The positive result is therefore

\[
\boxed{
\text{standard collapse supplies a viable inward reciprocal candidate,}
}
\]

not

\[
\boxed{
\text{the child cosmology has already been derived.}
}
\]

---

## References

1. A. Helou, I. Musco, and J. C. Miller, [“Causal Nature and Dynamics of Trapping Horizons in Black Hole Collapse,”](https://arxiv.org/abs/1601.05109) *Classical and Quantum Gravity* **34**, 135012 (2017), DOI: 10.1088/1361-6382/aa6d8f.

2. A. Maciel, M. Le Delliou, and J. P. Mimoso, [“A dual null formalism for the collapse of fluids in a cosmological background,”](https://arxiv.org/abs/1506.07122) *Physical Review D* **92**, 083525 (2015).

3. S. A. Hayward, [“General Laws of Black-Hole Dynamics,”](https://arxiv.org/abs/gr-qc/9303006) *Physical Review D* **49**, 6467–6474 (1994).

4. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), DOI: 10.1103/PhysRev.136.B571.
