import PropTypes from 'prop-types';
import React from 'react';

export const Image = ({ image, model }) => <img loading='lazy' src={image} alt={`Mobile ${model}`} />;
Image.prototype = {
  props: PropTypes.shape({
    imgUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
