import { createTheme, type Theme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { shape, SPACING_UNIT_PX } from "./shape";
import { components } from "./components";

/**
 * Builds the application MUI theme from the concern-split token modules.
 *
 * Kept as a factory (not a module-level singleton) so that a future dark-mode
 * or per-tenant variant can be produced by swapping the input tokens without
 * re-implementing theme assembly.
 */
export const createAppTheme = (): Theme =>
  createTheme({
    palette,
    typography,
    shape,
    spacing: SPACING_UNIT_PX,
    components,
  });
