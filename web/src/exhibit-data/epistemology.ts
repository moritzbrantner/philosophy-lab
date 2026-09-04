import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const epistemologyExhibits = [
  {
    id: "gettier-case",
    title: "A Gettier-style case",
    family: "epistemology",
    question: "Can a belief be justified and true but still fail to be knowledge?",
    setup:
      "You glance at a normally reliable wall clock and form the belief that it is 8:20. Unknown to you, the clock stopped exactly twelve hours ago. By coincidence, it really is 8:20 when you look.",
    options: [
      {
        id: "knowledge",
        label: "Yes — you know",
        summary: "The belief is true and formed with ordinary justification.",
        commitment:
          "A traditional justified-true-belief style analysis can count the case as knowledge despite the unusual background luck.",
        challenge:
          "The truth seems accidentally disconnected from why your evidence supports the belief, which makes calling it knowledge uncomfortable.",
      },
      {
        id: "not-knowledge",
        label: "No — luck defeats knowledge",
        summary: "Justified true belief is not enough when the belief is true only by epistemic luck.",
        commitment:
          "Knowledge requires an additional anti-luck, reliability, safety, or causal condition connecting belief to truth.",
        challenge:
          "Any added condition must exclude Gettier cases without also excluding too much ordinary fallible knowledge.",
      },
      {
        id: "depends-on-justification",
        label: "Reconsider the justification",
        summary: "Perhaps the unusual environment undermines justification rather than revealing a fourth condition on knowledge.",
        commitment:
          "The lesson may concern how justification depends on reliability or defeaters, not merely the definition of knowledge.",
        challenge:
          "Classic Gettier cases are designed so that the subject appears well justified, so this strategy must explain that appearance.",
      },
    ],
    reference: {
      label: "Internet Encyclopedia of Philosophy: Gettier Problems",
      url: "https://iep.utm.edu/gettier/",
    },
  },
  {
    id: "brain-in-vat",
    title: "Brain in a vat",
    family: "epistemology",
    question: "If your experiences could be perfectly simulated, what can you know about the external world?",
    setup:
      "Imagine that your brain is sustained in a vat and fed signals that generate experiences exactly like your present life. From the inside, everything appears unchanged.",
    options: [
      {
        id: "skeptical",
        label: "Radical skepticism follows",
        summary: "If experience cannot distinguish the scenarios, ordinary external-world beliefs lack the certainty we thought they had.",
        commitment:
          "Knowledge requires ruling out skeptical alternatives, and sensory evidence alone cannot rule this one out.",
        challenge:
          "The standard may be too demanding: ordinary knowledge rarely requires eliminating every logically possible error scenario.",
      },
      {
        id: "ordinary-knowledge",
        label: "Ordinary knowledge survives",
        summary: "Knowledge can be fallible and need not exclude every far-fetched skeptical possibility.",
        commitment:
          "Context, reliability, or entitlement can justify ordinary external-world claims without absolute certainty.",
        challenge:
          "The view must explain why the skeptical possibility is irrelevant rather than merely inconvenient.",
      },
      {
        id: "semantic-reply",
        label: "Question the hypothesis itself",
        summary: "Externalist theories of meaning may limit whether a lifelong envatted speaker can truly mean the same thing by 'vat' or 'brain'.",
        commitment:
          "Thought and reference partly depend on causal relations with the environment, not solely on inner experience.",
        challenge:
          "Semantic arguments may refute only particular formulations of the skeptical story rather than establish broad external-world knowledge.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Brains in a Vat (archive)",
      url: "https://plato.stanford.edu/archives/fall2011/entries/brain-vat/",
    },
  },
] satisfies readonly ChoiceExhibit[];
