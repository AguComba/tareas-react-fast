import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } = useContext(TaskContext);

	const handleSubmit = e => {
		e.preventDefault();
		createTask({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<div className="max-w-md mx-auto">
			<form
				className="bg-slate-800 p-10 mb-4 rounded-md"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl mb-3 text-center font-bold text-white">
					Write your tasks
				</h1>
				<input
					type="text"
					value={title}
					placeholder="Escribe tu tarea"
					className="p-3 w-full mb-2"
					onChange={e => setTitle(e.target.value)}
				/>
				<textarea
					placeholder="escribe la descripcion de la tarea"
					value={description}
					className="p-3 w-full mb-2"
					onChange={e => setDescription(e.target.value)}
				></textarea>
				<button className="bg-emerald-400 px-2 py-1 text-white rounded-md">
					Save
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
