import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/redux/actionCreators/actionCreators';

const MessageExampleNegative = () => {
  const dispatch = useDispatch();
  return (
    <Message negative className="errorMessage">
      <Message.Header className="errorMessageHeader">
        Something went wrong, sorry for the technical malfunctions
      </Message.Header>
      <p className="errorMessageText">In a short time we will fix everything</p>
      <div className="closeMessageError">
        <Icon name={'close'} onClick={() => dispatch(actions.unableErrorMessage())} />
      </div>
    </Message>
  );
};

export default MessageExampleNegative;
