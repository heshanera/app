import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import LanguageSelector from '../LanguageSelector';
import { HeaderWrapper } from './style';

const Header: React.FC = () => {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();

  return (
    <HeaderWrapper data-testid="header" theme={theme}>
      <strong>{formatMessage({ id: 'home24', defaultMessage: 'home24' })}</strong>
      <LanguageSelector />
    </HeaderWrapper>
  );
};

export default Header;
