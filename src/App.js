import React, { useState, useEffect } from 'react';
import AddTask from './pages/AddTask';
import Taskcard from './components/Taskcard';
import TaskCardSkeleton from './components/TaskCardSkeleton';
const host = `https://taskmanagment-ztcf.onrender.com`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [loading, setLoading] = useState(true); // Added loading state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !deadline) return;

    const newTask = {
      title,
      description,
      deadline,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  const getTask = async () => {
    try {
      const response = await fetch(`${host}/api/v1/tasks/getTasks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      if (response.ok) {
        setTasks(data.tasks);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false whether the request succeeds or fails
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-3xl p-4">
      <div className="w-full lg:w-1/2 p-4">
        <AddTask />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-lg font-bold mb-4">Tasks</h2>
        {loading ? (
          <p>
            <TaskCardSkeleton />
          </p> // Show loading message or spinner while loading
        ) : (
          <ul className="space-y-4">
            {tasks?.map((task, index) => (
              <Taskcard key={index} task={task} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
