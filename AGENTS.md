# AGENTS.md

## Purpose

`philosophy-lab` is an exhibit-driven laboratory for small philosophical arguments, paradoxes, thought experiments, distinctions, objections, replies, and viewpoints.

It is intentionally narrower than `worldview-lab` and less formal than `truth-core`.

## Product boundaries

- Prefer one understandable philosophical object per exhibit.
- Do not invent a universal philosophy ontology before repeated exhibits demand a shared abstraction.
- Treat an argument's internal support relation separately from the truth of its premises or conclusion.
- Present competing viewpoints and objections fairly; the UI may explain an argument without endorsing it.
- Keep exhibit-specific presentation structures local until at least several exhibits benefit from the same primitive.
- Link or cite sources when an exhibit makes historical, textual, or attribution claims.
- Do not move comprehensive worldview modeling into this repository.
- Do not move formal proof obligations into this repository when `truth-core` is the natural owner.

## Engineering boundaries

- Browser code is TypeScript.
- Keep the initial application dependency-light; add frameworks only when they solve a demonstrated problem.
- State transitions and content contracts should be deterministic and testable without a browser where practical.
- Accessibility is part of the exhibit contract: semantic structure, keyboard operation, visible focus, and textual state must survive presentation experiments.
- Avoid hidden global state. URL/shareable state can be introduced when an exhibit needs it.
- Prefer small modules with explicit data flow over framework-shaped abstractions.

## Commands

```bash
bun web/index.html --console
bun run format:check
bun run lint
bun run typecheck
bun run test:unit
bun run test:integration
bun run build
bun run verify
```

## Validation workflow

The repository owns its validation capabilities in `.coding-tooling.json`. GitHub Actions prepares the pinned repository environment, verifies the environment fingerprint, checks conformance and deterministic findings, and then runs the `fast` tier through the SHA-pinned `coding-tooling` action.

Do focused checks while iterating, then run `bun run verify` before considering a change complete.

## Durable context

Update `CONTEXT.md` when architecture or repository boundaries change. Update `ROADMAP.md` when the near-term implementation horizon changes. Keep speculative future ideas out of agent instructions until they affect the next implementation batch.
