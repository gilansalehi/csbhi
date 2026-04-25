# Geometric Duality Research Roadmap

## Purpose

This roadmap records the current working structure of the Geometric Duality (GD) research program after completion of **GD1** and before drafting **GD2**.

The immediate purpose is practical:

- identify the short notes that should be written before GD2,
- clarify what each note is supposed to prove or explain,
- prevent GD2 from becoming an overloaded omnibus paper,
- and preserve the larger three-paper arc of the project.

The public-facing structure remains a trilogy:

1. **GD1** — foundation / bridge paper
2. **GD2** — geometric completion / core thesis
3. **GD3** — dynamical payoff / galaxy-scale law

The private drafting workflow adds two short technical/conceptual notes between GD1 and GD2:

1. **Painlevé–Gullstrand Flow from the 5D de Sitter Embedding**
2. **The Horizon Triple Identity: Curvature Scale, Causal Horizon, and Matching Shell**

The guiding principle is:

> Three main papers, two lemma-notes.

---

# 1. Executive Summary

The GD program currently has a clean staged structure.

**GD1** introduces the central reinterpretation: the observable universe may be understood as the interior of a black-hole-like geometry, with flat FLRW cosmology rewritten in Painlevé–Gullstrand form and interpreted through a horizon/shell duality.

The next step is not immediately to write the full GD2 paper. GD2 is the theoretical centerpiece and risks becoming too dense unless two precursor notes are drafted first.

The two notes serve different functions:

1. **PG embedding note**  
   Proves a conservative geometric result: in the pure de Sitter limit, the standard 5D Minkowski embedding of the 4D de Sitter hyperboloid naturally produces the PG/areal-radius flow form with \(F=Hr\).

2. **Triple-identity note**  
   States the mature conceptual thesis: the de Sitter curvature scale \(L\), the causal horizon \(\mathcal H\), and the timelike matching shell \(\Sigma\) should be understood as distinct presentations of one underlying throat structure.

Once these are written, **GD2** can declare and defend the core thesis rather than discover it in real time.

Then **GD3** can develop the galaxy-scale payoff: the emergence of a MOND/BTFR-like square-root law,

\[
g_{\rm mix} \sim \sqrt{g_N cH},
\]

from local/global throat-curvature mixing.

---

# 2. Public Structure vs Drafting Structure

## 2.1 Public-facing structure

The project should still be presented as a three-part arc:

| Paper | Role | Core Question |
|---|---|---|
| GD1 | Foundation / bridge | Can black-hole interiors and cosmology be read through one geometric framework? |
| GD2 | Geometric completion | What underlying throat structure makes the duality coherent? |
| GD3 | Dynamical payoff | Can the same geometry explain galaxy-scale acceleration laws? |

This public structure is simple, memorable, and narratively strong.

## 2.2 Drafting structure

The actual writing workflow should be:

1. **GD1**
2. **Short Note A — PG Flow from 5D de Sitter Embedding**
3. **Short Note B — Horizon Triple Identity**
4. **GD2**
5. **GD3**

This hybrid structure keeps the trilogy intact while reducing the burden on GD2.

---

# 3. Current Status

## Completed

### GD1 — Foundation / Bridge Paper

GD1 is already drafted/completed.

Its role is to introduce:

- the Alice/Bob causal interpretation,
- the black-hole interior intuition,
- the FLRW-to-PG transformation,
- the areal-radius formulation,
- the matching shell,
- the geometric interpretation of \(\Lambda\),
- and the idea that cosmic expansion and black-hole infall may be dual descriptions.

GD1 is not required to prove the full throat identity. It prepares the reader to take the next step.

---

# 4. Immediate Work: Pre-GD2 Notes

The two immediate deliverables are:

1. **Painlevé–Gullstrand Flow from the 5D de Sitter Embedding**
2. **The Horizon Triple Identity: Curvature Scale, Causal Horizon, and Matching Shell**

These should be drafted before GD2.

They are not random side notes. They are scaffolding notes with precise jobs.

---

# 5. Short Note A: Painlevé–Gullstrand Flow from the 5D de Sitter Embedding

## 5.1 Function of the note

This note should prove one clean fact:

> In the pure de Sitter limit, the standard 5D Minkowski embedding of 4D de Sitter spacetime naturally generates the Painlevé–Gullstrand flow form used in GD.

This is the safest and most conservative of the precursor notes.

It should not attempt to prove the whole GD program.

It should not attempt to derive the full dust+\(\Lambda\) shell-matched spacetime.

It should only show that the core flow structure

\[
F = Hr
\]

is already implicit in the standard de Sitter embedding once the metric is written in areal-radius coordinates.

## 5.2 Working title

**Painlevé–Gullstrand Flow from the 5D de Sitter Embedding**

Alternative titles:

- **Areal-Radius Flow from the de Sitter Hyperboloid**
- **The PG Form of de Sitter Space from its 5D Embedding**
- **Embedding Origin of the GD Flow Term**

The first title is probably best because it says exactly what the note does.

## 5.3 Core thesis

The 5D embedding is not merely a visualization of the GD geometry. In the pure de Sitter limit, it directly produces the same PG flow structure obtained from the FLRW-to-areal-radius transformation.

## 5.4 Key mathematical chain

Start with 5D Minkowski ambient space:

\[
ds_5^2 =
-dX_0^2+dX_1^2+dX_2^2+dX_3^2+dX_4^2 .
\]

Four-dimensional de Sitter space is the hyperboloid:

\[
-X_0^2+X_1^2+X_2^2+X_3^2+X_4^2=L^2,
\]

with

\[
L=\sqrt{\frac{3}{\Lambda}},
\qquad
H=\frac{1}{L}=\sqrt{\frac{\Lambda}{3}}.
\]

Using flat-slicing coordinates gives the induced metric:

\[
ds^2=-dt^2+e^{2Ht}(d\chi^2+\chi^2d\Omega^2).
\]

Set

\[
a(t)=e^{Ht}.
\]

Define the areal radius:

\[
r=a(t)\chi.
\]

Then

\[
dr=a\,d\chi+\dot a\chi\,dt
   =a\,d\chi+Hr\,dt.
\]

Therefore

\[
a\,d\chi=dr-Hr\,dt.
\]

Substitution gives:

\[
ds^2=-dt^2+(dr-Hr\,dt)^2+r^2d\Omega^2.
\]

This is the PG form with flow term

\[
F=Hr.
\]

## 5.5 Proposed section outline

### Abstract

State that the note derives the PG flow form from the standard 5D embedding of de Sitter space.

### 1. Introduction

Explain the role of the note in the GD program.

Key points:

- GD1 rewrote flat FLRW in PG form.
- The pure de Sitter limit admits a standard 5D embedding.
- The note shows that these are not unrelated facts.

### 2. The 5D de Sitter embedding

Define the ambient space and hyperboloid.

Clarify terminology:

- the ambient space is **5D Minkowski**,
- the embedded spacetime is **4D de Sitter**,
- “5D de Sitter embedding” is shorthand for “the 5D embedding of 4D de Sitter.”

### 3. Flat slicing of the hyperboloid

Introduce the flat-slicing coordinates and recover the standard de Sitter FLRW metric.

### 4. Conversion to areal radius

Define \(r=a(t)\chi\) and compute \(dr\).

### 5. Recovery of the PG flow form

Substitute into the metric and identify \(F=Hr\).

### 6. Interpretation

Explain that the hyperbolic motion on the embedded de Sitter hyperboloid appears intrinsically as radial areal-radius flow.

### 7. Significance for GD

State the modest but important conclusion:

> The PG flow term used in GD is not an arbitrary rewriting. In the de Sitter sector, it is naturally generated by the standard embedding geometry.

### 8. Limitations and outlook

Be explicit:

- this note proves the result only for pure de Sitter,
- it does not derive the full dust+\(\Lambda\) GD geometry,
- it prepares the way for GD2.

## 5.6 What this note should not do

This note should not:

- argue for MOND,
- discuss galaxy rotation curves,
- invoke recursive throat self-duality,
- claim that the embedding proves the full GD ontology,
- conflate the embedding with the matching shell,
- or treat the de Sitter horizon and matching shell as literally identical.

Its virtue is narrowness.

---

# 6. Short Note B: The Horizon Triple Identity

## 6.1 Function of the note

This note should state the mature conceptual thesis that GD2 will later defend.

Its job is to clarify the relationship among:

\[
L,\qquad \mathcal H,\qquad \Sigma.
\]

These are:

- \(L\): the de Sitter curvature/throat scale,
- \(\mathcal H\): the causal horizon,
- \(\Sigma\): the timelike matching shell.

The note should emphasize that these are not the same kind of mathematical object. The claim is subtler and stronger:

> They are different presentations of one underlying throat structure.

## 6.2 Working title

**The Horizon Triple Identity: Curvature Scale, Causal Horizon, and Matching Shell**

Alternative titles:

- **The GD Triple Identity**
- **Curvature, Horizon, and Shell in Geometric Duality**
- **The Throat Identity in Black-Hole Cosmology**

The first title is best because it is explicit and memorable.

## 6.3 Core thesis

The central claim is:

\[
L \leftrightarrow \mathcal H \leftrightarrow \Sigma.
\]

This should not be read as a literal equality of differential-geometric objects.

Rather:

- \(L\) is the scalar/geometric face,
- \(\mathcal H\) is the null/causal face,
- \(\Sigma\) is the timelike/history-bearing face.

The GD hypothesis is that these are three manifestations of one underlying throat structure.

## 6.4 Weak and strong readings

### Weak reading

In pure de Sitter space, the curvature scale and horizon scale coincide numerically:

\[
R_H=\frac{c}{H}=L.
\]

The matching shell is placed at the distinguished horizon scale.

On this conservative reading, GD observes a structurally suggestive coincidence among the relevant scales.

### Strong reading

The stronger GD hypothesis says:

> The cosmic horizon, observer horizon, de Sitter throat scale, and matching shell are not independent ingredients. They are different presentations of one underlying throat structure: causal when read through null access, geometric when read through curvature, and timelike when read as the evolving junction seam.

This is the statement GD2 should eventually defend.

## 6.5 The shell as history-bearing seam

The matching shell \(\Sigma\) is not a spatial slice and not literally the null horizon.

It is a timelike 3D hypersurface, or spherical worldtube, whose cross-sections are 2-spheres.

On the shell:

\[
R=1,
\qquad
r=a(\tau).
\]

At each proper time \(\tau\), the shell has a spherical cross-section. As \(\tau\) evolves, these cross-sections trace out the worldtube \(\Sigma\).

The shell is the history-bearing seam where the interior and exterior descriptions are matched.

## 6.6 Exact shell identity vs duality dictionary

This distinction is crucial.

### Exact shell identity

On \(R=1\),

\[
r=a(\tau).
\]

This is an exact relation on the matching shell.

### Duality dictionary

The broader GD interpretation uses the inverse relation

\[
a \leftrightarrow \frac{1}{r}.
\]

This is not the same type of statement.

It is a conformal/interpretive dictionary through which the matched geometry is read from the black-hole interior perspective.

The note should insist that these two statements not be conflated.

## 6.7 Proposed section outline

### Abstract

State the triple identity and distinguish the three objects.

### 1. The problem of too many horizons

Explain that GD uses several horizon-adjacent notions and must clarify them before GD2.

### 2. Three objects, three types

Define:

- \(L\) as curvature scale,
- \(\mathcal H\) as causal horizon,
- \(\Sigma\) as timelike matching shell.

### 3. The de Sitter coincidence

Explain why \(R_H=L\) in pure de Sitter.

### 4. The matching shell

Explain \(\Sigma\) as a timelike worldtube and state \(R=1\), \(r=a(\tau)\).

### 5. Weak reading

State the conservative scale-coincidence claim.

### 6. Strong reading

State the strong throat-identity hypothesis.

### 7. Exact identity vs duality map

Separate \(r=a(\tau)\) from \(a\leftrightarrow1/r\).

### 8. Why this prepares GD2

Explain that GD2 will defend this identity as the organizing structure of the theory.

### 9. Open problems

List what remains to be proved:

- full matching beyond the symmetric background,
- perturbative stability,
- exact relation to observer-dependent horizons,
- possible thermodynamic formulation,
- and eventual galaxy-scale consequences.

## 6.8 What this note should not do

This note should not:

- derive galaxy rotation curves,
- prove the MOND-like law,
- present the full GD2 argument,
- oversell the triple identity as a literal equality,
- or erase the distinction between null horizons and timelike shells.

Its function is conceptual precision.

---

# 7. Optional Later Note: Recovering the GD Infall Function

There is a possible third note:

**Recovering the GD Infall Function from Friedmann Flow**

or

**Recovering the GD Infall Function from Areal-Radius Cosmology**

This note would connect the FLRW/PG flow law to the dust+\(\Lambda\) infall function.

However, this should probably not be prioritized before GD2 unless the first two notes are already complete.

## 7.1 Why it is useful

It would show how

\[
F(r,t)=H(t)r
\]

combined with the Friedmann equation,

\[
H^2=\frac{8\pi G}{3}\left(\rho_m+\rho_\Lambda\right),
\]

produces the radial flow/infall structure.

## 7.2 Why it is delicate

This note is more delicate because it must carefully distinguish:

- pure de Sitter embedding,
- dust+\(\Lambda\) Friedmann dynamics,
- shell-specific relations,
- global extension off the shell,
- and the conformal inversion \(a\leftrightarrow1/r\).

It risks doing too much unless the notation is tightly controlled.

## 7.3 Recommendation

Do not treat this as one of the two required pre-GD2 notes.

Instead:

- use its material inside GD2,
- or draft it later as a technical appendix,
- or keep it as a private derivation note until the shell/global-extension issue is cleaner.

---

# 8. GD2: Geometric Completion / Core Thesis

## 8.1 Function of GD2

GD2 is the theoretical centerpiece.

Its job is to synthesize the causal and geometric tracks and defend the Horizon Triple Identity.

GD2 should not be where the project first discovers its central thesis. It should arrive with the two notes already in place and then declare:

> The GD construction points to a single throat structure whose geometric, causal, and junction presentations are \(L\), \(\mathcal H\), and \(\Sigma\).

## 8.2 Working title

**The Horizon Triple Identity: Geometric Completion of Black-Hole Cosmology**

Alternative titles:

- **Geometric Duality II: The Horizon Triple Identity**
- **Curvature, Horizon, and Shell in Black-Hole Cosmology**
- **The Throat Structure of Geometric Duality**

## 8.3 Core thesis

GD2 should defend the claim:

\[
L \leftrightarrow \mathcal H \leftrightarrow \Sigma.
\]

This is the organizing center of the paper.

## 8.4 Major ingredients

GD2 should synthesize:

1. The causal/Alice-Bob track
2. The FLRW-to-PG derivation
3. The de Sitter embedding note
4. The matching-shell clarification
5. The exact shell relation \(r=a(\tau)\)
6. The duality dictionary \(a\leftrightarrow1/r\)
7. The strong throat-identity hypothesis
8. The distinction between exact geometry and conjectural interpretation

## 8.5 Proposed GD2 outline

### Abstract

State the triple identity and its role in completing GD1.

### 1. Introduction

Explain why GD1 requires a geometric completion.

### 2. Review of GD1

Summarize only the necessary results:

- FLRW can be written in PG form,
- \(F=Hr\),
- the shell/horizon is distinguished,
- the black-hole/cosmology interpretation motivates a deeper identity.

### 3. The dual-track structure

Separate:

- causal interpretation,
- geometric realization,
- duality dictionary.

This section should prevent equivocation.

### 4. Causal track: horizon crossing and interior standpoint

Use Alice/Bob and the Equivalence Principle.

Emphasize:

- local smoothness,
- global causal asymmetry,
- horizon crossing as locally unremarkable,
- singular endpoint as global/asymptotic rather than local.

### 5. Geometric track: FLRW, PG flow, and de Sitter embedding

Use the result of Note A.

Show:

- FLRW \(\to\) areal radius,
- areal radius \(\to\) PG flow,
- pure de Sitter embedding \(\to\) same PG flow.

### 6. The matching shell

Define \(\Sigma\) carefully.

Include:

\[
R=1,
\qquad
r=a(\tau).
\]

Explain induced metric continuity and extrinsic curvature continuity at the background level.

### 7. Curvature scale, horizon, and shell

Define the three objects:

\[
L,\qquad \mathcal H,\qquad \Sigma.
\]

Explain their different mathematical types.

### 8. The Horizon Triple-Identity Hypothesis

State the weak and strong versions.

Weak:

> The relevant scales coincide in the de Sitter/symmetric limit.

Strong:

> These objects are three presentations of one underlying throat structure.

### 9. Exact statements and conjectural statements

This section is essential.

Classify claims as:

#### Exact / established within the model

- FLRW to PG rewriting.
- \(F=Hr\).
- de Sitter embedding of pure de Sitter.
- PG flow from de Sitter embedding.
- \(r=a(\tau)\) on \(R=1\).
- de Sitter scale relation \(L=c/H\) in pure de Sitter.

#### Interpretive but controlled

- Alice/Bob causal reinterpretation.
- singularity as asymptotic/vanishing-point structure.
- \(a\leftrightarrow1/r\) as duality dictionary.

#### Conjectural / future work

- full throat identity beyond the symmetric limit,
- perturbative shell stability,
- thermodynamic interpretation,
- galaxy-scale acceleration law.

### 10. Consequences

Discuss consequences for:

- geometric origin of \(\Lambda\),
- singularity deferral,
- horizon thermodynamics,
- transition to GD3.

### 11. Conclusion

GD2 should end by saying that if the triple identity is correct, then GD3 asks how local matter fields respond dynamically to the same throat geometry.

---

# 9. GD3: Dynamical Payoff / Galaxy-Scale Law

## 9.1 Function of GD3

GD3 should be the first true downstream prediction paper.

Its job is to connect the GD throat structure to galaxy-scale acceleration laws.

## 9.2 Working title

**Geometric Duality III: Throat Curvature and the Galaxy Acceleration Law**

Alternative titles:

- **The Square-Root Law from Throat Geometry**
- **Galaxy Rotation Curves from Geometric Duality**
- **Local/Global Curvature Mixing and the BTFR**

## 9.3 Core target

Derive or justify:

\[
g_{\rm mix} \sim \sqrt{g_N cH}.
\]

For a point mass,

\[
g_N=\frac{GM}{r^2}.
\]

Then

\[
g_{\rm mix}(r)
\sim
\sqrt{\frac{GM}{r^2}cH}
=
\frac{\sqrt{GMcH}}{r}.
\]

Equating to centripetal acceleration,

\[
\frac{v^2}{r}
=
\frac{\sqrt{GMcH}}{r},
\]

gives

\[
v^4 \sim GMcH.
\]

This is the BTFR/MOND-like scaling.

## 9.4 Existing conceptual routes

There are several candidate derivation routes.

### Route A: Curvature mixing

Local source curvature:

\[
k_M \sim \frac{g_N}{c^2}.
\]

Global horizon curvature:

\[
k_H \sim \frac{H}{c}.
\]

Mixed acceleration:

\[
g_{\rm mix}
\sim
c^2\sqrt{k_M k_H}
\sim
\sqrt{g_N cH}.
\]

### Route B: Recursive throat self-duality

Assume local and global sectors are two presentations of the same throat structure at different scales.

A scale-free monomial law has form:

\[
g_{\rm mix}
\propto
g_N^\alpha(cH)^{1-\alpha}.
\]

Exchange symmetry requires:

\[
\alpha=1-\alpha,
\]

hence

\[
\alpha=\frac12.
\]

Therefore:

\[
g_{\rm mix}\sim\sqrt{g_N cH}.
\]

### Route C: Homogeneous functional-equation derivation

Let

\[
D(g_N,a_H)
\]

be the mixed acceleration law with

\[
a_H=cH.
\]

Assume:

1. no new dimensionful scale,
2. homogeneity,
3. self-duality under exchange,
4. exact deep-regime flat-curve scaling.

Then the unique minimal law is:

\[
D(g_N,a_H)=\kappa\sqrt{g_Na_H}.
\]

Restoring \(a_H=cH\):

\[
g_{\rm mix}=\kappa\sqrt{g_NcH}.
\]

## 9.5 What GD3 must still supply

The current square-root arguments are powerful selection arguments, but not yet a final dynamical derivation.

GD3 must eventually identify one of:

- an effective metric correction,
- a projected curvature invariant,
- a Gauss-Codazzi/extrinsic-curvature term,
- a shell-response law,
- an effective stress-energy contribution,
- or a weak-field geodesic correction

whose low-acceleration limit realizes the selected square-root law.

## 9.6 GD3 should not pretend

GD3 should not present the square-root law as fully derived until the tensorial/geometric realization is identified.

It can, however, honestly present:

- symmetry selection,
- dimensional inevitability under GD assumptions,
- phenomenological match,
- and candidate geometric mechanisms.

---

# 10. Possible GD4 / Later Synthesis: Thermodynamic Reconciliation

This is not part of the immediate trilogy unless the project expands.

However, a later synthesis paper may be valuable.

## 10.1 Function

Reconcile GD with:

- Verlinde,
- Padmanabhan,
- horizon thermodynamics,
- emergent gravity,
- and holographic/equipartition ideas.

## 10.2 Thesis

GD should not frame these approaches as enemies.

Instead:

> MOND phenomenology, emergent gravity, de Sitter horizon thermodynamics, and black-hole/cosmology duality may be partial recognitions of one underlying throat-centered geometry.

## 10.3 Role in the larger program

This would be less about new equations and more about synthesis.

It would explain why earlier thinkers kept finding the same clues:

- \(a_0\sim cH\),
- horizon entropy,
- de Sitter scale,
- radial acceleration relation,
- and cosmic/local coupling.

GD supplies the geometric bridge.

---

# 11. Project Dependency Graph

The logical dependencies are:

```text
GD1
│
├── Causal track
│   ├── Alice/Bob
│   ├── horizon crossing
│   ├── equivalence principle
│   └── singularity as global/asymptotic structure
│
├── Geometric track
│   ├── FLRW metric
│   ├── areal radius r = aR
│   ├── PG flow form
│   └── F = Hr
│
├── Short Note A
│   └── PG flow from 5D de Sitter embedding
│
├── Short Note B
│   └── L ↔ H ↔ Σ triple identity
│
└── GD2
    ├── synthesis of causal and geometric tracks
    ├── shell/horizon/curvature distinction
    ├── Horizon Triple-Identity Hypothesis
    └── bridge to GD3
        │
        └── GD3
            ├── local/global curvature mixing
            ├── square-root law
            ├── BTFR
            └── galaxy-scale predictions
```

---

# 12. Core Glossary

## GD

Geometric Duality: the research program interpreting black-hole interior geometry and cosmological expansion as dual descriptions of one underlying structure.

## PG

Painlevé–Gullstrand form: a metric form in which geometry is expressed using a radial flow term.

## Areal radius

The radius \(r\) defined so that spherical surfaces have area:

\[
A=4\pi r^2.
\]

In FLRW variables:

\[
r=a(t)R.
\]

## Matching shell \(\Sigma\)

The timelike 3D hypersurface where the interior and exterior descriptions are joined.

On the shell:

\[
R=1,
\qquad
r=a(\tau).
\]

## Causal horizon \(\mathcal H\)

The observer-dependent null boundary associated with causal access.

## de Sitter radius \(L\)

The global curvature scale of de Sitter spacetime:

\[
L=\sqrt{\frac{3}{\Lambda}}.
\]

In pure de Sitter:

\[
L=\frac{c}{H}.
\]

## Horizon Triple Identity

The proposed GD identification:

\[
L \leftrightarrow \mathcal H \leftrightarrow \Sigma.
\]

This does not mean that the three objects are literally identical. It means they are three presentations of one underlying throat structure.

## Duality dictionary

The broader interpretive map:

\[
a \leftrightarrow \frac{1}{r}.
\]

This should be distinguished from the exact shell identity \(r=a(\tau)\).

## Throat structure

The underlying geometric structure that appears as:

- curvature scale,
- causal horizon,
- and matching shell.

## Local/global curvature mixing

The proposed mechanism by which local Newtonian acceleration \(g_N\) couples to the global horizon acceleration \(cH\), producing:

\[
g_{\rm mix}\sim\sqrt{g_NcH}.
\]

---

# 13. Guiding Discipline for Future Drafts

Every major claim should be tagged as one of four types:

## 13.1 Exact geometry

Examples:

- FLRW to PG rewriting.
- \(r=aR\).
- \(F=Hr\).
- pure de Sitter embedding.
- \(L=\sqrt{3/\Lambda}\).

## 13.2 Causal interpretation

Examples:

- Alice/Bob horizon-crossing asymmetry.
- horizon crossing is locally unremarkable.
- singular endpoint as global/asymptotic structure.

## 13.3 Duality map

Examples:

- \(a\leftrightarrow1/r\).
- collapse read as cosmology.
- black-hole interior read as expanding universe.

## 13.4 Open conjecture

Examples:

- full triple identity beyond the symmetric limit.
- galaxy law from throat curvature.
- thermodynamic interpretation.
- perturbative stability.

This classification should prevent the writing from sliding between exact derivation, interpretation, and speculation.

---

# 14. Immediate Action Plan

## Today

Draft and polish:

1. **Painlevé–Gullstrand Flow from the 5D de Sitter Embedding**
2. **The Horizon Triple Identity: Curvature Scale, Causal Horizon, and Matching Shell**

## After those notes

Create a GD2 outline using the notes as anchors.

## Then

Draft GD2 section-by-section.

## Later

Return to the GD infall-function derivation and decide whether it belongs as:

- a standalone note,
- a GD2 appendix,
- or a technical subsection.

## After GD2

Begin GD3 with the existing square-root law notes as seed material.

---

# 15. Short Version

The project roadmap is:

```text
GD1 — Foundation / bridge paper
  ↓
Note A — PG Flow from the 5D de Sitter Embedding
  ↓
Note B — The Horizon Triple Identity
  ↓
GD2 — Geometric completion / throat identity
  ↓
GD3 — Galaxy-law payoff / square-root acceleration law
```

The core transition is:

\[
\text{FLRW} \to \text{PG flow} \to \text{de Sitter embedding} \to
L \leftrightarrow \mathcal H \leftrightarrow \Sigma
\to
g_{\rm mix}\sim\sqrt{g_NcH}.
\]

That is the current backbone of the Geometric Duality research program.
