import styled from 'styled-components';

import { color } from '../../constants/colorMatrix';

export const BlockHeader = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${color.black};
  position: relative;
`;

export const HeaderContainer = styled.header`
  background: ${color.black};
  box-sizing: border-box;
  padding: 10px 45px;

  @media (max-width: 1070px) {
    padding: 20px 25px 10px;
  }
`;

export const AuthContainer = styled.div`
  position: absolute;
  right: 0;
`;
