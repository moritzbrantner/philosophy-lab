export type ClaimRole = "premise" | "conclusion";

export type ArgumentClaim = {
  readonly id: string;
  readonly label: string;
  readonly text: string;
  readonly role: ClaimRole;
  readonly dependsOn?: readonly string[];
};

export type ArgumentDefinition = {
  readonly id: string;
  readonly title: string;
  readonly question: string;
  readonly claims: readonly ArgumentClaim[];
};

export type AcceptanceState = Readonly<Record<string, boolean>>;

export type SupportStatus = {
  readonly kind: "supported" | "unsupported";
  readonly missingPremiseIds: readonly string[];
};

export function initialAcceptance(argument: ArgumentDefinition): AcceptanceState {
  return Object.fromEntries(
    argument.claims
      .filter((claim) => claim.role === "premise")
      .map((claim) => [claim.id, true] as const),
  );
}

export function togglePremise(
  argument: ArgumentDefinition,
  state: AcceptanceState,
  premiseId: string,
): AcceptanceState {
  const claim = argument.claims.find((candidate) => candidate.id === premiseId);
  if (!claim) throw new Error(`Unknown claim: ${premiseId}`);
  if (claim.role !== "premise") throw new Error(`Claim is not a premise: ${premiseId}`);

  return {
    ...state,
    [premiseId]: !(state[premiseId] ?? false),
  };
}

export function conclusionSupport(
  argument: ArgumentDefinition,
  state: AcceptanceState,
  conclusionId: string,
): SupportStatus {
  const conclusion = argument.claims.find((claim) => claim.id === conclusionId);
  if (!conclusion) throw new Error(`Unknown conclusion: ${conclusionId}`);
  if (conclusion.role !== "conclusion")
    throw new Error(`Claim is not a conclusion: ${conclusionId}`);

  const missingPremiseIds = (conclusion.dependsOn ?? []).filter(
    (premiseId) => state[premiseId] !== true,
  );

  return {
    kind: missingPremiseIds.length === 0 ? "supported" : "unsupported",
    missingPremiseIds,
  };
}

export function validateArgument(argument: ArgumentDefinition): readonly string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const claim of argument.claims) {
    if (ids.has(claim.id)) errors.push(`Duplicate claim id: ${claim.id}`);
    ids.add(claim.id);
  }

  const conclusions = argument.claims.filter((claim) => claim.role === "conclusion");
  if (conclusions.length === 0) errors.push("Argument must contain at least one conclusion");

  for (const conclusion of conclusions) {
    for (const dependencyId of conclusion.dependsOn ?? []) {
      const dependency = argument.claims.find((claim) => claim.id === dependencyId);
      if (!dependency) {
        errors.push(`Conclusion ${conclusion.id} depends on unknown claim ${dependencyId}`);
      } else if (dependency.role !== "premise") {
        errors.push(`Conclusion ${conclusion.id} depends on non-premise ${dependencyId}`);
      }
    }
  }

  return errors;
}
