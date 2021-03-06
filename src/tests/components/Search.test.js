import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Search } from './../../component/Search';

describe('Test Search component', () => {
  const setValueSearch = jest.fn();
  const wrapper = shallow(<Search setValueSearch={setValueSearch} />);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should not be handleSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
  });
  test('should be change input and called setValueSearch function', () => {
    const input = wrapper.find('input');
    const value = 'alcatel';
    input.simulate('change', { currentTarget: { value } });
    expect(setValueSearch).toHaveBeenCalled();
  });
});
