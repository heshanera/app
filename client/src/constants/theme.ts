import { Theme, ThemeMode } from '../types';

export const THEMES: Record<ThemeMode, Theme> = {
  light: {
    primaryColor: '#444444',
    secondaryColor: '#dddddd',
  },
  dark: {
    primaryColor: '#000000',
    secondaryColor: '#555555',
  },
} as const;
