import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';
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
                product.brand.toLowerCase().includes(valueSearch) || product.model.toLowerCase().includes(valueSearch),
            )
            .map((product, index) => (
              <li key={index} className='Card l-marginBottom-24 l-paddingY-24'>
                <Link to={`/detail/${product.id}`}>
                  <div className='itemList-element'>
                    <Image image={product.imgUrl} />
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
    <div>No hay datos en este momento</div>;
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
