import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import { breakPointsActiveCard, projectColors } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 100%;
  }
`;

export const KnifesBlock = styled.div`
  width: 100px;
  height: 100px;
  top: 0;
  position: absolute;

  @media (max-width: ${breakPointsActiveCard.small}px) {
    top: -10px;
    width: 70px;
    height: 70px;
  }
`;

export const BattleDescriptionBlock = styled.div`
  width: 100%;
  height: 85%;
  margin-bottom: 5px;
  border: 1px solid ${projectColors.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  min-width: 100px;
  overflow: scroll;
  border-radius: 4px;
  padding: 5px;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: 100%;
  }

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin-bottom: 10px;
  }
`;
export const BattleInfo = styled.div`
  height: 10%;
  width: 50%;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid ${projectColors.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  background: white;
  top: -25px;
  min-width: 240px;
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    top: -20px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    top: -15px;
  }
`;

export const BattleInfoText = styled.div`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 13px;
    left: 5%;
    right: 60%;
  }
`;

export const BattleInfoBet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 47px;
  height: 100%;

  @media (min-width: ${breakPointsActiveCard.big}px) {
    width: 70px;
  }

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    justify-content: center;
  }
`;

export const BetMount = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 3px;
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 15px;
  }
`;

export const BetCrypto = styled.div`
  font-size: 15px;
  margin-right: 3px;
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 12px;
  }
`;

export const BetCryptoLogo = styled.div`
  width: 20px;
  margin-top: 2px;
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 15px;
  }
`;

export const BattleInfoShare = styled.div`
  width: 20px;
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 15px;
  }
`;

export const ImageFool = styled(Image)`
  width: 100% !important;
  height: 100% !important;
`;
