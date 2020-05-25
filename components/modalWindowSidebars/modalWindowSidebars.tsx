import React from 'react';
import { Modal, Image } from 'semantic-ui-react';

import SidebarSelf from '../sidebarSelf/SidebarSelf';

import { topCrypto, topWarriors } from '../../mockData/topSidebars';
import {
  ItemMenuImage,
  ItemMenuImageHover,
  ItemMenuName,
  ItemMenuWrapper,
  MenuItem,
  StyledCloseButton,
  StyleModalContent,
} from '../../commonStyles/styledApp';

interface ModalProps {
  content: any;
  role: string;
  setVisible: (a: any) => void;
}

const ModalWindowSidebars = (props: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = React.useCallback(() => {
    props.setVisible(false);
    setIsOpen(!isOpen);
  }, [isOpen]);
  const modalData = props.role === 'crypto' ? topCrypto : topWarriors;

  return (
    <div>
      <MenuItem onClick={toggleModal}>
        <ItemMenuWrapper>
          <ItemMenuImage>
            <Image src={props.content.image} />
          </ItemMenuImage>
          <ItemMenuImageHover>
            <Image src={props.content.imageHover} />
          </ItemMenuImageHover>
          <ItemMenuName>{props.content.name}</ItemMenuName>
        </ItemMenuWrapper>
      </MenuItem>
      <Modal open={isOpen} onClose={toggleModal} className="customBackgroundSidebars">
        <StyleModalContent>
          <SidebarSelf role={props.role} data={modalData} height={true} />
          <StyledCloseButton src="/static/closeMini.svg" onClick={toggleModal} />
        </StyleModalContent>
      </Modal>
    </div>
  );
};

export default ModalWindowSidebars;