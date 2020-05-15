import * as React from 'react';

import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import AuthBlock from './authBlock/AuthBlock';
// import AppButtonBlock from './appButtonBlock/AppButtonBlock';

import { BlockHeader } from './styledComponents';

const Header: React.FC = () => {
  return(
        <BlockHeader>
            <Logo/>
            <NavBar/>
            <AuthBlock/>
        </BlockHeader>
  );
};

export default Header;
