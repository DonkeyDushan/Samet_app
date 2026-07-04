import type { PaletteOptions } from "@mui/material/styles";

/**
 * Application color palette.
 *
 * Values are the single source of truth for brand colors consumed by MUI's
 * `createTheme`. Changing a hex here re-themes the whole app; do not hardcode
 * these colors anywhere else — read them from the theme.
 */
export const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1976d2",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#9c27b0",
    contrastText: "#ffffff",
  },
  error: {
    main: "#d32f2f",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
};
