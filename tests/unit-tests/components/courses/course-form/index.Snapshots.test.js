import React from 'react';
import CourseForm from '../../../../../src/components/courses/course-form';
import renderer from 'react-test-renderer';
import {courses, authors} from '../../../../../tools/mockData';

it("sets submit button label 'Saving...' when saving is true", () => {
  // Arrange & Act
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  // Assert
  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  // Arrange & Act
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  // Assert
  expect(tree).toMatchSnapshot();
});
