import styled from 'styled-components';

export const ContainerGrid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 20px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'info orders'
    'info products';

  .perfil {
    grid-area: info;
  }

  .orders {
    grid-area: orders;
  }

  .products {
    grid-area: products;
  }
`;
