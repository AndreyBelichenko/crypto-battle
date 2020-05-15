import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../../redux/actionTypes/actionTypes';
import * as worker from './workersSaga';

export default function* watchSetUserData() {
    yield takeEvery(actionTypes.AUTH_USER_DATA, worker.authUserData);
    yield takeEvery(actionTypes.LOG_OUT, worker.logOut);
}