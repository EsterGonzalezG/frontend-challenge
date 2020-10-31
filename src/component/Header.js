import { PropTypes } from 'prop-types';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { ItemCard } from './ItemCart';
import { Title } from './Title';

export const Header = ({ breadcrumbs, cart }) => (
  <div className='header'>
    <div className='l-marginBottom-24'>
      <div className='header-content'>
        <Title>Tienda de móbiles</Title>
        <ItemCard cart={cart} />
      </div>
    </div>
    <Breadcrumbs />
  </div>
);

Header.prototype = {
  cart: PropTypes.number,
};
