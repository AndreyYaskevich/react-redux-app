import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadCourses} from '../../../redux/actions/courses/actions';
import {loadAuthors} from '../../../redux/actions/authors/actions';
import PropTypes from 'prop-types';

const ManageCoursePage = ({courses, authors, loadAuthors, loadCourses}) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    }
    if (authors.length === 0) {
      loadAuthors();
    }
  });
  return (
    <>
      {' '}
      <h2>Manage Course</h2>
    </>
  );
};

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
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
    authors: state.authors
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
