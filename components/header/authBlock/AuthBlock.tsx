import * as React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { setAuthUserData } from '../../../store/redux/actionCreators/actionCreators';

import { AuthWrapper, BtnWrapper } from './styledComponents';

const AuthBlock: React.FC = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response: any) => {
    if (response.accessToken) {
      const dataToSend = {
        name: response.name,
        avatar: response.picture.data.url,
      };
      Cookies.set('userData', dataToSend);
      dispatch(setAuthUserData(dataToSend));
    }
  };

  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      const dataToSend = {
        name: response.profileObj.name,
        avatar: response.profileObj.imageUrl,
      };
      Cookies.set('userData', dataToSend);
      dispatch(setAuthUserData(dataToSend));
    }
  };

  return (
    <AuthWrapper>
      <BtnWrapper>
        <FacebookLogin
            appId="833822150435127"
            autoLoad={true}
            fields="name,email,picture"
            onClick={responseFacebook}
            callback={responseFacebook}
            textButton=""
            icon="fa-facebook"
        />
      </BtnWrapper>
      <BtnWrapper>
        <GoogleLogin
            clientId="1066411115726-q8irdkbiq5t7kkdk59h1otnia7l3q93j.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </BtnWrapper>
    </AuthWrapper>
  );
};

export default AuthBlock;
