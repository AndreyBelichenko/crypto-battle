import styled from 'styled-components';

import color from '../../../constants/colorMatrix';

export const AppButtonBlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  height: 50%;
  margin: 10px;
  font-family: PT Serif;
  text-align: center;
`;

export const Btn = styled.button`
  background: ${color.pomegranate};
  color: ${color.white};
  border: none;
  text-align: center;
  margin: 10px;
`;
