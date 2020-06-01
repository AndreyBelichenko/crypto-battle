import * as React from 'react';

import ModalWindow from '../../modalWindow/modalWindow';

import { ButtonBlock } from './rightBlockWaitStyledComponent';

interface RightBlockWaitProps {
  data: any;
}

const RightBlockWait = (props: RightBlockWaitProps) => {
  return (
    <ButtonBlock>
      <ModalWindow role="connect" battleId={props.data._id} playerCrypto={props.data.firstPlayer.cryptoName} />
    </ButtonBlock>
  );
};

export default RightBlockWait;
