import {combineReducers} from 'redux';
import courseReducer from './courses/reducer';
import authorReducer from './authors';

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer
});

export default rootReducer;
