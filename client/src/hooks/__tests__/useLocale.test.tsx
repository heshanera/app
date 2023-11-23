import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { defaultLocaleContext, LocaleProvider, useLocale } from '../useLocale';

// mocking react-intl
jest.mock('react-intl', () => {
  const IntlProviderMock: React.FC = ({ children }: { children?: ReactNode }): ReactElement => <div>{children}</div>;
  return {
    ...jest.requireActual('react-intl'),
    IntlProvider: IntlProviderMock,
  };
});

describe('useLocale', () => {
  it('provides default locale context when not initialized', () => {
    const { result } = renderHook(() => useLocale());

    expect(result.current).toEqual(defaultLocaleContext);
  });

  it('provides correct locale context when initialized', () => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactElement => (
      <LocaleProvider>{children}</LocaleProvider>
    );
    const { result } = renderHook(() => useLocale(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual({
      locale: 'de_DE',
      setLocale: expect.any(Function),
    });
  });

  it('changes locale correctly', () => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactElement => (
      <LocaleProvider>{children}</LocaleProvider>
    );
    const { result } = renderHook(() => useLocale(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setLocale('en_US');
    });

    expect(result.current).toEqual({
      locale: 'en_US',
      setLocale: expect.any(Function),
    });
  });
});

describe('LocaleProvider', () => {
  it('renders children with IntlProvider', () => {
    const { getByText } = render(
      <LocaleProvider>
        <div>Test Content</div>
      </LocaleProvider>,
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
