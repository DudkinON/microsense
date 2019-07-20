import {SET_READERS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_READERS:
      return action.payload;
    default:
      return state;
  }
};
