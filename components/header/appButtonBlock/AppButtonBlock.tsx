import * as React from 'react';
import * as Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';

import ModalWindow from '../../modalWindow/modalWindow';

import * as actions from '../../../store/redux/actionCreators/actionCreators';
import { AppState } from '../../../store/rootReducer';

import { AppButtonBlockWrapper, HideButtons } from './styledComponents';

const AppButtonBlock: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: AppState) => state.user.userData);
  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOutStore(userData.access_token, userData.id));
  };

  return (
    <AppButtonBlockWrapper>
      <HideButtons>
        <ModalWindow role="create" />
      </HideButtons>
      <Button circular icon="user outline" color="black" className="btnSize" />
      <HideButtons>
        <Button circular icon="sign-in alternate" color="black" onClick={logOut} className="btnSize" />
      </HideButtons>
    </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
