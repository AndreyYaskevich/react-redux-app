import * as types from "../../actions/courses/actionTypes";

const courseReducer = (state = [], action) => {
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        default:
            return state;
    }
}

export default courseReducer;