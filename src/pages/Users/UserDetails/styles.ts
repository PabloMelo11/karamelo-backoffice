import styled from 'styled-components';

export const ContainerGrid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 20px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'orders info'
    'products info';

  .one {
    background: #000;
    width: 100%;
    height: 100%;
    grid-area: info;
  }

  .two {
    background: #543423;
    width: 100%;
    height: 100%;
    grid-area: orders;
  }

  .three {
    background: #989540;
    width: 100%;
    height: 100%;
    grid-area: products;
  }
`;
