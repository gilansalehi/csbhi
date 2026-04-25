# Geometric Duality of Black-Hole Interiors — Draft Rewrite of Sections 5–8

> Working draft only. Source project file unchanged.

---

## 5. Geometric Duality

The central claim of this paper can now be stated more cleanly.

In the interior FLRW description, the matching shell at \(R=1\) has areal radius

\[
r(\tau)=a(\tau).
\]

This shell is therefore the natural place where the cosmological scale factor and the black-hole areal radius become the same geometric variable. It is not yet the full duality, but it is the bridge on which the duality is built.

From the interior point of view, the shell expands with the cosmological flow. Since \(r=a(\tau)\), we have

\[
\frac{dr_A}{d\tau}=H(\tau)\,r,
\]

and therefore

\[
r_A(\tau)=r_0\,e^{+\int_{\tau_0}^{\tau}H(\tau')\,d\tau'}.
\]

In the de Sitter limit, where \(H\) is constant, this reduces to the familiar exponential law

\[
r_A(\tau)=r_0\,e^{+H(\tau-\tau_0)}.
\]

From the exterior point of view, by contrast, the same shell is described as an inward PG flow. With the convention that \(F>0\) denotes the inward flow magnitude, freely falling shells obey

\[
\frac{dr_B}{d\tau}=-F(r,\tau),
\qquad
F(r,\tau)=H(\tau)\,r,
\]

so that

\[
\frac{dr_B}{d\tau}=-H(\tau)\,r,
\]

and hence

\[
r_B(\tau)=r_0\,e^{-\int_{\tau_0}^{\tau}H(\tau')\,d\tau'}.
\]

Again, in the de Sitter limit this becomes

\[
r_B(\tau)=r_0\,e^{-H(\tau-\tau_0)}.
\]

The point is not that the universe is simultaneously expanding and collapsing in one and the same chart. The point is that the same shell variable admits two mirror descriptions, one interior and one exterior, related by a reversal of time orientation:

\[
r_B(\tau)\longleftrightarrow r_A(-\tau).
\]

This is the geometric duality: what appears intrinsically as cosmological expansion may be read extrinsically as horizon-centered infall, provided the two descriptions are compared at the shell where \(r=a\).

In this sense, the duality is not a metaphor layered on top of the mathematics. It is a comparison between two exact flow laws written for the same geometric radius in two different descriptions of the same horizon-centered spacetime.

---

## 6. Junction Matching and Singularity Deferral

The duality just described would be empty if the interior and exterior geometries could not actually be joined. The role of the matching shell \( \Sigma \) is therefore not merely illustrative. It is the geometric locus on which the two descriptions are required to agree.

We take \( \Sigma \) to be the timelike hypersurface \(R=1\), with areal radius

\[
r(\tau)=a(\tau).
\]

The matching conditions are the standard Israel–Darmois conditions. In the present setting, these require continuity of the induced metric on \( \Sigma \) and continuity of the extrinsic curvature across the shell. The detailed calculation is deferred to Appendix B. The result is that the FLRW interior and the Schwarzschild–de Sitter exterior can be joined without introducing a thin shell of surface stress-energy.

Thus proper time \( \tau \) extends smoothly through the horizon. For Alice, horizon crossing remains locally nonsingular; for Bob, the shell remains a well-defined matching surface in the exterior description.

Once this smooth joining is established, the singularity question becomes dynamical rather than merely diagrammatic. In the interior PG description, freely falling shells obey

\[
\frac{dr}{d\tau}=-F(r,\tau)=-H(\tau)\,r.
\]

Near the center, the vacuum term dominates and the flow becomes asymptotically linear in \(r\). The proper time required to reach \(r=0\) is therefore

\[
\tau_{\rm to\,0}
=
\int_{r_{\rm shell}}^{0}\frac{dr}{H(\tau)\,r},
\]

which diverges logarithmically. In other words,

\[
\tau_{\rm to\,0}=\infty.
\]

This is the precise sense in which the central singularity is deferred. The argument does not rest on perspective alone, nor on the horizon role-swap by itself. It follows from the interior flow law implied by the FLRW-to-PG rewriting.

The causal interpretation proposed earlier now acquires a metric realization: what appears in the Schwarzschild vacuum story as a finite-time crash is replaced, in the dust+\(\Lambda\) PG interior, by an asymptotic endpoint at future infinity.

This does not prove that all strong-curvature pathologies have been eliminated. It does show that within the present classical construction, no infalling observer reaches a curvature divergence in finite proper time.

---

## 7. Observables

At the homogeneous background level, the interior geometry is exactly the spatially flat dust+\(\Lambda\) FLRW cosmology. For that reason, the standard expansion-history observables are recovered without modification.

The Hubble law obeys

\[
H(a)^2=\frac{8\pi G}{3}\bigl(\rho_m a^{-3}+\rho_\Lambda\bigr),
\qquad
H(a)\equiv\frac{1}{a}\frac{da}{dt},
\]

so the present expansion rate \(H_0\), the cosmic age

\[
T_0=\int_0^1 \frac{da}{a\,H(a)},
\]

and the usual luminosity and angular-diameter distance relations all coincide with those of flat \(\Lambda\)CDM.

In particular, supernova distances, BAO scales, and the background CMB distance measures are not altered by the reinterpretation proposed here. At this level, geometric duality is not a competing fit to the data; it is an alternative geometric interpretation of the same successful background cosmology.

This point matters. The present proposal does not begin by discarding \(\Lambda\)CDM’s empirical success. It begins by asking whether that same successful expansion history can be given a deeper horizon-centered geometric meaning.

Where nontrivial differences may arise is not in the homogeneous background itself, but in the interpretation of the horizon, the origin of \(\Lambda\), the fate of the singularity, and eventually in perturbations, thermodynamics, and structure formation. Those questions lie beyond the scope of the present background-level analysis.

---

## 8. Discussion

### 8.1 What the construction actually achieves

The main result of this paper is not a new fit to the cosmological data. At the level of homogeneous expansion, the model reproduces the same flat dust+\(\Lambda\) FLRW history already described by \(\Lambda\)CDM. The novelty lies elsewhere.

What has been shown is that this same cosmological history can be rewritten in Painlevé–Gullstrand form, interpreted as a horizon-centered radial flow, and matched to an exterior Schwarzschild–de Sitter description across a privileged shell. On that shell, the cosmological scale factor and the areal radius become the same geometric variable, and the interior expansion law is mirrored by an exterior infall law under reversal of time orientation.

Within this construction, the cosmological constant is no longer introduced merely as an empirical correction term. It appears as part of the interior flow law and, in the de Sitter limit, as the natural curvature scale of the corresponding hyperboloid geometry. Likewise, the singularity is no longer encountered in finite proper time by an infalling observer, but is displaced to an asymptotic future endpoint.

These are conceptual gains, not merely algebraic rearrangements.

### 8.2 What the construction does not yet achieve

Several important issues remain open.

First, the present analysis is a background-level one. Although the homogeneous FLRW sector is recovered exactly, a full treatment of perturbations across the matching shell has not yet been carried out. It therefore remains to be shown in detail that scalar, vector, and tensor perturbations propagate in a way fully consistent with the observational successes of standard \(\Lambda\)CDM.

Second, the thermodynamic status of the horizon has only been touched indirectly. A full account of entropy, area increase, matter flux, and generalized second-law behavior should be developed in a dynamical-horizon framework rather than assumed by analogy with stationary black holes.

Third, the present paper does not derive the entire construction from the 5D de Sitter embedding. What has been established elsewhere is that the de Sitter embedding naturally generates the PG flow in the pure vacuum limit. The stronger claim — that the full dust+\(\Lambda\) shell-matched GD structure descends from the embedding — remains a programmatic next step rather than a completed derivation.

Finally, the relation \(a\leftrightarrow 1/r\) should be understood carefully. In the present interpretation it functions as a duality dictionary between descriptions, not as an ordinary coordinate identity of the same chart. Distinguishing such duality maps from exact shell identities is essential if the framework is to remain mathematically coherent.

### 8.3 Why the framework is still worth pursuing

Despite those open problems, the geometric-duality program is attractive for a simple reason: it organizes several otherwise disconnected clues into one geometric picture.

It preserves the empirical background success of \(\Lambda\)CDM while reopening the question of why the cosmological constant appears at all. It treats the horizon not as a passive boundary but as a privileged geometric locus. It offers a concrete mechanism by which the interior singularity may be deferred. And it suggests that the late-time approach to de Sitter space is not incidental, but a sign that the correct language of the problem may be horizon-centered and embedding-based.

At minimum, the construction shows that black-hole language and cosmological language are not as far apart as they usually seem. At maximum, it points toward a deeper synthesis in which expansion, infall, horizon structure, and de Sitter geometry are different faces of one underlying spacetime picture.
