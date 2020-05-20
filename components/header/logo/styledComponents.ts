import styled from 'styled-components';

import color from '../../../constants/colorMatrix';
import fonts from '../../../constants/fonts';

export const LogoWrapper = styled.div`
  height: 100%;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20 px;
  align-items: center;
  `;

export const Label = styled.span`
  display: flex;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  align-items: center;
  color: ${color.white};
  @media (max-width: 1070px){
  font-size: 25px;
  }
  `;

export const LogoImage = styled.img`
  height: auto;
  width: 100px;
  `;
