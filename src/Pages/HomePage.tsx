import useTasks from '../Hooks/useTasks.ts';
import {Checkbox, CheckboxField, CheckboxGroup} from '../Components/Catalyst/checkbox.tsx';
import {Label} from '../Components/Catalyst/fieldset.tsx';

export default function HomePage() {
	const { tasks } = useTasks();

	return (
		<>
			<div className="prose dark:prose-invert pb-8">
				<h1>Scheduled shutdown routine checklist</h1>
			</div>

			<div className="pt-8">
				<CheckboxGroup>
					{tasks.map((task) => (
						<CheckboxField key={task.id} className="even:bg-zinc-950/2.5 dark:even:bg-white/2.5">
							<Checkbox name={`task-${task.id}`} value={`task-${task.id}`} color="dark/white" />
							<Label>{task.text}</Label>
						</CheckboxField>
					))}
				</CheckboxGroup>
			</div>
		</>
	);
}
