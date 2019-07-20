import {combineReducers} from 'redux';
import config from './config';
import readers from './readers';


export default combineReducers({
  config,
  readers
});