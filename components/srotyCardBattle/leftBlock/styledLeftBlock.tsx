import styled from 'styled-components';
import fonts from '../../../constants/fonts';
import { breakPointsActiveCard, cryptoColors, storyColor } from '../../../constants/styledConstants';

const textBorderColor = (props: any) => (props.colorBorder ? props.colorBorder : cryptoColors.borderTextBlack);

interface CryptoCardNameProps {
  colorBorder: string;
}

interface GamerBlockLeftProps {
  statusPlayer: boolean;
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
    font-size: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 14px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 9px;
    bottom: -4px;
  }
`;

export const AwardsBlock = styled.div`
  height: 100%;
  min-width: 55px;
  width: 25%;
  position: relative;
  left: 0;
  top: -10px;
  text-align: right;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    top: -10px;
    max-width: 60px;
    min-width: 45px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    right: 0;
    top: -10px;
    min-width: 40px;
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

export const ImageSword = styled.img`
  position: absolute;
  top: -13px;
  right: -15px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 40px;
    right: -10px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 40px;
    right: -10px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 45px;
    right: -15px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 35px;
    right: -13px;
  }
`;

export const GamerBlockLeft = styled.div<GamerBlockLeftProps>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  border-style: solid;
  border-color: ${(props) => (props.statusPlayer ? storyColor.winnerColor : storyColor.loserColor)};
  border-width: 2px 0 2px 2px;
  border-radius: 5px 0 0 5px;
  padding: 15px 8% 15px 5px;
`;
