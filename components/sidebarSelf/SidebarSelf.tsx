import * as React from 'react';
import { List, Image, Icon, Container, Divider } from 'semantic-ui-react';

import {
  SideBarWrapper,
  HeaderWrapper,
  ImageBlock,
  ItemList,
  ImageCountBlock,
  TitleImage,
  ShowMore,
  DividerCustomize,
  ListCustomize,
  HeaderCustomize,
  ListContentCustomize,
  ListHeader,
} from './styledSidebarSelf';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';

interface SidebarProps {
  role: string;
  data: any;
  height: boolean;
}

interface PropsOneUser {
  id: string;
  alias: string;
  avatar: string;
  numberOfVictories: number;
}

const SidebarSelf = (props: SidebarProps) => {
  const userData = useSelector((state: AppState) => state.user.userData);
  const imageInTitle = props.role === 'crypto' ? '/static/coins.svg' : '/static/sword.svg';
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';
  const imageInClass = props.role === 'crypto' ? 'coinImage' : 'swordImage';
  const isCrypto = props.role === 'crypto';
  const isUser = !props.data.map((item: PropsOneUser) => item.id).includes(userData.id);

  return (
    <SideBarWrapper needHeight={props.height}>
      <HeaderWrapper>
        <HeaderCustomize textAlign="center">{sidebarTitle}</HeaderCustomize>
        <TitleImage className={imageInClass}>
          <Image src={imageInTitle} />
        </TitleImage>
      </HeaderWrapper>
      <ListCustomize divided relaxed>
        {props.data.map((item: PropsOneUser, index: number) => (
          <ItemList key={index}>
            <ImageBlock>
              <Image src={item.avatar} verticalAlign="middle" />
            </ImageBlock>
            <ListContentCustomize>
              <ListHeader as="h3">{item.alias}</ListHeader>
              <ImageCountBlock>{item.numberOfVictories}</ImageCountBlock>
            </ListContentCustomize>
          </ItemList>
        ))}
      </ListCustomize>
      <DividerCustomize />
      <Container align="center" style={{ cursor: 'pointer' }}>
        {isCrypto ? <ShowMore>show more</ShowMore> : <Icon disabled name="ellipsis horizontal" size="big" />}
      </Container>
      {!isCrypto && userData.name && isUser && (
        <>
          <Divider />
          <List>
            <ItemList>
              <ImageBlock>
                <Image src={userData.avatar} verticalAlign="middle" />
              </ImageBlock>
              <ListContentCustomize>
                <ListHeader as="h3">{userData.name}</ListHeader>
                <ImageCountBlock>{userData.numberOfVictories}</ImageCountBlock>
              </ListContentCustomize>
            </ItemList>
          </List>
        </>
      )}
    </SideBarWrapper>
  );
};

export default SidebarSelf;
