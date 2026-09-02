# Philosophy Lab context

## Mission

Philosophy Lab experiments with ways to make small philosophical ideas inspectable and interactive. The repository is for arguments, paradoxes, thought experiments, distinctions, objections/replies, and side-by-side viewpoints.

## Boundary with related repositories

- `philosophy-lab`: local idea and presentation experiments.
- `worldview-lab`: larger belief systems, compatibility, implications, and worldview-level structure.
- `truth-core`: formal propositions and machine-checkable reasoning.

A successful pattern may move downstream, but Philosophy Lab does not need to share a universal schema with either repository.

## Current architecture

The initial application is a static TypeScript browser site built directly by Bun. There are no runtime or application package dependencies. Exact-version developer tools are invoked through Bun so the lockfile remains small and the repository stays cheap for agents to enter.

The first reusable domain primitive is deliberately tiny: an `ArgumentDefinition` containing claims and explicit premise dependencies for a conclusion. It is sufficient to demonstrate premise toggles and the distinction between "supported by this argument" and "true".

## Current exhibit

`Argument anatomy` uses the classical Socrates syllogism. Visitors can accept or reject each premise and see whether the conclusion remains supported by that argument. This is a presentation experiment, not a general-purpose theorem prover.

## Infrastructure

- Bun is pinned in `package.json` and verified by environment-v1.
- `.coding-tooling.json` defines fast/full/integration validation tiers.
- GitHub validation delegates to a SHA-pinned `coding-tooling` action.
- Renovate inherits the shared `coding-agent-conventions` policy.
- GitHub Pages publishes the static artifact from `main`.
- The devcontainer provisions the same Bun version used by CI.
