import styled from 'styled-components';
import { shade } from 'polished';

export const ContentMain = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentInformations = styled.div`
  width: 100%;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MainInformations = styled.div`
  position: relative;
  width: 100%;
  padding: 120px 0;

  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .avatar {
    position: relative;
    align-self: center;
    top: -30px;

    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  .description {
    width: 155px;
    height: 21px;
  }
`;

export const ContentInformationsMain = styled.div`
  width: 100%;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormInformations = styled.div`
  position: relative;
  width: 100%;
  height: 455px;

  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  .header {
    margin: 0 15px;
    margin-top: -21px;
    padding: 15px;
    height: 85px;
    border-radius: 4px;
  }
`;

export const ContentForm = styled.div`
  margin: 40px 15px 12px 15px;

  .button-update {
    width: 132px;
    height: 38px;
    margin-top: 70px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  .inputs {
    height: 36px;
    width: 100%;

    & + div {
      margin-left: 20px;
    }
  }
`;
