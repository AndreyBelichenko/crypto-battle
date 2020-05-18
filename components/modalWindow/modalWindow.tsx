import React, { useState } from 'react';
import { Image, Modal, Grid, Container } from 'semantic-ui-react';

import cryptoData from '../../constants/cryptoData/cryptoData';
import hpDropdown from '../../constants/hpDropdown';
import {
  BtnCreate,
  StyledHeaderHp,
  StyleHeaderTitle,
  StyledFooterModal,
  StyledDropDown,
  StyledCloseButton,
  StyledConnectWrapper,
} from './styledComponents';

interface ModalProps {
  role: string;
}

const ModalWindow = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const title = props.role === 'create' ? 'Request Battle' : 'Connect Battle';
  const buttonName = props.role === 'create' ? 'Create' : 'Connect';
  return (
    <div>
      <BtnCreate onClick={toggleModal}>{buttonName}</BtnCreate>
      <Modal open={isOpen} onClose={toggleModal} className="customBackground">
        <StyleHeaderTitle className="customBackgroundTransparent" align="center">
          <Container>{title}</Container>
          <StyledCloseButton name="close" align="right" onClick={toggleModal} />
        </StyleHeaderTitle>
        <Modal.Content scrolling={true} className="customBackgroundTransparent">
          <Grid columns={2}>
            {cryptoData.map((item, index) => (
              <Grid.Column align="center" key={index}>
                <Image src={item.img} />
              </Grid.Column>
            ))}
          </Grid>
        </Modal.Content>
        {props.role === 'create' ? (
          <StyledFooterModal>
            <StyledHeaderHp align="center">Choose the number of hp in battle</StyledHeaderHp>
            <Container align="center">
              <StyledDropDown align="center" clearable options={hpDropdown} selection />
            </Container>
            <Container align="right" className="finallyCreate">
              <BtnCreate>Create</BtnCreate>
            </Container>
          </StyledFooterModal>
        ) : (
          <StyledFooterModal>
            <StyledConnectWrapper align="right">
              <BtnCreate>Connect</BtnCreate>
            </StyledConnectWrapper>
          </StyledFooterModal>
        )}
      </Modal>
    </div>
  );
};

export default ModalWindow;
