import operations from './operations';
import {SET_OPERATIONS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(operations(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_OPERATIONS, payload: [1, 2, 3]};
  expect(operations(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1, 2, 3, 4, 5];
  expect(operations(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1, 2, 3, 4, 5];
  const action = {type: SET_OPERATIONS, payload: [1, 2, 3]};
  expect(operations(state, action)).toMatchObject(action.payload);
});