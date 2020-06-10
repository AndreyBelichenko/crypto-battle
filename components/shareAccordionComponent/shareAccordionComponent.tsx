import React from 'react';

import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import { Accordion } from 'semantic-ui-react';
import { ShareButton } from './styledComponent';

const titlePage = 'Share';

interface ShareProps {
  battleId?: number;
  page?: string;
}

const ShareAccordionComponent = (props: ShareProps) => {
  const battleId = props.battleId;
  const page = props.page;

  const panel = [
    {
      key: 'share',
      title: {
        content: '',
        icon: (
          <ShareButton src="./static/share.svg"/>
        ),
      },
      content: {
        content: (
          <div>
            <FacebookShareButton
              url={`http://crypto-battle.pp.ua${page}/#${battleId}`}
              quote={titlePage}
            >
              <FacebookIcon size={37} round/>
            </FacebookShareButton>
            <TwitterShareButton
              url={`http://crypto-battle.pp.ua${page}/#${battleId}`}
              title={titlePage}>
              <TwitterIcon size={37} round />
            </TwitterShareButton>
          </div>
        ),
      },
    },
  ];

  return (<Accordion panels={panel}/>
  );
};

export default ShareAccordionComponent;
