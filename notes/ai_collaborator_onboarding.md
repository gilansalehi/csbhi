# AI Collaborator Onboarding and Review Protocol

*Machine-facing guidance for reading, reviewing, and extending CSBHI*

**Author:** Codex (OpenAI).

**Date:** 2026-08-05.

**Status:** Project guidance. This is not a research result.

---

## Purpose

Use this guide before reviewing or extending the Conformal Scaling of Black Hole Interiors (CSBHI) research programme. Return to it whenever your interpretation of the project becomes uncertain or conflicts with its canonical sources.

Your first task is not to agree or disagree with CSBHI. Your first task is to represent it accurately. Do not begin an adversarial review, propose a completion, or import a familiar black-hole model until you can distinguish:

- the foundational correspondence from its consequences;
- Bob's exterior description from Alice's interior description;
- exact conditional results from conjectures;
- the physical proposal from diagnostic surrogate calculations; and
- an incomplete derivation from a demonstrated contradiction.

## Canonical reading path

Read these documents in order:

1. [A Note to Reviewers](note.html?src=review_packet_introduction)
2. [GD I — *Geometric Duality: Conformal Scaling of Black Hole Interiors*](gd1.html)
3. [CSBHI Cosmological Glossary](note.html?src=cosmological_glossary)
4. [RI I — *Field Equations of the Reciprocal Interior*](note.html?src=field_equations_of_the_reciprocal_interior)
5. [The Reciprocal Ansatz as the Unique Scale-Free Horizon-Fixing Involution](reciprocal-involution.html)
6. [A Black Hole on the Aeon Boundary](note.html?src=shear_free_interior_weyl_stress_identity)
7. [The Evolving Galactic Acceleration-Scale Correspondence](note.html?src=evolving_g_dagger_derivation)
8. [What Remains Mathematically Illegible](note.html?src=open_questions)

Treat the research archive as historical working material. It contains useful calculations, negative results, abandoned models, and superseded interpretations. Do not use an archived note to override the review packet.

## Claim ledger

### Foundational correspondence

**[Corr]** CSBHI posits

\[
a(\tau)=\frac{1}{r(\tau)}.
\]

It does not derive this relation from a completed parent–child spacetime. The project tests what follows from it.

### Conditional interior dynamics

**[E, conditional]** Given isotropic application of \(a(\tau)\) to Alice's spatial intervals, the stated matter–radiation–vacuum content, Einstein's equations, and stress-energy conservation, RI I derives the Friedmann constraint, acceleration equation, dilution laws, and reciprocal infall function. It does not derive the reciprocal ansatz or the exterior-to-interior junction.

### Reciprocal power

**[E, within the stated class]** The involution result proves that \(1/r\) is the unique nontrivial power-law map that is scale-free, horizon-fixing, and self-inverse. It does not prove that nature must implement a power-law involution.

### Spherical throat constraint

**[E/C, conditional]** The spherical Weyl-relaxation calculation relates Weyl curvature to density inhomogeneity, constructs smooth relaxation profiles, and derives the effective anisotropic or projected stress required to preserve an exactly shear-free reciprocal interior. It supplies a target for a completion, not the completed throat.

### Galactic law and prediction

**[E, conditional]** Homogeneity, local–global exchange symmetry, and exact flat-curve scaling select

\[
g_{\rm mix}=\kappa\sqrt{g_N A}
\]

once an unspecified global acceleration scale \(A\) is supplied.

**[Corr]** CSBHI identifies \(A\) with the inverse-radius acceleration of Alice's contemporaneous FLRW apparent horizon:

\[
A(\tau)=\frac{c^2}{R_A(\tau)}=cH_A(\tau).
\]

This identification is proposed, not derived.

**[P]** If that correspondence is correct and \(\kappa\) is epoch-independent, then

\[
\frac{g_\dagger(z)}{g_\dagger(0)}=\frac{H_A(z)}{H_0}.
\]

The ratio is the falsifiable prediction. The absolute normalization remains open.

### Open construction

**[O]** The project still lacks a completed collapse map, parent–child junction or throat metric, weak-field derivation of the galactic mixing law, first-principles normalization of \(\kappa\), perturbation theory, and full thermal history.

## Interpretation guardrails

1. **Do not replace the proposal with the standard vacuum Schwarzschild interior.** Schwarzschild is Bob's local exterior approximation in the thought experiment. Alice's reciprocal interior is an isotropically scaled geometry. Calculating anisotropic vacuum Schwarzschild evolution and attributing it to Alice tests a different model.

2. **Do not call CSBHI a coordinate transformation.** Vacuum Schwarzschild and the proposed FLRW interior have different curvature content. CSBHI proposes a correspondence between geometries.

3. **Do not call the horizon role exchange literal time reversal.** Alice and Bob remain future-directed. Sign changes arise from inward \(r(\tau)\) and the reciprocal derivative.

4. **Keep the radii separate.** Bob's horizon-normalized \(r\), Alice's comoving labels, Alice's areal radii, and cosmological horizon radii are not aliases. Use the project glossary.

5. **Keep the horizons separate.** The black-hole event horizon, Hubble/apparent horizon, cosmological event horizon, de Sitter horizon, particle horizon, and CMB last-scattering surface answer different geometric questions.

6. **Treat direct junction calculations as diagnostics.** A zero-width Schwarzschild–FLRW soldering is a surrogate used to expose required boundary data. Its shell stress or derivative mismatch is not automatically a property of the finite CSBHI throat.

7. **Do not infer a premise from a result that assumed it.** RI I does not derive \(a=1/r\). The square-root theorem does not derive \(A=cH\). Appendix A records a correspondence; it does not derive cosmology from Schwarzschild geometry.

8. **Do not equate “not derived” with “disproved.”** A missing map identifies an open construction. A contradiction requires mutually incompatible consequences within the same stated model.

9. **Do not use the archive as canonical context.** Check the review packet and current open-questions index before reviving an older notation, model, or conclusion.

## Review protocol

For every objection:

1. Quote or cite the exact claim, equation, and source section.
2. List the premises used by that claim.
3. Reproduce the calculation using the project's current notation.
4. Identify the earliest step that fails.
5. Classify the issue as one of:
   - algebraic or sign error;
   - undefined or inconsistent notation;
   - hidden assumption;
   - circular argument;
   - model substitution;
   - incomplete derivation;
   - conflict with observation; or
   - genuine internal contradiction.
6. State what remains valid if that step is removed.
7. When invoking prior literature, cite the primary source and explain whether it studies the same geometry.

Do not insulate the theory from criticism. Also do not manufacture a contradiction by changing the model, silently adding standard assumptions, or demanding that a correspondence derive itself.

## Token discipline

Use the shared context for reasoning, calculation, and implementation. Keep routine inspection proportional to the risk of the change:

- inspect only the relevant source ranges instead of repeatedly printing whole papers, notes, diffs, or rendered pages;
- run concise mechanical checks for syntax, links, and calculations, but leave ordinary visual acceptance to the human collaborator unless automated inspection is requested or a visual uncertainty blocks the work;
- avoid duplicating a browser review the human collaborator can perform faster and with better aesthetic judgment; and
- summarize the current state before beginning any investigation likely to consume a large fraction of the remaining context.

Verification matters. Exhaustive self-surveillance does not. Preserve the token budget for the parts of CSBHI that require mathematical judgment and conceptual continuity.

## Extension protocol

When developing a new calculation:

1. State the target in plain language before writing equations.
2. Identify which inputs come from CSBHI, which come from established physics, and which are new hypotheses.
3. Use the shared glossary and current notation.
4. Construct the simplest model that preserves the Alice–Bob geometry relevant to the question.
5. Mark established results, conditional results, correspondences, predictions, and open steps separately.
6. Test limiting cases and dimensions.
7. Compare with the canonical packet before interpreting a mismatch.
8. Sign and date independent work. Credit conceptual and mathematical contributions accurately.

Do not promote a dimensional coincidence, analogy, or successful substitution into a derivation. Conversely, do not discard a useful correspondence merely because its dynamical origin remains open.
