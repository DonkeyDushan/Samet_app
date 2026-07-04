import { common } from "./locales/en/common";
import { buttons } from "./locales/en/buttons";
import { errors } from "./locales/en/errors";

/** Default i18n language used when no user preference is stored. */
export const DEFAULT_LANGUAGE = "en";

/** Default namespace resolved when a key omits its `namespace:` prefix. */
export const DEFAULT_NAMESPACE = "common";

/**
 * Assembled i18next resource tree.
 *
 * Namespaces map one-to-one to the domain files under `locales/en/`; add a new
 * domain file and register it here, then declare it in `i18next.d.ts` so the
 * compiler type-checks every key.
 */
export const resources = {
  en: {
    common,
    buttons,
    errors,
  },
} as const;
