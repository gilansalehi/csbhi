# Penrose packet — prose qualms & quibbles for Codex

A running queue of things Claude is uncertain about while rewriting the packet notes to publishable quality. These are the softer calls — wording, framing, tone risks — plus a few substance flags that surfaced during the prose pass. Codex to review at the end and confirm, correct, or push back. Not a changelog; git holds the history.

Status key is in the prose, not brackets — same for this file: if an item says "verify," it wants a second pair of eyes before we trust it.

---

## Note 2 — "A Black Hole on the Aeon Boundary" (shear_free_interior_weyl_stress_identity.md)

- **Non-separable / energy-flux generalization — removed from the body, needs re-committing.** The published note now claims only the separable result, which the committed script (`shear_free_Pi_equals_minus_half_D.py`) backs to 8 sig figs. During development the ratio \(\Pi/D=-\tfrac12\) also held on non-separable interiors and with a small energy flux \(G_{\hat0\hat r}\neq0\), but those cases are not in the committed suite, so the stronger sentence was cut. **Codex: re-run and, if it holds, re-commit those cases** so we can restore "the ratio does not depend on separability" with backing.

- **Convention paragraph — verify the factors read cleanly to an outside relativist.** The note states \(8\pi G\,\Pi=6\Psi_2\) (NP), \(=3\,C_{\hat0\hat r\hat0\hat r}\), and the anisotropic density relation \(\Psi_2=-\tfrac{4\pi G}{3}(D+\Pi)\). Confirm the normalization chain is internally consistent and matches Herrera et al. (arXiv:0903.3532) conventions as cited.

- **Corollary table keeps the \(\Pi=-D \Rightarrow a^{-1}\) row** even though only \(\Pi=0\) and \(\Pi=-\tfrac12 D\) carry the argument. Kept for completeness / to show the landscape. Quibble: is the third row a helpful map or a distraction for a Penrose-facing read?

---

## Note 1 — "The Weyl Curvature Hypothesis as a Fixed Point" (recursive_bhc_and_the_weyl_curvature_hypothesis.md)

- **Entropy fold-in — only the surviving result travels.** The standalone entropy note's headline covariance law \(S\propto a^2\) was *withdrawn* in its own text; this note keeps only the \(S_{\rm BH}=S_{\rm dS}\) horizon identity (§3), stated conditional on the idealized \(\Lambda=3/R_S^2\) matching. **Codex: confirm nothing from the retracted covariance argument leaked into §3**, and that the identity's conditionality is stated honestly (transverse-curvature junction flagged as unsettled).
- **The entropy-as-phase-space reading (§3).** "The parent's horizon entropy *becomes* the child's available phase space" is interpretation, not a derived microstate transport — the note says so. Quibble: is the caveat paragraph doing enough work, or does the main text still read as if the transport is established?
- **Observational targets (§5).** \(\sim10^{-5}\) and \(n_s\simeq0.965\) appear as the *test to be passed*, not as predictions we claim to reproduce. Verify the phrasing never tips into implying we already recover them.
- **Standalone entropy note is now orphaned from the packet** but still lives in the wider collection with its retracted equation in place. Out of scope for the packet, but flag: it needs its own cleanup someday, or a redirect.

---

## Cross-note checks (apply to all packet notes)

- **Self-referential phrasing.** Sweep for "this note shows/proves/claims/argues" and similar self-conscious constructions; the epistemic status should live in word choice, not in announcements about the document.
- **Authorship endnote.** One line per note: "Derived by Claude … cross-checked by Codex … under Salehi Remediation." Confirm phrasing is uniform across the arc.
- **Self-containment.** No cross-links to notes outside the packet's three documents + GD1. Flag any that slipped through.
