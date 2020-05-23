import * as React from 'react';
import { Header, List, Image, Icon, Container, Divider } from 'semantic-ui-react';
import { SideBarWrapper, HeaderWrapper, ImageBlock, ItemList, ImageCountBlock, TitleImage } from './styledComponent';

interface SidebarProps {
  role: string;
  data: any;
}

const Sidebar = (props: SidebarProps) => {
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';
  const imageInTitle = props.role === 'crypto' ? '/static/coins.svg' : '/static/sword.svg';
  const isCrypto = props.role === 'crypto';
  return (
    <SideBarWrapper>
      <HeaderWrapper>
        <Header as="h2" textAlign="center">
          {sidebarTitle}
        </Header>
        <TitleImage>
          <Image src={imageInTitle} />
        </TitleImage>
      </HeaderWrapper>
      <List divided relaxed>
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
      </List>
      <Divider />
      <Container align="center" style={{ cursor: 'pointer' }}>
        <Icon disabled name="ellipsis horizontal" size="big" />
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

export default Sidebar;
