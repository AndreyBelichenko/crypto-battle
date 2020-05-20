import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

import color from '../../../constans/colorMatrix';
import fonts from '../../../constants/fonts';

export const NavBarWrapper = styled(Menu)`
  width: 60%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  `;

export const Link = styled(Menu.Item)`
  display: flex;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: ${color.white};
`;
