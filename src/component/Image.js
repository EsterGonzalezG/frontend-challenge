import PropTypes from 'prop-types';
import React from 'react';

export const Image = (props) => (
  <img loading='lazy' className='l-marginBottom-16' src={props.item.imgUrl} alt={props.item.title} />
);

Image.prototype = {
  props: PropTypes.shape({
    imgUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
