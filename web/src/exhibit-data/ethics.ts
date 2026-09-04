import type { ChoiceExhibit } from "../choice-exhibit.ts";

export const ethicsExhibits = [
  {
    id: "trolley-switch",
    title: "Trolley problem: the switch",
    family: "ethics",
    question: "Should you divert a runaway trolley from five people onto a track with one person?",
    setup:
      "A runaway trolley will kill five people unless you pull a switch. Pulling it diverts the trolley to a side track where it will kill one person. You cannot stop the trolley or warn anyone in time.",
    options: [
      {
        id: "pull",
        label: "Pull the switch",
        summary: "Reducing the number of deaths can justify redirecting the threat.",
        commitment:
          "Consequences carry substantial moral weight, and redirecting an existing danger may differ from creating a new one from scratch.",
        challenge:
          "You intentionally intervene in a way that foreseeably causes the death of an innocent person.",
      },
      {
        id: "do-not-pull",
        label: "Do not pull",
        summary: "You should not intentionally redirect lethal harm onto an uninvolved person.",
        commitment:
          "Rights, constraints on harming, or the distinction between doing and allowing can outweigh the better aggregate outcome.",
        challenge:
          "Refusing to act allows five preventable deaths when one action could reduce the loss of life.",
      },
      {
        id: "depends",
        label: "The details matter",
        summary: "Intent, causal structure, responsibility for the threat, and uncertainty may change the judgment.",
        commitment:
          "The case is useful precisely because small variations reveal which moral features your judgment tracks.",
        challenge:
          "A highly case-sensitive answer still needs principled reasons for which details matter and why.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Doing vs. Allowing Harm",
      url: "https://plato.stanford.edu/entries/doing-allowing/",
    },
  },
  {
    id: "trolley-footbridge",
    title: "Trolley problem: the footbridge",
    family: "ethics",
    question: "May you push one person from a footbridge if doing so will stop a trolley and save five?",
    setup:
      "The trolley again threatens five people. This time there is no switch. A large bystander on a bridge could stop the trolley if pushed into its path, but the bystander would die.",
    options: [
      {
        id: "push",
        label: "Push the bystander",
        summary: "If saving the greater number justified the switch, consistency may seem to favor pushing too.",
        commitment:
          "Aggregate consequences dominate the moral comparison when the expected outcomes are otherwise fixed.",
        challenge:
          "The person is being used as the means by which the five are saved, which many theories treat differently from redirecting a threat.",
      },
      {
        id: "do-not-push",
        label: "Do not push",
        summary: "Using a person as a lethal means violates a constraint that the switch case may not violate.",
        commitment:
          "Intention, personal force, rights, or the means/side-effect distinction can matter independently of body count.",
        challenge:
          "The resulting outcome is five deaths instead of one, so the constraint needs justification strong enough to bear that cost.",
      },
      {
        id: "same-as-switch",
        label: "Treat it like the switch",
        summary: "The apparent psychological difference may not mark a morally relevant distinction.",
        commitment:
          "A sound principle should not change merely because one case feels more vivid, direct, or emotionally difficult.",
        challenge:
          "You must explain why intending a person's impact as the rescue mechanism does not change the moral structure.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Doing vs. Allowing Harm",
      url: "https://plato.stanford.edu/entries/doing-allowing/",
    },
  },
  {
    id: "transplant-surgeon",
    title: "The transplant surgeon",
    family: "ethics",
    question: "May a surgeon kill one healthy person to save five patients with organ transplants?",
    setup:
      "Five patients will die without different organ transplants. A healthy compatible person arrives for a routine visit. Killing that person could provide the organs needed to save all five.",
    options: [
      {
        id: "never-kill",
        label: "No — do not kill",
        summary: "A person may not be intentionally killed and used merely as a resource for others.",
        commitment:
          "Rights, justice, professional duties, or constraints on intentional harm limit what aggregate welfare can justify.",
        challenge:
          "The decision knowingly permits five deaths that could physically be prevented.",
      },
      {
        id: "save-five",
        label: "Yes — save the five",
        summary: "If all else truly is equal, five lives count more than one.",
        commitment:
          "Consequences can override ordinary constraints when the welfare difference is sufficiently large and certain.",
        challenge:
          "Generalizing the rule could undermine trust, security, and the separateness of persons even before indirect consequences are counted.",
      },
      {
        id: "distinguish-case",
        label: "Reject the forced comparison",
        summary: "The surgeon's role, consent, institutional rules, and using a person as a means make this unlike a simple numbers problem.",
        commitment:
          "Moral evaluation can depend on relationships and action structure, not just final totals.",
        challenge:
          "Those features still need a theory explaining why they have moral force rather than merely reflecting intuition.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: Doing vs. Allowing Harm",
      url: "https://plato.stanford.edu/entries/doing-allowing/",
    },
  },
  {
    id: "experience-machine",
    title: "The experience machine",
    family: "ethics",
    question: "Would you permanently plug into a machine that gives you the happiest possible life-experience?",
    setup:
      "The machine can generate experiences indistinguishable from reality. Once connected, you would believe you are loving, creating, succeeding, and living a rich life, even though your body remains in the machine.",
    options: [
      {
        id: "plug-in",
        label: "Plug in",
        summary: "If lived experience is what ultimately matters for well-being, the machine can supply it.",
        commitment:
          "Pleasure, satisfaction, or the quality of conscious experience may be sufficient for a good life.",
        challenge:
          "Many people care about actually doing things, being a certain kind of person, and relating to a real world rather than merely seeming to.",
      },
      {
        id: "stay-out",
        label: "Stay in reality",
        summary: "Authenticity, achievement, relationships, or contact with reality matter in addition to experience.",
        commitment:
          "Well-being contains objective or reality-involving goods that cannot be replaced by an internally identical simulation.",
        challenge:
          "It is difficult to state which non-experiential goods matter without simply redescribing the intuition that the machine feels wrong.",
      },
      {
        id: "depends-on-terms",
        label: "It depends on the terms",
        summary: "Reversibility, existing relationships, risk, and what counts as personal continuity may alter the choice.",
        commitment:
          "The thought experiment tests several values at once, so variants should separate welfare from fear of loss or status-quo bias.",
        challenge:
          "Adding realistic details can make the case easier to choose but less useful as a clean test of hedonism.",
      },
    ],
    reference: {
      label: "Internet Encyclopedia of Philosophy: The Experience Machine",
      url: "https://iep.utm.edu/page/experience-machine/",
    },
  },
  {
    id: "euthyphro-dilemma",
    title: "The Euthyphro dilemma",
    family: "ethics",
    question: "Is the good commanded because it is good, or good because it is commanded?",
    setup:
      "Consider a divine-command account of morality. Does a perfectly authoritative divine command make an act good, or does the command track a standard of goodness that is already true?",
    options: [
      {
        id: "command-makes-good",
        label: "Command makes it good",
        summary: "Moral obligation ultimately depends on divine command.",
        commitment:
          "Moral authority is grounded in God's will rather than an independent standard standing over God.",
        challenge:
          "The view must explain why morality is not arbitrary and why a hypothetical command of cruelty would not make cruelty good.",
      },
      {
        id: "good-before-command",
        label: "The good explains the command",
        summary: "A perfect divine will commands what is good because it is good.",
        commitment:
          "Moral truths are not created merely by being commanded, even if a perfect God knows and wills them without error.",
        challenge:
          "The account must explain the relation between God and a standard of goodness that is not simply produced by command.",
      },
      {
        id: "false-dilemma",
        label: "Reject the dilemma",
        summary: "Goodness may be grounded in divine nature rather than in arbitrary commands or an external standard.",
        commitment:
          "A necessarily good nature can be treated as the source of moral normativity while commands express that nature.",
        challenge:
          "Critics ask whether appealing to a good nature merely moves the original question to what makes that nature good.",
      },
    ],
    reference: {
      label: "Internet Encyclopedia of Philosophy: Divine Command Theory",
      url: "https://iep.utm.edu/divine-command-theory/",
    },
  },
  {
    id: "problem-of-evil",
    title: "The problem of evil",
    family: "ethics",
    question: "How should apparently pointless suffering affect belief in an all-powerful, all-knowing, perfectly good God?",
    setup:
      "The world contains moral and natural suffering. The philosophical problem asks whether that suffering is logically incompatible with such a God, strong evidence against such a God, or compatible with reasons humans may only partly understand.",
    options: [
      {
        id: "evidence-against",
        label: "It is strong evidence against",
        summary: "The amount and kinds of apparently gratuitous suffering lower the probability of perfect providence.",
        commitment:
          "Even if evil is not a strict contradiction, we should expect a perfectly good and powerful creator to prevent much more suffering than we observe.",
        challenge:
          "The argument must justify claims about what reasons or goods an unlimited mind could or could not have for permitting suffering.",
      },
      {
        id: "defense-theodicy",
        label: "There can be morally sufficient reasons",
        summary: "Freedom, stable natural order, soul-making, or other goods may require the possibility or permission of suffering.",
        commitment:
          "Some valuable worlds may be impossible to realize without serious risks, costs, or creaturely freedom.",
        challenge:
          "A response must address both moral evil and apparently excessive natural suffering rather than explain only a narrow subset.",
      },
      {
        id: "epistemic-humility",
        label: "Suspend the inference",
        summary: "Human limits may make us poor judges of whether apparently pointless suffering truly lacks sufficient reason.",
        commitment:
          "An inference from 'I can see no adequate reason' to 'there is no adequate reason' may be unreliable in this domain.",
        challenge:
          "Too much skepticism can threaten ordinary moral reasoning and make evidence for or against providence difficult to assess at all.",
      },
    ],
    reference: {
      label: "Stanford Encyclopedia of Philosophy: The Problem of Evil",
      url: "https://plato.stanford.edu/entries/evil/",
    },
  },
] satisfies readonly ChoiceExhibit[];
