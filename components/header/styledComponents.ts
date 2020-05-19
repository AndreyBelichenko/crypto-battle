import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import color from '../../constans/colorMatrix';

export const BlockHeader = styled(Header)`
  margin: 0!important;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${color.black};
  box-sizing: border-box;
`;

