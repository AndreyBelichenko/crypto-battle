import * as React from 'react';

import { BattleWrapper, KnifesBlock,  KnifeOne, KnifeTwo, BattleImg } from './battleStyledComponent';

const BattleBlock: React.FC = () => {
  return (
    <BattleWrapper>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      < BattleImg src="/static/vs.png"/>
    </BattleWrapper>
  );
};

export default BattleBlock;
