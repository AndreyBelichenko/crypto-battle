import * as React from 'react';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';

import * as actions from '../../../store/redux/actionCreators/actionCreators';

import { AppButtonBlockWrapper, Btn } from './styledComponents';

const AppButtonBlock: React.FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOut());
  };

  return (
    <AppButtonBlockWrapper>
        <Btn className="ui orange button">Create</Btn>
      <Button circular icon="user outline" color="black" className="btnSize"/>
      <Button circular icon="sign-in alternate" color="black" onClick={logOut} className="btnSize"/>
    </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
