import useTasks from '../Hooks/useTasks.ts';
import {
	Checkbox,
	CheckboxField,
	CheckboxGroup,
} from '../Components/Catalyst/checkbox.tsx';
import { Label } from '../Components/Catalyst/fieldset.tsx';
import { useEffect, useState } from 'react';
import {
	Dialog,
	DialogActions,
	DialogDescription,
	DialogTitle,
} from '../Components/Catalyst/dialog.tsx';
import { Button } from '../Components/Catalyst/button.tsx';

export default function HomePage() {
	const { tasks } = useTasks();
	const [isFinished, setIsFinished] = useState(false);
	const [isFinishedDialogOpen, setIsFinishedDialogOpen] = useState(false);
	const [checkedTaskIds, setCheckedTaskIds] = useState<string[]>([]);

	useEffect(() => {
		if (checkedTaskIds.length > 0 && checkedTaskIds.length === tasks.length) {
			setIsFinished(true);
			setIsFinishedDialogOpen(true);
		}
	}, [checkedTaskIds, tasks]);

	const onCheckboxChange = (taskId: string) => (checked: boolean) => {
		if (checked) {
			setCheckedTaskIds((prev) => [...prev, taskId]);
		} else {
			setCheckedTaskIds((prev) => prev.filter((id) => id !== taskId));
		}
	};

	const onCheckboxKeyDown = (
		event: React.KeyboardEvent<HTMLSpanElement>,
		taskId: string,
	) => {
		if (event.key === 'Enter') {
			onCheckboxChange(taskId)(!checkedTaskIds.includes(taskId));
		}
	};

	const onCloseFinishedDialog = () => {
		setIsFinishedDialogOpen(false);
	};

	return (
		<>
			<div className="prose dark:prose-invert pb-8">
				<h1>Scheduled shutdown routine checklist</h1>
			</div>

			<div className="pt-8">
				{tasks.length === 0 && (
					<div className="border border-zinc-950/5 dark:border-white/10 rounded-md p-4 text-center space-y-4">
						<div>No tasks added yet. Add some tasks to get started.</div>

						<Button href="/tasks" outline className="mt-4">
							Manage tasks
						</Button>
					</div>
				)}

				<CheckboxGroup>
					{tasks.map((task) => (
						<CheckboxField
							key={task.id}
							disabled={isFinished}
							className="even:bg-zinc-950/2.5 dark:even:bg-white/2.5 has-checked:*:text-zinc-500 dark:has-checked:*:text-zinc-400 border border-transparent hover:border-zinc-500 has-active:border-zinc-500 has-focus:border-zinc-500 px-2 py-1 rounded-md transition ease-out"
						>
							<Checkbox
								name={`task-${task.id}`}
								value={`task-${task.id}`}
								color="dark/white"
								checked={checkedTaskIds.includes(task.id)}
								onChange={onCheckboxChange(task.id)}
								onKeyDown={(event) => onCheckboxKeyDown(event, task.id)}
							/>
							<Label>{task.text}</Label>
						</CheckboxField>
					))}
				</CheckboxGroup>
			</div>

			<Dialog open={isFinishedDialogOpen} onClose={onCloseFinishedDialog}>
				<DialogTitle>Scheduled shutdown routine checklist complete</DialogTitle>

				<DialogDescription>
					You completed the scheduled shutdown routine checklist. Have a nice
					day.
				</DialogDescription>

				<DialogActions>
					<Button type="button" onClick={onCloseFinishedDialog} plain>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
