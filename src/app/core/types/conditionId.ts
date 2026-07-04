/**
 * Opaque identifier of a visibility condition, e.g. "V_Marie_1_Questions_1_B".
 * A question references at most one. Whether the condition currently holds is
 * resolved elsewhere (evaluation logic added later) — questions only carry the id.
 */
export type ConditionId = string;
