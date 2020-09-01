import styled, { css } from 'styled-components';

import { IHeader, IMainModalProps } from './Props';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 9px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.radius.default};
`;

export const Header = styled.div<IHeader>`
  margin: 0 15px;
  margin-top: -21px;
  padding: 15px;
  height: 85px;
  background: ${({ theme }) => theme.modals.purple};
  box-shadow: ${({ theme }) => theme.shadows.purple};
  border-radius: 4px;

  h4 {
    color: #fff;
    margin-top: 0px;
    min-height: auto;
    font-weight: 300;
    text-decoration: none;
  }

  p {
    color: ${({ theme }) => theme.colors.sub};
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.default};
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  margin: 40px 15px 12px;
`;

export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
