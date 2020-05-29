import styled from 'styled-components';

import fonts from '../../../constants/fonts';
import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const GamerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
`;

export const CryptoCard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin-right: 3px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    margin-right: 0px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: -5.02%;
  top: 14.61%;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 53px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 64px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 53px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    left: -10.01%;
    top: 17.61%;
    height: 32px;
  }
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 21.39%;
  top: 0.83%;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 40px;
    width: 40px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 23px;
    width: 23px;
  }
`;

export const CryptoCardName = styled.div`
  position: absolute;
  right: 2px;
  bottom: 5px;
  font-weight: normal;
  font-size: 20px;
  font-family: ${fonts.header} @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 14px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 20px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 14px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 9px;
    top: 23px;
  }
`;

export const AwardsBlock = styled.div`
  height: 100%;
  position: relative;
  left: -14px;
  top: -13px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    top: -11px;
    left: -19px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    left: -13px;
  }
`;

export const UserBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -44px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    margin-left: -41px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin-left: -43px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    margin-left: -35px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    margin-left: -23px;
  }
`;
