import styled from 'styled-components';

import { activeBattleColor } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 100%;
  padding: 35px 15px 0;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${activeBattleColor.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  padding-bottom: 20px;
`;

export const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
`;

export const BattleBlock = styled.div`
  width: 40%;
  height: 100%;
`;

export const GamerBlock = styled.div`
  width: 30%;
  height: 100%;
`;

export const GamerBlockOne = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;

export const CryptoCard = styled.div`
  width: 45%;
  margin-top: -15px;
`;

export const CryptoCardMain = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid red;
  padding: 5px;
`;

export const CryptoCardLogo = styled.div`
  width: 40%;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  margin-top: 10px;
  border-radius: 20px;
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

export const GamerBlockTwo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UserBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const AwardsBlock = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 10px;
  position: relative;
`;

export const AwardsText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  position: absolute;
  line-height: 1;
  top: 60%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
