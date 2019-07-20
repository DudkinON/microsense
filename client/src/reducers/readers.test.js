import readers from './readers';
import {SET_READERS} from '../actions/types';


it('should return empty state if action do not match', function () {
  expect(readers(undefined, {})).toMatchObject([]);
});

it('should return payload if action passed', function () {
  const action = {type: SET_READERS, payload: [1, 2, 3]};
  expect(readers(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = [1, 2, 3, 4, 5];
  expect(readers(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = [1, 2, 3, 4, 5];
  const action = {type: SET_READERS, payload: [1, 2, 3]};
  expect(readers(state, action)).toMatchObject(action.payload);
});