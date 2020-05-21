import * as React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

import { LayoutWrapper, LayoutContentWrapper, MainCOntent } from './styledComponents';
import { setAuthStoreUserData } from '../../store/redux/actionCreators/actionCreators';
import { topCrypto, topWarriors } from '../../mockData/topSidebars';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');
    if (typeof userDataCookie === 'string') {
      dispatch(setAuthStoreUserData(JSON.parse(userDataCookie)));
    }
  });

  return (
    <LayoutWrapper>
      <Header />
      <LayoutContentWrapper>
        <Sidebar role="warriors" data={topWarriors} />
        <MainCOntent />
        <Sidebar role="crypto" data={topCrypto} />
      </LayoutContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
