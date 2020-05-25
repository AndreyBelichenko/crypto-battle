import * as React from 'react';
import { Provider } from 'react-redux';
import { Grid, Sidebar, Menu, Image } from 'semantic-ui-react';

import Header from '../components/header/Header';
import SidebarSelf from '../components/sidebarSelf/SidebarSelf';
import ModalWindow from '../components/modalWindow/modalWindow';
import ModalWindowSidebars from '../components/modalWindowSidebars/modalWindowSidebars';

import { topWarriors, topCrypto } from '../mockData/topSidebars';
import { sidebarItems } from '../constants/itemConstants';

import 'semantic-ui-css/semantic.min.css';

import '../components/modalWindow/modalWindow.css';
import '../components/modalWindowSidebars/modalWindowSidebars.css';
import '../components/header/appButtonBlock/appButtonBlock.css';
import '../components/header/authBlock/authBlock.css';
import '../commonStyles/app.css';
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
} from '../commonStyles/styledApp';

import storeConfiguration from '../store/storeConfiguration';
import Link from 'next/link';

const store = storeConfiguration();

type MyAppProps = { Component: any; pageProps: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const [visible, setVisible] = React.useState(false);

  const showItems = (item: any) => {
    switch (item.type) {
      case 'link':
        return (
          <MenuItem onClick={() => setVisible(false)}>
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
    }
  };

  return (
    <Provider store={store}>
      <AppWrapper>
        <Header setVisible={setVisible} visible={visible} />
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            direction="right"
            className="sidebar"
          >
            <MenuItem onClick={() => setVisible(false)}>
              <ItemCreateBattle>
                <ModalWindow role="create" />
              </ItemCreateBattle>
            </MenuItem>
            {sidebarItems.map((item) => showItems(item))}
          </Sidebar>
          <AppContainer>
            <Sidebar.Pusher>
              <Grid stackable columns="equal">
                <Grid.Column tablet={6} computer={4} only="tablet computer">
                  <SidebarSelf role="warriors" data={topWarriors} height={false} />
                </Grid.Column>
                <Grid.Column>
                  <MainContent>
                    <Component {...pageProps} />
                  </MainContent>
                </Grid.Column>
                <Grid.Column width={4} only="computer">
                  <SidebarSelf role="crypto" data={topCrypto} height={false} />
                </Grid.Column>
              </Grid>
            </Sidebar.Pusher>
          </AppContainer>
        </Sidebar.Pushable>
      </AppWrapper>
    </Provider>
  );
};

export default MyApp;
