import PropTypes from 'prop-types';
import React from 'react';
import { FaRegGrimace } from 'react-icons/fa';
import { ButtonBackToHome } from './index';

export const NotData = ({ children, button, textButton }) => (
  <div className='notFount'>
    <span className='notFount-icon'>
      <FaRegGrimace />
    </span>
    <div className='notFount-text l-marginBottom-24'>{children}</div>
    {button ? <ButtonBackToHome>{textButton}</ButtonBackToHome> : null}
  </div>
);

NotData.prototype = {
  children: PropTypes.node.isRequired,
  noButton: PropTypes.bool.isRequired,
};
