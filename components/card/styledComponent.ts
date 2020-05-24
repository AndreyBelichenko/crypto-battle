import styled from 'styled-components';

import { battleColor } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 45%;
  height: 179px;
  padding: 15px;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: row;
  border-radius: 5px;
  border: 1px solid ${battleColor.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  padding: 15px;

`;

export const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
`;

export const BattleBlock = styled.div`
  width: 20%;
  height: 100%;
`;

export const GamerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
`;

export const GamerBlockOne = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;

export const CryptoCardMain = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid red;
  padding: 5px;
  margin-top: -30px;
`;

export const CryptoCardLogo = styled.div`
  width: 40%;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  width: 100px;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const ProgressText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 13px;
  z-index: 2;
  text-align: center;
  font-weight: bold;
`;

export const UserName = styled.p`
  font-weight: normal;
  font-size: 16px;
`;
