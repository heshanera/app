import React from 'react';
import { EmptyViewContainer } from './style';

type Props = {
  headerText: string;
  subText: string;
};

const EmptyView: React.FC<Props> = ({ headerText, subText }) => {
  return (
    <EmptyViewContainer>
      <div className="empty-view-header">{headerText}</div>
      <div className="empty-view-subheader">{subText}</div>
    </EmptyViewContainer>
  );
};

export default EmptyView;
