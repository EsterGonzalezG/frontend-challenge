import { shallow } from 'enzyme';
import React from 'react';
import { Image } from '../../component/Image';

describe('Test Image component', () => {
  const image = 'https://localhost/imagen.jpg';
  const model = 'model';
  const wrapper = shallow(<Image model={model} image={image} />);

  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be h1 with text', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(image);
    expect(img.prop('alt')).toBe(`Mobile ${model}`);
  });
});
