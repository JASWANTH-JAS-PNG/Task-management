import React from 'react';
import styles from '../styles/TaskFilter.module.css';

const TaskFilter = ({ filters, onFilterChange }) => {
  const handleStatusChange = (e) => {
    onFilterChange({ status: e.target.value });
  };

  const handlePriorityChange = (e) => {
    onFilterChange({ priority: e.target.value });
  };

  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value });
  };

  const handleReset = () => {
    onFilterChange({ status: '', priority: '', search: '' });
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={filters.search}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />

        <select value={filters.status} onChange={handleStatusChange} className={styles.select}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <select value={filters.priority} onChange={handlePriorityChange} className={styles.select}>
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {(filters.status || filters.priority || filters.search) && (
          <button onClick={handleReset} className={styles.resetBtn}>
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskFilter;
