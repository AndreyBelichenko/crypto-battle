import styled from 'styled-components';
import { Button} from 'semantic-ui-react';

import color from '../../../constans/colorMatrix';
import fonts from '../../../constants/fonts';

export const AppButtonBlockWrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 20%;
  `;

export const Btn = styled(Button)`
  background: ${color.pomegranate};
  color: ${color.pomegranate};
  font-family: ${fonts.header};
  border: none;
  text-align: center;
  margin: 10px;
  height: 40px;
  `;
