import { put } from 'redux-saga/effects';

import * as action from '../../redux/actionCreators/actionCreators';

export function* logOut() {
  yield put(action.logOutStore());
}
