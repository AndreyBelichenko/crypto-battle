import { combineReducers } from 'redux';

import userReducer from './redux/reducers/userReducer';
import sidebarReducer from './redux/reducers/sidebarReducer';
import allBattleReducer from './redux/reducers/allBattlesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  sideBar: sidebarReducer,
  allBattle: allBattleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
