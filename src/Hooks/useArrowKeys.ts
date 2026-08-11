import { useState } from 'react';

export default function useArrowKeys(selector: string) {
	const [currentIndex, setCurrentIndex] = useState(-1);

	const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
		const groupElement = event.currentTarget;

		const children = groupElement.querySelectorAll<HTMLElement>(selector);

		const nextIndex =
			event.key === 'ArrowUp'
				? currentIndex === 0
					? children.length - 1
					: currentIndex - 1
				: event.key === 'ArrowDown'
					? currentIndex === children.length - 1
						? 0
						: currentIndex + 1
					: ['Home', 'PageUp'].includes(event.key)
						? 0
						: ['End', 'PageDown'].includes(event.key)
							? children.length - 1
							: null;

		if (nextIndex === null) {
			return;
		}

		children.item(nextIndex).focus();
	};

	const onChildFocus = (index: number) => () => {
		setCurrentIndex(index);
	};

	return {
		onKeyDown,
		onChildFocus,
	};
}
