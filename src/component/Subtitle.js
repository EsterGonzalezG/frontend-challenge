import PropTypes from 'prop-types';
import React from 'react';
export const Subtitle = ({ children }) => <div className='font-m color-dark-100 l-marginBottom-16'>{children}</div>;

Subtitle.prototype = {
  children: PropTypes.node.isRequired,
};
