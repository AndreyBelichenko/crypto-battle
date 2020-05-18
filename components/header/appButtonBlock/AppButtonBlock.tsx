import * as React from 'react';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import * as actions from '../../../store/redux/actionCreators/actionCreators';

import { AppButtonBlockWrapper, ButtonWrapper, Btn } from './styledComponents';

const AppButtonBlock: React.FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOut());
  };

  return (
    <AppButtonBlockWrapper>
      <ButtonWrapper>
        <Btn>Create</Btn>
      </ButtonWrapper>
      <Button circular icon="user outline" size="large" color="black" />
      <Button circular icon="sign-in alternate" size="large" color="black" onClick={logOut} />
    </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
