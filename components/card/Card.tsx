import * as React from 'react';

import LeftBlock from './leftBlock/LeftBlock';
import RightBlock from './rightBlock/RightBlock';
import BattleBlock from './battleBlock/BattleBlock';
import BattleLoader from './battleLoader/battleLoader';
import RightBlockWait from './rightBlockWaiting/RightBlockWaiting';

import { MainDiv } from './styledComponent';

interface BattleCardProps {
  item: any;
}

const BattleCard: React.FC<BattleCardProps> = (props: BattleCardProps) => {
  const waiting = props.item.gameStatus === 'WAITING';
  return (
    <MainDiv>
      <LeftBlock data={props.item} />
      {waiting ? <BattleLoader /> : <BattleBlock />}
      {waiting ? <RightBlockWait data={props.item} /> : <RightBlock data={props.item} />}
    </MainDiv>
  );
};

export default BattleCard;
