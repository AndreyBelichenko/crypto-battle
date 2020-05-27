import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import { breakPoints } from '../../constants/styledConstants';

export const BannerWrap = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(255,255,255,0.8);
  border-radius: 4px;
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.75);
  margin-bottom: 20px;
  position: relative;
`;

const BannerWrapImage = styled(Image)`
  width: 240px;
  height: 100%;
`;
export const BannerWrapHorses = styled(BannerWrapImage)`
  @media (max-width: ${breakPoints.medium}px) {
   display: none!important;
  }
`;
export const BannerWrapWarriors = styled(BannerWrapImage)`
  width: 120px;
  padding-top: 50px;
   @media (max-width: ${breakPoints.large}px) {
   display: none!important;
  }
`;
export const BannerClose = styled.div`
  position: absolute;
  top: 5px;
  right: 5px
`;
