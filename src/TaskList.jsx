import React from 'react';
import { useTaskContext } from './TaskContext.jsx';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const filteredTasks = state.filter === 'completed'
    ? state.tasks.filter(task => task.completed)
    : state.tasks;

  return (
    <div >
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`border-2 border-white rounded-lg pl-3  ${task.completed ? 'bg-green-1 text-green-2 font-medium text-xm ' : 'bg-orange-1 text-orange-2 font-medium text-xm '}`}
        >
        <   p className={`flex justify-between items-center ${task.completed ? 'line-through ' : ''}`}>
            <span>{task.text}</span>
            <div className='pr-2 py-1'>
              <button onClick={() => handleToggle(task.id)} className="text-green-2 ml-2 bg-green-1 p-2 rounded-lg font-medium">
                Done
              </button>
              <button onClick={() => handleDelete(task.id)} className="my-1 ml-2 bg-white p-2 bg-rose-300 text-red-400 rounded-lg font-medium">
                Delete
              </button>
            </div>
            </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
