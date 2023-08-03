import React, { useEffect, useState } from 'react';

const AddTask = () => {
 const host=`https://taskmanagment-ztcf.onrender.com`
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  

  };

  const getTask=async()=>{
    try {
        const response=await fetch(`${host}/api/v1/tasks/getTasks`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        const data = await response.json()
        if(data.status === 200){
            console.log(data.tasks)
        }
    } catch (error) {
        console.log(error)

        
    }
  }

  useEffect(()=>{
    getTask();   
  },[])

  return (
    <div className="container  ">
      <div className="max-w-md  bg-white p-8 rounded-lg shadow-lg shadow-black">
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="taskName" className="block text-gray-700 text-sm font-bold mb-2">Task Name:</label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">Task Description:</label>
            <textarea
              id="taskDescription"
              name="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-900 focus:outline-none focus:border-indigo-500"
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
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
            <a href="#" className="text-indigo-600 hover:underline">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
