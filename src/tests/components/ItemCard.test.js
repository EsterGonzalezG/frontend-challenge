import { mount } from 'enzyme';
import React from 'react';
import { ItemCart } from '../../component/ItemCart';
import { CartContext } from '../../useContext/CartContext';
describe('Test ItemCart component', () => {
  const cart = 1;
  const wrapper = mount(
    <CartContext.Provider value={cart}>
      <ItemCart />
    </CartContext.Provider>,
  );
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
