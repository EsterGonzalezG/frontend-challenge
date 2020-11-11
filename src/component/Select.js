import PropTypes from 'prop-types';
import React from 'react';
export const Select = React.memo(({ options, name, setOptionsValue }) => (
  <>
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
      {options?.map(({ code, name }, index) => (
        <option value={code} key={index}>
          {name}
        </option>
      ))}
    </select>
  </>
));

Select.prototype = {
  options: PropTypes.string.isRequired,
  name: PropTypes.string,
  setOptionsValue: PropTypes.func.isRequired,
};
