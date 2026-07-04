import type {
  CharacterAnswerOption,
  NumberAnswerOption,
  YesNoAnswerOption,
} from "./answerOption";
import type { ConditionId } from "./conditionId";
import type { GamePhase } from "./gamePhase";

/** Fields shared by every question regardless of answer type. */
type QuestionBase = {
  /** Encoded identifier, e.g. "Q_Marie1_1" (Question, character, phase, question index). */
  readonly id: string;
  /** Character this question is about, e.g. "marie". */
  readonly characterId: string;
  /** Phase in which the question is asked. */
  readonly phase: GamePhase;
  /** Id of the visibility condition (phase 2 onward); null when the question is always shown. Resolved elsewhere. */
  readonly condition: ConditionId | null;
};

/** Question answered with a number. */
export type NumberQuestion = QuestionBase & {
  readonly _type: "number";
  readonly answers: readonly NumberAnswerOption[];
};

/** Question answered with yes/no. */
export type YesNoQuestion = QuestionBase & {
  readonly _type: "yesNo";
  readonly answers: readonly YesNoAnswerOption[];
};

/** Question answered by picking exactly one character. */
export type SingleCharacterQuestion = QuestionBase & {
  readonly _type: "singleCharacter";
  readonly answers: readonly CharacterAnswerOption[];
};

/** Question answered by picking one or more characters. */
export type MultipleCharacterQuestion = QuestionBase & {
  readonly _type: "multipleCharacters";
  readonly answers: readonly CharacterAnswerOption[];
};

/** Any game question, discriminated by `_type` (the answer type). */
export type Question =
  | NumberQuestion
  | YesNoQuestion
  | SingleCharacterQuestion
  | MultipleCharacterQuestion;
