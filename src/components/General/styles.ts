import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { IHeader } from './Props';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 9px 0;
  margin: 0 15px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.radius.default};
`;

const headerTypesColors = {
  purple: css`
    background: ${({ theme }) => theme.modals.purple};
    box-shadow: ${({ theme }) => theme.shadows.purple};
  `,
  red: css`
    background: ${({ theme }) => theme.modals.red};
    box-shadow: ${({ theme }) => theme.shadows.red};
  `,
  yellow: css`
    background: ${({ theme }) => theme.modals.yellow};
    box-shadow: ${({ theme }) => theme.shadows.yellow};
  `,
  green: css`
    background: ${({ theme }) => theme.modals.green};
    box-shadow: ${({ theme }) => theme.shadows.green};
  `,
  blue: css`
    background: ${({ theme }) => theme.modals.blue};
    box-shadow: ${({ theme }) => theme.shadows.blue};
  `,
};

export const Header = styled.div<IHeader>`
  width: 100%;
  margin-top: -72px;
  padding: 15px 0px;
  height: 64px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

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
  overflow: auto;
  height: calc(100vh - 175px);

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

export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavigationCrud = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    color: #fff;
    margin-right: 18px;
    font-weight: 500;
  }

  button {
    border: 0;
    background: transparent;
    color: #fff;
    opacity: 0.8;
    height: 100%;
    padding: 0 24px;
    transition: 0.2s background-color 0.1s;
    border-radius: ${({ theme }) => theme.radius.default};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    & + button {
      margin-left: 6px;
    }

    svg {
      margin-right: 9px;
    }
  }
`;

export const ContentItemsNavigation = styled.div`
  flex: 1;
  display: flex;
`;

const activeClassName = 'active';

export const MenuItem = styled(NavLink).attrs({
  activeClassName,
})`
  border: 0;
  background: transparent;
  color: #fff;
  opacity: 0.8;
  height: 100%;
  padding: 0 24px;
  transition: 0.2s background-color 0.1s;
  border-radius: ${({ theme }) => theme.radius.default};

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 300;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & + a {
    margin-left: 9px;
  }

  svg {
    margin-right: 9px;
  }

  &.${activeClassName} {
    background-color: rgba(255, 255, 255, 0.2);
    opacity: 1;
  }
`;
