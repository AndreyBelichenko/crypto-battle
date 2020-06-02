import styled from 'styled-components';

import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const ChartTrigger = styled.div`
  position: absolute;
  left: 5px;
  bottom: 30px;
  cursor: pointer;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    left: 0;
    bottom: 25px;
    width: 20px;
  }
`;
