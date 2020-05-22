import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainContent = styled.div`
  height: calc(100vh - 120px);
  overflow-x: hidden;
  overflow-y: scroll;
  background: rgba(255, 245, 215, 0.8);
`;

export const AppContainer = styled.div`
  flex-grow: 1;
  padding: 20px 20px;
  background-attachment: fixed;
  background-position: top center;
  background-image: url('/static/background.png');
`;
