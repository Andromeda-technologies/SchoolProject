import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import errorReducer from './errorReducer';


export default combineReducers({
  student: studentReducer,
  errors: errorReducer

});
