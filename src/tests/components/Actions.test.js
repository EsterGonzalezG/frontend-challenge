import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Actions } from '../../component/Actions';

describe('Test Actions component', () => {
  const setColor = jest.fn();
  const setStorage = jest.fn();
  const addProductCart = jest.fn();
  const product = {};

  const wrapper = shallow(
    <Actions product={product} setColor={setColor} setStorage={setStorage} addProductCart={addProductCart} />,
  );
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should not be handleSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
  });
  test('should be change input and called setValueSearch function', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(addProductCart).toHaveBeenCalled();
  });
});
