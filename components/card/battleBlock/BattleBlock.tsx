import * as React from 'react';
import { Image } from 'semantic-ui-react';

import { BattleWrapper, KnifesBlock,  KnifeOne, KnifeTwo } from './battleStyledComponent';

const BattleBlock: React.FC = () => {
  return (
    <BattleWrapper>
      <KnifesBlock>
        <KnifeOne src="/static/knife.svg" />
        <KnifeTwo src="/static/knife.svg" />
      </KnifesBlock>
      < Image src="/static/vs.png"/>
    </BattleWrapper>
  );
};

export default BattleBlock;
