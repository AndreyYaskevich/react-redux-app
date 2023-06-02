import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CoursesList from './courses-list';
import {Redirect} from 'react-router-dom';
import Loader from '../common/loader';
import {toast} from 'react-toastify';

const CoursesPage = ({courses, authors, actions, loading}) => {
  const [state, setState] = useState({redirectToAddCoursePage: false});

  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses();
    }
    if (authors.length === 0) {
      actions.loadAuthors();
    }
  }, []);

  const handleDeleteCourse = async course => {
    toast.success('Course successfully has been deleted');
    await actions.deleteCourse(course).catch(error => {
      toast.error('Delete failed. ' + error.message, {autoClose: false});
    });
  };

  return (
    <>
      {state.redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {loading ? (
        <Loader />
      ) : (
        <>
          <button
            style={{marginBottom: 20}}
            className="btn btn-primary add-course"
            onClick={() => {
              setState({redirectToAddCoursePage: true});
            }}>
            Add course
          </button>
          <CoursesList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
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
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
