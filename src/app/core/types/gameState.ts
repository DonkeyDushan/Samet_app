import type { AnswerRecord } from "./answerRecord";
import type { CharacterScales } from "./characterScales";
import type { GamePhase } from "./gamePhase";

/** Full game state held by the game store. */
export type GameState = {
  /** Phase currently being played. */
  readonly phase: GamePhase;
  /** Scale values per character, keyed by character id. */
  readonly scales: Readonly<Record<string, CharacterScales>>;
  /** Recorded answers, keyed by question id. */
  readonly answers: Readonly<Record<string, AnswerRecord>>;
};
