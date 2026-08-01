# The Missing Null Coordinate and the Horizon Map

*Technical note on the horizon-crossing map*

**Author:** Codex (OpenAI).

## Abstract

Successive infallers cross the parent black-hole event horizon at different advanced times \(v_H\). These values order the crossing events, but they do not measure a distance between them. The horizon's intrinsic metric measures only angular distance; its remaining direction is null.

Alice's interior needs both a time and a radius to locate an event. In radial null coordinates,

\[
u_A=\eta-R,
\qquad
v_A=\eta+R,
\]

the optical calculation constrains the ingoing coordinate \(v_A\). The outgoing coordinate \(u_A\) remains undetermined. Once both are known,

\[
\boxed{
\eta(v_H)=\frac{v_A(v_H)+u_A(v_H)}{2},
\qquad
R(v_H)=\Psi(v_H)=\frac{v_A(v_H)-u_A(v_H)}{2}.
}
\]

This identifies the missing part of the horizon map. The parent horizon supplies one ordered null label. The completed geometry must supply its companion null coordinate before that order can become both child time and child space.

If the crossing history maps to one child time slice, then \(u_A+v_A\) is constant and

\[
\boxed{
\Psi'(v_H)=\frac{dv_A}{dv_H}=-\frac{du_A}{dv_H}.
}
\]

Under the local frequency-matching rule derived in *Null Optics of the Reciprocal Interior*, this gives \(\Psi'=2e\) at the matching surface, or \(\Psi'=2\) for the marginally bound trajectory \(e=1\). The result is local and conditional on the single-slice form of the proposed space-time role swap.

---

## 1. Conventions

We use the conventions of GD1:

\[
c=G=2M=1.
\tag{1}
\]

Lengths and times are measured in Schwarzschild-radius units. Bob's horizon-normalized areal coordinate is \(r\), and the parent black-hole event horizon is

\[
r=1.
\tag{2}
\]

The calculation uses the following symbols:

| Symbol | Meaning |
|---|---|
| \(t\) | Bob's Schwarzschild coordinate time |
| \(r\) | Bob's horizon-normalized areal coordinate |
| \(r_*\) | Bob's tortoise coordinate |
| \(v\) | Bob's advanced null coordinate |
| \(v_H\) | The value of \(v\) at a horizon-crossing event |
| \(\tau\) | Alice's proper time |
| \(\eta\) | Alice's conformal time, defined by \(d\eta=d\tau/a\) |
| \(R\) | Alice's comoving radial coordinate |
| \(u_A,v_A\) | Alice's outgoing and ingoing radial null coordinates |
| \(\Psi\) | The proposed map from parent crossing order to child comoving radius |

## 2. Bob's advanced coordinate

Define the tortoise coordinate by

\[
\frac{dr_*}{dr}
=
\left(1-\frac{1}{r}\right)^{-1},
\tag{3}
\]

and define Bob's advanced coordinate by

\[
\boxed{
v=t+r_*.
}
\tag{4}
\]

The name *advanced null coordinate* has a simple meaning. In flat spacetime, an ingoing radial light ray obeys \(dr/dt=-1\), so \(t+r\) remains constant along the ray. In Schwarzschild geometry, \(r_*\) replaces \(r\), and \(v=t+r_*\) remains constant along each ingoing radial light ray.

Schwarzschild time becomes singular at the event horizon. The advanced coordinate remains finite there. It can therefore label an actual crossing event.

We write

\[
v_H
\tag{5}
\]

for the value of \(v\) when a particular worldline crosses \(r=1\). If Alice crosses before a trailing probe, then

\[
v_{H,\mathrm{probe}}>v_{H,A}.
\tag{6}
\]

Thus \(v_H\) is a parent-side crossing label. It is not Alice's proper time, Bob's proper time, or a spatial distance.

## 3. The horizon provides order, not length

In ingoing Eddington-Finkelstein coordinates, Bob's radial metric is

\[
ds_B^2
=
-\left(1-\frac{1}{r}\right)dv^2
+2\,dv\,dr
+r^2d\Omega^2.
\tag{7}
\]

Restrict this metric to the event horizon. Tangent displacements have \(dr=0\), and the coefficient of \(dv^2\) vanishes at \(r=1\). The horizon's intrinsic metric is therefore

\[
\boxed{
ds_H^2=d\Omega^2.
}
\tag{8}
\]

Along one horizon generator, the angles are also fixed, so \(d\Omega=0\). Hence

\[
ds_H^2=0
\tag{9}
\]

for every change in \(v_H\).

Different values of \(v_H\) identify different crossing events, but Equation (8) contains no \(dv_H^2\) term. The horizon can order the events without assigning a proper distance between them. This is the degeneracy of a null hypersurface.

The distinction is central:

- the parent exterior can normalize \(v\) relative to its clocks;
- the horizon can preserve the order of \(v_H\);
- the horizon's intrinsic metric cannot turn \(\Delta v_H\) into Alice's radial distance.

## 4. Alice needs two null coordinates

Alice's reciprocal interior is spatially flat FLRW:

\[
ds_A^2
=
a(\eta)^2
\left(
-d\eta^2+dR^2+R^2d\Omega^2
\right).
\tag{10}
\]

Define Alice's radial null coordinates by

\[
\boxed{
u_A=\eta-R,
\qquad
v_A=\eta+R.
}
\tag{11}
\]

Here \(v_A\) is constant along ingoing radial light rays, while \(u_A\) is constant along outgoing radial light rays. Their inverse relations are

\[
\boxed{
\eta=\frac{v_A+u_A}{2},
\qquad
R=\frac{v_A-u_A}{2}.
}
\tag{12}
\]

One null coordinate identifies a light front. Two null coordinates identify the event where an ingoing and an outgoing light front intersect.

## 5. The missing coordinate

The optical note identifies the first required function by mapping a photon crossing at \(v_\gamma\) to Alice's ingoing coordinate \(v_A(v_\gamma)\). It fixes that function's local slope under the horizon-screen matching, not its global form. When the photon and an infaller meet at the same horizon event,

\[
v_\gamma=v_H.
\tag{13}
\]

Preserving that incidence supplies the ingoing part of the worldline map:

\[
v_H\longmapsto v_A(v_H).
\tag{14}
\]

That map alone does not locate a child event. Every point on the same ingoing light front has the same \(v_A\).

The completed horizon map must also supply

\[
v_H\longmapsto u_A(v_H).
\tag{15}
\]

Equations (12), (14), and (15) then give

\[
\boxed{
\eta(v_H)
=
\frac{v_A(v_H)+u_A(v_H)}{2},
}
\tag{16}
\]

and

\[
\boxed{
R(v_H)
=
\Psi(v_H)
=
\frac{v_A(v_H)-u_A(v_H)}{2}.
}
\tag{17}
\]

Equations (16)-(17) are the main result. The half-sum of the two null maps gives the child time. Their half-difference gives the child radius.

The earlier optical and worldline maps are therefore two parts of one construction:

- optical incidence constrains \(v_A(v_H)\);
- the transverse geometry must determine \(u_A(v_H)\);
- together they determine \(\eta(v_H)\) and \(\Psi(v_H)\).

## 6. When crossing order becomes child space

The equations above allow the parent crossing history to map to any radial curve in Alice's spacetime. The precise form of the proposed role swap adds one condition: successive parent crossings become different positions on one child time slice,

\[
\eta(v_H)=\eta_*.
\tag{18}
\]

Equation (16) then requires

\[
u_A(v_H)+v_A(v_H)=2\eta_*.
\tag{19}
\]

Differentiate with respect to \(v_H\):

\[
\frac{du_A}{dv_H}
=
-\frac{dv_A}{dv_H}.
\tag{20}
\]

Differentiating Equation (17) now gives

\[
\boxed{
\Psi'(v_H)
=
\frac{dv_A}{dv_H}
=
-\frac{du_A}{dv_H}.
}
\tag{21}
\]

This is the conversion from parent crossing order to child radial order.

To check its causal character, write the radial part of Alice's metric as

\[
ds_A^2=-a^2du_A\,dv_A.
\tag{22}
\]

Using Equation (20),

\[
\frac{ds_A^2}{dv_H^2}
=
a(\eta_*)^2
\left(\frac{dv_A}{dv_H}\right)^2
>0.
\tag{23}
\]

The image is spacelike, exactly as required for a radial coordinate on a constant-\(\eta\) slice. Its proper-distance element is

\[
\boxed{
d\ell
=
a(\eta_*)
\left|
\frac{dv_A}{dv_H}
\right|
|dv_H|.
}
\tag{24}
\]

The horizon itself did not contain this spatial ruler. The paired map supplies it by placing the ordered crossings on Alice's spatial slice.

## 7. The local normalization

Under the horizon-screen matching used in *Null Optics of the Reciprocal Interior*, the frequency calculation at \(r=a=1\) gives

\[
\left.
\frac{dv}{dv_A}
\right|_{H}
=
\frac{1}{2e},
\tag{25}
\]

where \(e\) is Alice's conserved energy per unit mass in the parent Schwarzschild approximation.

Inverting Equation (25) gives

\[
\boxed{
\left.
\frac{dv_A}{dv_H}
\right|_{H}
=
2e.
}
\tag{26}
\]

If the map also satisfies the single-slice condition in Equation (18), then Equation (21) gives

\[
\boxed{
\Psi'(v_H)=2e
}
\tag{27}
\]

at the matching surface.

The marginally bound trajectory used in GD1 has \(e=1\), so

\[
\boxed{
\Psi'(v_H)=2.
}
\tag{28}
\]

Equation (28) fixes the local slope in the horizon-normalized, stationary approximation. It does not determine the global function \(\Psi(v_H)\) in a dynamical parent cosmology.

## 8. What “transverse” means

One null direction runs along the event horizon. The other null direction crosses it. The second direction is **transverse** to the horizon.

The horizon's intrinsic metric contains the first direction as a zero-length direction and omits the second because it points out of the horizon. That is why data intrinsic to one null horizon cannot determine its full spacetime neighborhood [1–3].

General relativity handles this problem with paired characteristic data. A standard double-null initial-value construction specifies information on two intersecting null hypersurfaces and evolves the geometry from their shared two-surface [4, 5].

In an eternal Schwarzschild diagram, the future and past horizon branches display such a pair around the bifurcation sphere. A physical collapse spacetime has no past white-hole horizon. The needed second data must instead come from the collapse geometry, an intersecting null surface, a worldtube, or the completed throat.

The missing object in this note is therefore concrete:

\[
\boxed{
u_A(v_H).
}
\tag{29}
\]

Once the geometry determines that function, Equations (16)-(17) determine the child time and radius of every mapped crossing event.

## 9. Result and open problem

The logical status of the calculation is:

| Status | Statement |
|---|---|
| Derived | The null horizon orders crossings by \(v_H\) but supplies no intrinsic length along that order. |
| Derived | A child radial event requires both \(u_A\) and \(v_A\). |
| Derived | Their half-sum gives \(\eta\); their half-difference gives \(R=\Psi(v_H)\). |
| Proposed | Parent crossing history maps to one child time slice, \(\eta=\eta_*\). |
| Conditional result | The single-slice condition gives \(\Psi'=dv_A/dv_H\). |
| Conditional local result | The optical normalization then gives \(\Psi'=2e\), or \(2\) for \(e=1\). |
| Open | Derive \(u_A(v_H)\), the child slicing, and the global normalization from the completed geometry. |

The sharpened horizon-map problem is

\[
\boxed{
v_H
\longmapsto
\left(
u_A(v_H),v_A(v_H)
\right)
\longmapsto
\left(
\eta(v_H),\Psi(v_H)
\right).
}
\tag{30}
\]

For a general probe cloud, the map must also carry horizon angle, momentum, and finite separation. It must explain how the parent horizon's spherical cross-sections become Alice's isotropic spatial geometry. Those are geometric questions for the completed throat, not additional freedoms hidden inside the reciprocal ansatz.

---

## References

1. Gourgoulhon, E., and Jaramillo, J. L. “A 3+1 Perspective on Null Hypersurfaces and Isolated Horizons.” *Physics Reports* 423 (2006): 159–294. [doi:10.1016/j.physrep.2005.10.005](https://doi.org/10.1016/j.physrep.2005.10.005).
2. Barrabès, C., and Israel, W. “Thin Shells in General Relativity and Cosmology: The Lightlike Limit.” *Physical Review D* 43, no. 4 (1991): 1129–1142. [doi:10.1103/PhysRevD.43.1129](https://doi.org/10.1103/PhysRevD.43.1129).
3. Poisson, E. “A Reformulation of the Barrabès–Israel Null-Shell Formalism.” arXiv:gr-qc/0207101 (2002). [arXiv:gr-qc/0207101](https://arxiv.org/abs/gr-qc/0207101).
4. Luk, J. “On the Local Existence for the Characteristic Initial Value Problem in General Relativity.” *International Mathematics Research Notices* 2012, no. 20 (2012): 4625–4678. [arXiv:1107.0898](https://arxiv.org/abs/1107.0898).
5. Mars, M., and Sánchez-Pérez, G. “Double Null Data and the Characteristic Problem in General Relativity.” *Journal of Physics A: Mathematical and Theoretical* 56 (2023): 035203. [doi:10.1088/1751-8121/acb098](https://doi.org/10.1088/1751-8121/acb098).
6. Codex (OpenAI). [“Null Optics of the Reciprocal Interior.”](note.html?src=null_optics_of_the_reciprocal_interior) Technical note, this project.
7. Codex (OpenAI). [“Horizon-Crossing History and Future Causal Patches.”](note.html?src=horizon_crossing_history_and_future_patches) Technical note, this project.
8. [*CSBHI Cosmological Glossary.*](note.html?src=cosmological_glossary) Project terminology reference.
