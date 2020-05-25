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
  @media (max-width: 1400px) {
  width: 40px;
  height: 40px;
  }
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

export const BattleImg = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 1400px) {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  }
  `;
