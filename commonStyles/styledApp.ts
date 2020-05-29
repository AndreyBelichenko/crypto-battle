import styled from 'styled-components';
import { Image, Menu } from 'semantic-ui-react';

import { colorSidebar } from '../constants/styledConstants';
import fonts from '../constants/fonts';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 4px;
  min-height: calc(100vh - 125px);
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.75);

  @media (max-width: 767px) {
    min-height: calc(100vh - 85px);
  }
`;

export const AppContainer = styled.div`
  padding: 20px 20px;
  background-attachment: fixed;
  background-position: top center;
  background-image: url('/static/background.png');
  @media (max-width: 767px) {
    padding: 14px 0;
  }
`;

export const MenuItem = styled(Menu.Item)`
  color: ${colorSidebar.menuItem} !important;
`;

export const ItemCreateBattle = styled.div`
  border-bottom: 1px solid ${colorSidebar.underlineTitle};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0 20px;
`;

export const ItemMenuImage = styled.div`
  width: 25%;
  margin-left: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const ItemMenuImageHover = styled.div`
  width: 25%;
  margin-left: 10px;
  display: none;
  justify-content: flex-end;
`;

export const ItemMenuName = styled.div`
  height: 100%;
  margin-left: 20px;
  font-size: 20px;
  font-family: ${fonts.header};
`;

export const ItemMenuWrapper = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${colorSidebar.underlineTitle};
  }

  &:hover ${ItemMenuImage} {
    display: none;
  }

  &:hover ${ItemMenuImageHover} {
    display: flex;
  }

  &:hover ${ItemMenuName} {
    color: ${colorSidebar.menuItemHoverText};
  }
`;

export const StyledCloseButton = styled(Image)`
  top: 5px;
  right: 12px;
  cursor: pointer;
  position: absolute !important;
  width: 10px !important;
`;

export const StyleModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;
  background: transparent;
`;

export const ToastWrapper = styled.div`
  position: absolute;
`;

export const LoaderAuthWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
