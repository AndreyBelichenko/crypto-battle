import * as React from 'react';
import { useSelector } from 'react-redux';

import LoaderSemantic from '../../loader/Loader';
import ModalWindow from '../../modalWindow/modalWindow';
import { AppState } from '../../../store/rootReducer';
import ShareAccordionComponent from '../../shareAccordionComponent/shareAccordionComponent';

import { ButtonBlock, LoaderBlock, ShareBlock } from './rightBlockWaitStyledComponent';

interface RightBlockWaitProps {
  data: any;
}

const RightBlockWait = (props: RightBlockWaitProps) => {
  const userData = useSelector((state: AppState) => state.user.userData);
  const playerInfo = props.data.firstPlayer;
  return (
    <ButtonBlock>
      {userData.id !== playerInfo.userInfo._id ? (
        <ModalWindow role="connect" battleId={props.data._id} playerCrypto={playerInfo.cryptoName} />
      ) : (
        <>
        <LoaderBlock>
          <LoaderSemantic marginNeed={true} />
        </LoaderBlock>
        <ShareBlock>
        <ShareAccordionComponent battleId={props.data._id} page={''}/>
        </ShareBlock>
        </>
      )}
    </ButtonBlock>
  );
};

export default RightBlockWait;
