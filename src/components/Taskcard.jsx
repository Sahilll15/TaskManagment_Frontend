import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const TaskCard = ({ task }) => {
    const deadlineDate = new Date(task.deadline).toLocaleDateString();
  return (
    <div>
      <li className="p-4 border rounded-md shadow-md">
        <h3 className="font-medium text-indigo-600 text-xl">{task.title}</h3>
        <p className="mt-2 text-gray-700">{task.description}</p>
        <p className="mt-2 text-sm text-gray-500">Deadline: {deadlineDate}</p>
        <div className="flex justify-end mt-4">
          <button className="mr-2 text-indigo-600 hover:text-indigo-800">
            <AiFillEdit />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <AiFillDelete />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskCard;
