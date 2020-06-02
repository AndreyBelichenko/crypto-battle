import * as React from 'react';
import { connect } from 'react-redux';

import ActiveBattleCard from '../activeBattleCard/activeBattleCard';
import { AppState } from '../../store/rootReducer';

const Battle: React.FC<any> = ({ allBattle }) => {
  const [chart, setIsChart] = React.useState(false);
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');

  return (
    <div>
      {showBattles &&
        showBattles.map((item: any, index: number) => (
          <ActiveBattleCard card={item} key={item._id} setIsChart={setIsChart} chart={chart} index={index} />
        ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(Battle);
