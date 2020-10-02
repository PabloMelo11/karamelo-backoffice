import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 56px;

  padding: 20px;

  background: ${({ theme }) => theme.modals.red};
  border-radius: 5px 5px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.white};
  }

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
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.greyInput};
  padding: 20px;

  button {
    margin-top: 20px;
  }

  .button-save {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > span {
      color: ${({ theme }) => theme.colors.greyInput};
      margin-bottom: 6px;
    }

    & + div {
      margin-top: 20px;
    }
  }
`;
