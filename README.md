# Philosophy Lab

`philosophy-lab` is a small, interactive laboratory for presenting philosophical arguments, paradoxes, thought experiments, distinctions, objections, replies, and viewpoints.

The repository deliberately focuses on **local philosophical objects** rather than comprehensive worldviews or formal proof systems:

- `philosophy-lab`: understand and manipulate a particular idea.
- `worldview-lab`: explore how positions fit into broader systems of belief.
- `truth-core`: formalize propositions and machine-checkable reasoning where useful.

## What is implemented

The browser app currently contains two interaction families:

- **Argument anatomy** — toggle premises in a classical syllogism and inspect whether the displayed conclusion remains supported by that argument.
- **18 classic philosophy problems** — choose among recognizable positions on free will, Frankfurt cases, trolley variants, the experience machine, the Euthyphro dilemma, the problem of evil, Gettier-style epistemic luck, brains in vats, the Chinese room, Mary's room, teletransportation, the Ship of Theseus, the sorites paradox, the prisoner's dilemma, the veil of ignorance, and related cases. Each answer exposes both a commitment and a pressure point instead of scoring a "correct" view.

Selected problem/answer state is URL-addressable, and each named exhibit includes a reference link for further reading.

## Design direction

The primary unit is an **exhibit**. An exhibit may use whichever presentation best clarifies its subject: an argument tree, premise toggles, objection/reply branches, alternative viewpoints, a paradox diagram, a thought experiment, or another small interaction.

Repeated structures may become shared primitives, but the project should not invent a universal philosophy schema. The `ChoiceExhibit` structure is intentionally limited to problems that genuinely fit a compact question-and-positions interaction.

## Technical direction

The application is a dependency-light browser application written in TypeScript and built with Bun. Repository-owned validation is deterministic and compatible with the wider coding-agent landscape.

See `ROADMAP.md`, `CONTEXT.md`, and `AGENTS.md` for continuation guidance.
