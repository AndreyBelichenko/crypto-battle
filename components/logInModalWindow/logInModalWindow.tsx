import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Modal, Container, Button } from 'semantic-ui-react';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';

// import { LoginModalWindow } from '../../constants/itemConstants';
import { setAuthStoreUserData } from '../../store/redux/actionCreators/actionCreators';

import { Btn, StyleHeaderTitle, StyledCloseButton } from './styledComponent';

interface ModalProps {
  role: string;
}

const LogInModalWindow = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogIn = props.role === 'logIn';
  const buttonName = isLogIn ? 'Авторизироваться' : null;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const responseFacebook = (responseFacebook: any) => {
    if (responseFacebook.accessToken) {
      dispatch(setAuthStoreUserData('facebook', responseFacebook.accessToken));
    }
  };

  const responseGoogle = (responseGoogle: any) => {
    dispatch(setAuthStoreUserData('google', responseGoogle.wc.access_token));
  };

  return(
    <div>
    <Btn className="ui orange button" onClick={toggleModal}>Log In</Btn>
    <Modal open={isOpen} onClose={toggleModal}>
      <StyleHeaderTitle>
        <Container>{buttonName}</Container>
        <StyledCloseButton name="close" align="right" onClick={toggleModal} />
      </StyleHeaderTitle>
      <FacebookLogin
        autoLoad={false}
        appId="2848509168579400"
        fields="name,email,picture"
        onClick={responseFacebook}
        callback={responseFacebook}
        render={(renderProps: {
          onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
        }) => (
          <Button
            onClick={renderProps.onClick}
            color="facebook"
            icon="facebook"
            size="large"
            className="btnSize"
          />
        )}
      />
      <GoogleLogin
        clientId="411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com"
        buttonText=""
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={(renderProps: {
          onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
        }) => (
          <Button
            onClick={renderProps.onClick}
            color="google plus"
            icon="google"
            size="large"
            className="btnSize"
          />
        )}
        onAutoLoadFinished={() => {}}
      />
    </Modal>
    </div>
  );
};

export default LogInModalWindow;
