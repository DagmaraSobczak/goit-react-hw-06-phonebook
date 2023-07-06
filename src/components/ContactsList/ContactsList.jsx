import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
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
            onClick={() => onDelete(id)}
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
  onDelete: PropTypes.func.isRequired,
};
export default ContactsList;
