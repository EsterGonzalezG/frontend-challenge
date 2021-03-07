import { shallow } from 'enzyme';
import React from 'react';
import { NotData } from '../../component/NotData';

describe('Test NotData component', () => {
  const button = true;
  const text = 'Home';
  const wrapper = shallow(
    <NotData button={button} textButton={text}>
      {text}
    </NotData>,
  );

  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be show text', () => {
    const divText = wrapper.find('.notFount-text').text();
    expect(divText).toBe(text);
  });

  test('should be render ButtonBackToHome', () => {
    const buttonComponent = wrapper.find('ButtonBackToHome');
    expect(buttonComponent.exists()).toBe(true);
  });

  test('should not be render ButtonBackToHome', () => {
    const button = false;
    const text = 'Home';
    const wrapper = shallow(
      <NotData button={button} textButton={text}>
        {text}
      </NotData>,
    );
    const buttonComponent = wrapper.find('ButtonBackToHome');
    expect(buttonComponent.exists()).toBe(false);
  });
});
