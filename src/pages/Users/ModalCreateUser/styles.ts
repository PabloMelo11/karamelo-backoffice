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

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    svg {
      color: #fff;
    }
  }
`;
