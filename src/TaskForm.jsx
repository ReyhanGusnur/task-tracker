import React, { useState } from 'react';
import { useTaskContext } from './TaskContext.jsx';

const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask.trim()) {
      alert('Task tidak boleh kosong.');
      return;
    }

    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-9 gap-3 rounded">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="col-start-3 col-span-4 w-full bg-grey-1 text-gray-2 rounded-lg p-3 mr-5 text-s "
        placeholder="add task here ..."
      />
      <button type="submit" className="col-start-7 col-span-1 bg-orange-1 rounded-lg text-orange-2  font-medium text-base">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
