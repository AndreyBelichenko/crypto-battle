import { all, fork } from 'redux-saga/effects';

import watchSetUserData from '../saga/sagas/watchersSaga';

const root = [
  watchSetUserData,
];

export default function* rootSaga() {
  yield all(root.map(fork));
}
