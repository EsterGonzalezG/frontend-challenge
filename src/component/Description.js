import PropTypes from 'prop-types';
import React from 'react';

export const Description = ({ description }) => {
  let descriptionArray = [];
  let keyArray = [
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

  Object.keys(description).forEach((key) => {
    keyArray.filter((item) => {
      if (item === key) {
        descriptionArray.push({ id: key.charAt(0).toUpperCase() + key.slice(1), value: description[key] });
      }
      return descriptionArray;
    });
  });

  return (
    <ul className='description color-dark-100 l-marginBottom-24 font-m'>
      {descriptionArray.map((item) => (
        <li key={item.id} className='color-violet'>
          {item?.id} : <span className='color-dark-60'>{item?.value}</span>
        </li>
      ))}
    </ul>
  );
};

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
