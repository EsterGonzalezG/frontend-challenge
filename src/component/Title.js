import PropTypes from 'prop-types';
import React from 'react';
export const Title = ({ children }) => <h1 className='title'>{children}</h1>;

Title.prototype = {
  children: PropTypes.node.isRequired,
};
