import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courses/actions';
import * as authorActions from '../../redux/actions/authors/actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CoursesList from './courses-list';

const CoursesPage = ({courses, authors, actions}) => {
  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses();
    }
    if (authors.length === 0) {
      actions.loadAuthors();
    }
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CoursesList courses={courses} />
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
