import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f2f2f2;
  min-height: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
  background: #fafafa;
  color: rgb(85, 85, 85);
  width: 100%;
  overflow: hidden;

  font-weight: 300;
  line-height: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 100%;
`;
