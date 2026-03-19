import { atom } from 'jotai';
import type { Task } from '../Types/Task';

export const tasksAtom = atom<Task[]>([]);
