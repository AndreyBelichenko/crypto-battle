import styled from 'styled-components';

import color from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

export const LabelWrapper = styled.div`
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  margin: 30px;
  color: ${color.white};
`;
