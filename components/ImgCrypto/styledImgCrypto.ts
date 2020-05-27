import styled from 'styled-components';

import { Image } from 'semantic-ui-react';

import fonts from '../../constants/fonts';
import { color } from '../../constants/colorMatrix';
import { breakPointsActiveCard } from '../../constants/styledConstants';

interface PropsStyled {
  mainColor: string;
  borderColor?: string;
}

export const MainContainer = styled.div`
  height: 350px;
  width: 350px;
  position: relative;
  margin: 0 auto;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 300px;
    width: 300px;
  }
  @media (max-width: 767px) {
    height: 350px;
    width: 350px;
    margin: 15px auto;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 300px;
    width: 300px;
    margin: 15px auto;
  }
`;

export const Content = styled.div<PropsStyled>`
  height: 85%;
  width: 85%;
  background: ${color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  border-radius: 4px;
  border: 1px solid ${(props) => props.mainColor};
  box-sizing: border-box;
  box-shadow: ${(props) => (props.borderColor ? `0 0 25px ${props.borderColor} inset` : `${props.borderColor}`)};
  cursor: pointer;
`;

export const LogoContainer = styled.div<PropsStyled>`
  height: 150px;
  width: 150px;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1 !important;
  border: 1px solid ${(props) => props.mainColor};
  box-sizing: border-box;
  border-radius: 4px;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 125px;
    width: 125px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 125px;
    width: 125px;
  }
`;

export const ContentImage = styled.div`
  height: 280px;
  width: 250px;
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 2;
  cursor: pointer;

  @media (max-width: ${breakPointsActiveCard.medium}px) {
    height: 230px;
    width: 200px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 280px;
    width: 250px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 230px;
    width: 200px;
  }
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

export const CheckButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 85%;
  top: 25px;
  z-index: 2;
`;
