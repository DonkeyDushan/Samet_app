import type { Question } from "../types/question";

/**
 * Mock question set used until the real content pipeline exists. Demonstrates
 * every answer type and a phase-2 conditional question for the "marie"
 * character. Extend per character and phase following the same id conventions:
 *   - question:   Q_<Name><Phase>_<Index>          e.g. Q_Marie1_1
 *   - answer:     A_<Name>_<Phase>_<Index>_<Value>  e.g. A_Marie_1_1_Mirek
 *   - impact:     S_<Name>_<Scale><Delta>           e.g. S_Marie_Regime+1
 *   - condition:  V_<Name>_<Phase>_Questions_<Index>_<Option>  e.g. V_Marie_1_Questions_1_B
 */
export const MOCK_QUESTIONS: readonly Question[] = Object.freeze([
  // --- Phase 1 ---
  // Q1: pick one character (option A = Mirek, B = Jan, C = Anna).
  {
    _type: "singleCharacter",
    id: "Q_Marie1_1",
    characterId: "marie",
    phase: 1,
    condition: null,
    answers: [
      { id: "A_Marie_1_1_Mirek", characterId: "miroslav", scaleImpacts: [] },
      {
        id: "A_Marie_1_1_Jan",
        characterId: "jan",
        scaleImpacts: [
          { id: "S_Marie_Regime+1", characterId: "marie", scale: "regime", delta: 1 },
        ],
      },
      { id: "A_Marie_1_1_Anna", characterId: "anna", scaleImpacts: [] },
    ],
  },
  // Q2: numeric answer, higher amount raises wealth.
  {
    _type: "number",
    id: "Q_Marie1_2",
    characterId: "marie",
    phase: 1,
    condition: null,
    answers: [
      { id: "A_Marie_1_2_0", value: 0, scaleImpacts: [] },
      {
        id: "A_Marie_1_2_100",
        value: 100,
        scaleImpacts: [
          { id: "S_Marie_Wealth+5", characterId: "marie", scale: "wealth", delta: 5 },
        ],
      },
    ],
  },
  // Q3: yes/no, "Ano" raises regime.
  {
    _type: "yesNo",
    id: "Q_Marie1_3",
    characterId: "marie",
    phase: 1,
    condition: null,
    answers: [
      {
        id: "A_Marie_1_3_Ano",
        value: true,
        scaleImpacts: [
          { id: "S_Marie_Regime+1", characterId: "marie", scale: "regime", delta: 1 },
        ],
      },
      { id: "A_Marie_1_3_Ne", value: false, scaleImpacts: [] },
    ],
  },

  // --- Phase 2 (conditional) ---
  // Q_Marie2_2: shown only when condition V_Marie_1_Questions_1_B holds
  // (phase-1 Q1 answered with option B). Resolved elsewhere. Multi-select.
  {
    _type: "multipleCharacters",
    id: "Q_Marie2_2",
    characterId: "marie",
    phase: 2,
    condition: "V_Marie_1_Questions_1_B",
    answers: [
      {
        id: "A_Marie_2_2_Jan",
        characterId: "jan",
        scaleImpacts: [
          { id: "S_Marie_Wealth-2", characterId: "marie", scale: "wealth", delta: -2 },
        ],
      },
      { id: "A_Marie_2_2_Anna", characterId: "anna", scaleImpacts: [] },
      {
        id: "A_Marie_2_2_Mirek",
        characterId: "miroslav",
        scaleImpacts: [
          { id: "S_Marie_Regime+1", characterId: "marie", scale: "regime", delta: 1 },
        ],
      },
    ],
  },
]);
