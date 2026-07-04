/** A player's recorded answer to a single question. */
export type AnswerRecord = {
  /** Question this answers, e.g. "Q_Marie1_1". */
  readonly questionId: string;
  /** Chosen answer option ids: one element for single-select, several for multi-select. */
  readonly selectedAnswerIds: readonly string[];
};
