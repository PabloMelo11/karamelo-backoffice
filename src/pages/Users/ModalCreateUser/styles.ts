import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 58px;
  background: ${({ theme }) => theme.modals.red};
  padding: 9px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 3px;
  }

  button {
    background: transparent;
    border: 0;
    transition: background-color 0.2s;
    border-radius: 50%;
    padding: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  color: #000;
  padding: 34px 12px 16px;

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
