import styled from 'styled-components';

import { breakPointsActiveCard } from '../../../constants/styledConstants';

export const ChartTrigger = styled.div`
  position: absolute;
  right: 5px;
  bottom: 30px;
  cursor: pointer;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    right: 0;
    bottom: 25px;
    width: 20px;
  }
`;
