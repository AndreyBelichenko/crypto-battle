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

export const BattleImg = styled.img`
  width: 70px;
  height: 70px;
  @media(max-width: ${breakPointsCard.big}px){
  width: 40px;
  height: 40px;
  }
  @media(max-width: ${breakPointsCard.xsmall}px){
  width: 30px;
  height: 30px;
  }
  `;
