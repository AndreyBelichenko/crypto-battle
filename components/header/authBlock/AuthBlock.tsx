import * as React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {AuthWrapper, BtnWrapper} from './styledComponents';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import {setAuthUserData} from '../../../redux/actionCreators/actionCreators';

const AuthBlock: React.FC = () => {
    const dispatch = useDispatch();

    const responseFacebook = (response:any) => {
        console.log("FB:", response);
        let userData = {
            name: response.name,
            avatar: response.picture,
        }
        Cookies.set('userData', userData);
        dispatch(setAuthUserData(userData));
    };

    const responseGoogle = (response:any) => {
        console.log("Google", response);
        if(response.accessToken){
            let userData = {
                name: response.profileObj.name,
                avatar: response.profileObj.imageUrl,
            }
            Cookies.set('userData', userData);
            dispatch(setAuthUserData(userData));
        };
    };
    return(
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
    )
};

export default AuthBlock;