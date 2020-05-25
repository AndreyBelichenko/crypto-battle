import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import { color } from '../../constants/colorMatrix';
import fonts from '../../constants/fonts';

export const Btn = styled(Button)`
  background: ${color.pomegranate};
  color: ${color.pomegranate};
  font-family: ${fonts.header};
  border: none;
  font-size: 18px !important;
  text-align: center;
  height: 30px;
  width: 100px;
  padding: inherit !important;
`;
