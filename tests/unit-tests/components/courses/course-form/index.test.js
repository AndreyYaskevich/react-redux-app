import React from 'react';
import CourseForm from '../../../../../src/components/courses/course-form';
import {shallow} from 'enzyme';

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

  return shallow(<CourseForm {...props} />);
};

it('renders form and header', () => {
  // Arrange & Act
  const wrapper = renderCourseForm();

  // wrapper.debug() to console log to see the markup of the component

  // Assert
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h2').text()).toEqual('Add Course');
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find('button').text()).toBe('Save');
});

it('labels save buttons as "Saving.." when not saving', () => {
  const wrapper = renderCourseForm({saving: true});
  expect(wrapper.find('button').text()).toBe('Saving...');
});
