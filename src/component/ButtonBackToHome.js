import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome = ({ children }) => (
  <Link className='' to='/'>
    {children}
  </Link>
);
ButtonBackToHome.prototype = {
  children: PropTypes.string.isRequired,
};
