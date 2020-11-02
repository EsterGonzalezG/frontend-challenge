import { PropTypes } from 'prop-types';
import React from 'react';
import { SiDsautomobiles } from 'react-icons/si';
import { Breadcrumbs } from './Breadcrumbs';
import { ItemCard } from './ItemCart';
import { Title } from './Title';

export const Header = ({ cart }) => (
  <div className='header'>
    <div className='header-content'>
      <div className='l-flexAlignCenter l-marginBottom-16'>
        <span className='header-icon'>
          <SiDsautomobiles />
        </span>
        <Title>ShopMobile</Title>
      </div>
      <Breadcrumbs />
    </div>
    <ItemCard cart={cart} />
  </div>
);

Header.prototype = {
  cart: PropTypes.number,
};
