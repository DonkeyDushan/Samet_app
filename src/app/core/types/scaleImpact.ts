import type { ScaleId } from "./scale";

/**
 * Effect a chosen answer has on a character's scale, encoded in content as e.g.
 * S_Marie_Regime+1 or S_Marie_Wealth+5. A single answer may carry several of
 * these to affect both scales at once.
 */
export type ScaleImpact = {
  /** Encoded identifier, e.g. "S_Marie_Regime+1". */
  readonly id: string;
  /** Character whose scale is affected, e.g. "marie". */
  readonly characterId: string;
  /** Which scale the delta applies to. */
  readonly scale: ScaleId;
  /** Signed change applied to the scale, e.g. +1, +5, -2. */
  readonly delta: number;
};
