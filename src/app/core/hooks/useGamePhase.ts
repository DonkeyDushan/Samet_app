import { gameStore } from "../stores/gameStore";
import type { GamePhase } from "../types/gamePhase";

/** Reactive current game phase. */
export const useGamePhase = (): GamePhase =>
  gameStore((state) => state.phase);
