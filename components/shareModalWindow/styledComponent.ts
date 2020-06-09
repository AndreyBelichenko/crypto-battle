import styled from 'styled-components';

import fonts from '../../constants/fonts';
import { breakPointsActiveCard, projectColors } from '../../constants/styledConstants';
import { Icon, Modal, Container } from 'semantic-ui-react';

export const ShareButton = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${projectColors.modalCreateConnectMainColor};
    cursor: pointer;
  `;

export const StyleHeaderTitle = styled(Modal.Header)`
  font-size: 24px !important;
  font-weight: bold !important;
  margin: 0 10% !important;
  border: none!important;
`;

export const StyledCloseButton = styled(Icon)`
  position: absolute;
  right: 14px;
  top: 20px;
  cursor: pointer;
`;

export const ButtonBlock = styled.div`
   padding: 15px;
   display: flex;
   justify-content: center;
   margin-top: 20px;
  `;

export const ButtonItem = styled.div`
   &:first-child {
    margin: 0 30px 0 0;
  }

  &:last-child {
    margin: 0 0 0 30px;
  }
  `;

export const TitleBlock = styled(Container)`
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  padding-top: 15px;
`;

export const ShareButtonModal = styled.button`
  width: 37px;
  height: 37px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: ${projectColors.backgroundColor}
  `;

export const ShareIcon = styled.img`
  width:100%;
  height: 100%;
  `;
