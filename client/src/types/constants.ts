export type LocaleInfo = {
  readonly code: string;
  readonly displayName: string;
  readonly shortName: string;
};

export type Locales = {
  readonly [key: string]: LocaleInfo;
};
