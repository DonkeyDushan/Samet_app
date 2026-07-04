import "i18next";
import type { common } from "./app/i18n/locales/en/common";
import type { buttons } from "./app/i18n/locales/en/buttons";
import type { errors } from "./app/i18n/locales/en/errors";
import type { DEFAULT_NAMESPACE } from "./app/i18n/resources";

/**
 * Types the i18next instance against the real resource shape so that unknown
 * namespaces and unknown keys are compile errors.
 */
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_NAMESPACE;
    resources: {
      common: typeof common;
      buttons: typeof buttons;
      errors: typeof errors;
    };
  }
}
