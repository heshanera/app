import { LOCALES } from '../../constants/locales';

/**
 * Get supported list of language codes
 * @returns {string[]} list of language codes
 */
export const getLanguageSelectorOptions = (): string[] => {
  const options: string[] = [];

  Object.keys(LOCALES).forEach((locale: string): void => {
    options.push(locale);
  });

  return options;
};

/**
 * Get the language name in short when the locale is provided
 * @param {sting} locale string for the locale
 * @returns {string} short name for the language
 */
export const getLocaleName = (locale: string): string => {
  return LOCALES[locale]?.shortName || '';
};
