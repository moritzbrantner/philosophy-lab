import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const freeWillExhibits = [
  {
    id: "free-will-map",
    title: "Free will: three starting positions",
    family: "free-will",
    question: "Can human freedom survive causal determinism?",
    setup:
      "Suppose every event follows from the prior state of the world together with the laws of nature. Which starting position best captures what that would mean for freedom?",
    options: [
      {
        id: "libertarian",
        label: "Libertarian free will",
        summary: "Genuine freedom exists, and genuine freedom is incompatible with determinism.",
        commitment:
          "Some human actions must not be completely determined by prior events and laws; the agent must exercise a stronger kind of authorship or alternative possibility.",
        challenge:
          "Indeterminism by itself can look like luck. The view still needs an account of how undetermined action is controlled by the agent.",
      },
      {
        id: "compatibilist",
        label: "Compatibilism",
        summary: "Freedom and determinism can both be true.",
        commitment:
          "What matters is not an uncaused choice but the right kind of control: for example, acting from one's own reasons, values, or reasons-responsive capacities without coercion.",
        challenge:
          "Critics ask whether a fully determined history leaves the agent with enough genuine alternatives or sourcehood for moral responsibility.",
      },
      {
        id: "hard-determinist",
        label: "Hard determinism",
        summary:
          "Determinism is true and rules out free will in the responsibility-grounding sense.",
        commitment:
          "Traditional desert-based responsibility should be revised or rejected if nobody ultimately could have acted otherwise or authored themselves independently of prior causes.",
        challenge:
          "The view must explain why deliberation, praise, blame, and social responsibility practices can still matter even when ultimate freedom is denied.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Compatibilism",
      url: "https://plato.stanford.edu/entries/compatibilism/",
    },
  },
  {
    id: "frankfurt-case",
    title: "Frankfurt case",
    family: "free-will",
    question: "Can you be responsible even when you could not have done otherwise?",
    setup:
      "Jones decides on his own to perform an action. Black secretly wants the same action and would intervene in Jones's deliberation if Jones were about to choose otherwise. Black never intervenes because Jones chooses exactly as Black hoped.",
    options: [
      {
        id: "responsible",
        label: "Jones is responsible",
        summary: "Responsibility can survive the absence of genuine alternatives.",
        commitment:
          "The actual source of the action matters more than an unused alternative. Because Jones acts for his own reasons and Black stays idle, Jones may still own the action.",
        challenge:
          "The case must really remove the ability to do otherwise without quietly making Jones's actual decision determined in a way that already settles the dispute.",
      },
      {
        id: "not-responsible",
        label: "Jones is not responsible",
        summary:
          "Responsibility requires a robust alternative or stronger control than the case allows.",
        commitment:
          "A person is not fully responsible when the surrounding setup guarantees the same outcome no matter what the person tries to do.",
        challenge:
          "This must explain why Black's entirely unused intervention seems relevant to an action Jones actually performs on his own.",
      },
      {
        id: "case-underdetermined",
        label: "The case is underdetermined",
        summary:
          "Whether Jones is responsible depends on how Black can detect and control the decision.",
        commitment:
          "Details about the intervention mechanism may determine whether Jones retains flickers of freedom, sourcehood, or reasons-responsive control.",
        challenge:
          "This weakens the force of the clean intuition the example is designed to isolate.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Moral Responsibility",
      url: "https://plato.stanford.edu/entries/moral-responsibility/",
    },
  },
  {
    id: "consequence-argument",
    title: "The consequence argument",
    family: "free-will",
    question:
      "If the past and laws are beyond your control, are their determined consequences beyond your control too?",
    setup:
      "Assume determinism. You did not choose the remote past or the laws of nature. Your present action follows from those facts. Does control transfer through that entailment?",
    options: [
      {
        id: "accept",
        label: "Yes — this threatens freedom",
        summary:
          "If nobody controls the past or laws, nobody controls their inevitable consequences in the needed sense.",
        commitment:
          "The argument supports incompatibilism: determinism would prevent the kind of alternative possibility or control required for free will.",
        challenge:
          "Compatibilists argue that freedom concerns how the action issues from the agent now, not control over the entire causal history of the universe.",
      },
      {
        id: "reject-transfer",
        label: "No — reject the transfer",
        summary: "Lack of control over inputs need not imply lack of control over one's action.",
        commitment:
          "An agent can exercise local, reasons-responsive control even if the existence and character of that agent have prior causes.",
        challenge:
          "The view must explain why the fixed past and laws do not make every alternative literally impossible.",
      },
      {
        id: "different-control",
        label: "Distinguish kinds of control",
        summary: "Determinism may remove one kind of control while leaving another intact.",
        commitment:
          "Ability-to-do-otherwise and source/reasons control should be evaluated separately instead of treated as one property.",
        challenge:
          "The remaining kind of control must be strong enough to support the responsibility claims we care about.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Compatibilism",
      url: "https://plato.stanford.edu/entries/compatibilism/",
    },
  },
] satisfies readonly ChoiceExhibit[];
