import React, { useEffect, useState } from 'react';
import { useAddTask } from '../hooks/tasks';
import { useGetTasks } from '../hooks/tasks';

const AddTask = () => {
  const host = `https://taskmanagment-ztcf.onrender.com`;
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    deadline: '',
  });


  const { addTask } = useAddTask();
  const { loading, tasks, getTasks } = useGetTasks();

  const handleSubmit = async(event) => {
    event.preventDefault();

    addTask(taskData);
    await getTasks();

    setTaskData({
      title: '',
      description: '',
      deadline: '',
    });


  };

  return (
    <div className="container mt-10">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg shadow-black">
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Task Name:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={taskData.title}
              onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Task Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={taskData.description}
              onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
              Due Date:
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={taskData.deadline}
              onChange={(e) => setTaskData({ ...taskData, deadline: e.target.value })}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Task
            </button>
            <a href="#" className="text-indigo-600 hover:underline">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;

