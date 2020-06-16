import styled from 'styled-components';

import fonts from '../../../constants/fonts';
import { breakPointsActiveCard, cryptoColors } from '../../../constants/styledConstants';

const textBorderColor = (props: any) => (props.colorBorder ? props.colorBorder : cryptoColors.borderTextBlack);

interface CryptoCardNameProps {
  colorBorder: string;
}

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

export const CryptoCardName = styled.div<CryptoCardNameProps>`
  position: absolute;
  left: 2px;
  bottom: 0;
  font-weight: bolder;
  font-size: 18px;
  font-family: ${fonts.header};
  text-shadow: -0.5px -0.5px 0 ${(props: any) => textBorderColor(props)},
    0.5px -0.5px 0 ${(props: any) => textBorderColor(props)}, -0.5px 0.5px 0 ${(props: any) => textBorderColor(props)},
    0.5px 0.5px 0 ${(props: any) => textBorderColor(props)};

  @media (max-width: ${breakPointsActiveCard.big}px) {
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
  }
`;

export const ImageCardLogoRight = styled.img`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 0;
  top: -4px;

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

export const AwardsBlock = styled.div`
  height: 100%;
  min-width: 55px;
  width: 25%;
  position: relative;
  right: 0;
  top: -10px;
  text-align: right;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    top: -10px;
    max-width: 60px;
    min-width: 40px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    right: 0;
    top: -10px;
    min-width: 40px;
  }
`;
