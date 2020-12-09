import { call, fork, put, take } from 'redux-saga/effects';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import * as taskTypes from './../constants/task';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    //======== BLOCK cho đến khi take xong =========//
    console.log('watch fetch list task action');
    const resp = yield call(getList);
    //======== BLOCK cho đến khi call xong =========//
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetchListTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      // dispatch action fetchListTaskFail
      yield put(fetchListTaskFailed(data));
    }
  }
}

function* watchCreateTaskAction() {
  console.log('watch create list task action')
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;