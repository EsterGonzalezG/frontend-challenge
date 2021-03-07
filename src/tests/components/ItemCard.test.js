import { mount } from 'enzyme';
import React from 'react';
import { ItemCard } from '../../component/ItemCart';
import { CartContext } from '../../useContext/CartContext';
describe('Test ItemCard component', () => {
  const cart = 1;
  const wrapper = mount(
    <CartContext.Provider value={cart}>
      <ItemCard />
    </CartContext.Provider>,
  );
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
