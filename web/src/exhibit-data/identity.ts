import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const identityExhibits = [
  {
    id: "teletransporter",
    title: "The teletransporter",
    family: "identity",
    question: "If a machine destroys your body and creates an exact psychological duplicate on Mars, did you survive?",
    setup:
      "The machine scans you, destroys the original body, and constructs a molecule-for-molecule duplicate on Mars with your memories, character, plans, and sense of being you.",
    options: [
      {
        id: "same-person",
        label: "Yes — the same person survives",
        summary: "Psychological continuity can be what matters for personal persistence.",
        commitment:
          "Continuity of memory, character, intention, and consciousness-pattern can matter more than continuity of the same matter.",
        challenge:
          "If the machine makes two equally continuous duplicates, numerical identity cannot straightforwardly hold with both.",
      },
      {
        id: "new-person",
        label: "No — the original dies",
        summary: "A perfect copy is still a copy; survival requires bodily or organismic continuity.",
        commitment:
          "Numerical identity depends on persistence of the same living individual or another non-duplicable continuity relation.",
        challenge:
          "The view must explain why ordinary gradual physical replacement and major bodily change preserve identity while perfect psychological continuity does not.",
      },
      {
        id: "identity-not-what-matters",
        label: "Identity may be the wrong question",
        summary: "Psychological continuity could preserve what matters in survival even when strict identity has no clean answer.",
        commitment:
          "Practical concern for future selves may track continuity and connectedness rather than a further all-or-nothing identity fact.",
        challenge:
          "Law, responsibility, promises, and first-person anticipation often seem to require determinate answers about who is who.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Personal Identity",
      url: "https://plato.stanford.edu/entries/identity-personal/",
    },
  },
  {
    id: "ship-of-theseus",
    title: "Ship of Theseus",
    family: "identity",
    question: "Which later ship, if either, is the original Ship of Theseus?",
    setup:
      "Every plank of a ship is gradually replaced while it remains in service. Someone saves the old planks and later reconstructs a ship from them. One vessel has continuous history; the other has the original material.",
    options: [
      {
        id: "continuous-ship",
        label: "The continuously repaired ship",
        summary: "Persistence follows continuous function, structure, and history through gradual change.",
        commitment:
          "Objects can survive replacement of all their material parts when the replacement happens through the right continuous process.",
        challenge:
          "The reconstructed vessel seems to have an equally strong claim through possession of the original matter.",
      },
      {
        id: "reassembled-ship",
        label: "The reassembled original planks",
        summary: "Material continuity grounds identity more strongly than continuous operation with replacement parts.",
        commitment:
          "The original matter can survive disassembly and later reassembly into the same object.",
        challenge:
          "This makes ordinary repair surprisingly identity-destroying once enough components have been replaced.",
      },
      {
        id: "criteria-break-down",
        label: "Neither answer is uniquely forced",
        summary: "Our ordinary criteria of identity pull in different directions in this engineered case.",
        commitment:
          "Object identity may be context-sensitive, interest-relative, or simply indeterminate in some fission-like scenarios.",
        challenge:
          "Identity is normally treated as transitive and objective, so indeterminacy or relativity needs careful formulation.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Identity Over Time",
      url: "https://plato.stanford.edu/entries/identity-time/",
    },
  },
  {
    id: "sorites-heap",
    title: "The sorites paradox",
    family: "identity",
    question: "Exactly when does adding grains turn a non-heap into a heap?",
    setup:
      "One grain is not a heap. It seems that adding a single grain to something that is not a heap cannot suddenly make it a heap. Repeating that plausible step appears to imply that even a million grains are not a heap.",
    options: [
      {
        id: "sharp-boundary",
        label: "There is a sharp cutoff",
        summary: "One particular transition really does change the truth value even if humans cannot know where it is.",
        commitment:
          "Vague language can have precise but epistemically inaccessible boundaries.",
        challenge:
          "It is difficult to explain what could make, say, 10,432 grains not a heap while 10,433 suddenly is one.",
      },
      {
        id: "indeterminate",
        label: "Some cases are indeterminate",
        summary: "Borderline cases need not be simply true or false in the ordinary way.",
        commitment:
          "Semantic theories can preserve clear endpoints while allowing gaps, supervaluational behavior, or other non-classical treatment in between.",
        challenge:
          "The theory must explain how ordinary classical reasoning should behave when premises contain vague terms.",
      },
      {
        id: "degrees-context",
        label: "Use degrees or context",
        summary: "Heaphood can vary gradually, or the relevant threshold can shift with conversational context.",
        commitment:
          "Vagueness reflects graded or context-sensitive application rather than one hidden universal boundary.",
        challenge:
          "We still often make apparently binary claims, so the account must explain when and why those claims are legitimate.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Sorites Paradox",
      url: "https://plato.stanford.edu/entries/sorites-paradox/",
    },
  },
] satisfies readonly ChoiceExhibit[];
