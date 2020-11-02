import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';
import { NotData } from './NotData';
import { Search } from './Search';

export const ItemList = ({ list }) => {
  const [valueSearch, setValueSearch] = useState('');

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(list);
  }, [list]);

  if (list) {
    return (
      <div className='itemList l-content-wide'>
        <Search setValueSearch={setValueSearch} />
        <ul className='itemList-list'>
          {phones
            ?.filter(
              (product) =>
                product.brand.toLowerCase().includes(valueSearch.toLocaleLowerCase()) ||
                product.model.toLowerCase().includes(valueSearch.toLocaleLowerCase()),
            )
            .map((product, index) => (
              <li key={index} className='Card l-marginBottom-24'>
                <Link to={`/detail/${product.id}`}>
                  <div className='itemList-element'>
                    <div className='itemList-img l-marginBottom-16'>
                      <Image image={product.imgUrl} />
                    </div>
                    <ul>
                      <li key={product.brand}>
                        Brand : <span className='color-dark-60'>{product.brand}</span>
                      </li>
                      <li key={product.model}>
                        Model :<span className='color-dark-60'> {product.model}</span>
                      </li>
                      <li key={product.price}>
                        Price:{' '}
                        {product.price !== '' ? (
                          <span className='color-dark-60'>{product.price} </span>
                        ) : (
                          <span className='color-dark-60'> - </span>
                        )}
                      </li>
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  } else {
    <NotData>Sorry, at the moment there is no data to display </NotData>;
  }
};

ItemList.prototype = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      model: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
  ),
};
