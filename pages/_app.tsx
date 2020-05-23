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
import '../commonStyles/app.css';
import { AppWrapper, MainContent, AppContainer } from '../commonStyles/styledApp';

import storeConfiguration from '../store/storeConfiguration';

const store = storeConfiguration();

type MyAppProps = { Component: any; pageProps: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Header />
        <AppContainer>
          <Grid stackable columns="equal">
            <Grid.Column tablet={6} computer={4} only="tablet computer">
              <Sidebar role="warriors" data={topWarriors} />
            </Grid.Column>
            <Grid.Column>
              <MainContent>
                <Component {...pageProps} />
              </MainContent>
            </Grid.Column>
            <Grid.Column width={4} only="computer">
              <Sidebar role="crypto" data={topCrypto} />
            </Grid.Column>
          </Grid>
        </AppContainer>
      </AppWrapper>
    </Provider>
  );
};

export default MyApp;
