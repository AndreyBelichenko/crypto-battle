import styled from 'styled-components';

import color from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const Item = styled.a`
  display: flex;
  margin: 30px;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: ${color.white};
  &:hover {
  color: ${color.pomegranate};
  &:active {
  color: ${color.pomegranate};
  border-bottom: 3px solid ${color.pomegranate};
  cursor: pointer;
  }
`;
