# Roadmap

Philosophy Lab should grow by adding real exhibits and promoting only patterns that repeatedly prove useful.

## Foundation and first content batch — current

- [x] Establish the repository boundary relative to `worldview-lab` and `truth-core`.
- [x] Add the coding-agent repository foundation, environment-v1, deterministic validation, Renovate, devcontainer, and Pages delivery.
- [x] Add a dependency-light TypeScript web shell.
- [x] Add the interactive `Argument anatomy` exhibit with tested premise-state semantics.
- [x] Add a narrow reusable `ChoiceExhibit` primitive for question → position → commitment/pressure interactions.
- [x] Implement 18 classic interactive problems across six philosophy families with inspectable references.
- [x] Make the selected choice exhibit and answer URL-addressable.

## Next implementation horizon

1. **Specialized visual exhibits** — give the Ship of Theseus, trolley variants, sorites series, and prisoner's dilemma presentations that exploit diagrams or structured state instead of forcing every problem through the choice primitive.
2. **Objection and reply branches** — extend selected positions with explicit objections and replies while keeping the structure local until several exhibits prove a shared pattern.
3. **Cross-exhibit comparison** — let visitors compare their answers across related problems, especially switch vs. footbridge and free-will positions vs. Frankfurt cases.
4. **Remaining UI contracts** — add light/dark/system theme preference and `en`/`de`/`es` localization at the now-stable content boundary.
5. **Accessibility and web-quality depth** — add browser-level accessibility tests and lightweight web auditing now that the site has enough surface to justify them.

## Deferred until evidence exists

- React or another UI framework.
- A generic graph library.
- WASM or Rust kernels.
- A universal claim/ontology schema.
- Formal proof integration with `truth-core`.
- Cross-repository worldview synchronization.

Each of these may become useful, but the trigger should be a concrete exhibit or repeated pattern rather than architectural anticipation.
