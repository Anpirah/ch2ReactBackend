import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Input = () =>{
	const url = 'http://localhost:3000/create';
	const [task, setTask ] = useState("");
	const [newTask, setNewTask] = useState(null);
	const navigate = useNavigate();  //forma eficiente y fluida de redirigir/No recarga pagina, cambia url

	useEffect(()=>{
		if (newTask) {
			axios.post(url, newTask)
				.then(response =>{
					console.log("Task Added Done", response.data);
					setTask("");
					navigate('/');
				})
				.catch(error => {
					console.error ("Error Adding Task", error)
				});
		}
	}, [newTask, navigate, url]);

	const handleAddTask = () =>{
		if(task.trim()){
			setNewTask({title: task});
		}
	};

	return (
		<>
		<input 
				type="text"
				value={task}
				onChange={e => setTask(e.target.value)}
				placeholder = "Add Task..."
		/>
		<button onClick={handleAddTask}>ADD</button>
		</>
	);
};

export default Input;
