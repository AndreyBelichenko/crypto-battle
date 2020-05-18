import styled from 'styled-components';

import colorMatrix from '../../../constans/colorMatrix';

const color = colorMatrix;

export const Item = styled.a`
  margin: 30px;
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: ${color.white};
  &:hover {
  color: ${color.pomegranate};
  border-bottom: 3px solid ${color.pomegranate};
  }
  &:active {
  color: ${color.pomegranate};
  border-bottom: 3px solid ${color.pomegranate};
  }
  `;
