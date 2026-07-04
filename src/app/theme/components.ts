import type { Components, Theme } from "@mui/material/styles";

/** Horizontal offset in px of the solid drop shadow. */
const SOLID_SHADOW_OFFSET_X_PX = 4;

/** Vertical offset in px of the solid drop shadow. */
const SOLID_SHADOW_OFFSET_Y_PX = 4;

/** Border width in px of the solid outline that frames shadowed surfaces. */
const SOLID_BORDER_WIDTH_PX = 2;

/**
 * Vertical travel in px on hover. The surface visually "presses into" its own
 * shadow; 4px reads as a tactile press without fully closing the 10px gap.
 */
const HOVER_PRESS_TRANSLATE_Y_PX = 4;

/** Transition timing applied to shadow/transform state changes. */
const SOLID_STYLE_TRANSITION = "all ease-in 0.1s";

/**
 * Builds the hard-edged (zero-blur) solid drop shadow string from the theme's
 * primary color. Kept as a helper so Button and Paper stay visually identical.
 */
const solidShadow = (color: string): string =>
  `${SOLID_SHADOW_OFFSET_X_PX}px ${SOLID_SHADOW_OFFSET_Y_PX}px 0 ${color}`;

/**
 * MUI component style overrides implementing the "Solid Drop Shadow" style:
 * a hard offset shadow plus a matching solid border in the primary color.
 *
 * Buttons additionally press down on hover (shadow collapses, surface shifts
 * down by the press distance). Paper-based surfaces (Paper, Dialog, Menu,
 * Popover, Card — all render through Paper) share the static frame + shadow.
 */
export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: solidShadow(theme.palette.primary.main),
        border: `${SOLID_BORDER_WIDTH_PX}px solid ${theme.palette.primary.main}`,
        transition: SOLID_STYLE_TRANSITION,
        "&.MuiButton-outlined": {
          backgroundColor: "transparent",
        },
        "&.MuiButton-contained": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.background.paper,
        },
        "&:hover": {
          boxShadow: "none",
          transform: `translateY(${HOVER_PRESS_TRANSLATE_Y_PX}px)`,
          transition: SOLID_STYLE_TRANSITION,
          opacity: 1,
        },
      }),
    },
  },
  MuiPaper: {
    defaultProps: {
      // Zero MUI's blurred elevation so only the solid shadow below renders.
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: solidShadow(theme.palette.primary.main),
        border: `${SOLID_BORDER_WIDTH_PX}px solid ${theme.palette.primary.main}`,
      }),
    },
  },
};
