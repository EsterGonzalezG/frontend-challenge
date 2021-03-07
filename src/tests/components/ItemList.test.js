import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { ItemList } from '../../component/ItemList';

describe('Test Item List component', () => {
  const list = [];
  const loading = true;
  const wrapper = shallow(<ItemList list={list} loading={loading} />);
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be show loading', () => {
    const spinner = wrapper.find('div').text().trim();
    expect(spinner).toBe('LOADING...');
  });
  test('should be component not data', () => {
    const loading = false;
    const wrapper = shallow(<ItemList list={list} loading={loading} />);
    const componentNotData = wrapper.find('NotData');
    expect(componentNotData.exists()).toBe(true);
  });
  test('should be not show component not data and show link component', () => {
    const list = [{ id: 123, imgUrl: 'https://localhost/imagen.jpg', brand: 'alcatel', model: 'model', price: 120 }];
    const loading = false;
    const wrapper = shallow(<ItemList list={list} loading={loading} />);
    const componentNotData = wrapper.find('NotData');
    const link = wrapper.find('Link');
    expect(componentNotData.exists()).toBe(false);
    expect(link.exists()).toBe(true);
  });
});
