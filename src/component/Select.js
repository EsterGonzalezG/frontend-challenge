import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
export const Select = ({ options, name, setOptionsValue }) => (
  <Fragment>
    <label htmlFor={name} className='font-m color-dark-100'>
      {name}{' '}
    </label>
    <select
      name={name}
      id={name}
      onChange={(event) => {
        setOptionsValue(event.target.value);
      }}
    >
      {options?.map((item, index) => (
        <option value={item.code} key={index}>
          {item.name}
        </option>
      ))}
    </select>
  </Fragment>
);

Select.prototype = {
  options: PropTypes.string.isRequired,
  name: PropTypes.string,
  setOptionsValue: PropTypes.func.isRequired,
};
