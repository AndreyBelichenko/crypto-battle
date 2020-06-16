import * as React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import LoaderSemantic from '../loader/Loader';
import BattleCard from '../card/Card';
import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';
import { clearBattles, SetRequestBattles } from '../../store/redux/actionCreators/actionCreators';

import { LayoutWrapper } from '../ layout/styledComponents';

const Battle: React.FC<any> = ({ allBattle, userData, setRequestBattles, isLoad, clearBattles }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const filterBattles = sortArray(showBattles, userData.id);
  const [countBattles, setCountBattles] = React.useState(5);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setCountBattles(countBattles + 1);
    }
  };

  React.useEffect(() => {
    clearBattles();
  }, []);

  React.useEffect(() => {
    setRequestBattles({
      skip: allBattle.length,
      limit: 10,
      sort: 'desc',
      state: 'start',
    });
  }, [countBattles]);

  return (
    <LayoutWrapper onScroll={handleScroll}>
      {filterBattles.map((item: any) => (
        <div key={item._id}>
          <BattleCard item={item} />
        </div>
      ))}
      {isLoad && <LoaderSemantic marginNeed={true} />}
    </LayoutWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
  isLoad: state.allBattle.isLoad,
});

const mapDispatchToProps = (dispatch: any) => ({
  setRequestBattles: (payload: any) => dispatch(SetRequestBattles(payload)),
  clearBattles: () => dispatch(clearBattles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
