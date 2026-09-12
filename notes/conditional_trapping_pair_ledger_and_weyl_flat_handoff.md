# The Conditional Trapping-Pair Ledger and Weyl-Flat Handoff

## Horizon jets, local matching criteria, and the remaining conformal transfer

**Working calculation — September 2026. Source: upstream project derivation. Independent audit and revisions: Codex (OpenAI).**

> **Notation update — September 2026.** The factors \(\mathscr S_+\) and \(\mathscr S_f\) below are generic scale-transfer dressings of selected parent spheres. They must not be silently identified either with the mature ruler scale \(\Gamma=a^2=r^{-2}\) or with the local four-metric Weyl factor \(\Omega_{\rm W}\). Deriving those relations is part of the throat problem.

---

## Abstract

The inward and outward branches created at first trapping provide a promising geometric carrier for the homogeneous child matter ledger. The raw parent curve \(R_+(R_-)\), however, is not by itself the child Friedmann history on the current conformal CSBHI branch.

Let

\[
r=\frac{R_-}{R_b},
\qquad
a=\frac1r
\]

be the candidate reciprocal identification. If the outer parent trapping branch is selected as the preimage of the child apparent horizon, then physical radii must be related conformally:

\[
R_A^C(r)=\mathscr S_+(r)R_+(r),
\qquad
R_{\rm dS}^C=\mathscr S_fR_f.
\]

Define the conformally dressed outer-horizon curve

\[
\boxed{
\mathcal R_+(r)
\equiv
\frac{\mathscr S_+(r)R_+(r)}
{\mathscr S_fR_f}.
}
\]

Only after this transfer condition is supplied does the child Friedmann function become

\[
\boxed{
P(r)
\equiv
\frac{H_C^2}{H_\Lambda^2}
=
\mathcal R_+^{-2}(r).
}
\]

For a flat matter–radiation–\(\Lambda\) child,

\[
P(r)=1+\eta_mr^3+\eta_rr^4+\cdots,
\]

so the future jet of the dressed parent curve obeys

\[
\boxed{
\eta_m=-\frac{\mathcal R_+^{(3)}(0)}3,
\qquad
\eta_r=-\frac{\mathcal R_+^{(4)}(0)}{12}.
}
\]

The normalization-independent combination

\[
\mathcal J\equiv\frac{\eta_r^3}{\eta_m^4}
\]

is therefore

\[
\boxed{
\mathcal J
=
-\frac3{64}
\frac{[\mathcal R_+^{(4)}(0)]^3}
{[\mathcal R_+^{(3)}(0)]^4}.
}
\]

This identifies a precise geometric representation of the total matter/radiation ledger. It does not yet compute that ledger from the raw trapping pair because \(\mathscr S_+(r)\), the marginal-surface transfer, and the Alice–branch transport law remain open.

A second result is entirely parent-side. On a perfect-fluid marginal sphere,

\[
\frac{2m}{R}=1,
\qquad
\mathcal W=0
\]

imply

\[
\rho_{\rm local}=\bar\rho=\frac{3}{8\pi R^2},
\qquad
\kappa_HR=\frac{3w-1}{4},
\qquad
v_H=-\frac{1+3w}{2}.
\]

These relations have exactly the same equation-of-state dependence as a flat-FLRW apparent horizon. They provide a compelling local handoff criterion, but a varying conformal factor can change marginality and surface gravity through its derivatives. Functional agreement is therefore evidence for the proposed correspondence, not proof of it.

The appropriate conclusion is:

\[
\boxed{
\textbf{ledger representation identified; conformal closure and universal value open.}
}
\]

---

## 1. Audit verdict

The upstream calculation contains four distinct results that must not be conflated.

### Established parent geometry

The trapping-horizon pair, its local Misner–Sharp identities, the Weyl-flat marginal relations, and the dependence of the pair trajectory on the parent equation of state and initial data are standard spherical GR.

### Exact conditional algebra

Once a child Friedmann history is represented by a normalized radius curve, the third and fourth derivatives of that curve encode the dust and radiation coefficients. The invariant \(\mathcal J\) and the local fraction formulas then follow exactly.

### Candidate CSBHI correspondence

CSBHI proposes that the inward branch supplies \(r\), while the outer branch—after conformal dressing—supplies the child apparent-horizon scale.

### Still-open construction

The present theory has not proved that a parent marginal sphere maps to a child marginal sphere. It has also not derived the function \(\mathscr S_+(r)\), connected the marginal branch to Alice's timelike congruence, or fixed the child clock from event-horizon optics.

Accordingly, this note does not reinstate

\[
R_+^P=R_A^C.
\]

That equation is the discarded isometric special case \(\mathscr S_+=1\).

---

## 2. Why raw parent marginality does not transfer

Suppose

\[
g^C_{ab}=\Omega_{\rm W}^2g^P_{ab}.
\tag{1}
\]

The areal radius transforms as

\[
R_C=\Omega_{\rm W} R_P.
\tag{2}
\]

For correspondingly normalized outgoing null directions, the null expansion transforms schematically as

\[
\boxed{
\theta_\ell^C
=
\Omega_{\rm W}^{-1}
\left(
\theta_\ell^P
+2\ell[\ln\Omega_{\rm W}]
\right).
}
\tag{3}
\]

Therefore

\[
\theta_\ell^P=0
\]

does not imply

\[
\theta_\ell^C=0
\]

unless the conformal derivative satisfies the additional condition

\[
\boxed{
\ell(\ln\Omega_{\rm W})=0
}
\tag{4}
\]

on the mapped sphere, or an equivalent condition follows from the completed event map and null normalization.

The same issue appears in quasi-local mass and surface gravity: derivatives of \(\Omega_{\rm W}\) contribute. Parent and child marginality cannot be transferred by equating compactness symbols alone.

This is why the raw ratio

\[
\frac{R_+(r)}{R_f}
\]

cannot yet be identified with the normalized child apparent-horizon radius.

---

## 3. The conformally dressed ledger curve

Adopt the candidate inward-branch relation

\[
\boxed{
r=\frac{R_-}{R_b},
\qquad
a=\frac{R_b}{R_-}.
}
\tag{5}
\]

Now add a second, explicitly conditional statement:

> The conformal image of the outer trapping branch is the child apparent-horizon history.

Then

\[
\boxed{
R_A^C(r)=\mathscr S_+(r)R_+(r).
}
\tag{6}
\]

At the future endpoint let

\[
R_{\rm dS}^C=\mathscr S_fR_f,
\qquad
H_\Lambda=\frac{c}{R_{\rm dS}^C}.
\tag{7}
\]

Define

\[
\boxed{
\mathcal R_+(r)
\equiv
\frac{R_A^C(r)}{R_{\rm dS}^C}
=
\frac{\mathscr S_+(r)R_+(r)}
{\mathscr S_fR_f}.
}
\tag{8}
\]

For a spatially flat child,

\[
R_A^C=\frac{c}{H_C}.
\tag{9}
\]

Equations (7)–(9) give

\[
\boxed{
P(r)
\equiv
\frac{H_C^2}{H_\Lambda^2}
=
\mathcal R_+^{-2}(r).
}
\tag{10}
\]

The upstream raw-horizon formula

\[
P(r)=\left(\frac{R_f}{R_+(r)}\right)^2
\tag{11}
\]

is recovered only when the relevant conformal ratio is constant,

\[
\frac{\mathscr S_+(r)}{\mathscr S_f}=1.
\tag{12}
\]

That is a useful special-case diagnostic, not the current general CSBHI result.

---

## 4. The future-boundary jet

For the standard flat matter–radiation–\(\Lambda\) background written in the GD variable \(r=1/a\),

\[
\boxed{
P(r)=1+\eta_mr^3+\eta_rr^4+\cdots.
}
\tag{13}
\]

This expansion assumes a completed global solution in which the inward branch reaches the reciprocal endpoint \(r\to0\), the dressed outer branch approaches a stationary de Sitter radius smoothly, and no additional homogeneous component contributes a lower-order or competing term. Ordinary singular collapse does not establish that endpoint; it is part of the GD2 completion being tested.

Here \(\eta_m\) and \(\eta_r\) are the matter/vacuum and radiation/vacuum coefficients in the chosen reciprocal normalization. Under a constant rescaling of \(a\), the individual coefficients change, but

\[
\mathcal J\equiv\frac{\eta_r^3}{\eta_m^4}
\tag{14}
\]

does not.

From

\[
P=\mathcal R_+^{-2}
\]

and \(\mathcal R_+(0)=1\), the absence of \(r\) and \(r^2\) terms requires

\[
\boxed{
\mathcal R_+'(0)=0,
\qquad
\mathcal R_+''(0)=0.
}
\tag{15}
\]

Taylor expansion through fourth order gives

\[
\boxed{
\eta_m
=
-\frac{\mathcal R_+^{(3)}(0)}3,
}
\tag{16}
\]

\[
\boxed{
\eta_r
=
-\frac{\mathcal R_+^{(4)}(0)}{12}.
}
\tag{17}
\]

Consequently,

\[
\boxed{
\mathcal J
=
-\frac3{64}
\frac{[\mathcal R_+^{(4)}(0)]^3}
{[\mathcal R_+^{(3)}(0)]^4}.
}
\tag{18}
\]

If

\[
A_3=-\mathcal R_+^{(3)}(0)>0,
\qquad
A_4=-\mathcal R_+^{(4)}(0)>0,
\tag{19}
\]

then

\[
\boxed{
\frac{A_4}{A_3^{4/3}}
=
\left(\frac{64\mathcal J}{3}\right)^{1/3}.
}
\tag{20}
\]

Using the same Planck-era benchmark ratios employed elsewhere in the project,

\[
\eta_m\simeq0.4599,
\qquad
\eta_r\simeq1.343\times10^{-4},
\]

gives

\[
\boxed{
\mathcal J_{\rm benchmark}
\simeq
5.42\times10^{-11},
}
\tag{21}
\]

and therefore

\[
\boxed{
\frac{A_4}{A_3^{4/3}}
\simeq
1.05\times10^{-3}.
}
\tag{22}
\]

These are target values for a completed parent-to-child calculation, not inputs permitted in a prediction.

---

## 5. Parent interpretation of the powers

Let \(s\) be any smooth parent parameter approaching the future endpoint. Suppose

\[
R_-\sim s^q
\tag{23}
\]

and the **dressed** outer radius approaches its endpoint as

\[
1-\mathcal R_+
\sim
A\,s^{p_1}
+B\,s^{p_2}
+\cdots.
\tag{24}
\]

Eliminating \(s\) gives

\[
1-\mathcal R_+
\sim
\widetilde A\,r^{p_1/q}
+\widetilde B\,r^{p_2/q}
+\cdots.
\tag{25}
\]

For a separately conserved perfect-fluid component with constant equation of state \(w\),

\[
\rho_w\propto a^{-3(1+w)}
\propto r^{3(1+w)}.
\tag{26}
\]

Thus a mode with exponent

\[
\boxed{
n=\frac pq=3(1+w)
}
\tag{27}
\]

has the child scaling associated with that fluid:

\[
\boxed{
\text{dust: }n=3,
\qquad
\text{radiation: }n=4.
}
\tag{28}
\]

The exponent ratio \(p/q\) is invariant under a smooth reparameterization of \(s\). The conclusion applies to the conformally dressed curve. The same inference from raw \(R_f-R_+\) would additionally assume that \(\mathscr S_+/\mathscr S_f\) contributes no competing endpoint powers.

---

## 6. Weyl-flat marginal spheres

Return now to parent-side spherical GR and set \(G=c=1\).

For a perfect fluid define the spherical Weyl amplitude used in the Level-3 calculation,

\[
\boxed{
\mathcal W
=
\frac{m}{R^3}
-\frac{4\pi}{3}\rho.
}
\tag{29}
\]

On a marginal sphere,

\[
2m=R.
\tag{30}
\]

If the same sphere is Weyl-flat,

\[
\mathcal W=0,
\tag{31}
\]

then

\[
\frac1{2R^2}
=
\frac{4\pi}{3}\rho,
\]

so

\[
\boxed{
\rho
=
\frac{3}{8\pi R^2}.
}
\tag{32}
\]

The mean enclosed density is

\[
\bar\rho
=
\frac{3m}{4\pi R^3}
=
\frac{3}{8\pi R^2}.
\tag{33}
\]

Therefore

\[
\boxed{
\mathcal W=0
\quad\Longleftrightarrow\quad
\rho_{\rm local}=\bar\rho
}
\tag{34}
\]

on a parent marginal sphere.

This is an exact local homogeneity condition. Vanishing Weyl curvature is preserved by a regular conformal transformation, even though the normalization of a nonzero Weyl scalar changes. The condition is stronger than the first-contact relation in the preceding trapping-pair note, where compactness tangency gave \(\bar\rho_b=3\rho_b\). The pair-creation sphere is therefore not generically the Weyl-flat handoff sphere.

---

## 7. Surface-gravity identity

For a spherical perfect-fluid trapping horizon, the Hayward surface gravity is

\[
\kappa_H
=
\frac{m}{R^2}
-4\pi R W,
\tag{35}
\]

where the work density is

\[
W=\frac{\rho-p}{2}.
\tag{36}
\]

At marginality and Weyl flatness,

\[
m=\frac R2,
\qquad
8\pi R^2\rho=3.
\tag{37}
\]

Writing

\[
w=\frac p\rho,
\]

gives

\[
\boxed{
\kappa_HR
=
\frac{3w-1}{4}.
}
\tag{38}
\]

The flat-FLRW apparent horizon has the same dimensionless equation-of-state expression, with the corresponding orientation convention.

This agreement is nontrivial, but it is not yet a junction theorem. Under a varying Weyl rescaling, surface gravity acquires conformal-derivative terms. A completed handoff must show that those terms satisfy the required matching law.

---

## 8. Causal-signature identity

For a perfect-fluid black-hole trapping horizon, its radial velocity relative to the fluid may be written

\[
v_H
=
-\frac{U}{\Gamma_{\rm MS}}
\frac{1+8\pi R^2p}
{1-8\pi R^2\rho},
\tag{39}
\]

where

\[
U=D_tR,
\qquad
\Gamma_{\rm MS}=D_\ell R.
\]

On a collapsing marginal branch,

\[
U=-\Gamma_{\rm MS}.
\tag{40}
\]

At the Weyl-flat point, \(8\pi R^2\rho=3\), so

\[
\boxed{
v_H=-\frac{1+3w}{2}.
}
\tag{41}
\]

For radiation,

\[
w=\frac13
\quad\Longrightarrow\quad
v_H=-1,
\tag{42}
\]

and the inward parent horizon is null. For

\[
-1<w<\frac13,
\]

one has

\[
|v_H|<1,
\]

so the horizon is timelike relative to the fluid.

A flat-FLRW apparent horizon has the same null radiation case and the same timelike equation-of-state interval. Together with (32) and (38), this gives a three-part structural correspondence:

\[
\boxed{
\text{density form}
\;+\;
\text{surface-gravity form}
\;+\;
\text{causal-signature form}.
}
\tag{43}
\]

The agreement identifies a strong candidate handoff surface. It does not eliminate the conformal marginality condition (4).

---

## 9. Conditional local ledger

Suppose a completed conformal map selects a Weyl-flat parent marginal sphere at \(R_*\) and maps it to a child apparent-horizon sphere. Define the child vacuum fraction there by

\[
\boxed{
\lambda_*
\equiv
\Omega_{\Lambda,*}
=
\left(
\frac{\mathscr S_*R_*}
{\mathscr S_fR_f}
\right)^2.
}
\tag{44}
\]

The raw parent ratio \((R_*/R_f)^2\) is sufficient only when the scale dressing is constant between the two selected spheres.

Assume additionally that the completed stress-energy transfer identifies the effective child pressure ratio at that event as

\[
w_*=\frac{p_C}{\rho_C}.
\tag{45}
\]

For a flat child containing radiation, pressureless matter, and vacuum,

\[
\Omega_{r,*}+\Omega_{m,*}+\lambda_*=1
\tag{46}
\]

and

\[
w_*=\frac13\Omega_{r,*}-\lambda_*.
\tag{47}
\]

Solving gives

\[
\boxed{
\Omega_{r,*}=3(w_*+\lambda_*),
}
\tag{48}
\]

\[
\boxed{
\Omega_{m,*}=1-3w_*-4\lambda_*.
}
\tag{49}
\]

Hence

\[
\boxed{
\left.\frac{\rho_m}{\rho_r}\right|_*
=
\frac{1-3w_*-4\lambda_*}
{3(w_*+\lambda_*)}.
}
\tag{50}
\]

The scale-normalization invariant is

\[
\boxed{
\mathcal J
=
\lambda_*
\frac{[3(w_*+\lambda_*)]^3}
{[1-3w_*-4\lambda_*]^4}.
}
\tag{51}
\]

Equations (48)–(51) are exact child algebra. They become a parent-to-child ledger only after the conformal map determines \(\lambda_*\) and the transformed Einstein tensor justifies the transfer of \(w_*\). Reading \(p_P/\rho_P\) directly as \(w_C\) would be another unproved cross-frame identification.

---

## 10. Conditional global consistency equation

If the same completed collapse supplies both the local handoff data and the future dressed-radius jet, then the two determinations of \(\mathcal J\) must agree:

\[
\boxed{
\lambda_*
\frac{[3(w_*+\lambda_*)]^3}
{[1-3w_*-4\lambda_*]^4}
=
-\frac3{64}
\frac{[\mathcal R_+^{(4)}(0)]^3}
{[\mathcal R_+^{(3)}(0)]^4}.
}
\tag{52}
\]

This is a genuine parent-side target only once the scale dressing, local Weyl map, and transformed stress-energy are derived from the same parent solution. Before then, it is a consistency equation for the proposed transfer rather than a closed GR identity.

Its value is that two widely separated parts of the construction must yield one number:

\[
\text{local Weyl-flat handoff}
\longleftrightarrow
\text{future trapping-pair jet}.
\]

---

## 11. The optical map with the conformal factor retained

From the reciprocal candidate,

\[
a=\frac{R_b}{R_-},
\qquad
d\ln a=-d\ln R_-.
\tag{53}
\]

If the conformal image of the outer branch is the child apparent horizon, then

\[
H_C=\frac{c}{\mathscr S_+R_+}.
\tag{54}
\]

Therefore

\[
\boxed{
d\tau_C
=
-\frac{\mathscr S_+R_+}{c}
d\ln R_-.
}
\tag{55}
\]

Since \(d\eta_C=d\tau_C/a\),

\[
\boxed{
d\eta_C
=
-\frac{\mathscr S_+R_+}{cR_b}
dR_-.
}
\tag{56}
\]

Along an event-horizon parameter \(v_H\),

\[
\boxed{
\Phi'(v_H)
=
-\frac{\mathscr S_+R_+}{cR_b}
\frac{dR_-}{dv_H}.
}
\tag{57}
\]

If the affine-optical relation is written

\[
a^2\Phi'
=
C_{\rm aff}\mathcal T
\exp\!\left(
\int\kappa_P\,dv_H
\right),
\tag{58}
\]

then

\[
\boxed{
\mathcal T(v_H)
\propto
-\frac{\mathscr S_+R_bR_+}{cR_-^2}
\frac{dR_-}{dv_H}
\exp\!\left(
-\int\kappa_P\,dv_H
\right).
}
\tag{59}
\]

The ordinary constant affine normalization is absorbed into the proportionality.

The trapping pair therefore replaces much of the formerly abstract optical freedom with physical collapse data. It does **not** make the free function disappear until \(\mathscr S_+(v_H)\) and the relation between the event-horizon parameter and the marginal branches are independently fixed.

---

## 12. Why the numerical ledger is not universal in GR

For either trapping branch define

\[
\mathcal E_H=8\pi R_H^2\rho_H,
\qquad
\mathcal P_H=8\pi R_H^2p_H.
\tag{60}
\]

Let \(N_H\) be the fluid lapse evaluated on the horizon and retain

\[
\Gamma_{{\rm MS},H}=D_\ell R
\]

for the Misner–Sharp radial derivative. The exact branch evolution in a common comoving time coordinate is

\[
\boxed{
\frac{dR_H}{dt}
=
N_H\Gamma_{{\rm MS},H}
\frac{\mathcal E_H+\mathcal P_H}
{1-\mathcal E_H}.
}
\tag{61}
\]

Consequently,

\[
\boxed{
\frac{d\ln R_+}{d\ln R_-}
=
\frac{R_-}{R_+}
\frac{N_+\Gamma_{{\rm MS},+}}{N_-\Gamma_{{\rm MS},-}}
\frac{\mathcal E_++\mathcal P_+}
{\mathcal E_-+\mathcal P_-}
\frac{1-\mathcal E_-}
{1-\mathcal E_+}.
}
\tag{62}
\]

The raw pair trajectory depends on

\[
\rho(t,q),
\qquad
p(t,q),
\qquad
N(t,q),
\qquad
\Gamma_{\rm MS}(t,q),
\]

which in turn depend on the parent equation of state and collapse initial data. Standard collapse simulations find corresponding changes in the evolution and causal character of the two trapping horizons.

The dressed curve contains still more theory:

\[
\mathcal R_+(r)
=
\frac{\mathscr S_+(r)}{\mathscr S_f}
\frac{R_+(r)}{R_f}.
\tag{63}
\]

Ordinary GR therefore supplies neither one universal raw pair curve nor one universal conformal completion. It cannot determine a universal \(\mathcal J\) from horizon formation alone.

If CSBHI predicts different child ledgers from different parents, the relevant parent collapse solution is inherited data. If it predicts one universal ledger, it requires an additional selection principle that fixes the dressed pair curve.

---

## 13. What has and has not closed

### What has closed algebraically

Given a completed dressed curve \(\mathcal R_+(r)\), the total homogeneous dust and radiation coefficients and their invariant \(\mathcal J\) are fixed by its future jet.

Given a mapped child vacuum fraction and effective equation of state at a handoff event, the matter and radiation fractions are fixed locally.

### What has acquired a geometric carrier

The total equation-of-state ledger can be represented by the combined trapping pair and conformal scale transfer:

\[
\boxed{
\text{parent collapse}
\longrightarrow
\{R_+(R_-),\mathscr S_+(R_-)\}
\longrightarrow
\mathcal R_+(r)
\longrightarrow
\{\eta_m,\eta_r,\mathcal J\}.
}
\tag{64}
\]

### What remains open

The theory must still derive:

1. why the outer marginal branch maps to the child apparent horizon;
2. the scale-transfer function \(\mathscr S_+(r)\);
3. the timelike Alice transport associated with \(R_-\);
4. the event-horizon optical clock;
5. the transformed child stress-energy; and
6. the species-resolved currents and microphysics.

Accordingly, the total ledger representation is closed **conditional on the completed transfer**, while its actual value and physical species decomposition are not.

---

## 14. Next pass/fail calculation

For one specified spherical perfect-fluid collapse:

1. integrate \(R_E(t)\), \(R_+(t)\), and \(R_-(t)\);
2. solve the conformal/junction equations for \(\mathscr S_+(t)\);
3. test the marginality condition \(\ell(\ln\Omega_{\rm W})=0\) or derive its correct replacement;
4. compute \(\mathcal R_+(r)\) and its third and fourth future derivatives;
5. locate any Weyl-flat inner marginal sphere;
6. calculate the transformed Einstein tensor there;
7. compare the local and future-jet values of \(\mathcal J\); and
8. derive the clock independently from event-horizon optics.

No observed child density fraction may be used in those steps. The benchmark value in (21) is reserved for the final comparison.

This calculation has a clean negative outcome: if the outer branch cannot map conformally to an admissible child apparent horizon, or if the two determinations of \(\mathcal J\) disagree, the trapping-pair ledger proposal fails.

---

## 15. Conclusion

The trapping-pair calculation has located a plausible geometric home for the child matter ledger, but it has not removed the conformal theory boundary.

The future jet formulas are exact:

\[
\eta_m=-\frac{\mathcal R_+^{(3)}(0)}3,
\qquad
\eta_r=-\frac{\mathcal R_+^{(4)}(0)}{12},
\qquad
\mathcal J
=
-\frac3{64}
\frac{[\mathcal R_+^{(4)}(0)]^3}
{[\mathcal R_+^{(3)}(0)]^4}.
\]

The Weyl-flat marginal identities are also exact parent geometry:

\[
\rho_{\rm local}=\bar\rho,
\qquad
\kappa_HR=\frac{3w-1}{4},
\qquad
v_H=-\frac{1+3w}{2}.
\]

Their agreement with flat-FLRW apparent-horizon expressions makes the Weyl-flat inner marginal sphere a strong handoff candidate.

But the physical curve is

\[
\boxed{
\mathcal R_+(r)
=
\frac{\mathscr S_+(r)R_+(r)}
{\mathscr S_fR_f},
}
\]

not generically \(R_+(r)/R_f\). The matter ledger is therefore no longer a mysterious child-side pair of parameters, but neither is it yet a prediction of raw parent GR.

The accurate status is

\[
\boxed{
\textbf{geometric carrier identified;}
\quad
\textbf{conformal transfer and numerical inheritance still open.}
}
\]

---

## References

1. A. Helou, I. Musco, and J. C. Miller, [“Causal Nature and Dynamics of Trapping Horizons in Black Hole Collapse,”](https://arxiv.org/abs/1601.05109) *Classical and Quantum Gravity* **34**, 135012 (2017), DOI: 10.1088/1361-6382/aa6d8f.

2. S. A. Hayward, [“General Laws of Black-Hole Dynamics,”](https://arxiv.org/abs/gr-qc/9303006) *Physical Review D* **49**, 6467–6474 (1994).

3. C. W. Misner and D. H. Sharp, “Relativistic Equations for Adiabatic, Spherically Symmetric Gravitational Collapse,” *Physical Review* **136**, B571–B576 (1964), DOI: 10.1103/PhysRev.136.B571.

4. G. Salehi and Codex, [*The Trapping-Horizon Pair and the Inward Reciprocal Branch*](note.html?src=trapping_horizon_pair_and_inward_reciprocal_branch), CSBHI working calculation (2026).

5. G. Salehi and Codex, [*CSBHI Geometric Parameter Cascade*](note.html?src=csbhi_geometric_parameter_cascade), CSBHI working synthesis (2026).

6. V. Faraoni and V. Vitagliano, [“Horizon thermodynamics and spacetime mappings,”](https://arxiv.org/abs/1401.1189) *Physical Review D* **89**, 064015 (2014).
