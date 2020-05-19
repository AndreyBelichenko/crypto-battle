import styled from 'styled-components';
import { Modal, Dropdown, Icon, Container } from 'semantic-ui-react';

import { color } from '../../constants/colorMatrix';

export const BtnCreate = styled.button`
  background: ${color.pomegranate};
  color: ${color.white};
  border: 0;
  border-radius: 5px;
  min-height: 30px;
  height: 100%;
  padding: 0 15px;
  outline: none;
  cursor: pointer;
  width: 100%;
`;

export const StyleHeaderTitle = styled(Modal.Header)`
  font-size: 24px !important;
  font-weight: bold !important;
  border-bottom: 2px solid ${color.pomegranate}!important;
  margin: 0 10% !important;
`;

export const StyledHeaderHp = styled(Modal.Header)({
  fontSize: '22px',
  marginBottom: '5px',
});

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
