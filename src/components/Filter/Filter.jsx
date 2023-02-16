import React from 'react';

const Filter = ({ filter, searchContact }) => {
  return (
    <label>
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
