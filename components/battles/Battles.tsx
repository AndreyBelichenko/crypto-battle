import * as React from 'react';

import Header from '../header/Header';

import { BattlesWrapper, BattlesHeader, BattlesContentWrapper } from './styledComponents';

const Battles: React.FC = () => {
  return(
    <BattlesWrapper>
      <BattlesHeader>
        <Header/>
      </BattlesHeader>
      <BattlesContentWrapper>
        Battles will be here
      </BattlesContentWrapper>
    </BattlesWrapper>
  );
};

export default Battles;
