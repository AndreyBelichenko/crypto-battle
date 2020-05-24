import * as React from 'react';

import { ButtonBlock } from './rightBlockWaitStyledComponent';
import ModalWindow from '../../modalWindow/modalWindow';

const RightBlockWait = () => {
  return (
    <ButtonBlock>
      <ModalWindow role="connect" />
    </ButtonBlock>
  );
};

export default RightBlockWait;
