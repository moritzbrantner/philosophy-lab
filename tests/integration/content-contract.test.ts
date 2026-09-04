import { expect, test } from "bun:test";
import { readFile } from "node:fs/promises";

import { validateArgument } from "../../web/src/argument-state.ts";
import { philosophyFamilies, validateChoiceExhibit } from "../../web/src/choice-exhibit.ts";
import { argumentAnatomy, choiceExhibits } from "../../web/src/exhibits.ts";

test("the page exposes the landmarks required by both interactive exhibit families", async () => {
  const html = await readFile(new URL("../../web/index.html", import.meta.url), "utf8");

  for (const requiredFragment of [
    '<main id="top">',
    'id="argument-claims"',
    'id="support-status"',
    'id="choice-lab"',
    'id="family-filters"',
    'id="choice-catalog"',
    'id="choice-options"',
    'id="choice-result"',
  ]) {
    expect(html).toContain(requiredFragment);
  }
});

test("the classic-problem collection is substantial, unique, sourced, and structurally valid", () => {
  expect(choiceExhibits).toHaveLength(18);

  const ids = choiceExhibits.map((exhibit) => exhibit.id);
  const titles = choiceExhibits.map((exhibit) => exhibit.title);
  expect(new Set(ids).size).toBe(ids.length);
  expect(new Set(titles).size).toBe(titles.length);

  for (const exhibit of choiceExhibits) {
    expect(validateChoiceExhibit(exhibit)).toEqual([]);
  }

  for (const family of philosophyFamilies) {
    expect(choiceExhibits.some((exhibit) => exhibit.family === family)).toBeTrue();
  }

  expect(validateArgument(argumentAnatomy)).toEqual([]);
});
