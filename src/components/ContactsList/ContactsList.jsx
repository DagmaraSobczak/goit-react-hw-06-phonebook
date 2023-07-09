import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

const deleteContact = createAction('contact/deleteContact');

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.items} key={id}>
          <p className={css.content}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ContactsList;
