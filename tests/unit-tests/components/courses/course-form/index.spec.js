// Tests using react testing library
import React from 'react';
import {render} from '@testing-library/react';
import CourseForm from '../../../../../src/components/courses/course-form';

// Factory function
const renderCourseForm = args => {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = {...defaultProps, ...args};

  return render(<CourseForm {...props} />);
};

it('should render Add Course header', () => {
  // Arrange & Act
  const {getByText} = renderCourseForm();

  // Assert
  getByText('Add Course');
});

it('should label save button as "Save" when not saving', () => {
  // Arrange & Act
  const {getByText} = renderCourseForm();

  // Assert
  getByText('Save');
});

it('should labe save button as "Saving..." when saving', () => {
  // Arrange & Act
  const {getByText /*debug*/} = renderCourseForm({saving: true});
  // debug() function can be called to see whole markup

  // Assert
  getByText('Saving...');
});
