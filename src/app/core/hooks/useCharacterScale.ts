import { INITIAL_SCALE_VALUE } from "../constants/gameDefaults";
import { gameStore } from "../stores/gameStore";
import type { ScaleId } from "../types/scale";

/** Reactive value of a single scale for a character; default value for an unknown character. */
export const useCharacterScale = (characterId: string, scale: ScaleId): number =>
  gameStore((state) => state.scales[characterId]?.[scale] ?? INITIAL_SCALE_VALUE);
