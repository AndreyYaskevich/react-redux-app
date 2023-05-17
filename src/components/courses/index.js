import React, {useState} from "react";

const CoursesPage = () => {
    const [state, setState] = useState({
        course: {
            title: ""
        }
    });

    const handleChange = event => {
        const course = {...state.course, title: event.target.value};
        setState({course});
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert(state.course.title);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={handleChange} value={state.course.title} />
            <input type="submit" value="Save" />
        </form>
    );
};

export default CoursesPage;