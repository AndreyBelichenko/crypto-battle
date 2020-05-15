import * as React from 'react';

import { Button } from 'semantic-ui-react';

import { AppButtonBlockWrapper, ButtonWrapper, Btn } from './styledComponents';

const AppButtonBlock: React.FC = () => {
  return(
        <AppButtonBlockWrapper>
            <ButtonWrapper>
                <Btn>Create</Btn>
            </ButtonWrapper>
                <Button circular icon ="user outline" size="large" color="black"/>
                <Button circular icon="sign-in alternate" size="large" color="black"/>
        </AppButtonBlockWrapper>
  );
};

export default AppButtonBlock;
