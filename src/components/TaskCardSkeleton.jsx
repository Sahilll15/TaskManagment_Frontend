import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const TaskCardSkeleton = () => {
  return (
    <div>
      <li className="p-4 border rounded-md animate-pulse">
        {/* Background divs */}
        <div className="h-6 w-1/3 bg-gray-600 mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-600 mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-600"></div>
        
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

export default TaskCardSkeleton;
