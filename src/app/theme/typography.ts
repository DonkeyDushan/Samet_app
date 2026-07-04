import type { TypographyVariantsOptions } from "@mui/material/styles";

/** Base font stack used across the app. */
const FONT_FAMILY =
  '"Inter", "Roboto", "Helvetica", "Arial", sans-serif';

/** Root font size in px that all `rem` units resolve against. */
const HTML_FONT_SIZE_PX = 16;

/**
 * Typography scale for the MUI theme.
 *
 * `htmlFontSize` anchors MUI's `rem` math to the document root so that spacing
 * and font-size tokens stay consistent with the CSS Modules that also use `rem`.
 */
export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_FAMILY,
  htmlFontSize: HTML_FONT_SIZE_PX,
  h1: {
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
  },
  button: {
    textTransform: "none",
  },
};
