import styled from 'styled-components';

import colorMatrix from '../../../constans/colorMatrix';

const color = colorMatrix;

export const LogoWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  `;

export const ImageWrapper = styled.div`
  display:flex;
  margin: 10px;
  `;

export const LabelWrapper = styled.div`
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  margin: 30px;
  color: ${color.white};
  `;
