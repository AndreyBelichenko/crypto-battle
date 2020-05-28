import { combineReducers } from 'redux';

import userReducer from './redux/reducers/userReducer';
import sidebarReducer from './redux/reducers/sidebarReducer';
import battleReducer from './redux/reducers/battleReducer';

const rootReducer = combineReducers({
  user: userReducer,
  sideBar: sidebarReducer,
  battle: battleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
