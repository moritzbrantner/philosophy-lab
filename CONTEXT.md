# Philosophy Lab context

## Mission

Philosophy Lab experiments with ways to make small philosophical ideas inspectable and interactive. The repository is for arguments, paradoxes, thought experiments, distinctions, objections/replies, and side-by-side viewpoints.

## Boundary with related repositories

- `philosophy-lab`: local idea and presentation experiments.
- `worldview-lab`: larger belief systems, compatibility, implications, and worldview-level structure.
- `truth-core`: formal propositions and machine-checkable reasoning.

A successful pattern may move downstream, but Philosophy Lab does not need to share a universal schema with either repository.

## Current architecture

The application is a static TypeScript browser site built directly by Bun. There are no runtime or application package dependencies. Exact-version developer tools are invoked through Bun so the lockfile remains small and the repository stays cheap for agents to enter.

Two deliberately narrow reusable primitives now exist:

- `ArgumentDefinition` contains claims and explicit premise dependencies for a conclusion. It demonstrates premise toggles and the distinction between "supported by this argument" and "true".
- `ChoiceExhibit` supports thought experiments whose useful interaction is a compact question with two to four recognizable positions. Each option explains a commitment and a pressure point. It is not a universal philosophy schema and should not absorb exhibits that need a different representation.

## Current exhibits

`Argument anatomy` uses the classical Socrates syllogism. Visitors can accept or reject each premise and see whether the conclusion remains supported by that argument.

The classic-problems collection contains 18 interactive choice exhibits across free will and responsibility, ethics, knowledge and skepticism, mind and consciousness, identity and vagueness, and justice and decision theory. Named cases include Frankfurt cases, trolley variants, Gettier-style epistemic luck, the Chinese room, Mary's room, the Ship of Theseus, the sorites paradox, the prisoner's dilemma, and the veil of ignorance. Each exhibit links to a reference source.

The currently selected choice exhibit and answer are URL-addressable so non-sensitive interactive state can be shared without introducing an application framework.

## Infrastructure

- Bun is pinned in `package.json` and verified by environment-v1.
- `.coding-tooling.json` defines fast/full/integration validation tiers.
- GitHub validation delegates to a SHA-pinned `coding-tooling` action.
- Renovate inherits the shared `coding-agent-conventions` policy.
- GitHub Pages publishes the static artifact from `main`.
- The devcontainer provisions the same Bun version used by CI.
