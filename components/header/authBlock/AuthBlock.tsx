import * as React from 'react';
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

  const responseFacebook = (response: any) => {
    if (response.accessToken) {
      const dataToSend = {
        name: response.name,
        avatar: response.picture.data.url,
      };
      Cookies.set('userData', dataToSend);
      dispatch(setAuthStoreUserData(dataToSend));
    }
  };

  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      const dataToSend = {
        name: response.profileObj.name,
        avatar: response.profileObj.imageUrl,
      };
      Cookies.set('userData', dataToSend);
      dispatch(setAuthStoreUserData(dataToSend));
    }
  };

  return (
    <AuthWrapper>
        <FacebookLogin
            appId="833822150435127"
            autoLoad={true}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook}
            render={(renderProps: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) => (
              <Button onClick={renderProps.onClick}  circular color="facebook" icon="facebook" size="large" className="btnSize"/>
            )}
        />
        <GoogleLogin
            clientId="1066411115726-q8irdkbiq5t7kkdk59h1otnia7l3q93j.apps.googleusercontent.com"
            buttonText=""
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={(renderProps: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) => (
              <Button onClick={renderProps.onClick} circular color="google plus" icon="google plus" size="large" className="btnSize"/>
              )}
        />

    </AuthWrapper>
  );
};

export default AuthBlock;
