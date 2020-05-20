import React, { useState } from 'react';
import { Modal, Grid, Container } from 'semantic-ui-react';

import ImgCrypto from '../ImgCrypto/ImgCrypto';

import cryptoData from '../../constants/cryptoData/cryptoData';
import { hpDropdown } from '../../constants/itemConstants';
import {
  Btn,
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
  const [selected, setSelected] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const title = props.role === 'create' ? 'Create request' : 'Connect request';
  const buttonName = props.role === 'create' ? 'Create' : 'Connect';

  const toggleModal = () => {
    setSelected(-1);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Btn className="ui orange button" onClick={toggleModal}>
        {buttonName}
      </Btn>
      <Modal open={isOpen} onClose={toggleModal} className="customBackground">
        <StyleHeaderTitle className="customBackgroundTransparent" align="center">
          <Container>{title}</Container>
          <StyledCloseButton name="close" align="right" onClick={toggleModal} />
        </StyleHeaderTitle>
        <Modal.Content scrolling={true} className="customBackgroundTransparent">
          <Grid columns={2}>
            {cryptoData.map((item, index) => (
              <Grid.Column align="center" key={index}>
                <ImgCrypto
                  logo={item.logo}
                  person={item.person}
                  name={item.name}
                  mainColor={item.mainColor}
                  selected={selected}
                  callback={setSelected}
                  index={index}
                />
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
              <Btn className="ui orange button">Create</Btn>
            </Container>
          </StyledFooterModal>
        ) : (
          <StyledFooterModal>
            <StyledConnectWrapper align="right">
              <Btn className="ui orange button">Connect</Btn>
            </StyledConnectWrapper>
          </StyledFooterModal>
        )}
      </Modal>
    </div>
  );
};

export default ModalWindow;
