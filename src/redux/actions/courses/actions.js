import { CREATE_COURSE } from "./actionTypes";

const createCourse = course => {
    return {
        type: CREATE_COURSE, course
    }
}

export {createCourse};