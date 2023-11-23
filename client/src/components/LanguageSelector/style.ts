import styled from 'styled-components';
import { ThemeContextProps } from '../../types';
import { getInvertedColor } from '../../utils/colorUtils';

type Props = {
  theme: ThemeContextProps;
};

export const LanguageSelectorWrapper = styled.div<Props>`
  display: flex;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    padding: 4px;
    font-size: 12px;
    border: 1px solid ${({ theme }): string => theme.secondaryColor};
    border-radius: 5px;
    background-color: ${({ theme }): string => getInvertedColor(theme.primaryColor)};
    width: 40px;
    cursor: pointer;
  }

  &::after {
    font-size: 14px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover select,
  &:focus {
    border-color: ${({ theme }): string => theme.primaryColor};
    box-shadow: 0 0 5px rgba(41, 128, 185, 0.5);
  }
`;
