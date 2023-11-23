import '@testing-library/jest-dom/extend-expect';
import { LOCALES } from '../../../constants/locales';
import { getLanguageSelectorOptions, getLocaleName } from '../../LanguageSelector/utils';

describe('getLanguageSelectorOptions functionality', () => {
  it('returns an array of language codes', () => {
    const languageOptions = getLanguageSelectorOptions();

    Object.keys(LOCALES).forEach((locale: string) => {
      expect(languageOptions).toContain(locale);
    });

    expect(languageOptions.length).toBe(Object.keys(LOCALES).length);
  });
});

describe('getLocaleName functionality', () => {
  it('returns the short name for a valid locale', () => {
    const shortName = getLocaleName('en_US');
    expect(shortName).toEqual(LOCALES['en_US']?.shortName || '');
  });

  it('returns an empty string for an invalid locale', () => {
    const shortName = getLocaleName('invalid_locale');
    expect(shortName).toEqual('');
  });
});
