import styled from 'styled-components';
import { ThemeContextProps } from '../../../types';

type Props = {
  theme: ThemeContextProps;
};

export const CategoriesListWrapper = styled.div<Props>`
  .categories-list-view {
    display: block;
  }

  .categories-dropdown-view {
    display: none;
  }

  @media only screen and (max-width: 650px) {
    .categories-list-view {
      display: none;
    }

    .categories-dropdown-view {
      display: block;
    }
  }

  .category-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 8px 14px;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        background: ${({ theme }): string => theme.secondaryColor};
        border-radius: 8px;
      }
    }

    .active {
      background: ${({ theme }): string => theme.secondaryColor};
      border-radius: 8px;
    }
  }

  .categories-dropdown-view {
    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-color: transparent;
      border: 1px solid ${({ theme }): string => theme.secondaryColor};
      border-radius: 5px;
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }

    select:hover {
      border-color: ${({ theme }): string => theme.primaryColor};
    }
  }
`;
