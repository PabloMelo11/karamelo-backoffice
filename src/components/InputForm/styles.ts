import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface IContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isValue?: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  margin-bottom: 45px;
  flex: 1;

  & + div {
    margin-left: 20px;
  }

  .group {
    position: relative;
    margin-bottom: 45px;
  }

  input {
    width: 100%;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    color: currentColor;
    border-bottom: 1px solid #adadad;
    position: relative;
  }

  input:focus {
    outline: none;
  }

  label {
    font-size: 14px;
    color: #999;
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
        font-size: 14px !important;
        color: #ab47bc !important;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      label {
        top: -20px;
        font-size: 14px !important;
        color: #ab47bc !important;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      label {
        top: -20px;
        font-size: 14px;
        color: #ab47bc;
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
    background: #ab47bc;
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
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
