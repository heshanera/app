import { Locales } from '../types';

export const LOCALES: Locales = {
  de_DE: {
    code: 'de_DE',
    displayName: 'German',
    shortName: 'DE',
  },
  en_US: {
    code: 'en_US',
    displayName: 'English',
    shortName: 'EN',
  },
  it_IT: {
    code: 'it_IT',
    displayName: 'Italian',
    shortName: 'IT',
  },
  nl_NL: {
    code: 'nl_NL',
    displayName: 'Dutch',
    shortName: 'NL',
  },
} as const;
