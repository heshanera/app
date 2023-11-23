import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-template-areas:
    'header'
    'pageContent'
    'footer';
  margin: 6px 30px;
`;
