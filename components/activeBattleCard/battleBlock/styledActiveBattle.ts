import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { breakPointsActiveCard, activeBattleColor } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const KnifesBlock = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -25px;
  position: relative;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 30px;
    width: 30px;
    margin-top: -15px;
  }

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    width: 50px;
    height: 50px;
    margin-top: -25px;
  }

  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 40px;
    width: 40px;
    margin-top: -20px;
  }

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 30px;
    width: 30px;
    margin-top: -15px;
  }
`;

export const BattleDescriptionBlock = styled.div`
  width: 95%;
  height: 80%;
  margin-bottom: 20px;
  border: 1px solid ${activeBattleColor.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
  min-width: 100px;
  overflow: scroll;
  border-radius: 4px;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 83%;
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
