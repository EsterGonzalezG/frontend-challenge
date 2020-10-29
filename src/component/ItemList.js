import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';

export const ItemList = ({ list }) => {
  return (
    <div className='l-content-wide'>
      <ul className='itemList'>
        {list.map((item) => (
          <li key={item.id} className='Card l-marginBottom-24 l-paddingY-24'>
            <Link to={`/detail/${item.id}`}>
              <div className='itemList-element'>
                <Image item={item} />
                <div>
                  {item.brand}
                  {item.model}
                  {item.price}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
