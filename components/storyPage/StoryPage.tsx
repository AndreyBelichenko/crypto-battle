import * as React from 'react';
import { connect } from 'react-redux';

import StoryCardBattle from '../srotyCardBattle/StoryCardBattle';

import { sortArray } from '../../utils/helpers';
import { AppState } from '../../store/rootReducer';

import { StoryWrapper } from './styledStoryPage';

const StoryPage: React.FC<any> = ({ allBattle, userData }) => {
  const showBattles = allBattle.filter((item: any) => item.gameStatus === 'END');
  const filterArray = sortArray(showBattles, userData.id);
  return (
    <StoryWrapper>
      {filterArray && filterArray.map((item: any) => <StoryCardBattle card={item} key={item._id} />)}
    </StoryWrapper>
  );
};

const mapStateToProps = (state: AppState) => ({
  allBattle: state.allBattle.allBattleData,
  userData: state.user.userData,
});

export default connect(mapStateToProps, null)(StoryPage);
