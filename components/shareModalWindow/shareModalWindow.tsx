import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

import { ShareButton, StyleHeaderTitle, StyledCloseButton, ButtonBlock, ButtonItem, TitleBlock, ShareButtonModal, ShareIcon } from './styledComponent';

interface ModalProps {
  role: string;
}

const ShareModalWindow = (props:ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isShare = props.role === 'share';
  const title = isShare ? 'Share battle' : null ;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const shareUrl = 'http://localhost:3000/';
  const titlePage = 'GitHub';

  return (
    <div>
        <ShareButton src="./static/share.svg" onClick={toggleModal}/>
      <Modal open={isOpen} onClose={toggleModal} className="modalWrapper">
        <StyleHeaderTitle align="center">
          <TitleBlock>{title}</TitleBlock>
          <StyledCloseButton name="close" align="right" onClick={toggleModal} size="small"/>
          <ButtonBlock>
            <ButtonItem>
            <FacebookShareButton
              url={shareUrl}
              quote={titlePage}
            >
              <FacebookIcon size={37} round />
            </FacebookShareButton>
            </ButtonItem>
            <ButtonItem>
            <TwitterShareButton
              url={shareUrl}
              title={titlePage}>
              <TwitterIcon size={37} round />
            </TwitterShareButton>
            </ButtonItem>
            <ButtonItem>
            <ShareButtonModal
              title={titlePage}>
              <ShareIcon src="./static/Hive.svg" />
            </ShareButtonModal>
            </ButtonItem>
          </ButtonBlock>
        </StyleHeaderTitle>
      </Modal>
    </div>
  );

};

export default ShareModalWindow;
