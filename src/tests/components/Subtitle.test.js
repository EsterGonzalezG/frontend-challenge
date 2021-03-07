import { shallow } from 'enzyme';
import React from 'react';
import { Subtitle } from './../../component/Subtitle';

describe('Test Subtitle component', () => {
  const subtitle = 'MobileShop';
  const wrapper = shallow(<Subtitle> {subtitle}</Subtitle>);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be h3 with text', () => {
    const subtitleShow = wrapper.find('h3').text().trim();
    expect(subtitleShow).toBe(subtitle);
  });
});
