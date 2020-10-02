import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  > span {
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
  padding: 18px 15px;
`;

export const ContentGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'info main';

  .info {
    grid-area: info;
  }

  .main {
    grid-area: main;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'main'
      'info';
  }
`;

export const ContentInformations = styled.div`
  width: 100%;

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

  @media (max-width: 1250px) {
    flex-direction: column;
  }

  div {
    width: 100%;

    span {
      color: ${({ theme }) => theme.colors.greyInput};
    }

    & + div {
      margin-left: 20px;
    }

    @media (max-width: 1250px) {
      & + div {
        margin-left: 0;
        margin-top: 8px;
      }
    }
  }
`;

export const ContentMain = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainInformations = styled.div`
  position: relative;
  width: 100%;

  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;
  top: -24px;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;

    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #ab47bc;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
    &:hover {
      background: ${shade(0.2, '#ab47bc')};
    }
  }
`;

export const Description = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  h6 {
    font-weight: 300;
    line-height: 1.5em;
    font-size: 1em;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    margin: 14px 0;
    text-align: center;
  }
`;
