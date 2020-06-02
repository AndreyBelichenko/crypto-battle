import styled from 'styled-components';

import { breakPointsActiveCard, activeBattleColor } from '../../../constants/styledConstants';

export const CryptoCardPerson = styled.div`
  position: absolute;
  height: 80%;
  left: 0;
  bottom: 0;
  z-index: 1;
`;
export const CryptoCardName = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  z-index: 2;
  -webkit-text-stroke: 0.3px ${activeBattleColor.processTextColor};

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
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 11px;
    right: 2px;
    bottom: 0;
  }
`;

export const ChartTrigger = styled.div`
  position: absolute;
  right: 5px;
  bottom: 30px;
  cursor: pointer;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    bottom: 25px;
    width: 20px;
  }
`;
