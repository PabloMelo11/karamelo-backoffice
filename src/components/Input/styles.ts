import styled, { css } from 'styled-components';
import { IContainerProps } from './Props';

import Tooltip from '../Tooltip';

export const Container = styled.div<IContainerProps>`
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 16px;
    width: 100%;
    color: ${({ theme }) => theme.colors.greyInput};

    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    ${props =>
      props.isErrored &&
      props.isFilled &&
      css`
        border-color: ${({ theme }) => theme.colors.red};
      `}

    ${props =>
      props.isFocused &&
      css`
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
      `}

    ${props =>
      props.isFilled &&
      css`
        color: ${({ theme }) => theme.colors.primary};
      `}

    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.colors.frozen};

      &::placeholder {
        color: ${({ theme }) => theme.colors.greyInput};
      }
    }

    svg {
      margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};

    &::before {
      border-color: ${({ theme }) => theme.colors.red} transparent;
    }
  }
`;
