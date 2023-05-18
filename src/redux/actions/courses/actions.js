import {CREATE_COURSE, LOAD_COURSES_SUCCESS} from './actionTypes';
import * as coursesApi from '../../../api/courses/index';

export const createCourse = course => {
  return {
    type: CREATE_COURSE,
    course
  };
};

export const loadCourses = () => {
  return dispatch => {
    return coursesApi
      .getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSES_SUCCESS,
          courses
        });
        return courses;
      })
      .catch(error => {
        throw error;
      });
  };
};
