import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import color from '../../constants/colorMatrix';

export const BlockHeader = styled(Header)`
  margin: 0!important;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${color.black};
`;

export const LogoWrapper = styled.div`
  width: 20%;
    `;

export const NavBarWrapper = styled.div`
  width: 60%;
    `;

export const BtnWrapper = styled.div`
  width: 20%;
    `;
