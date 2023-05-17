import { combineReducers } from "redux";
import courseReducer from "./courses/reducer";

const rootReducer = combineReducers({
    course: courseReducer
});

export default rootReducer;