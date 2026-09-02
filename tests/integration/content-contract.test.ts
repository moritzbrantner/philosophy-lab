import { expect, test } from "bun:test";
import { readFile } from "node:fs/promises";

import { validateArgument } from "../../web/src/argument-state.ts";
import { argumentAnatomy, plannedExhibits } from "../../web/src/exhibits.ts";

test("the page exposes the landmarks required by the interactive exhibit", async () => {
  const html = await readFile(new URL("../../web/index.html", import.meta.url), "utf8");

  for (const requiredFragment of [
    '<main id="top">',
    'id="argument-claims"',
    'id="support-status"',
    'id="exhibit-catalog"',
  ]) {
    expect(html).toContain(requiredFragment);
  }
});

test("all catalog titles are unique and the live argument is structurally valid", () => {
  const titles = plannedExhibits.map((exhibit) => exhibit.title);

  expect(new Set(titles).size).toBe(titles.length);
  expect(validateArgument(argumentAnatomy)).toEqual([]);
});
