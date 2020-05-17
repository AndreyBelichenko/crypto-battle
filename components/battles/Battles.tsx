import * as React from 'react';

import Header from '../header/Header';

import Sidebar from '../sidebar/Sidebar';

import{ BattlesWrapper,
  BattlesHeader,
  BattlesContentWrapper,
  BattlesSidebar,
  BattlesMainContent} from './styledComponent';

const Battles: React.FC = () => {
  return(
      <BattlesWrapper>
        <BattlesHeader>
          <Header/>
        </BattlesHeader>
        <BattlesSidebar>
          <BattlesContentWrapper>
            <Sidebar/>
          </BattlesContentWrapper>
          <BattlesMainContent>
            <div >Battles are here</div>
          </BattlesMainContent>
          <BattlesContentWrapper>
            <Sidebar/>
          </BattlesContentWrapper>
        </BattlesSidebar>
      </BattlesWrapper>
  );
};

export default Battles;
