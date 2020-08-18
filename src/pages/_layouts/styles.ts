import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f2f2f2;
  min-height: 100%;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
  background: #fafafa;
  color: rgb(85, 85, 85);

  font-weight: 300;
  line-height: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  overflow: auto;
  height: 100%;
`;

export const WrapperContent = styled.div`
  width: 100%;
`;
