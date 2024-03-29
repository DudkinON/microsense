import {SET_OPERATIONS} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_OPERATIONS:
      return action.payload;
    default:
      return state;
  }
};
