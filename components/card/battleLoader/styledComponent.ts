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
  width: 50px;
  height: 50px;
  @media (max-width: 1400px) {
  width: 40px;
  height: 40px;
  }
  `;
