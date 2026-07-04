import { gameStore } from "../stores/gameStore";
import type { AnswerRecord } from "../types/answerRecord";

/** Reactive recorded answer for a question; undefined until the question is answered. */
export const useQuestionAnswer = (
  questionId: string,
): AnswerRecord | undefined =>
  gameStore((state) => state.answers[questionId]);
