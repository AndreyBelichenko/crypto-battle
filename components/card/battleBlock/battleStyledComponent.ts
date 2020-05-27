import styled from 'styled-components';

import { breakPointsCard } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: auto;
`;

export const KnifesBlock = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -38px;
  position: relative;
  @media(max-width: ${breakPointsCard.big}px){
  width: 35px;
  height: 35px;
  margin-top: -43px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px) {
  width: 25px;
  height: 25px;
  margin-top: -40px;
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
  height: 80px;
  @media(max-width: ${breakPointsCard.big}px){
  width: 45px;
  height: 45px;
  margin-top: 7px;
  }
  @media(max-width: ${breakPointsCard.medium}px){
  width: 45px;
  height: 45px;
  margin-top: 7px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px) {
  width: 30px;
  height: 30px;
  }
  `;
