import * as React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import BattleCard from '../card/Card';
import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';
import { LayoutWrapper } from '../ layout/styledComponents';

const Battle: React.FC<any> = ({ allBattle, userData }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const filterBattles = sortArray(showBattles, userData.id);
  const router = useRouter();

  const handleRoute = (item: any) =>
    router.push({
      pathname: '/active-battle',
      query: {
        firstPlayer: item.firstPlayer.userInfo.alias,
        secondPlayer: item.secondPlayer.userInfo.alias,
        battleId: item._id,
      },
    });

  return (
    <LayoutWrapper>
      {filterBattles.map((item: any) => (
        <div onClick={handleRoute.bind(null, item)} key={item._id}>
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
