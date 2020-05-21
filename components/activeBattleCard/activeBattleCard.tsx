import * as React from 'react';
import { ParentDiv, MainDiv } from './styledComponent';
import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';
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
