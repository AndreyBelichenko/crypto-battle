import styled from 'styled-components';

import { battleColor, breakPointsActiveCard } from '../../constants/styledConstants';

interface CryptoCardMainProps {
  mainColor: string;
}

export const ParentDiv = styled.div`
  width: 45%;
  height: 179px;
  padding: 15px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 1070px;
    height: 1080px;
  }
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 148px;
  background: white;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${battleColor.battleBorderColor};
  -webkit-box-shadow: 0 10px 11px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 10px 11px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0 10px 11px -7px rgba(0, 0, 0, 0.75);
  margin-bottom: 30px;
  padding: 15px 5px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 100px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 80px;
  }
`;

export const BattleBlock = styled.div`
  width: 20%;
  height: 100%;
`;

export const CryptoCardMain = styled.div<CryptoCardMainProps>`
  width: 90px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid ${(props) => (props.mainColor ? props.mainColor : 'red')};
  padding: 5px;
  margin-top: -27px;
  border-radius: 4px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 65px;
    height: 80px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 40px;
    height: 40px;
  }
`;

export const CryptoCardLogo = styled.div`
  width: 100%;
  position: relative;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  width: 90px;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 60px;
    height: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 65px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 40px;
  }
`;

export const UserPhoto = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-bottom: 5px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 45px;
    height: 45px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 35px;
    height: 35px;
  }
`;

export const AvardsImage = styled.img`
  width: 85px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 40px;
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
  -webkit-text-stroke: 0.5px ${battleColor.processBorderTextColor};
  color: ${battleColor.processTextColor};

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

export const UserName = styled.p`
  text-align: center;
  position: absolute;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 5px;
  right: 5px;
  font-weight: normal;
  font-size: 16px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 12px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 12px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 8px;
  }
`;

export const UserNameWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
`;

export const GamerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42%;
  height: 100%;
`;

export const CryptoCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

export const UserBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  position: relative;
  justify-content: space-between;
`;
