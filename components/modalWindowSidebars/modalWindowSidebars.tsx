import React from 'react';

import { connect } from 'react-redux';
import { Modal, Image } from 'semantic-ui-react';

import SidebarSelf from '../sidebarSelf/SidebarSelf';
import { AppState } from '../../store/rootReducer';
import * as actions from '../../store/redux/actionCreators/actionCreators';

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
  topCrypto: any;
  topWarriors: any;
}

const ModalWindowSidebars = (props: ModalProps) => {
  React.useEffect(() => {
    actions.setSidebarWarriors('top-warriors');
    actions.setSidebarCrypto('crypto-currencies');
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = React.useCallback(() => {
    props.setVisible(false);
    setIsOpen(!isOpen);
  }, [isOpen]);
  const modalData = props.role === 'crypto' ? props.topCrypto.crypto : props.topWarriors.users;
  const hasMore = props.role === 'crypto' ? props.topCrypto.hasMore : props.topWarriors.hasMore;
  const load = props.role === 'crypto' ? props.topCrypto.load : props.topWarriors.load;
  const modalClassName = props.role === 'crypto' ? 'cryptoModal' : 'warriorsModal';

  return (
    <div className={modalClassName}>
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
          <SidebarSelf role={props.role} data={modalData} height={true} hasMore={hasMore} load={load} />
          <StyledCloseButton src="/static/closeMini.svg" onClick={toggleModal} />
        </StyleModalContent>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  userData: state.user.userData,
  topWarriors: state.sideBar.warriors,
  topCrypto: state.sideBar.crypto,
});

const mapDispatchToProps = (dispatch: any) => ({
  setSidebarWarriors: (type: string) => dispatch(actions.setSidebarWarriors(type)),
  setSidebarCrypto: (type: string, skip: number | undefined) => dispatch(actions.setSidebarCrypto(type, skip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowSidebars);
