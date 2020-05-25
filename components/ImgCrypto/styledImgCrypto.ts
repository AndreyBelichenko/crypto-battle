import styled from 'styled-components';

import { Container, Image } from 'semantic-ui-react';

import fonts from '../../constants/fonts';
import { color } from '../../constants/colorMatrix';

export const MainContainer = styled(Container)`
  height: 350px !important;
  width: 350px !important;
  position: relative;
`;

export const Content = styled(Container)`
  height: 300px !important;
  width: 300px !important;
  background: ${color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  border: 1px solid ${(props) => props.mainColor};
  box-sizing: border-box;
  box-shadow: ${(props) => (props.borderColor ? `0 0 25px ${props.borderColor} inset` : `${props.borderColor}`)};
  cursor: pointer;
`;

export const LogoContainer = styled(Container)`
  height: 150px !important;
  width: 150px !important;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1 !important;
  border: 1px solid ${(props) => props.mainColor};
  box-sizing: border-box;
`;

export const ContentImage = styled(Container)`
  height: 280px !important;
  width: 250px !important;
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 2;
  cursor: pointer;
`;

export const ImagePerson = styled(Image)`
  height: 100%;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
  font-size: 28px;
  font: ${fonts.header};
  font-weight: bold;
`;

export const CheckButton = styled(Container)`
  position: absolute;
  display: flex !important;
  justify-content: center;
  top: 25px;
  right: 25px;
  z-index: 2;
`;
