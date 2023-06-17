import React, {useState, useEffect, useContext} from 'react';
import CourseForm from '../course-form/index';
import {newCourse} from '../../../../tools/mockData';
import {toast} from 'react-toastify';
import {CoursesContext} from '../../../contexts/courses';
import {
  API_CALL_ERROR,
  BEGIN_API_CALL,
  CREATE_COURSE_SUCCESS,
  LOAD_AUTHORS_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../../../contexts/courses/actions/actionTypes';
import {getCourses, saveCourse} from '../../../api/coursesApi';
import {getAuthors} from '../../../api/authorsApi';
import {useHistory, useParams} from 'react-router-dom';

const ManageCoursePage = () => {
  const {state, dispatch} = useContext(CoursesContext);

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const history = useHistory();
  const {slug} = useParams();

  const getCourseBySlug = (courses, slug) => {
    return courses.find(course => course.slug === slug) || null;
  };

  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  const [formCourse, setFormCourse] = useState(course);

  useEffect(() => {
    if (state.courses.length === 0) {
      dispatch({
        type: BEGIN_API_CALL
      });

      getCourses()
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
    } else {
      setFormCourse(course);
    }

    if (state.authors.length === 0) {
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
  }, [course]);

  const handleChange = event => {
    const {name, value} = event.target;
    setFormCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }));
  };

  const formIsValid = () => {
    const {title, authorId, category} = formCourse;
    const errors = {};

    if (!title) {
      errors.title = 'Title is required.';
    }
    if (!authorId) {
      errors.author = 'Author is required.';
    }
    if (!category) {
      errors.category = 'Category is required.';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSave = async event => {
    event.preventDefault();
    if (!formIsValid()) return;

    setSaving(true);
    dispatch({
      type: BEGIN_API_CALL
    });
    saveCourse(formCourse)
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
        toast.success('Course saved.');
        history.push('/courses/');
      })
      .catch(error => {
        setSaving(false);
        setErrors({onSave: error.message});
      });
  };

  return (
    <CourseForm
      course={formCourse}
      errors={errors}
      authors={state.authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

export default ManageCoursePage;
