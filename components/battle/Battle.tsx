import * as React from 'react';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';
import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';
import { LayoutWrapper } from '../ layout/styledComponents';

const Battle: React.FC<any> = ({ allBattle, userData }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const filterBattles = sortArray(showBattles, userData.id);

  return (
    <LayoutWrapper>
      {filterBattles.map((item: any) => (
        <div key={item._id}>
          <BattleCard item={item} />
        </div>
      ))}
    </LayoutWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(Battle);
