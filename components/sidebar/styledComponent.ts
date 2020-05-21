import styled from 'styled-components';
import { colorSidebar } from '../../constants/styledConstants';
import { Container, List } from 'semantic-ui-react';

export const SideBarWrapper = styled(Container)`
  width: 25% !important;
  border: 1px solid red;
  padding: 20px;
`;

export const SideBar = styled(Container)`
  border: 1px solid red;
  min-height: 80%;
  background: rgba(255, 245, 215, 0.6);
  padding: 20px 40px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 3px solid ${colorSidebar.underlineTitle};
`;

export const ImageBlock = styled.div`
  width: 15%;
  min-width: 55px;
  margin-right: 15px;
`;

export const ImageCountBlock = styled.p`
  padding: 3px 5px;
  border-radius: 5px;
  font-size: 16px;
  background: ${colorSidebar.underlineTitle};
  text-align: center;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 0;
`;

export const ItemList = styled(List.Item)`
  display: flex !important;
  align-items: center;
  position: relative;
  //margin: 0 30px !important;
`;
