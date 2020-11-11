import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { Subtitle } from './Subtitle';

export const Description = React.memo(({ description }) => {
  const [descriptionValue, setDescriptionValue] = useState([]);

  useEffect(() => {
    const keyArray = [
      'brand',
      'model',
      'price',
      'cpu',
      'ram',
      'os',
      'displayResolution',
      'battery',
      'primaryCamera',
      'secondaryCmera',
      'dimentions',
      'weight',
    ];

    let descriptionArray = [];

    Object.keys(description).forEach((key) => {
      keyArray.filter((item) => {
        if (item === key) {
          descriptionArray = [
            ...descriptionArray,
            { id: key.charAt(0).toUpperCase() + key.slice(1), value: description[key] },
          ];
        }
        return setDescriptionValue(descriptionArray);
      });
    });
  }, [description]);

  return (
    <Fragment>
      <Subtitle>Characteristics:</Subtitle>
      <ul className='color-dark-100 l-marginBottom-24 font-m'>
        {descriptionValue.map(({ id, value }) => (
          <li key={id} className='color-violet'>
            {id} :
            {value !== '' ? <span className='color-dark-60'>{value}</span> : <span className='color-dark-60'> - </span>}
          </li>
        ))}
      </ul>
    </Fragment>
  );
});

Description.prototype = {
  description: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string,
    cpu: PropTypes.string,
    ram: PropTypes.string,
    os: PropTypes.string,
    displayResolution: PropTypes.string,
    battery: PropTypes.string,
    primaryCamera: PropTypes.string,
    secondaryCmera: PropTypes.string,
    dimentions: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};
