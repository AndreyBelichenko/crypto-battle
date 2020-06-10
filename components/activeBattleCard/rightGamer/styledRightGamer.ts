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
  padding: 5px 5px 5px 10px;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    padding: 5px 0;
  }
`;

export const AvatarBlock = styled.div`
  height: 60px;
  width: 60px;
  margin-top: 5px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 40px;
    width: 40px;
  }
`;

export const ImageAvatar = styled.img`
  height: 100%;
  width: 100%;
`;

export const AwardsBlock = styled.div`
  width: 15%;
  min-width: 80px;
  position: absolute;
  top: 2px;
  right: 2px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    min-width: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    display: none;
  }
`;

export const UserName = styled.p`
  text-align: center;
  position: absolute;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  right: 5px;
  left: 0;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    font-size: 11px;
  }
`;

export const UserNameWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
`;

export const CryptoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 70%;
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 65%;
  }
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 50%;
  }
`;

export const CryptoCardMain = styled.div<CryptoCardMainProps>`
  height: 100%;
  width: 50%;
  min-width: 220px;
  position: relative;
  background: white;
  border: 1px solid ${(props: any) => (props.mainColor ? props.mainColor : projectColors.defaultBorderColor)};
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 10px;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    min-width: 200px;
    height: 80%;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 90%;
    height: 70%;
    min-width: 110px;
    max-width: 150px;
    margin-top: 5px;
  }

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 65%;
    width: 50%;
    min-width: 50px;
  }
`;

export const CryptoCardPerson = styled.div`
  height: 85%;
  max-width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: right;
`;

export const ImageCardPerson = styled.img`
  height: 100%;
  max-width: 100%;
  transform: scale(-1, 1);
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 70%;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 100%;
    width: 70%;
  }
`;

export const ImageCardLogoLeft = styled.img`
  height: 90px;
  width: 90px;
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 50px;
    width: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    height: 20px;
    width: 20px;
  }
`;

export const CryptoCardName = styled.div<CryptoCardNameProps>`
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: black;
  font-family: ${fonts.header};
  font-weight: bold;
  font-size: 24px;
  text-shadow: -0.5px -0.5px 0 ${(props) => borderColor(props)}, 0.5px -0.5px 0 ${(props) => borderColor(props)},
    -0.5px 0.5px 0 ${(props) => borderColor(props)}, 0.5px 0.5px 0 ${(props) => borderColor(props)};

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    font-size: 12px;
    left: 2px;
    bottom: 0;
  }
`;

export const ChartBlock = styled.div`
  width: 100%;
  height: 60%;
  padding: 5px 10px 5px 5px;
`;

export const AwardText = styled.p`
  position: absolute;
  top: 50%;
  right: 30px;
  font-weight: bold;
  font-size: 18px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 16px;
    top: 45%;
    right: 15px;
  }
`;
