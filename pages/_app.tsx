import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../components/modalWindow/modalWindow.css';
import { Provider } from 'react-redux';

import storeConfiguration from './storeConfiguration';

const store = storeConfiguration();

type MyAppProps = {Component: any, pageProps: any};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) =>  {
  return  <Provider store={store}>
        <Component {...pageProps} />
    </Provider>;
};

export default MyApp;
