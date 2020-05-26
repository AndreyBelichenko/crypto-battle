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
  @media(max-width: 1070px){
  width: 40px;
  height: 40px;
  margin-top: -75px;
  }
  @media(max-width: 415px) {
  width: 35px;
  height: 35px;
  margin-top: -88px;
  }
  @media(max-width: 376px) {
  width: 25px;
  height: 25px;
  margin-top: -95px;
  }
`;

export const KnifeOne = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const KnifeTwo = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(-1, 1);
`;

export const BattleImg = styled.img`
  width: 80px;
  height: 80px;
  @media(max-width: 1070px){
  width: 60px;
  height: 60px;
  margin-top: 7px;
  }
  @media(max-width: 415px) {
  width: 35px;
  height: 35px;
  }
  @media(max-width: 375px) {
  width: 30px;
  height: 30px;
  }
  `;
