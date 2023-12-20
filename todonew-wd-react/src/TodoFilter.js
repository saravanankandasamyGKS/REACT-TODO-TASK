import React from 'react';

const TodoFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div>
      <label>Filter by Status:</label>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
    </div>
  );
};

export default TodoFilter;
