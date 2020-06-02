import styled from 'styled-components';

import fonts from '../../../constants/fonts';
import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const CryptoCardPerson = styled.div`
  height: 85%;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ImageCardPerson = styled.img`
  height: 100%;
  transform: scale(-1, 1);
`;

export const CryptoCardName = styled.div`
  position: absolute;
  left: 2px;
  bottom: 5px;
  font-weight: normal;
  font-size: 20px;
  font-family: ${fonts.header};

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 14px;
    bottom: 0;
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
  width: 25%;
  position: relative;
  right: 0;
  top: -10px;
  text-align: right;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    top: -10px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    right: 0;
    top: -10px;
  }
`;
