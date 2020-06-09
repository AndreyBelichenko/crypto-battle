import styled from 'styled-components';

import { projectColors, breakPointsActiveCard } from '../../../constants/styledConstants';
import fonts from '../../../constants/fonts';

const borderColor = (props: any) => (props.colorBorder ? props.colorBorder : projectColors.btnNameBorder);

interface CryptoCardNameProps {
  colorBorder: string;
}

interface CryptoCardMainProps {
  mainColor: string;
}

export const PlayerHp = styled.div`
  width: 100%;
  margin-right: 5px;
  padding: 5px 10px 5px 5px;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    padding: 5px 0;
  }
`;

export const AvatarBlock = styled.div`
  height: 60px;
  width: 60px;
  margin: 5px 20% 0 0;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    margin: 5px 0 0 0;
    height: 50px;
    width: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 45px;
    width: 45px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin: 5px 0 0 0;
    height: 50px;
    width: 50px;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    margin: 5px 0 0 0;
    height: 55px;
    width: 55px;
  }
`;

export const ImageAvatar = styled.img`
  height: 100%;
  width: 100%;
`;

export const AwardsBlock = styled.div`
  width: 30%;
  min-width: 30px;
  max-width: 40px;
  position: absolute;
  top: 2px;
  right: 2px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 2px;
    min-width: 15px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    right: 2px;
    min-width: 20px;
    max-width: 28px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    top: 6px;
    min-width: 20px;
  }
`;

export const UserName = styled.p`
  text-align: center;
  position: absolute;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 5px;
  right: 0;
  font-weight: bold;
  font-size: 16px;
  margin-right: 15%;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    margin-right: 0;
  }
  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-weight: bold;
    font-size: 12px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-weight: bold;
    font-size: 12px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-weight: bold;
    font-size: 8px;
  }
`;

export const CryptoCardMain = styled.div<CryptoCardMainProps>`
  height: 105%;
  width: 80%;
  min-width: 85px;
  position: relative;
  background: white;
  border: 1px solid ${(props) => (props.mainColor ? props.mainColor : 'red')};
  padding: 5px;
  border-radius: 4px;
  margin-top: -10px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    min-width: 55px;
    max-width: 70px;
  }

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    min-width: 60px;
    max-width: 70px;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    min-width: 60px;
    max-width: 70px;
  }

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    min-width: 45px;
    max-width: 70px;
  }
`;

export const CryptoCardPerson = styled.div`
  height: 85%;
  position: absolute;
  right: 0;
  bottom: 0;

  @media (max-width: ${breakPointsActiveCard.small}px) {
    max-height: 55px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    max-height: 35px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 100%;
  transform: scale(-1, 1);
`;

export const ImageCardLogoLeft = styled.img`
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

export const CryptoCardName = styled.div<CryptoCardNameProps>`
  position: absolute;
  left: 2px;
  bottom: -2px;
  color: black;
  font-family: ${fonts.header};
  font-weight: bold;
  font-size: 18px;
  text-shadow: -0.5px -0.5px 0 ${(props) => borderColor(props)}, 0.5px -0.5px 0 ${(props) => borderColor(props)},
    -0.5px 0.5px 0 ${(props) => borderColor(props)}, 0.5px 0.5px 0 ${(props) => borderColor(props)};

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 14px;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 16px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    font-size: 14px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 9px;
    bottom: -4px;
  }
`;

export const ChartBlock = styled.div`
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    display: none;
  }
  width: 100%;
  height: 60%;
  padding: 5px 10px 5px 5px;
`;
