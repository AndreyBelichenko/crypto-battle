import * as React from 'react';

import { BattleWrapper, BattleImg } from './styledComponent';

const BattleLoader: React.FC = () => {
  return (
    <BattleWrapper>
      <BattleImg src="/static/vsWait.svg" />
    </BattleWrapper>
  );
};

export default BattleLoader;
