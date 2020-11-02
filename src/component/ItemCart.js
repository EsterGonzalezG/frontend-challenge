import { PropTypes } from 'prop-types';
import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

export const ItemCard = ({ cart }) => (
  <div className='itemCart l-flexCenterAround'>
    <span className='itemCart-icon'>
      <BiCartAlt />
    </span>
    <p className='itemCart-number' data-number={cart}></p>
  </div>
);
ItemCard.prototype = {
  cart: PropTypes.number,
};
