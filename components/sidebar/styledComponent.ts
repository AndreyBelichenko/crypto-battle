import styled from 'styled-components';
import { colorSidebar } from '../../constants/styledConstants';
import { List } from 'semantic-ui-react';

export const SideBarWrapper = styled.div`
  min-width: 240px;
  width: 100%;
  padding: 20px 40px;
  background: rgba(255, 245, 215, 0.8);
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.75);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 3px solid ${colorSidebar.underlineTitle};
`;

export const ImageBlock = styled.div`
  width: 12%;
  min-width: 40px;
  max-width: 45px;
  margin-right: 15px;
`;

export const TitleImage = styled.div`
  width: 40px;
  position: absolute;
  right: -35px;
  top: 0;
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
`;
