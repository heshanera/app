import styled from 'styled-components';

type Props = {
  height?: string;
  width?: string;
  borderRadius?: string;
};

export const PlaceholderWrapper = styled.div<Props>`
  .placeholder {
    width: ${({ width }): string => width || '100px'};
    height: ${({ height }): string => height || '100px'};
    background-color: #dddddd;
    border-radius: ${({ borderRadius }): string => borderRadius || '0px'};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes placeholder-animation {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  .placeholder.animated {
    animation: placeholder-animation 1.5s infinite;
  }
`;
