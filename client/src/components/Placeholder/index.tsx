import React from 'react';
import { PlaceholderWrapper } from './styles';

export type Props = {
  height?: string;
  width?: string;
  borderRadius?: string;
  text?: string;
};

const Placeholder: React.FC<Props> = ({ height, width, borderRadius, text }) => (
  <PlaceholderWrapper height={height} width={width} borderRadius={borderRadius}>
    <div data-testid="placeholder" className="placeholder animated">
      {text && <span>{text}</span>}
    </div>
  </PlaceholderWrapper>
);

export default Placeholder;
