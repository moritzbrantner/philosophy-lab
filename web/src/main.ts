import {
  conclusionSupport,
  initialAcceptance,
  togglePremise,
  type AcceptanceState,
  type ArgumentClaim,
} from "./argument-state.ts";
import { argumentAnatomy, plannedExhibits } from "./exhibits.ts";

function requiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required element: ${selector}`);
  return element;
}

const claimsRoot = requiredElement<HTMLElement>("#argument-claims");
const supportStatus = requiredElement<HTMLElement>("#support-status");
const supportDetail = requiredElement<HTMLElement>("#support-detail");
const catalogRoot = requiredElement<HTMLElement>("#exhibit-catalog");

let acceptance: AcceptanceState = initialAcceptance(argumentAnatomy);

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

function renderCatalog(): void {
  const cards = plannedExhibits.map((exhibit) => {
    const article = document.createElement("article");
    article.className = "catalog-card";

    const state = document.createElement("span");
    state.className = "catalog-state";
    state.textContent = exhibit.family;

    const title = document.createElement("h3");
    title.textContent = exhibit.title;

    const description = document.createElement("p");
    description.textContent = exhibit.description;

    article.append(state, title, description);
    return article;
  });

  catalogRoot.replaceChildren(...cards);
}

renderArgument();
renderCatalog();
