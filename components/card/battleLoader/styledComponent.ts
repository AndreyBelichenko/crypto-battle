import styled from 'styled-components';

import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: auto;
`;

export const BattleImg = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 30px;
    height: 30px;
  }
`;
