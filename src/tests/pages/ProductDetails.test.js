import { shallow } from 'enzyme';
import React from 'react';
import { CartContext } from '../../useContext/CartContext';
import ProductDetails from './../../pages/ProductDetails';
jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/route',
    search: '',
    hash: '',
    state: null,
    key: 'jasjdajs',
  }),
}));
describe('Test ProductDetails page', () => {
  const cart = 1;
  const wrapper = shallow(
    <CartContext.Provider value={cart}>
      <ProductDetails />
    </CartContext.Provider>,
  );
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should be render a component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
