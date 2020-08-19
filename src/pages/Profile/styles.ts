import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

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

export const ContentGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;

export const ContentInformations = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormInformations = styled.div`
  position: relative;
  width: 100%;

  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const Header = styled.div`
  margin: 0 15px;
  margin-top: -21px;
  padding: 15px;
  height: 85px;
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(156, 39, 176, 0.4);
  border-radius: 4px;

  h4 {
    color: #fff;
    margin-top: 0px;
    min-height: auto;
    font-weight: 300;
    text-decoration: none;
  }

  p {
    color: rgba(255, 255, 255, 0.62);
    margin: 0;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ContentForm = styled.div`
  margin: 40px 15px 12px 15px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentMain = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #999;
`;
