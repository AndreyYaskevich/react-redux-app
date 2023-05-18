/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courses/actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

const CoursesPage = ({courses, actions}) => {
  useEffect(() => {
    actions.loadCourses();
  }, []);

  return (
    <>
      {' '}
      <h2>Courses</h2>
      {courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
