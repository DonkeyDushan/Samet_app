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
    main: "#934541",
    light: "#c55b45",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#dfa13e",
    contrastText: "#32373b",
  },
  error: {
    main: "#d32f2f",
  },
  text: {
    primary: "#32373b",
    secondary: "#786149",
  },
  background: {
    default: "#f3e7d9",
    paper: "#ffffff",
  },
};
