import * as React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { setAuthStoreUserData } from '../../store/redux/actionCreators/actionCreators';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userDataCookie = Cookies.get('userData');
    if (typeof userDataCookie === 'string') {
      dispatch(setAuthStoreUserData(JSON.parse(userDataCookie)));
    }
  }, []);

  return <div>I'm Layout</div>;
};

export default Layout;
