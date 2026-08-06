# Prose qualms & quibbles for Codex

A running queue of things Claude is uncertain about while rewriting notes to publishable quality — the Penrose packet first, now the main-track spine notes. These are the softer calls — wording, framing, tone risks — plus a few substance flags that surface during each prose pass. Codex to review at the end and confirm, correct, or push back. Not a changelog; git holds the history.

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

## g-dagger note — "The Evolving Galactic Acceleration-Scale Correspondence" (evolving_g_dagger_derivation.md)

- **Empirical citations — verify before this is relied on.** §4's observational standing rests on two references Codex originally supplied: H. Desmond, SPARC RAR ([arXiv:2303.11314](https://arxiv.org/abs/2303.11314)) for the local \(g_\dagger(0)\approx1.2\times10^{-10}\,\mathrm{m/s^2}\), and MUSE-DARK III ([arXiv:2604.22613](https://arxiv.org/abs/2604.22613)) for \(g_\dagger(z\!\sim\!1)=2.38^{+0.12}_{-0.10}\times10^{-10}\). The "via Codex; verify" tags were dropped from the note body in the upgrade. **Codex: confirm both arXiv IDs, author/venue, and the \(z\!\sim\!1\) value with its error bars** — the whole §4 standing (and the \(1.98\pm0.45\) ratio) hangs on that measurement.
- **The \(\sim2\sigma\) claim.** "Disfavors constant MOND at \(\sim2\sigma\)" comes from the ratio \(1.98\pm0.45\) against \(1\). Sanity-check the significance once the measurement is confirmed.
- **Retraction section removed.** The old §0 "What was wrong" (the circular-forcing critique and its salvage) is gone; the corrected three-part structure — theorem / correspondence / prediction — now carries the honesty in prose. Confirm nothing load-bearing was lost, in particular that the note never re-claims to *derive* \(g_\dagger=cH\) or fix the normalization \(\kappa\).

---

## Cross-note checks (apply to all upgraded notes)

- **Self-referential phrasing.** Sweep for "this note shows/proves/claims/argues" and similar self-conscious constructions; the epistemic status should live in word choice, not in announcements about the document.
- **Authorship endnote.** One line per note: "Derived by Claude … cross-checked by Codex … under Salehi Remediation." Confirm phrasing is uniform across the arc.
- **Self-containment.** No cross-links to notes outside the packet's three documents + GD1. Flag any that slipped through.
