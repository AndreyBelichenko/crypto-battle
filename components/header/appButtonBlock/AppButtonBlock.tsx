import * as React from 'react';
import * as Cookies from 'js-cookie';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import ModalWindow from '../../modalWindow/modalWindow';
import * as actions from '../../../store/redux/actionCreators/actionCreators';
import { AppState } from '../../../store/rootReducer';

import { AppButtonBlockWrapper, HideButtons, Avatar } from './styledComponents';

const AppButtonBlock: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: AppState) => state.user.userData);
  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOutStore(userData.access_token, userData.id));
  };

  const handleRoute = () => {
    Router.push('/account');
  };

  return (
    <AppButtonBlockWrapper>
      <HideButtons>
        <ModalWindow role="create" />
      </HideButtons>
      <div className="btnSize"  >
        <Avatar src={userData.avatar}  onClick={handleRoute}/>
      </div>
  <HideButtons>
    <Button circular icon="sign-in alternate" color="black" onClick={logOut} className="btnSize" />
  </HideButtons>
</AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
