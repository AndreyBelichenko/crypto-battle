import styled from 'styled-components';

import { projectColors, breakPointsActiveCard } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  padding: 10px 0 0 10px;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${projectColors.battleBorderColor};
  box-shadow: 0 10px 11px -7px rgba(0, 0, 0, 0.75);
`;

export const MainDivContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 50%;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 35%;
  }
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 35%;
  }
`;

export const BattleBlock = styled.div`
  width: 35%;
  height: 100%;
`;

export const ActiveCardWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const GamerBlock = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    padding: 2px;
  }
`;

export const PlayerBlock = styled.div`
  width: 100%;
  height: 30%;

  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 30%;
  }

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 50%;
    padding: 0;
  }
`;

export const PlayerInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;

export const UserBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const UserBlockAdapt = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 60%;
  padding: 5px 5px 5px 10px;
`;

export const CryptoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const UserNameWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    display: none;
  }
`;

export const CryptoCardLogo = styled.div`
  width: 100%;
  position: relative;
`;

export const CryptoCardHp = styled.div`
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  width: 45%;
  margin-bottom: 10px;
  min-width: 220px;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    min-width: 200px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 90%;
    min-width: 110px;
    max-width: 150px;
  }
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: 50%;
    min-width: 60px;
    height: 15px;
    margin-bottom: 0;
  }
`;

export const ProgressText = styled.div`
  width: 100%;
  position: absolute;
  font-size: 14px;
  z-index: 2;
  text-align: center;
  font-weight: bold;
  margin-top: 2px;
  @media (max-width: 520px) {
    margin-top: -2px;
    font-size: 10px;
  }
`;

export const DownChartsBlock = styled.div`
  display: flex;
  padding: 5px;
  height: 50%;
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 50%;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 65%;
  }

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 65%;
    display: block;
  }
`;

export const ChartDownBlock = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 2px;
  border: 1px solid #727272;
  box-sizing: border-box;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 50%;
    width: 100%;
  }
`;
