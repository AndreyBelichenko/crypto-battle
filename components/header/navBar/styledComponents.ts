import styled from 'styled-components';

import color from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Item = styled.a`
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: ${color.white};
  &:hover {
    color: ${color.pomegranate};
  }
  &:active {
    color: ${color.pomegranate};
    border-bottom: 3px solid ${color.pomegranate};
  }
`;
