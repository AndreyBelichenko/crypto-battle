import * as React from 'react';

import Header from '../header/Header';

import Sidebar from '../sidebar/Sidebar';

import{ StoryWrapper,
  StoryHeader,
  StoryContentWrapper,
  StorySidebar,
  StoryMainContent} from './styledComponents';

const Story: React.FC = () => {
  return(
    <StoryWrapper>
      <StoryHeader>
        <Header/>
      </StoryHeader>
      <StorySidebar>
        <StoryContentWrapper>
          <Sidebar/>
        </StoryContentWrapper>
        <StoryMainContent>
          <div >Story are here</div>
        </StoryMainContent>
        <StoryContentWrapper>
          <Sidebar/>
        </StoryContentWrapper>
      </StorySidebar>
    </StoryWrapper>
  );
};

export default Story;
