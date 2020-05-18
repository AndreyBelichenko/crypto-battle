import { combineReducers } from 'redux';

import userReducer from '../store/redux/reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
