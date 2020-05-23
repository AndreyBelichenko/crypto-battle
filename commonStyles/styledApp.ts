import styled from 'styled-components';

import { Grid } from 'semantic-ui-react';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 5px;
  min-height: calc(100vh - 125px);
  height: 100%;
  background: rgba(255, 245, 215, 0.8);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.75);
  margin: auto 5px;
`;

export const AppContainer = styled.div`
  flex-grow: 1;
  padding: 20px 20px;
  background-attachment: fixed;
  background-position: top center;
  background-image: url('/static/background.png');
`;

export const RightSidebar = styled(Grid.Column)`
  width: 25%;
`;

export const LeftSidebar = styled(Grid.Column)`
  width: 25%;
`;

export const CentralFida = styled(Grid.Column)`
  width: 50%;
`;
