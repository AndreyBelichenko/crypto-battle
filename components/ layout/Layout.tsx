import * as React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import Header from '../header/Header';

import { LayoutWrapper, LayoutContentWrapper } from './styledComponents';
import { setAuthStoreUserData } from '../../store/redux/actionCreators/actionCreators';

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
      <LayoutContentWrapper>I am Layout</LayoutContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
