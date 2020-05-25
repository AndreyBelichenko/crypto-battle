import * as React from 'react';
import { Header, List, Image, Icon, Container, Divider } from 'semantic-ui-react';

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
} from './styledSidebarSelf';

interface SidebarProps {
  role: string;
  data: any;
  height: boolean;
}

const SidebarSelf = (props: SidebarProps) => {
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';
  const imageInTitle = props.role === 'crypto' ? '/static/coins.svg' : '/static/sword.svg';
  const isCrypto = props.role === 'crypto';
  return (
    <SideBarWrapper needHeight={props.height}>
      <HeaderWrapper>
        <Header as="h2" textAlign="center">
          {sidebarTitle}
        </Header>
        <TitleImage>
          <Image src={imageInTitle} />
        </TitleImage>
      </HeaderWrapper>
      <ListCustomize divided relaxed>
        {props.data.map((item: any, index: number) => (
          <ItemList key={index}>
            <ImageBlock>
              <Image src={item.logo} verticalAlign="middle" />
            </ImageBlock>
            <List.Content>
              <List.Header as="h3">{item.name}</List.Header>
            </List.Content>
            <ImageCountBlock>112</ImageCountBlock>
          </ItemList>
        ))}
      </ListCustomize>
      <DividerCustomize />
      <Container align="center" style={{ cursor: 'pointer' }}>
        {isCrypto ? <ShowMore>show more</ShowMore> : <Icon disabled name="ellipsis horizontal" size="big" />}
      </Container>
      {isCrypto || (
        <>
          <Divider />
          <List>
            <ItemList>
              <ImageBlock>
                <Image src="/static/user.svg" verticalAlign="middle" />
              </ImageBlock>
              <List.Content>
                <List.Header as="h3">Andrey Belichenko</List.Header>
              </List.Content>
              <ImageCountBlock>18</ImageCountBlock>
            </ItemList>
          </List>
        </>
      )}
    </SideBarWrapper>
  );
};

export default SidebarSelf;
