import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Select } from '../../component/Select';

describe('Test Select component', () => {
  const setOptionsValue = jest.fn();
  const options = ['option 1', 'option 2'];
  const name = 'color';
  const wrapper = shallow(<Select setOptionsValue={setOptionsValue} options={options} name={name} />);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be change input and called setOptionsValue function', () => {
    const select = wrapper.find('select');
    const value = 'option 1';
    select.simulate('change', { target: { value } });
    expect(setOptionsValue).toHaveBeenCalled();
  });
});
