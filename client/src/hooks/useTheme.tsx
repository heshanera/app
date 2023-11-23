import React, { createContext, useContext, ReactNode, useState, ReactElement } from 'react';
import { THEMES } from '../constants/theme';
import { Theme, ThemeContextProps, ThemeMode } from '../types';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const defaultThemeContext: ThemeContextProps = {
  theme: THEMES['light'],
  themeMode: 'light',
  setTheme: () => {
    // Default theme context will not have a setter
  },
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

/**
 * Get application theme context.
 * @returns {ThemeContextProps} The theme context containing theme-related values and functions.
 */
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    // if theme is not initialized returning the default theme context
    return defaultThemeContext;
  }
  return context;
};
