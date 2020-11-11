import PropTypes from 'prop-types';
import React from 'react';
export const Subtitle = React.memo(({ children }) => (
  <h3 className='font-m color-dark-100 l-marginBottom-16'>{children}</h3>
));

Subtitle.prototype = {
  children: PropTypes.node.isRequired,
};
