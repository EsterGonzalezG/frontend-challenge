import { shallow } from 'enzyme';
import React from 'react';
import { Subtitle } from './../../component/Subtitle';

describe('Test Title component', () => {
  test('should be render a component', () => {
    const subtitle = 'MobileShop';
    const wrapper = shallow(<Subtitle> {subtitle}</Subtitle>);
    const subtitleShow = wrapper.find('h3').text().trim();
    expect(wrapper).toMatchSnapshot();
    expect(subtitleShow).toBe(subtitle);
  });
});
