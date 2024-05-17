import React from 'react';
import styles from './FilterSearch.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, onAddFilter }) {
  return (
    <div className={styles.filterSection}>
      <h3 className={styles.filterTitle}>Find contacts by name:</h3>
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        placeholder="Contacts"
        onChange={onAddFilter}
        required
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onAddFilter: PropTypes.func.isRequired,
};
export default Filter;
