import * as React from 'react';

import LeftBlock from './leftBlock/LeftBlock';
import RightBlock from './rightBlock/RightBlock';
import { MainDiv, BattleFinished } from './styledStoryCard';

const StoryCardBattle: React.FC<any> = (props: any) => {
  return (
    <MainDiv key={props.card._id}>
      <LeftBlock data={props.card} />
      <BattleFinished>Finished</BattleFinished>
      <RightBlock data={props.card} />
    </MainDiv>
  );
};

export default StoryCardBattle;
