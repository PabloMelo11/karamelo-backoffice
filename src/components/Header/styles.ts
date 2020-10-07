import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  background: #fff;

  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.06),
    0px 8px 10px 1px rgba(0, 0, 0, 0.042), 0px 3px 14px 2px rgba(0, 0, 0, 0.036);

  img {
    height: 48px;
  }
`;

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 12px;

    color: #666;
    font-size: 1.4rem;
  }

  a {
    background: #000;
    border: 0;

    width: 42px;
    height: 42px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
`;
