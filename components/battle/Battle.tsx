import * as React from 'react';

import ActiveBattleCard from '../activeBattleCard/activeBattleCard';
import { AppState } from '../../store/rootReducer';
import { connect } from 'react-redux';

const Battle: React.FC<any> = ({ allBattle, userData }) => {
  return (
    <div>
      {allBattle
        .filter(
          (item: any) =>
            item.gameStatus === 'START' &&
            (item.firstPlayer.userInfo._id === userData.id || item.secondPlayer.userInfo._id === userData.id),
        )
        .map((item: any) => (
          <ActiveBattleCard card={item} key={item._id} />
        ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(Battle);
