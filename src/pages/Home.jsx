import React, { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import Taskcard from '../components/Taskcard';
import TaskCardSkeleton from '../components/TaskCardSkeleton';
import { useGetTasks } from '../hooks/tasks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const host = `https://taskmanagment-ztcf.onrender.com`;

const Home = () => {
  const { loading, tasks, getTasks } = useGetTasks();

  useEffect(() => {
    getTasks(); 
  }, []);


  return (
    <div className="flex flex-col lg:flex-row mx-auto  max-w-1xl p-4">
      <div className="w-full lg:w-1/2 p-4">
        <AddTask />
      </div>
      <div className="w-full lg:w-1/2 p-4 flex-row  ">
        <h2 className="text-lg font-bold mb-4">Tasks</h2>
        {tasks.length ===0 ?(
            <p className="text-lg font-bold mb-4">No Tasks yet</p>
        ):(
            <p className="text-lg font-bold mb-4">Tasks</p>
        )}
        {loading ? (
          <p>
            <TaskCardSkeleton />
          </p>
        ) : (
          <div className=" flex-wrap gap-4">
            {tasks?.map((task, index) => (
              <Taskcard key={index} task={task} className="w-full lg:w-1/2" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
