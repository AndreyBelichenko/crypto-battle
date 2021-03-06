import styled from 'styled-components';

import { breakPoints } from '../../../constants/styledConstants';

export const AppButtonBlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const HideButtons = styled.div`
  @media (max-width: ${breakPoints.medium}px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
