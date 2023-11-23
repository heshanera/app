import styled from 'styled-components';
import { ThemeContextProps } from '../../types';
import { getInvertedColor } from '../../utils/colorUtils';

type Props = {
  theme: ThemeContextProps;
};

export const FooterWrapper = styled.div<Props>`
  grid-area: footer;
  background-color: ${({ theme }): string => theme.primaryColor};
  text-align: center;
  padding: 10px;
  color: ${({ theme }): string => getInvertedColor(theme.primaryColor)};
  border-radius: 8px;
`;
