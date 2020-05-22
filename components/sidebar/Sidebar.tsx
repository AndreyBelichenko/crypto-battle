import * as React from 'react';
import { Header, List, Image, Icon, Container, Divider } from 'semantic-ui-react';
import { SideBarWrapper, HeaderWrapper, ImageBlock, ItemList, ImageCountBlock } from './styledComponent';

interface SidebarProps {
  role: string;
  data: any;
}

const Sidebar = (props: SidebarProps) => {
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';
  const isCrypto = props.role === 'crypto';
  return (
    <SideBarWrapper>
      <HeaderWrapper>
        <Header as="h2" textAlign="center">
          {sidebarTitle}
        </Header>
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
      {isCrypto || (
        <>
          <Divider />
          <Container align="center">
            <Icon disabled name="ellipsis horizontal" size="large" />
          </Container>
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
