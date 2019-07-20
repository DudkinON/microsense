import health from './health';
import {SET_HEALTH} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(health(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_HEALTH, payload: [1, 2, 3]};
  expect(health(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1, 2, 3, 4, 5];
  expect(health(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1, 2, 3, 4, 5];
  const action = {type: SET_HEALTH, payload: [1, 2, 3]};
  expect(health(state, action)).toMatchObject(action.payload);
});