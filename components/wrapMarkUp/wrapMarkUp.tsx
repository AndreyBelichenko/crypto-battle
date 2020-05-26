import * as React from 'react';
import Link from 'next/link';
import { Grid, Sidebar, Menu, Image } from 'semantic-ui-react';

import Header from '../header/Header';
import SidebarSelf from '../sidebarSelf/SidebarSelf';
import ModalWindow from '../modalWindow/modalWindow';
import ModalWindowSidebars from '../modalWindowSidebars/modalWindowSidebars';

import { topWarriors, topCrypto } from '../../mockData/topSidebars';
import { sidebarItems } from '../../constants/itemConstants';

import {
  AppWrapper,
  MainContent,
  AppContainer,
  MenuItem,
  ItemCreateBattle,
  ItemMenuWrapper,
  ItemMenuImage,
  ItemMenuName,
  ItemMenuImageHover,
  // StyleCentralFid,
} from '../../commonStyles/styledApp';

type HocMarkUpProps = { children: any };

const WrapMarkUp: React.FC<HocMarkUpProps> = ({ children }) => {
  const [visible, setVisible] = React.useState(false);
  const setVisibleSideBar = React.useCallback(() => {
    setVisible(false);
  }, []);

  const showItems = (item: any) => {
    switch (item.type) {
      case 'link':
        return (
          <MenuItem onClick={setVisibleSideBar}>
            <Link href={item.path}>
              <ItemMenuWrapper>
                <ItemMenuImage>
                  <Image src={item.image} />
                </ItemMenuImage>
                <ItemMenuImageHover>
                  <Image src={item.imageHover} />
                </ItemMenuImageHover>
                <ItemMenuName>{item.name}</ItemMenuName>
              </ItemMenuWrapper>
            </Link>
          </MenuItem>
        );
      case 'modal':
        return <ModalWindowSidebars setVisible={(a: boolean) => setVisible(a)} content={item} role={item.idItem} />;
      case 'logout':
        return (
          <MenuItem>
            <ItemMenuWrapper>
              <ItemMenuImage>
                <Image src={item.image} />
              </ItemMenuImage>
              <ItemMenuImageHover>
                <Image src={item.imageHover} />
              </ItemMenuImageHover>
              <ItemMenuName>{item.name}</ItemMenuName>
            </ItemMenuWrapper>
          </MenuItem>
        );
    }
  };

  return (
    <AppWrapper>
      <Header setVisible={setVisible} visible={visible} />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={setVisibleSideBar}
          vertical
          visible={visible}
          direction="right"
          className="sidebar"
        >
          <MenuItem onClick={setVisibleSideBar}>
            <ItemCreateBattle>
              <ModalWindow role="create" />
            </ItemCreateBattle>
          </MenuItem>
          {sidebarItems.map((item, index) => (
            <div key={index}>{showItems(item)}</div>
          ))}
        </Sidebar>
        <AppContainer>
          <Sidebar.Pusher>
            <Grid stackable columns="equal">
              <Grid.Column tablet={6} computer={4} only="tablet computer">
                <SidebarSelf role="warriors" data={topWarriors} height={false} />
              </Grid.Column>
              <Grid.Column>
                <MainContent>{children}</MainContent>
              </Grid.Column>
              <Grid.Column width={4} only="computer">
                <SidebarSelf role="crypto" data={topCrypto} height={false} />
              </Grid.Column>
            </Grid>
          </Sidebar.Pusher>
        </AppContainer>
      </Sidebar.Pushable>
    </AppWrapper>
  );
};

export default WrapMarkUp;