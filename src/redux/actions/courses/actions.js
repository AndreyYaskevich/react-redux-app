import {
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS
} from './actionTypes';
import * as coursesApi from '../../../api/courses/index';

export const loadCourses = () => {
  return dispatch => {
    return coursesApi
      .getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSES_SUCCESS,
          courses
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const saveCourse = course => {
  return dispatch => {
    return coursesApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch({
              type: UPDATE_COURSE_SUCCESS,
              savedCourse
            })
          : dispatch({
              type: CREATE_COURSE_SUCCESS,
              savedCourse
            });
      })
      .catch(error => {
        throw error;
      });
  };
};
