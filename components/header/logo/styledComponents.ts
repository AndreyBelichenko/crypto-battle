import styled from 'styled-components';

import { color } from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';
import { breakPointsHeader } from '../../../constants/styledConstants';

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  cursor: pointer;
`;

export const Label = styled.span`
  display: flex;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  align-items: center;
  color: ${color.white};
  @media (max-width: ${breakPointsHeader.big}px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  height: auto;
  width: 60px;
`;
