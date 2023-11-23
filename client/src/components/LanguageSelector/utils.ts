import { LOCALES } from '../../constants/locales';

export const getLanguageSelectorOptions = (): string[] => {
  const options: string[] = [];

  Object.keys(LOCALES).forEach((locale: string): void => {
    options.push(locale);
  });

  return options;
};

export const getLocaleName = (locale: string): string => {
  return LOCALES[locale]?.shortName || '';
};
