import * as React from 'react';
import { useSelector } from 'react-redux';

import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import AuthBlock from './authBlock/AuthBlock';
import AppButtonBlock from './appButtonBlock/AppButtonBlock';

import { BlockHeader } from './styledComponents';
import { UserDataType } from '../../store/redux/reducers/userReducer';

interface RootState {
  user: {
    userData: UserDataType;
  };
}

const Header: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.userData.name);

  return (
    <BlockHeader>
      <Logo />
      <NavBar />
      {isAuth ? <AppButtonBlock /> : <AuthBlock />}
    </BlockHeader>
  );
};

export default Header;
