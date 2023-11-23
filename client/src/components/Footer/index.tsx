import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import { ThemeContextProps } from '../../types';
import { FooterWrapper } from './style';

const Footer: React.FC = () => {
  const { formatMessage }: { formatMessage: IntlShape['formatMessage'] } = useIntl();
  const { theme }: ThemeContextProps = useTheme();

  return (
    <FooterWrapper data-testid="footer" theme={theme}>
      {formatMessage({
        id: 'footerMessage',
        defaultMessage: 'All prices are in euros (€) including VAT and shipping costs.',
      })}
    </FooterWrapper>
  );
};

export default Footer;
