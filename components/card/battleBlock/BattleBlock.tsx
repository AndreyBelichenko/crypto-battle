import * as React from 'react';
import { Image } from 'semantic-ui-react';

import { BattleWrapper, KnifesBlock, BattleImg } from './battleStyledComponent';

const BattleBlock: React.FC = () => {
  return (
    <BattleWrapper>
      <KnifesBlock>
        <Image src={'/static/gifSwords.gif'} />
      </KnifesBlock>
      <BattleImg src="/static/vs.png" />
    </BattleWrapper>
  );
};

export default BattleBlock;
