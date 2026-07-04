import type { Character } from "../types/character";

/**
 * Static roster of all story characters. Each entry exposes the character's
 * full `name` and the `family` they belong to. Frozen to prevent accidental
 * mutation of shared reference data.
 */
export const CHARACTERS: readonly Character[] = Object.freeze([
  { name: "Antonín Hájek", family: "Hájkovi" },
  { name: "Věra Hájková, rozená Štiková", family: "Hájkovi" },
  { name: "Růžena Štiková", family: "Hájkovi" },

  { name: "František Pokorný", family: "Pokorní" },
  { name: "Karel Pokorný", family: "Pokorní" },
  { name: "Anna Pokorná, rozená Nagyová", family: "Pokorní" },
  { name: "Zuzana Pokorná", family: "Pokorní" },
  { name: "Miroslav Pokorný", family: "Pokorní" },

  { name: "Štefan Baláž", family: "Balážovi" },
  { name: "Ilona Balážová, rozená Danielová", family: "Balážovi" },
  { name: "Marie Balážová", family: "Balážovi" },

  { name: "Jan Svoboda", family: "Svobodovi" },
  { name: "Helena Svobodová, rozená Černá", family: "Svobodovi" },
  { name: "Lenka Svobodová", family: "Svobodovi" },
  { name: "Petra Svobodová", family: "Svobodovi" },

  { name: "Ladislav Novák", family: "Novákovi" },
  { name: "Oľga Nováková, rozená Mikušová", family: "Novákovi" },
  { name: "Zdenko Novák", family: "Novákovi" },

  { name: "Vladimír Kráľ", family: "Kráľovi" },
  { name: "Dagmar Kráľová, rozená Veselá", family: "Kráľovi" },
  { name: "Pavol Kráľ", family: "Kráľovi" },

  { name: "Ivan Macháček", family: "Macháčkovi" },
  { name: "Jaroslava Macháčková, rozená Kováčová", family: "Macháčkovi" },
]);
