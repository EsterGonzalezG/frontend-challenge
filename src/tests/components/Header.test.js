import { shallow } from 'enzyme';
import React from 'react';
import { Header } from '../../component/Header';

describe('Test Header component', () => {
  const wrapper = shallow(<Header />);

  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
