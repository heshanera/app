import React, { createContext, useContext, ReactNode, useState, ReactElement } from 'react';
import { THEMES } from '../constants/theme';
import { Theme, ThemeContextProps, ThemeMode } from '../types';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const defaultThemeContext: ThemeContextProps = {
  theme: THEMES['light'],
  themeMode: 'light',
  setTheme: () => {},
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [theme, setTheme] = useState<Theme>(defaultThemeContext.theme);
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultThemeContext.themeMode);

  const updateTheme = (newTheme: Theme, newThemeMode: ThemeMode): void => {
    setThemeMode(newThemeMode);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, themeMode, setTheme: updateTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    return defaultThemeContext;
  }
  return context;
};
