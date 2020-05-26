import styled from 'styled-components';

import { battleColor } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 45%;
  height: 179px;
  padding: 15px;
  @media(max-width: 1920px){
  width: 1920px;
  height: 1080px;
  }
  @media(max-width: 1070px){
  width: 1070px;
  height: 1080px;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 148px;
  background: white;
  display: flex;
  justify-content: row;
  border-radius: 5px;
  border: 1px solid ${battleColor.battleBorderColor};
  box-shadow: 0px 0px 10px  ${battleColor.battleBorderShadow};
  padding: 15px;
  @media(max-width: 1070px){
  height: 140px;
  }
`;

export const BattleBlock = styled.div`
  width: 20%;
  height: 100%;
`;

export const CryptoCardMain = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid red;
  padding: 5px;
  margin-top: -27px;
  @media(max-width: 1200px) {
  width: 75px;
  }
  @media(max-width: 850px) {
  width: 68px;
  }
  @media(max-width: 415px) {
  width: 50px;
  height: 70px;
  }
  @media (max-width: 415px){
    width: 45px;
    height: 70px;
}
`;

export const CryptoCardLogo = styled.div`
  width: 40%;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  width: 90px;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  @media(max-width: 1200px) {
  width: 75px;
  }
  @media(max-width: 850px) {
  width: 68px;
  }
  @media(max-width: 415px) {
  width: 50px;
  height: 15px;
  }
  @media(max-width: 415px) {
  width: 45px;
  }
`;

export const ProgressText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 13px;
  z-index: 2;
  text-align: center;
  font-weight: bold;
  @media(max-width: 415px) {
  font-size: 8px;
  }
`;

export const UserName = styled.p`
  font-weight: normal;
  font-size: 16px;
  @media(max-width: 1070px){
  font-size: 16px;
  }
  @media(max-width: 850px){
  font-size: 13px;
  }
  @media(max-width: 415px) {
  font-size: 8px;
  }
`;
