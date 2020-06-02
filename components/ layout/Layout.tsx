import * as React from 'react';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';
import { AppState } from '../../store/rootReducer';

import { LayoutWrapper } from './styledComponents';

const Layout: React.FC<any> = ({ allBattle }) => {
  const filterBattles = allBattle.filter((item: any) => item.gameStatus !== 'END');
  return (
    <LayoutWrapper>
      {filterBattles.map((item: any) => (
        <BattleCard item={item} key={item._id} />
      ))}
    </LayoutWrapper>
  );
};

export default connect((state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
}))(Layout);
