import useTasks from '../../Hooks/useTasks.ts';
import { arrayMoveImmutable } from 'array-move';
import SortableList, { SortableItem, SortableKnob } from 'react-easy-sort';
import { Bars3Icon } from '@heroicons/react/16/solid';

export default function TaskListSorter() {
	const { tasks, setTasks } = useTasks();

	const onSortEnd = (oldIndex: number, newIndex: number) => {
		setTasks((prev) => arrayMoveImmutable(prev, oldIndex, newIndex));
	};

	return (
		<SortableList
			onSortEnd={onSortEnd}
			lockAxis="y"
			className="select-none divide-y divide-zinc-950/5 dark:divide-white/10"
			draggedItemClassName="dragged"
			autoScroll
		>
			{tasks.map((task) => (
				<SortableItem key={task.id}>
					<div className="flex items-center space-x-2 py-2">
						<SortableKnob>
							<Bars3Icon className="size-5 cursor-grab" />
						</SortableKnob>

						<div>{task.text}</div>
					</div>
				</SortableItem>
			))}
		</SortableList>
	);
}
