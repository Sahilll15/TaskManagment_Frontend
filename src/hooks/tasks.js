import { useState } from "react";
import { toast } from "react-toastify";


const host = `https://taskmanagment-ztcf.onrender.com/api/v1/tasks`;

export function useDelete() {

    const [isdeleteLoading, setdeleteisLoading] = useState(false);

    const deleteTask = async (TaskId) => {
        setdeleteisLoading(true);

        try {
            const response = await fetch(`${host}/deleteTask/${TaskId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const responseData = await response.json();
            if (response.ok) {
                toast.success('task deleted successfully');
                setdeleteisLoading(false);
            }
            else {
                toast.error(responseData.msg);
                setdeleteisLoading(false);
                throw new Error(responseData.message);

            }
            setdeleteisLoading(false);

        } catch (error) {
            console.log(error);
            setdeleteisLoading(false);

        }

    }

    return { isdeleteLoading, deleteTask };
}



export function useUpdate() {

    const [isupdateLoading, setIsUpdateLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const updateTask = async (TaskId, task) => {
        setIsUpdateLoading(true);

        try {
            const response = await fetch(`${host}/updateTask/${TaskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    completed: task.completed

                })
            });

            const responseData = await response.json();
            if (response.ok) {
                setData(responseData.post);
                toast.success('task updated successfully');
                setIsUpdateLoading(false);
            }
            else {
                toast.error(responseData.msg);
                setIsUpdateLoading(false);
                throw new Error(responseData.message);

            }
            setIsUpdateLoading(false);



        } catch (error) {
            console.log(error);
            setIsUpdateLoading(false);

        }
    }

    return { isupdateLoading, error, data, updateTask };
}


export function useAddTask() {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const addTask = async (task) => {
        setisLoading(true);
        setError(null);
        try {



            const response = await fetch(`${host}/createTask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,

                }),
            });
            const responseData = await response.json();
            if (response.ok) {
                setData(responseData.post);
                toast.success('task added successfully');
            } else {
                toast.error(responseData.msg);
                throw new Error(responseData.message);

            }
            setisLoading(false);
        } catch (err) {
            setError(err.message);
            setisLoading(false);
        }
    };

    return { isLoading, error, data, addTask };

}



export function useGetTasks() {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/getTasks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (response.ok) {
                setTasks(data.tasks);
                console.log(data.tasks)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return { loading, tasks, getTasks };
}