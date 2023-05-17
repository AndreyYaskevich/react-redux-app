import { combineReducers } from "redux";
import courseReducer from "./courses/reducer";

const rootReducer = combineReducers({
    courses: courseReducer
});

export default rootReducer;