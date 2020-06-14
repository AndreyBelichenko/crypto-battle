import * as React from 'react';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';
import { AppState } from '../../store/rootReducer';

import { LayoutWrapper } from './styledComponents';
import { SetRequestBattles } from '../../store/redux/actionCreators/actionCreators';

const Layout: React.FC<any> = ({ allBattle, setRequestBattles }) => {
  const filterBattles = allBattle.filter((item: any) => item.gameStatus !== 'END');
  const [countBattles, setCountBattles] = React.useState(5);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - (scrollTop + 150) <= clientHeight) {
      setCountBattles(countBattles + 5);
    }
  };

  React.useEffect(() => {
    setRequestBattles({
      skip: 0,
      limit: countBattles,
      sort: 'desc',
      state: 'waiting',
    });
  }, [countBattles]);

  return (
    <LayoutWrapper onScroll={handleScroll}>
      {filterBattles.map((item: any) => (
        <BattleCard item={item} key={item._id} />
      ))}
    </LayoutWrapper>
  );
};

export default connect(
  (state: AppState) => ({
    allBattle: state.allBattle.allBattleData,
  }),
  (dispatch: any) => ({
    setRequestBattles: (payload: any) => dispatch(SetRequestBattles(payload)),
  }),
)(Layout);
