import { shallow } from 'enzyme';
import React from 'react';
import { ButtonBackToHome } from './../../component/ButtonBackToHome';

describe('Test Title component', () => {
  test('should be render a component', () => {
    const text = 'list';
    const wrapper = shallow(<ButtonBackToHome> {text}</ButtonBackToHome>);
    const button = wrapper.find('Link');
    const textShow = button.text().trim();

    console.log(window.location.pathname);
    expect(wrapper).toMatchSnapshot();
    expect(textShow).toBe(text);
  });
});
