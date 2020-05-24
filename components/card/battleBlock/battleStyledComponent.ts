import styled from 'styled-components';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: auto;
`;

export const KnifesBlock = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -38px;
  position: relative;
`;

export const KnifeOne = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
`;

export const KnifeTwo = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  transform: scale(-1, 1);

`;
