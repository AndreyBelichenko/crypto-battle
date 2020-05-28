import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const BannerItemWrap = styled.div`
  width: 113px;
  position: relative;
`;

export const ItemWrapImage = styled(Image)`
  width: 100% !important;
  height: 100% !important;
`;

export const ItemText = styled.div`
  position: absolute;
  top: 50px;
  text-align: center;
  padding: 0 10px;
`;

export const ItemImage = styled(Image)`
  position: absolute;
  bottom: 80px;
  left:40px;
`;
