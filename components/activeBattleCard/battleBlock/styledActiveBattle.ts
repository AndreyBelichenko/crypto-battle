import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { activeBattleColor } from '../../../constants/styledConstants';

export const BattleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;
`;

export const KnifesBlock = styled.div`
  width: 50px;
  height: 50px;
  margin-top: -25px;
  position: relative;
`;

export const BattleDescriptionBlock = styled.div`
  width: 90%;
  height: 80%;
  margin-bottom: 20px;
  border: 1px solid ${activeBattleColor.battleBorderColor};
  box-shadow: 0 1px 5px 0 rgba(240, 80, 22, 0.75);
`;

export const KnifeOne = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
`;

export const KnifeTwo = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  transform: scale(-1, 1);
`;
