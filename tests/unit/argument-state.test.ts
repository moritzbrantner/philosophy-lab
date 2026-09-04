import { describe, expect, test } from "bun:test";

import {
  conclusionSupport,
  initialAcceptance,
  togglePremise,
  validateArgument,
} from "../../web/src/argument-state.ts";
import { argumentAnatomy } from "../../web/src/exhibits.ts";

describe("argument state", () => {
  test("starts with every premise accepted", () => {
    expect(initialAcceptance(argumentAnatomy)).toEqual({ p1: true, p2: true });
  });

  test("reports the conclusion as supported when all dependencies are accepted", () => {
    const result = conclusionSupport(argumentAnatomy, initialAcceptance(argumentAnatomy), "c1");

    expect(result).toEqual({ kind: "supported", missingPremiseIds: [] });
  });

  test("identifies a rejected premise instead of treating the conclusion as globally false", () => {
    const initial = initialAcceptance(argumentAnatomy);
    const changed = togglePremise(argumentAnatomy, initial, "p2");
    const result = conclusionSupport(argumentAnatomy, changed, "c1");

    expect(result).toEqual({ kind: "unsupported", missingPremiseIds: ["p2"] });
  });

  test("refuses to toggle a conclusion as though it were a premise", () => {
    expect(() => togglePremise(argumentAnatomy, initialAcceptance(argumentAnatomy), "c1")).toThrow(
      "Claim is not a premise: c1",
    );
  });

  test("the initial exhibit satisfies the argument content contract", () => {
    expect(validateArgument(argumentAnatomy)).toEqual([]);
  });
});
