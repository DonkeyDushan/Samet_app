import type { ScaleImpact } from "./scaleImpact";

/**
 * Fields shared by every answer option regardless of answer type. The concrete
 * option type is always reached through its typed {@link Question} variant, so
 * these shapes do not carry their own discriminant.
 */
type AnswerOptionBase = {
  /** Encoded identifier, e.g. "A_Marie_1_1_Mirek" or "A_Marie_1_3_Ano". */
  readonly id: string;
  /** Scale changes applied when this answer is chosen; empty when none. May affect both scales. */
  readonly scaleImpacts: readonly ScaleImpact[];
};

/** A numeric answer, e.g. an amount of money. */
export type NumberAnswerOption = AnswerOptionBase & {
  readonly value: number;
};

/** A yes/no answer (true = "Ano", false = "Ne"). */
export type YesNoAnswerOption = AnswerOptionBase & {
  readonly value: boolean;
};

/** An answer that references another character; used by single- and multi-select questions. */
export type CharacterAnswerOption = AnswerOptionBase & {
  /** Id of the referenced character, e.g. "miroslav". */
  readonly characterId: string;
};
