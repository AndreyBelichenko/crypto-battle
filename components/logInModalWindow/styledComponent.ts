import styled from 'styled-components';
import { Button, Icon, Modal } from 'semantic-ui-react';

import fonts from '../../constants/fonts';
// import { breakPointsActiveCard } from '../../constants/styledConstants';
import { projectColors } from '../../constants/styledConstants';

export const Btn = styled(Button)`
  background: ${projectColors.modalCreateConnectMainColor};
  color: ${projectColors.modalCreateConnectMainColor};
  font-family: ${fonts.header};
  border: none;
  font-size: 16px !important;
  text-align: center;
  min-height: 30px !important;
  width: 100px !important;
  padding: 6px 0 !important;
  white-space: pre-line !important;
`;

export const StyleHeaderTitle = styled(Modal.Header)`
  font-size: 24px !important;
  font-weight: bold !important;
  border-bottom: 2px solid ${projectColors.modalCreateConnectMainColor}!important;
  margin: 0 10% !important;
`;

export const StyledCloseButton = styled(Icon)`
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
`;
