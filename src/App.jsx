import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import TaskFilter from './TaskFilter.jsx';
import { TaskProvider } from './TaskContext.jsx';

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen flex items-center justify-center bg-orange-1">
        <div className="w-10/12 p-4 bg-white rounded-md shadow-xl">
          <h1 className="text-2xl text-orange-2 font-bold mb-4 text-center">Task Tracker</h1>
          <hr className='w-6/12 h-1 mx-auto my-4 bg-orange-2 border-0 rounded'></hr>
          <TaskForm />
          <TaskFilter />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
