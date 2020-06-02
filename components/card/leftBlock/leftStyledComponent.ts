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
  left: 0;
  bottom: 0;
`;

export const ImageCardPerson = styled.img`
  height: 100%;
`;

export const CryptoCardName = styled.div<CryptoCardNameProps>`
  position: absolute;
  right: 2px;
  bottom: 0;
  font-weight: normal;
  font-size: 18px;
  color: black;
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

export const AwardsBlock = styled.div`
  height: 100%;
  width: 25%;
  position: relative;
  left: 0;
  top: -10px;
  text-align: left;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    left: 0;
    top: -10px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    left: 0;
    top: -10px;
  }
`;

export const ImageCardLogoLeft = styled.img`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 0;
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
