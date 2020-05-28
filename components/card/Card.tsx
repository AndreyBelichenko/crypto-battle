import * as React from 'react';
import { useSelector } from 'react-redux';

import{ BattleDataType } from '../../store/redux/reducers/battleReducer';
import LeftBlock from './leftBlock/LeftBlock';
import RightBlock from './rightBlock/RightBlock';
import BattleBlock from './battleBlock/BattleBlock';
import BattleLoader from './battleLoader/battleLoader';
import RightBlockWait from './rightBlockWaiting/RightBlockWaiting';

import { MainDiv } from './styledComponent';

interface RootState {
  battle: {
    battleData: BattleDataType;
  };
}

const BattleCard: React.FC = () => {
  const isBattle = useSelector((state: RootState) => state.battle.battleData);
  return (
      <MainDiv>
        <LeftBlock/>
        {isBattle ? <BattleBlock/> : <BattleLoader/>}
        {isBattle ? <RightBlock/> : <RightBlockWait/>}
      </MainDiv>
  );
};

export default BattleCard;
