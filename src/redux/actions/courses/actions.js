import {
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS
} from './actionTypes';
import {API_CALL_ERROR, BEGIN_API_CALL} from '../api/actionTypes';
import * as coursesApi from '../../../api/courses/index';

export const loadCourses = () => {
  return dispatch => {
    dispatch({
      type: BEGIN_API_CALL
    });
    return coursesApi
      .getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSES_SUCCESS,
          courses
        });
      })
      .catch(error => {
        dispatch({type: API_CALL_ERROR});
        throw error;
      });
  };
};

export const saveCourse = course => {
  return dispatch => {
    dispatch({
      type: BEGIN_API_CALL
    });
    return coursesApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch({
              type: UPDATE_COURSE_SUCCESS,
              course: savedCourse
            })
          : dispatch({
              type: CREATE_COURSE_SUCCESS,
              course: savedCourse
            });
      })
      .catch(error => {
        dispatch({type: API_CALL_ERROR});
        throw error;
      });
  };
};
