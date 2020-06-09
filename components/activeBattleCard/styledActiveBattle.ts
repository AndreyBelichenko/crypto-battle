import styled from 'styled-components';

import { projectColors, breakPointsActiveCard } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 100%;
  height: 350px;
  padding: 35px 0 0 10px;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 450px;
  }
  @media (max-width: ${breakPointsActiveCard.big}px) {
    //height: 220px;
    // height: 370px;
    height: 350px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    //height: 230px;
    //height: 390px;
    height: 370px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    //height: 180px;
    height: 400px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    //height: 180px;
    height: 310px;
  }
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
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 50%;
  }
`;

export const BattleBlock = styled.div`
  width: 40%;
  height: 100%;
`;

export const ActiveCardWrapper = styled.div`
  height: 100%;
`;

export const GamerBlock = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: auto;
    padding: 0 10px;
  }
`;

export const PlayerBlock = styled.div`
  width: 100%;
  height: 35%;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 50%;
  }
`;

export const PlayerInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;

export const UserBlock = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    display: none;
  }

  @media (max-width: ${breakPointsActiveCard.big}px) {
    max-width: 110px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    max-width: 110px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    max-width: 70px;
  }
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

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    display: flex;
    padding: 5px 5px 0 10px;
  }
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
  width: 100%;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 15px;
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
  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 10px;
    margin-top: -2px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    margin-top: -2px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    margin-top: -2px;
  }
`;

export const DownChartsBlock = styled.div`
  padding: 5px;
  display: none;
  height: 50%;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ChartDownBlock = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 2px;
  border: 1px solid #727272;
  box-sizing: border-box;
`;
