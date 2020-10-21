import styled, { css } from 'styled-components';

interface ITdStatus {
  status: string;
}

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
  }

  .orders {
    grid-area: orders;
  }

  .products {
    grid-area: products;
  }

  .categories {
    grid-area: categories;
  }
`;

export const Container = styled.div`
  width: 100%;

  height: 100%;
  max-height: 740px;
  padding: 15px 0;

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const Content = styled.div`
  height: 250px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  span {
    color: inherit;
    margin: 0;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: unset;
    text-transform: none;
  }

  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0;
    border-spacing: 0;
    border-collapse: collapse;
    background-color: transparent;

    thead {
      display: table-header-group;
      color: ${({ theme }) => theme.colors.grey999};
      vertical-align: middle;
      border-color: inherit;

      th,
      td,
      span {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        background: #fff;
        top: 0;
        margin: 0;
        word-wrap: normal;
        white-space: nowrap;
        z-index: 1;
      }

      tr {
        color: inherit;
        height: 56px;
        display: table-row;
        outline: none;
        vertical-align: middle;
        border-spacing: 0;
        border-collapse: collapse;

        th {
          padding: 12px 8px;
          font-weight: 300;
          line-height: 1.42857143;
          vertical-align: middle;
          border-spacing: 0;
          border-collapse: collapse;
          text-align: start;
        }
      }
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      tr:first-child {
        border-top: ${({ theme }) => theme.borders.default};
        border-bottom: ${({ theme }) => theme.borders.default};
      }

      tr {
        position: -webkit-sticky;
        position: sticky;
        left: 0;
      }

      tr {
        color: inherit;
        height: 48px;
        display: table-row;
        outline: none;
        vertical-align: middle;
        cursor: pointer;
        transition: 0.2s background-color 0.1s;

        &:hover {
          background-color: #fafafa;
        }

        & + tr {
          border-bottom: ${({ theme }) => theme.borders.default};
        }

        td,
        span {
          padding: 12px 8px;
          font-weight: 300;
          font-size: 1.4rem;
          line-height: 1.42857143;
          vertical-align: middle;
          color: #000000de;
        }
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 100%;

    > span {
      color: ${({ theme }) => theme.colors.greyInput};
    }

    & + div {
      margin-left: 20px;
    }

    @media (max-width: 980px) {
      & + div {
        margin-left: 0;
        margin-top: 8px;
      }
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const TdStatus = styled.td<ITdStatus>`
  ${props =>
    props.status === 'pending' &&
    css`
      span {
        background-color: ${({ theme }) => theme.colors.yellow_primary};
        border-radius: 8px;
        padding: 6px 18px !important;
      }
    `}

  ${props =>
    props.status === 'in_progress' &&
    css`
      span {
        background-color: ${({ theme }) => theme.colors.blue_tirth};
        border-radius: 8px;
        padding: 6px 18px !important;
      }
    `}

    ${props =>
      props.status === 'done' &&
      css`
        span {
          background-color: ${({ theme }) => theme.colors.green_primary};
          border-radius: 8px;
          padding: 6px 18px !important;
        }
      `}

    ${props =>
      props.status === 'finished' &&
      css`
        span {
          background-color: ${({ theme }) => theme.colors.green_secundary};
          border-radius: 8px;
          padding: 6px 18px !important;
        }
      `}

    ${props =>
      props.status === 'canceled' &&
      css`
        span {
          background-color: ${({ theme }) => theme.colors.redForm};
          border-radius: 8px;
          padding: 6px 18px !important;
        }
      `}
`;
