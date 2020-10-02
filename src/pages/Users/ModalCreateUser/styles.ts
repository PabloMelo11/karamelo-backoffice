import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;

  padding: 16px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
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
      color: #000;
    }
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.greyInput};

  button {
    margin-top: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;

    span {
      color: ${({ theme }) => theme.colors.greyInput};
    }

    & + div {
      margin-top: 20px;
    }
  }
`;
