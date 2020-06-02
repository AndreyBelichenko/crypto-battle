import * as React from 'react';
import GoogleLogin from 'react-google-login';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { setAuthStoreUserData } from '../../../store/redux/actionCreators/actionCreators';

import { AuthWrapper } from './styledComponents';

const AuthBlock: React.FC = () => {
  const dispatch = useDispatch();

  const responseFacebook = (responseFacebook: any) => {
    if (responseFacebook.accessToken) {
      dispatch(setAuthStoreUserData('facebook', responseFacebook.accessToken));
    }
  };

  const responseGoogle = (responseGoogle: any) => {
    dispatch(setAuthStoreUserData('google', responseGoogle.wc.access_token));
  };

  return (
    <AuthWrapper>
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
            circular
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
            circular
            color="google plus"
            icon="google"
            size="large"
            className="btnSize"
          />
        )}
        onAutoLoadFinished={() => {}}
      />
    </AuthWrapper>
  );
};

export default AuthBlock;
