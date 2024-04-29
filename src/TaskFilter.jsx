import React from 'react';
import { useTaskContext } from './TaskContext.jsx';

const TaskFilter = () => {
  const { state, dispatch } = useTaskContext();

  const handleFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="mb-4 text-center">
      <button onClick={() => handleFilter('all')} className="p-2 px-4 mr-2 border bg-blue-300  text-blue-500 rounded-lg font-bold ">
        All
      </button>
      <button onClick={() => handleFilter('completed')} className='p-2 mr-2 border bg-green-1 text-green-2 rounded-lg font-bold '>
        Done
      </button>
    </div>
  );
};

export default TaskFilter;
