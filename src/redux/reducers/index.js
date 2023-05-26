import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import {apiCallStatusReducer} from './apiReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallStatusReducer
});

export default rootReducer;
