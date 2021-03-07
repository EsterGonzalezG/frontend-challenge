import { mount } from 'enzyme';
import React from 'react';
import { Home } from './../../pages/Home';

describe('Test Home page', () => {
  const wrapper = mount(<Home />);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
