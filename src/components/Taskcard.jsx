import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useDelete,useUpdate } from '../hooks/tasks';


const TaskCard = ({ task }) => {
  const deadlineDate = new Date(task.deadline).toLocaleDateString();
  const { deleteTask } = useDelete();
  const { updateTask } = useUpdate();

  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = async (TaskId) => {
    await deleteTask(TaskId);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async(TaskId) => {
    setEditing(false);
    setEditedTask(task);
    console.log(editedTask);
    updateTask(TaskId,editedTask);

  };

  const handleCancel = () => {
    setEditing(false);
    setEditedTask(task);
  };

  return (
    <div className='mt-2'>
      <li className={`p-4 border rounded-md shadow-md ${isEditing ? 'border-blue-500' : 'border-gray-300'}`}>
        {isEditing ? (
          <>
            <h3 className="font-medium text-indigo-600 text-xl">Edit Task</h3>
         
            <p className="mt-2 text-gray-700">Title:-</p>
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
              className="block mb-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
             <p className="mt-2 text-gray-700">Description:-</p>
            <textarea
              value={editedTask.description}
              onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
              className="block mb-2 p-2 w-full h-24 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              value={editedTask.deadline}
              onChange={(e) => setEditedTask({ ...editedTask, deadline: e.target.value })}
              className="block mb-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
           <div className="flex items-center">
  <p className="mr-2 text-gray-700">Completed:</p>
  <input
    type="checkbox"
    checked={editedTask.completed} 
    onChange={(e) => setEditedTask({ ...editedTask, completed: e.target.checked })}
    className="inline w-full border rounded-md focus:outline-none focus:border-blue-500"
  />
</div>
          </>
        ) : (
          <>
            <h3 className="font-medium text-indigo-600 text-xl">{task.title}</h3>
            <p className="mt-2 text-gray-700">{task.description}</p>
            <p className="mt-2 text-sm text-gray-500">Deadline: {deadlineDate}</p>
            <span className={`flex w-1/3 rounded-full mt-4 ${task.completed ? 'bg-green-500' : 'bg-red-500'}`}>
              <p className={`ml-5 font-bold ${task.completed ? 'text-white' : 'text-gray-800'}`}>
                {task.completed ? 'Completed' : 'Not Completed'}
              </p>
            </span>
          </>
        )}

        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
              <button
                className="mr-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={()=>handleSave(task._id)}
              >
                Save
              </button>
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="mr-2 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                onClick={handleEdit}
              >
                <AiFillEdit />
              </button>
              <button
                className="text-red-600 hover:text-red-800 focus:outline-none"
                onClick={() => handleDelete(task._id)}
              >
                <AiFillDelete />
              </button>
            </>
          )}
        </div>
      </li>
    </div>
  );
};

export default TaskCard;
