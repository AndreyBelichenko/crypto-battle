import styled from 'styled-components';

import { color } from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const NavBarMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`;

export const LinkItem = styled.a`
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 60px;
  text-align: center;
  margin: 0 45px;
  color: ${(props) => (props.theme.active ? color.pomegranate : color.white)};
  height: 60px;
  border-bottom: 3px solid ${(props) => (props.theme.active ? color.pomegranate : 'transparent')};
  transition: 0.2s;
  cursor: pointer;

  &:first-child {
    margin: 0 45px 0 0;
  }

  &:last-child {
    margin: 0 0 0 45px;
  }

  @media (max-width: 1070px) {
    font-size: 23px;
    margin 0 20px;

      &:first-child {
    margin: 0 20px 0 0;
  }

  &:last-child {
    margin: 0 0 0 20px;
  }
  }

  &:hover {
    color: ${color.pomegranate};
    border-bottom: 3px solid ${color.pomegranate};
  }
`;
