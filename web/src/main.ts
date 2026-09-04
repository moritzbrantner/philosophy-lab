import {
  conclusionSupport,
  initialAcceptance,
  togglePremise,
  type AcceptanceState,
  type ArgumentClaim,
} from "./argument-state.ts";
import {
  familyLabels,
  philosophyFamilies,
  resolveChoice,
  type ChoiceExhibit,
  type PhilosophyFamily,
} from "./choice-exhibit.ts";
import { argumentAnatomy, choiceExhibits } from "./exhibits.ts";

function requiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required element: ${selector}`);
  return element;
}

const claimsRoot = requiredElement<HTMLElement>("#argument-claims");
const supportStatus = requiredElement<HTMLElement>("#support-status");
const supportDetail = requiredElement<HTMLElement>("#support-detail");
const familyFiltersRoot = requiredElement<HTMLElement>("#family-filters");
const exhibitCatalogRoot = requiredElement<HTMLElement>("#choice-catalog");
const choiceMeta = requiredElement<HTMLElement>("#choice-meta");
const choiceTitle = requiredElement<HTMLElement>("#choice-title");
const choiceSetup = requiredElement<HTMLElement>("#choice-setup");
const choiceQuestion = requiredElement<HTMLElement>("#choice-question");
const choiceOptionsRoot = requiredElement<HTMLElement>("#choice-options");
const choiceResult = requiredElement<HTMLElement>("#choice-result");
const choiceReference = requiredElement<HTMLAnchorElement>("#choice-reference");

let acceptance: AcceptanceState = initialAcceptance(argumentAnatomy);
let activeFamily: PhilosophyFamily | "all" = "all";
let activeExhibitId = choiceExhibits[0]?.id ?? "";
const selectedOptions = new Map<string, string>();

function restoreChoiceStateFromUrl(): void {
  const parameters = new URLSearchParams(window.location.search);
  const requestedExhibitId = parameters.get("exhibit");
  const requestedExhibit = choiceExhibits.find((exhibit) => exhibit.id === requestedExhibitId);
  if (!requestedExhibit) return;

  activeExhibitId = requestedExhibit.id;
  const requestedOptionId = parameters.get("choice");
  if (requestedOptionId && resolveChoice(requestedExhibit, requestedOptionId)) {
    selectedOptions.set(requestedExhibit.id, requestedOptionId);
  }
}

function syncChoiceStateToUrl(): void {
  const exhibit = activeExhibit();
  const url = new URL(window.location.href);
  url.searchParams.set("exhibit", exhibit.id);

  const selectedOptionId = selectedOptions.get(exhibit.id);
  if (selectedOptionId) url.searchParams.set("choice", selectedOptionId);
  else url.searchParams.delete("choice");

  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

function renderClaim(claim: ArgumentClaim): HTMLElement {
  const article = document.createElement("article");
  article.className = "claim-card";
  article.dataset.role = claim.role;

  const copy = document.createElement("div");
  const label = document.createElement("p");
  label.className = "claim-label";
  label.textContent = claim.label;

  const text = document.createElement("p");
  text.className = "claim-text";
  text.textContent = claim.text;
  copy.append(label, text);
  article.append(copy);

  if (claim.role === "premise") {
    const accepted = acceptance[claim.id] === true;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "premise-toggle";
    toggle.setAttribute("aria-pressed", String(accepted));
    toggle.textContent = accepted ? "Accepted" : "Rejected";
    toggle.setAttribute(
      "aria-label",
      `${accepted ? "Reject" : "Accept"} ${claim.label}: ${claim.text}`,
    );
    toggle.addEventListener("click", () => {
      acceptance = togglePremise(argumentAnatomy, acceptance, claim.id);
      renderArgument();
    });
    article.append(toggle);
  }

  return article;
}

function renderArgument(): void {
  claimsRoot.replaceChildren(...argumentAnatomy.claims.map(renderClaim));

  const conclusion = argumentAnatomy.claims.find((claim) => claim.role === "conclusion");
  if (!conclusion) throw new Error("Argument exhibit has no conclusion");

  const result = conclusionSupport(argumentAnatomy, acceptance, conclusion.id);
  supportStatus.dataset.state = result.kind;

  if (result.kind === "supported") {
    supportStatus.textContent = "The conclusion is supported by the displayed premises.";
    supportDetail.textContent =
      "Both premises are currently accepted. This reports the structure of this argument, not whether its premises are in fact true.";
    return;
  }

  const missingLabels = result.missingPremiseIds.map((id) => {
    const claim = argumentAnatomy.claims.find((candidate) => candidate.id === id);
    return claim?.label ?? id;
  });
  supportStatus.textContent = "The displayed argument no longer supports its conclusion.";
  supportDetail.textContent = `${missingLabels.join(" and ")} ${
    missingLabels.length === 1 ? "is" : "are"
  } currently rejected.`;
}

function activeExhibit(): ChoiceExhibit {
  const exhibit = choiceExhibits.find((candidate) => candidate.id === activeExhibitId);
  if (!exhibit) throw new Error(`Unknown active exhibit: ${activeExhibitId}`);
  return exhibit;
}

function visibleExhibits(): readonly ChoiceExhibit[] {
  if (activeFamily === "all") return choiceExhibits;
  return choiceExhibits.filter((exhibit) => exhibit.family === activeFamily);
}

function activateFirstVisibleIfNeeded(): void {
  if (visibleExhibits().some((exhibit) => exhibit.id === activeExhibitId)) return;
  const first = visibleExhibits()[0];
  if (first) activeExhibitId = first.id;
}

function renderFamilyFilters(): void {
  const filters: Array<readonly [PhilosophyFamily | "all", string]> = [
    ["all", `All ${choiceExhibits.length}`],
    ...philosophyFamilies.map(
      (family) =>
        [
          family,
          `${familyLabels[family]} ${choiceExhibits.filter((exhibit) => exhibit.family === family).length}`,
        ] as const,
    ),
  ];

  const buttons = filters.map(([family, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "family-filter";
    button.setAttribute("aria-pressed", String(activeFamily === family));
    button.textContent = label;
    button.addEventListener("click", () => {
      activeFamily = family;
      activateFirstVisibleIfNeeded();
      syncChoiceStateToUrl();
      renderChoiceLab();
    });
    return button;
  });

  familyFiltersRoot.replaceChildren(...buttons);
}

function renderCatalog(): void {
  const buttons = visibleExhibits().map((exhibit) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "catalog-card catalog-button";
    button.dataset.active = String(exhibit.id === activeExhibitId);
    button.setAttribute("aria-pressed", String(exhibit.id === activeExhibitId));

    const state = document.createElement("span");
    state.className = "catalog-state";
    state.textContent = familyLabels[exhibit.family];

    const title = document.createElement("strong");
    title.className = "catalog-title";
    title.textContent = exhibit.title;

    const question = document.createElement("span");
    question.className = "catalog-question";
    question.textContent = exhibit.question;

    const answered = document.createElement("span");
    answered.className = "catalog-answer-state";
    answered.textContent = selectedOptions.has(exhibit.id) ? "Answered" : "Explore";

    button.append(state, title, question, answered);
    button.addEventListener("click", () => {
      activeExhibitId = exhibit.id;
      syncChoiceStateToUrl();
      renderChoiceLab();
    });
    return button;
  });

  exhibitCatalogRoot.replaceChildren(...buttons);
}

function resultSection(label: string, text: string): HTMLElement {
  const section = document.createElement("section");
  const heading = document.createElement("h4");
  heading.textContent = label;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  section.append(heading, paragraph);
  return section;
}

function renderChoiceResult(exhibit: ChoiceExhibit): void {
  const option = resolveChoice(exhibit, selectedOptions.get(exhibit.id));

  if (!option) {
    const prompt = document.createElement("p");
    prompt.className = "choice-placeholder";
    prompt.textContent =
      "Pick the answer closest to your current view. The lab does not score the choice; it exposes what the answer emphasizes and where pressure remains.";
    choiceResult.replaceChildren(prompt);
    choiceResult.dataset.state = "empty";
    return;
  }

  const heading = document.createElement("p");
  heading.className = "choice-result-label";
  heading.textContent = `You chose: ${option.label}`;

  const summary = document.createElement("p");
  summary.className = "choice-result-summary";
  summary.textContent = option.summary;

  choiceResult.replaceChildren(
    heading,
    summary,
    resultSection("What this emphasizes", option.commitment),
    resultSection("Pressure point", option.challenge),
  );
  choiceResult.dataset.state = "selected";
}

function renderChoiceExhibit(): void {
  const exhibit = activeExhibit();
  choiceMeta.textContent = `${familyLabels[exhibit.family]} · ${
    choiceExhibits.findIndex((candidate) => candidate.id === exhibit.id) + 1
  } of ${choiceExhibits.length}`;
  choiceTitle.textContent = exhibit.title;
  choiceSetup.textContent = exhibit.setup;
  choiceQuestion.textContent = exhibit.question;
  choiceReference.textContent = exhibit.reference.label;
  choiceReference.href = exhibit.reference.url;

  const currentSelection = selectedOptions.get(exhibit.id);
  const optionButtons = exhibit.options.map((option) => {
    const button = document.createElement("button");
    const selected = option.id === currentSelection;
    button.type = "button";
    button.className = "choice-option";
    button.setAttribute("aria-pressed", String(selected));

    const label = document.createElement("strong");
    label.textContent = option.label;
    const summary = document.createElement("span");
    summary.textContent = option.summary;
    button.append(label, summary);

    button.addEventListener("click", () => {
      selectedOptions.set(exhibit.id, option.id);
      syncChoiceStateToUrl();
      renderChoiceExhibit();
      renderCatalog();
    });
    return button;
  });

  choiceOptionsRoot.replaceChildren(...optionButtons);
  renderChoiceResult(exhibit);
}

function renderChoiceLab(): void {
  renderFamilyFilters();
  renderCatalog();
  renderChoiceExhibit();
}

restoreChoiceStateFromUrl();
renderArgument();
renderChoiceLab();
