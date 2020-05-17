import React, { useState } from 'react';
import {
  BtnCreate,
  StyledHeaderHp,
  StyleHeaderTitle,
  StyledFooterModal,
  StyledDropDown,
  StyledCloseButton,
  ModalWrapper,
  StyledConnectWrapper
} from './styledComponents';
import { Image, Modal, Grid, Container } from 'semantic-ui-react';
import cryptoData from '../../constans/cryptoData/cryptoData';
import hpDropdown from '../../constans/hpDropdown';

interface modalProps {
  role: string
}

const ModalWindow = (props:modalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <ModalWrapper>
      {props.role === "create" ? <BtnCreate onClick={toggleModal}>Create</BtnCreate> : <BtnCreate onClick={toggleModal}>Connect</BtnCreate>}
      <Modal open={isOpen} onClose={toggleModal} className="customBackground">
        <StyleHeaderTitle className="customBackgroundTransparent" align="center">
          {props.role === "create" ? <Container>Request Battle</Container> : <Container>Connect Battle</Container>}
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
        {props.role === "create" ?
          <StyledFooterModal>
          <StyledHeaderHp align="center">Choose the number of hp in battle</StyledHeaderHp>
          <Container align="center">
            <StyledDropDown align="center" clearable options={hpDropdown} selection />
          </Container>
          <Container align="right" className="finallyCreate">
            <BtnCreate>Create</BtnCreate>
          </Container>
          </StyledFooterModal>
          :
          <StyledFooterModal>
            <StyledConnectWrapper align="right">
              <BtnCreate>Connect</BtnCreate>
            </StyledConnectWrapper>
          </StyledFooterModal>}
      </Modal>
    </ModalWrapper>
  );
};

export default ModalWindow;
