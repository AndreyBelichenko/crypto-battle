import React, { useState } from 'react';
import { Modal, Grid, Container } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import ImgCrypto from '../ImgCrypto/ImgCrypto';

import { SocketConnection } from '../../socketConnection/socketConnection';
import { AppState } from '../../store/rootReducer';
// import cryptoData from '../../constants/cryptoData/cryptoData';
import { modalDataCrypto, hpDropdown } from '../../constants/itemConstants';

import {
  Btn,
  StyledHeaderHp,
  StyleHeaderTitle,
  StyledFooterModal,
  StyledDropDown,
  StyledCloseButton,
  StyledConnectWrapper,
  UnderNameBlock,
  DropdownWrapper,
  CreateWrapper,
} from './styledModalWindow';

interface ModalProps {
  role: string;
  battleId?: number;
  playerCrypto?: string;
}

const ModalWindow = (props: ModalProps) => {
  const [selected, setSelected] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [disableCreateBtn, setDisableCreate] = useState(true);
  const [disableConnectBtn, setDisableConnect] = useState(true);
  const [dropDownValue, setDropDownValue] = useState(null);
  const userData = useSelector((state: AppState) => state.user.userData);
  const isCreate = props.role === 'create';
  const title = isCreate ? 'Create request' : 'Connect request';
  const buttonName = isCreate ? 'Create Request' : 'Connect';

  React.useEffect(() => {
    if (isCreate) {
      selected === -1 || !dropDownValue ? setDisableCreate(true) : setDisableCreate(false);
    } else {
      selected === -1 ? setDisableConnect(true) : setDisableConnect(false);
    }
  });

  const toggleModal = () => {
    setSelected(-1);
    setIsOpen(!isOpen);
  };

  const connectHandle = () => {
    SocketConnection.getSocket().send(
      JSON.stringify({
        method: 'connect_battle',
        params: {
          cryptoName: modalDataCrypto[selected].name,
          playerID: userData.id,
          battleID: props.battleId,
        },
      }),
    );
    toggleModal();
  };

  const createBattle = () => {
    SocketConnection.getSocket().send(
      JSON.stringify({
        method: 'create_battle',
        params: { cryptoName: modalDataCrypto[selected].name, playerID: userData.id, healthPoints: dropDownValue },
      }),
    );
    toggleModal();
  };

  // @ts-ignore
  const handleChangeDropValue = (event: any, { value }: any) => setDropDownValue(value);

  return (
    <div>
      <Btn className="ui orange button adaptive" onClick={toggleModal}>
        {buttonName}
      </Btn>
      <Modal open={isOpen} onClose={toggleModal} className="customBackground">
        <StyleHeaderTitle className="customBackgroundTransparent" align="center">
          <Container>{title}</Container>
          <StyledCloseButton name="close" align="right" onClick={toggleModal} />
        </StyleHeaderTitle>
        <Modal.Content scrolling={true} className="customBackgroundTransparent">
          <Grid stackable columns="2">
            {modalDataCrypto.map(
              (item, index) =>
                props.playerCrypto !== item.name && (
                  <Grid.Column key={index}>
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
                ),
            )}
          </Grid>
        </Modal.Content>
        {props.role === 'create' ? (
          <StyledFooterModal>
            <StyledHeaderHp align="center">Choose the number of hp in battle</StyledHeaderHp>
            <UnderNameBlock>
              <DropdownWrapper>
                <StyledDropDown
                  align="center"
                  clearable
                  options={hpDropdown}
                  selection
                  onChange={handleChangeDropValue}
                />
              </DropdownWrapper>
              <CreateWrapper>
                <Btn className="ui orange button" onClick={createBattle} disabled={disableCreateBtn}>
                  Create
                </Btn>
              </CreateWrapper>
            </UnderNameBlock>
          </StyledFooterModal>
        ) : (
          <StyledFooterModal>
            <StyledConnectWrapper align="right">
              <Btn className="ui orange button" onClick={connectHandle} disabled={disableConnectBtn}>
                Connect
              </Btn>
            </StyledConnectWrapper>
          </StyledFooterModal>
        )}
      </Modal>
    </div>
  );
};

export default ModalWindow;
