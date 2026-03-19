import AddTaskForm from '../Components/Tasks/AddTaskForm.tsx';
import TaskListManager from '../Components/Tasks/TaskListManager.tsx';
import ImportTaskButton from '../Components/Tasks/ImportTaskButton.tsx';
import ExportTasksButton from '../Components/Tasks/ExportTasksButton.tsx';
import { Divider } from '../Components/Catalyst/divider.tsx';
import { Button } from '../Components/Catalyst/button.tsx';
import { useState } from 'react';
import TaskListSorter from '../Components/Tasks/TaskListSorter.tsx';
import SortTasksButton from '../Components/Tasks/SortTasksButton.tsx';

export default function ManageTasksPage() {
	const [isSorting, setIsSorting] = useState(false);

	const onSortClick = () => {
		setIsSorting((prev) => !prev);
	};

	return (
		<>
			<div className="prose dark:prose-invert pb-8">
				<h1>Scheduled shutdown routine checklist</h1>
			</div>

			<div className="space-y-8">
				<div className="flex max-sm:flex-col sm:items-end sm:space-x-4 max-sm:space-y-4">
					<AddTaskForm disabled={isSorting} />

					<ImportTaskButton disabled={isSorting} />

					<ExportTasksButton disabled={isSorting} />

					<SortTasksButton isSorting={isSorting} onClick={onSortClick} />
				</div>

				<Divider />

				{isSorting ? <TaskListSorter /> : <TaskListManager />}
			</div>
		</>
	);
}
