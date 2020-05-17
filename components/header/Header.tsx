import * as React from 'react';
import { useSelector } from 'react-redux';

import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import AuthBlock from './authBlock/AuthBlock';
import AppButtonBlock from './appButtonBlock/AppButtonBlock';

import { BlockHeader } from './styledComponents';

interface RootState {
  user: any;
}

const isAuth = (state: RootState) => state.user.userData.name;

const Header: React.FC = () => {

  const isOn = useSelector(isAuth);

  return(
        <BlockHeader>
            <Logo/>
            <NavBar/>
            {isOn ? <AuthBlock/> : <AppButtonBlock/>}
        </BlockHeader>
  );
};

export default Header;
