import * as React from 'react';
import { connect } from 'react-redux';

import BattleCard from '../card/Card';
import LoaderSemantic from '../loader/Loader';
import { AppState } from '../../store/rootReducer';
import { clearBattles, SetRequestBattles } from '../../store/redux/actionCreators/actionCreators';

import { LayoutWrapper } from './styledComponents';

const Layout: React.FC<any> = ({ allBattle, setRequestBattles, isLoad, clearBattles }): any => {
  const filterBattles = allBattle.filter((item: any) => item.gameStatus === 'WAITING');
  const [countBattles, setCountBattles] = React.useState(10);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setCountBattles(countBattles + 1);
    }
  };

  React.useEffect(() => {
    clearBattles();
    setCountBattles((prevState) => prevState + 1);
  }, []);

  React.useEffect(() => {
    if (countBattles > 10) {
      setRequestBattles({
        skip: allBattle.length,
        limit: 10,
        sort: 'desc',
        state: 'start',
      });
    }
  }, [countBattles]);

  return (
    Boolean(filterBattles.length) && (
      <LayoutWrapper onScroll={handleScroll}>
        {filterBattles.map((item: any) => (
          <BattleCard item={item} key={item._id} />
        ))}
        {isLoad && <LoaderSemantic marginNeed={true} />}
      </LayoutWrapper>
    )
  );
};

export default connect(
  (state: AppState) => ({
    allBattle: state.allBattle.allBattleData,
    isLoad: state.allBattle.isLoad,
  }),
  (dispatch: any) => ({
    setRequestBattles: (payload: any) => dispatch(SetRequestBattles(payload)),
    clearBattles: () => dispatch(clearBattles()),
  }),
)(Layout);
