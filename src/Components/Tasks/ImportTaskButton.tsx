import { useState } from 'react';
import useTasks from '../../Hooks/useTasks.ts';
import { Input } from '../Catalyst/input.tsx';
import {Field, Label} from '../Catalyst/fieldset.tsx';

export default function ImportTaskButton() {
	const { setTasks } = useTasks();
	const [importKey, setImportKey] = useState(0);

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
		<Field>
			<Label htmlFor="file">
				Import task list
			</Label>

			<Input
				key={importKey}
				type="file"
				id="file"
				name="file"
				onChange={handleImport}
				className="file:mr-4 file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white-700 hover:file:bg-black dark:file:bg-white dark:file:text-black dark:hover:file:bg-zinc-100"
			/>
		</Field>
	);
}
