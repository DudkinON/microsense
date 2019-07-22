import message from './message';
import {SET_MESSAGE} from '../actions/types';


it('should return payload if action passed', function () {
  const action = {type: SET_MESSAGE, payload: {type: 'error', message: "error message"}};
  expect(message(undefined, action)).toMatchObject(action.payload)
});

it('should return state if state passed', function () {
  const state = {type: 'success', message: "success message"};
  expect(message(state, {})).toMatchObject(state)
});

it('should update state if payload passed', function () {
  const state = {type: 'success', message: "success message"};
  const action = {type: SET_MESSAGE, payload: {type: 'error', message: "error message"}};
  expect(message(state, action)).toMatchObject(action.payload);
});

