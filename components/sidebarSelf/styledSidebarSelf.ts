import styled from 'styled-components';
import { List, Divider, Header } from 'semantic-ui-react';

import { breakPointsActiveCard, projectColors } from '../../constants/styledConstants';

type SideBarWrapperProps = {
  needHeight: boolean;
};

export const SideBarWrapper = styled.div<SideBarWrapperProps>`
  min-width: 240px;
  height: ${(props: any) => (props.needHeight ? '100%' : 'auto')};
  min-height: 50%;
  max-height: ${(props: any) => (props.needHeight ? 'auto' : 'calc(100vh - 125px)')};
  overflow: hidden;
  width: 100%;
  padding: 20px 0 5px 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.75);

  @media (max-width: ${breakPointsActiveCard.big}px) {
    padding: 20px 0 5px 20px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-right: 40px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    padding-right: 20px;
  }
`;
export const HeaderBorder = styled.div`
  width: 100%;
  border-bottom: 3px solid ${projectColors.underlineTitle};
`;

export const ImageBlock = styled.div`
  margin-right: 15px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ImageAvatar = styled.img`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  margin-right: 15px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TitleImage = styled.div`
  width: 40px;
  position: absolute;
  top: 5px;
`;

export const ImageCountBlock = styled.p`
  padding: 3px;
  min-width: 30px;
  height: 26px;
  border-radius: 4px;
  font-size: 16px;
  background: ${projectColors.underlineTitle};
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
  height: 50px;
`;

export const ShowMore = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-right: 35px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ShowLess = styled.div`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ShowLessDivider = styled(Divider)`
  margin-bottom: -10px !important;
`;

export const ListHeader = styled.div`
  margin-right: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
  white-space: nowrap;
  font-size: 17px;
  font-weight: bold;
  padding-right: 10px;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 14px !important;
  }
  @media (max-width: ${breakPointsActiveCard.medium}px) {
    font-size: 16px;
  }
`;

export const ListContentCustomize = styled(List.Content)`
  width: 100% !important;
  display: flex !important;
  align-items: center;
  justify-content: space-between !important;
`;

export const ListCustomize = styled(List)`
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  margin-bottom: 6px !important;
  max-height: 60vh;
  padding-right: 30px !important;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    padding-right: 15px !important;
  }
`;

export const DividerCustomize = styled(Divider)`
  margin: 0 !important;
  margin-right: 40px !important;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    margin-right: 25px !important;
  }
`;

export const HeaderCustomize = styled(Header)`
  font-size: 22px !important;

  @media (max-width: ${breakPointsActiveCard.big}px) {
    font-size: 20px !important;
  }
`;
