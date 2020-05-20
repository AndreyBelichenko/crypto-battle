import styled from 'styled-components';

import color from '../../constants/colorMatrix';

export const BlockHeader = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${color.black};
  box-sizing: border-box;
  padding: 20px 45px 10px 80px;
  @media (max-width: 1070px){
  padding: 20px 25px 10px 20px;
   }
`;
