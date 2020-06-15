import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import { Accordion, List, Transition } from 'semantic-ui-react';

import { ShareButton, BtnSocShare, BtnSocShareText } from './styledComponent';

interface ShareProps {
  battleId?: number;
  page?: string;
  position: boolean;
}

const ShareAccordionComponent = (props: ShareProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const positionName = props.position ? 'listAbsolute' : 'listRelative';
  const page = props.page;
  const titlePage = 'Share';
  const panel = [
    {
      key: 'share',
      title: {
        content: '',
        icon: (
          <ShareButton
            src="./static/sharePict.svg"
            big={props.position}
            onClick={() => setIsVisible((prev) => !prev)}
          />
        ),
      },
      content: {
        content: (
          <Transition visible={isVisible} animation="scale" duration={200}>
            <List divided relaxed className={positionName}>
              <List.Item className={'listItemHover'}>
                <BtnSocShare>
                  <FacebookShareButton url={`http://crypto-battle.pp.ua${page}`} quote={titlePage}>
                    <FacebookIcon size={20} round />
                  </FacebookShareButton>
                  <BtnSocShareText>Facebook</BtnSocShareText>
                </BtnSocShare>
              </List.Item>
              <List.Item className={'listItemHover'}>
                <BtnSocShare>
                  <TwitterShareButton url={`http://crypto-battle.pp.ua${page}`} title={titlePage}>
                    <TwitterIcon size={20} round />
                  </TwitterShareButton>
                  <BtnSocShareText>Twitter</BtnSocShareText>
                </BtnSocShare>
              </List.Item>
            </List>
          </Transition>
        ),
      },
    },
  ];

  return <Accordion panels={panel} />;
};

export default ShareAccordionComponent;
