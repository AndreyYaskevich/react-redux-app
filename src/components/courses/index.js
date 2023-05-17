import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/actions/courses/actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";

const CoursesPage = props => {
    const [state, setState] = useState({
        course: {
            title: ""
        }
    });

    const handleChange = event => {
        const course = {...state.course, title: event.target.value};
        setState({ course });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.actions.createCourse(state.course);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={handleChange} value={state.course.title} />
            <input type="submit" value="Save" />
            {props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </form>
    );
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        courses: state.courses
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);