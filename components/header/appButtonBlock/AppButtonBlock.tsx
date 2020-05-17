import * as React from 'react';
import * as Cookies from 'js-cookie';

import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { AppButtonBlockWrapper, ButtonWrapper } from './styledComponents';
import ModalWindow from '../../modalWindow/modalWindow';
import * as actions from '../../../redux/actionCreators/actionCreators';

const AppButtonBlock: React.FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOut());
  };

  return (
    <AppButtonBlockWrapper>
      <ButtonWrapper>
        <ModalWindow role="create" />
      </ButtonWrapper>
      <Button circular icon="user outline" size="large" color="black" />
      <Button circular icon="sign-in alternate" size="large" color="black" onClick={logOut} />
    </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
