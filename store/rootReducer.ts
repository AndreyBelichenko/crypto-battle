import { combineReducers } from 'redux';

import userReducer from './redux/reducers/userReducer';
import battleReducer from './redux/reducers/battleReducer';

const rootReducer = combineReducers({
  user: userReducer,
  battle: battleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
