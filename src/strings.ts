/**
 * Central registry of user-visible UI strings.
 *
 * This is the single documented exception to the "all copy through t()" rule:
 * static brand-level strings that are not part of a translatable namespace live
 * here. Everything rendered to the user inside a feature must still go through
 * react-i18next (`t('namespace:key')`), not this file.
 */
export const strings = {
  /** Application display name shown in the browser title bar and app shell. */
  appName: "Samet App",
} as const;
