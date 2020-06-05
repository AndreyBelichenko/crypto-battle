import * as React from 'react';
import { connect } from 'react-redux';

import { sortArray } from '../../utils/helpers';
import ActiveBattleCard from '../activeBattleCard/activeBattleCard';
import { AppState } from '../../store/rootReducer';
import Chart from '../chart/chart';

const Battle: React.FC<any> = ({ allBattle, userData }) => {
  const [chart, setIsChart] = React.useState(false);
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const filterArray = sortArray(showBattles, userData.id);
  return (
    <div>
      {filterArray &&
        filterArray.map((item: any, index: number) => (
          <ActiveBattleCard card={item} key={item._id} setIsChart={setIsChart} chart={chart} index={index} />
        ))}
      {/*<div style={{ height: '400px' }}>*/}
      {/*  <Chart crypto={'BITFINEX:BTCUSD'} />*/}
      {/*</div>*/}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(Battle);
