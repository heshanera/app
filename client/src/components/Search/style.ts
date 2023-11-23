import styled from 'styled-components';
import { ThemeContextProps } from '../../types';

type Props = {
  theme: ThemeContextProps;
};

export const SearchWrapper = styled.div<Props>`
  .search-input {
    width: 200px;
    padding: 8px;
    border: 1px solid ${({ theme }): string => theme.secondaryColor};
    border-radius: 5px;
    font-size: 12px;
    box-sizing: border-box;

    &:hover,
    &:focus {
      border-color: ${({ theme }): string => theme.primaryColor};
      outline: none;
    }
  }
`;
