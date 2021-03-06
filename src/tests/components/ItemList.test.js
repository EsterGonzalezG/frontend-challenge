import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { ItemList } from '../../component/ItemList';

describe('Test Search component', () => {
  const list = {};
  const wrapper = shallow(<ItemList list={list} />);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  /*   test('should not be handleSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
  });
  test('should be change input and called setValueSearch function', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(addProductCart).toHaveBeenCalled();
  }); */
});
