import { Alert, AlertActions, AlertTitle } from '../Catalyst/alert.tsx';
import { Button } from '../Catalyst/button.tsx';
import { useAtom } from 'jotai';
import { deleteTaskAlertAtom } from '../../Stores/deleteTaskAlertAtom.ts';
import {
	DescriptionDetails,
	DescriptionList,
	DescriptionTerm,
} from '../Catalyst/description-list.tsx';
import { useEffect, useState } from 'react';
import type { Task } from '../../Types/Task';

export default function DeleteTaskAlert() {
	const [value, setValue] = useAtom(deleteTaskAlertAtom);
	const [task, setTask] = useState<Task | null>(null);

	useEffect(() => {
		if (!value.task) {
			return;
		}

		setTask(value.task);
	}, [value]);

	const handleClose = () => {
		setValue({
			isOpen: false,
			task: null,
			action: () => {},
		});
	};

	const handleRemove = () => {
		value.action();

		handleClose();
	};

	return (
		<Alert open={value.isOpen} onClose={handleClose}>
			<AlertTitle>Are you sure you want to remove this task?</AlertTitle>

			<DescriptionList>
				<DescriptionTerm>ID</DescriptionTerm>
				<DescriptionDetails>{task?.id}</DescriptionDetails>

				<DescriptionTerm>Text</DescriptionTerm>
				<DescriptionDetails>{task?.text}</DescriptionDetails>
			</DescriptionList>

			<AlertActions>
				<Button plain onClick={handleClose}>
					Cancel
				</Button>

				<Button color="red" onClick={handleRemove}>
					Remove task
				</Button>
			</AlertActions>
		</Alert>
	);
}
