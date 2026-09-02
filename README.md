# Philosophy Lab

`philosophy-lab` is a small, interactive laboratory for presenting philosophical arguments, paradoxes, thought experiments, distinctions, objections, replies, and viewpoints.

The repository deliberately focuses on **local philosophical objects** rather than comprehensive worldviews or formal proof systems:

- `philosophy-lab`: understand and manipulate a particular idea.
- `worldview-lab`: explore how positions fit into broader systems of belief.
- `truth-core`: formalize propositions and machine-checkable reasoning where useful.

## Design direction

The primary unit is an **exhibit**. An exhibit may use whichever presentation best clarifies its subject: an argument tree, premise toggles, objection/reply branches, alternative viewpoints, a paradox diagram, a thought experiment, or another small interaction.

Repeated structures may become shared primitives, but the project should not begin by inventing a universal philosophy schema. Let real exhibits force useful abstractions to emerge.

## Initial technical direction

The first version is a dependency-light browser application written in TypeScript and built with Bun. It keeps repository-owned validation deterministic and compatible with the wider coding-agent landscape.

See `ROADMAP.md`, `CONTEXT.md`, and `AGENTS.md` once the repository foundation lands.
