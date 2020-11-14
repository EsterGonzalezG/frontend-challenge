import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';
import { NotData } from './NotData';
import { Search } from './Search';

export const ItemList = ({ list }) => {
  const [valueSearch, setValueSearch] = useState('');

  if (list) {
    return (
      <div className='itemList l-content-wide'>
        <Search setValueSearch={setValueSearch} />
        <ul className='itemList-list'>
          {list
            ?.filter(
              ({ brand, model }) =>
                brand.toLowerCase().includes(valueSearch.toLocaleLowerCase()) ||
                model.toLowerCase().includes(valueSearch.toLocaleLowerCase()),
            )
            .map(({ id, imgUrl, brand, model, price }, index) => (
              <li key={index} className='Card l-marginBottom-24'>
                <Link to={`/detail?id=${id}`}>
                  <div className='itemList-element'>
                    <div className='itemList-img l-marginBottom-16'>
                      <Image image={imgUrl} model={model} />
                    </div>
                    <ul>
                      <li key={brand}>
                        Brand : <span className='color-dark-60'>{brand}</span>
                      </li>
                      <li key={model}>
                        Model :<span className='color-dark-60'> {model}</span>
                      </li>
                      <li key={price}>
                        Price:{' '}
                        {price !== '' ? (
                          <span className='color-dark-60'>{price} </span>
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
