import { atom } from 'jotai';
import type { Task } from '../Types/Task';

type DeleteTaskAlertAtomProps = {
	isOpen: boolean;
	task: Task | null;
	action: () => void;
};

export const deleteTaskAlertAtom = atom<DeleteTaskAlertAtomProps>({
	isOpen: false,
	task: null,
	action: () => {},
});
