import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

import { projectColors, breakPointsActiveCard } from '../../constants/styledConstants';

export const ProfileInfo = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${projectColors.borderColor};
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ChageInfoWrapper = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 20px 40px;
  @media (max-width: ${breakPointsActiveCard.small}px) {
    padding: 10px 10px 10px 20px;
  }
`;
export const AddPhotoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border: orange;
  height: 80px !important;
  width: 80px !important;
  border: 1px solid ${projectColors.borderColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddPhotoInput = styled.input`
  height: 80px !important;
  width: 80px !important;
  cursor: inherit;
  font-size: 25px;
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
`;

export const AddPhoto = styled.img`
  height: 20px;
  width: 20px;
`;

export const AddPhotoSpan = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  padding: 3px;
`;

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    height: 60px;
    width: 60px;
  }
`;

export const UserData = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const UserDataButtons = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;

export const InputName = styled(Form.Input)`
  width: 240px;
  height: 30px;
  opacity: 0.45;
  border: 1px solid ${projectColors.borderColor};
  border-radius: 4px;
  @media (max-width: ${breakPointsActiveCard.big}px) {
    width: 165px;
  }
  @media (max-width: ${breakPointsActiveCard.small}px) {
    width: 150px;
  }
  @media (max-width: ${breakPointsActiveCard.xsmall}px) {
    width: 100px;
  }
`;
