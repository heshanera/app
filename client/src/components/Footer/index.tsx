import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import { FooterWrapper } from './style';

const Footer: React.FC = () => {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();

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
