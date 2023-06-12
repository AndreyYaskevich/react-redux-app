import React, {useContext, useEffect, useState} from 'react';
import CoursesList from './courses-list';
import {Redirect} from 'react-router-dom';
import Loader from '../common/loader';
import {toast} from 'react-toastify';
import {CoursesContext} from '../../contexts/courses';
import {deleteCourse, getCourses} from '../../api/coursesApi';
import {
  API_CALL_ERROR,
  BEGIN_API_CALL,
  DELETE_COURSE_OPTIMISTIC,
  LOAD_AUTHORS_SUCCESS,
  LOAD_COURSES_SUCCESS
} from '../../contexts/courses/actions/actionTypes';
import {getAuthors} from '../../api/authorsApi';

const CoursesPage = () => {
  const {state, dispatch} = useContext(CoursesContext);

  const {courses, authors, loading} = {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(x => x.id === course.authorId).name
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };

  const [redirect, setRedirect] = useState({redirectToAddCoursePage: false});

  useEffect(() => {
    if (courses.length === 0) {
      dispatch({type: BEGIN_API_CALL});

      getCourses()
        .then(courses => {
          dispatch({type: LOAD_COURSES_SUCCESS, courses});
        })
        .catch(error => {
          dispatch({type: API_CALL_ERROR});
          throw error;
        });
    }
    if (authors.length === 0) {
      dispatch({type: BEGIN_API_CALL});
      getAuthors()
        .then(authors => {
          dispatch({type: LOAD_AUTHORS_SUCCESS, authors});
        })
        .catch(error => {
          dispatch({type: API_CALL_ERROR});
          throw error;
        });
    }
  }, []);

  const handleDeleteCourse = course => {
    toast.success('Course successfully has been deleted');

    dispatch({type: DELETE_COURSE_OPTIMISTIC, course});
    deleteCourse(course.id).catch(error => {
      toast.error('Delete failed. ' + error.message, {autoClose: false});
    });
  };

  return (
    <>
      {redirect.redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {loading > 0 ? (
        <Loader />
      ) : (
        <>
          <button
            style={{marginBottom: 20}}
            className="btn btn-primary add-course"
            onClick={() => {
              setRedirect({redirectToAddCoursePage: true});
            }}>
            Add course
          </button>
          <CoursesList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

export default CoursesPage;
