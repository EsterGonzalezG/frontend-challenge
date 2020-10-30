import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';
import { Search } from './Search';

export const ItemList = ({ list }) => {
  const [valueSearch, setValueSearch] = useState('');

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    console.log(list);
    setPhones(list);
  }, [list]);

  return (
    <div className='itemList l-content-wide'>
      <Search setValueSearch={setValueSearch} />
      <ul className='itemList-list'>
        {phones
          ?.filter(
            (product) =>
              product.brand.toLowerCase().includes(valueSearch) || product.model.toLowerCase().includes(valueSearch),
          )
          .map((product, index) => (
            <li key={index} className='Card l-marginBottom-24 l-paddingY-24'>
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
};
