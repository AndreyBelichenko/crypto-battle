import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

export const StoryWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StoryHeader = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const StoryContentWrapper = styled.div`
    width: 20%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

export const StorySidebar = styled(Grid)({
  margin: '0!important',
  height: '100%',
  width: '100%',
});

export const StoryMainContent = styled.div`
    width: 60%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
