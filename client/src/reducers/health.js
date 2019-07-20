import {SET_HEALTH} from '../actions/types';

export default (state=[], action) => {
  switch (action.type) {
    case SET_HEALTH:
      return action.payload;
    default:
      return state;
  }
};
