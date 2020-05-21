import styled from 'styled-components';
import { colorSidebar } from '../../constants/styledConstants';
import { List } from 'semantic-ui-react';

export const SideBarWrapper = styled.div`
  min-width: 250px;
  min-height: 80vh;
  height: 100%;
  border: 1px solid red;
  padding: 20px 40px;
  background: rgba(255, 245, 215, 0.8);
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 3px solid ${colorSidebar.underlineTitle};
`;

export const ImageBlock = styled.div`
  width: 12%;
  min-width: 40px;
  max-width: 45px;
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
`;
