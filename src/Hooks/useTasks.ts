import type { Task } from '../Types/Task';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { tasksAtom } from '../Stores/tasksAtom.ts';
import slug from 'slug';

export default function useTasks() {
	const [tasksLoaded, setTasksLoaded] = useState(false);
	const [tasks, setTasks] = useAtom(tasksAtom);

	useEffect(() => {
		setTasks(loadTasks());
		setTasksLoaded(true);
	}, []);

	useEffect(() => {
		if (!tasksLoaded) {
			return;
		}
		persistTasks(tasks);
	}, [tasks, tasksLoaded]);

	const addTask = (text: string): Task | null => {
		const trimmedText = text.trim();

		if (trimmedText === '') {
			return null;
		}

		const id = slug(trimmedText);

		if (tasks.find((task) => task.id === id)) {
			return null;
		}

		const newTask = { id, text: trimmedText };

		setTasks([...tasks, newTask]);

		return newTask;
	};

	const removeTask = (id: string) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return {
		tasks,
		addTask,
		removeTask,
		setTasks,
	};
}

function loadTasks(): Task[] {
	const prevStorage = localStorage.getItem('tasks');

	return prevStorage ? JSON.parse(prevStorage) : [];
}

function persistTasks(tasks: Task[]): void {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}
