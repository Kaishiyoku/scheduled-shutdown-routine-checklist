import AddTaskForm from '../Components/Tasks/AddTaskForm.tsx';
import TaskListManager from '../Components/Tasks/TaskListManager.tsx';
import ImportTaskButton from '../Components/Tasks/ImportTaskButton.tsx';
import ExportTasksButton from '../Components/Tasks/ExportTasksButton.tsx';
import { Divider } from '../Components/Catalyst/divider.tsx';

export default function ManageTasksPage() {
	return (
		<>
			<div className="prose dark:prose-invert pb-8">
				<h1>Scheduled shutdown routine checklist</h1>
			</div>

			<div className="space-y-8">
				<div className="flex max-sm:flex-col sm:items-end sm:space-x-4 max-sm:space-y-4">
					<AddTaskForm />

					<ImportTaskButton />

					<ExportTasksButton />
				</div>

				<Divider />

				<TaskListManager />
			</div>
		</>
	);
}
