import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import styles from "./NotFoundPage.module.css";

/** Fallback page rendered for unmatched routes. */
export const NotFoundPage = (): React.ReactElement => {
  const { t } = useTranslation(["errors"]);

  return (
    <main className={styles.root} data-testid="not-found-page">
      <Typography variant="h2">404</Typography>

      <Typography variant="body1">{t("errors:not_found")}</Typography>
    </main>
  );
};
