import { expect, test } from "bun:test";

import { resolveChoice, validateChoiceExhibit } from "../../web/src/choice-exhibit.ts";
import { choiceExhibits } from "../../web/src/exhibits.ts";

test("resolves a selected option without inventing fallback state", () => {
  const exhibit = choiceExhibits[0];
  if (!exhibit) throw new Error("Expected at least one choice exhibit");

  expect(resolveChoice(exhibit, exhibit.options[0]?.id)?.id).toBe(exhibit.options[0]?.id);
  expect(resolveChoice(exhibit, "not-an-option")).toBeUndefined();
  expect(resolveChoice(exhibit, undefined)).toBeUndefined();
});

test("every choice exhibit satisfies the compact choice-exhibit contract", () => {
  for (const exhibit of choiceExhibits) {
    expect(validateChoiceExhibit(exhibit)).toEqual([]);
  }
});
