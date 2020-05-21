import * as React from 'react';
import { Header, List, Image } from 'semantic-ui-react';
import { SideBarWrapper, SideBar, HeaderWrapper, ImageBlock, ItemList, ImageCountBlock } from './styledComponent';

interface SidebarProps {
  role: string;
  data: any;
}

const Sidebar = (props: SidebarProps) => {
  const sidebarTitle = props.role === 'crypto' ? 'TOP Crypto' : 'TOP Warriors';

  return (
    <SideBarWrapper>
      <SideBar>
        <HeaderWrapper>
          <Header as="h2" textAlign="center">
            {sidebarTitle}
          </Header>
        </HeaderWrapper>
        <List divided relaxed>
          {props.data.map((item: any) => (
            <ItemList>
              <ImageBlock>
                <Image src="/static/user.svg" verticalAlign="middle" />
              </ImageBlock>
              <List.Content>
                <List.Header as="h3">{item.name}</List.Header>
              </List.Content>
              <ImageCountBlock>112</ImageCountBlock>
            </ItemList>
          ))}
        </List>
      </SideBar>
    </SideBarWrapper>
  );
};

export default Sidebar;
