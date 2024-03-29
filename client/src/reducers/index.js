import {combineReducers} from 'redux';
import config from './config';
import readers from './readers';
import health from './health';
import operations from './operations';
import message from './message';


export default combineReducers({
  config,
  readers,
  health,
  operations,
  message
});