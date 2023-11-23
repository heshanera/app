import styled from 'styled-components';
import { ThemeContextProps } from '../../types';
import { getInvertedColor } from '../../utils/colorUtils';

type Props = {
  theme: ThemeContextProps;
};

export const HeaderWrapper = styled.div<Props>`
  grid-area: header;
  background-color: ${({ theme }): string => theme.primaryColor};
  padding: 16px 20px;
  border-radius: 8px;
  color: ${({ theme }): string => getInvertedColor(theme.primaryColor)};
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
