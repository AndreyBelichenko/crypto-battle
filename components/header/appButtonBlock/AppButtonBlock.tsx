import * as React from 'react';

import { Button } from 'semantic-ui-react';

import { AppButtonBlockWrapper, ButtonWrapper } from './styledComponents';
import ModalWindow from '../../modalWindow/modalWindow';

const AppButtonBlock: React.FC = () => {
  return(
        <AppButtonBlockWrapper>
            <ButtonWrapper>
                <ModalWindow role="create"/>
            </ButtonWrapper>
                <Button circular icon ="user outline" size="large" color="black"/>
                <Button circular icon="sign-in alternate" size="large" color="black"/>
        </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
