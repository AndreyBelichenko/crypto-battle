import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: auto;
`;

export const KnifesBlock = styled.div`
  width: 100px;
  height: 70px;
  margin-top: -60px;
  position: relative;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 70px;
    height: 50px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 50px;
    height: 30px;
  }
`;

export const KnifeOne = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const KnifeTwo = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(-1, 1);
`;

export const BattleImg = styled.img`
  width: 80px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 45px;
    margin-top: 7px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 30px;
  }
`;

export const WatchBattle = styled(Button)`
  height: 15%;
  padding: 0 5px !important;
  vertical-align: middle;
  font-size: 12px !important;
  text-align: center;
  position: absolute;
  bottom: 5px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 11px !important;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 13%;
    font-size: 10px !important;
    bottom: 2px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 15%;
    font-size: 12px !important;
    bottom: 5px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: auto;
    font-size: 10px !important;
    padding: 2px 5px !important;
  }
`;
