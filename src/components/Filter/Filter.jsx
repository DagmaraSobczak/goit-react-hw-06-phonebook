import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ filteredContacts }) => {
  return (
    <>
      <div className={css.wraper}>
        <label className={css.label}>Search contact</label>
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={filteredContacts}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

export default Filter;
