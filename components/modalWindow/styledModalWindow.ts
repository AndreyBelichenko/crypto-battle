import styled from 'styled-components';
import { Modal, Dropdown, Icon, Container, Button } from 'semantic-ui-react';

import { color } from '../../constants/colorMatrix';
import fonts from '../../constants/fonts';
import { breakPointsActiveCard } from '../../constants/styledConstants';

export const Btn = styled(Button)`
  background: ${color.pomegranate};
  color: ${color.pomegranate};
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
  border-bottom: 2px solid ${color.pomegranate}!important;
  margin: 0 10% !important;
`;

export const StyledHeaderHp = styled(Modal.Header)`
  font-size: 22px;
  margin-bottom: 5px;

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    font-size: 18px;
  }
`;

export const StyledFooterModal = styled(Modal.Content)({
  border: `1px solid ${color.pomegranate}!important`,
});

export const StyledDropDown = styled(Dropdown)`
  border: 1px solid ${color.pomegranate}!important;

  & > div div {
    border-bottom: 1px solid ${color.pomegranate}!important;
  }

  & .menu {
    border: 1px solid ${color.pomegranate}!important;
  }
`;

export const StyledCloseButton = styled(Icon)`
  position: absolute;
  right: 30px;
  top: 20px;
  cursor: pointer;
`;

export const StyledConnectWrapper = styled(Container)`
  position: absolute;
  right: 30px;
  bottom: 5px !important;
  width: 100px !important;
  height: 35px;
`;

export const UnderNameBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    justify-content: center;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 15%;
`;

export const CreateWrapper = styled.div`
  height: 100%;
  margin: 0 20px;
`;
