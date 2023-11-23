export const extractLanguage = (locale: string): string => {
  if (locale?.length > 0) {
    return locale.split('_')[0];
  }
  return '';
};
