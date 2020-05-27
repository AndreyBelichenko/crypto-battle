import styled from 'styled-components';
import fonts from '../../../constants/fonts';
import { breakPointsCard } from '../../../constants/styledConstants';

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
  justify-content: flex-start;
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 4.39%;
  top: 0.83%;
  @media (max-width: ${breakPointsCard.big}px) {
  height: 35px;
  width: 35px;
  }
  @media (max-width: ${breakPointsCard.medium}px) {
  height: 40px;
  width: 40px;
  }
  @media (max-width: ${breakPointsCard.small}px) {
  height: 35px;
  width: 35px;
  }
  @media (max-width: ${breakPointsCard.xsmall}px) {
  height: 23px;
  width: 23px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: 26.98%;
  top: 13.61%;
  @media (max-width: ${breakPointsCard.big}px) {
  height: 53px;
  }
  @media (max-width: ${breakPointsCard.medium}px) {
  height: 64px;
  }
  @media(max-width: ${breakPointsCard.small}px){
  height: 53px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px) {
  top: 15.61%;
  left: 39.98%;
  height: 32px;
  }
`;

export const CryptoCardName = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-weight: normal;
  font-size: 20px;
  font-family: ${fonts.header}
  @media (max-width: ${breakPointsCard.big}px) {
  font-size: 14px;
  }
  @media (max-width: ${breakPointsCard.medium}px) {
  font-size: 20px;
  }
  @media (max-width: ${breakPointsCard.small}px) {
  font-size: 14px;
  }
  @media (max-width: ${breakPointsCard.xsmall}px) {
  font-size: 9px;
  top: 23px;
    }
`;

export const AwardsBlock = styled.div`
  height: 100%;
  position: relative;
  top: -13px;
  left: 16px;
  @media (max-width: ${breakPointsCard.big}px) {
  top: -11px;
  left: 13px;
  }
  @media (max-width: ${breakPointsCard.medium}px) {
  left: 15px;
  }
  @media (max-width: ${breakPointsCard.small}px) {
  padding-left: 36px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px){
  padding-left: 28px;
  }
`;

export const AwardsText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  position: absolute;
  line-height: 1;
  top: 52%;
  left: 23px;
  font-family: ${fonts.header}
  @media(max-width: ${breakPointsCard.big}px) {
  left: 16px;
  font-size: 9px;
  }
  @media(max-width: ${breakPointsCard.medium}px) {
  left: 16px;
  top: 48%;
  font-size: 9px;
  }
  @media(max-width: ${breakPointsCard.small}px) {
  left: 50px;
  top: 48%;
  font-size: 9px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px) {
  left: 37px;
  top: 49%;
  font-size: 7px;
  }
`;

export const UserBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 21px;
  @media(max-width: ${breakPointsCard.medium}px){
  margin-right: -18px;
  }
  @media(max-width: ${breakPointsCard.small}px){
  margin-right: -51px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px){
  padding-left: 0px;
  }
  `;
