import useTasks from '../../Hooks/useTasks.ts';
import { Button } from '../Catalyst/button.tsx';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../Catalyst/table.tsx';
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from '../Catalyst/description-list.tsx';
import { useSetAtom } from 'jotai';
import { deleteTaskAlertAtom } from '../../Stores/deleteTaskAlertAtom.ts';
import type { Task } from '../../Types/Task';
import { Text } from '../Catalyst/text.tsx';

export default function TaskListManager() {
	const { tasks, removeTask } = useTasks();
	const setDeleteTaskAlert = useSetAtom(deleteTaskAlertAtom);

	const onDeleteTask = (task: Task) => () => {
		setDeleteTaskAlert({
			isOpen: true,
			task,
			action: () => removeTask(task.id),
		});
	};

	return (
		<Table dense striped>
			<TableHead>
				<TableRow>
					<TableHeader>Text</TableHeader>
					<TableHeader className="max-sm:hidden">ID</TableHeader>
					<TableHeader className="text-right">Actions</TableHeader>
				</TableRow>
			</TableHead>

			<TableBody>
				{tasks.length === 0 && (
					<TableRow>
						<TableCell colSpan={3}>
							<Text>No tasks added yet. Add some tasks to get started.</Text>
						</TableCell>
					</TableRow>
				)}

				{tasks.map((task) => (
					<TableRow key={task.id}>
						<TableCell>
							<div className="max-sm:hidden">{task.text}</div>

							<DescriptionList className="sm:hidden">
								<DescriptionTerm>ID</DescriptionTerm>
								<DescriptionDetails>{task.id}</DescriptionDetails>

								<DescriptionTerm>Text</DescriptionTerm>
								<DescriptionDetails>{task.text}</DescriptionDetails>
							</DescriptionList>
						</TableCell>
						<TableCell className="max-sm:hidden">{task.id}</TableCell>
						<TableCell className="text-right">
							<Button type="button" color="light" onClick={onDeleteTask(task)}>
								Delete
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
