import styled from 'styled-components';

import { breakPointsActiveCard, projectColors } from '../../constants/styledConstants';

export const ShareButton = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${projectColors.modalCreateConnectMainColor};
    cursor: pointer;
    @media ( max-width: ${breakPointsActiveCard.medium}px) {
    height: 17px;
    width: 17px;
    }
  `;
