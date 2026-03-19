import useTasks from '../../Hooks/useTasks.ts';
import { Button } from '../Catalyst/button.tsx';

type SortTasksButtonProps = {
	isSorting: boolean;
	onClick: () => void;
};

export default function SortTasksButton({
	isSorting,
	onClick,
}: SortTasksButtonProps) {
	const { tasks } = useTasks();

	return (
		<Button
			type="button"
			color={isSorting ? 'dark/white' : 'light'}
			onClick={onClick}
			disabled={tasks.length === 0}
		>
			{isSorting ? 'Finish sorting tasks' : 'Start sorting tasks'}
		</Button>
	);
}
