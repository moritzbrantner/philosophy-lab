import type { ArgumentDefinition } from "./argument-state.ts";

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

export type PlannedExhibit = {
  readonly title: string;
  readonly family: "paradox" | "epistemology" | "ethics";
  readonly description: string;
};

export const plannedExhibits: readonly PlannedExhibit[] = [
  {
    title: "Ship of Theseus",
    family: "paradox",
    description: "Compare competing criteria of identity as a thing changes piece by piece.",
  },
  {
    title: "A Gettier case",
    family: "epistemology",
    description: "Separate truth, belief, justification, and the intuition that something is still missing.",
  },
  {
    title: "The trolley problem",
    family: "ethics",
    description: "Vary a small thought experiment and compare what different moral considerations track.",
  },
];
