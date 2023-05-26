import {combineReducers} from 'redux';
import courseReducer from './courses/reducer';
import authorReducer from './authors';
import {apiCallStatusReducer} from './api';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallStatusReducer
});

export default rootReducer;
