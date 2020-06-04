import styled from 'styled-components';

import fonts from '../../../constants/fonts';
import { projectColors } from '../../../constants/styledConstants';

export const Item = styled.a`
  display: flex;
  margin: 30px;
  font-family: ${fonts.header};
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: ${projectColors.headerItemsColor};
  &:hover {
  color: ${projectColors.headerItemsMainColor};
  &:active {
  color: ${projectColors.headerItemsMainColor};
  border-bottom: 3px solid ${projectColors.headerItemsMainColor};
  cursor: pointer;
  }
`;
