import styled from 'styled-components';

import { color } from '../../constants/colorMatrix';
import { breakPoints } from '../../constants/styledConstants';

export const BlockHeader = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${color.black};
  position: relative;
`;

export const HeaderContainer = styled.header`
  background: ${color.black};
  box-sizing: border-box;
  padding: 0 45px;
  height: 85px;
  display: flex;
  align-items: center;
  @media (max-width: ${breakPoints.large}px) {
    padding: 0 25px;
  }
`;

export const AuthContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

export const SidebarImage = styled.div`
  display: none;
  width: 30px;
  margin-left: 10px;
  @media (max-width: ${breakPoints.medium}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BurgerContainer = styled.div`
  width: 35px;
  cursor: pointer;
`;

export const CloseContainer = styled.div`
  width: 25px;
  cursor: pointer;
`;
