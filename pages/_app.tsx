import * as React from 'react';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import '../components/modalWindow/modalWindow.css';
import '../components/header/navBar/navbar.css';
import '../components/header/appButtonBlock/appButtonBlock.css';
import '../components/header/authBlock/authBlock.css';

import storeConfiguration from '../store/storeConfiguration';

const store = storeConfiguration();

type MyAppProps = { Component: any; pageProps: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
