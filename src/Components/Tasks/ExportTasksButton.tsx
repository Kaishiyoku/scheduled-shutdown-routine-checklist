import useTasks from '../../Hooks/useTasks.ts';
import { Button } from '../Catalyst/button.tsx';

export default function ExportTasksButton() {
	const { tasks } = useTasks();

	const handleDownload = () => {
		const file = new Blob([JSON.stringify(tasks, null, 2)], {
			type: 'application/json',
		});

		const downloadElement = document.createElement('a');
		downloadElement.href = URL.createObjectURL(file);
		downloadElement.download =
			'scheduled-shutdown-routine-checklist-tasks.json';
		downloadElement.click();
	};

	return (
		<Button
			type="button"
			color="light"
			disabled={tasks.length === 0}
			onClick={handleDownload}
		>
			Export task list
		</Button>
	);
}
