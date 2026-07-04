import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./HomePage.module.css";

/** Landing page shell rendered at the root route. */
export const HomePage = (): React.ReactElement => {
  const { t } = useTranslation(["common", "buttons"]);

  return (
    <main className={styles.root} data-testid="home-page">
      <Typography variant="h1">{t("common:welcome_title")}</Typography>

      <Typography variant="body1">{t("common:welcome_subtitle")}</Typography>

      <div className={styles.actions}>
        <Button variant="contained" data-testid="home-page--get-started">
          {t("buttons:get_started")}
        </Button>
      </div>
    </main>
  );
};
