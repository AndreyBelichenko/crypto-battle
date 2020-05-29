import * as React from 'react';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import WrapMarkUp from '../components/wrapMarkUp/wrapMarkUp';

import '../components/modalWindow/modalWindow.css';
import '../components/modalWindowSidebars/modalWindowSidebars.css';
import '../components/header/appButtonBlock/appButtonBlock.css';
import '../components/header/authBlock/authBlock.css';
import '../commonStyles/app.css';

import storeConfiguration from '../store/storeConfiguration';

const store = storeConfiguration();

type MyAppProps = { Component?: any; pageProps?: any };

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <WrapMarkUp>
        <Component {...pageProps} />
      </WrapMarkUp>
    </Provider>
  );
};

export default MyApp;
