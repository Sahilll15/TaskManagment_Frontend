import React from 'react'

const Task = () => {
    const tasks = [
        {
            title: 'Task 1',
            description: 'This is the first task',
            deadline: '2021-10-01'
        },
        {
            title: 'Task 2',
            description: 'This is the second task',
            deadline: '2021-10-02'
        },
        {
            title: 'Task 3',
            description: 'This is the third task',
            deadline: '2021-10-03'
        },
    ]
  return (
    <div className="w-full lg:w-1/2 ">
    <h2 className="text-lg font-bold mb-4">Tasks</h2>
    <ul className="space-y-4">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border rounded-md shadow-md">
          <h3 className="font-medium text-indigo-600">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
        </li>
      ))}
    </ul>
  </div>

  )
}

export default Task