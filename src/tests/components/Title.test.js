import { shallow } from 'enzyme';
import React from 'react';
import { Title } from '../../component/Title';

describe('Test Title component', () => {
  const title = 'MobileShop';
  const wrapper = shallow(<Title> {title}</Title>);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be h1 with text', () => {
    const titleShow = wrapper.find('h1').text().trim();
    expect(titleShow).toBe(title);
  });
});
