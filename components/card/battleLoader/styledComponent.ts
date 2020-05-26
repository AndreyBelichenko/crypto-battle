import styled from 'styled-components';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: auto;
`;

export const BattleImg = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width:1536px) {
  width: 60px;
  height:60px;
  }
  @media(max-width: 1070px){
  width: 40px;
  height: 40px;
  }
  @media (max-width:766px) {
  width: 60px;
  height:60px;
  }
  @media(max-width: 600px){
  width: 40px;
  height: 40px;
  }
  @media(max-width: 500px){
  width: 35px;
  height: 35px;
  }
  @media(max-width: 450px){
  width: 30px;
  height: 30px;
  }
  `;
