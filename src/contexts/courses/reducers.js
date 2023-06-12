import {apiCallStatusReducer} from './reducers/apiReducer';
import authorReducer from './reducers/authorReducer';
import courseReducer from './reducers/courseReducer';

const combineReducers = slices => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action)
    }),
    state
  );

const rootReducer = combineReducers({
  courses: courseReducer,
  authors: authorReducer,
  apiCallsInProgress: apiCallStatusReducer
});

export default rootReducer;
