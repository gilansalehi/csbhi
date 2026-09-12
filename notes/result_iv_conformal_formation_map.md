# Result IV — The Conformal Formation Map

## Geometric Duality: Collapse Cohorts, Horizon Formation, and the Emergence of the Child Scale

**Gilan Salehi — Working Result, September 2026**

> **Notation update — September 2026.** This note uses \(\Gamma\) for the local four-metric Weyl factor. Current cross-project notation calls that object \(\Omega_{\rm W}\) and reserves \(\Gamma=a^2=r^{-2}\) for the mature dual ruler-scale separation. The two coincide only if the throat derives that identification; Result IV does not establish it.

## Abstract

Geometric Duality I (GD1) proposed the reciprocal relation

\[
\boxed{a=\frac1r}
\]

between the normalized inward radial evolution of a freely falling parent observer and the scale evolution of an associated child cosmology.

The present result extends that construction across the finite process of black-hole formation.

A continuous family of infalling observers or null probes is considered during spherical collapse. Successive crossings of the growing parent black-hole event horizon are associated with successive events on an outgoing child birth cone. GD2 proposes that cone as the particle-horizon history of the resulting causal patch. Oppenheimer–Snyder (OS) collapse provides an exact analytic benchmark.

Several calculations then converge.

First, if one parent synchronous slice is required to map to one child cosmic-time slice for every already-crossed GD1 cohort, consistency requires homologous parent collapse,

\[
R_P(t,q)=S(t)F(q),
\]

which OS satisfies exactly.

Second, the standard tangent conformal transformation from the closed-FLRW OS interior to a flat Minkowski patch maps the pointlike past endpoint of the parent event horizon and its subsequent growth directly onto an outgoing light cone from the origin. Geometric Duality identifies that cone with the child's birth-cone history and proposes a particle-horizon interpretation. In the canonical tangent coordinates, the representative formation map is

\[
\frac{\Phi(q)}{\Phi(q_0)}
=
\frac{\tan q}{\tan q_0},
\]

whose weak-curvature limit agrees with the independently motivated homogeneous mass-shell map. A residual vertex-preserving conformal family changes the parameterization of the cone; the null geometry alone does not select its physical member.

\[
\Phi/\Phi_f\simeq\mu^{1/3}.
\]

Third, the parent OS formation patch and flat child FLRW patch admit a local Weyl relation

\[
g_C=\Gamma^2g_P,
\]

with an explicit formation-era conformal factor \(\Gamma\).

This is not an isometric junction. Corresponding physical lengths satisfy \(d\ell_C=\Gamma\,d\ell_P\) locally; parent and child areal radii and Misner–Sharp masses are not set equal, and marginality is not generally preserved when \(\nabla_a\Gamma\neq0\).

Finally, the Misner–Sharp transformation identity reproduces the child FLRW quasi-local mass. Along the formation horizon,

\[
\boxed{
M_C
=
\Gamma M_P
\cos^2q
\cos^2\!\left(\frac{3q_0-q}{2}\right)
}
\]

and therefore

\[
\boxed{M_C\simeq\Gamma M_P}
\]

in the weak-curvature OS regime. The conformal-gradient terms are negative in this patch and reduce the naïvely scaled term \(\Gamma M_P\); the absolute mass scale remains controlled by the undetermined conformal normalization.

These results establish a mathematically consistent kinematic formation picture. They do not yet determine the absolute parent-to-child conformal normalization, the dynamics that extend the null map to neighboring timelike cohorts, the physical microscopic interpretation of transformed matter, or the global continuation into the mature GD1 interior.

---

# 1. Fixed GD1 structure

GD1 is retained without modification.

For any infalling cohort \(i\), define \(r_i=1\) at that cohort's parent black-hole event-horizon crossing.

After crossing,

\[
r_i:1\rightarrow0.
\]

The cohort's relative child expansion is

\[
\boxed{
\alpha_i(\tau_i)=\frac1{r_i(\tau_i)}.
}
\tag{1}
\]

Thus

\[
\alpha_i:1\rightarrow\infty.
\]

The distinction between the **global** child scale factor \(A_C(\tau_C)\) and the **locally normalized** GD1 reciprocal factor is important:

\[
\boxed{
\frac{A_C(\tau_C)}{A_C(\tau_{C,i})}
=
\frac1{r_i(\tau_i)}.
}
\tag{2}
\]

Every Alice therefore crosses with

\[
r_i=1,
\qquad
\alpha_i=1,
\]

even though different Alices cross at different global child epochs \(\tau_{C,i}\).

No cohort-dependent replacement such as \(a(r,t)\) is introduced.

---

# 2. Causal correspondence

The working GD2 causal correspondence is

\[
\boxed{
\mathcal H_{\rm BH}^{P}
\longleftrightarrow
\mathcal N_{\rm birth}^{C}.
}
\tag{3}
\]

This is a correspondence between **histories of crossing events**.

It is not an identification of the induced angular metrics on an ordinary GR junction. In particular, the construction does not impose

\[
R_P=R_C
\qquad\text{or}\qquad
M_P=M_C.
\]

Instead the Weyl map gives \(R_C=\Gamma R_P\), while the Misner–Sharp mass also acquires conformal-gradient terms. A marginal parent sphere therefore need not map to a marginal child sphere.

It does not imply

\[
R_{\rm BH}^{P}=R_{\rm particle}^{C},
\]

nor does it imply that a late infaller passes through the primordial child boundary.

A parent crossing at a later stage maps to a later event on the outgoing child birth cone. Calling that cone a particle-horizon history additionally assumes that the vertex is the lower causal boundary of the child patch; finite \(A_C\) at the vertex does not establish that interpretation by itself.

The subsequent trajectory leaves that boundary and propagates through the already-established child geometry.

The pointlike past endpoint of the spherical parent event horizon is identified with the origin of the reference child causal patch:

\[
\boxed{
X_0
\longleftrightarrow
(\eta_C,\chi_C)=(0,0).
}
\tag{4}
\]

Thus black-hole formation and child birth are treated as corresponding **processes**, not merely simultaneous point events.

---

# 3. The continuous-beam experiment

Consider a continuous inward radial beam present throughout collapse.

The spacing of individual rays is arbitrary and carries no physical information. The beam merely samples the complete sequence of horizon-crossing events.

Let \(s\) be an operational beam label, such as proper emission time of the exterior source.

Each participating ray intersects the parent black-hole event horizon once:

\[
X_H(s)\in\mathcal H_{\rm BH}^{P}.
\]

The proposed child map is

\[
\boxed{
X_H(s)
\mapsto
Y_H(s)
=
\bigl(\Phi(s),\Phi(s)\bigr).
}
\tag{5}
\]

Afterward an inward child radial ray follows

\[
\frac{d\chi_C}{d\eta_C}=-1,
\]

so a ray entering at

\[
(\eta_s,\chi_s)=(\eta_s,\eta_s)
\]

obeys

\[
\boxed{
\chi_C(\eta_C)=2\eta_s-\eta_C
}
\tag{6}
\]

until reaching the center.

The horizon therefore labels the ray's entry event. It does not remain the ray's subsequent trajectory.

---

# 4. Exact Oppenheimer–Snyder benchmark

Use the homogeneous OS dust interior

\[
ds_P^2
=
S^2(\eta_P)
\left[
-d\eta_P^2+dq^2+\sin^2q\,d\Omega^2
\right],
\tag{7}
\]

with

\[
\boxed{
S(\eta_P)
=
\frac{A_m}{2}(1+\cos\eta_P).
}
\tag{8}
\]

The stellar surface is

\[
q=q_0,
\]

and matching to the Schwarzschild exterior gives

\[
\boxed{
2M=A_m\sin^3q_0.
}
\tag{9}
\]

The enclosed Misner–Sharp mass is

\[
\boxed{
M_P(q)
=
\frac{A_m}{2}\sin^3q.
}
\tag{10}
\]

Hence the enclosed mass fraction is

\[
\boxed{
\mu(q)
=
\left(
\frac{\sin q}{\sin q_0}
\right)^3.
}
\tag{11}
\]

---

# 5. Formation of the parent event horizon

Radial OS null curves satisfy

\[
\frac{dq}{d\eta_P}=\pm1.
\]

The stellar surface reaches its Schwarzschild radius at

\[
\boxed{
\eta_H=\pi-2q_0.
}
\tag{12}
\]

The outgoing event-horizon generator therefore has its central past endpoint at

\[
\boxed{
\eta_0=\pi-3q_0.
}
\tag{13}
\]

For the event-horizon vertex to lie after the conventional OS initial slice at maximum expansion, the benchmark must satisfy

\[
\boxed{q_0<\frac{\pi}{3}.}
\]

Since \(R_{\rm init}=A_m\sin q_0\) and \(2M=A_m\sin^3q_0\), this is equivalently

\[
\frac{2M}{R_{\rm init}}=\sin^2q_0<\frac34.
\]

For \(q_0\ge\pi/3\), the formal vertex lies before the selected initial slice: the tangent map still exists, but the chosen OS interval does not contain the black hole's formation from a horizon-free initial state.

Inside the matter,

\[
\boxed{
q_E=\eta_P-\eta_0.
}
\tag{14}
\]

Thus the OS event horizon begins as a point at

\[
(\eta_0,0)
\]

and sweeps continuously outward until reaching

\[
(\eta_H,q_0).
\]

A continuous incoming beam consequently intersects every stage of this formation history.

The event horizon reaches each interior matter shell before that shell becomes locally marginal. The marginality time is

\[
\boxed{
\eta_{\rm trap}(q)=\pi-2q,
}
\tag{15}
\]

while the event horizon reaches it at

\[
\boxed{
\eta_E(q)=\pi-3q_0+q.
}
\tag{16}
\]

Therefore

\[
\boxed{
\eta_{\rm trap}-\eta_E
=
3(q_0-q).
}
\tag{17}
\]

Only at the outer surface do the two coincide.

This makes explicit that the GD2 correspondence concerns the global event horizon, not the trapping horizon.

---

# 6. Multi-cohort consistency

The crucial GD2 requirement is that multiple Alices who cross at different stages must nevertheless inhabit **one child cosmology**.

For a general spherical parent geometry let

\[
R_P(t,q)
\]

be the physical radius of shell \(q\).

A shell \(q_i\) crossing at \(t_i\) has normalized GD1 radius

\[
r_i(t)
=
\frac{R_P(t,q_i)}
{R_P(t_i,q_i)}.
\tag{18}
\]

Suppose one parent synchronous time \(t\) maps to one child cosmic proper time \(\tau_C(t)\), independent of \(q\). GD1 then requires

\[
\frac{A_C[\tau_C(t)]}{A_C[\tau_C(t_i)]}
=
\frac1{r_i(t)}.
\tag{19}
\]

Taking a time derivative,

\[
H_C(\tau_C)\frac{d\tau_C}{dt}
=
-\partial_t\ln R_P(t,q_i).
\tag{20}
\]

The left-hand side belongs to the single child universe and therefore cannot depend on which already-crossed cohort is used.

Hence

\[
\boxed{
\partial_q\partial_t\ln R_P=0.
}
\tag{21}
\]

Integration gives

\[
\boxed{
R_P(t,q)=S(t)F(q).
}
\tag{22}
\]

Thus a shell-independent parent-to-child synchronization requires homologous collapse. A more general event map \(\tau_C(t,q)\) need not obey Equation (21), and areal-radius separability alone is not sufficient to establish a complete FLRW metric.

OS satisfies the stronger condition exactly:

\[
R_P(\eta_P,q)=S(\eta_P)\sin q.
\]

Consequently,

\[
\boxed{
A_C[\Phi(q)]\,S[\eta_E(q)]
=
K
}
\tag{23}
\]

during the OS formation sweep.

Equivalently,

\[
\boxed{A_C\propto S^{-1}.}
\tag{24}
\]

Parent homogeneous contraction therefore maps directly onto child homogeneous expansion under the stated synchronization.

---

# 7. Exact conformal formation map

Shift the parent conformal time:

\[
\bar\eta=\eta_P-\eta_0.
\]

During formation, the parent event horizon is simply

\[
\boxed{\bar\eta=q.}
\tag{25}
\]

The standard conformal map from the closed Einstein-cylinder geometry to flat spherical Minkowski coordinates is

\[
T_M-\rho_M
=
\tan\frac{\bar\eta-q}{2},
\]

\[
T_M+\rho_M
=
\tan\frac{\bar\eta+q}{2}.
\tag{26}
\]

Equivalently,

\[
T_M
=
\frac{\sin\bar\eta}
{\cos\bar\eta+\cos q},
\qquad
\rho_M
=
\frac{\sin q}
{\cos\bar\eta+\cos q}.
\tag{27}
\]

On the event horizon,

\[
\bar\eta=q,
\]

and therefore

\[
\boxed{
T_{M,H}=\rho_{M,H}=\frac12\tan q.
}
\tag{28}
\]

Thus the pointlike parent event-horizon origin maps to

\[
T_M=\rho_M=0,
\]

while the complete growing parent event horizon maps to

\[
\boxed{T_M=\rho_M,}
\tag{29}
\]

an outgoing flat-space light cone.

Geometric Duality identifies the same cone, after multiplication by the child FLRW scale factor, with the outgoing child birth cone. The canonical \(\beta=0\) normalized candidate event map is therefore

\[
\boxed{
\frac{\Phi_{\rm conf}(q)}
{\Phi_{\rm conf}(q_0)}
=
\frac{\tan q}{\tan q_0}.
}
\tag{30}
\]

The first step—the map to a Minkowski null cone—is standard conformal geometry. The second—the physical identification of that cone as the child's birth boundary, and potentially its particle-horizon history—is the GD2 correspondence.

---

# 8. Recovery of the conceptual shell map in the canonical completion

Independently, homogeneous shell correspondence suggested

\[
\chi_C\propto\mu^{1/3}.
\]

Using Equation (11),

\[
\boxed{
\frac{\Phi_{\rm shell}(q)}{\Phi_f}
=
\frac{\sin q}{\sin q_0}
=
\mu^{1/3}.
}
\tag{31}
\]

For weak curvature,

\[
q_0\ll1,
\]

both maps become

\[
\boxed{
\frac{\Phi}{\Phi_f}
\simeq
\frac{q}{q_0}
\simeq
\mu^{1/3}.
}
\tag{32}
\]

Their difference begins only at second order in the parent curvature parameter \(q_0\).

Thus the intuitive statement

\[
\text{fraction of parent radial formation}
\longleftrightarrow
\text{fraction of child causal radius}
\]

is recovered as the leading-order limit of the exact conformal construction.

Within the canonical \(\beta=0\) tangent completion, the shell map is therefore not required as an independent postulate in the OS weak-curvature limit. A different allowed bulk conformal completion can change this normalized correspondence, so the recovery is not yet completion-independent.

---

# 9. Formation-era Weyl factor

Define

\[
D(\bar\eta,q)
=
\cos\bar\eta+\cos q.
\tag{33}
\]

The flat metric satisfies

\[
ds_M^2
=
\frac1{D^2}
\left[
-d\bar\eta^2+dq^2+\sin^2q\,d\Omega^2
\right].
\tag{34}
\]

Hence

\[
\boxed{g_P=(SD)^2g_M.}
\tag{35}
\]

The child flat FLRW geometry is

\[
\boxed{g_C=\mathcal A_C^2(T_M)g_M,}
\tag{36}
\]

where \(\mathcal A_C\) includes the constant conversion from the dimensionless Minkowski coordinate \(T_M\) to the chosen child conformal coordinate.

Therefore the formation patches are related by

\[
\boxed{g_C=\Gamma^2g_P,}
\tag{37}
\]

with

\[
\boxed{
\Gamma(\bar\eta,q)
=
\frac{\mathcal A_C(T_M)}
{S(\eta_P)D(\bar\eta,q)}.
}
\tag{38}
\]

This is an actual local four-dimensional Weyl relation once the child scale factor has been supplied.

It is not assumed to continue globally into the mature \(r\rightarrow0\), de Sitter GD1 future. Earlier analysis showed that requiring one simple global Weyl factor to perform every role is excessively restrictive.

On the formation horizon,

\[
D_H=2\cos q.
\]

Using Equation (23),

\[
\mathcal A_C\propto\frac KS,
\]

with the fixed coordinate conversion absorbed into \(K\), so

\[
\boxed{
\Gamma_H(q)
=
\frac{K}
{2S_H^2(q)\cos q}.
}
\tag{39}
\]

For OS,

\[
\boxed{
S_H(q)
=
A_m
\sin^2
\left(
\frac{3q_0-q}{2}
\right).
}
\tag{40}
\]

Thus the relative formation-era Weyl evolution is explicitly known. The absolute value remains open until the parent-to-child conformal normalization is fixed physically.

---

# 10. Relative expansion during formation

The global child FLRW scale changes during the event-horizon sweep according to

\[
\frac{A_C(q)}{A_C(0)}
=
\frac{S_H(0)}{S_H(q)}.
\tag{41}
\]

At the end of formation,

\[
\boxed{
\frac{A_f}{A_0}
=
\left[
\frac{\sin(3q_0/2)}
{\sin q_0}
\right]^2.
}
\tag{42}
\]

In the weak-curvature limit,

\[
\boxed{
\frac{A_f}{A_0}\rightarrow\frac94.
}
\tag{43}
\]

The number of relative FLRW e-folds generated while the event horizon traverses the original matter is therefore

\[
\boxed{
N_{\rm form}
=
\ln\frac94
\simeq0.81.
}
\tag{44}
\]

Thus the event-horizon sweep does **not** dynamically generate the entire parent-child hierarchy.

It establishes and adjusts the child conformal frame by an order-unity amount.

The much larger scale separation must involve the absolute conformal normalization and the subsequent GD1 evolution

\[
r:1\rightarrow0,
\qquad
a:1\rightarrow\infty.
\]

---

# 11. Effective formation expansion

Combining

\[
A_C(q)\propto\frac1{S_H(q)}
\]

with

\[
T_{M,H}=\frac12\tan q
\]

gives, in the dimensionless Minkowski conformal coordinate,

\[
\boxed{
\mathcal H_C
=
2\cos^2q
\cot
\left(
\frac{3q_0-q}{2}
\right).
}
\tag{45}
\]

Here \(\mathcal H_C=d\ln A_C/dT_M\). If the dimensionful child conformal coordinate is written \(\eta_C=2LT_M=L\tan q\), then

\[
\frac{d\ln A_C}{d\eta_C}
=
\frac1L\cos^2q\cot\left(\frac{3q_0-q}{2}\right).
\]

The factor of two is therefore a coordinate normalization, not a second expansion law.

For a flat FLRW interpretation,

\[
w
=
-\frac13
-\frac23
\frac{\mathcal H_C'}
{\mathcal H_C^2}.
\tag{46}
\]

Writing

\[
y=\frac{3q_0-q}{2},
\]

one obtains

\[
\boxed{
w(q)
=
-\frac13
+\frac43\tan q\tan y
-\frac1{3\cos^2y}.
}
\tag{47}
\]

In the weak-curvature limit,

\[
\boxed{w\rightarrow-\frac23.}
\tag{48}
\]

For the displayed \(T_M=\tfrac12\tan q\) completion, the endpoint values are

\[
w(0)
=
-\frac23
-\frac13\tan^2\!\left(\frac{3q_0}{2}\right),
\qquad
w(q_0)
=
-\frac23+\tan^2q_0.
\]

Over \(0\le q\le q_0<\pi/3\), this representative \(w(q)\) increases monotonically while \(A_C\) grows. A positive radiation–matter–vacuum mixture instead evolves toward smaller effective \(w\). The displayed formation metric therefore cannot already be that standard mixture throughout the sweep; it requires a different completion, additional formation stress, or a later transition.

The null cone does not select the displayed completion uniquely. A conformal automorphism preserving its vertex permits

\[
\eta_C(q)
=
\frac{\lambda\tan q}{1+\beta\tan q},
\]

which changes the inferred effective equation of state to

\[
w_\beta(q)
=
-\frac13
-\frac1{3\cos^2y}
+\frac43\tan y\,
\frac{\tan q-\beta}{1+\beta\tan q},
\qquad
y=\frac{3q_0-q}{2}.
\]

Thus \(w\to-2/3\) is the \(\beta=0\) representative, not an invariant prediction of the null map. The parameter is not necessarily a mere coordinate gauge: unless the complete physical metric is transformed with it, different \(\beta\) values define different bulk FLRW completions. A field equation, comoving congruence, or boundary regularity condition must select the admissible value.

The \(\beta=0\), weak-curvature completion therefore produces accelerated child expansion, although the finite OS horizon sweep itself provides less than one e-fold. More generally, its endpoint value is

\[
w_f=-\frac23+\tan^2q_0,
\]

so endpoint acceleration requires \(q_0<\pi/6\).

This should not be identified with conventional scalar-field inflation. A complete construction must also connect the formation-era effective fluid to the mature GD1 matter–radiation–\(\Lambda\) history without an uncontrolled discontinuity in \(A_C\), \(H_C\), or \(\dot H_C\).

---

# 12. Quasi-local mass under the conformal map

For a spherical Weyl transformation

\[
\widetilde g_{ab}=\Gamma^2g_{ab},
\]

the Misner–Sharp mass transforms as

\[
\boxed{
\widetilde M
=
\Gamma M
-\frac{R^3}{2\Gamma}
\nabla^a\Gamma\nabla_a\Gamma
-R^2\nabla^a\Gamma\nabla_aR.
}
\tag{49}
\]

Apply this to the direct OS-parent-to-FLRW-child map.

The child Misner–Sharp mass also satisfies the standard flat-FLRW identity

\[
\boxed{
M_C=\frac12H_C^2R_C^3
}
\tag{50}
\]

in geometrized units.

Along the formation horizon, direct evaluation gives

\[
\boxed{
M_C
=
\Gamma_H M_P
\cos^2q
\cos^2
\left(
\frac{3q_0-q}{2}
\right).
}
\tag{51}
\]

Thus for weakly curved OS collapse,

\[
q_0\ll1,
\]

\[
\boxed{M_C\simeq\Gamma_HM_P.}
\tag{52}
\]

The transformation law is exact, but its agreement with Equation (50) is a consistency identity rather than an independent dynamical test. Its useful content is the decomposition. Defining the combined gradient term by

\[
M_\nabla\equiv M_C-\Gamma_HM_P,
\]

Equation (51) gives

\[
\boxed{
M_\nabla
=
-\Gamma_HM_P
\left[
1-
\cos^2q
\cos^2
\left(
\frac{3q_0-q}{2}
\right)
\right]
\le0.
}
\tag{53}
\]

The conformal-gradient terms therefore reduce the naïvely scaled parent mass in the OS formation patch. The child quasi-local mass can still be parametrically larger than the parent stellar mass through the conformal factor, but the absolute size of that factor has not been derived.

The corresponding compactness relation along the formation horizon is

\[
\frac{2M_C}{R_C}
=
\frac{2M_P}{R_P}
\cos^2q
\cos^2\!\left(\frac{3q_0-q}{2}\right).
\]

At the stellar surface, where the parent event horizon and trapping horizon meet, a marginal parent sphere therefore maps to child compactness \(\cos^4q_0\), not unity. The conformal formation map does not transfer marginality except in the limiting case \(q_0\to0\) or under additional conditions that remove the gradient correction.

This is a statement about **geometric quasi-local mass**. It does not establish that baryonic rest mass transforms according to

\[
M_{\rm baryon,C}=\Gamma M_{\rm baryon,P}.
\]

Nor should Equation (53) be read as a negative local energy density: the terms in the conformal mass transformation are not separately conserved matter components. The physical decomposition of the transformed stress-energy remains to be determined.

---

# 13. Geometric interpretation

The calculations suggest the following picture.

Before black-hole formation there is no established GD child interior.

At the past endpoint of the event horizon, the parent black-hole causal region first appears as a point:

\[
R_E=0.
\]

This event corresponds to the pointlike origin of the child causal patch.

The event horizon then rapidly sweeps outward through matter already participating in the collapse.

Successive matter elements cross at increasingly large parent horizon radius.

The earliest elements therefore constitute order-unity fractions of the available parent interior scale.

Later elements constitute progressively smaller fractions.

At one event, ratios of co-located infinitesimal lengths are preserved because the same local \(\Gamma\) multiplies both:

\[
\boxed{
\frac{\ell_C}{R_C}
=
\frac{\ell_P}{R_P}.
}
\tag{54}
\]

This local statement does not automatically compare an extended microscopic object with a global child horizon when \(\Gamma\) varies appreciably across the region. Such a comparison requires integrating the complete conformal geometry.

Where \(\Gamma\) is approximately uniform over both structures, microscopic parent structures encountered when the horizon itself is microscopic can correspond to macroscopic fractions of the newborn child geometry.

As the parent horizon grows, the same microscopic object corresponds to an increasingly local child structure.

This supplies a possible geometric route from coarse, large-scale early structure toward increasingly fine late structure.

No quantum wavefunction delocalization has been derived. The present result concerns classical geometric extent only.

---

# 14. Ancient and present observers

An early Alice and a late Alice are both locally ordinary.

Each crosses with

\[
r_i=1,
\qquad
\alpha_i=1.
\]

Neither experiences an abrupt conformal force.

The physical distinction appears only when widely separated epochs are compared:

\[
\boxed{
\frac{A_C(\tau_{C,2})}{A_C(\tau_{C,1})}
=
\frac{r(T_1)}{r(T_2)}.
}
\tag{55}
\]

Hence an object can be locally normal in its own epoch while being represented on a radically different scale relative to a much later epoch.

Most of the unbounded GD1 scale evolution occurs not at the horizon,

\[
r\simeq1,
\]

but deep in the reciprocal evolution,

\[
r\rightarrow0,
\]

because

\[
\boxed{a=\frac1r.}
\tag{56}
\]

Differentially,

\[
\boxed{d\ln a=-d\ln r.}
\tag{57}
\]

The limit

\[
r\rightarrow0
\]

is the child's remote future, not its Big Bang.

The pointlike **event-horizon vertex** and the \(r\rightarrow0\) **interior limit** are therefore two distinct geometric notions and must not be conflated.

---

# 15. What Result IV establishes

Within the homogeneous OS benchmark, the following statements are mutually consistent:

1. A pointlike parent event-horizon origin corresponds, under the proposed GD identification, to a pointlike child causal origin.

2. The growing parent event horizon maps conformally onto an outgoing Minkowski null cone.

3. Successive horizon-crossing events can therefore map monotonically onto an outgoing child birth cone; interpreting that cone as a particle horizon requires an additional statement about the child's lower causal boundary.

4. If parent synchronous slices map to common child-time slices, multi-cohort reciprocal consistency requires homologous parent collapse.

5. OS collapse satisfies that condition exactly.

6. Parent contraction and child expansion obey

   \[
   A_C\propto S_P^{-1}.
   \]

7. In the canonical \(\beta=0\) completion, the conformal event map reduces in the weak-curvature limit to the independently motivated homogeneous mass-shell map

   \[
   \Phi/\Phi_f\simeq\mu^{1/3}.
   \]

8. The formation patch admits an explicit local Weyl factor \(\Gamma\).

9. The conformal Misner–Sharp identity supplies a diagnostic mass decomposition and shows explicitly that the map does not generally preserve marginality.

10. In weak-curvature OS formation,

\[
M_C\simeq\Gamma M_P.
\]

No mathematical obstruction has appeared in the null and quasi-local kinematics of this benchmark. Extending the construction to the timelike cohort congruence remains open.

---

# 16. What Result IV does not establish

The following remain open.

### Absolute scale calibration

The calculations determine relative formation-era scaling but not the absolute magnitude of the parent-to-child conformal factor.

The dimensionless collapse equations cannot by themselves determine why a stellar parent corresponds to a cosmological child scale.

### Timelike transport

Conformal transformations preserve null geodesics as unparameterized curves, but do not automatically map parent timelike dust trajectories into child comoving geodesics.

The neighboring Alice congruence, its acceleration, expansion, and shear must be constructed explicitly.

### Physical stress-energy

The transformed quasi-local gravitational mass is known geometrically.

The corresponding physical decomposition into

\[
\rho,
\qquad
p,
\qquad
\text{matter},
\qquad
\text{radiation},
\qquad
\text{vacuum/conformal contributions}
\]

has not yet been derived from an independent dynamical law.

### Birth limit

The behavior of the full conformal correspondence at the exact transition

\[
R_E\rightarrow0^+
\]

requires further analysis.

The current calculation does not establish whether an absolute \(\Gamma\) is finite, divergent, or only becomes physically defined once the child conformal frame exists.

### Global completion

The local formation-era Weyl relation has not yet been connected to the complete mature GD1 evolution

\[
r:1\rightarrow0
\]

and its asymptotic de Sitter future.

A single simple 4D Weyl factor is not assumed to describe the complete global construction.

### Realistic collapse

OS is homogeneous, pressureless, and nonrotating.

Real collapse introduces pressure, density gradients, angular momentum, shocks, and radiation.

Equation (21) suggests how exact homology enters the simplest synchronization. A covariant perturbative treatment must instead track the resulting density contrast, shear, and Weyl curvature.

---

# 17. Next theoretical pass/fail tests

The next stage is no longer primarily a search for the correct causal shape.

The highest-value remaining theoretical calculations are:

### I. Conformal dynamics and normalization

Supply a definite conformal junction principle, scale-field action, or equivalent field equation and determine whether it fixes \(K\). The Weyl relation must arise dynamically rather than serving only as a map between two preselected conformally flat metrics.

### II. Timelike transport and effective stress-energy

Extend the explicit formation map away from the null generator. Compute the child timelike congruence, the transformed Einstein tensor, and

\[
\rho_C,
\qquad
p_C,
\]

including the contribution associated with gradients of \(\Gamma\). Determine whether the required matter is regular and physically admissible.

### III. Global continuation

Join the finite formation solution continuously onto mature GD1 reciprocal evolution and test curvature, stress-energy, and causal regularity through the transition.

### IV. Perturbations

Replace exact OS homology with weakly inhomogeneous spherical collapse and determine whether parent density fluctuations map into acceptable child primordial perturbations.

### V. Rotation

Generalize to rotating collapse and determine whether parent angular momentum produces unacceptable child anisotropy or is conformally suppressed.

These are substantive new calculations rather than repairs to the formation picture.

---

# Conclusion

The GD2 formation problem appears substantially simpler once the correspondence is formulated correctly.

The parent event horizon is not identified with the child's future event horizon, physical horizon radii are not equated, and late infallers are not sent backward through the child's primordial boundary.

Instead, the finite history of black-hole formation is mapped onto the finite development of an outgoing child birth cone.

In the exactly soluble OS benchmark, standard conformal geometry does something unexpectedly close to the desired construction automatically:

\[
\boxed{
\text{pointlike parent event horizon}
\rightarrow
\text{growing parent event horizon}
}
\]

maps onto

\[
\boxed{
\text{pointlike Minkowski origin}
\rightarrow
\text{outgoing null cone}.
}
\]

Geometric Duality identifies that cone with the child's birth-cone history and proposes its particle-horizon interpretation. The GD1 reciprocal law then makes the descriptions of successive infalling cohorts mutually consistent under a shell-independent synchronization and converts homogeneous parent contraction into homogeneous child expansion.

In the canonical tangent completion, the resulting formation-era conformal factor recovers, at leading order, the radial mass-fraction map independently proposed from the conceptual picture. Its Misner–Sharp transformation reproduces the child FLRW quasi-local mass and shows explicitly how the gradient terms correct the naïve conformal scaling. Selecting the physical member of the residual conformal family remains part of the formation problem.

The principal unresolved question has therefore shifted.

It is no longer:

\[
\boxed{
\text{Does the desired causal shape occur in the OS conformal geometry?}
}
\]

Within the OS benchmark, the answer is yes.

The question is now:

\[
\boxed{
\text{What dynamics fix the physical scale and carry the null map into the complete child spacetime?}
}
\]

That question contains the remaining GD2 construction.

---

## References

1. G. Salehi, [*Geometric Duality: Conformal Scaling of Black Hole Interiors*](../gd1.html), preprint (2026), [doi:10.5281/zenodo.21864669](https://doi.org/10.5281/zenodo.21864669).
2. J. R. Oppenheimer and H. Snyder, “On Continued Gravitational Contraction,” *Physical Review* **56**, 455–459 (1939), [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455).
3. J. Frauendiener, “Conformal Infinity,” *Living Reviews in Relativity* **3**, 4 (2000), [doi:10.12942/lrr-2000-4](https://doi.org/10.12942/lrr-2000-4).
4. V. Faraoni and V. Vitagliano, “Horizon Thermodynamics and Spacetime Mappings,” *Physical Review D* **89**, 064015 (2014), [arXiv:1401.1189](https://arxiv.org/abs/1401.1189).
5. E. Poisson, “A Reformulation of the Barrabès–Israel Null-Shell Formalism,” [arXiv:gr-qc/0207101](https://arxiv.org/abs/gr-qc/0207101).
