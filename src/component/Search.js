import PropTypes from 'prop-types';
import React from 'react';

export const Search = ({ setValueSearch }) => {
  return (
    <form className='l-marginBottom-36 l-flex-justifyEnd'>
      <label htmlFor='search'></label>
      <input
        id='search'
        className='Input'
        type='text'
        placeholder='Mobile to search...'
        onChange={(event) => setValueSearch(event.currentTarget.value)}
      />
    </form>
  );
};

Search.prototype = {
  setValueSearch: PropTypes.func.isRequired,
};
