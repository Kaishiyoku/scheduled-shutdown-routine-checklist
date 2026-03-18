import {useRef, useState} from 'react';
import useTasks from '../../Hooks/useTasks.ts';
import {Input} from '../Catalyst/input.tsx';
import {Button} from '../Catalyst/button.tsx';

export default function ImportTaskButton() {
	const { setTasks } = useTasks();
	const [importKey, setImportKey] = useState(0);

	const importTaskListInput = useRef<HTMLInputElement>(null);

	const handleImport = async (
		event: React.SyntheticEvent<HTMLInputElement>,
	) => {
		const fileList = event.currentTarget.files;
		const file = fileList?.item(0);

		if (!file) {
			return;
		}

		const fileContents = await file.text();

		setTasks(JSON.parse(fileContents));

		setImportKey((prevState) => (prevState === 0 ? 1 : 0));
	};

	return (
		<>
			<Button type="button" color="light" onClick={() => importTaskListInput.current?.click()}>
				Import task list
			</Button>

			<Input
				ref={importTaskListInput}
				key={importKey}
				type="file"
				id="file"
				name="file"
				onChange={handleImport}
				className="hidden"
			/>
		</>
	);
}
