import styled from 'styled-components';

import { breakPointsActiveCard, projectColors } from '../../constants/styledConstants';

interface ShareButtonProps {
  big: boolean;
}

export const ShareButton = styled.img<ShareButtonProps>`
  height: ${(props) => (props.big ? 20 : 30)}px;
  width: ${(props) => (props.big ? 20 : 30)}px;
  border-radius: 50%;
  background: ${projectColors.modalCreateConnectMainColor};
  cursor: pointer;
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 16px;
    width: 16px;
  }
`;

export const BtnSocShare = styled.div`
  display: flex;
`;

export const BtnSocShareText = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-weight: bold;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
`;
