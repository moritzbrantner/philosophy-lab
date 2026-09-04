import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const mindExhibits = [
  {
    id: "chinese-room",
    title: "The Chinese room",
    family: "mind",
    question: "Can perfect symbol manipulation amount to genuine understanding?",
    setup:
      "A person who knows no Chinese follows an enormous rulebook for transforming Chinese symbols. Their outputs are so good that people outside cannot distinguish the room from a fluent speaker.",
    options: [
      {
        id: "no-understanding",
        label: "No — syntax is not understanding",
        summary: "Correct formal symbol manipulation can occur without grasping meaning.",
        commitment:
          "Running the right program is not by itself sufficient for semantic understanding or mentality.",
        challenge:
          "The argument focuses on the person inside; a critic can say the whole system understands even if one component does not.",
      },
      {
        id: "system-understands",
        label: "Yes — the system can understand",
        summary: "Understanding belongs to the organized system, not necessarily to the rule-following individual component.",
        commitment:
          "Mental properties can emerge at a level above the parts that implement the computation.",
        challenge:
          "It must explain what adds semantics if every component description still appears purely syntactic.",
      },
      {
        id: "embodiment-matters",
        label: "Computation may need embodiment",
        summary: "Symbol processing could support understanding when embedded in perception, action, learning, and a world.",
        commitment:
          "The room is too isolated to model the causal and embodied grounding that real intelligence may require.",
        challenge:
          "This concedes that the bare program is insufficient and leaves open exactly which extra relations produce understanding.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: The Chinese Room Argument",
      url: "https://plato.stanford.edu/entries/chinese-room/",
    },
  },
  {
    id: "marys-room",
    title: "Mary's room",
    family: "mind",
    question: "Does Mary learn a new fact when she sees red for the first time?",
    setup:
      "Mary is a brilliant scientist who has complete physical information about color vision but has lived entirely in a black-and-white environment. She is released and experiences red for the first time.",
    options: [
      {
        id: "new-fact",
        label: "Yes — she learns a new fact",
        summary: "Knowing every physical fact did not include knowing what red experience is like.",
        commitment:
          "The knowledge argument pressures physicalism by suggesting phenomenal facts exceed complete physical information.",
        challenge:
          "The conclusion depends on treating Mary's new knowledge as new propositional fact-knowledge rather than a new ability or acquaintance.",
      },
      {
        id: "new-ability",
        label: "No new fact — a new ability",
        summary: "Mary gains abilities such as recognizing, imagining, or remembering red without learning a nonphysical fact.",
        commitment:
          "Complete physical knowledge can remain complete even though first-person experience supplies new practical or recognitional capacities.",
        challenge:
          "Many people think Mary's discovery feels more informative than acquiring a mere skill.",
      },
      {
        id: "new-mode",
        label: "Same fact, new mode of access",
        summary: "Mary encounters old physical facts under a new phenomenal concept or presentation.",
        commitment:
          "A difference in how a fact is represented need not imply a difference in which facts exist.",
        challenge:
          "The account must explain why this new mode of presentation is unavailable despite Mary's supposedly complete prior information.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Qualia — The Knowledge Argument",
      url: "https://plato.stanford.edu/entries/qualia-knowledge/",
    },
  },
] satisfies readonly ChoiceExhibit[];
