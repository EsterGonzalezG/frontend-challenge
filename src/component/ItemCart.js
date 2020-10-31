import { PropTypes } from 'prop-types';
import React from 'react';

export const ItemCard = ({ cart }) => (
  <div className='header-itemCart'>
    <p>{cart}</p>
  </div>
);
ItemCard.prototype = {
  cart: PropTypes.number,
};
