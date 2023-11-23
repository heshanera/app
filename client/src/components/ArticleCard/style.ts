import styled from 'styled-components';
import { ThemeContextProps } from '../../types';
import { getInvertedColor } from '../../utils/colorUtils';

type Props = {
  theme: ThemeContextProps;
};

export const ArticleCardWrapper = styled.div<Props>`
  border: 1px solid ${({ theme }): string => theme.secondaryColor};
  border-radius: 12px;
  padding: 18px;
  transition:
    background-color 0.3s,
    color 0.3s;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .product-image {
    padding-bottom: 8px;
    border-bottom: 2px solid ${({ theme }): string => theme.secondaryColor};

    img {
      height: 200px;
      width: 200px;
      object-fit: contain;
    }
  }

  .images-list {
    display: flex;
    gap: 10px;

    img {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      object-fit: contain;
      border: 2px solid ${({ theme }): string => theme.secondaryColor};

      &:hover {
        cursor: pointer;
      }
    }

    .active {
      border: 2px solid ${({ theme }): string => theme.primaryColor};
    }
  }

  .product-name {
    text-align: center;
    font-weight: 600;
    min-height: 36px;
  }

  .add-to-cart-button {
    padding: 8px 20px;
    border: 2px solid ${({ theme }): string => theme.primaryColor};
    background-color: transparent;
    color: ${({ theme }): string => theme.primaryColor};
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 18px;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: ${({ theme }): string => theme.primaryColor};
      color: ${({ theme }): string => getInvertedColor(theme.primaryColor)};
    }
  }

  &:hover {
    border: 1px solid ${({ theme }): string => theme.primaryColor};
  }
`;
