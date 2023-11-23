import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '../constants/locales';
import { LocaleContextType, LocaleMessages } from '../types';
import { extractLanguage } from '../utils/localeUtils';

import germanMessages from '../locales/de_DE.json';
import englishMessages from '../locales/en_US.json';
import italianMessages from '../locales/it_IT.json';
import dutchMessages from '../locales/nl_NL.json';

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const defaultLocaleContext: LocaleContextType = {
  locale: LOCALES.de_DE.code,
  setLocale: () => {},
};

type LocaleProviderProps = {
  children: ReactNode;
};

const messagesMap: LocaleMessages = {
  de_DE: germanMessages,
  en_US: englishMessages,
  it_IT: italianMessages,
  nl_NL: dutchMessages,
};

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>(LOCALES.de_DE.code);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={extractLanguage(locale)} defaultLocale="de" messages={messagesMap[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    return defaultLocaleContext;
  }
  return context;
};
