import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  background: rgba(0, 0, 0, 0.1);

  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #f18b8c;
      border-color: #f18b8c;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #f18b8c;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
