import * as React from 'react';
import { useSelector } from 'react-redux';

import { UserDataType } from '../../store/redux/reducers/userReducer';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import AuthBlock from './authBlock/AuthBlock';
import AppButtonBlock from './appButtonBlock/AppButtonBlock';

import { BlockHeader, LogoWrapper, NavBarWrapper, BtnWrapper } from './styledComponents';

interface RootState {
  user: {
    userData: UserDataType;
  };
}

const Header: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.user.userData.name);

  return (
    <BlockHeader>
        <LogoWrapper>
      <Logo />
        </LogoWrapper>
        <NavBarWrapper>
      <NavBar />
        </NavBarWrapper>
        <BtnWrapper>
      {isAuth ? <AppButtonBlock /> : <AuthBlock />}
        </BtnWrapper>
    </BlockHeader>
  );
};

export default Header;
