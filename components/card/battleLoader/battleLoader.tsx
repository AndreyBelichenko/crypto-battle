import * as React from 'react';
import { Image } from 'semantic-ui-react';

import { BattleWrapper } from './styledComponent';

const BattleLoader: React.FC = () => {
  return (
    <BattleWrapper>
      < Image src="/static/vsWait.svg"/>
    </BattleWrapper>
  );
};

export default BattleLoader;
