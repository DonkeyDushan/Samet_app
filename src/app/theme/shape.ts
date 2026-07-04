import type { Theme } from "@mui/material/styles";

/** Default corner radius in px applied to surfaces (cards, buttons, inputs). */
export const BORDER_RADIUS_PX = 8;

/** Base spacing unit in px. MUI multiplies this by the numeric spacing factor. */
export const SPACING_UNIT_PX = 8;

/** Shape tokens for the MUI theme. */
export const shape: Theme["shape"] = {
  borderRadius: BORDER_RADIUS_PX,
};
