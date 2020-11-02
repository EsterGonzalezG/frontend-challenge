import PropTypes from 'prop-types';
import React from 'react';

export const Image = ({ image }) => <img loading='lazy' src={image} alt='Foto móvil' />;
Image.prototype = {
  props: PropTypes.shape({
    imgUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
