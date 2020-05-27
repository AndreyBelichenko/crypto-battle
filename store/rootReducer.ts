import { combineReducers } from 'redux';

import userReducer from './redux/reducers/userReducer';
import sidebarReducer from './redux/reducers/sidebarReducer';

const rootReducer = combineReducers({
  user: userReducer,
  sideBar: sidebarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
