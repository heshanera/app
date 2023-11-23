/**
 * Checks if one string is a substring of another, ignoring case sensitivity.
 * @param {string} string1 - The main string to check for the presence of a substring.
 * @param {string} string2 - The substring to check within the main string.
 * @returns {boolean} - `true` if string2 is a substring of string1 (case-insensitive), otherwise `false`.
 */
export const isSubstring = (string1: string, string2: string): boolean => {
  const lCaseString1: string = string1.toLowerCase();
  const lCaseString2: string = string2.toLowerCase();
  return lCaseString1.includes(lCaseString2);
};
