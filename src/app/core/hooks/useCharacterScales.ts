import { gameStore } from "../stores/gameStore";
import type { CharacterScales } from "../types/characterScales";

/**
 * Reactive full scale set for a character. The returned reference is stable
 * across unrelated updates (immutable commits preserve unchanged entries), so
 * consumers only re-render when this character's scales change.
 */
export const useCharacterScales = (
  characterId: string,
): CharacterScales | undefined =>
  gameStore((state) => state.scales[characterId]);
