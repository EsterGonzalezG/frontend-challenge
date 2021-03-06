import { shallow } from 'enzyme';
import React from 'react';
import { Description } from '../../component/Description';

describe('Test Image component', () => {
  const description = [{}];
  const wrapper = shallow(<Description description={description} />);

  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
