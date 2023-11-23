import styled from 'styled-components';

export const ProductListContentWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 240px auto;
    grid-template-areas:
    'sidebar content'
    margin: 6px;

    
    @media only screen and (max-width: 650px) {
        grid-template-columns: auto;
        grid-template-areas: 
          'sidebar'
          'content'
    }
`;
