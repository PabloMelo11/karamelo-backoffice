import styled, { css } from 'styled-components';

import { IContainerProps } from './Props';

import Tooltip from '../Tooltip';

export const Container = styled.div<IContainerProps>`
  position: relative;
  margin-bottom: 45px;
  flex: 1;
  width: 100%;

  & + div {
    margin-left: 20px;
  }

  @media (max-width: 650px) {
    & + div {
    margin-left: 0px;
  }
  }

  .group {
    position: relative;
    margin-bottom: 45px;
  }

  input {
    width: 100%;
    font-size: 1.8rem;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    color: currentColor;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    position: relative;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')}
  }

  input:focus {
    outline: none;
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey999};
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    min-height: auto;
    text-decoration: none;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }


  ${props =>
    props.isValue &&
    css`
      label {
        top: -20px;
        font-size: 1.4rem !important;
        color: ${props.color === 'green'
          ? props.theme.colors.green
          : props.theme.colors.purple};
      }
    `}

    ${props =>
      props.isFocused &&
      css`
        label {
          top: -20px;
          font-size: 1.4rem !important;
          color: ${
            props.color === 'green'
              ? props.theme.colors.green
              : props.theme.colors.purple
          };
      }
        }
      `}

  ${props =>
    props.isFilled &&
    css`
      label {
        top: -20px;
        font-size: 1.4rem;
        color: ${
          props.color === 'green'
            ? props.theme.colors.green
            : props.theme.colors.purple
        };
      }
      }
    `}

  .bar {
    position: relative;
    display: block;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${props =>
      props.color === 'green'
        ? props.theme.colors.green
        : props.theme.colors.purple};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: absolute;
  top: 12px;
  right: 0;

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
