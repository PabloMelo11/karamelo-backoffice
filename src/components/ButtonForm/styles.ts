import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #9c27b0;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0.3125rem 1px;
  padding: 12px 30px;
  position: relative;
  font-size: 12px;
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
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${shade(0.1, '#9c27b0')};
  }

  &:hover,
  &:focus {
    box-shadow: 0 0.7em 0.7em -0.5em ${shade(0.1, '#9c27b0')};
  }
`;
