import styled from 'styled-components';

export const EmptyViewContainer = styled.div`
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .empty-view-header {
    font-size: 25px;
    font-weight: 600;
  }

  .empty-view-subheader {
    font-size: 16px;
    color: #666666;
  }
`;
