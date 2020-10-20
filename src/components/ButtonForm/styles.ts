import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { IButtonProps } from './Props';

const backgroundColor = {
  purple: '#ab47bc',
  red: '#ef5350',
  green: '#66bb6a',
  white: '#fff',
  blue: '#26c6da',
};

export const Container = styled.button<IButtonProps>`
  height: 38px;
  width: 132px;
  background-color: ${props => backgroundColor[props.background || 'purple']};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  margin: 0.3125rem 1px;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.small};
  min-width: auto;
  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14),
    0 3px 1px -2px rgba(153, 153, 153, 0.2),
    0 1px 5px 0 rgba(153, 153, 153, 0.12);
  min-height: auto;
  text-align: center;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.default};
  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props =>
      props.background
        ? shade(0.1, backgroundColor[props.background])
        : shade(0.1, backgroundColor.purple)};
  }

  &:hover {
    box-shadow: 0 0.7em 0.7em -0.5em ${props => (props.background ? shade(0.1, backgroundColor[props.background]) : shade(0.1, backgroundColor.purple))};
  }
`;
