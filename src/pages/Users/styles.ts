import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IButton {
  disabled?: boolean;
  background?: boolean;
}

export const Container = styled.div`
  height: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      td {
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

export const ContentTable = styled.div`
  height: calc(100% - 84px);
  overflow: auto;
  margin-top: 30px;

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

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
`;

export const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const ButtonNext = styled.button<IButton>`
  background: transparent;
  border: 0;
  margin-left: 9px;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  svg {
    color: ${({ theme }) => theme.colors.blue_primary};

    &:hover {
      color: ${({ theme }) => shade(0.1, theme.colors.blue_primary)};
    }
  }

  ${props =>
    props.disabled &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.grey};

        &:hover {
          color: ${({ theme }) => shade(0.1, theme.colors.grey999)};
        }
      }
    `}
`;

export const FirstPage = styled.button<IButton>`
  background: ${({ theme }) => theme.colors.blue_primary};
  border: 0;
  color: ${({ theme }) => theme.colors.white};

  width: 28px;
  height: 28px;
  border-radius: 50%;

  & + button {
    margin-left: 9px;
  }

  ${props =>
    props.background &&
    css`
      background: ${({ theme }) => theme.colors.grey};

      &:hover {
        background: ${({ theme }) => shade(0.1, theme.colors.grey999)};
      }
    `}
`;

export const SecundaryPage = styled.button<IButton>`
  background: ${({ theme }) => theme.colors.blue_primary};
  border: 0;
  color: ${({ theme }) => theme.colors.white};

  width: 28px;
  height: 28px;
  border-radius: 50%;

  ${props =>
    props.background &&
    css`
      background: ${({ theme }) => theme.colors.grey};

      &:hover {
        background: ${({ theme }) => shade(0.1, theme.colors.grey999)};
      }
    `}
`;

export const ButtonPrevious = styled.button<IButton>`
  background: transparent;
  border: 0;
  margin-right: 9px;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  svg {
    color: ${({ theme }) => theme.colors.blue_primary};
  }

  svg {
    color: ${({ theme }) => theme.colors.blue_primary};

    &:hover {
      color: ${({ theme }) => shade(0.1, theme.colors.blue_primary)};
    }
  }

  ${props =>
    props.disabled &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.grey};

        &:hover {
          color: ${({ theme }) => shade(0.1, theme.colors.grey999)};
        }
      }
    `}
`;
