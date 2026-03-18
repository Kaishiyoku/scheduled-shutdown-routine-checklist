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
import {DescriptionDetails, DescriptionList, DescriptionTerm} from '../Catalyst/description-list.tsx';

export default function TaskListManager() {
	const { tasks, removeTask } = useTasks();

	const onDeleteTask = (id: string) => () => removeTask(id);

	return (
		<Table dense striped>
			<TableHead>
				<TableRow>
					<TableHeader className="max-sm:hidden">ID</TableHeader>
					<TableHeader>Text</TableHeader>
					<TableHeader className="text-right">Actions</TableHeader>
				</TableRow>
			</TableHead>

			<TableBody>
				{tasks.map((task) => (
					<TableRow key={task.id}>
						<TableCell className="max-sm:hidden">{task.id}</TableCell>
						<TableCell>
                            <div className="max-sm:hidden">{task.text}</div>

                            <DescriptionList className="sm:hidden">
                                <DescriptionTerm>ID</DescriptionTerm>
                                <DescriptionDetails>{task.id}</DescriptionDetails>

                                <DescriptionTerm>Text</DescriptionTerm>
                                <DescriptionDetails>{task.text}</DescriptionDetails>
                            </DescriptionList>
                        </TableCell>
						<TableCell className="text-right">
							<Button
								type="button"
								color="light"
								onClick={onDeleteTask(task.id)}
							>
								Delete
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
