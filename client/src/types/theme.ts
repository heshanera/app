export type ThemeMode = 'light' | 'dark';

export type Theme = {
  primaryColor: string;
  secondaryColor: string;
};

export type Themes = {
  readonly [key: string]: Theme;
};

export type ThemeContextProps = {
  theme: Theme;
  themeMode: ThemeMode;
  setTheme: (theme: Theme, themeMode: ThemeMode) => void;
};
