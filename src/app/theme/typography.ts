import type { TypographyVariantsOptions } from "@mui/material/styles";

/** Body font stack used for regular text (< 24px). */
const BODY_FONT_FAMILY = '"Urbanist", "Urbanist Fallback", sans-serif';

/** Heading font stack used for titles rendered at 24px and above. */
const HEADING_FONT_FAMILY = '"Rubik", "Rubik Fallback", sans-serif';

/** Root font size in px that all `rem` units resolve against. */
const HTML_FONT_SIZE_PX = 16;

/**
 * Typography scale for the MUI theme.
 *
 * `htmlFontSize` anchors MUI's `rem` math to the document root so that spacing
 * and font-size tokens stay consistent with the CSS Modules that also use `rem`.
 *
 * Font policy: body copy uses Urbanist; any variant that renders at 24px
 * (1.5rem) or larger switches to Rubik. h1–h5 clear that threshold; h6 and
 * body/button variants stay on the body stack.
 */
export const typography: TypographyVariantsOptions = {
  fontFamily: BODY_FONT_FAMILY,
  htmlFontSize: HTML_FONT_SIZE_PX,
  h1: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: "2.5rem",
    fontWeight: 700,
  },
  h2: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: "2rem",
    fontWeight: 600,
  },
  h3: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: "1.75rem",
    fontWeight: 600,
  },
  h4: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  h5: {
    fontFamily: HEADING_FONT_FAMILY,
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  button: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 600,
  },
};
