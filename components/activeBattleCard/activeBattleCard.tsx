import * as React from 'react';

import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';

import { ParentDiv, MainDiv } from './styledActiveBattle';

const ActiveBattleCard: React.FC = () => {
  return (
    <ParentDiv>
      <MainDiv>
        <LeftGamer />
        <BattleBlock />
        <RightGamer />
      </MainDiv>
    </ParentDiv>
  );
};

export default ActiveBattleCard;
