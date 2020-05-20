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
    let dataToSend;
    if (typeof userDataCookie === 'string') {
      dataToSend = {
        name: JSON.parse(userDataCookie).name,
        avatar: JSON.parse(userDataCookie).avatar,
      };
      dispatch(setAuthStoreUserData(dataToSend));
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
