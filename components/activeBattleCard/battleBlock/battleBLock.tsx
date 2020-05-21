import * as React from 'react';

import { BattleWrapper, KnifesBlock, BattleDescriptionBlock, KnifeOne, KnifeTwo } from './styledActiveBattle';

const BattleBlock: React.FC = () => {
  return (
    <BattleWrapper>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      <BattleDescriptionBlock />
    </BattleWrapper>
  );
};

export default BattleBlock;
