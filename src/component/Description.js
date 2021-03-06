import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { setTitleDescription, Subtitle } from './index';

export const Description = React.memo(({ description }) => {
  const [descriptionValue, setDescriptionValue] = useState([]);
  useEffect(() => {
    setDescriptionValue(setTitleDescription(description));
  }, [description]);

  return (
    <>
      <Subtitle>Characteristics:</Subtitle>
      <ul className='color-dark-100 l-marginBottom-24 font-m'>
        {descriptionValue.map(({ id, value }) => (
          <li key={id} className='color-violet'>
            {id} :
            {value !== '' ? <span className='color-dark-60'>{value}</span> : <span className='color-dark-60'> - </span>}
          </li>
        ))}
      </ul>
    </>
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
