import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const justiceExhibits = [
  {
    id: "prisoners-dilemma",
    title: "Prisoner's dilemma",
    family: "justice",
    question:
      "Should you cooperate when individual incentives push both players toward a worse joint outcome?",
    setup:
      "Two players separately choose cooperate or defect. Each gets a better personal outcome by defecting no matter what the other does, yet mutual defection leaves both worse off than mutual cooperation.",
    options: [
      {
        id: "defect",
        label: "Defect",
        summary:
          "In a one-shot game with the standard payoffs, defection dominates cooperation for each player individually.",
        commitment:
          "Instrumental rationality can recommend the individually safer action even when identical reasoning by both players produces a worse collective result.",
        challenge:
          "The outcome exposes a gap between individually dominant choice and collectively efficient choice.",
      },
      {
        id: "cooperate",
        label: "Cooperate",
        summary:
          "Mutual cooperation reaches the better joint outcome and may be rational under broader norms or commitments.",
        commitment:
          "Trust, morality, team reasoning, or concern for the other player can legitimately alter what counts as the relevant objective.",
        challenge:
          "Without enforcement or repeated interaction, a cooperator is vulnerable to exploitation by a defector.",
      },
      {
        id: "depends-on-game",
        label: "Change the game, not the chooser",
        summary:
          "Institutions, repetition, reputation, and communication can transform the incentives.",
        commitment:
          "Many social dilemmas are best addressed by redesigning rules so individual and collective interests align.",
        challenge:
          "That practical lesson does not by itself answer what a perfectly self-interested agent should do in the original one-shot game.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Prisoner's Dilemma",
      url: "https://plato.stanford.edu/entries/prisoner-dilemma/",
    },
  },
  {
    id: "veil-of-ignorance",
    title: "The veil of ignorance",
    family: "justice",
    question:
      "What principles of society would you choose without knowing which position in that society will be yours?",
    setup:
      "Imagine choosing basic social principles while ignorant of your wealth, class, talents, sex, ethnicity, religion, health, and particular conception of the good. You do know general facts about society and human needs.",
    options: [
      {
        id: "protect-worst-off",
        label: "Prioritize fair terms and the least advantaged",
        summary:
          "Ignorance of your position encourages robust basic liberties and safeguards against ending up badly placed.",
        commitment:
          "Fair principles should not be tailored to anyone's accidental social advantages, and inequalities require special justification.",
        challenge:
          "Critics dispute whether rational choosers behind the veil would be as cautious or equality-focused as this strategy assumes.",
      },
      {
        id: "maximize-total",
        label: "Maximize expected total welfare",
        summary:
          "Without knowing your place, choose institutions with the highest expected aggregate well-being.",
        commitment:
          "Impartiality can be modeled through equal consideration of each possible social position rather than priority to the worst-off.",
        challenge:
          "Aggregate gains can permit very poor outcomes for some people if enough benefits accrue elsewhere.",
      },
      {
        id: "reject-device",
        label: "Reject the device",
        summary:
          "Justice may require information about history, community, desert, relationships, or concrete goods that the veil deliberately removes.",
        commitment:
          "Impartiality is not the only relevant moral perspective, and abstraction can erase ethically important differences.",
        challenge:
          "Reintroducing personal information also reintroduces opportunities to design principles around self-interest and inherited advantage.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Original Position",
      url: "https://plato.stanford.edu/entries/original-position/",
    },
  },
] satisfies readonly ChoiceExhibit[];
