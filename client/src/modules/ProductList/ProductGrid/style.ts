import styled from 'styled-components';

export const ProductGridWrapper = styled.div`
  .product-grid {
    display: grid;
    grid-gap: 26px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .grid-header {
    h2 {
      margin: 0;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 18px 0;
  }
`;
