import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  height: 100%;
  padding: 9px;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;

  span {
    color: inherit;
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: unset;
    text-transform: none;
  }
`;

export const Content = styled.div`
  background: #999;
  height: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: auto;

  div {
    display: flex;
    background: #fff;
    width: 240px;
    min-width: 240px;
    height: 280px;
    border-radius: 5px;

    & + div {
      margin-left: 12px;
    }
  }
`;
