# AGENTS.md

Project guidance for AI coding agents working in this repository.

## Project Overview

This repository hosts the public static site for the Geometric Duality / CSBHI physics education and research project.

The site currently consists of:

- `index.html` - project landing page and publication roadmap.
- `gd1.html` - latest public version of GD I, "Geometric Duality of Black-Hole Interiors."
- `note.html` - Markdown note renderer for files in `notes/`.
- `leap-of-faith.html` - standalone interactive Alice/Bob descent presentation.
- `notes/` - current public-facing note outlines and papers loaded by `note.html?src=<filename-without-md>`.
- `old_notes/` - prior drafts, synthesis notes, revision lenses, and roadmap material. Treat these as source context, not automatically public current content.
- `src/css/` - the CSS import manifest and small semantic/module stylesheets.
- `src/js/` - small client-side scripts for dark mode, contact links, and the Alice descent canvas.
- `images/` - paper figures and banner images.

There is no package manager, build step, bundler, or formal test runner at the moment. The project is plain HTML/CSS/JS plus Markdown.

## Source Of Truth

Use this order when orienting yourself:

1. The actual file tree and current linked pages.
2. `AGENTS.md` for process and repo conventions.
3. `README.md` for high-level research context and current file map.
4. `notes/` for current public notes.
5. `old_notes/` for archival drafts, revision lenses, and prior research context.

If the README and the file tree disagree, trust the file tree and update the README as part of documentation cleanup. Do not silently promote `old_notes/` material into the public site without user confirmation.

## Agent Workflow

On arrival:

- Run `git status --short` and identify user or staged changes before editing.
- Read `AGENTS.md`, then skim `README.md` for project context.
- Inspect the specific HTML, Markdown, CSS, or JS files touched by the request before making changes.
- For conceptual research edits, read the relevant current note in `notes/` and any clearly related archival note in `old_notes/`.

Before editing:

- Identify whether the change affects public pages, public notes, archival notes, or site behavior.
- Keep public content edits conservative unless the user explicitly asks for a stronger rewrite.
- Preserve provenance: when an argument comes from an older note, keep enough context to avoid flattening draft history.
- Do not stage, commit, rename, delete, or move files unless the user asks for that action.
- Treat science, mathematical argument, rhetoric, and presentation as linked concerns. A technically correct edit can still be wrong if it overclaims, muddies the reader's path, or weakens the public page.

While editing:

- Use `apply_patch` for manual edits.
- Keep changes narrow and easy to review.
- Preserve existing formatting patterns unless there is a concrete reason to normalize them.
- For research claims, prefer qualifying language when tensorial derivation, lensing, interpolation, or observational validation is still open.
- For public note additions, add the Markdown file to `notes/` and update every relevant `note.html?src=<basename>` link.

Before final response:

- Review `git diff --stat` and the relevant file diff.
- Run only the verification that matches the risk of the change.
- Report changed files, verification performed, and any remaining onboarding or research gaps.

## Collaboration Priorities

The user's preferred focus for agents is:

1. Scientific and mathematical coherence.
2. Composition of the argument, including rhetorical force and careful qualification.
3. Public presentation quality, including typography, layout, responsive behavior, and UI bugs.
4. Code quality in service of the above.

Do not spend effort on git staging, commits, branching, or release mechanics unless the user explicitly asks. The user will handle commits and staging.

## Research Orientation

Keep the project's two-track structure clear:

- **Causal / interpretive track:** Alice/Bob, horizon crossing, perspective shift, and "The Universe is a Black Hole" framing.
- **Geometric / exact track:** FLRW to areal radius to Painleve-Gullstrand form, shell relation, and 5D de Sitter embedding.

Do not blur conjectural language into established derivation. Label material as:

- exact geometry,
- coordinate identity,
- duality map,
- causal interpretation,
- heuristic argument,
- open conjecture,
- target observable.

Use `notes/` for current public notes. Use `old_notes/` to recover context, earlier arguments, or revision intent, but confirm before promoting old material into the public site.

## Content Standards

- Preserve mathematical notation and terminology carefully. Small wording changes can change the claim.
- Prefer precise claims over stronger claims. If a result is symmetry-selected but not tensorially derived, say so.
- Keep units and conventions explicit when editing the paper. `gd1.html` currently states geometrized units with `c=1`, `G=1`, `2M=1`, metric signature `(-,+,+,+)`, and horizon at `r=1`.
- Keep the distinction between the shell relation `r = a(tau)` and broader duality/scaling language such as `a <-> 1/r`.
- Avoid presenting MOND/BTFR recovery as complete until lensing, interpolation, and tensorial derivation gaps are addressed.
- When adding references or claims about the literature, use primary sources where possible and include enough citation context for later verification.

## Argument And Composition

- Earn brevity. First resolve the complexity and ambiguity, then present the simplest durable version of the argument.
- Keep the load-bearing steps visible. Do not show every scratch-work step, but do not hide a step the reader needs in order to trust the conclusion.
- Treat final prose as the result of compression, not omission.
- Lead readers from established geometry to interpretation to conjecture. Do not start with the strongest slogan unless the surrounding section can support it.
- Prefer section structure that makes the claim status visible: setup, exact result, interpretation, consequence, open problem.
- Preserve the Alice/Bob framing as an interpretive bridge, not as the derivational foundation.
- When tightening prose, reduce ambiguity before reducing length.
- Keep public-facing language confident but bounded. Avoid language that implies observational closure before lensing, interpolation, clusters, perturbations, and tensorial realization are addressed.
- If a derivation has a missing step, name the missing step directly rather than hiding it in softer wording.

## Site Architecture

- Pages are static and should remain directly readable as HTML.
- Series papers should follow the `gd1.html` HTML5 paper skeleton.
- `note.html` fetches Markdown from `notes/<src>.md`, renders with `markdown-it`, and then runs MathJax v3.
- The landing page links to notes using `note.html?src=<basename>`. The basename must exactly match a file in `notes/`.
- `gd1.html` and `leap-of-faith.html` use `src/js/slideshow.js` for the Alice descent canvas.
- `src/css/index.css` is the only shared stylesheet entry point. It imports the small CSS files in `src/css/`.
- `src/js/dark-mode.js` injects or wires a `#theme-toggle` button and persists the selected theme in `localStorage`.
- `src/js/email.js` fills `.email-container` and `.github-container` elements.

## HTML Paper Standard

Use `gd1.html` as the structural template for GD-series papers and full notes:

- Document shell: `body > main > article`.
- Paper title block: `header` with series label, `h1`, subtitle, and `dl` metadata.
- Table of contents: `nav`, linked to all major sections, appendices, and references.
- Conventions or assumptions: use `aside` inside the article; asides are styled as callouts by the shared HTML defaults.
- Abstracts may use `details` / `summary` when there is a rhetorical reason to let the reader encounter the argument first.
- Main argument: top-level `section` elements with stable ids; subsections may nest inside their parent section.
- Figures: use `figure`, `img alt`, and `figcaption`.
- References: use a linked `section#references`; each citation target should have a stable id such as `ref-01`.
- Behavior scripts belong at the end of `body`, after `main`, not outside `body`.
- Avoid inline styles in papers. Prefer semantic HTML; add CSS only to the relevant file imported by `src/css/index.css`.

## Coding Standards

- Fit the existing system first. Read before changing, and match local structure, naming, formatting, and dependency style unless there is a concrete reason not to.
- Make the smallest complete change: small enough to review, complete enough not to leave the real issue unresolved.
- Prefer boring code: clear HTML, CSS, and JavaScript over clever abstractions.
- Name things for the domain rather than generic mechanics.
- Separate content, presentation, and behavior when doing so keeps the page easier to reason about.
- Make UI states explicit: loading, error, empty, mobile, dark mode, failed fetch, and missing note states should not be accidental.
- Leave the repo easier to work in: fewer stale references, clearer file ownership, and fewer surprises.
- Keep dependencies minimal. Do not add a framework, package manager, or build system unless the user explicitly chooses that direction.
- Use plain, readable HTML/CSS/JS that matches the existing code style.
- Keep JavaScript browser-compatible and avoid transpilation assumptions.
- Prefer relative links for local site assets and pages.
- Preserve accessibility basics: semantic headings, usable link text, `aria-label` where controls need it, and responsive layouts.
- Keep CSS changes scoped. `src/css/index.css` is an import manifest, not a place for rules. Add rules to the semantic or module stylesheet that owns the behavior.
- Do not make broad visual redesigns while editing paper content unless specifically requested.
- Use ASCII in source files unless the existing file already relies on a specific symbol for mathematical or publication clarity.

## Presentation And UI

- Treat layout bugs, unreadable math, broken note loading, dark-mode regressions, mobile overflow, and confusing navigation as substantive project issues.
- Favor a restrained paper-like reading experience unless the user asks for a larger visual redesign.
- Check long equations, tables, and publication cards on narrow screens when editing public pages.
- Preserve the distinction between the landing page, the paper, public notes, and archival notes in the navigation.
- Keep interactive pieces, especially the Alice descent canvas, understandable without adding explanatory clutter to the main paper.

## CSS Standard

- Start from HTML5 defaults. Add CSS only when there is a clear reason: readable measure, spacing, dark mode, responsive behavior, accessibility, or a concrete UI bug.
- Treat semantic HTML as the styling API. Do not create a class for a concept HTML already expresses, such as `article`, `header`, `nav`, `aside`, `figure`, `details`, or `table`.
- Keep `src/css/index.css` as a list of imports. Split CSS files for organization around stable responsibilities, not as a substitute for semantic markup.
- Good CSS can be tiny. Preserve small rules that improve affordance, state, or reading comfort, such as a round icon button, a clear link hover state, or an open/closed marker.
- Use classes only where HTML has no native concept or where a reusable module needs a stable hook, such as `.publications`, `.problem-scoreboard`, `.status`, `.end-ref`, or interactive controls.
- Keep structural classes and presentation utilities distinct. Prefer semantic selectors or module-owned selectors over repeated utility classes when a surrounding structure already owns the presentation.
- Avoid decorative styling that does not strengthen the argument or reading experience.
- Keep shared CSS small. Delete unused selectors and one-off polish before adding new rules.
- Use native controls and browser defaults unless custom styling solves a real presentation problem.
- Use print CSS for medium-specific rhetoric. Mark interactive or screen-only regions with `data-print="omit"` when they should disappear from printed papers.

## Markdown And Math

- Notes in `notes/` use Markdown with LaTeX delimiters `\(...\)` and `\[...\]`.
- `note.html` protects those math spans before Markdown rendering, then restores them for MathJax.
- Avoid raw HTML in notes unless there is a strong reason. `markdown-it` is configured with `html: false`.
- When adding a new public note:
  - put the file in `notes/`,
  - use a stable snake_case filename,
  - link to it as `note.html?src=<basename>`,
  - verify the note loads and math renders.

## Verification

For small content-only edits, inspect the affected HTML/Markdown and check links manually.

For site behavior changes, run a local static server from the repo root, for example:

```sh
python3 -m http.server 8000
```

Then verify the affected pages in a browser:

- `http://localhost:8000/`
- `http://localhost:8000/gd1.html`
- `http://localhost:8000/note.html?src=pg_flow_from_5d_desitter_embedding`
- `http://localhost:8000/leap-of-faith.html`

Opening `note.html` directly from the filesystem may fail because it fetches Markdown files; use a local server for notes.

The user allows `curl` checks against `localhost:8080` for project verification. Ask before using `curl` for non-localhost URLs or broader network access.

## Git Hygiene

- Expect a dirty worktree and preserve user changes.
- The user handles staging and commits. Do not run `git add`, `git commit`, branch operations, or release commands unless explicitly asked.
- Do not unstage, revert, or overwrite changes you did not make.
- If a file you need already has unrelated user edits, work around them and mention the overlap in the final response.
- Keep generated or local-only clutter out of the repo unless the user explicitly wants it tracked.

## Known Onboarding Gaps

These are unresolved project conventions that should be clarified over time:

- Publishing status: which files in `notes/` are canonical/public versus provisional outlines.
- Archive policy: when material should stay in `old_notes/`, be moved into `notes/`, or be deleted.
- GD I source of truth: whether `gd1.html` is edited directly or should eventually be generated from Markdown/LaTeX.
- Citation standard: whether references should follow a specific format, DOI/arXiv preference, or bibliography workflow.
- Mathematical review process: who signs off on physics derivations before public publication.
- Deployment workflow: where the site is hosted, how it is deployed, and whether there is a preview step.
- Browser support target: especially for CSS nesting, `color-mix()`, MathJax, and canvas behavior.
- Visual/design standard: whether the current restrained paper-like style is the long-term target.
- Test/validation expectations: whether to add HTML validation, link checking, accessibility checks, or screenshot checks.

## Working Principles

- Read existing notes before making conceptual edits.
- Keep edits narrowly tied to the requested paper, page, or note.
- Surface uncertainty explicitly when a change touches physics claims.
- Do not overwrite user drafts or unpublished notes without confirmation.
- Treat this repo as both a website and an evolving research notebook; preserve provenance and avoid collapsing draft context prematurely.
