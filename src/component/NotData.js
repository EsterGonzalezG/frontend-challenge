import PropTypes from 'prop-types';
import React from 'react';
import { FaRegGrimace } from 'react-icons/fa';
import { ButtonBackToHome } from './index';

export const NotData = ({ children }) => (
  <div className='notFount'>
    <span className='notFount-icon'>
      <FaRegGrimace />
    </span>
    <div className='notFount-text l-marginBottom-24'>{children}</div>
    <ButtonBackToHome>Back to list</ButtonBackToHome>
  </div>
);

NotData.prototype = {
  children: PropTypes.node.isRequired,
};
