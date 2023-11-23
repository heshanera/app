export const getCurrentUrlPath = (pathName: string | null): string => {
  let currentUrl = '';
  if (pathName) {
    currentUrl = pathName?.split('/')[2] || '';
  }
  return `${currentUrl}/`;
};
