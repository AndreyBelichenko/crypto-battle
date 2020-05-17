import { put } from 'redux-saga/effects';

import * as action from '../../redux/actionCreators/actionCreators';

interface payloadInterface {
  type: string;
  payload: object
}

export function* authUserData(payload: payloadInterface) {
  yield put(action.setAuthStoreUserData(payload.payload));
}

export function* logOut() {
  yield put(action.logOutStore());
}
