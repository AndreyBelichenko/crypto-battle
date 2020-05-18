import { put } from 'redux-saga/effects';

import * as action from '../../redux/actionCreators/actionCreators';

export function* authUserData(payload:object) {
  yield put(action.setAuthStoreUserData(payload));
}

export function* logOut() {
  yield put(action.logOutStore());
}
