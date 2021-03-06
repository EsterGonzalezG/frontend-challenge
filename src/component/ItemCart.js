import React, { useContext } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { CartContext } from './index';

export const ItemCard = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='itemCart l-flexCenterAround'>
      <span className='itemCart-icon'>
        <BiCartAlt />
      </span>
      <p className='itemCart-number' data-number={cart}></p>
    </div>
  );
};
