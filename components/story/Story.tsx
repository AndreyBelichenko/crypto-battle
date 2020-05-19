import * as React from 'react';

import Header from '../header/Header';

import { StoryWrapper, StoryHeader, StoryContentWrapper } from './styledComponents';

const Story: React.FC = () => {
  return(
    <StoryWrapper>
      <StoryHeader>
        <Header/>
      </StoryHeader>
      <StoryContentWrapper>
        Story will be here
      </StoryContentWrapper>
    </StoryWrapper>
  );
};

export default Story;
