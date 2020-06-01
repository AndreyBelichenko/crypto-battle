import * as React from 'react';

import ActiveBattleCard from '../activeBattleCard/activeBattleCard';
import { AppState } from '../../store/rootReducer';
import { connect } from 'react-redux';
import { setFirstPlace } from '../../utils/helpers';

const Battle: React.FC<any> = ({ allBattle, userData }) => {
  const [chart, setIsChart] = React.useState(false);
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const sortBattles = setFirstPlace(showBattles, userData.id);
  return (
    <div>
      {sortBattles &&
        sortBattles.map((item: any, index: number) => (
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
