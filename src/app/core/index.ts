export { CHARACTERS } from "./constants/characters";
export { MOCK_QUESTIONS } from "./constants/mockQuestions";
export { INITIAL_PHASE, INITIAL_SCALE_VALUE } from "./constants/gameDefaults";

export {
  gameStore,
  setPhase,
  recordAnswer,
  adjustScale,
  applyScaleImpacts,
  resetGame,
} from "./stores/gameStore";

export { useGamePhase } from "./hooks/useGamePhase";
export { useCharacterScale } from "./hooks/useCharacterScale";
export { useCharacterScales } from "./hooks/useCharacterScales";
export { useQuestionAnswer } from "./hooks/useQuestionAnswer";

export type { GameState } from "./types/gameState";
export type { CharacterScales } from "./types/characterScales";
export type { AnswerRecord } from "./types/answerRecord";
export type { Character, FamilyName } from "./types/character";
export type { ConditionId } from "./types/conditionId";
export type { GamePhase } from "./types/gamePhase";
export type { ScaleId } from "./types/scale";
export type { ScaleImpact } from "./types/scaleImpact";
export type {
  NumberAnswerOption,
  YesNoAnswerOption,
  CharacterAnswerOption,
} from "./types/answerOption";
export type {
  Question,
  NumberQuestion,
  YesNoQuestion,
  SingleCharacterQuestion,
  MultipleCharacterQuestion,
} from "./types/question";
