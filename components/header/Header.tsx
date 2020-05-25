import * as React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react';

import { UserDataType } from '../../store/redux/reducers/userReducer';
import Logo from './logo/Logo';
import NavBar from './navBar/NavBar';
import AuthBlock from './authBlock/AuthBlock';
import AppButtonBlock from './appButtonBlock/AppButtonBlock';

import {
  BlockHeader,
  HeaderContainer,
  AuthContainer,
  SidebarImage,
  BurgerContainer,
  CloseContainer,
} from './styledComponents';

interface RootState {
  user: {
    userData: UserDataType;
  };
}

interface HeaderProps {
  visible: boolean;
  setVisible: (b: boolean) => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const isAuth = useSelector((state: RootState) => state.user.userData.name);
  const toggleSidebar = React.useCallback(() => {
    props.setVisible(!props.visible);
  }, [props.visible]);
  return (
    <HeaderContainer>
      <BlockHeader>
        <Logo />
        <NavBar />
        <AuthContainer>
          {isAuth ? <AppButtonBlock /> : <AuthBlock />}
          <SidebarImage>
            {props.visible ? (
              <CloseContainer>
                <Image src="/static/close.svg" size={'big'} onClick={toggleSidebar} />
              </CloseContainer>
            ) : (
              <BurgerContainer>
                <Image src="/static/burger.svg" size={'tiny'} onClick={toggleSidebar} />
              </BurgerContainer>
            )}
          </SidebarImage>
        </AuthContainer>
      </BlockHeader>
    </HeaderContainer>
  );
};

export default Header;
