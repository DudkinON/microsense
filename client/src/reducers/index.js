import {combineReducers} from 'redux';
import config from './config';
import readers from './readers';
import health from './health';


export default combineReducers({
  config,
  readers,
  health
});