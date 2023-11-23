/**
 * Extracts the language code from a given locale string.
 * @param {string} locale - The locale string from which to extract the language code.
 * @returns {string} - The extracted language code. Returns an empty string if the input locale is falsy or empty.
 */
export const extractLanguage = (locale: string): string => {
  if (locale?.length > 0) {
    return locale.split('_')[0];
  }
  return '';
};
