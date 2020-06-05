import * as React from 'react';

import BattleBlock from './battleBlock/battleBLock';
import LeftGamer from './leftGamer/leftGamer';
import RightGamer from './rightGamer/rightGamer';

import { ParentDiv, MainDiv, ActiveCardWrapper } from './styledActiveBattle';

const ActiveBattleCard: React.FC<any> = (props: any) => {
  return (
    <ActiveCardWrapper>
      <ParentDiv>
        <MainDiv>
          <LeftGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
          <BattleBlock cardData={props.card} />
          <RightGamer cardData={props.card} setIsChart={props.setIsChart} chart={props.chart} index={props.index} />
        </MainDiv>
      </ParentDiv>
    </ActiveCardWrapper>
  );
};

export default ActiveBattleCard;
