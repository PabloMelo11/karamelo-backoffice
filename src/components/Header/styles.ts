import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  position: relative;

  img {
    height: 48px;
  }

  div {
    margin-right: 35px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 0;
  }
`;
