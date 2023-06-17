import React from 'react';
import Header from '../../../../../src/components/common/header';
import {mount, shallow} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

// Example: shallow render search for React component tag.
it('contains 3 NavLinks via shallow', () => {
  // Arrange & Act
  const numberOfLinks = shallow(<Header />).find('NavLink').length;

  // Assert
  expect(numberOfLinks).toEqual(3);
});

// Example: mount search for the final rendered HTML since it generates the final DOM.
// Memory router component passed because Header expects to have React Router's props passed in.
it('contains 3 anchors via mount', () => {
  // Arrange & Act
  const numberOfAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;

  // Assert
  expect(numberOfAnchors).toEqual(3);
});

// Notes: mount more realistic and can be used in case to test the final DOM, use refs or test interactions with child components
// Shallow is fast and lightweight and could be used to test one component in isolation
