import http from '../services/http';
import * as types from './types';


const get = (url, type, dispatch) => http.get(url).then(res => {
  if (res && res.data)
    return dispatch({type, payload: res.data});
});

export const getReaders = url => dispatch => get(url, types.SET_READERS, dispatch);
