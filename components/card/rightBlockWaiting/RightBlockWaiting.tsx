import * as React from 'react';
import { useSelector } from 'react-redux';

import LoaderSemantic from '../../loader/Loader';
import ModalWindow from '../../modalWindow/modalWindow';

import { ButtonBlock, LoaderBlock } from './rightBlockWaitStyledComponent';
import { AppState } from '../../../store/rootReducer';

interface RightBlockWaitProps {
  data: any;
}

const RightBlockWait = (props: RightBlockWaitProps) => {
  const userData = useSelector((state: AppState) => state.user.userData);
  return (
    <ButtonBlock>
      {userData.id !== props.data.firstPlayer.userInfo._id ? (
        <ModalWindow role="connect" battleId={props.data._id} playerCrypto={props.data.firstPlayer.cryptoName} />
      ) : (
        <LoaderBlock>
          <LoaderSemantic marginNeed={true} />
        </LoaderBlock>
      )}
    </ButtonBlock>
  );
};

export default RightBlockWait;
