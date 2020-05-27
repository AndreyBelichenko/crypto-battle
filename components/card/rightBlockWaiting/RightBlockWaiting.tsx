import * as React from 'react';

import ModalWindow from '../../modalWindow/modalWindow';

import { ButtonBlock } from './rightBlockWaitStyledComponent';

const RightBlockWait = () => {
  return (
    <ButtonBlock>
      <ModalWindow role="connect" />
    </ButtonBlock>
  );
};

export default RightBlockWait;
