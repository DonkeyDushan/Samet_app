import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CHARACTERS } from "../constants/characters";
import { INITIAL_PHASE, INITIAL_SCALE_VALUE } from "../constants/gameDefaults";
import {
  GAME_STORE_STORAGE_KEY,
  GAME_STORE_VERSION,
} from "../constants/gameStorage";
import type { AnswerRecord } from "../types/answerRecord";
import type { CharacterScales } from "../types/characterScales";
import type { GamePhase } from "../types/gamePhase";
import type { GameState } from "../types/gameState";
import type { ScaleId } from "../types/scale";
import type { ScaleImpact } from "../types/scaleImpact";

/**
 * Default scales for one character. Written as an explicit literal (not a loop)
 * so the compiler enforces completeness: adding a scale to `ScaleId` fails here
 * until the new field is provided — no unsafe assertion needed.
 */
const createDefaultScales = (): CharacterScales => ({
  wealth: INITIAL_SCALE_VALUE,
  regime: INITIAL_SCALE_VALUE,
});

const createInitialScales = (): Record<string, CharacterScales> => {
  const scales: Record<string, CharacterScales> = {};

  for (const character of CHARACTERS) {
    scales[character.id] = createDefaultScales();
  }

  return scales;
};

const createInitialState = (): GameState => ({
  phase: INITIAL_PHASE,
  scales: createInitialScales(),
  answers: {},
});

/**
 * Module-singleton game store holding phase, per-character scales, and recorded
 * answers. Persisted to localStorage so progress survives a reload. The store
 * holds data only; mutations live in the exported functions below.
 */
export const gameStore = create<GameState>()(
  persist(() => createInitialState(), {
    name: GAME_STORE_STORAGE_KEY,
    version: GAME_STORE_VERSION,
  }),
);

/** Move the game to a given phase. */
export const setPhase = (phase: GamePhase): void => {
  if (gameStore.getState().phase === phase) return;

  gameStore.setState({ phase });
};

/** Record (or replace) the player's answer to a question. */
export const recordAnswer = (
  questionId: string,
  selectedAnswerIds: readonly string[],
): void => {
  const record: AnswerRecord = { questionId, selectedAnswerIds };

  gameStore.setState((previous) => ({
    answers: { ...previous.answers, [questionId]: record },
  }));
};

/** Add a signed delta to one scale of one character; no-op for an unknown character. */
export const adjustScale = (
  characterId: string,
  scale: ScaleId,
  delta: number,
): void => {
  const state = gameStore.getState();
  const current = state.scales[characterId];

  if (current === undefined) return;

  const updated: CharacterScales = { ...current, [scale]: current[scale] + delta };

  gameStore.setState({ scales: { ...state.scales, [characterId]: updated } });
};

/** Apply every scale impact of a chosen answer in a single state commit. */
export const applyScaleImpacts = (impacts: readonly ScaleImpact[]): void => {
  if (impacts.length === 0) return;

  const state = gameStore.getState();
  const nextScales: Record<string, CharacterScales> = { ...state.scales };
  let changed = false;

  for (const impact of impacts) {
    const current = nextScales[impact.characterId];

    if (current === undefined) continue;

    nextScales[impact.characterId] = {
      ...current,
      [impact.scale]: current[impact.scale] + impact.delta,
    };
    changed = true;
  }

  if (!changed) return;

  gameStore.setState({ scales: nextScales });
};

/** Reset the whole game back to its initial state. */
export const resetGame = (): void => {
  gameStore.setState(createInitialState(), true);
};
