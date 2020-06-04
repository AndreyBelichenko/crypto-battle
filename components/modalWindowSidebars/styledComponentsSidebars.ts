import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import fonts from '../../constants/fonts';
import { projectColors } from '../../constants/styledConstants';

export const Btn = styled(Button)`
  background: ${projectColors.modalSidebarsMainColor};
  color: ${projectColors.modalSidebarsMainColor};
  font-family: ${fonts.header};
  border: none;
  font-size: 18px !important;
  text-align: center;
  height: 30px;
  width: 100px;
  padding: inherit !important;
`;
