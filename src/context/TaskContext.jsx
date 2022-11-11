import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTask] = useState([]);

	useEffect(() => {
		setTask(data);
	}, []);

	function createTask(task) {
		setTask([
			...tasks,
			{
				id: tasks.length,
				title: task.title,
				description: task.description,
			},
		]);
	}

	function deleteTask(id) {
		const taskFiltered = tasks.filter(t => t.id !== id);
		setTask(taskFiltered);
	}
	return (
		<TaskContext.Provider
			value={{
				tasks,
				createTask,
				deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
