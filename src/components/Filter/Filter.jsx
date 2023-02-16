import React from 'react';
import './Filter.scss';

const Filter = ({ filter, searchContact }) => {
  return (
    <label className="FilterLabel">
      {' '}
      Find contacts by name
      <input
        onChange={event => searchContact(event.target.value)}
        value={filter}
      />
    </label>
  );
};

export default Filter;
