import styled from 'styled-components';

export const Container = styled.div`
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
      color: ${({ theme }) => theme.colors.red};
      vertical-align: middle;
      border-color: inherit;

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

        td {
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
