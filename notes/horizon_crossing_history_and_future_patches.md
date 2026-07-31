# Horizon-Crossing History and Future Causal Patches

*Technical note on the horizon-crossing map*

**Author:** Codex (OpenAI).

## Abstract

This note gives an operational formulation of one part of the horizon map. Consider a radial congruence of objects entering one black hole at different horizon-crossing times. Label each worldline by its advanced crossing time \(v_H\). We propose that the missing horizon map assigns this ordered exterior history an interior comoving position,

\[
R=\Psi(v_H).
\]

This is not an ordinary coordinate transformation. Waiting events on an exterior observer's worldline are timelike-separated, while successive crossing events lie along the null horizon; \(R\) is spacelike in Alice's interior. The map \(\Psi\) is therefore a candidate output of the throat, junction, or higher-dimensional construction sought in GD2.

Once \(\Psi\) is supplied, the causal consequences follow exactly. Two mapped worldlines at fixed comoving separation \(\Delta R\) have physical separation \(\ell=a|\Delta R|\). A signal sent to the other comoving worldline after time \(\tau\) can arrive only if \(|\Delta R|\) fits within the remaining conformal distance \(\int_\tau^\infty d\tau'/a(\tau')\). In the de Sitter limit this condition becomes \(\ell<L\), where \(L=H_\Lambda^{-1}\) is both the de Sitter curvature radius and the physical observer-horizon radius. If both observers maneuver toward a meeting, their future light cones have the larger common-future bound \(\ell<2L\).

The three proposed faces of the horizon structure then acquire distinct operational roles: the matching history \(\Sigma\) produces \(\Psi\), the causal horizon \(\mathcal H\) partitions the mapped infallers into communicating patches, and the curvature scale \(L\) fixes the asymptotic physical boundary between them. The note also couples \(\Psi\) to the radial optical map, reducing the reunion and signal-reception problems to explicit equations.

---

## 1. The congruence and its labels

Work in units where \(c=1\). Consider a one-parameter family of radial infallers with the same conserved energy and angular position. Let

\[
\lambda=v_H
\tag{1}
\]

label each worldline by the advanced time at which it crosses Bob's event horizon. Alice has label \(v_{H,A}\); a probe immediately behind her has \(v_H=v_{H,A}+\delta v_H\); Bob may wait outside and cross with a much larger value. We focus on the trailing congruence \(v_H\ge v_{H,A}\), which can be represented by Alice's nonnegative radial coordinate \(R\). Treating infallers on both sides of Alice would instead use a signed local Cartesian coordinate along the infall direction.

Three kinds of separation must remain distinct:

1. Bob's successive waiting or departure events outside the black hole are timelike-separated.
2. Successive crossing events at one angular position are ordered along a null horizon generator.
3. The interior coordinate \(R\) is spacelike on a constant-\(\tau\) FLRW slice.

No regular four-dimensional coordinate transformation turns one of these causal characters into another. The horizon map must arise from additional junction, throat, singular conformal, nonlocal, or higher-dimensional structure.

The restriction to equal-energy radial infallers isolates the time-label problem. A finite cloud crossing together would map to a local bundle of neighboring interior positions rather than one future point. A general map must also accept energy, angular momentum, horizon angle, and finite-size labels as inputs.

## 2. The worldline horizon map

The simplest candidate map assigns each member of the congruence a comoving position in Alice's interior:

\[
\boxed{
R=\Psi(v_H).
}
\tag{2}
\]

Choose Alice as the comoving origin,

\[
\Psi(v_{H,A})=0.
\tag{3}
\]

Causal ordering and a consistent orientation suggest

\[
\Psi'(v_H)>0,
\tag{4}
\]

although reversing the orientation of \(R\) would reverse this sign without changing the physics.

Equation (2) is the proposed mathematical expression of the exterior crossing history becoming interior spatial order. It does not say that a timelike or null interval literally becomes spacelike under a coordinate change. It says that the completed global construction may encode the horizon-crossing label as a comoving label in a different description.

After crossing, homologous freely falling members of the congruence are taken to follow comoving interior worldlines,

\[
R(v_H)=\text{constant}.
\tag{5}
\]

This condition is exact for the probe congruence used in GD1's spatially flat FLRW interior. A later infaller with a peculiar velocity would require the map to supply that initial velocity in addition to \(R\).

## 3. Divergence becomes future spatial separation

For two mapped worldlines with labels \(v_{H,1}\) and \(v_{H,2}\), define

\[
\Delta R
=
\Psi(v_{H,2})-\Psi(v_{H,1}).
\tag{6}
\]

Their physical separation on Alice's constant-\(\tau\) slice is

\[
\boxed{
\ell(\tau)=a(\tau)|\Delta R|.
}
\tag{7}
\]

Thus neighboring infallers need not drift through comoving coordinates. Their fixed comoving separation expands with Alice's scale factor. For nearby crossing labels,

\[
\ell(\tau)
\simeq
a(\tau)
\left|\Psi'(v_{H,A})\right|
|\delta v_H|.
\tag{8}
\]

This identifies the expanding probe cloud with the local differential form of the horizon-crossing map.

Introduce conformal time,

\[
d\eta=\frac{d\tau}{a(\tau)}.
\tag{9}
\]

If the reciprocal interior approaches de Sitter space, \(\eta\) reaches a finite upper limit \(\eta_\infty\) while \(\tau\to\infty\). Every comoving worldline terminates at

\[
(\eta_\infty,R).
\tag{10}
\]

Distinct values of \(R\) therefore define distinct points on the same spacelike future conformal boundary. They are not separate singularities or necessarily separate universes. The reciprocal construction replaces the single spatial-looking origin in Bob's diagram with an extended future boundary in Alice's geometry.

## 4. The exact causal-contact condition

A radial light ray obeys

\[
|dR|=d\eta=\frac{d\tau}{a(\tau)}.
\tag{11}
\]

The maximum comoving distance that any signal emitted at time \(\tau_e\) can ever travel is therefore

\[
\boxed{
\chi_e(\tau_e)
=
\int_{\tau_e}^{\infty}
\frac{d\tau}{a(\tau)}.
}
\tag{12}
\]

One comoving infaller can send a signal at \(\tau_e\) to the other, while the receiver remains comoving, only if

\[
\boxed{
|\Delta R|<\chi_e(\tau_e).
}
\tag{13}
\]

Equality places the receiving worldline on the sender's cosmological event horizon. If the inequality fails, no signal emitted at or after \(\tau_e\) can reach the other worldline.

The reunion question is different because both observers may move. The future light cones of two simultaneous interior events overlap before \(\eta_\infty\) only if

\[
\boxed{
|\Delta R|<2\chi_e(\tau_e).
}
\tag{13a}
\]

Equality leaves only a limiting null meeting at the conformal boundary; a physical timelike reunion requires the strict inequality and suitable post-entry velocities. Equation (13) is the individual observer-horizon condition. Equation (13a) is the common-future condition for two maneuvering observers.

## 5. The de Sitter limit

In the vacuum-dominated limit,

\[
a(\tau)
=
a_e e^{H_\Lambda(\tau-\tau_e)},
\qquad
L=H_\Lambda^{-1}.
\tag{14}
\]

Equation (12) becomes

\[
\chi_e(\tau_e)
=
\frac{1}{a_eH_\Lambda}.
\tag{15}
\]

Multiplying Equation (13) by \(a_e\) gives the physical condition

\[
\boxed{
\ell(\tau_e)<H_\Lambda^{-1}=L.
}
\tag{16}
\]

The de Sitter curvature radius therefore has the same numerical value as the physical causal-separation radius in this limit. The curvature scale and causal boundary remain different geometric objects.

For two observers who both maneuver toward one another, Equation (13a) becomes

\[
\boxed{
\ell(\tau_e)<2L.
}
\tag{16a}
\]

The factor of two does not define a second horizon. Each observer's cosmological horizon still has physical radius \(L\); \(2L\) is the largest separation for which their two future light cones can overlap.

If two worldlines begin with physical separation \(\ell_0<L\) at \(\tau_0\), they cross one another's de Sitter horizon when

\[
\boxed{
\tau_{\rm exit}-\tau_0
=
H_\Lambda^{-1}
\ln\!\left(\frac{L}{\ell_0}\right).
}
\tag{17}
\]

For nearby horizon-crossing labels, Equation (8) gives

\[
\tau_{\rm exit}-\tau_0
\simeq
L\ln\!\left[
\frac{L}
{a_0|\Psi'(v_{H,A})|\,|\delta v_H|}
\right].
\tag{18}
\]

An immediately trailing probe can therefore remain in causal contact for a long time, while a sufficiently late Bob may be mapped outside Alice's causal patch from the beginning. The dependence is logarithmic in the initial separation.

## 6. Three structures in the de Sitter limit

The throat construction must relate

\[
L\longleftrightarrow\mathcal H\longleftrightarrow\Sigma
\tag{19}
\]

while preserving the distinctions among its terms.

### Matching history \(\Sigma\)

The completed junction or throat geometry maps the ordered crossing history into the interior congruence. Its worldline output is the function

\[
\Sigma:\quad v_H\mapsto R=\Psi(v_H),
\tag{20}
\]

together with the post-entry four-velocity and any angular data.

### Causal horizon \(\mathcal H\)

The cosmological event horizon partitions that congruence according to

\[
|\Psi(v_{H,2})-\Psi(v_{H,1})|
=
\chi_e(\tau).
\tag{21}
\]

It determines which horizon-crossing histories can still exchange signals at a given interior time.

### Curvature scale \(L\)

In the de Sitter limit, the physical form of Equation (21) is

\[
a(\tau)
|\Psi(v_{H,2})-\Psi(v_{H,1})|
=
L.
\tag{22}
\]

The same numerical scale \(L\) controls the asymptotic curvature, the observer horizon radius, and the causal separation of the mapped crossing history. One global construction must derive \(\Psi\), its normalization, and \(L\) from the parent throat rather than specifying them independently.

## 7. Coupling the worldline and optical maps

The companion optical calculation writes the radial null map as

\[
v_B=V(v_A),
\qquad
v_A=\eta+R
\tag{23}
\]

for ingoing light. Let

\[
W=V^{-1}
\tag{24}
\]

map an exterior advanced-time label into Alice's interior ingoing null coordinate. A photon crossing the exterior horizon with label \(v_\gamma\) follows

\[
\eta+R=W(v_\gamma).
\tag{25}
\]

It meets an infaller labeled by \(v_H\) at

\[
\boxed{
\eta_{\rm rec}
=
W(v_\gamma)-\Psi(v_H).
}
\tag{26}
\]

Equation (26) couples the optical and worldline parts of the horizon map. For Alice, \(\Psi(v_{H,A})=0\), so \(\eta_{\rm rec}=W(v_\gamma)\). For a later Bob, the same photon is received at a different conformal time because his worldline occupies a different comoving position.

A complete construction cannot choose \(V\) and \(\Psi\) independently. They must preserve causal incidence: if an exterior photon meets an exterior-labeled infaller, their mapped null and timelike histories must intersect at the same interior event. This supplies a concrete consistency test for any proposed throat geometry.

## 8. What is established and what remains open

### Exact once \(\Psi\) is supplied

- The physical separation is \(\ell=a|\Delta R|\).
- The comoving-receiver signal condition is \(|\Delta R|<\int_\tau^\infty d\tau'/a\).
- The common-future condition for two maneuvering observers is \(|\Delta R|<2\int_\tau^\infty d\tau'/a\).
- Distinct comoving labels end at distinct points on the future conformal boundary.
- In de Sitter space, causal separation occurs at the physical radius \(L=H_\Lambda^{-1}\).
- The exit time is given by Equation (17).
- The optical and timelike maps must satisfy Equation (26).

### Still to be derived

- The function \(\Psi(v_H)\) and its normalization.
- The initial post-entry four-velocity of a general infaller.
- The global geometry that changes an ordered null crossing history into interior spacelike order.
- The junction stress-energy or higher-dimensional data required by that geometry.
- Whether one construction fixes \(\Psi\), \(V\), and \(L\) simultaneously.

The new theorem target can therefore be stated compactly:

\[
\boxed{
v_H
\xrightarrow{\;\Sigma\;}
R=\Psi(v_H),
\qquad
a(\tau)|\Delta R|=L
\quad\text{at asymptotic causal separation}.
}
\tag{27}
\]

This target makes the proposed crossing-history map falsifiable. A candidate geometry must produce the map, preserve the optical incidence relations, and recover the de Sitter causal radius without inserting the same scale independently into each part of the construction.

---

## References

1. Gibbons, G. W., and Hawking, S. W. “Cosmological Event Horizons, Thermodynamics, and Particle Creation.” *Physical Review D* 15, no. 10 (1977): 2738–2751. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
2. Hawking, S. W., and Ellis, G. F. R. *The Large Scale Structure of Space-Time*. Cambridge University Press, 1973.
3. Barrabès, C., and Israel, W. “Thin Shells in General Relativity and Cosmology: The Lightlike Limit.” *Physical Review D* 43, no. 4 (1991): 1129–1142. [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
4. Codex (OpenAI). [“Null Optics of the Reciprocal Interior.”](note.html?src=null_optics_of_the_reciprocal_interior) Technical note, this project.
5. [*CSBHI Cosmological Glossary.*](note.html?src=cosmological_glossary) Project terminology reference.
