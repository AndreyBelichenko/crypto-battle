import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { breakPointsActiveCard, projectColors } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: 100%;
  }
`;

export const KnifesBlock = styled.div`
  width: 25px;
  height: 25px;
  top: 65px;
  position: absolute;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    top: 30px;
  }

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    top: 30px;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    top: 30px;
  }

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    top: 25px;
  }
`;

export const BattleDescriptionBlock = styled.div`
  width: 95%;
  height: 75%;
  margin-bottom: 5px;
  border: 1px solid ${projectColors.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  min-width: 100px;
  overflow: scroll;
  border-radius: 4px;
  padding: 5px;

  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: 98%;
  }

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    margin-bottom: 10px;
  }
`;

export const KnifeOne = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
`;

export const KnifeTwo = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  transform: scale(-1, 1);
`;

export const BattleInfo = styled.div`
  height: 15%;
  width: 95%;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 1px solid ${projectColors.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    width: 98%;
  }
`;

export const BattleInfoText = styled.div`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  left: 5px;
  right: 55%;

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 13px;
  }
`;

export const BattleInfoBet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  min-width: 47px;
  margin: auto 20% auto auto;
  @media (max-width: ${breakPointsActiveCard.hiddenChart}px) {
    justify-content: center;
  }
  @media (min-width: ${breakPointsActiveCard.big}px) {
    width: 70px;
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
  height: 50%;
  @media (min-width: ${breakPointsActiveCard.big}px) {
    height: 80%;
  }
`;

export const BattleInfoShare = styled.div`
  position: absolute;
  height: 50%;
  right: 5px;
`;
