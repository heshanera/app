/**
 * Retrieves the current URL path based on the given pathName.
 * @param {string | null} pathName - The pathName to extract the URL path from.
 * @returns {string} The extracted current URL path ending with a trailing slash.
 */
export const getCurrentUrlPath = (pathName: string | null): string => {
  let currentUrl = '';
  if (pathName) {
    currentUrl = pathName?.split('/')[2] || '';
  }
  return `${currentUrl}/`;
};
