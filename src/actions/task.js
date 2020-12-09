import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    }
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
/**
 * Step 1: fetchListTaskRequest()
 * Step 2: Reset: state tasks => []
 * Step 3: fetchListTaskSuccess( data response)
 */
export const fetchListTaskRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then(resp => {
        const { data } = resp;
        dispatch(fetchListTaskSuccess(data));
      })
      .catch(error => {
        dispatch(fetchListTaskFailed(error));
      });
  };
};