import * as React from 'react';
import { Provider } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { topWarriors, topCrypto } from '../mockData/topSidebars';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

import 'semantic-ui-css/semantic.min.css';

import '../components/modalWindow/modalWindow.css';
import '../components/header/appButtonBlock/appButtonBlock.css';
import '../components/header/authBlock/authBlock.css';
import { AppWrapper, MainContent, AppContainer } from './styledApp';

import storeConfiguration from '../store/storeConfiguration';

const store = storeConfiguration();

type MyAppProps = { Component: any; pageProps: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <AppContainer>
          <Grid columns={3} divided stackable={true}>
            <Grid.Column width={4}>
              <Sidebar role="warriors" data={topWarriors} />
            </Grid.Column>
            <Grid.Column width={8}>
              <MainContent>
                <Component {...pageProps} />
              </MainContent>
            </Grid.Column>
            <Grid.Column width={4}>
              <Sidebar role="crypto" data={topCrypto} />
            </Grid.Column>
          </Grid>
        </AppContainer>
      </AppWrapper>
    </Provider>
  );
};

export default MyApp;
