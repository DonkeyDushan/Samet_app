/**
 * Family a character belongs to. String literal values are domain data
 * (Czech surnames in plural), intentionally kept as-is — they are values,
 * not code identifiers.
 */
export type FamilyName =
  | "Hájkovi"
  | "Pokorní"
  | "Balážovi"
  | "Svobodovi"
  | "Novákovi"
  | "Kráľovi"
  | "Macháčkovi";

/** A single story character and the family they belong to. */
export type Character = {
  /** Stable identifier: the character's first name, lowercased and stripped of diacritics. */
  readonly id: string;
  /** Full display name, including maiden name ("rozená ...") when applicable. */
  readonly name: string;
  /** Family this character belongs to. */
  readonly family: FamilyName;
};
