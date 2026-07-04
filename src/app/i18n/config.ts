import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  resources,
  DEFAULT_LANGUAGE,
  DEFAULT_NAMESPACE,
} from "./resources";

/**
 * Initializes the shared i18next instance.
 *
 * Called once from the app entry before render. Returns the instance so the
 * caller can await readiness if needed; react-i18next reads from the same
 * singleton via the `initReactI18next` plugin.
 */
export const initI18n = (): typeof i18n => {
  void i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    defaultNS: DEFAULT_NAMESPACE,
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};
