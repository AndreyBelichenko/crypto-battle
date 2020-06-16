import * as React from 'react';
import { connect } from 'react-redux';

import StoryCardBattle from '../srotyCardBattle/StoryCardBattle';
import LoaderSemantic from '../loader/Loader';
import { clearBattles, SetRequestBattles } from '../../store/redux/actionCreators/actionCreators';
import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';

import { StoryWrapper } from './styledStoryPage';

const StoryPage: React.FC<any> = ({ allBattle, userData, setRequestBattles, isLoad, clearBattles }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'END');
  const [countBattles, setCountBattles] = React.useState(10);
  const filterArray = sortArray(showBattles, userData.id);

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
        state: 'end',
      });
    }
  }, [countBattles]);

  return (
    <StoryWrapper onScroll={handleScroll}>
      {filterArray && filterArray.map((item: any) => <StoryCardBattle card={item} />)}
      {isLoad && <LoaderSemantic marginNeed={true} />}
    </StoryWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
