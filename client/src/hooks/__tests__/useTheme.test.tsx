import React, { ReactElement, ReactNode } from 'react';
import { act, render } from '@testing-library/react';
import { ThemeProvider, useTheme, defaultThemeContext } from '../useTheme';
import { THEMES } from '../../constants/theme';
import { renderHook } from '@testing-library/react-hooks';

describe('ThemeProvider', () => {
  it('renders children with the default theme and mode', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>,
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });
});

describe('useTheme', () => {
  it('provides default theme context when not initialized', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual(defaultThemeContext);
  });

  it('provides correct theme context when initialized', () => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactElement => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual({
      setTheme: expect.any(Function),
      theme: defaultThemeContext.theme,
      themeMode: defaultThemeContext.themeMode,
    });
  });

  it('changes theme correctly', () => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactElement => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setTheme(THEMES.dark, 'dark');
    });

    expect(result.current).toEqual({
      theme: THEMES.dark,
      themeMode: 'dark',
      setTheme: expect.any(Function),
    });
  });
});
