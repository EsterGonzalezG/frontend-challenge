import { shallow } from 'enzyme';
import React from 'react';
import { Title } from './../../component/Title';

describe('Test Title component', () => {
  test('should be render a component', () => {
    const title = 'MobileShop';
    const wrapper = shallow(<Title> {title}</Title>);
    const titleShow = wrapper.find('h1').text().trim();
    expect(wrapper).toMatchSnapshot();
    expect(titleShow).toBe(title);
  });
});
