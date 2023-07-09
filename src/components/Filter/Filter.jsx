import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

import css from './Filter.module.css';

const setFilter = createAction('filter/setFilter');

const Filter = ({ filteredContacts }) => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Search contact</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filteredContacts: PropTypes.func, // Zmieniono nazwę propa z onFilterChange na filteredContacts
};

export default Filter;
