import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import { ThemeContextProps } from '../../types';
import LanguageSelector from '../LanguageSelector';
import { HeaderWrapper } from './style';

const Header: React.FC = () => {
  const { formatMessage }: { formatMessage: IntlShape['formatMessage'] } = useIntl();
  const { theme }: ThemeContextProps = useTheme();

  return (
    <HeaderWrapper data-testid="header" theme={theme}>
      <strong>{formatMessage({ id: 'home24', defaultMessage: 'home24' })}</strong>
      <LanguageSelector />
    </HeaderWrapper>
  );
};

export default Header;
