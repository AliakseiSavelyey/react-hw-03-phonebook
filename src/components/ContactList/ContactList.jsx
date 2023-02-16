import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ searchContact, deleteContact }) => {
  return (
    <ul>
      {searchContact.map(({ id, name, number }) => {
        return (
          <li>
            <p>
              {' '}
              - {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  searchContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
