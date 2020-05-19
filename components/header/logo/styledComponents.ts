import styled from 'styled-components';

import color from '../../../constans/colorMatrix';
import fonts from '../../../constans/fonts';

export const LogoWrapper = styled.div`
  width: 20%;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  `;

export const ImageWrapper = styled.div`
  display:flex;
  margin: 10px;
  `;

export const LabelWrapper = styled.div`
  display: flex;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  align-items: center;
  margin: 20px;
  color: ${color.white};
  `;
