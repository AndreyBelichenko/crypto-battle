import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { activeBattleColor, breakPointsActiveCard } from '../../constants/styledConstants';

interface CryptoCardMainProps {
  mainColor: string;
}

export const ParentDiv = styled.div`
  width: 100%;
  height: 300px;
  padding: 35px 0 0 10px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 220px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 180px;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 230px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 180px;
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding-top: 10px;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid ${activeBattleColor.battleBorderColor};
  box-shadow: 0 10px 11px -7px rgba(0, 0, 0, 0.75);
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
  width: 100px;
  height: 170px;
  margin-top: -15px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 70px;
    height: 120px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 50px;
    height: 90px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 70px;
    height: 120px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 50px;
    height: 85px;
  }
`;

export const CryptoCardMain = styled.div<CryptoCardMainProps>`
  height: 65%;
  min-width: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid ${(props) => (props.mainColor ? props.mainColor : 'red')};
  padding: 5px;
  border-radius: 4px;
`;

export const CryptoCardLogo = styled.div`
  width: 50%;
  min-width: 30px;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  margin-top: 10px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 20px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    margin-top: 5px;
    height: 15px;
  }
`;

export const ProgressText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 14px;
  z-index: 2;
  text-align: center;
  font-weight: bold;
  -webkit-text-stroke: 0.5px ${activeBattleColor.processBorderTextColor};
  color: ${activeBattleColor.processTextColor};

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 10px;
    margin-top: -2px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 13px;
    margin-top: 0;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 10px;
    margin-top: -2px;
  }
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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 75px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 65px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 90px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 60px;
  }
`;

export const UserName = styled.p`
  text-align: center;
  position: absolute;
  font-weight: bold;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 5px;
  right: 5px;
  bottom: 5px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 13px;
    bottom: 0;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 12px;
    bottom: 0;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 12px;
    bottom: 0;
  }
`;

export const ImageUser = styled(Image)`
  height: 65% !important;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    margin-bottom: 20px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin-bottom: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    margin-bottom: 20px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    margin-bottom: 20px;
  }
`;

export const ImageAwards = styled(Image)`
  width: 100% !important;
  height: 100% !important;
`;

export const AwardsBlock = styled.div`
  width: 40%;
  height: 95%;
  min-width: 50px;
  min-height: 50px;
  margin-top: 2px;
  position: relative;
`;

export const ActiveCardWrapper = styled.div`
  height: 100%;
`;

export const ImageImg = styled.img`
  height: 100%;
`;
export const UserNameWrapper = styled.div`
  position: relative;
  width: 100%;
`;
