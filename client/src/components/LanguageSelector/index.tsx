import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocale } from '../../hooks/useLocale';
import { useTheme } from '../../hooks/useTheme';
import { LanguageSelectorWrapper } from './style';
import { getLanguageSelectorOptions, getLocaleName } from './utils';

const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const [languageOptions, setLanguageOptions] = useState<string[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setLanguageOptions(getLanguageSelectorOptions());
  }, []);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setLocale(event.target.value);
  };

  return (
    <LanguageSelectorWrapper theme={theme} data-testid="language-selector">
      <select id="language-select" value={locale} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <option key={option} value={option}>
            {getLocaleName(option)}
          </option>
        ))}
      </select>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
