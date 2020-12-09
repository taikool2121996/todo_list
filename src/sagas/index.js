import { call, fork, put, take, delay } from 'redux-saga/effects';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { getList } from './../apis/task';
import { STATUS_CODE } from './../constants';
import * as taskTypes from './../constants/task';

/**
 * Step 1: Dispatch Action Fetch Task
 * Step 2: Call API
 * Step 2.1: Show Process Bar (Loading)
 * Step 3: Test Status codes ( Success or Fail)
 * Step 4: Turn off loading bar
 * Step 5: Dispatch next task.
 */
function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    //======== BLOCK cho đến khi take xong =========//
    yield put(showLoading());
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
    yield delay(1000);
    yield put(hideLoading());
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