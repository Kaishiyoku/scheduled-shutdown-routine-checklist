import useTasks from '../../Hooks/useTasks.ts';
import { Button } from '../Catalyst/button.tsx';
import { Input } from '../Catalyst/input.tsx';
import { useState } from 'react';
import {Field, Label} from '../Catalyst/fieldset.tsx';

export default function AddTaskForm() {
	const { addTask } = useTasks();

	const [text, setText] = useState('');

	const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const newTask = addTask(formData.get('text')?.toString() ?? '');

		if (!newTask) {
			return;
		}

		event.currentTarget.reset();
		setText('');
	};

	return (
		<form
			onSubmit={onSubmit}
			className="flex max-sm:flex-col sm:items-end sm:space-x-2 max-sm:space-y-2"
		>
			<Field>
				<Label htmlFor="text">
					Add task
				</Label>

				<Input
					id="text"
					name="text"
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					className="w-full"
					required
				/>
			</Field>

			<Button type="submit" color="light" disabled={text.trim() === ''}>
				Add
			</Button>
		</form>
	);
}
