import type { Character } from "../types/character";

/**
 * Static roster of all story characters. Each entry exposes the character's
 * full `name` and the `family` they belong to. Frozen to prevent accidental
 * mutation of shared reference data.
 */
export const CHARACTERS: readonly Character[] = Object.freeze([
  { id: "antonin", name: "Antonín Hájek", family: "Hájkovi" },
  { id: "vera", name: "Věra Hájková, rozená Štiková", family: "Hájkovi" },
  { id: "ruzena", name: "Růžena Štiková", family: "Hájkovi" },

  { id: "frantisek", name: "František Pokorný", family: "Pokorní" },
  { id: "karel", name: "Karel Pokorný", family: "Pokorní" },
  { id: "anna", name: "Anna Pokorná, rozená Nagyová", family: "Pokorní" },
  { id: "zuzana", name: "Zuzana Pokorná", family: "Pokorní" },
  { id: "miroslav", name: "Miroslav Pokorný", family: "Pokorní" },

  { id: "stefan", name: "Štefan Baláž", family: "Balážovi" },
  { id: "ilona", name: "Ilona Balážová, rozená Danielová", family: "Balážovi" },
  { id: "marie", name: "Marie Balážová", family: "Balážovi" },

  { id: "jan", name: "Jan Svoboda", family: "Svobodovi" },
  { id: "helena", name: "Helena Svobodová, rozená Černá", family: "Svobodovi" },
  { id: "lenka", name: "Lenka Svobodová", family: "Svobodovi" },
  { id: "petra", name: "Petra Svobodová", family: "Svobodovi" },

  { id: "ladislav", name: "Ladislav Novák", family: "Novákovi" },
  { id: "olga", name: "Oľga Nováková, rozená Mikušová", family: "Novákovi" },
  { id: "zdenko", name: "Zdenko Novák", family: "Novákovi" },

  { id: "vladimir", name: "Vladimír Kráľ", family: "Kráľovi" },
  { id: "dagmar", name: "Dagmar Kráľová, rozená Veselá", family: "Kráľovi" },
  { id: "pavol", name: "Pavol Kráľ", family: "Kráľovi" },

  { id: "ivan", name: "Ivan Macháček", family: "Macháčkovi" },
  { id: "jaroslava", name: "Jaroslava Macháčková, rozená Kováčová", family: "Macháčkovi" },
]);
