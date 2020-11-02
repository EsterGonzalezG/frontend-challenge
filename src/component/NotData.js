import PropTypes from 'prop-types';
import React from 'react';
import { FaRegGrimace } from 'react-icons/fa';
import { ButtonBackToHome } from './ButtonBackToHome';

export const NotData = ({ children }) => (
  <div className='wrapper'>
    <div className='notFount l-content-wide l-paddingY-48'>
      <span className='notFount-icon'>
        <FaRegGrimace />
      </span>
      <div className='notFount-text l-marginBottom-24'>{children}</div>
      <ButtonBackToHome>Back to list</ButtonBackToHome>
    </div>
  </div>
);

NotData.prototype = {
  children: PropTypes.node.isRequired,
};
