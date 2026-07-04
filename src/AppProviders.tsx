import { StrictMode, useMemo, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { I18nextProvider } from "react-i18next";
import { createAppTheme } from "app/theme/createAppTheme";
import { initI18n } from "app/i18n/config";

/** Shared i18next singleton, initialized once at module load. */
const i18n = initI18n();

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Composes global providers: React StrictMode, MUI theme + baseline reset, and
 * i18next. Feature-specific providers must not live here.
 */
export const AppProviders = ({
  children,
}: AppProvidersProps): React.ReactElement => {
  const theme = useMemo(() => createAppTheme(), []);

  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </I18nextProvider>
    </StrictMode>
  );
};
