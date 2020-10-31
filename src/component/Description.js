import PropTypes from 'prop-types';
import React from 'react';

export const Description = ({ description }) => {
  return (
    <ul>
      <li>Marca: {description.brand}</li>
      <li>Modelo: {description.model}</li>
      <li>Price: {description.price}</li>
      <li>CPU: {description.cpu}</li>
      <li>RAM: {description.ram}</li>
      <li>S.O.: {description.os}</li>
      <li>Resolución: {description.displayResolution}</li>
      <li>Bateria: {description.battery}</li>
      <li>Camara principal: {description.primaryCamera}</li>
      <li>Camara secundaria: {description.secondaryCmera}</li>
      <li>Dimensiones: {description.dimentions}</li>
      <li>Peso: {description.weight}</li>
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
