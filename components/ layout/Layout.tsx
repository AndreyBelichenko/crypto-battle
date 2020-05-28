import * as React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { setAuthStoreUserData } from '../../store/redux/actionCreators/actionCreators';
import BattleCard from '../card/Card';

import { LayoutWrapper } from './styledComponents';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');
    if (typeof userDataCookie === 'string') {
      dispatch(setAuthStoreUserData(JSON.parse(userDataCookie)));
    }
  }, []);

  return <LayoutWrapper><BattleCard/></LayoutWrapper>;
};

export default Layout;
