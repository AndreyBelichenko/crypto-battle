import * as React from 'react';
import { BlockHeader} from './styledComponents';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
// import AuthBlock from './authBlock/AuthBlock';
import AppButtonBlock from './appButtonBlock/AppButtonBlock';

const Header: React.FC = () => {
    return(
        <BlockHeader>
            <Logo/>
            <NavBar/>
            <AppButtonBlock/>
        </BlockHeader>
    )
};

export default Header;