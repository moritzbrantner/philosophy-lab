import type { ArgumentDefinition } from "./argument-state.ts";
import { epistemologyExhibits } from "./exhibit-data/epistemology.ts";
import { ethicsExhibits } from "./exhibit-data/ethics.ts";
import { freeWillExhibits } from "./exhibit-data/free-will.ts";
import { identityExhibits } from "./exhibit-data/identity.ts";
import { justiceExhibits } from "./exhibit-data/justice.ts";
import { mindExhibits } from "./exhibit-data/mind.ts";

export const argumentAnatomy: ArgumentDefinition = {
  id: "argument-anatomy",
  title: "Argument anatomy",
  question: "When does the conclusion remain supported by this syllogism?",
  claims: [
    {
      id: "p1",
      label: "Premise 1",
      text: "All humans are mortal.",
      role: "premise",
    },
    {
      id: "p2",
      label: "Premise 2",
      text: "Socrates is human.",
      role: "premise",
    },
    {
      id: "c1",
      label: "Conclusion",
      text: "Socrates is mortal.",
      role: "conclusion",
      dependsOn: ["p1", "p2"],
    },
  ],
};

export const choiceExhibits = [
  ...freeWillExhibits,
  ...ethicsExhibits,
  ...epistemologyExhibits,
  ...mindExhibits,
  ...identityExhibits,
  ...justiceExhibits,
] as const;
