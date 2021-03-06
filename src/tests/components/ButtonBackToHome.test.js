import { shallow } from 'enzyme';
import React from 'react';
import { ButtonBackToHome } from '../../component/ButtonBackToHome';

describe('Test Title component', () => {
  const text = 'list';
  const wrapper = shallow(<ButtonBackToHome> {text}</ButtonBackToHome>);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be a button with text', () => {
    const button = wrapper.find('Link');
    const textShow = button.text().trim();
    expect(textShow).toBe(text);
  });
});
