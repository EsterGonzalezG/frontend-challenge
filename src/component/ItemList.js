import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';
import { Search } from './Search';

export const ItemList = ({ list }) => {
  const [valueSearch, setValueSearch] = useState('');
  if (list !== undefined) {
    return (
      <div className='l-content-wide'>
        <Search setValueSearch={setValueSearch} />
        <ul className='itemList'>
          {list
            .filter(
              (product) =>
                product.brand.toLowerCase().includes(valueSearch) || product.model.toLowerCase().includes(valueSearch),
            )
            .map((product) => (
              <li key={product.id} className='Card l-marginBottom-24 l-paddingY-24'>
                <Link to={`/detail/${product.id}`}>
                  <div className='itemList-element'>
                    <Image item={product} />
                    <div>
                      {product.brand}
                      {product.model}
                      {product.price}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  } else {
    return <p>No hay contenido en este momento</p>;
  }
};
