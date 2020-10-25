import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .list-users {
    width: 100%;
    height: 6.6rem;
    margin-bottom: 12px;
  }
`;

export const ContainerGrid = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 24px 0;

  display: grid;
  grid-gap: 20px;
  grid-row-gap: 40px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 600px;
  grid-template-areas:
    'orders info'
    'products info'
    'categories info';

  @media (max-width: 1520px) {
    grid-template-columns: 1fr;

    grid-template-areas:
      'info'
      'orders'
      'products'
      'categories';
  }

  .perfil {
    grid-area: info;
    max-height: 33rem;
    min-height: 33rem;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.default};
  }

  .orders {
    grid-area: orders;
    max-height: 33rem;
    min-height: 33rem;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.default};
  }

  .products {
    grid-area: products;
    max-height: 33rem;
    min-height: 33rem;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.default};
  }

  .categories {
    grid-area: categories;
    max-height: 33rem;
    min-height: 33rem;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.default};
  }

  .header {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.frozen};
  }

  .title {
    width: 100%;
    height: 3rem;
  }

  .li {
    width: 100%;
    height: 5rem;
    margin-top: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: 24px;

  .input {
    width: 100%;
    height: 5rem;
  }

  .input + div {
    margin-left: 12px;
  }
`;
