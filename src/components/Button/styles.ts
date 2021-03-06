import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    background: #f18b8c;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: ${theme.colors.greyStrong};
    width: 100%;
    font-weight: 500px;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, theme.colors.primary)};
    }
  `}
`;
