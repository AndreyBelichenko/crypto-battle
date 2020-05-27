import * as React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { setAuthStoreUserData } from '../../../store/redux/actionCreators/actionCreators';

import { AuthWrapper } from './styledComponents';

const AuthBlock: React.FC = () => {
  const dispatch = useDispatch();

  const responseFacebook = (responseFacebook: any) => {
    if (responseFacebook.accessToken) {
      axios
        .post('http://crypto-battle.pp.ua/api/auth/facebook', {
          access_token: responseFacebook.accessToken,
        })
        .then((response) => {
          if (response.data.user) {
            const userToSend = {
              id: response.data.user._id,
              name: response.data.user.alias,
              avatar: response.data.user.avatar,
              numberOfVictories: response.data.user.numberOfVictories,
              access_token: responseFacebook.accessToken,
            };
            Cookies.set('userData', userToSend);
            dispatch(setAuthStoreUserData(userToSend));
          }
        });
    }
  };

  const responseGoogle = (responseGoogle: any) => {
    axios
      .post('http://crypto-battle.pp.ua/api/auth/google', {
        access_token: responseGoogle.wc.access_token,
      })
      .then((response) => {
        if (response.data.user) {
          const userToSend = {
            id: response.data.user._id,
            name: response.data.user.alias,
            avatar: response.data.user.avatar,
            numberOfVictories: response.data.user.numberOfVictories,
            access_token: responseGoogle.wc.access_token,
          };
          Cookies.set('userData', userToSend);
          dispatch(setAuthStoreUserData(userToSend));
        }
      });
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
