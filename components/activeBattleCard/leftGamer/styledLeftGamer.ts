import styled from 'styled-components';
import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const CryptoCardPerson = styled.div`
  position: absolute;
  width: 65%;
  left: 0;
  bottom: 0;
`;
export const CryptoCardName = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: ${breakPointsActiveCard.massive}px) {
    font-size: 19px;
  }
  @media (max-width: ${breakPointsActiveCard.huge}px) {
    font-size: 18px;
  }
  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 15px;
    right: 2px;
    bottom: 0;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 14px;
    right: 2px;
    bottom: 0;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 17px;
  }
  @media (max-width: ${breakPointsActiveCard.tiny}px) {
    font-size: 16px;
    right: 2px;
    bottom: 0;
  }
  @media (max-width: ${breakPointsActiveCard.mini}px) {
    font-size: 12px;
    right: 2px;
    bottom: 0;
  }
`;

export const ChartTrigger = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    bottom: 25px;
    width: 20px;
  }
`;
