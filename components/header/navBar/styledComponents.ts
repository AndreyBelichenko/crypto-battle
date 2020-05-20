import styled from 'styled-components';

import { color } from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const NavBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 256px !important;
  @media (max-width: 1070px) {
    margin-right: 171px !important;
  }
`;

export const Link = styled.a`
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: ${color.white};
  @media (max-width: 1070px) {
    font-size: 23px;
  }
`;
