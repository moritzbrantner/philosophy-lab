export type PhilosophyFamily =
  | "free-will"
  | "ethics"
  | "epistemology"
  | "mind"
  | "identity"
  | "justice";

export type ChoiceOption = {
  readonly id: string;
  readonly label: string;
  readonly summary: string;
  readonly commitment: string;
  readonly challenge: string;
};

export type ChoiceExhibit = {
  readonly id: string;
  readonly title: string;
  readonly family: PhilosophyFamily;
  readonly question: string;
  readonly setup: string;
  readonly options: readonly ChoiceOption[];
  readonly reference: {
    readonly label: string;
    readonly url: string;
  };
};

export const philosophyFamilies: readonly PhilosophyFamily[] = [
  "free-will",
  "ethics",
  "epistemology",
  "mind",
  "identity",
  "justice",
];

export const familyLabels: Readonly<Record<PhilosophyFamily, string>> = {
  "free-will": "Free will & responsibility",
  ethics: "Ethics",
  epistemology: "Knowledge & skepticism",
  mind: "Mind & consciousness",
  identity: "Identity & vagueness",
  justice: "Justice & decision theory",
};

export function resolveChoice(
  exhibit: ChoiceExhibit,
  optionId: string | undefined,
): ChoiceOption | undefined {
  if (!optionId) return undefined;
  return exhibit.options.find((option) => option.id === optionId);
}

export function validateChoiceExhibit(exhibit: ChoiceExhibit): readonly string[] {
  const errors: string[] = [];
  const optionIds = new Set<string>();

  if (exhibit.options.length < 2 || exhibit.options.length > 4) {
    errors.push(`${exhibit.id} must offer between 2 and 4 options`);
  }

  for (const option of exhibit.options) {
    if (optionIds.has(option.id)) errors.push(`${exhibit.id} has duplicate option id ${option.id}`);
    optionIds.add(option.id);
  }

  if (!exhibit.reference.url.startsWith("https://")) {
    errors.push(`${exhibit.id} reference must use https`);
  }

  return errors;
}
