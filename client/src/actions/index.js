import http from '../services/http';
import * as types from './types';


const get = (url, type, dispatch) => http.get(url).then(res => {
  if (res && res.data)
    return dispatch({type, payload: res.data});
});

export const getReaders = url => dispatch => get(url, types.SET_READERS, dispatch);

export const getHealth = url => dispatch => get(url, types.SET_HEALTH, dispatch);

export const getOperations = url => dispatch => get(url, types.SET_OPERATIONS, dispatch);

export const setMessage = msg => dispatch => dispatch(
  {type: types.SET_MESSAGE, payload: msg}
);

export const startJob = (url, data) => dispatch => http.post(url, data)
  .then(res => {
    if (res && res.status === 200) dispatch(setMessage({
      type: 'success',
      message: "Job was started!"
    }));
    else dispatch(setMessage({
      type: 'error',
      message: "Server is unavailable, try it later"
    }));
  })
  .catch(e => dispatch(setMessage({
    type: 'error',
    message: "Server is unavailable, try it later"
  })));