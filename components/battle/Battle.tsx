import * as React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import LoaderSemantic from '../loader/Loader';
import BattleCard from '../card/Card';
import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';
import { SetRequestBattles } from '../../store/redux/actionCreators/actionCreators';

import { LayoutWrapper } from '../ layout/styledComponents';

const Battle: React.FC<any> = ({ allBattle, userData, setRequestBattles, isLoad }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'START');
  const filterBattles = sortArray(showBattles, userData.id);
  const [countBattles, setCountBattles] = React.useState(5);
  const router = useRouter();

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setCountBattles(countBattles + 5);
    }
  };

  React.useEffect(() => {
    setRequestBattles({
      skip: 0,
      limit: countBattles,
      sort: 'desc',
      state: 'start',
    });
  }, [countBattles]);

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
    <LayoutWrapper onScroll={handleScroll}>
      {filterBattles.map((item: any) => (
        <div onClick={handleRoute.bind(null, item)} key={item._id}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
