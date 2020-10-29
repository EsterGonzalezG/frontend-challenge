import React from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => (
  <img loading='lazy' className='l-marginBottom-16' src={props.item.imgUrl} alt={props.item.title} />
);

Image.prototype = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
};
