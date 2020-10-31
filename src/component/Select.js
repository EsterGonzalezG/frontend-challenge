import PropTypes from 'prop-types';
import React from 'react';
export const Select = ({ options, name, setOptionsValue }) => (
  <div className=''>
    <label htmlFor='color'>{name}</label>
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
  </div>
);

Select.prototype = {
  options: PropTypes.string.isRequired,
  name: PropTypes.string,
  setOptionsValue: PropTypes.func.isRequired,
};
