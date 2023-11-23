import { extractLanguage } from '../localeUtils';

describe('extractLanguage functionality', () => {
  it('extracts language code from a valid locale', () => {
    const languageCode = extractLanguage('en_US');
    expect(languageCode).toBe('en');
  });

  it('returns an empty string for an empty locale', () => {
    const languageCode = extractLanguage('');
    expect(languageCode).toBe('');
  });
});
