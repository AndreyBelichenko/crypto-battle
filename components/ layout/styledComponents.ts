import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LayoutContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  //align-items: flex-start;
`;

export const MainCOntent = styled.div`
  width: 50%;
  border: 1px solid black;
`;
